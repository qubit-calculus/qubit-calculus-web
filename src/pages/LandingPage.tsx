/**
 * Qubit Calculus Agency Landing Page
 *
 * Production-ready landing page for qubitcalculus.com
 * - Static generation for CDN caching
 * - Minimal JavaScript for fast FCP/LCP
 * - GSAP for premium scroll animations
 * - Framer Motion for micro-interactions
 * - SEO optimized with semantic HTML
 */

import { useEffect, useRef, lazy, Suspense } from 'react';

import { useReducedMotion } from 'framer-motion';
import Navigation from '../components/marketing/layout/Navigation';
import Footer from '../components/marketing/layout/Footer';
import Hero from '../components/marketing/sections/Hero';
import { GlobalBackground } from '../components/marketing/layout/GlobalBackground';
import { ThemeToggle } from '../components/marketing/layout/ThemeToggle';
import SEO from '../components/SEO';

/* ── Split CSS architecture ── */
import '../styles/css-variables.css';
import '../styles/preloader.css';
import '../styles/buttons.css';
import '../styles/hero-landing.css';
import '../styles/section-header.css';
import '../styles/features-section.css';
import '../styles/stats-section.css';
import '../styles/about-security-section.css';
import '../styles/cta-section.css';
import '../styles/showcase-section.css';
import '../styles/pricing-section.css';

import '../styles/mobile.css';

// Lazy-load below-fold sections to reduce initial bundle size
const TargetedSolutions = lazy(() => import('../components/marketing/sections/TargetedSolutions').then((m) => ({ default: m.TargetedSolutions })));
const TechStack = lazy(() => import('../components/marketing/sections/TechStack').then((m) => ({ default: m.TechStack })));
const HowWeWork = lazy(() => import('../components/marketing/sections/HowWeWork').then((m) => ({ default: m.HowWeWork })));
const StatsBanner = lazy(() => import('../components/marketing/sections/StatsBanner').then((m) => ({ default: m.StatsBanner })));
const Industries = lazy(() => import('../components/marketing/sections/Industries').then((m) => ({ default: m.Industries })));
const CaseStudies = lazy(() => import('../components/marketing/sections/CaseStudies').then((m) => ({ default: m.CaseStudies })));
const Testimonials = lazy(() => import('../components/marketing/sections/Testimonials').then((m) => ({ default: m.Testimonials })));
const PricingSection = lazy(() =>
  import('../components/marketing/sections/Pricing').then((m) => ({ default: m.PricingSection }))
);
const CTA = lazy(() =>
  import('../components/marketing/sections/CTA').then((m) => ({ default: m.CTA }))
);

// Shared animation props for section reveal (avoids re-creating objects per render)
const sectionReveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' as const },
  transition: { duration: 0.7 },
};

// =============================================================================
// MAIN COMPONENT
// =============================================================================

export default function LandingPage() {
  const prefersReduced = useReducedMotion();
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  // Suppress unused variable warning for sectionReveal (used for future sections)
  void sectionReveal;

  // Handle hash navigation on page load
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const timeoutId = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timeoutId);
    }
    return undefined;
  }, []);

  // GSAP ScrollTrigger animations (desktop only, dynamically imported)
  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;

    document.documentElement.classList.add('site-ready');

    if (prefersReduced || !isDesktop) {
      // On mobile or reduced-motion, show all sections immediately without loading GSAP
      document.querySelectorAll('.zoom-section').forEach((section) => {
        (section as HTMLElement).style.transform = 'scale(1)';
        (section as HTMLElement).style.opacity = '1';
      });
      return undefined;
    }

    let gsapContextRef: { revert: () => void } | null = null;
    let cancelled = false;

    const timeoutId = setTimeout(() => {
      Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(
        ([gsapModule, scrollTriggerModule]) => {
          if (cancelled) return;
          const gsap = gsapModule.default;
          const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
          gsap.registerPlugin(ScrollTrigger);

          const ctx = gsap.context(() => {
            const sections = document.querySelectorAll('.zoom-section');

            sections.forEach((section, index) => {
              if (index === 0) {
                gsap.set(section, { scale: 1, opacity: 1, transformOrigin: 'center center' });
              } else {
                gsap.set(section, { scale: 0.95, opacity: 0.5, transformOrigin: 'center center' });
              }
            });

            sections.forEach((section) => {
              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: section,
                  start: 'top 90%',
                  end: 'bottom 10%',
                  scrub: 1.2,
                  invalidateOnRefresh: true,
                },
              });

              // Enter: subtle zoom + fade in (20% of timeline)
              tl.fromTo(
                section,
                { scale: 0.95, opacity: 0.5, transformOrigin: 'center center' },
                { scale: 1, opacity: 1, duration: 0.2, ease: 'sine.out' }
              );

              // Hold: fully visible for the majority of scroll distance (60%)
              tl.to(section, { scale: 1, opacity: 1, duration: 0.6, ease: 'none' });

              // Exit: gentle fade — never drops below 0.85 opacity
              tl.to(section, {
                scale: 0.98,
                opacity: 0.85,
                duration: 0.2,
                ease: 'sine.in',
              });
            });

            ScrollTrigger.refresh();
          });

          gsapContextRef = ctx;

          const resizeObserver = new ResizeObserver(() => {
            ScrollTrigger.refresh();
          });

          const mainContainer = document.querySelector('.demo-landing');
          if (mainContainer) {
            resizeObserver.observe(mainContainer);
          }

          resizeObserverRef.current = resizeObserver;
        }
      );
    }, 100);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
      resizeObserverRef.current?.disconnect();
      resizeObserverRef.current = null;
      if (gsapContextRef) {
        gsapContextRef.revert();
        gsapContextRef = null;
      }
    };
  }, [prefersReduced]);

  return (
    <div className="demo-landing marketing-enhanced">
      <SEO path="/" />

      {/* Unified Navigation */}
      <Navigation showLandingLinks />

      {/* Global Background & Tools */}
      <GlobalBackground />
      <ThemeToggle />

      {/* Hero — Professional agency hero */}
      <main id="main-content">
        <Hero />

        {/* Stats Banner */}
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <StatsBanner />
        </Suspense>

        {/* Targeted Solutions (MVP, Web/Mobile, Enterprise) */}
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <TargetedSolutions />
        </Suspense>

        {/* Industries We Serve */}
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <Industries />
        </Suspense>

        {/* Tech Stack */}
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <TechStack />
        </Suspense>

        {/* How We Work */}
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <HowWeWork />
        </Suspense>

        {/* Case Studies */}
        <Suspense fallback={<div className="min-h-[600px]" />}>
          <CaseStudies />
        </Suspense>

        {/* Testimonials */}
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <Testimonials />
        </Suspense>

        {/* Pricing / Service Tiers */}
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <PricingSection />
        </Suspense>

        {/* CTA */}
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <CTA prefersReduced={!!prefersReduced} />
        </Suspense>
      </main>

      {/* Unified Footer */}
      <Footer />
    </div>
  );
}
