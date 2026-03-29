/**
 * Terms of Service Page — Qubit Calculus Agency
 *
 * Renders the Terms of Service for agency engagements.
 */

import DOMPurify from 'dompurify';
import { motion } from 'framer-motion';
import { MarketingLayout } from '@/components/marketing';
import { FADE_UP, REVEAL_UP } from '../../lib/motion-presets';

const sections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    content: `
      <p>By accessing this website or engaging Qubit Calculus for software development services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services or website.</p>
    `,
  },
  {
    id: 'services',
    title: '2. Services & Engagements',
    content: `
      <p>Qubit Calculus provides software development, UI/UX design, and digital transformation consulting services. Each project engagement is governed by a separate Statement of Work (SOW) or Project Proposal that outlines specific deliverables, timelines, and costs.</p>
    `,
  },
  {
    id: 'payments',
    title: '3. Payment Terms',
    content: `
      <p>Unless otherwise specified in a Project Proposal:</p>
      <ul>
        <li>A deposit is required to commence work.</li>
        <li>Milestone payments are due upon the completion of agreed-upon phases.</li>
        <li>Final payment is due prior to the handover of production-ready assets or code deployment.</li>
      </ul>
    `,
  },
  {
    id: 'intellectual-property',
    title: '4. Intellectual Property',
    content: `
      <p><strong>Client Ownership:</strong> Upon full and final payment, the specific custom code, designs, and assets created specifically for your project will be transferred to you. Qubit Calculus retains no rights to your unique business logic or proprietary data.</p>
      <p><strong>Agency Tools:</strong> Qubit Calculus retains ownership of its internal tools, libraries, and pre-existing frameworks used to build your project (Agency IP). You are granted a non-exclusive, perpetual license to use these components as part of your project.</p>
    `,
  },
  {
    id: 'liability',
    title: '5. Limitation of Liability',
    content: `
      <p>Qubit Calculus shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or the software we develop. Our total liability is limited to the amount paid for the specific service phase in question.</p>
    `,
  },
  {
    id: 'governing-law',
    title: '6. Governing Law',
    content: `
      <p>These terms are governed by the laws of Georgia. Any disputes shall be resolved through good-faith negotiation or in the courts of Georgia.</p>
    `,
  },
  {
    id: 'contact',
    title: '7. Contact Information',
    content: `
      <p>For questions regarding these terms, please contact us at <a href="mailto:hello@qubitcalculus.com">hello@qubitcalculus.com</a>.</p>
    `,
  },
];

export default function TermsOfService() {
  return (
    <MarketingLayout
      title="Terms of Service"
      subtitle="Last updated: October 2024"
    >
      <section className="marketing-section marketing-section--alt">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            {...FADE_UP}
            transition={{ duration: 0.5 }}
            className="marketing-card mb-12"
          >
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem', lineHeight: 1.7 }}>
              These Terms of Service govern the relationship between Qubit Calculus and our clients. We strive for professional excellence and transparency in all our engagements.
            </p>
            <p className="mt-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
              <strong>Effective Date:</strong> October 1, 2024 &nbsp;·&nbsp; <strong>Last Updated:</strong> October 2024
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
