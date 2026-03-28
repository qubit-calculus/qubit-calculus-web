import { useEffect, useRef, lazy, Suspense } from 'react';
import { useReducedMotion } from 'framer-motion';
import Navigation from '../components/marketing/layout/Navigation';
import Footer from '../components/marketing/layout/Footer';
import Hero from '../components/marketing/sections/Hero';
import { GlobalBackground } from '../components/marketing/layout/GlobalBackground';
import { ThemeToggle } from '../components/marketing/layout/ThemeToggle';
import SEO from '../components/SEO';

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
import '../components/marketing/marketing-pages.css';

const TargetedSolutions = lazy(() => import('../components/marketing/sections/TargetedSolutions').then((m) => ({ default: m.TargetedSolutions })));
const TechStack = lazy(() => import('../components/marketing/sections/TechStack').then((m) => ({ default: m.TechStack })));
const HowWeWork = lazy(() => import('../components/marketing/sections/HowWeWork').then((m) => ({ default: m.HowWeWork })));
const StatsBanner = lazy(() => import('../components/marketing/sections/StatsBanner').then((m) => ({ default: m.StatsBanner })));
const Industries = lazy(() => import('../components/marketing/sections/Industries').then((m) => ({ default: m.Industries })));
const CaseStudies = lazy(() => import('../components/marketing/sections/CaseStudies').then((m) => ({ default: m.CaseStudies })));
const Testimonials = lazy(() => import('../components/marketing/sections/Testimonials').then((m) => ({ default: m.Testimonials })));
const PricingSection = lazy(() => import('../components/marketing/sections/Pricing').then((m) => ({ default: m.PricingSection })));
const CTA = lazy(() => import('../components/marketing/sections/CTA').then((m) => ({ default: m.CTA })));

export default function LandingPage() {
  const prefersReduced = useReducedMotion();
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const timeoutId = setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      return () => clearTimeout(timeoutId);
    }
    return undefined;
  }, []);

  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    document.documentElement.classList.add('site-ready');

    if (prefersReduced || !isDesktop) {
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

              tl.fromTo(
                section,
                { scale: 0.95, opacity: 0.5, transformOrigin: 'center center' },
                { scale: 1, opacity: 1, duration: 0.2, ease: 'sine.out' }
              );

              tl.to(section, { scale: 1, opacity: 1, duration: 0.6, ease: 'none' });

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
      gsapContextRef?.revert();
    };
  }, [prefersReduced]);

  return (
    <div className="demo-landing marketing-enhanced">
      <SEO path="/" />
      <Navigation showLandingLinks />
      <GlobalBackground />
      <ThemeToggle />

      <main id="main-content">
        <Hero />

        <Suspense fallback={<div className="min-h-[200px]" />}>
          <StatsBanner />
        </Suspense>

        <Suspense fallback={<div className="min-h-[400px]" />}>
          <TargetedSolutions />
        </Suspense>

        <Suspense fallback={<div className="min-h-[400px]" />}>
          <Industries />
        </Suspense>

        <Suspense fallback={<div className="min-h-[200px]" />}>
          <TechStack />
        </Suspense>

        <Suspense fallback={<div className="min-h-[400px]" />}>
          <HowWeWork />
        </Suspense>

        <Suspense fallback={<div className="min-h-[600px]" />}>
          <CaseStudies />
        </Suspense>

        <Suspense fallback={<div className="min-h-[400px]" />}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<div className="min-h-[400px]" />}>
          <PricingSection />
        </Suspense>

        <Suspense fallback={<div className="min-h-[200px]" />}>
          <CTA prefersReduced={!!prefersReduced} />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
