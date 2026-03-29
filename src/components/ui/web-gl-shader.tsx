import { useEffect, useRef } from "react"
import * as THREE from "three"

export function WebGLShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<{
    scene: THREE.Scene | null
    camera: THREE.OrthographicCamera | null
    renderer: THREE.WebGLRenderer | null
    mesh: THREE.Mesh | null
    uniforms: Record<string, THREE.IUniform> | null
    animationId: number | null
  }>({
    scene: null,
    camera: null,
    renderer: null,
    mesh: null,
    uniforms: null,
    animationId: null,
  })

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const { current: refs } = sceneRef

    // Cap pixel ratio: 1 on mobile, max 1.5 on desktop — saves massive GPU fill rate
    const isMobile = window.matchMedia("(max-width: 768px)").matches
    const dpr = isMobile ? 1 : Math.min(window.devicePixelRatio, 1.5)

    // Use mediump on mobile for cheaper shader math
    const precision = isMobile ? "mediump" : "highp"

    const vertexShader = `
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `

    const fragmentShader = `
      precision ${precision} float;
      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

        float d = length(p) * distortion;

        float rx = p.x * (1.0 + d);
        float gx = p.x;
        float bx = p.x * (1.0 - d);

        float r = 0.05 / abs(p.y + sin((rx + time) * xScale) * yScale);
        float g = 0.05 / abs(p.y + sin((gx + time) * xScale) * yScale);
        float b = 0.05 / abs(p.y + sin((bx + time) * xScale) * yScale);

        vec3 indigo = vec3(0.388, 0.4, 0.945);
        vec3 blue   = vec3(0.231, 0.51, 0.965);
        vec3 cyan   = vec3(0.024, 0.714, 0.831);

        gl_FragColor = vec4(indigo * r + blue * g + cyan * b, 1.0);
      }
    `

    const initScene = () => {
      refs.scene = new THREE.Scene()
      refs.renderer = new THREE.WebGLRenderer({ canvas, powerPreference: "low-power", antialias: false })
      refs.renderer.setPixelRatio(dpr)
      refs.renderer.setClearColor(0x000000)

      refs.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, -1)

      refs.uniforms = {
        resolution: { value: [0, 0] },
        time: { value: 0.0 },
        xScale: { value: 1.0 },
        yScale: { value: 0.5 },
        distortion: { value: 0.05 },
      }

      const geo = new THREE.BufferGeometry()
      geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array([
        -1, -1, 0,  1, -1, 0,  -1, 1, 0,
         1, -1, 0, -1,  1, 0,   1, 1, 0,
      ]), 3))

      refs.mesh = new THREE.Mesh(geo, new THREE.RawShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: refs.uniforms,
        side: THREE.DoubleSide,
      }))
      refs.scene.add(refs.mesh)
      handleResize()
    }

    // Throttle to ~30fps on mobile, 60fps on desktop
    const interval = isMobile ? 33 : 16
    let lastFrame = 0

    const animate = (now: number) => {
      refs.animationId = requestAnimationFrame(animate)
      if (now - lastFrame < interval) return
      lastFrame = now

      if (refs.uniforms) refs.uniforms.time.value += 0.01
      if (refs.renderer && refs.scene && refs.camera) {
        refs.renderer.render(refs.scene, refs.camera)
      }
    }

    // Debounce resize to avoid layout thrashing
    let resizeTimer: ReturnType<typeof setTimeout>
    const handleResize = () => {
      if (!refs.renderer || !refs.uniforms) return
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      refs.renderer.setSize(w, h, false)
      refs.uniforms.resolution.value = [w * dpr, h * dpr]
    }
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(handleResize, 150)
    }

    // Pause when hero scrolls out of view
    let visible = true
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible && !refs.animationId) {
        refs.animationId = requestAnimationFrame(animate)
      }
    }, { threshold: 0 })
    observer.observe(canvas)

    const gatedAnimate = (now: number) => {
      if (!visible) {
        refs.animationId = null
        return
      }
      refs.animationId = requestAnimationFrame(gatedAnimate)
      if (now - lastFrame < interval) return
      lastFrame = now

      if (refs.uniforms) refs.uniforms.time.value += 0.01
      if (refs.renderer && refs.scene && refs.camera) {
        refs.renderer.render(refs.scene, refs.camera)
      }
    }

    initScene()
    refs.animationId = requestAnimationFrame(gatedAnimate)
    window.addEventListener("resize", onResize)

    return () => {
      if (refs.animationId) cancelAnimationFrame(refs.animationId)
      clearTimeout(resizeTimer)
      window.removeEventListener("resize", onResize)
      observer.disconnect()
      if (refs.mesh) {
        refs.scene?.remove(refs.mesh)
        refs.mesh.geometry.dispose()
        if (refs.mesh.material instanceof THREE.Material) refs.mesh.material.dispose()
      }
      refs.renderer?.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full block"
    />
  )
}
