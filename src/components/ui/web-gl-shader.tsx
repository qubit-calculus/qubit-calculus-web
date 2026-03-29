import { useEffect, useRef } from "react"

const VERT = `attribute vec2 a_pos;void main(){gl_Position=vec4(a_pos,0,1);}`

const FRAG = `
precision mediump float;
uniform vec2 u_res;
uniform float u_time;
void main(){
  vec2 p=(gl_FragCoord.xy*2.0-u_res)/min(u_res.x,u_res.y);
  float d=length(p)*0.07;
  float r=0.05/abs(p.y+sin((p.x*(1.0+d)+u_time)*1.0)*0.65);
  float g=0.05/abs(p.y+sin((p.x+u_time)*1.0)*0.65);
  float b=0.05/abs(p.y+sin((p.x*(1.0-d)+u_time)*1.0)*0.65);
  gl_FragColor=vec4(
    (vec3(0.388,0.4,0.945)*r+vec3(0.231,0.51,0.965)*g+vec3(0.024,0.714,0.831)*b)*0.9,
    1.0);
}`

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!
  gl.shaderSource(s, src)
  gl.compileShader(s)
  return s
}

export function WebGLShader() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const c = ref.current
    if (!c) return

    const gl = c.getContext("webgl", { alpha: false, antialias: false, depth: false, stencil: false, preserveDrawingBuffer: false })
    if (!gl) return

    const prog = gl.createProgram()!
    gl.attachShader(prog, compile(gl, gl.VERTEX_SHADER, VERT))
    gl.attachShader(prog, compile(gl, gl.FRAGMENT_SHADER, FRAG))
    gl.linkProgram(prog)
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,1]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(prog, "a_pos")
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

    const uRes = gl.getUniformLocation(prog, "u_res")
    const uTime = gl.getUniformLocation(prog, "u_time")

    let w = 0, h = 0
    const resize = () => {
      const dpr = Math.min(devicePixelRatio, 2)
      const nw = c.clientWidth * dpr | 0
      const nh = c.clientHeight * dpr | 0
      if (nw === w && nh === h) return
      w = nw; h = nh
      c.width = w; c.height = h
      gl.viewport(0, 0, w, h)
      gl.uniform2f(uRes, w, h)
    }
    resize()

    let t = 0, id: number
    const tick = () => {
      id = requestAnimationFrame(tick)
      t += 0.005
      gl.uniform1f(uTime, t)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    }
    id = requestAnimationFrame(tick)
    addEventListener("resize", resize)

    return () => {
      cancelAnimationFrame(id)
      removeEventListener("resize", resize)
      gl.deleteProgram(prog)
      gl.deleteBuffer(buf)
    }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" />
}
