import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';

const steps = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    desc: 'We start by deeply understanding your business goals, target audience, and technical constraints to architect the optimal solution.',
    color: 'indigo'
  },
  {
    num: '02',
    title: 'UI/UX Design',
    desc: 'Our design team crafts intuitive, pixel-perfect interfaces that prioritize user experience and brand identity.',
    color: 'blue'
  },
  {
    num: '03',
    title: 'Agile Development',
    desc: 'We build robust systems using modern stacks, providing bi-weekly sprints so you have constant visibility into our progress.',
    color: 'blue'
  },
  {
    num: '04',
    title: 'Launch & Scale',
    desc: 'Rigorous QA testing precedes deployment. Once live, we ensure your infrastructure scales seamlessly with user demand.',
    color: 'orange'
  }
];

export const HowWeWork = () => {
  return (
    <section id="process" className="zoom-section relative py-24 md:py-32 px-6 bg-white dark:bg-[#0a0a0f] transition-colors duration-500">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="How We Deliver"
          titleAccent="Excellence"
          titleAccentClass="title-fx--air"
          description="A transparent, iterative process designed to mitigate risk and deliver high-quality software on time."
        />

        <div className="mt-20 relative">
          {/* Vertical connector line (desktop) */}
          <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/0 via-blue-500/50 to-cyan-500/0 -translate-x-1/2" />

          <div className="space-y-16">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? '' : 'md:flex-row-reverse'}`}
                >
                  {/* Content Box */}
                  <div className={`flex-1 w-full md:w-1/2 p-8 rounded-2xl border border-black/5 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02] backdrop-blur-sm group hover:border-${step.color}-500/30 transition-colors duration-500 shadow-sm dark:shadow-none`}>
                    <div className="flex items-center mb-4">
                      <span className={`text-4xl font-extrabold text-${step.color}-500/40 dark:text-${step.color}-500/30 group-hover:text-${step.color}-500/80 dark:group-hover:text-${step.color}-500/60 transition-colors mr-4`}>
                        {step.num}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-500">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed transition-colors duration-500">
                      {step.desc}
                    </p>
                  </div>

                  {/* Center Node */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-4 border-white dark:border-[#0a0a0f] bg-gray-100 dark:bg-gray-900 items-center justify-center z-10 transition-colors duration-500 shadow-sm dark:shadow-none">
                    <div className={`w-3 h-3 rounded-full bg-${step.color}-500 shadow-[0_0_15px_rgba(var(--${step.color}-500),0.8)]`} />
                  </div>

                  {/* Empty space for the other side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
