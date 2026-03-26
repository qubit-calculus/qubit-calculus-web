/**
 * Documentation article content — full HTML for each doc page
 *
 * Each entry corresponds to an article in categories.ts.
 */

import type { DocArticleData } from './types';

export const docArticles: Record<string, DocArticleData> = {
  'the-qubit-methodology': {
    title: 'The Qubit Methodology',
    category: 'How We Work',
    categoryIcon: '⚙️',
    categoryColor: '#34d399',
    readTime: '4 min read',
    content: `
<p>Our methodology is rooted in three principles: <strong>Speed</strong>, <strong>Transparency</strong>, and <strong>Technical Excellence</strong>. We don't just build apps; we build scalable business assets.</p>

<h3>Pragmatic Engineering</h3>
<p>We avoid "over-engineering" in the early stages while ensuring the foundation is solid enough for future scale. This pragmatic approach allows our clients to launch faster without incurring technical debt that will haunt them later.</p>

<h3>Direct Access</h3>
<p>We've removed the project manager layer. Clients communicate directly with the engineers building their product. This ensures nothing is lost in translation and decisions are made in real-time.</p>
`,
  },
  'discovery-strategy': {
    title: 'Discovery & Strategy',
    category: 'How We Work',
    categoryIcon: '⚙️',
    categoryColor: '#34d399',
    readTime: '3 min read',
    content: `
<p>Every successful project begins with a clear strategy. During the discovery phase, we dive deep into your business goals, user needs, and technical requirements.</p>

<h3>What We Cover</h3>
<ul>
  <li><strong>User Personas</strong>: Identifying exactly who we are building for.</li>
  <li><strong>Feature Prioritization</strong>: Defining the Minimum Viable Product (MVP).</li>
  <li><strong>Technical Audit</strong>: (For modernization projects) Analyzing legacy systems.</li>
  <li><strong>Roadmap Planning</strong>: Setting clear milestones and deadlines.</li>
</ul>
`,
  },
  'design-prototyping': {
    title: 'Design & Prototyping',
    category: 'How We Work',
    categoryIcon: '⚙️',
    categoryColor: '#34d399',
    readTime: '5 min read',
    content: `
<p>We believe that a professional design is non-negotiable in 2026. Our design process focuses on creating premium, high-converting interfaces that WOW your users.</p>

<h3>High-Fidelity Visuals</h3>
<p>We utilize glassmorphism, subtle gradients, and custom animations to give your product a state-of-the-art feel. Our prototypes are interactive, allowing you to "feel" the app before a single line of code is written.</p>
`,
  },
  'agile-engineering-sprints': {
    title: 'Agile Engineering Sprints',
    category: 'How We Work',
    categoryIcon: '⚙️',
    categoryColor: '#34d399',
    readTime: '6 min read',
    content: `
<p>Our engineering process is highly iterative. We work in two-week sprints, delivering functional updates at the end of each cycle.</p>

<h3>Quality Guaranteed</h3>
<p>Every line of code is written in TypeScript, peer-reviewed, and tested. We maintain a strict zero-warning policy to ensure the long-term health of your codebase.</p>
`,
  },
  'launch-handoff': {
    title: 'Launch & Handoff',
    category: 'How We Work',
    categoryIcon: '⚙️',
    categoryColor: '#34d399',
    readTime: '4 min read',
    content: `
<p>A successful launch is just the beginning. We ensure you are fully equipped to manage and grow your product after our engagement.</p>

<h3>What You Get</h3>
<ul>
  <li><strong>Full Source Code</strong>: Organized, documented, and ready for your internal team.</li>
  <li><strong>Infrastructure Setup</strong>: Fully configured production environments (Fly.io, Vercel).</li>
  <li><strong>Training</strong>: A walkthrough of the codebase and administrative tools.</li>
  <li><strong>Documentation</strong>: Comprehensive guides on how to maintain and scale the system.</li>
</ul>
`,
  },
  'starter-mvp-engineering': {
    title: 'Starter: MVP Engineering',
    category: 'Service Tiers',
    categoryIcon: '📊',
    categoryColor: '#60a5fa',
    readTime: '5 min read',
    content: `
<p>The Starter tier is specifically designed for startups looking to launch their first version at peak quality. We focus on the core value proposition and high-fidelity execution.</p>

<h3>Ideal For</h3>
<ul>
  <li>Seed-stage startups.</li>
  <li>Solo founders validating a concept.</li>
  <li>Internal "skunkworks" projects within larger companies.</li>
</ul>
`,
  },
  'growth-scaling-optimization': {
    title: 'Growth: Scaling & Optimization',
    category: 'Service Tiers',
    categoryIcon: '📊',
    categoryColor: '#60a5fa',
    readTime: '4 min read',
    content: `
<p>Once you have product-market fit, the focus shifts to scale. Our Growth tier is about hardening your infrastructure, optimizing performance, and adding advanced features.</p>
`,
  },
  'enterprise-digital-transformation': {
    title: 'Enterprise: Digital Transformation',
    category: 'Service Tiers',
    categoryIcon: '📊',
    categoryColor: '#60a5fa',
    readTime: '6 min read',
    content: `
<p>For established businesses, we provide end-to-end digital transformation. We help you move from legacy manual processes to automated, high-performance digital engines.</p>
`,
  },
  'custom-solutions': {
    title: 'Custom Solutions',
    category: 'Service Tiers',
    categoryIcon: '📊',
    categoryColor: '#60a5fa',
    readTime: '3 min read',
    content: `
<p>Need something unique? We offer custom engagement models for high-complexity engineering challenges, from custom cryptographic protocols to high-concurrency real-time systems.</p>
`,
  },
};
