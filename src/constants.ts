/**
 * Shared application constants — single source of truth
 *
 * All URL and environment constants used across the Qubit Calculus website.
 * Import from '@/constants' instead of defining inline.
 */

/** Agency website base URL */
export const WEB_APP_URL = 'https://qubitcalculus.com';

/** Landing site base URL */
export const LANDING_URL = 'https://www.qubitcalculus.com';

/** External links used across the site */
export const EXTERNAL_LINKS = {
  contact: `${WEB_APP_URL}/contact`,
  about: `${WEB_APP_URL}/about`,
  twitter: 'https://twitter.com/qubitcalculus',
  github: 'https://github.com/qubitcalculus',
} as const;
