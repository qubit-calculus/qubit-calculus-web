import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';

const testimonials = [
  {
    quote: "Qubit Calculus turned our outdated system into a modern platform that handles 10x the traffic. Their team delivered ahead of schedule and the code quality was exceptional.",
    name: 'Sarah Chen',
    title: 'CTO, FinEdge Technologies',
    metric: '10x traffic capacity',
  },
  {
    quote: "We needed an AI-powered analytics dashboard fast. Qubit Calculus went from discovery to production in 6 weeks. Our team now makes data-driven decisions in real time.",
    name: 'Marcus Rivera',
    title: 'VP Engineering, Meridian Health',
    metric: '6-week delivery',
  },
  {
    quote: "The smart contract audit and dApp they built for us has processed over $8M in transactions with zero security incidents. Their blockchain expertise is world-class.",
    name: 'James Okonkwo',
    title: 'Founder, Apex DeFi',
    metric: '$8M+ processed securely',
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export const Testimonials = () => {
  return (
    <section className="zoom-section relative py-24 md:py-32 px-6 bg-[#fafafa] dark:bg-[#0a0a0f] transition-colors duration-500 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-500/5 blur-[150px] pointer-events-none rounded-full transition-colors duration-500" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="What Our Clients"
          titleAccent="Say"
          titleAccentClass="title-fx--air"
          description="We measure success by the impact we create for our clients' businesses."
        />

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/[0.02] p-8 transition-colors duration-500 hover:border-indigo-500/30 shadow-sm dark:shadow-none"
            >
              {/* Quote icon */}
              <svg className="w-10 h-10 text-indigo-500/30 mb-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-gray-700 dark:text-gray-300 transition-colors duration-500 leading-relaxed text-lg mb-8 italic">
                “{t.quote}”
              </p>

              {/* Metric badge */}
              <div className="mb-6">
                <span className="inline-flex items-center rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400 transition-colors duration-500">
                  {t.metric}
                </span>
              </div>

              {/* Author */}
              <div className="flex flex-col gap-1 pt-4 border-t border-black/5 dark:border-white/10 transition-colors duration-500">
                <div className="font-semibold text-gray-900 dark:text-white transition-colors duration-500">{t.name}</div>
                <div className="text-sm text-gray-500">{t.title}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
