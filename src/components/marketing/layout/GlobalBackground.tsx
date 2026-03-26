import { motion } from 'framer-motion';

/**
 * GlobalBackground
 *
 * Ultra-professional, Vercel-inspired deep space minimalist background.
 * - True black base (#000000)
 * - Micro-grid pattern for technical scale
 * - Extremely subtle, slow-moving ambient spotlights
 */
export function GlobalBackground() {
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 select-none overflow-hidden bg-[#fafafa] dark:bg-black transition-colors duration-700">
      {/* Base Grid */}
      <div 
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)'
        }}
      />

      {/* Primary Top Spotlight (Indigo) */}
      <motion.div
        className="absolute -top-[20%] left-[20%] w-[60%] h-[60%] rounded-full opacity-20 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,1) 0%, rgba(99,102,241,0) 70%)'
        }}
        animate={prefersReducedMotion ? {} : {
          x: ['-5%', '5%', '-5%'],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Secondary Bottom Spotlight (Blue) */}
      <motion.div
        className="absolute -bottom-[10%] right-[10%] w-[50%] h-[50%] rounded-full opacity-10 blur-[100px]"
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
