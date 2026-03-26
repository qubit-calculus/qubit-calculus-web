/**
 * Marketing Footer Component
 *
 * Unified footer matching the landing page design with animated
 * gradient border, glow effects, and consistent styling.
 */

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogoIcon } from '@/components/Logo';
import { footerLinks } from '@/data/landing-data';
import { FooterCyberGrid, FooterParticleField } from './FooterEffects';
import '../marketing-pages.css';
import { REVEAL_UP } from '../../../lib/motion-presets';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const renderLink = (link: { label: string; to?: string; href?: string }) => {
    if (link.href) {
      return (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="gl-footer-unified__link group"
        >
          <span className="relative z-10 block" data-text={link.label}>
            {link.label}
          </span>
        </a>
      );
    }
    return (
      <Link key={link.label} to={link.to!} className="gl-footer-unified__link group">
        <span className="relative z-10 block" data-text={link.label}>
          {link.label}
        </span>
      </Link>
    );
  };

  return (
    <footer className="gl-footer-unified">
      {/* Blend gradient — seamless transition from page bg */}
      <div className="gl-footer-unified__blend" />

      {/* Canvas: cyber grid (squares + pulsing nodes) */}
      <FooterCyberGrid />

      {/* Canvas: particle field (floating connected nodes, mouse-reactive) */}
      <FooterParticleField />

      {/* Aurora glow bands */}
      <div className="gl-footer-unified__aurora" />

      {/* Animated gradient top border */}
      <div className="gl-footer-unified__border" />

      {/* Glow effect */}
      <div className="gl-footer-unified__glow" />

      <div className="gl-footer-unified__container">
        {/* Links Grid */}
        <motion.div
          className="gl-footer-unified__grid"
          {...REVEAL_UP}
          transition={{ duration: 0.5 }}
        >
          {/* Services */}
          <div className="gl-footer-unified__column">
            <h4 className="gl-footer-unified__heading">Services</h4>
            <div className="gl-footer-unified__links">{footerLinks.product.map(renderLink)}</div>
          </div>

          {/* Resources */}
          <div className="gl-footer-unified__column">
            <h4 className="gl-footer-unified__heading">Resources</h4>
            <div className="gl-footer-unified__links">{footerLinks.resources.map(renderLink)}</div>
          </div>

          {/* Company */}
          <div className="gl-footer-unified__column">
            <h4 className="gl-footer-unified__heading">Company</h4>
            <div className="gl-footer-unified__links">{footerLinks.company.map(renderLink)}</div>
          </div>

          {/* Legal */}
          <div className="gl-footer-unified__column">
            <h4 className="gl-footer-unified__heading">Legal</h4>
            <div className="gl-footer-unified__links">{footerLinks.legal.map(renderLink)}</div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="gl-footer-unified__bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Logo & Copyright */}
          <div className="gl-footer-unified__brand">
            <Link to="/" className="gl-footer-unified__logo" aria-label="Qubit Calculus Home">
              <LogoIcon size={96} color="white" showGlow={false} />
            </Link>
            <span className="gl-footer-unified__copy">
              © {currentYear} Qubit Calculus. All rights reserved.
            </span>
          </div>

          {/* Social links */}
          <div className="gl-footer-unified__social">
            <a
              href="https://twitter.com/qubitcalculus"
              target="_blank"
              rel="noopener noreferrer"
              className="gl-footer-unified__social-link"
              aria-label="Twitter"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://github.com/qubitcalculus"
              target="_blank"
              rel="noopener noreferrer"
              className="gl-footer-unified__social-link"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a
              href="mailto:hello@qubitcalculus.com"
              className="gl-footer-unified__social-link"
              aria-label="Email"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
