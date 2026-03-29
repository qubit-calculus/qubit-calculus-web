/**
 * Cookie Policy Page — Qubit Calculus Agency
 *
 * Renders the Cookie Policy for the agency website.
 */

import DOMPurify from 'dompurify';
import { motion } from 'framer-motion';
import { MarketingLayout } from '@/components/marketing';
import { FADE_UP, REVEAL_UP } from '../../lib/motion-presets';

const sections = [
  {
    id: 'what-are-cookies',
    title: '1. What Are Cookies?',
    content: `
      <p>Cookies are small text files stored on your device that help us remember your preferences and understand how you interact with our website.</p>
    `,
  },
  {
    id: 'usage',
    title: '2. How We Use Cookies',
    content: `
      <p>We use cookies for the following essential and functional purposes:</p>
      <ul>
        <li><strong>Security:</strong> To protect our website and your data.</li>
        <li><strong>Preferences:</strong> To remember your theme (dark/light mode) and site settings.</li>
        <li><strong>Analytics:</strong> We use privacy-preserving analytics to understand website traffic (no personal data is linked).</li>
      </ul>
    `,
  },
  {
    id: 'managing-cookies',
    title: '3. Managing Your Preferences',
    content: `
      <p>You can control or disable cookies through your browser settings. Most browsers allow you to block all cookies or notify you before a cookie is stored. Please note that disabling essential cookies may affect the functionality of our website.</p>
    `,
  },
  {
    id: 'contact',
    title: '4. Contact Us',
    content: `
      <p>If you have any questions about our use of cookies, please contact us at <a href="mailto:hello@qubitcalculus.com">hello@qubitcalculus.com</a>.</p>
    `,
  },
];

export default function CookiePolicy() {
  return (
    <MarketingLayout
      title="Cookie Policy"
      subtitle="Last updated: March 2026"
    >
      <section className="marketing-section marketing-section--alt">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            {...FADE_UP}
            transition={{ duration: 0.5 }}
            className="marketing-card mb-12"
          >
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem', lineHeight: 1.7 }}>
              Our website uses cookies to provide a better experience and maintain site performance. We prioritize your privacy and do not use cookies for invasive tracking or advertising.
            </p>
            <p className="mt-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
              <strong>Effective Date:</strong> March 1, 2026 &nbsp;·&nbsp; <strong>Last Updated:</strong> March 2026
            </p>
          </motion.div>

          <motion.nav {...FADE_UP} transition={{ duration: 0.5, delay: 0.1 }} className="marketing-card mb-12">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--color-text-heading)' }}>Table of Contents</h3>
            <ul className="space-y-2">
              {sections.map((s) => (
                <li key={s.id}><a href={`#${s.id}`} className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">{s.title}</a></li>
              ))}
            </ul>
          </motion.nav>

          {sections.map((section) => (
            <motion.section
              key={section.id}
              id={section.id}
              {...REVEAL_UP}
              transition={{ duration: 0.5 }}
              className="mb-12 scroll-mt-24"
            >
              <h2
                className="mb-6 font-zentry text-2xl font-bold"
                style={{ color: 'var(--color-text-heading)' }}
              >
                {section.title}
              </h2>
              <div
                className="legal-content"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(section.content, { USE_PROFILES: { html: true } }),
                }}
              />
            </motion.section>
          ))}
        </div>
      </section>
    </MarketingLayout>
  );
}
