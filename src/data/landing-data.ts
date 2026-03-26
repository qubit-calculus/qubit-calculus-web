/**
 * Landing Page Data — Qubit Calculus Agency
 *
 * All static content for the landing page extracted into a data module.
 * This keeps components lean and data easily editable.
 */

export interface FeatureData {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

export interface ShowcaseCardData {
  readonly id: string;
  readonly label: string;
  readonly icon: string;
}

export interface SecurityFeatureData {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
  readonly details?: string;
}

export interface FooterLinkData {
  readonly label: string;
  readonly to?: string;
  readonly href?: string;
}

export interface ValuePropData {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
  readonly highlight?: string;
}

export { WEB_APP_URL } from '@/constants';

/** Services we offer */
export const features: readonly FeatureData[] = [
  {
    icon: '⚡',
    title: 'Custom Web Applications',
    description:
      'High-performance React, Next.js, and Vite applications built from scratch. Real-time features, complex state management, and pixel-perfect UI.',
  },
  {
    icon: '🔗',
    title: 'Real-Time Infrastructure',
    description:
      'WebSocket-powered live features — chat systems, live dashboards, collaborative tools, and notification pipelines with sub-200ms delivery.',
  },
  {
    icon: '🎨',
    title: 'Premium UI/UX Design',
    description:
      'Stunning, responsive interfaces with GSAP animations, Framer Motion micro-interactions, and modern design systems that wow your users.',
  },
  {
    icon: '🛡️',
    title: 'API & Backend Development',
    description:
      'Scalable REST and GraphQL APIs, authentication systems, database architecture, and cloud deployment on AWS, GCP, or Vercel.',
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    description:
      'CI/CD pipelines, Docker containerization, auto-scaling infrastructure, and monitoring. We keep your apps running at 99.9% uptime.',
  },
  {
    icon: '📱',
    title: 'Mobile Applications',
    description:
      'Cross-platform mobile apps with React Native and Expo. Full feature parity with web, native performance, and App Store deployment.',
  },
] as const;

export const showcaseCards: readonly ShowcaseCardData[] = [
  { id: 'webapps', label: 'Web Apps', icon: '💻' },
  { id: 'mobile', label: 'Mobile', icon: '📱' },
  { id: 'realtime', label: 'Real-Time', icon: '⚡' },
  { id: 'design', label: 'UI/UX', icon: '🎨' },
] as const;

/** Our process / tech stack */
export const securityFeatures: readonly SecurityFeatureData[] = [
  {
    icon: '⚛️',
    title: 'React & Next.js',
    description:
      'We build with the latest React 19, Next.js 15, and Vite for blazing-fast, SEO-optimized applications.',
    details: 'Server components, streaming SSR, and optimistic updates for the best user experience.',
  },
  {
    icon: '🔷',
    title: 'TypeScript First',
    description:
      'Every project is built with strict TypeScript from day one. Type safety catches bugs before your users do.',
    details:
      'Full strict mode, no-any policies, and comprehensive type coverage across the entire stack.',
  },
  {
    icon: '⚡',
    title: 'Real-Time with WebSockets',
    description:
      'Live features powered by WebSocket technology for instant updates, chat, and collaborative experiences.',
    details: 'Phoenix Channels, Socket.IO, or custom WebSocket implementations — whatever fits your stack.',
  },
  {
    icon: '🗄️',
    title: 'Scalable Databases',
    description:
      'PostgreSQL, Redis, and modern ORMs like Prisma or Drizzle. Optimized queries and proper indexing from the start.',
    details:
      'Database migrations, connection pooling, and read replicas for high-traffic applications.',
  },
  {
    icon: '🔐',
    title: 'Security Built In',
    description:
      'Authentication, authorization, encryption, and OWASP best practices baked into every project.',
    details:
      'OAuth 2.0, JWT tokens, rate limiting, CSRF protection, and input sanitization as standard.',
  },
  {
    icon: '🚀',
    title: 'CI/CD & Deployment',
    description:
      'Automated testing, continuous deployment, and zero-downtime releases. Your code ships fast and safely.',
    details: 'GitHub Actions, Vercel, Docker, and Fly.io — we choose the best platform for your needs.',
  },
  {
    icon: '📊',
    title: 'Analytics & Monitoring',
    description:
      'Real-time error tracking, performance monitoring, and user analytics so you always know how your app is performing.',
    details:
      'Sentry, Plausible, and custom dashboards for complete visibility into your application health.',
  },
  {
    icon: '♿',
    title: 'Accessibility (a11y)',
    description:
      'WCAG 2.1 AA compliance as standard. Your application works for everyone, on every device.',
    details:
      'Semantic HTML, ARIA labels, keyboard navigation, and screen reader testing on every project.',
  },
  {
    icon: '🧪',
    title: 'Comprehensive Testing',
    description:
      'Unit tests, integration tests, and E2E tests with Vitest and Playwright. Ship with confidence.',
    details:
      'Test-driven development workflows with 80%+ coverage targets and automated regression testing.',
  },
  {
    icon: '📱',
    title: 'Responsive by Default',
    description:
      'Every pixel is tested across desktop, tablet, and mobile. Mobile-first design that scales beautifully.',
    details:
      'Tailwind CSS utility-first approach with custom breakpoints and fluid typography.',
  },
] as const;

/** Footer navigation links */
export const footerLinks = {
  product: [
    { label: 'Services', to: '/#services' },
    { label: 'Case Studies', to: '/#work' },
    { label: 'Pricing', to: '/#pricing' },
    { label: 'Our Stack', to: '/#security' },
  ],
  resources: [
    { label: 'Blog', to: '/blog' },
    { label: 'Careers', to: '/careers' },
    { label: 'Press', to: '/press' },
  ],
  company: [
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Service', to: '/terms' },
    { label: 'Cookie Policy', to: '/cookies' },
  ],
} as const;

/** "Why Qubit Calculus?" value propositions */
export const valueProps: readonly ValuePropData[] = [
  {
    icon: '⚡',
    title: 'Ship in Weeks, Not Months',
    description:
      'Our AI-augmented development process delivers production-ready applications 3x faster than traditional agencies.',
    highlight: '3x Faster',
  },
  {
    icon: '🏗️',
    title: 'Enterprise Architecture',
    description:
      "Every project follows the same patterns used at Google, Vercel, and Linear. No spaghetti code, no technical debt.",
    highlight: 'Zero Debt',
  },
  {
    icon: '🔒',
    title: 'Security by Default',
    description:
      'Authentication, encryption, and OWASP compliance are built in from day one — not bolted on as an afterthought.',
    highlight: 'Day One',
  },
  {
    icon: '💎',
    title: 'Transparent Pricing',
    description: 'Fixed project pricing with no hidden fees. You know exactly what you pay before a single line of code is written.',
    highlight: 'No Surprises',
  },
] as const;
