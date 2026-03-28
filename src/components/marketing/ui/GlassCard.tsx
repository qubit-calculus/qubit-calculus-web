import React, { useCallback, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

export interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  enableTilt?: boolean;
  spotlightColor?: string;
}

/**
 * GlassCard - Qubit Calculus Primitive
 *
 * A premium container component featuring:
 * - "Deep Glass" background (black/40 + blur)
 * - Mouse-following spotlight border (desktop only)
 * - Optional 3D tilt effect on hover
 */
export function GlassCard({
  children,
  className = '',
  enableTilt = true,
  spotlightColor = 'rgba(99, 102, 241, 0.15)',
}: GlassCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const isMobile = useRef(
    typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches
  );

  const handleMouseMove = useCallback(({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    if (isMobile.current) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }, [mouseX, mouseY]);

  const bg = useMotionTemplate`radial-gradient(
    650px circle at ${mouseX}px ${mouseY}px,
    ${spotlightColor},
    transparent 80%
  )`;

  const Content = (
    <div
      className={`group relative overflow-hidden rounded-xl border border-black/5 dark:border-white/5 bg-white/60 dark:bg-black/40 backdrop-blur-xl transition-colors duration-500 ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight overlay — hidden on touch devices via CSS */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 max-md:hidden"
        style={{ background: bg }}
      />

      {/* Content wrapper */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );

  if (enableTilt && !isMobile.current) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, type: 'spring' }}
        className="h-full"
      >
        {Content}
      </motion.div>
    );
  }

  return Content;
}
