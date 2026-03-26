import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LogoIcon } from '@/components/Logo';

interface NavigationProps {
  showLandingLinks?: boolean;
}

export default function Navigation({ showLandingLinks = false }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      if (mobileMenuOpen) setMobileMenuOpen(false);
      setScrolled(currentScrollY > 20);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = showLandingLinks ? [
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#work' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', to: '/about' },
  ] : [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-lg focus:bg-indigo-500 focus:px-4 focus:py-2 focus:text-white focus:outline-none">
        Skip to content
      </a>

      <motion.nav
        className={`fixed left-1/2 z-[100] flex items-center justify-between transition-all duration-300 transform ${
          scrolled 
            ? 'top-4 w-[95%] max-w-5xl rounded-full border border-gray-200/50 dark:border-white/10 bg-white/70 dark:bg-[#050505]/70 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-2xl px-6 py-3' 
            : 'top-6 w-[90%] max-w-6xl rounded-2xl border border-transparent bg-transparent px-2 py-4'
        }`}
        initial={{ x: '-50%', y: -100, opacity: 0 }}
        animate={{ x: '-50%', y: hidden ? -150 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 group outline-none" aria-label="Qubit Calculus Home">
            <div className="transition-transform duration-300 group-hover:scale-105 group-active:scale-95 text-indigo-500">
              <LogoIcon size={32} showGlow={false} color="gradient" />
            </div>
            <span className="text-gray-900 dark:text-white font-semibold tracking-tight text-lg hidden sm:block transition-colors">
              Qubit Calculus
            </span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.to ? (
              <Link key={link.name} to={link.to} className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md px-2 py-1">
                {link.name}
              </Link>
            ) : (
              <a key={link.name} href={link.href} className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md px-2 py-1">
                {link.name}
              </a>
            )
          ))}
        </div>

        {/* CTA Section */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/contact" className="group relative inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/20 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            <span className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            Consultation
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 rounded-md bg-white/5 border border-white/10 p-1.5 focus:outline-none focus:ring-2 focus:ring-white/20 hover:bg-white/10 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`bg-gray-300 block transition-all duration-300 ease-out h-[2px] w-full rounded-sm ${mobileMenuOpen ? 'rotate-45 translate-y-[5px]' : '-translate-y-1'}`} />
          <span className={`bg-gray-300 block transition-all duration-300 ease-out h-[2px] w-full rounded-sm my-0.5 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`bg-gray-300 block transition-all duration-300 ease-out h-[2px] w-full rounded-sm ${mobileMenuOpen ? '-rotate-45 -translate-y-[5px]' : 'translate-y-1'}`} />
        </button>
      </motion.nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-x-4 top-24 z-[90] rounded-2xl border border-white/10 bg-[#050505]/95 backdrop-blur-2xl p-6 shadow-2xl md:hidden"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                link.to ? (
                  <Link key={link.name} to={link.to} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-300 hover:text-white pb-4 border-b border-white/5">
                    {link.name}
                  </Link>
                ) : (
                  <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-300 hover:text-white pb-4 border-b border-white/5">
                    {link.name}
                  </a>
                )
              ))}
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="mt-4 flex w-full justify-center rounded-xl bg-white text-black px-4 py-3 text-base font-semibold hover:bg-gray-200 transition-colors">
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
