/**
 * How We Deliver Section
 *
 * Professional process timeline with refined icons,
 * smooth hover states, and animated connecting lines.
 */

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'Deep-dive into your business goals, technical landscape, and user needs. We map the architecture before writing a single line of code.',
    details: ['Stakeholder interviews', 'Technical audit', 'Architecture blueprint', 'Risk assessment'],
    gradient: 'from-indigo-500 to-blue-500',
    glowColor: 'rgba(99, 102, 241, 0.35)',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Design & Prototype',
    description: 'High-fidelity prototypes validated with real users. Every pixel is intentional, every interaction is tested.',
    details: ['Wireframes & user flows', 'Interactive prototypes', 'Design system creation', 'Usability testing'],
    gradient: 'from-blue-500 to-cyan-500',
    glowColor: 'rgba(59, 130, 246, 0.35)',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Build & Iterate',
    description: 'Agile sprints with weekly demos. You see progress in real time — not at the end of a black-box cycle.',
    details: ['2-week sprint cycles', 'CI/CD pipeline', 'Code reviews & QA', 'Weekly progress demos'],
    gradient: 'from-indigo-600 to-indigo-400',
    glowColor: 'rgba(99, 102, 241, 0.35)',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="12" y1="2" x2="12" y2="22" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Launch & Scale',
    description: 'Zero-downtime deployment, performance monitoring, and a handoff that actually works. We stay on call post-launch.',
    details: ['Load testing & optimization', 'Zero-downtime deploy', 'Monitoring & alerts', '90-day support window'],
    gradient: 'from-blue-600 to-indigo-500',
    glowColor: 'rgba(59, 130, 246, 0.35)',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Connecting line to next step */}
      {index < steps.length - 1 && (
        <motion.div
          className="absolute left-8 top-[5.5rem] w-px hidden lg:block"
          style={{ height: 'calc(100% - 2rem)' }}
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.8, delay: index * 0.15 + 0.4, ease: 'easeOut' }}
        >
          <div className={`w-full h-full bg-gradient-to-b ${step.gradient} opacity-20`} />
        </motion.div>
      )}

      <div className="relative flex gap-6 lg:gap-8 p-6 rounded-2xl transition-all duration-500 bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm hover:bg-white/70 dark:hover:bg-white/[0.05] border border-gray-200/30 dark:border-white/[0.04] hover:border-gray-300/50 dark:hover:border-white/10 shadow-sm hover:shadow-md dark:shadow-none">
        {/* Step number + icon */}
        <div className="relative shrink-0">
          {/* Glow behind icon — always slightly visible, stronger on hover */}
          <div
            className="absolute -inset-3 rounded-3xl opacity-30 group-hover:opacity-60 blur-2xl transition-all duration-700 -z-10"
            style={{ background: step.glowColor }}
          />
          <motion.div
            className="relative w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden border border-white/[0.15] dark:border-white/[0.12] shadow-lg group-hover:shadow-xl transition-all duration-500"
            whileHover={{ scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            style={{
              background: `linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))`,
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
            }}
          >
            {/* Colored gradient overlay — subtle tint */}
            <div
              className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500"
              style={{ background: `linear-gradient(135deg, ${step.glowColor}, transparent 70%)` }}
            />
            {/* Top-left glass shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent pointer-events-none" />
            {/* Bottom highlight line */}
            <div className="absolute bottom-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <span className="relative z-10 text-white drop-shadow-sm">{step.icon}</span>
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <span className={`text-xs font-bold uppercase tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r ${step.gradient}`}>
              Step {step.number}
            </span>
            <div className={`h-px flex-1 bg-gradient-to-r ${step.gradient} opacity-10 group-hover:opacity-30 transition-opacity duration-500`} />
          </div>

          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
            {step.title}
          </h3>

          <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4 transition-colors duration-500">
            {step.description}
          </p>

          {/* Detail chips */}
          <div className="flex flex-wrap gap-2">
            {step.details.map((detail, i) => (
              <motion.span
                key={detail}
                className="text-xs px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200/50 dark:border-white/5 group-hover:border-indigo-200/50 dark:group-hover:border-indigo-500/20 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/5 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.15 + 0.3 + i * 0.05 }}
              >
                {detail}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function AnimatedMetric({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="text-center p-6 rounded-2xl bg-gray-50/50 dark:bg-white/[0.02] border border-gray-200/50 dark:border-white/5 transition-colors duration-500"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <motion.div
        className="text-3xl lg:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500"
        initial={{ scale: 0.5 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: delay + 0.1 }}
      >
        {value}
      </motion.div>
      <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-medium">{label}</div>
    </motion.div>
  );
}

export const HowWeWork = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative py-24 md:py-36 px-6 transition-colors duration-500 overflow-hidden"
    >
      {/* Parallax ambient glow */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 dark:bg-indigo-500/8 blur-[160px] rounded-full pointer-events-none"
        style={{ y: backgroundY }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 dark:bg-blue-500/6 blur-[120px] rounded-full pointer-events-none"
        style={{ y: backgroundY }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <SectionHeader
            title="How We Deliver"
            titleAccent="Excellence"
            titleAccentClass="title-fx--air"
            description="A battle-tested process refined across dozens of successful launches. Four phases, zero surprises."
            align="center"
          />
        </motion.div>

        {/* Process Steps — Vertical Timeline */}
        <div className="space-y-4 lg:space-y-2 mb-20">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>

        {/* Metrics Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatedMetric value="4-6 wk" label="Average MVP delivery" delay={0} />
          <AnimatedMetric value="98%" label="On-time ship rate" delay={0.1} />
          <AnimatedMetric value="50+" label="Projects delivered" delay={0.2} />
          <AnimatedMetric value="24/7" label="Post-launch support" delay={0.3} />
        </motion.div>
      </div>
    </section>
  );
};
