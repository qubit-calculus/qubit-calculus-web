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
    name: 'Enterprise',
    price: "Let's Talk",
    period: 'custom scope',
    description: 'For complex platforms, AI integrations, and enterprise-grade systems.',
    cta: 'Schedule a Call',
    ctaLink: '/contact',
    highlighted: false,
    features: [
      'Everything in Growth',
      'Microservices / distributed architecture',
      'AI/ML model integration',
      'Mobile app (React Native)',
      'Advanced security & compliance',
      'Load testing & performance tuning',
      'Third-party API integrations',
      'Dedicated project manager',
      'SLA guarantee & 12-month support',
    ],
  },
  {
    name: 'Growth',
    price: 'From $15K',
    period: 'per project',
    description: 'For businesses ready to scale with full-stack applications.',
    cta: 'Get a Quote',
    ctaLink: '/contact',
    highlighted: true,
    features: [
      'Everything in Starter',
      'Full-stack web application',
      'Real-time features (WebSockets)',
      'User authentication & roles',
      'Database design & REST/GraphQL API',
      'Admin dashboard',
      'CI/CD pipeline & staging environment',
      'Analytics & error monitoring',
      '90-day post-launch support',
    ],
  },
  {
    name: 'Starter',
    price: 'From $5K',
    period: 'per project',
    description: 'Perfect for MVPs, landing pages, and small business websites.',
    cta: 'Get a Quote',
    ctaLink: '/contact',
    highlighted: false,
    features: [
      'Modern responsive website',
      'Up to 8 pages/views',
      'Contact forms & CMS integration',
      'SEO optimization & analytics',
      'Mobile-first design',
      'Cloud deployment (Vercel/Netlify)',
      '30-day post-launch support',
    ],
  },
] as const;

