/**
 * Qubit Calculus Logo
 *
 * SVG logo mark — a stylized quantum qubit symbol.
 * Clean geometric design with the brand's indigo-blue gradient.
 */

import { memo } from 'react';

export type LogoColorVariant =
  | 'default'
  | 'cyan'
  | 'emerald'
  | 'purple'
  | 'white'
  | 'dark'
  | 'gradient';

export interface LogoProps {
  /** Logo width in pixels */
  size?: number;
  /** Additional CSS class names */
  className?: string;
  /** Kept for interface compatibility (no-op) */
  animated?: boolean;
  /** Color variant */
  color?: LogoColorVariant;
  /** Show glow effect */
  showGlow?: boolean;
}

/**
 * LogoIcon — Qubit Calculus brand mark.
 * A stylized "Q" with orbital rings representing quantum computing.
 */
export const LogoIcon = memo(function LogoIcon({
  size = 40,
  className = '',
  showGlow = false,
}: LogoProps): React.JSX.Element {
  const id = `logo-grad-${size}`;
  return (
    <div className={`relative inline-flex ${className}`} style={{ width: size, height: size }}>
      {showGlow && (
        <div
          className="absolute inset-0 rounded-full blur-lg opacity-40"
          style={{ background: 'radial-gradient(circle, #6366f1, transparent 70%)' }}
        />
      )}
      <svg
        viewBox="0 0 64 64"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Qubit Calculus"
      >
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        {/* Outer ring */}
        <circle cx="32" cy="32" r="28" stroke={`url(#${id})`} strokeWidth="2.5" opacity="0.3" />
        {/* Orbital ellipse — tilted */}
        <ellipse
          cx="32" cy="32" rx="22" ry="10"
          transform="rotate(-30 32 32)"
          stroke={`url(#${id})`}
          strokeWidth="2"
          opacity="0.6"
        />
        {/* Second orbital */}
        <ellipse
          cx="32" cy="32" rx="22" ry="10"
          transform="rotate(30 32 32)"
          stroke={`url(#${id})`}
          strokeWidth="2"
          opacity="0.6"
        />
        {/* Core qubit dot */}
        <circle cx="32" cy="32" r="6" fill={`url(#${id})`} />
        {/* Inner glow */}
        <circle cx="32" cy="32" r="3" fill="white" opacity="0.6" />
      </svg>
    </div>
  );
});
