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
        className={`fixed left-1/2 z-[100] flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] transform ${
          scrolled 
            ? 'top-4 w-[95%] max-w-5xl rounded-full border border-white/10 bg-[#050505]/40 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] px-6 py-3' 
            : 'top-6 w-[92%] max-w-6xl rounded-2xl border border-transparent bg-transparent px-4 py-4'
        }`}
        initial={{ x: '-50%', y: -100, opacity: 0 }}
        animate={{ x: '-50%', y: hidden ? -150 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Subtle Inner Glow - only when scrolled */}
        {scrolled && (
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
        )}

        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 group outline-none" aria-label="Qubit Calculus Home">
            <div className="transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-active:scale-95 text-indigo-500">
              <LogoIcon size={34} showGlow={true} color="gradient" />
            </div>
            <span className="text-white font-bold tracking-tight text-xl hidden sm:block transition-all duration-300 group-hover:text-indigo-400">
              Qubit Calculus
            </span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 p-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
          {navLinks.map((link) => (
            link.to ? (
              <Link 
                key={link.name} 
                to={link.to} 
                className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 outline-none hover:bg-white/10 ${
                  location.pathname === link.to ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ) : (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium px-4 py-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 outline-none"
              >
                {link.name}
              </a>
            )
          ))}
        </div>

        {/* CTA Section */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/contact" className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-bold text-black transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] outline-none overflow-hidden">
             Get Started
             <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/5 to-transparent skew-x-12 transition-transform duration-700 group-hover:translate-x-full" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full bg-white/5 border border-white/10 p-2 focus:outline-none focus:ring-2 focus:ring-white/20 hover:bg-white/10 transition-all active:scale-90"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="relative w-5 h-4">
            <span className={`absolute bg-white block transition-all duration-300 h-0.5 w-full rounded-full ${mobileMenuOpen ? 'top-2 rotate-45' : 'top-0'}`} />
            <span className={`absolute bg-white block transition-all duration-300 h-0.5 w-full rounded-full top-2 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute bg-white block transition-all duration-300 h-0.5 w-full rounded-full ${mobileMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
          </div>
        </button>
      </motion.nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-x-4 top-24 z-[90] rounded-3xl border border-white/10 bg-[#050505]/95 backdrop-blur-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] md:hidden overflow-hidden"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/20 blur-3xl rounded-full" />
            
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.to ? (
                    <Link 
                      to={link.to} 
                      onClick={() => setMobileMenuOpen(false)} 
                      className={`block text-2xl font-bold py-4 transition-colors ${
                        location.pathname === link.to ? 'text-white' : 'text-gray-500 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a 
                      href={link.href} 
                      onClick={() => setMobileMenuOpen(false)} 
                      className="block text-2xl font-bold py-4 text-gray-500 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="pt-6 mt-4 border-t border-white/5"
              >
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="flex w-full justify-center rounded-2xl bg-indigo-600 text-white px-4 py-4 text-lg font-bold hover:bg-indigo-500 transition-all active:scale-95 shadow-lg shadow-indigo-600/20">
                  Book a Strategy Call
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
