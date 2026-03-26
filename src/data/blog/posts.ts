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
];
