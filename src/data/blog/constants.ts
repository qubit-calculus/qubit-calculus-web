/**
 * Blog shared constants — category colors and slugs
 */

import type { CategoryColor } from './types';

/** Category badge colors used in both listing and article pages */
export const categoryColors: Record<string, CategoryColor> = {
  Engineering: { bg: 'rgba(99, 102, 241, 0.12)', text: '#818cf8' },
  Agency: { bg: 'rgba(16, 185, 129, 0.12)', text: '#34d399' },
  Insights: { bg: 'rgba(234, 179, 8, 0.12)', text: '#fbbf24' },
} as const;

/** Default fallback color for unknown categories */
export const defaultCategoryColor: CategoryColor = categoryColors.Engineering ?? {
  bg: 'rgba(99, 102, 241, 0.12)',
  text: '#818cf8',
};

/** Ordered list of all article slugs (newest first) */
export const articleSlugs = [
  'modernizing-sme',
  'mvp-blueprint',
  'why-nextjs-tailwind',
  'boutique-vs-enterprise',
] as const;

/** Available filter categories for the blog listing */
export const categories = [
  'All',
  'Engineering',
  'Agency',
  'Insights',
] as const;
