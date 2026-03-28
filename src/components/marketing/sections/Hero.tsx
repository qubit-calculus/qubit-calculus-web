/**
 * Hero Component
 *
 * Premium hero section with Spline 3D background.
 * Clean gradient-border CTA buttons. Indigo-blue brand palette.
 */

import { memo, useState, useEffect, Suspense, lazy } from 'react';
import { motion, useReducedMotion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
const Spline = lazy(() => import('@splinetool/react-spline'));
import ErrorBoundary from '../../ErrorBoundary';
import { GradientText } from '../ui/GradientText';
import './Hero.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const subtitles = [
  'We turn complex business challenges into elegant, scalable software.',
  'AI-powered solutions, Web3 infrastructure, and real-time platforms.',
  'From MVP to enterprise scale — shipped in weeks, not months.',
] as const;

const Hero = memo(function Hero(): React.JSX.Element {
  const prefersReduced = useReducedMotion();
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [splineLoaded, setSplineLoaded] = useState(false);
  useEffect(() => {
    if (prefersReduced) return;
    const interval = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [prefersReduced]);

  // Timeout: if Spline hasn't loaded in 15s, hide the loading overlay anyway
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!splineLoaded) setSplineLoaded(true);
    }, 15000);
    return () => clearTimeout(timeout);
  }, [splineLoaded]);

  const { scrollY } = useScroll();
  const scrollOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      className="hero-pro relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Qubit Calculus — Precision Software, Elegantly Solved"
    >
      {/* Spline 3D Background — dark mode only */}
      <div className="hidden dark:block absolute inset-0 z-0" style={{ width: '100%', height: '100%' }}>
        {!prefersReduced ? (
          <Suspense fallback={<div className="w-full h-full bg-[#030712]" />}>
            <ErrorBoundary fallback={<div className="w-full h-full bg-[#030712]" />}>
              <Spline
                scene="https://prod.spline.design/q8dNmgcPXGW7qt05/scene.splinecode"
                style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
                onLoad={() => setSplineLoaded(true)}
              />
            </ErrorBoundary>
          </Suspense>
        ) : (
          <div className="w-full h-full bg-[#030712]" />
        )}

        {/* Loading fallback — fades out when Spline loads */}
        <motion.div
          className="absolute inset-0 bg-[#030712] pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: splineLoaded ? 0 : 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          style={{ zIndex: splineLoaded ? -1 : 1 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)] animate-pulse" />
        </motion.div>

        {/* Subtle vignette for text readability — NOT covering the center */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/70 via-transparent to-[#030712]/30 pointer-events-none" style={{ zIndex: 2 }} />
      </div>

      {/* Light mode fallback */}
      <div className="dark:hidden absolute inset-0 z-0">
        <div className="w-full h-full bg-[#f9fafb]" />
        <div className="hero-pro__mesh absolute inset-[-50%]" />
        <div className="hero-pro__orb hero-pro__orb--indigo" />
        <div className="hero-pro__orb hero-pro__orb--blue" />
        <div className="hero-pro__orb hero-pro__orb--cyan" />
      </div>

      {/* Content */}
      <motion.div
        className="hero-pro__content relative z-10"
        variants={prefersReduced ? undefined : containerVariants}
        initial={prefersReduced ? 'visible' : 'hidden'}
        animate="visible"
      >
        {/* Title */}
        <motion.h1 variants={itemVariants} className="hero-pro__title text-center text-5xl md:text-7xl font-extrabold">
          <span className="hero-pro__title-line block text-gray-900 dark:text-white transition-colors duration-500">We Build Software</span>
          <GradientText
            variant="indigo-blue"
            animated
            as="span"
            className="hero-pro__title-accent mt-2 block"
          >
            That Drives Growth
          </GradientText>
        </motion.h1>

        {/* Cycling Subtitle */}
        <motion.div variants={itemVariants} className="hero-pro__subtitle-wrap mt-8 text-center max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.p
              key={subtitleIndex}
              className="hero-pro__subtitle text-lg md:text-xl text-gray-600 dark:text-slate-300 transition-colors duration-500"
              initial={prefersReduced ? {} : { opacity: 0, y: 12, filter: 'blur(4px)' }}
              animate={{ opacity: 0.85, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
              transition={{ duration: 0.5 }}
            >
              {subtitles[subtitleIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary — Gradient border + frosted glass fill */}
          <a
            href="/contact"
            className="hero-cta-primary group relative inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-base font-semibold text-indigo-600 dark:text-white overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
          >
            {/* Animated gradient border ring */}
            <span className="absolute inset-0 rounded-full p-[1.5px] hero-cta-border">
              <span className="block h-full w-full rounded-full bg-white/90 dark:bg-[#0c0c18]/80 backdrop-blur-2xl transition-colors duration-500" />
            </span>
            {/* Gradient fill on hover */}
            <span className="absolute inset-[1.5px] rounded-full bg-gradient-to-r from-indigo-600/0 via-blue-500/0 to-indigo-500/0 group-hover:from-indigo-600/30 group-hover:via-blue-500/20 group-hover:to-indigo-500/30 transition-all duration-500" />
            {/* Glow */}
            <span className="absolute -inset-1 rounded-full bg-indigo-500/0 group-hover:bg-indigo-500/20 blur-xl transition-all duration-500 -z-10" />
            <span className="relative z-10 flex items-center gap-2.5">
              Get a Free Estimate
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>

          {/* Secondary — Ghost with subtle border */}
          <a
            href="#work"
            className="hero-cta-secondary group relative inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-medium overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
          >
            <span className="absolute inset-0 rounded-full border border-gray-300 dark:border-white/20 group-hover:border-indigo-300 dark:group-hover:border-white/40 transition-colors duration-300" />
            <span className="absolute inset-0 rounded-full bg-transparent group-hover:bg-indigo-50 dark:group-hover:bg-white/5 transition-colors duration-300" />
            <span className="relative z-10 text-gray-700 dark:text-white/80 group-hover:text-indigo-600 dark:group-hover:text-white transition-colors duration-300">
              View Our Work
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
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

      <style>{`
        .hero-cta-border {
          background: linear-gradient(135deg, #6366f1, #3b82f6, #6366f1, #818cf8);
          background-size: 300% 300%;
          animation: hero-border-rotate 4s ease infinite;
        }
        @keyframes hero-border-rotate {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
});

export default Hero;
