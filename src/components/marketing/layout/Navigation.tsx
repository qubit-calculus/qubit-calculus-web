import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LogoIcon } from '@/components/Logo';
import { useTheme } from '@/hooks/use-theme';


interface NavigationProps {
  showLandingLinks?: boolean;
}

export default function Navigation({ showLandingLinks = false }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
          setHidden(true);
        } else {
          setHidden(false);
        }

        if (mobileMenuOpen && currentScrollY > 20) setMobileMenuOpen(false);
        setScrolled(currentScrollY > 20);
        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const closeMobile = useCallback(() => setMobileMenuOpen(false), []);

  const navLinks = showLandingLinks ? [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', to: '/about' },
  ] : [
    { name: 'Home', to: '/' },
    { name: 'Services', to: '/services' },
    { name: 'Stack', to: '/stack' },
    { name: 'Blog', to: '/blog' },
    { name: 'About', to: '/about' },
  ];

  const themeOptions = [
    {
      id: 'system' as const,
      label: 'System',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      id: 'light' as const,
      label: 'Light',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      )
    },
    {
      id: 'dark' as const,
      label: 'Dark',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )
    }
  ];

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-lg focus:bg-indigo-500 focus:px-4 focus:py-2 focus:text-white focus:outline-none">
        Skip to content
      </a>

      <motion.nav
        className={`fixed left-1/2 z-[100] flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? 'top-4 w-[95%] max-w-5xl rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-[#0a0a0f]/60 backdrop-blur-2xl shadow-lg dark:shadow-[0_8px_32px_rgba(0,0,0,0.8)] px-6 py-2.5'
            : 'top-6 w-[92%] max-w-6xl rounded-2xl border border-transparent bg-transparent px-4 py-4'
        } ${
          /* Mobile: always pill style, centered */
          'max-md:top-3 max-md:w-[90%] max-md:max-w-sm max-md:rounded-full max-md:px-3 max-md:py-1.5 max-md:gap-1'
        } ${
          scrolled
            ? 'max-md:bg-white/80 max-md:dark:bg-[#0a0a0f]/70 max-md:backdrop-blur-2xl max-md:border-black/10 max-md:dark:border-white/10 max-md:shadow-lg'
            : 'max-md:bg-white/60 max-md:dark:bg-[#0a0a0f]/40 max-md:backdrop-blur-xl max-md:border-black/5 max-md:dark:border-white/5'
        }`}
        initial={false}
        animate={{ x: '-50%', y: hidden ? -80 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Logo Section — hidden on mobile when not scrolled, just show icon */}
        <div className="flex items-center gap-3 max-md:gap-1.5">
          <Link to="/" className="flex items-center gap-2 group outline-none max-md:gap-1.5" aria-label="Qubit Calculus Home">
            <div className="transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
              <LogoIcon size={28} showGlow={scrolled} color="gradient" />
            </div>
            <span className="text-gray-900 dark:text-white font-bold tracking-tight text-xl hidden md:block transition-colors duration-300 group-hover:text-indigo-400">
              Qubit Calculus
            </span>
          </Link>
        </div>

        {/* Desktop Links - Floating Island Style */}
        <div className="hidden md:flex items-center gap-1 p-1 bg-black/5 dark:bg-white/5 backdrop-blur-md rounded-full border border-black/10 dark:border-white/10">
          {navLinks.map((link) => (
            link.to ? (
              <Link
                key={link.name}
                to={link.to}
                className={`text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 outline-none ${
                  location.pathname === link.to
                    ? 'text-gray-900 dark:text-white bg-black/10 dark:bg-white/10 shadow-inner'
                    : 'text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium px-5 py-2 rounded-full text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 outline-none"
              >
                {link.name}
              </a>
            )
          ))}
        </div>

        {/* CTA Section */}
        <div className="hidden md:flex items-center gap-4">
          <motion.a
            href="/contact"
            className="nav-cta group relative inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-white overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated gradient border */}
            <span className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-indigo-500 via-blue-400 to-indigo-500 bg-[length:200%_100%] animate-[nav-cta-flow_3s_ease_infinite]">
              <span className="block h-full w-full rounded-full bg-white/90 dark:bg-[#0a0a0f]/70 backdrop-blur-xl group-hover:bg-white dark:group-hover:bg-[#0a0a0f]/50 transition-colors duration-300" />
            </span>
            {/* Glow on hover */}
            <span className="absolute -inset-1 rounded-full bg-indigo-500/0 group-hover:bg-indigo-500/15 blur-lg transition-all duration-500 -z-10" />
            <span className="relative z-10">Get an Estimate</span>
          </motion.a>
        </div>

        {/* Mobile menu toggle — compact pill button */}
        <button
          className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:outline-none active:scale-90 transition-transform"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="relative w-4 h-3">
            <span className={`absolute bg-gray-900 dark:bg-white block transition-all duration-300 h-0.5 w-full rounded-full ${mobileMenuOpen ? 'top-1.5 rotate-45' : 'top-0'}`} />
            <span className={`absolute bg-gray-900 dark:bg-white block transition-all duration-300 h-0.5 w-full rounded-full top-1.5 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute bg-gray-900 dark:bg-white block transition-all duration-300 h-0.5 w-full rounded-full ${mobileMenuOpen ? 'top-1.5 -rotate-45' : 'top-3'}`} />
          </div>
        </button>
      </motion.nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[90] bg-white/95 dark:bg-[#050505]/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-5 text-center w-full max-w-sm">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 + 0.1 }}
                >
                  {link.to ? (
                    <Link
                      to={link.to}
                      onClick={closeMobile}
                      className={`block text-3xl font-bold py-1.5 transition-colors ${
                        location.pathname === link.to ? 'text-indigo-500' : 'text-gray-800 dark:text-white/60 hover:text-indigo-500 dark:hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={closeMobile}
                      className="block text-3xl font-bold py-1.5 text-gray-800 dark:text-white/60 hover:text-indigo-500 dark:hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </motion.div>
              ))}

              {/* CTA button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-6 pt-6 border-t border-gray-200 dark:border-white/5"
              >
                <a
                  href="/contact"
                  onClick={closeMobile}
                  className="group relative w-full inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-indigo-600 dark:text-white overflow-hidden transition-all duration-300 active:scale-95"
                >
                  <span className="absolute inset-0 rounded-full p-[1.5px] hero-cta-border">
                    <span className="block h-full w-full rounded-full bg-white/90 dark:bg-[#0a0a0f]/80 backdrop-blur-xl" />
                  </span>
                  <span className="relative z-10">Book a Strategy Call</span>
                </a>
              </motion.div>

              {/* Theme picker inside mobile menu */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 flex items-center justify-center"
              >
                <div className="flex items-center gap-1 p-1 rounded-full border border-gray-200 dark:border-white/10 bg-gray-100/80 dark:bg-white/5">
                  {themeOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setTheme(option.id)}
                      className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                        theme === option.id
                          ? 'bg-white dark:bg-white/10 text-gray-900 dark:text-white shadow-sm'
                          : 'text-gray-500 dark:text-gray-400'
                      }`}
                      aria-label={option.label}
                    >
                      {option.icon}
                      <span>{option.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
