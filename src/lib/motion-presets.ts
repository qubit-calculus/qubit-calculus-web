/**
 * Shared Framer Motion animation presets.
 * Use via spread: <motion.div {...FADE_UP}> or <motion.div {...REVEAL_UP}>
 */

/** Fade + slide up: initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} */
export const FADE_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
} as const;

/** Simple opacity fade: initial={{ opacity: 0 }} animate={{ opacity: 1 }} */
export const FADE_IN = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
} as const;

/** Scroll-triggered reveal up (whileInView instead of animate) */
export const REVEAL_UP = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
} as const;
