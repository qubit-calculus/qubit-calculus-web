/**
 * Hero Component
 *
 * Professional hero section following modern SaaS patterns (Linear, Vercel, Notion).
 * Features:
 * - Animated gradient mesh background with floating glow orbs
 * - Subtle dot grid overlay
 * - Staggered Framer Motion entrance animations
 * - Product preview mockup
 * - prefers-reduced-motion respected
 *
 * @since v2.2.0
 */

import { memo, useState, useEffect, useRef, useCallback } from 'react';
import { motion, useReducedMotion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { GradientText } from '../ui/GradientText';
import { useCircuitCanvas } from './use-circuit-canvas';
import './Hero.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
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
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mousePosRef = useRef({ x: 0.5, y: 0.5 });
  const isVisibleRef = useRef(true);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const isTouchDevice = typeof window !== 'undefined' && 'ontouchstart' in window;

  // Interactive mouse tracking for parallax background layers (skipped on touch)
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (prefersReduced || isTouchDevice) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const pos = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
      setMousePos(pos);
      mousePosRef.current = pos;
    },
    [prefersReduced, isTouchDevice]
  );

  // Scroll-linked parallax — bg drifts slower, content fades out
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Circuit network canvas animation (logo-style effects)
  useCircuitCanvas(canvasRef, mousePosRef, prefersReduced, isVisibleRef);

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.75], [0, -50]);

  // Pause video + canvas when hero is off-screen (IntersectionObserver)
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry?.isIntersecting ?? false;
        isVisibleRef.current = visible;
        const video = videoRef.current;
        if (!video || prefersReduced) return;
        if (visible && !document.hidden) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.05 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [prefersReduced]);

  // Pause video when tab hidden or reduced motion preferred
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (prefersReduced) {
      video.pause();
      return;
    }
    const onVisibility = (): void => {
      if (document.hidden || !isVisibleRef.current) video.pause();
      else video.play().catch(() => {});
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, [prefersReduced]);

  // Cycle subtitles every 4s
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
      ref={heroRef}
      className="hero-pro"
      aria-label="Qubit Calculus — Precision Software, Elegantly Solved"
      onMouseMove={handleMouseMove}
    >
      {/* Background layers — interactive parallax */}
      <motion.div
        className="hero-pro__bg"
        aria-hidden="true"
        style={prefersReduced ? undefined : { y: bgY }}
      >
        {/* Video background — looping ambient footage */}
        <video
          ref={videoRef}
          className="hero-pro__video-bg dark:opacity-100 opacity-5 transition-opacity duration-1000"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/videos/hero-poster.webp"
          aria-hidden="true"
          {...({ fetchpriority: 'high' } as any)}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Mouse-following radial glow */}
        <div
          className="hero-pro__cursor-glow"
          style={
            prefersReduced
              ? { display: 'none' }
              : {
                  background: `radial-gradient(600px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(16, 185, 129, 0.12), rgba(139, 92, 246, 0.06) 40%, transparent 70%)`,
                }
          }
        />

        {/* Interactive circuit network canvas */}
        <canvas ref={canvasRef} className="hero-pro__circuit-canvas" aria-hidden="true" />
      </motion.div>

      {/* Bottom fade — outside parallax container so it stays pinned */}
      <div className="hero-pro__fade" aria-hidden="true" />

      {/* Content — fades out on scroll */}
      <motion.div
        className="hero-pro__content"
        variants={prefersReduced ? undefined : containerVariants}
        initial={prefersReduced ? 'visible' : 'hidden'}
        animate="visible"
        style={prefersReduced ? undefined : { opacity: contentOpacity, y: contentY }}
      >
        {/* Eyebrow */}
        <motion.div variants={itemVariants} className="hero-pro__eyebrow-wrap">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 dark:border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400 backdrop-blur-sm transition-colors duration-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
            Software Development Agency
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1 variants={itemVariants} className="hero-pro__title">
          <span className="hero-pro__title-line">We Build Software</span>
          <GradientText
            variant="indigo-blue"
            animated
            as="span"
            className="hero-pro__title-accent"
          >
            That Drives Growth
          </GradientText>
        </motion.h1>

        {/* Cycling Subtitle */}
        <motion.div variants={itemVariants} className="hero-pro__subtitle-wrap">
          <AnimatePresence mode="wait">
            <motion.p
              key={subtitleIndex}
              className="hero-pro__subtitle"
              initial={prefersReduced ? {} : { opacity: 0, y: 12, filter: 'blur(4px)' }}
              animate={{ opacity: 0.7, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
              transition={{ duration: 0.5 }}
            >
              {subtitles[subtitleIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Dual CTAs */}
        <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/contact"
            className="group relative inline-flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-4 text-base font-bold text-white shadow-[0_0_30px_-5px_rgba(99,102,241,0.4)] transition-all duration-300 hover:bg-indigo-500 hover:shadow-[0_0_40px_-5px_rgba(99,102,241,0.6)] active:scale-95"
          >
            Get a Free Estimate in 48h
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/20 bg-black/5 dark:bg-white/5 px-8 py-4 text-base font-medium text-gray-700 dark:text-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/30 hover:text-black dark:hover:text-white active:scale-95"
          >
            View Our Work
          </a>
        </motion.div>

        {/* Industry verticals + social proof */}
        <motion.div variants={itemVariants} className="mt-12 flex flex-col items-center gap-3">
          <p className="text-sm text-gray-500">
            Trusted by teams in{' '}
            <span className="text-gray-800 dark:text-gray-400 font-medium">Fintech</span>,{' '}
            <span className="text-gray-800 dark:text-gray-400 font-medium">Healthcare</span>,{' '}
            <span className="text-gray-800 dark:text-gray-400 font-medium">Web3</span>, and{' '}
            <span className="text-gray-800 dark:text-gray-400 font-medium">Enterprise SaaS</span>
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator — click scrolls to features */}
      <motion.div
        className="hero-pro__scroll"
        aria-hidden="true"
        style={{ opacity: scrollOpacity }}
        onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="hero-pro__scroll-arrows">
          <span />
          <span />
          <span />
        </div>
        <span className="hero-pro__scroll-text">Scroll to explore</span>
      </motion.div>
    </section>
  );
});

export default Hero;
