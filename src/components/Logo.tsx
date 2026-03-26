/**
 * Qubit Calculus Logo
 *
 * Renders the agency brand logo.
 * Uses the logo.png asset from the public directory.
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
  /** Kept for interface compatibility (no-op) */
  color?: LogoColorVariant;
  /** Kept for interface compatibility (no-op) */
  showGlow?: boolean;
}

/**
 * Main Qubit Calculus Logo — renders the branded logo.png image.
 */
export const LogoIcon = memo(function LogoIcon({
  size = 40,
  className = '',
}: LogoProps): React.JSX.Element {
  return (
    <img
      src="/logo.png"
      alt="Qubit Calculus"
      width={size}
      height={size}
      className={className}
      draggable={false}
      fetchPriority="high"
      style={{ objectFit: 'contain', display: 'block' }}
    />
  );
});
