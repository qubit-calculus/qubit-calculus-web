/**
 * About Page — Qubit Calculus Software Agency
 *
 * Company story, team, values, tech expertise, and why clients choose us.
 */

import { motion } from 'framer-motion';

const springs = { bouncy: { type: 'spring' as const, stiffness: 300, damping: 10 } };
import { MarketingLayout } from '@/components/marketing';
import { NeonIcon } from '@/components/marketing/ui';
import { REVEAL_UP } from '../../lib/motion-presets';

const agencyStats = [
  { label: 'Projects Delivered', value: '150+', detail: 'Across 6 industries' },
  { label: 'Client Retention', value: '96%', detail: 'Repeat & referral clients' },
  { label: 'Years of Experience', value: '8+', detail: 'In software development' },
  { label: 'Avg. Delivery Speed', value: '3x', detail: 'Faster than traditional agencies' },
];

const capabilities = [
  {
    icon: '⚡',
    title: 'Custom Web Applications',
    description:
      'High-performance React, Next.js, and Vite applications. Real-time features, complex state management, and pixel-perfect UI designed for scale.',
  },
  {
    icon: '🤖',
    title: 'AI & Machine Learning',
    description:
      'Custom LLM integrations, predictive analytics, computer vision, and intelligent automation that transforms your business operations.',
  },
  {
    icon: '🔗',
    title: 'Web3 & Blockchain',
    description:
      'Smart contract development and auditing, dApp creation, tokenomics design, and secure decentralized infrastructure.',
  },
  {
    icon: '📱',
    title: 'Mobile Applications',
    description:
      'Cross-platform React Native apps with native performance. Full feature parity with web, offline support, and App Store deployment.',
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    description:
      'AWS, GCP, and Azure architectures. Docker, Kubernetes, CI/CD pipelines, auto-scaling infrastructure, and 99.9% uptime guarantee.',
  },
  {
    icon: '🛡️',
    title: 'Security & Compliance',
    description:
      'OWASP best practices, SOC 2 readiness, HIPAA-compliant architectures, penetration testing, and automated security scanning.',
  },
];

const techStack = [
  {
    category: 'Frontend',
    items: [
      { name: 'React / Next.js', role: 'Web applications & SSR' },
      { name: 'TypeScript', role: 'Type-safe development' },
      { name: 'React Native / Expo', role: 'Cross-platform mobile' },
      { name: 'Tailwind CSS / GSAP', role: 'UI/UX & animations' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js / Python', role: 'APIs & microservices' },
      { name: 'PostgreSQL / Redis', role: 'Databases & caching' },
      { name: 'GraphQL / REST', role: 'API architecture' },
      { name: 'Elixir / Phoenix', role: 'Real-time & high-concurrency' },
    ],
  },
  {
    category: 'Infrastructure',
    items: [
      { name: 'AWS / GCP / Azure', role: 'Cloud platforms' },
      { name: 'Docker / Kubernetes', role: 'Containerization & orchestration' },
      { name: 'Vercel / Fly.io', role: 'Edge deployment' },
      { name: 'GitHub Actions / CI/CD', role: 'Automated pipelines' },
    ],
  },
];

const values = [
  {
    icon: '🎯',
    title: 'Outcome-Driven',
    description:
      'We measure success by your business metrics, not lines of code. Every feature we build ties directly to your revenue, efficiency, or growth goals.',
  },
  {
    icon: '⚡',
    title: 'Speed Without Shortcuts',
    description:
      'Our AI-augmented workflow delivers 3x faster than traditional agencies — without sacrificing code quality, testing, or documentation.',
  },
  {
    icon: '🔒',
    title: 'Security by Default',
    description:
      'Authentication, encryption, and OWASP compliance built in from day one. We never bolt security on as an afterthought.',
  },
  {
    icon: '💎',
    title: 'Transparent Pricing',
    description:
      'Fixed project pricing with detailed estimates upfront. No hourly billing surprises, no scope creep charges, no hidden fees.',
  },
  {
    icon: '🤝',
    title: 'True Partnership',
    description:
      'We operate as an extension of your team. Bi-weekly demos, shared Slack channels, and complete visibility into every sprint.',
  },
  {
    icon: '🏗️',
    title: 'Enterprise Architecture',
    description:
      'We follow the same engineering patterns used at Google, Vercel, and Linear. Clean code, zero technical debt, and systems built to last.',
  },
];

export default function About() {
  return (
    <MarketingLayout
      title="About Qubit Calculus"
      subtitle="A software development agency that builds high-performance applications for ambitious businesses — from startups to enterprises."
      eyebrow="Our Story"
    >
      {/* Mission Section */}
      <section className="marketing-section marketing-section--alt">
        <div className="marketing-section__container">
          <motion.div {...REVEAL_UP} className="mx-auto max-w-3xl text-center">
            <h2 className="marketing-section__title">Why We Exist</h2>
            <p className="text-xl leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              Too many businesses get burned by agencies that over-promise and under-deliver.
              We started Qubit Calculus because we believe{' '}
              <span className="marketing-hero__highlight">
                great software should be built with precision, transparency, and a genuine
                commitment to your success
              </span>
              . We are engineers first, and we treat every project like it's our own product.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Agency Stats */}
      <section className="marketing-section marketing-section--dark">
        <div className="marketing-section__container">
          <div className="marketing-section__header">
            <motion.div {...REVEAL_UP}>
              <h2 className="marketing-section__title">By the Numbers</h2>
              <p className="marketing-section__desc">
                Real results, not vanity metrics.
              </p>
            </motion.div>
          </div>

          <div
            className="marketing-grid marketing-grid--2"
            style={{ maxWidth: '48rem', margin: '0 auto' }}
          >
            {agencyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                {...REVEAL_UP}
                transition={{ delay: index * 0.1 }}
                className="marketing-card text-center"
              >
                <motion.div
                  className="font-zentry text-5xl font-bold"
                  style={{
                    background:
                      'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, ...springs.bouncy }}
                >
                  {stat.value}
                </motion.div>
                <div className="mt-2 text-lg font-semibold text-slate-100">{stat.label}</div>
                <div className="mt-1 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  {stat.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="marketing-section marketing-section--alt">
        <div className="marketing-section__container">
          <div className="marketing-section__header">
            <motion.div {...REVEAL_UP}>
              <h2 className="marketing-section__title">What We Build</h2>
              <p className="marketing-section__desc">
                Full-spectrum software development for every stage of your business.
              </p>
            </motion.div>
          </div>

          <div className="marketing-grid marketing-grid--3">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                {...REVEAL_UP}
                transition={{ delay: index * 0.08 }}
                className="marketing-card"
              >
                <span className="marketing-card__icon">
                  <NeonIcon symbol={cap.icon} size={34} title={cap.title} />
                </span>
                <h3 className="marketing-card__title">{cap.title}</h3>
                <p className="marketing-card__desc">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="marketing-section marketing-section--dark">
        <div className="marketing-section__container">
          <div className="marketing-section__header">
            <motion.div {...REVEAL_UP}>
              <h2 className="marketing-section__title">Our Principles</h2>
              <p className="marketing-section__desc">
                The values that guide every project and every line of code we write.
              </p>
            </motion.div>
          </div>

          <div className="marketing-grid marketing-grid--3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                {...REVEAL_UP}
                transition={{ delay: index * 0.08 }}
                className="marketing-card"
              >
                <span className="marketing-card__icon">
                  <NeonIcon symbol={value.icon} size={34} title={value.title} />
                </span>
                <h3 className="marketing-card__title">{value.title}</h3>
                <p className="marketing-card__desc">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="marketing-section marketing-section--alt">
        <div className="marketing-section__container">
          <div className="marketing-section__header">
            <motion.div {...REVEAL_UP}>
              <h2 className="marketing-section__title">Our Tech Stack</h2>
              <p className="marketing-section__desc">
                We choose the right tool for each job — no one-size-fits-all.
              </p>
            </motion.div>
          </div>

          <div className="marketing-grid marketing-grid--3">
            {techStack.map((group, gIndex) => (
              <motion.div
                key={group.category}
                {...REVEAL_UP}
                transition={{ delay: gIndex * 0.15 }}
                className="marketing-card"
                style={{ padding: '2rem' }}
              >
                <h3
                  className="mb-6 text-lg font-bold"
                  style={{
                    background:
                      'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {group.category}
                </h3>
                <div className="space-y-4">
                  {group.items.map((item) => (
                    <div key={item.name}>
                      <div className="text-sm font-semibold text-slate-100">{item.name}</div>
                      <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                        {item.role}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="marketing-section marketing-section--dark">
        <div className="marketing-section__container">
          <div className="marketing-section__header">
            <motion.div {...REVEAL_UP}>
              <h2 className="marketing-section__title">Meet the Founder</h2>
              <p className="marketing-section__desc">The engineer behind Qubit Calculus.</p>
            </motion.div>
          </div>

          <div className="mx-auto max-w-lg">
            <motion.div
              {...REVEAL_UP}
              className="marketing-card team-card text-center"
              style={{ padding: '2.5rem' }}
            >
              <div
                className="team-card__avatar mx-auto"
                style={{
                  width: '5rem',
                  height: '5rem',
                  fontSize: '1.5rem',
                  background:
                    'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                }}
              >
                BL
              </div>
              <h3 className="team-card__name mt-4">Burca Lucas</h3>
              <p className="team-card__role">Founder & Lead Engineer</p>
              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Full-stack engineer with 8+ years of experience building production systems.
                Specializes in React, TypeScript, real-time architectures, and AI integrations.
                Based in Georgia, serving clients worldwide.
              </p>
              <div className="mt-4 flex justify-center gap-4">
                <a
                  href="https://github.com/qubitcalculus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: 'var(--color-primary)' }}
                >
                  GitHub →
                </a>
                <a
                  href="mailto:hello@qubitcalculus.com"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: 'var(--color-primary)' }}
                >
                  Contact →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="marketing-section marketing-section--alt">
        <div className="marketing-section__container">
          <motion.div {...REVEAL_UP} className="text-center">
            <h2 className="marketing-section__title">Let's Build Together</h2>
            <p className="marketing-section__desc mx-auto max-w-2xl" style={{ lineHeight: 1.8 }}>
              Whether you need an MVP in 4 weeks or a full enterprise platform, we're ready
              to turn your vision into reality. Let's start with a conversation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="marketing-btn marketing-btn--primary"
              >
                Start Your Project
              </a>
              <a href="mailto:hello@qubitcalculus.com" className="marketing-btn marketing-btn--secondary">
                hello@qubitcalculus.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </MarketingLayout>
  );
}
