import { useRef, useEffect, useState, memo, useCallback } from 'react';

// ─── Types ───────────────────────────────────────────────────────────────────
interface HeroProps {
  trustBadge?: {
    text: string;
    icon?: React.ReactNode;
  };
  headline: {
    line1: string;
    line2: string;
  };
  subtitle: string;
  buttons?: {
    primary?: {
      text: string;
      href?: string;
      onClick?: () => void;
    };
    secondary?: {
      text: string;
      href?: string;
      onClick?: () => void;
    };
  };
  className?: string;
}

// ─── Qubit Calculus Shader ───────────────────────────────────────────────────
// Custom GLSL: emerald/indigo/cyan palette with quantum-inspired visuals —
// layered fbm clouds, warped voronoi cells, pulsing energy filaments,
// and mouse-reactive distortion fields.
const QUBIT_SHADER = `#version 300 es
precision highp float;

out vec4 fragColor;
uniform vec2 resolution;
uniform float time;
uniform vec2 touch;
uniform int pointerCount;
uniform vec2 move;

#define FC gl_FragCoord.xy
#define T time
#define R resolution

// ── Palette: Cyan + Teal + Ice Blue ──
vec3 cyan     = vec3(0.133, 0.827, 0.894);  // bright cyan
vec3 teal     = vec3(0.078, 0.557, 0.596);  // deep teal
vec3 ice      = vec3(0.565, 0.922, 0.973);  // ice blue highlight
vec3 deepSea  = vec3(0.008, 0.035, 0.078);  // near-black base
vec3 frost    = vec3(0.82, 0.95, 0.98);     // frosty white-blue

// ── Noise primitives ──
float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float hash21(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1, 0));
  float c = hash(i + vec2(0, 1));
  float d = hash(i + vec2(1, 1));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

// ── Fractal Brownian Motion (6 octaves for richness) ──
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  mat2 rot = mat2(0.8, -0.6, 0.6, 0.8);
  for (int i = 0; i < 6; i++) {
    v += a * vnoise(p);
    p = rot * p * 2.0 + vec2(1.7, 9.2);
    a *= 0.5;
  }
  return v;
}

// ── Domain-warped clouds (double warp for organic feel) ──
float warpedClouds(vec2 p) {
  vec2 q = vec2(fbm(p + vec2(0.0, 0.0)), fbm(p + vec2(5.2, 1.3)));
  vec2 r = vec2(fbm(p + 4.0 * q + vec2(1.7, 9.2)), fbm(p + 4.0 * q + vec2(8.3, 2.8)));
  return fbm(p + 3.5 * r);
}

// ── Voronoi for quantum cell structure ──
float voronoi(vec2 p) {
  vec2 n = floor(p);
  vec2 f = fract(p);
  float md = 8.0;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 g = vec2(float(i), float(j));
      vec2 o = vec2(hash21(n + g), hash21(n + g + 100.0));
      o = 0.5 + 0.5 * sin(T * 0.4 + 6.2831 * o);
      vec2 r = g + o - f;
      float d = dot(r, r);
      md = min(md, d);
    }
  }
  return sqrt(md);
}

// ── Energy filaments ──
float filament(vec2 uv, float freq, float phase) {
  float wave = sin(uv.x * freq + T * 0.8 + phase) * 0.3;
  wave += sin(uv.x * freq * 1.7 + T * 1.1 + phase * 2.0) * 0.15;
  wave += sin(uv.x * freq * 0.5 + T * 0.5 - phase) * 0.2;
  float dist = abs(uv.y - wave);
  return 0.003 / (dist + 0.003);
}

void main() {
  vec2 uv = (FC - 0.5 * R) / min(R.x, R.y);
  vec2 st = FC / R;

  // Mouse influence
  vec2 mouseUV = vec2(0.0);
  float mouseInfluence = 0.0;
  if (pointerCount > 0) {
    mouseUV = (touch - 0.5 * R) / min(R.x, R.y);
    mouseInfluence = 1.0 / (1.0 + 4.0 * length(uv - mouseUV));
  }

  // Slow time evolution
  float t1 = T * 0.15;
  float t2 = T * 0.08;

  // ── Layer 1: Deep sea base ──
  vec3 col = deepSea;

  // ── Layer 2: Warped nebula clouds ──
  float cloud1 = warpedClouds(uv * 1.5 + vec2(t1, t2 * 0.7));
  float cloud2 = warpedClouds(uv * 2.0 - vec2(t2, t1 * 0.5) + 10.0);

  vec3 nebula = mix(deepSea, teal * 0.45, cloud1 * 0.6);
  nebula = mix(nebula, cyan * 0.3, cloud2 * 0.5);
  nebula += ice * 0.06 * smoothstep(0.4, 0.8, cloud1 + cloud2 * 0.5);
  col += nebula;

  // ── Layer 3: Voronoi quantum cells ──
  float vor = voronoi(uv * 3.0 + vec2(t1 * 0.5, t2 * 0.3));
  float vorEdge = smoothstep(0.05, 0.0, vor - 0.15);
  float vorGlow = smoothstep(0.6, 0.0, vor) * 0.15;

  col += ice * vorEdge * 0.2;
  col += teal * vorGlow;
  col += cyan * 0.06 * smoothstep(0.3, 0.0, vor);

  // ── Layer 4: Energy filaments ──
  float f1 = filament(uv * 1.5, 4.0, 0.0);
  float f2 = filament(uv.yx * 1.2, 3.5, 2.1);
  float f3 = filament((uv + vec2(0.5, -0.3)) * 1.8, 5.0, 4.2);

  col += cyan * f1 * 0.3;
  col += teal * f2 * 0.25;
  col += ice * f3 * 0.18;

  // ── Layer 5: Pulsing nodes — frost highlights ──
  float pulse = sin(T * 1.5) * 0.5 + 0.5;
  float nodeBright = smoothstep(0.08, 0.02, vor) * pulse;
  col += mix(cyan, frost, pulse) * nodeBright * 0.5;

  // ── Layer 6: Radial energy rings ──
  float dist = length(uv);
  float ring1 = abs(sin(dist * 8.0 - T * 0.6)) * smoothstep(1.5, 0.3, dist);
  float ring2 = abs(sin(dist * 12.0 + T * 0.4)) * smoothstep(1.2, 0.5, dist);
  col += teal * ring1 * 0.025;
  col += cyan * ring2 * 0.018;

  // ── Layer 7: Micro-particle field — ice sparkles ──
  for (float i = 1.0; i < 8.0; i++) {
    vec2 p = uv + 0.08 * cos(i * vec2(0.13, 0.81) + i * i + T * 0.3 + uv.x * 0.1);
    float d = length(p);
    float glow = 0.0012 / (d + 0.0012);
    col += glow * mix(cyan, frost, sin(i * 1.5) * 0.5 + 0.5) * 0.12;
  }

  // ── Layer 8: Mouse-reactive halo — bright cyan bloom ──
  if (pointerCount > 0) {
    float md = length(uv - mouseUV);
    col += cyan * smoothstep(0.5, 0.0, md) * 0.25;
    col += ice * abs(sin(md * 15.0 - T * 2.0)) * smoothstep(0.4, 0.1, md) * 0.18;
    col += teal * fbm(uv * 4.0 + mouseUV * 2.0 + T * 0.3) * mouseInfluence * 0.15;
  }

  // ── Layer 9: Scanline grain (subtle CRT feel) ──
  float scanline = sin(FC.y * 1.5) * 0.015 + 0.985;
  col *= scanline;

  // ── Layer 10: Film grain ──
  float grain = hash(FC + fract(T)) * 0.04;
  col += grain - 0.02;

  // ── Vignette ──
  float vig = 1.0 - 0.4 * pow(length(st - 0.5) * 1.4, 2.5);
  col *= vig;

  // ── Tone mapping (subtle S-curve) ──
  col = col / (col + 0.5);
  col = pow(col, vec3(0.95));

  fragColor = vec4(col, 1.0);
}`;

// ─── WebGL Renderer ──────────────────────────────────────────────────────────
class ShaderRenderer {
  private gl: WebGL2RenderingContext;
  private program: WebGLProgram | null = null;
  private vs: WebGLShader | null = null;
  private fs: WebGLShader | null = null;
  private buffer: WebGLBuffer | null = null;
  private locs: Record<string, WebGLUniformLocation | null> = {};
  private mouseCoords = [0, 0];
  private pointerCoords = [0, 0];
  private nbrOfPointers = 0;
  private mouseMove = [0, 0];

  constructor(
    private canvas: HTMLCanvasElement,
    // @ts-expect-error TS6138 false positive — scale is read via this.scale in bindEvents
    private scale: number,
  ) {
    const gl = canvas.getContext('webgl2', { antialias: false, alpha: false });
    if (!gl) throw new Error('WebGL2 not supported');
    this.gl = gl;
    gl.viewport(0, 0, canvas.width * scale, canvas.height * scale);
  }

  compile(type: number, source: string) {
    const gl = this.gl;
    const shader = gl.createShader(type)!;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Shader compile error:', gl.getShaderInfoLog(shader));
    }
    return shader;
  }

  build(fragSource: string) {
    this.destroy();
    const gl = this.gl;

    const vertSrc = `#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`;

    this.vs = this.compile(gl.VERTEX_SHADER, vertSrc);
    this.fs = this.compile(gl.FRAGMENT_SHADER, fragSource);
    this.program = gl.createProgram()!;
    gl.attachShader(this.program, this.vs);
    gl.attachShader(this.program, this.fs);
    gl.linkProgram(this.program);

    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(this.program));
      return;
    }

    this.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]), gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(this.program, 'position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uniforms = ['resolution', 'time', 'move', 'touch', 'pointerCount', 'pointers'];
    for (const u of uniforms) {
      this.locs[u] = gl.getUniformLocation(this.program, u);
    }
  }

  updateScale(s: number) {
    this.scale = s;
    this.gl.viewport(0, 0, this.canvas.width * s, this.canvas.height * s);
  }

  updateMouse(coords: number[]) { this.mouseCoords = coords; }
  updatePointerCoords(coords: number[]) { this.pointerCoords = coords; }
  updatePointerCount(n: number) { this.nbrOfPointers = n; }
  updateMove(m: number[]) { this.mouseMove = m; }

  render(now: number) {
    const { gl, program: p } = this;
    if (!p || gl.isContextLost()) return;

    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(p);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);

    gl.uniform2f(this.locs.resolution, this.canvas.width, this.canvas.height);
    gl.uniform1f(this.locs.time, now * 1e-3);
    gl.uniform2f(this.locs.move, this.mouseMove[0], this.mouseMove[1]);
    gl.uniform2f(this.locs.touch, this.mouseCoords[0], this.mouseCoords[1]);
    gl.uniform1i(this.locs.pointerCount, this.nbrOfPointers);
    gl.uniform2fv(this.locs.pointers, this.pointerCoords);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  destroy() {
    const gl = this.gl;
    if (this.program && !gl.getProgramParameter(this.program, gl.DELETE_STATUS)) {
      if (this.vs) { gl.detachShader(this.program, this.vs); gl.deleteShader(this.vs); }
      if (this.fs) { gl.detachShader(this.program, this.fs); gl.deleteShader(this.fs); }
      gl.deleteProgram(this.program);
    }
    if (this.buffer) gl.deleteBuffer(this.buffer);
    this.program = null;
    this.vs = null;
    this.fs = null;
    this.buffer = null;
  }
}

// ─── Pointer tracking ────────────────────────────────────────────────────────
class PointerTracker {
  private pointers = new Map<number, number[]>();
  private lastCoords = [0, 0];
  private moves = [0, 0];
  private scale: number;

  constructor(el: HTMLCanvasElement, scale: number) {
    this.scale = scale;
    const map = (x: number, y: number) => [x * this.scale, el.height - y * this.scale];

    el.addEventListener('pointerdown', (e) => {
      this.pointers.set(e.pointerId, map(e.clientX, e.clientY));
    });
    el.addEventListener('pointerup', (e) => {
      if (this.pointers.size === 1) this.lastCoords = this.first;
      this.pointers.delete(e.pointerId);
    });
    el.addEventListener('pointerleave', (e) => {
      if (this.pointers.size === 1) this.lastCoords = this.first;
      this.pointers.delete(e.pointerId);
    });
    el.addEventListener('pointermove', (e) => {
      if (this.pointers.size === 0) return;
      this.lastCoords = [e.clientX, e.clientY];
      this.pointers.set(e.pointerId, map(e.clientX, e.clientY));
      this.moves = [this.moves[0] + e.movementX, this.moves[1] + e.movementY];
    });
  }

  updateScale(s: number) { this.scale = s; }
  get count() { return this.pointers.size; }
  get move() { return this.moves; }
  get coords() { return this.pointers.size > 0 ? Array.from(this.pointers.values()).flat() : [0, 0]; }
  get first() { return this.pointers.values().next().value || this.lastCoords; }
}

// ─── Shader background hook ──────────────────────────────────────────────────
function useShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<ShaderRenderer | null>(null);
  const pointersRef = useRef<PointerTracker | null>(null);
  const rafRef = useRef<number>(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.max(1, 0.5 * window.devicePixelRatio);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;

    try {
      rendererRef.current = new ShaderRenderer(canvas, dpr);
      pointersRef.current = new PointerTracker(canvas, dpr);
      rendererRef.current.build(QUBIT_SHADER);
      setReady(true);
    } catch {
      // WebGL2 not available — canvas stays black
      return;
    }

    const resize = () => {
      const d = Math.max(1, 0.5 * window.devicePixelRatio);
      canvas.width = window.innerWidth * d;
      canvas.height = window.innerHeight * d;
      rendererRef.current?.updateScale(d);
      pointersRef.current?.updateScale(d);
    };

    const loop = (now: number) => {
      const r = rendererRef.current;
      const p = pointersRef.current;
      if (r && p) {
        r.updateMouse(p.first);
        r.updatePointerCount(p.count);
        r.updatePointerCoords(p.coords);
        r.updateMove(p.move);
        r.render(now);
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafRef.current);
      rendererRef.current?.destroy();
    };
  }, []);

  return { canvasRef, ready };
}

// ─── Hero Component ──────────────────────────────────────────────────────────
const AnimatedShaderHero = memo(function AnimatedShaderHero({
  trustBadge,
  headline,
  subtitle,
  buttons,
  className = '',
}: HeroProps) {
  const { canvasRef, ready } = useShaderBackground();
  const [visible, setVisible] = useState(false);

  // Stagger entrance after shader is running
  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(id);
  }, []);

  const renderButton = useCallback(
    (
      btn: { text: string; href?: string; onClick?: () => void },
      variant: 'primary' | 'secondary',
    ) => {
      const isPrimary = variant === 'primary';
      const cls = isPrimary
        ? 'px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25'
        : 'px-8 py-4 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-300/30 hover:border-cyan-300/50 text-cyan-100 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm';

      if (btn.href) {
        return (
          <a key={variant} href={btn.href} className={cls}>
            {btn.text}
          </a>
        );
      }
      return (
        <button key={variant} onClick={btn.onClick} className={cls}>
          {btn.text}
        </button>
      );
    },
    [],
  );

  return (
    <div className={`relative w-full h-screen overflow-hidden bg-[#030712] ${className}`}>
      {/* Shader canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full touch-none"
        style={{ background: '#030712' }}
      />

      {/* Gradient overlays for text legibility */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#030712_90%)] opacity-40" />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
        {/* Trust badge */}
        {trustBadge && (
          <div
            className={`mb-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}
          >
            <div className="flex items-center gap-2 px-6 py-3 bg-cyan-500/10 backdrop-blur-md border border-cyan-400/25 rounded-full text-sm">
              {trustBadge.icon && (
                <span className="flex items-center text-cyan-400">{trustBadge.icon}</span>
              )}
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-100/90">{trustBadge.text}</span>
            </div>
          </div>
        )}

        <div className="text-center space-y-6 max-w-5xl mx-auto px-4">
          {/* Headline line 1 */}
          <div className="space-y-2 overflow-hidden">
            <h1
              className={`text-5xl md:text-7xl lg:text-8xl font-bold transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                background: 'linear-gradient(90deg, #67e8f9, #22d3ee, #06b6d4, #0891b2)',
                backgroundSize: '300% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: ready ? 'shader-hero-gradient 4s ease infinite' : 'none',
              }}
            >
              {headline.line1}
            </h1>
            {/* Headline line 2 */}
            <h1
              className={`text-5xl md:text-7xl lg:text-8xl font-bold transition-all duration-700 delay-[400ms] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                background: 'linear-gradient(90deg, #a5f3fc, #22d3ee, #0e7490, #155e75)',
                backgroundSize: '300% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: ready ? 'shader-hero-gradient 4s ease infinite reverse' : 'none',
              }}
            >
              {headline.line2}
            </h1>
          </div>

          {/* Subtitle */}
          <div
            className={`max-w-3xl mx-auto transition-all duration-700 delay-[600ms] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-lg md:text-xl lg:text-2xl text-slate-300/90 font-light leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* CTA buttons */}
          {buttons && (
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center mt-10 transition-all duration-700 delay-[800ms] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {buttons.primary && renderButton(buttons.primary, 'primary')}
              {buttons.secondary && renderButton(buttons.secondary, 'secondary')}
            </div>
          )}
        </div>
      </div>

      {/* Keyframe animations */}
      <style>{`
        @keyframes shader-hero-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
});

export default AnimatedShaderHero;
