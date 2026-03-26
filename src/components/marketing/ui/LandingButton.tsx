import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export interface LandingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
  className?: string;
}

/**
 * LandingButton - Qubit Calculus Primitive
 *
 * A high-fidelity button component with:
 * - Enhanced magnetic pull on hover
 * - Glassmorphic / Shimmer effects
 * - Premium depth and glow
 */
export function LandingButton({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  href,
  className = '',
  ...props
}: LandingButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.35; // Increased magnetic strength
    const y = (clientY - (top + height / 2)) * 0.35;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    'relative inline-flex items-center justify-center font-bold tracking-tight transition-all duration-300 ease-out active:scale-95 disabled:opacity-50 disabled:pointer-events-none group isolate overflow-hidden';

  const sizeStyles = {
    sm: 'px-5 py-2 text-sm rounded-full',
    md: 'px-9 py-3.5 text-base rounded-full',
    lg: 'px-12 py-5 text-lg rounded-full',
  };

  const variantStyles = {
    primary:
      'text-white bg-indigo-600 hover:bg-indigo-500 shadow-[0_10px_30px_-10px_rgba(79,70,229,0.5)] border border-indigo-400/30',
    secondary:
      'text-white bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 shadow-2xl',
    ghost: 
      'text-gray-400 hover:text-white hover:bg-white/5',
  };

  const Content = (
    <>
      {/* Gloss Effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Shimmer / Scanline effect */}
      <div className="absolute inset-0 -z-10 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 transition-transform duration-1000 group-hover:translate-x-[100%]" />

      {/* Button Text */}
      <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
        {children}
        {icon && (
          <span className="transition-all duration-300 group-hover:translate-x-1 capitalize">
            {icon}
          </span>
        )}
      </span>

      {/* Internal Radial Glow */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(255,255,255,0.15)_0%,transparent_80%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
           style={{ '--x': '50%', '--y': '50%' } as React.CSSProperties} />
    </>
  );

  const motionProps = {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    animate: { x: position.x, y: position.y },
    transition: { type: 'spring', stiffness: 200, damping: 20, mass: 0.1 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        {...(motionProps as any)}
      >
        {Content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={buttonRef}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...(motionProps as any)}
      {...(props as any)}
    >
      {Content}
    </motion.button>
  );
}
