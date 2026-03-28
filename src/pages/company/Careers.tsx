/**
 * Careers Page — Qubit Calculus Agency
 *
 * Open positions and agency culture.
 */

import { motion } from 'framer-motion';
import { MarketingLayout } from '@/components/marketing';
import { REVEAL_UP } from '../../lib/motion-presets';
import SEO, { breadcrumbJsonLd } from '@/components/SEO';

const benefits = [
  {
    icon: '🌍',
    title: 'Remote-First',
    description: 'Work from anywhere in the world. We value results over time zones.',
  },
  {
    icon: '⚡',
    title: 'High Impact',
    description: 'Build core products for exciting startups and transforming industries.',
  },
  {
    icon: '🎨',
    title: 'Creative Freedom',
    description: 'We encourage experimentation and using the latest tech stacks.',
  },
  {
    icon: '🚀',
    title: 'Growth Budget',
    description: 'Continuous learning is part of our DNA. We fund your professional growth.',
  },
];

const positions = [
  {
    id: 'full-stack-eng',
    title: 'Senior Full-stack Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time / Contract',
    description: 'Build high-performance web and mobile applications using React, Node.js, and modern cloud infrastructure.',
    requirements: [
      '5+ years of experience with React/Next.js',
      'Strong understanding of TypeScript and Node.js',
      'Experience with PostgreSQL and Redis',
      'A keen eye for UI/UX and performance optimization',
    ],
  },
  {
    id: 'product-designer',
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time / Contract',
    description: 'Design premium, high-fidelity interfaces that wow users and solve complex business problems.',
    requirements: [
      'Strong portfolio of SaaS or mobile app designs',
      'Expertise in Figma and prototyping tools',
      'Understanding of Framer Motion or interaction design',
      'Ability to translate complex requirements into clean visuals',
    ],
  },
];

const values = [
  {
    title: 'Excellence by Default',
    description: 'We don\'t do "good enough". We build premium experiences that set new standards.',
  },
  {
    title: 'Velocity & Transparency',
    description: 'We move fast and keep clients in the loop with daily progress and clear communication.',
  },
  {
    title: 'Atomic Thinking',
    description: 'We break down complex problems into manageable, high-quality components.',
  },
  {
    title: 'Partner Mindset',
    description: 'We don\'t just take orders; we act as technical partners to ensure project success.',
  },
];

export default function Careers() {
  return (
    <MarketingLayout
      title="Join Our Team"
      subtitle="Build the next generation of digital products with a team of elite engineers and designers."
    >
      <SEO
        title="Careers"
        description="Join Qubit Calculus — a remote-first software agency. We're hiring senior engineers, designers, and product people. Competitive pay, async culture, real projects."
        path="/careers"
        keywords="software developer jobs, remote engineering jobs, React developer careers, design jobs, startup jobs"
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Careers', path: '/careers' },
        ])}
      />
      {/* Values Section */}
      <section className="marketing-section marketing-section--alt">
        <div className="marketing-section__container">
          <div className="marketing-section__header">
            <motion.div {...REVEAL_UP}>
              <h2 className="marketing-section__title">What We Believe</h2>
              <p className="marketing-section__desc">The core principles that drive our agency forward</p>
            </motion.div>
          </div>

          <div
            className="marketing-grid marketing-grid--2"
            style={{ maxWidth: '48rem', margin: '0 auto' }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                {...REVEAL_UP}
                transition={{ delay: index * 0.1 }}
                className="marketing-card"
              >
                <h3 className="marketing-card__title">{value.title}</h3>
                <p className="marketing-card__desc">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="marketing-section marketing-section--dark">
        <div className="marketing-section__container">
          <div className="marketing-section__header">
            <motion.div {...REVEAL_UP}>
              <h2 className="marketing-section__title">Boutique Perks</h2>
              <p className="marketing-section__desc">
                We take care of our elite talent so they can focus on world-class execution
              </p>
            </motion.div>
          </div>

          <div
            className="marketing-grid marketing-grid--2"
            style={{ maxWidth: '64rem', margin: '0 auto' }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                {...REVEAL_UP}
                transition={{ delay: index * 0.05 }}
                className="marketing-card"
              >
                <span className="marketing-card__icon" style={{ fontSize: '2rem', marginBottom: '1rem', display: 'block' }}>
                  {benefit.icon}
                </span>
                <h3 className="marketing-card__title">{benefit.title}</h3>
                <p className="marketing-card__desc">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="marketing-section marketing-section--alt">
        <div className="mx-auto max-w-4xl px-4">
          <div className="marketing-section__header">
            <motion.div {...REVEAL_UP}>
              <h2 className="marketing-section__title">Open Positions</h2>
              <p className="marketing-section__desc">Find your next challenge</p>
            </motion.div>
          </div>

          <div className="space-y-6">
            {positions.map((position, index) => (
              <motion.div
                key={position.id}
                {...REVEAL_UP}
                transition={{ delay: index * 0.1 }}
                className="marketing-card"
              >
                <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: 'var(--color-text-heading)' }}>{position.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs text-indigo-400 border border-indigo-500/20">
                        {position.department}
                      </span>
                      <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300 border border-white/10">
                        {position.location}
                      </span>
                      <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300 border border-white/10">
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <a
                    href={`mailto:hello@qubitcalculus.com?subject=Application: ${position.title}`}
                    className="marketing-btn marketing-btn--primary"
                  >
                    Apply Now
                  </a>
                </div>

                <p className="mb-6" style={{ color: 'var(--color-text-muted)' }}>{position.description}</p>

                <div>
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">Requirements:</h4>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {position.requirements.map((req, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                        <span className="text-indigo-400">▹</span> {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div {...REVEAL_UP} className="mt-12 text-center">
            <p style={{ color: 'var(--color-text-muted)' }}>
              Don't see a role that fits? Send us an open application at <a href="mailto:hello@qubitcalculus.com" className="text-indigo-400 hover:underline">hello@qubitcalculus.com</a>
            </p>
          </motion.div>
        </div>
      </section>
    </MarketingLayout>
  );
}
