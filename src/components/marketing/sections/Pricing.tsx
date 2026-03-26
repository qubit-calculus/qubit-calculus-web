/**
 * Pricing Section
 *
 * 3-tier engagement model comparison for agency services.
 * Transparent starting prices with clear scope for each tier.
 */

import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { LandingButton } from '../ui/LandingButton';
import { pricingTiers } from '@/data/pricing-data';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export const PricingSection = memo(function PricingSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="pricing" className="pricing-section zoom-section">
      <SectionHeader
        title="Transparent"
        titleAccent="Pricing"
        titleAccentClass="title-fx--air"
        description="Fixed project pricing with no hidden fees. You know exactly what you're paying before a single line of code is written."
      />

      {/* Engagement model note */}
      <div className="mx-auto mb-12 flex items-center justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-400">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Every project includes a free consultation & detailed estimate
        </span>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
        {pricingTiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            custom={i}
            variants={prefersReduced ? {} : cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className={`relative rounded-2xl border p-8 transition-colors duration-500 ${
              tier.highlighted
                ? 'border-indigo-500/30 dark:border-indigo-500/50 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-950/40 dark:to-dark-900/80 shadow-lg shadow-indigo-500/10 dark:shadow-[0_0_40px_rgba(99,102,241,0.15)]'
                : 'border-black/5 dark:border-dark-700/50 bg-white dark:bg-dark-900/60 shadow-sm dark:shadow-none'
            }`}
          >
            {tier.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              </div>
            )}

            <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100 transition-colors duration-500">{tier.name}</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-slate-400 transition-colors duration-500">{tier.description}</p>

            <div className="mt-6">
              <span className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-500">{tier.price}</span>
              <span className="ml-2 text-sm text-slate-500">{tier.period}</span>
            </div>

            <div className="mt-8">
              <LandingButton
                href={tier.ctaLink}
                variant={tier.highlighted ? 'primary' : 'secondary'}
                size="md"
                className="w-full justify-center"
              >
                {tier.cta}
              </LandingButton>
            </div>

            <ul className="mt-8 space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-gray-700 dark:text-slate-300 transition-colors duration-500">
                  <svg
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Custom project note */}
      <div className="mx-auto mt-12 max-w-2xl text-center">
        <p className="text-sm text-gray-500">
          Need something different? We offer flexible engagement models including time & materials,
          dedicated teams, and retainer agreements.{' '}
          <a href="/contact" className="text-indigo-400 hover:text-indigo-300 transition-colors">
            Let's discuss your project →
          </a>
        </p>
      </div>
    </section>
  );
});
