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
      
      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      
      if (mobileMenuOpen && currentScrollY > 20) setMobileMenuOpen(false);
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

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-lg focus:bg-indigo-500 focus:px-4 focus:py-2 focus:text-white focus:outline-none">
        Skip to content
      </a>

      <motion.nav
        className={`fixed left-1/2 z-[100] flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          scrolled
            ? 'top-4 w-[95%] max-w-5xl rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-[#0a0a0f]/60 backdrop-blur-2xl shadow-lg dark:shadow-[0_8px_32px_rgba(0,0,0,0.8)] px-6 py-2.5'
            : 'top-6 w-[92%] max-w-6xl rounded-2xl border border-transparent bg-transparent px-4 py-4'
        }`}
        initial={{ x: '-50%', y: -100, opacity: 0 }}
        animate={{ x: '-50%', y: hidden ? -150 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 group outline-none" aria-label="Qubit Calculus Home">
            <div className="transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-active:scale-95">
              <LogoIcon size={32} showGlow={scrolled} color="gradient" />
            </div>
            <span className="text-gray-900 dark:text-white font-bold tracking-tight text-xl hidden sm:block transition-all duration-300 group-hover:text-indigo-400">
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

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 hover:bg-black/10 dark:hover:bg-white/10 transition-all active:scale-90"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="relative w-5 h-4">
            <span className={`absolute bg-gray-900 dark:bg-white block transition-all duration-300 h-0.5 w-full rounded-full ${mobileMenuOpen ? 'top-2 rotate-45' : 'top-0'}`} />
            <span className={`absolute bg-gray-900 dark:bg-white block transition-all duration-300 h-0.5 w-full rounded-full top-2 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute bg-gray-900 dark:bg-white block transition-all duration-300 h-0.5 w-full rounded-full ${mobileMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
          </div>
        </button>
      </motion.nav>

      {/* Mobile Dropdown - Full Screen Overlay Style */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[90] bg-[#050505]/95 backdrop-blur-3xl md:hidden flex flex-col items-center justify-center p-8"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
          >
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full" />
              <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-indigo-500/10 blur-[120px] rounded-full" />
            </div>
            
            <div className="flex flex-col gap-6 text-center w-full max-w-sm">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  {link.to ? (
                    <Link 
                      to={link.to} 
                      onClick={() => setMobileMenuOpen(false)} 
                      className={`block text-4xl font-black py-2 transition-all hover:scale-105 active:scale-95 ${
                        location.pathname === link.to ? 'text-indigo-500' : 'text-white/60 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a 
                      href={link.href} 
                      onClick={() => setMobileMenuOpen(false)} 
                      className="block text-4xl font-black py-2 text-white/60 hover:text-white transition-all hover:scale-105 active:scale-95"
                    >
                      {link.name}
                    </a>
                  )}
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 pt-12 border-t border-white/5"
              >
                <a
                  href="/contact"
                  className="group relative w-full inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <span className="absolute inset-0 rounded-full p-[1.5px] bg-gradient-to-r from-indigo-500 via-blue-400 to-indigo-500 bg-[length:200%_100%] animate-[nav-cta-flow_3s_ease_infinite]">
                    <span className="block h-full w-full rounded-full bg-[#0a0a0f]/80 backdrop-blur-xl" />
                  </span>
                  <span className="absolute -inset-1 rounded-full bg-indigo-500/20 blur-xl -z-10" />
                  <span className="relative z-10">Book a Strategy Call</span>
                </a>
                <p className="mt-6 text-slate-500 text-sm font-medium">Ready to ship in 4-6 weeks</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
