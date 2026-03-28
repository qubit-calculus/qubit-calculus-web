import React, { useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

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
 * - Magnetic pull on hover
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
  
  // Magnetic Motion
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 200, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Increased magnetic strength (0.4 multiplier)
    const distanceX = (clientX - centerX) * 0.4;
    const distanceY = (clientY - centerY) * 0.4;
    
    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const baseStyles =
    'relative inline-flex items-center justify-center font-bold tracking-tight transition-all duration-500 ease-out active:scale-95 disabled:opacity-50 disabled:pointer-events-none group isolate overflow-hidden outline-none';

  const sizeStyles = {
    sm: 'px-5 py-2 text-xs rounded-full uppercase tracking-widest',
    md: 'px-9 py-3.5 text-sm rounded-full uppercase tracking-widest',
    lg: 'px-12 py-5 text-base rounded-full uppercase tracking-widest',
  };

  const variantStyles = {
    primary:
      'text-white bg-indigo-600 hover:bg-indigo-500 shadow-[0_10px_30px_-10px_rgba(99,102,241,0.5)] border border-indigo-400/40',
    secondary:
      'text-white bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 shadow-2xl',
    ghost: 
      'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10',
  };

  const Content = (
    <>
      {/* Outer Border Glow - on hover */}
      <div className={`absolute inset-0 -z-10 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-md ${
        variant === 'primary' ? 'bg-indigo-500/30' : 'bg-white/10'
      }`} />

      {/* Gloss Effect */}
      <div className="absolute inset-x-0 top-0 h-1/2 -z-10 bg-gradient-to-b from-white/10 to-transparent opacity-50" />
      

      {/* Button Text */}
      <span className="relative z-10 flex items-center gap-2 transition-transform duration-500 group-hover:scale-110">
        {children}
        {icon && (
          <span className="transition-all duration-500 group-hover:translate-x-1 flex items-center">
            {icon}
          </span>
        )}
      </span>

      {/* Premium Inner Border */}
      <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-white/20 transition-colors pointer-events-none" />
    </>
  );

  const commonProps = {
    onMouseMove: handleMouseMove,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    style: { x: springX, y: springY },
    className: `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`,
    ...props
  };

  if (href) {
    return (
      <motion.a href={href} {...(commonProps as any)}>
        {Content}
      </motion.a>
    );
  }

  return (
    <motion.button ref={buttonRef} {...(commonProps as any)}>
      {Content}
    </motion.button>
  );
}
