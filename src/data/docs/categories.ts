/**
 * Documentation page data — categories, API overview, security table
 *
 * Sourced for the Qubit Calculus Agency process and services.
 */

import type { DocCategory } from './types';

export const docCategories: DocCategory[] = [
  {
    id: 'our-process',
    icon: '⚙️',
    title: 'How We Work',
    color: '#34d399',
    description:
      'From initial discovery to final handoff, our process is built for speed and quality.',
    articles: [
      { title: 'The Qubit Methodology', time: '4 min read' },
      { title: 'Discovery & Strategy', time: '3 min read' },
      { title: 'Design & Prototyping', time: '5 min read' },
      { title: 'Agile Engineering Sprints', time: '6 min read' },
      { title: 'Launch & Handoff', time: '4 min read' },
    ],
  },
  {
    id: 'service-tiers',
    icon: '📊',
    title: 'Service Tiers',
    color: '#60a5fa',
    description: 'Detailed breakdown of our MVP, Scaling, and Enterprise services.',
    articles: [
      { title: 'Starter: MVP Engineering', time: '5 min read' },
      { title: 'Growth: Scaling & Optimization', time: '4 min read' },
      { title: 'Enterprise: Digital Transformation', time: '6 min read' },
      { title: 'Custom Solutions', time: '3 min read' },
    ],
  },
  {
    id: 'tech-stack',
    icon: '⚡',
    title: 'Our Tech Stack',
    color: '#a78bfa',
    description: 'The modern tools and frameworks we use to build high-performance applications.',
    articles: [
      { title: 'Frontend: React & Next.js', time: '5 min read' },
      { title: 'Styling: Tailwind CSS', time: '3 min read' },
      { title: 'Backend: Node.js & Elixir', time: '6 min read' },
      { title: 'Infrastructure: Fly.io & Vercel', time: '4 min read' },
    ],
  },
  {
    id: 'engagement',
    icon: '🤝',
    title: 'Working with Us',
    color: '#fbbf24',
    description: 'Communication, project management, and what to expect as a client.',
    articles: [
      { title: 'Communication Channels', time: '3 min read' },
      { title: 'Project Management & Transparency', time: '4 min read' },
      { title: 'Ongoing Support & Maintenance', time: '5 min read' },
      { title: 'Referral Program', time: '2 min read' },
    ],
  },
];

export const apiOverview = [
  { label: 'Primary Contact', value: 'hello@qubitcalculus.com' },
  { label: 'Turnaround', value: '2-4 weeks for MVPs' },
  { label: 'Pricing Model', value: 'Fixed-price sprints or Retainers' },
  { label: 'Focus', value: 'Startups & SME Modernization' },
  { label: 'Office', value: 'Remote-first (Europe/Georgia)' },
];

export const securityTable = [
  { component: 'Codebase Quality', algorithm: 'Rigorous Linting & Types', level: '100% TS' },
  { component: 'Security', algorithm: 'Best-practice OWASP & E2EE', level: 'Industry Std' },
  { component: 'Handoff', algorithm: 'Full IP & Source Transfer', level: 'Guaranteed' },
  { component: 'Hiring', algorithm: 'Top 1% Engineering Talent', level: 'Elite' },
];

export const apiEndpointGroups = [
  {
    group: 'Web Development',
    icon: '🌐',
    endpoints: [
      { method: 'BUILD', path: '/mvp-development' },
      { method: 'FIX', path: '/legacy-hotfixes' },
      { method: 'SCALE', path: '/performance-tuning' },
    ],
  },
  {
    group: 'App Development',
    icon: '📱',
    endpoints: [
      { method: 'IOS', path: '/native-apps' },
      { method: 'ANDR', path: '/cross-platform' },
      { method: 'UI', path: '/design-systems' },
    ],
  },
  {
    group: 'Modernization',
    icon: '🏗️',
    endpoints: [
      { method: 'MIG', path: '/cloud-migration' },
      { method: 'REF', path: '/architecture-revamp' },
      { method: 'OPT', path: '/database-optimization' },
    ],
  },
];

export const methodColors: Record<string, { bg: string; text: string }> = {
  BUILD: { bg: 'rgba(52, 211, 153, 0.12)', text: '#34d399' },
  FIX: { bg: 'rgba(96, 165, 250, 0.12)', text: '#60a5fa' },
  SCALE: { bg: 'rgba(234, 179, 8, 0.12)', text: '#fbbf24' },
  IOS: { bg: 'rgba(167, 139, 250, 0.12)', text: '#a78bfa' },
  ANDR: { bg: 'rgba(244, 114, 182, 0.12)', text: '#f472b6' },
  MIG: { bg: 'rgba(129, 140, 248, 0.12)', text: '#818cf8' },
};

export const defaultMethodColor = methodColors.BUILD ?? {
  bg: 'rgba(52, 211, 153, 0.12)',
  text: '#34d399',
};
