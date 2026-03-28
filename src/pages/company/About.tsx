/**
 * About Page — Qubit Calculus Software Agency
 *
 * Company story, team, values, tech expertise, and why clients choose us.
 */

import { motion } from 'framer-motion';

const springs = { bouncy: { type: 'spring' as const, stiffness: 300, damping: 10 } };
import { MarketingLayout } from '@/components/marketing';
import { REVEAL_UP } from '../../lib/motion-presets';
import SEO, { breadcrumbJsonLd } from '@/components/SEO';

const agencyStats = [
  { label: 'Projects Shipped', value: '40+', detail: 'Startups & SMBs' },
  { label: 'Avg. MVP Timeline', value: '5 Weeks', detail: 'Concept to Launch' },
  { label: 'Tech Modernizations', value: '12', detail: 'Legacy code refactored' },
  { label: 'Client Satisfaction', value: '100%', detail: 'Measured by real value' },
];


export default function About() {
  return (
    <MarketingLayout
      title="About Qubit Calculus"
      subtitle="A pragmatic software agency helping startups ship fast and old companies modernize their tech era."
    >
      <SEO
        title="About Us"
        description="Qubit Calculus is a software development agency helping startups ship MVPs in 4-6 weeks and enterprises modernize legacy systems. Remote-first, global team."
        path="/about"
        keywords="about Qubit Calculus, software agency, startup development, enterprise modernization"
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />
      {/* Mission Section */}
      <section className="marketing-section marketing-section--alt">
        <div className="marketing-section__container">
          <motion.div {...REVEAL_UP} className="mx-auto max-w-3xl text-center">
            <h2 className="marketing-section__title">Building the Future, Modernizing the Past</h2>
            <p className="text-xl leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              Qubit Calculus was born out of a desire to provide high-end engineering without the enterprise bloat. 
              Whether you're a founder with a napkin sketch or an established business owner struggling with 10-year-old code, 
              we act as your <span className="marketing-hero__highlight">dedicated technology partner</span> to bring your vision into the modern era.
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
