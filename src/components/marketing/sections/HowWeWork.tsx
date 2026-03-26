import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { ExcellenceDiagram } from './ExcellenceDiagram';
import { REVEAL_UP } from '../../../lib/motion-presets';

const excellencePillars = [
  {
    icon: '🛡️',
    title: 'Fortified Security',
    desc: 'Enterprise-grade protection with zero-trust architecture and continuous auditing.',
    color: 'indigo'
  },
  {
    icon: '🚀',
    title: 'Velocity at Scale',
    desc: 'Rapid iteration cycles that prioritize speed without compromising structural integrity.',
    color: 'cyan'
  },
  {
    icon: '🤝',
    title: 'Strategic Partnership',
    desc: 'We embed with your team to align technical execution with core business objectives.',
    color: 'blue'
  },
  {
    icon: '⚛️',
    title: 'AI-Native Systems',
    desc: 'Harnessing advanced intelligence to automate complexity and reveal deep insights.',
    color: 'purple'
  },
  {
    icon: '🏗️',
    title: 'Scalable Foundation',
    desc: 'Modular, future-proof architectures designed to evolve with your user base.',
    color: 'blue'
  },
  {
    icon: '🚩',
    title: 'Mission Driven',
    desc: 'Focusing on the finish line: delivering measurable impact and long-term success.',
    color: 'orange'
  }
];

export const HowWeWork = () => {
  return (
    <section id="process" className="relative py-20 md:py-32 px-6 bg-white dark:bg-[#0a0a0f] transition-colors duration-500 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-5">
            <motion.div {...REVEAL_UP}>
              <SectionHeader
                title="How We Deliver"
                titleAccent="Excellence"
                titleAccentClass="title-fx--air"
                description="Our approach combines 3D architectural precision with agile execution to build systems that lead the market."
                align="left"
              />
            </motion.div>

            <div className="mt-12 space-y-8">
              {excellencePillars.map((pillar, index) => (
                <motion.div 
                  key={pillar.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors duration-300"
                >
                  <div className={`w-12 h-12 rounded-lg bg-${pillar.color}-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <span className="text-2xl">{pillar.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-indigo-500 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Spline Column */}
          <div className="lg:col-span-7 relative h-[500px] lg:h-[700px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full h-full flex items-center justify-center p-8"
            >
              <ExcellenceDiagram />
              
              {/* Overlay Callout */}
              <div className="absolute bottom-6 right-6 p-4 rounded-2xl backdrop-blur-md bg-white/70 dark:bg-black/40 border border-white/20 dark:border-white/10 shadow-xl hidden md:block">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1">
                  Precision Engineering
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                  <span className="text-sm font-bold text-gray-900 dark:text-white">Active React Diagram</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
