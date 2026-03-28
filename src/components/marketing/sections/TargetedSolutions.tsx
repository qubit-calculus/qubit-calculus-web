import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';

const solutions = [
  {
    title: 'Startup MVP Acceleration',
    description: 'From idea to market-ready MVP in weeks, not months. We build scalable, high-performance foundations that attract top-tier investors.',
    icon: (
      <svg className="w-7 h-7 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    details: ['Rapid Prototyping', 'Investor-Ready Tech', 'Scalable Architecture'],
  },
  {
    title: 'High-Performance Web & Mobile Apps',
    description: 'Native-quality iOS and Android applications paired with lightning-fast web dashboards, engineered to scale to millions of active users.',
    icon: (
      <svg className="w-7 h-7 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    details: ['React Native & iOS/Android', 'Next.js Web Platforms', 'Real-time Sync'],
  },
  {
    title: 'Enterprise Legacy Modernization',
    description: 'Fast, secure, and reliable upgrades for existing businesses. We migrate outdated systems to modern cloud infrastructure with zero downtime.',
    icon: (
      <svg className="w-7 h-7 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    details: ['Cloud Migrations', 'Performance Audits', 'Zero-Downtime Rollouts'],
  }
];

export function TargetedSolutions() {
  return (
    <section className="zoom-section relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 md:mb-24 flex justify-between items-end gap-8">
          <SectionHeader
            title="Engineered for your"
            titleAccent="exact stage."
            description="Whether you're a funded startup needing a bulletproof MVP, or an enterprise modernizing legacy tech, we deliver elite engineering at Vercel-like velocities."
          />
          <div className="hidden md:block shrink-0 pb-4">
            <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-sm font-medium text-gray-700 dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
              Discuss Your Project
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col p-8 rounded-[32px] bg-gradient-to-b from-white/70 to-white/20 dark:from-white/[0.04] dark:to-transparent border border-black/5 dark:border-white/[0.08] hover:border-black/10 dark:hover:border-white/[0.15] transition-all duration-300 shadow-xl dark:shadow-2xl"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-transparent to-blue-500/0 group-hover:from-indigo-500/5 group-hover:to-blue-500/5 rounded-[32px] transition-colors duration-500 pointer-events-none" />
              
              <div className="mb-8 flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/10 group-hover:scale-110 group-hover:bg-gray-50 dark:group-hover:bg-white/[0.06] transition-all duration-300 shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                  {solution.title}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 flex-grow text-[15px] transition-colors duration-300">
                {solution.description}
              </p>

              <div className="pt-6 border-t border-black/5 dark:border-white/5 transition-colors duration-300">
                <ul className="space-y-3">
                  {solution.details.map((detail) => (
                    <li key={detail} className="flex items-center text-[13px] text-gray-500 dark:text-gray-300 font-medium uppercase tracking-wider transition-colors duration-300">
                      <svg className="w-3.5 h-3.5 mr-3 text-indigo-500 dark:text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <polyline points="20 6 9 17 4 12" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
