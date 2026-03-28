/**
 * Blog post listing metadata — used for the blog index page
 *
 * Each entry corresponds to an article in articles.ts.
 */

import type { BlogPost } from './types';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'modernizing-sme',
    title: 'Qubit Calculus: Modernizing the SME Engine',
    excerpt:
      'How we help small and medium enterprises transition from legacy systems to high-performance, modern web applications. Real-world strategies for digital transformation.',
    category: 'Agency',
    author: 'Qubit Team',
    date: 'March 15, 2026',
    readTime: '6 min read',
    featured: true,
    image: '🏗️',
    tags: ['Digital Transformation', 'SME', 'Modernization'],
  },
  {
    id: 2,
    slug: 'mvp-blueprint',
    title: 'The MVP Blueprint: From Idea to Market in 30 Days',
    excerpt:
      'Speed is the ultimate competitive advantage for startups. Learn how our focused engineering process delivers production-ready MVPs at record speed.',
    category: 'Engineering',
    author: 'Qubit Team',
    date: 'March 10, 2026',
    readTime: '8 min read',
    featured: true,
    image: '🚀',
    tags: ['MVP', 'Startups', 'Velocity'],
  },
  {
    id: 3,
    slug: 'why-nextjs-tailwind',
    title: 'Why We Build with Next.js and Tailwind CSS',
    excerpt:
      'A deep dive into our core tech stack and why it provides the best balance of performance, developer experience, and scalability for our clients.',
    category: 'Engineering',
    author: 'Qubit Team',
    date: 'March 5, 2026',
    readTime: '5 min read',
    featured: false,
    image: '⚡',
    tags: ['Tech Stack', 'Next.js', 'Tailwind'],
  },
  {
    id: 4,
    slug: 'boutique-vs-enterprise',
    title: 'Boutique vs. Enterprise: Why Focus Wins',
    excerpt:
      'The advantages of working with a boutique agency. How personalized attention and senior-level execution lead to better outcomes for your business.',
    category: 'Insights',
    author: 'Qubit Team',
    date: 'February 28, 2026',
    readTime: '4 min read',
    featured: false,
    image: '🎯',
    tags: ['Agency', 'Business', 'Strategy'],
  },
  {
    id: 5,
    slug: 'ai-integration-playbook',
    title: 'The AI Integration Playbook for Product Teams',
    excerpt:
      'Practical strategies for integrating LLMs, computer vision, and predictive models into existing products without rebuilding from scratch.',
    category: 'Engineering',
    author: 'Qubit Team',
    date: 'February 20, 2026',
    readTime: '10 min read',
    featured: true,
    image: '🤖',
    tags: ['AI', 'Machine Learning', 'Integration'],
  },
  {
    id: 6,
    slug: 'web3-smart-contract-security',
    title: 'Smart Contract Security: Lessons from 50+ Audits',
    excerpt:
      'The most common vulnerabilities we find during smart contract audits and how to prevent them. Real examples from our blockchain practice.',
    category: 'Engineering',
    author: 'Qubit Team',
    date: 'February 14, 2026',
    readTime: '12 min read',
    featured: false,
    image: '🔒',
    tags: ['Web3', 'Security', 'Blockchain'],
  },
  {
    id: 7,
    slug: 'scaling-to-million-users',
    title: 'Scaling to a Million Users: Architecture Decisions That Matter',
    excerpt:
      'From database sharding to edge caching — the architectural patterns we use to build applications that handle massive scale without breaking the bank.',
    category: 'Engineering',
    author: 'Qubit Team',
    date: 'February 7, 2026',
    readTime: '9 min read',
    featured: false,
    image: '📈',
    tags: ['Architecture', 'Scaling', 'Performance'],
  },
  {
    id: 8,
    slug: 'design-system-roi',
    title: 'The ROI of Design Systems: Numbers That Convince Stakeholders',
    excerpt:
      'Design systems aren\'t just for designers. We break down the measurable business impact of investing in a component library and design tokens.',
    category: 'Insights',
    author: 'Qubit Team',
    date: 'January 30, 2026',
    readTime: '6 min read',
    featured: false,
    image: '🎨',
    tags: ['Design Systems', 'ROI', 'UI/UX'],
  },
];
