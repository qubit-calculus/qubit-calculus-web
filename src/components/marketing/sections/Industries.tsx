import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';

const industries = [
  {
    name: 'FinTech & Banking',
    description: 'Secure payment systems, trading platforms, compliance dashboards, and real-time financial data processing.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    color: 'emerald',
  },
  {
    name: 'Healthcare',
    description: 'HIPAA-compliant platforms, patient portals, telehealth systems, and clinical data management tools.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    color: 'rose',
  },
  {
    name: 'SaaS & Startups',
    description: 'MVP development, product-market fit iterations, scalable multi-tenant architectures, and growth-stage engineering.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    color: 'blue',
  },
  {
    name: 'E-Commerce',
    description: 'Custom storefronts, inventory management, payment integrations, and high-conversion checkout flows.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
    color: 'orange',
  },
  {
    name: 'Real Estate & PropTech',
    description: 'Property management platforms, virtual tour systems, CRM integrations, and marketplace applications.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
    color: 'blue',
  },
  {
    name: 'Logistics & Supply Chain',
    description: 'Fleet tracking, warehouse management, predictive analytics, and real-time delivery optimization.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.029-.504 1.029-1.125v-3m-6.75 0V7.5m3.375 0A1.125 1.125 0 0119.5 8.625v3m-9.75 0h6.375m-6.375 0H6.75m0 0v-3.75m0 3.75h-1.5" />
      </svg>
    ),
    color: 'cyan',
  },
];

const colorClasses: Record<string, { text: string; border: string; bg: string }> = {
  emerald: { text: 'text-indigo-400', border: 'group-hover:border-indigo-400/40', bg: 'from-indigo-400/20' },
  rose: { text: 'text-blue-500', border: 'group-hover:border-blue-500/40', bg: 'from-blue-500/20' },
  blue: { text: 'text-indigo-500', border: 'group-hover:border-indigo-500/40', bg: 'from-indigo-500/20' },
  orange: { text: 'text-cyan-500', border: 'group-hover:border-cyan-500/40', bg: 'from-cyan-500/20' },
  purple: { text: 'text-blue-400', border: 'group-hover:border-blue-400/40', bg: 'from-blue-400/20' },
  cyan: { text: 'text-indigo-600', border: 'group-hover:border-indigo-600/40', bg: 'from-indigo-600/20' },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export const Industries = () => {
  return (
    <section className="zoom-section relative py-24 md:py-32 px-6 bg-white dark:bg-[#050508] border-t border-black/5 dark:border-white/5 overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Industries We"
          titleAccent="Transform"
          titleAccentClass="title-fx--neon"
          description="Deep domain expertise across high-growth sectors. We understand your industry’s unique challenges and regulatory requirements."
        />

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {industries.map((ind) => {
            const colors = colorClasses[ind.color];
            return (
              <motion.div
                key={ind.name}
                variants={staggerItem}
                className={`group relative overflow-hidden rounded-2xl border border-black/5 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02] p-8 transition-colors duration-500 shadow-sm dark:shadow-none ${colors.border}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} to-transparent opacity-0 group-hover:opacity-10 dark:group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                <div className="relative z-10">
                  <div className={`mb-5 inline-flex p-3 rounded-xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm dark:shadow-none transition-colors duration-500 ${colors.text}`}>
                    {ind.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 tracking-tight transition-colors duration-500">{ind.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-500">{ind.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
