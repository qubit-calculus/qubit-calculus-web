/**
 * CTA Section
 *
 * Final call-to-action encouraging visitors to start their project.
 * Dual CTAs for different buyer intent levels with trust signals.
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
    <section className="cta zoom-section relative py-24 md:py-32 bg-gray-50 dark:bg-[#050508] transition-colors duration-500 overflow-hidden">
      <motion.div
        className="cta__content"
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

        <motion.div variants={staggerItem} className="cta__buttons flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/contact"
            className="group relative inline-flex items-center gap-2 rounded-full bg-indigo-600 px-10 py-4 text-lg font-bold text-white shadow-[0_0_30px_-5px_rgba(99,102,241,0.4)] transition-all duration-300 hover:bg-indigo-500 hover:shadow-[0_0_40px_-5px_rgba(99,102,241,0.6)] active:scale-95"
          >
            Book Free Consultation
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="mailto:hello@qubitcalculus.com"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/20 bg-black/5 dark:bg-white/5 px-10 py-4 text-lg font-medium text-gray-700 dark:text-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/30 hover:text-black dark:hover:text-white active:scale-95"
          >
            hello@qubitcalculus.com
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
    </section>
  );
}
