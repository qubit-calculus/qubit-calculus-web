import { motion } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';

/**
 * GlobalBackground
 *
 * Ultra-professional, Vercel-inspired deep space minimalist background.
 * - True black base (#000000)
 * - Micro-grid pattern for technical scale
 * - Extremely subtle, slow-moving ambient spotlights
 * - Mouse-reactive glow that follows cursor
 */
export function GlobalBackground() {
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    requestAnimationFrame(() => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });
    });
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [prefersReducedMotion, handleMouseMove]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 select-none overflow-hidden bg-[#fafafa] dark:bg-black transition-colors duration-700">
      {/* Base Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
          maskImage: 'linear-gradient(to bottom, #000 0%, #000 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, #000 0%, #000 85%, transparent 100%)'
        }}
      />

      {/* Mouse-reactive glow — dark mode */}
      <div
        className="hidden dark:block absolute w-[600px] h-[600px] rounded-full blur-[180px] transition-opacity duration-700 opacity-[0.12]"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.8) 0%, rgba(59,130,246,0.3) 40%, transparent 70%)',
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Mouse-reactive glow — light mode */}
      <div
        className="dark:hidden absolute w-[500px] h-[500px] rounded-full blur-[160px] transition-opacity duration-700 opacity-[0.06]"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.6) 0%, rgba(99,102,241,0) 70%)',
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Primary Top Spotlight (Indigo) — hidden in light mode */}
      <motion.div
        className="hidden dark:block absolute -top-[15%] left-[15%] w-[70%] h-[60%] rounded-full opacity-20 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,1) 0%, rgba(99,102,241,0) 70%)'
        }}
        animate={prefersReducedMotion ? {} : {
          x: ['-5%', '5%', '-5%'],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Light mode subtle accent */}
      <div
        className="dark:hidden absolute -top-[15%] left-[15%] w-[70%] h-[60%] rounded-full opacity-[0.04] blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,1) 0%, rgba(99,102,241,0) 70%)'
        }}
      />

      {/* Mid-page Spotlight (Indigo/Purple) — hidden in light mode */}
      <motion.div
        className="hidden dark:block absolute top-[40%] left-[30%] w-[50%] h-[40%] rounded-full opacity-10 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(79,70,229,1) 0%, rgba(79,70,229,0) 70%)'
        }}
        animate={prefersReducedMotion ? {} : {
          x: ['3%', '-3%', '3%'],
          y: ['2%', '-2%', '2%'],
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Secondary Bottom Spotlight (Blue) — hidden in light mode */}
      <motion.div
        className="hidden dark:block absolute -bottom-[10%] right-[10%] w-[60%] h-[50%] rounded-full opacity-10 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,1) 0%, rgba(59,130,246,0) 70%)'
        }}
        animate={prefersReducedMotion ? {} : {
          x: ['5%', '-5%', '5%'],
          y: ['-5%', '5%', '-5%'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
