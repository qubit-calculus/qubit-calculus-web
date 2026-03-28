import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Animated counter hook — supports decimals (e.g. 99.9)
function useCountUp(end: number, duration: number = 2) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: '-50px' });
  const isDecimal = end !== Math.floor(end);

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const rawValue = progress * end;
        // Preserve one decimal place if the target is a decimal number
        setCount(isDecimal ? Math.round(rawValue * 10) / 10 : Math.floor(rawValue));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, end, duration, isDecimal]);

  return { count, nodeRef };
}

const StatItem = ({ label, value, suffix = '', delay = 0 }: { label: string, value: number, suffix?: string, delay?: number }) => {
  const { count, nodeRef } = useCountUp(value, 2);
  const isDecimal = value !== Math.floor(value);

  return (
    <motion.div 
      ref={nodeRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center justify-center p-8 border-r border-black/5 dark:border-white/10 last:border-0 last:border-b-0 border-b md:border-b-0 transition-colors duration-500"
    >
      <div className="flex items-baseline mb-2">
        <span className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-600 dark:from-white dark:to-white/60 tracking-tighter tabular-nums transition-colors duration-500">
          {isDecimal ? count.toFixed(1) : count}
        </span>
        <span className="text-3xl md:text-4xl font-bold text-indigo-500 ml-1">{suffix}</span>
      </div>
      <span className="text-sm md:text-base font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">{label}</span>
    </motion.div>
  );
};

export const StatsBanner = () => {
  const noiseSvg = "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E";
  
  return (
    <section className="zoom-section relative py-16 border-y border-black/5 dark:border-white/10 overflow-hidden transition-colors duration-500">
      {/* Visual noise background overlay */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("${noiseSvg}")` }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 rounded-3xl border border-black/5 dark:border-white/10 bg-white/50 dark:bg-white/[0.01] backdrop-blur-sm overflow-hidden shadow-2xl transition-colors duration-500">
          <StatItem label="Projects Delivered" value={150} suffix="+" delay={0} />
          <StatItem label="Client Satisfaction" value={99} suffix="%" delay={0.1} />
          <StatItem label="Years Experience" value={8} suffix="+" delay={0.2} />
          <StatItem label="Uptime Record" value={99.9} suffix="%" delay={0.3} />
        </div>
      </div>
    </section>
  );
};
