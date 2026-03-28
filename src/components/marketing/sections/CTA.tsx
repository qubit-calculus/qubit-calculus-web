/**
 * CTA Section
 *
 * Final call-to-action with animated gradient buttons,
 * shimmer effects, and premium glassmorphic styling.
 */

import { motion, Variants } from 'framer-motion';

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

interface CTAProps {
  prefersReduced?: boolean;
}

export function CTA({ prefersReduced = false }: CTAProps) {
  return (
    <section className="cta zoom-section relative py-24 md:py-32 transition-colors duration-500 overflow-hidden">
      {/* Ambient glow behind CTA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/10 dark:bg-indigo-500/8 blur-[140px] rounded-full pointer-events-none" />

      <motion.div
        className="cta__content relative z-10"
        variants={prefersReduced ? undefined : staggerContainer}
        initial={prefersReduced ? undefined : 'hidden'}
        whileInView={prefersReduced ? undefined : 'visible'}
        viewport={{ once: true, margin: '-60px' }}
      >
        <motion.div variants={staggerItem} className="text-center">
          <h2 className="section-header__title text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 transition-colors duration-500">
            Ready to Build{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400 transition-colors duration-500">
              Something Great?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4 transition-colors duration-500">
            Let's turn your vision into production-ready software. Book a free consultation
            and get a detailed project estimate within 48 hours.
          </p>
          <p className="text-sm text-gray-500 mb-10">
            No commitment required. No hidden fees. Just honest engineering advice.
          </p>
        </motion.div>

        <motion.div variants={staggerItem} className="cta__buttons flex flex-col sm:flex-row items-center justify-center gap-5">
          {/* Primary — Gradient border + dark glass interior (matches hero) */}
          <a
            href="/contact"
            className="group relative inline-flex items-center gap-2.5 rounded-full px-10 py-4 text-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
          >
            {/* Animated gradient border ring */}
            <span className="absolute inset-0 rounded-full p-[1.5px] bg-gradient-to-r from-indigo-500 via-blue-400 to-indigo-500 bg-[length:300%_300%] animate-[cta-flow_4s_ease_infinite]">
              <span className="block h-full w-full rounded-full bg-white/95 dark:bg-[#0c0c18]/80 backdrop-blur-2xl transition-colors duration-500" />
            </span>
            {/* Gradient fill on hover */}
            <span className="absolute inset-[1.5px] rounded-full bg-gradient-to-r from-indigo-600/0 via-blue-500/0 to-indigo-500/0 group-hover:from-indigo-600/20 group-hover:via-blue-500/15 group-hover:to-indigo-500/20 transition-all duration-500" />
            {/* Glow */}
            <span className="absolute -inset-1 rounded-full bg-indigo-500/0 group-hover:bg-indigo-500/20 blur-xl transition-all duration-500 -z-10" />
            <span className="relative z-10 flex items-center gap-2.5 text-indigo-600 dark:text-white transition-colors duration-500">
              Book Free Consultation
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>

          {/* Secondary — Ghost border (matches hero secondary) */}
          <a
            href="mailto:hello@qubitcalculus.com"
            className="group relative inline-flex items-center gap-2 rounded-full px-10 py-4 text-lg font-medium overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
          >
            <span className="absolute inset-0 rounded-full border border-gray-300 dark:border-white/20 group-hover:border-indigo-300 dark:group-hover:border-white/40 transition-colors duration-300" />
            <span className="absolute inset-0 rounded-full bg-transparent group-hover:bg-indigo-50 dark:group-hover:bg-white/5 transition-colors duration-300" />
            <span className="relative z-10 text-gray-700 dark:text-white/80 group-hover:text-indigo-600 dark:group-hover:text-white transition-colors duration-300 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              hello@qubitcalculus.com
            </span>
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div variants={staggerItem} className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Free project estimate
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            48-hour response
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            NDA available
          </span>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes cta-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
