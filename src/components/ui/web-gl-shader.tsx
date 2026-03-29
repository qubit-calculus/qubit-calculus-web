import { useEffect, useRef } from "react"
import * as THREE from "three"

export function WebGLShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000)

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, -1)
    const scene = new THREE.Scene()

    const uniforms = {
      resolution: { value: new THREE.Vector2() },
      time: { value: 0.0 },
      xScale: { value: 1.0 },
      yScale: { value: 0.65 },
      distortion: { value: 0.07 },
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array([
      -1, -1, 0,  1, -1, 0,  -1, 1, 0,
       1, -1, 0, -1,  1, 0,   1, 1, 0,
    ]), 3))

    const mesh = new THREE.Mesh(geo, new THREE.RawShaderMaterial({
      vertexShader: `
        attribute vec3 position;
        void main() { gl_Position = vec4(position, 1.0); }
      `,
      fragmentShader: `
        precision highp float;
        uniform vec2 resolution;
        uniform float time;
        uniform float xScale;
        uniform float yScale;
        uniform float distortion;

        void main() {
          vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
          float d = length(p) * distortion;
          float r = 0.05 / abs(p.y + sin((p.x * (1.0 + d) + time) * xScale) * yScale);
          float g = 0.05 / abs(p.y + sin((p.x + time) * xScale) * yScale);
          float b = 0.05 / abs(p.y + sin((p.x * (1.0 - d) + time) * xScale) * yScale);
          gl_FragColor = vec4(
            (vec3(0.388, 0.4, 0.945) * r +
             vec3(0.231, 0.51, 0.965) * g +
             vec3(0.024, 0.714, 0.831) * b) * 0.9,
            1.0
          );
        }
      `,
      uniforms,
      side: THREE.DoubleSide,
    }))
    scene.add(mesh)

    const resize = () => {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      renderer.setSize(w, h, false)
      uniforms.resolution.value.set(w * renderer.getPixelRatio(), h * renderer.getPixelRatio())
    }
    resize()

    let id: number
    const tick = () => {
      id = requestAnimationFrame(tick)
      uniforms.time.value += 0.005
      renderer.render(scene, camera)
    }
    id = requestAnimationFrame(tick)

    window.addEventListener("resize", resize)

    return () => {
      cancelAnimationFrame(id)
      window.removeEventListener("resize", resize)
      scene.remove(mesh)
      geo.dispose()
      ;(mesh.material as THREE.Material).dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full block pointer-events-none"
      style={{ willChange: "contents" }}
    />
  )
}
