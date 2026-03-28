/**
 * Service tier data for the landing page.
 *
 * Defines the agency's engagement models with transparent starting prices.
 */

export interface PricingTier {
  readonly name: string;
  readonly price: string;
  readonly period: string;
  readonly description: string;
  readonly cta: string;
  readonly ctaLink: string;
  readonly highlighted: boolean;
  readonly features: readonly string[];
}

export const pricingTiers: readonly PricingTier[] = [
  {
    name: 'MVPs & Startups',
    price: 'From $500',
    period: 'per project',
    description: 'Perfect for landing pages, MVPs, and small business websites.',
    cta: 'Get Started',
    ctaLink: '/contact',
    highlighted: false,
    features: [
      'Modern responsive website',
      'Up to 6 unique pages',
      'Basic CRUD functionality',
      'SEO & Performance optimization',
      'Contact forms & Analytics',
      'Cloud deployment (Vercel/Netlify)',
      '30-day post-launch support',
    ],
  },
  {
    name: 'Digital Transformation',
    price: 'From $2.5K',
    period: 'per project',
    description: 'For businesses ready to modernize or build complex apps.',
    cta: 'Scale Now',
    ctaLink: '/contact',
    highlighted: true,
    features: [
      'Everything in MVP tier',
      'Full-stack web application',
      'Legacy system migration',
      'User authentication & Roles',
      'Admin Dashboard & CMS',
      'API Design (REST/GraphQL)',
      'CI/CD Pipeline setup',
      '90-day post-launch support',
    ],
  },
  {
    name: 'Custom Product',
    price: 'Custom',
    period: 'custom scope',
    description: 'Complex platforms, mobile apps, and enterprise systems.',
    cta: 'Schedule Call',
    ctaLink: '/contact',
    highlighted: false,
    features: [
      'Everything in Growth tier',
      'Mobile App (React Native)',
      'Complex real-time features',
      'AI/ML integration',
      'Advanced Security Audit',
      'Load Testing & Tuning',
      'Dedicated support channel',
      '1-year maintenance plan',
    ],
  },
] as const;

