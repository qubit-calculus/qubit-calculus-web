import { useState, useEffect } from 'react';
import { motion, useReducedMotion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { WebGLShader } from '../../ui/web-gl-shader';
import './Hero.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const subtitles = [
  'We turn complex business challenges into elegant, scalable software.',
  'AI-powered solutions, Web3 infrastructure, and real-time platforms.',
  'From MVP to enterprise scale — shipped in weeks, not months.',
] as const;

function Hero() {
  const prefersReduced = useReducedMotion();
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    if (prefersReduced) return;
    const interval = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [prefersReduced]);

  const { scrollY } = useScroll();
  const scrollOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      className="hero-pro relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Qubit Calculus — Precision Software, Elegantly Solved"
    >
      <div className="hidden dark:block absolute inset-0 z-0">
        {!prefersReduced ? (
          <WebGLShader />
        ) : (
          <div className="w-full h-full bg-[#030712]" />
        )}
      </div>

      <div className="dark:hidden absolute inset-0 z-0">
        <div className="w-full h-full bg-[#f9fafb]" />
        <div className="hero-pro__mesh absolute inset-[-50%]" />
        <div className="hero-pro__orb hero-pro__orb--indigo" />
        <div className="hero-pro__orb hero-pro__orb--blue" />
        <div className="hero-pro__orb hero-pro__orb--cyan" />
      </div>

      <motion.div
        className="hero-pro__content relative z-10 w-full max-w-3xl mx-auto px-4"
        variants={prefersReduced ? undefined : containerVariants}
        initial={prefersReduced ? 'visible' : 'hidden'}
        animate="visible"
      >
        <div className="relative border border-white/10 dark:border-white/10 p-8 md:p-12 overflow-hidden">
          <motion.h1 variants={itemVariants} className="text-center">
            <span className="block text-white font-extrabold tracking-tighter text-5xl md:text-[clamp(3rem,8vw,5.5rem)] leading-[1.05]">We Build Software</span>
            <span className="block text-white font-extrabold tracking-tighter text-5xl md:text-[clamp(3rem,8vw,5.5rem)] leading-[1.05]">That Drives Growth</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="mt-6 text-center max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.p
                key={subtitleIndex}
                className="text-sm md:text-base text-white/60"
                initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5 }}
              >
                {subtitles[subtitleIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 flex items-center justify-center gap-1">
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <p className="text-xs text-green-500">Available for New Projects</p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="hero-cta-primary group relative inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-base font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
            >
              <span className="absolute inset-0 rounded-full p-[1.5px] hero-cta-border">
                <span className="block h-full w-full rounded-full bg-black/60 md:backdrop-blur-2xl transition-colors duration-500" />
              </span>
              <span className="absolute inset-[1.5px] rounded-full bg-gradient-to-r from-indigo-600/0 via-blue-500/0 to-indigo-500/0 group-hover:from-indigo-600/30 group-hover:via-blue-500/20 group-hover:to-indigo-500/30 transition-all duration-500" />
              <span className="absolute -inset-1 rounded-full bg-indigo-500/0 group-hover:bg-indigo-500/20 blur-xl transition-all duration-500 -z-10" />
              <span className="relative z-10 flex items-center gap-2.5">
                Get a Free Estimate
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>

            <a
              href="#work"
              className="hero-cta-secondary group relative inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-medium overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
            >
              <span className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/40 transition-colors duration-300" />
              <span className="absolute inset-0 rounded-full bg-transparent group-hover:bg-white/5 transition-colors duration-300" />
              <span className="relative z-10 text-white/80 group-hover:text-white transition-colors duration-300">
                View Our Work
              </span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="hero-pro__scroll absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        aria-hidden="true"
        style={{ opacity: scrollOpacity }}
        onClick={() => {
          const el = document.getElementById('features');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <span className="text-xs uppercase tracking-[0.2em] text-gray-400 dark:text-slate-500">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-5 h-8 border-2 border-gray-300 dark:border-white/20 rounded-full flex justify-center p-1"
          >
            <div className="w-1 h-1 bg-indigo-500 rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
