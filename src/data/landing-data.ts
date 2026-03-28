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
    icon: '🚀',
    title: 'MVP Engineering',
    description:
      'We bring your startup idea to life in 4-6 weeks with high-performance React and Next.js applications.',
  },
  {
    icon: '⚡',
    title: 'Legacy Modernization',
    description:
      'Bringing old systems into the new era. We refactor, migrate, and modernize your existing apps for ultimate performance.',
  },
  {
    icon: '🎨',
    title: 'Modern UI/UX Design',
    description:
      'High-fidelity, animated interfaces that feel premium. We use the latest design trends to make your company look professional.',
  },
  {
    icon: '🛡️',
    title: 'Clean API Architectures',
    description:
      'Scalable node.js and python backends built with security and reliability from day one.',
  },
  {
    icon: '☁️',
    title: 'Cloud Optimization',
    description:
      'Automated CI/CD pipelines and cloud deployments that keep your costs low and your uptime at 99.9%.',
  },
  {
    icon: '📱',
    title: 'Cross-Platform Apps',
    description:
      'Native-feeling mobile experiences built with React Native and Expo for both iOS and Android.',
  },
] as const;

export const showcaseCards: readonly ShowcaseCardData[] = [
  { id: 'webapps', label: 'Modern Web', icon: '💻' },
  { id: 'mobile', label: 'Mobile Apps', icon: '📱' },
  { id: 'realtime', label: 'Real-Time', icon: '⚡' },
  { id: 'design', label: 'UI/UX Design', icon: '🎨' },
] as const;

/** Our process / tech stack */
export const securityFeatures: readonly SecurityFeatureData[] = [
  {
    icon: '⚛️',
    title: 'React & Next.js',
    description:
      'We build with the latest React 19 and Next.js 15 for blazing-fast, SEO-optimized applications.',
    details: 'Server components and streaming SSR for the best user experience.',
  },
  {
    icon: '🔷',
    title: 'TypeScript Always',
    description:
      'Every project is built with strict TypeScript to catch bugs before they reach production.',
    details:
      'Full type safety across the entire stack, from frontend to backend.',
  },
  {
    icon: '⚡',
    title: 'Practical Innovation',
    description:
      'We don\'t use tech for tech\'s sake. We choose tools that solve your business problems efficiently.',
    details: 'Pragmatic architecture choices that balance speed and long-term maintainability.',
  },
];

/** Footer navigation links */
export const footerLinks = {
  product: [
    { label: 'Services', to: '/#services' },
    { label: 'Work', to: '/#work' },
    { label: 'Pricing', to: '/#pricing' },
    { label: 'Tech Stack', to: '/#security' },
  ],
  resources: [
    { label: 'Blog', to: '/blog' },
    { label: 'Careers', to: '/careers' },
  ],
  company: [
    { label: 'About Us', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Project Planner', to: '/contact' },
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
    title: 'Speed-to-Market',
    description:
      'We help startups ship production-ready apps 3x faster with our pre-built internal architecture patterns.',
    highlight: 'Ship Fast',
  },
  {
    icon: '🏗️',
    title: 'Digital Transformation',
    description:
      "Helping traditional businesses migrate to modern cloud infrastructure without the enterprise price tag.",
    highlight: 'Transform',
  },
  {
    icon: '🔒',
    title: 'Side Hustle Reliability',
    description:
      'We operate with the agility of a small team but the professional standards of a world-class agency.',
    highlight: 'Reliable',
  },
  {
    icon: '💎',
    title: 'Fair Pricing',
    description: 'No hidden fees. We provide fixed-price quotes that fit your budget and deliver real business value.',
    highlight: 'No BS',
  },
] as const;
