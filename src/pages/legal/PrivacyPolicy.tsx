/**
 * Privacy Policy Page — Qubit Calculus Agency
 *
 * Renders the Privacy Policy legal document focused on agency services.
 */

import DOMPurify from 'dompurify';
import { motion } from 'framer-motion';
import { MarketingLayout } from '@/components/marketing';
import { FADE_UP, REVEAL_UP } from '../../lib/motion-presets';

const sections = [
  {
    id: 'info-collect',
    title: '1. Information We Collect',
    content: `
      <h4>1.1 Information You Provide</h4>
      <p>We collect information that you voluntarily provide when you inquire about our services, sign up for our newsletter, or engage with us for a project.</p>
      <ul>
        <li><strong>Contact Information:</strong> Name, email address, phone number, and company name.</li>
        <li><strong>Project Details:</strong> Information about your business, project requirements, budget, and timelines.</li>
        <li><strong>Communications:</strong> Records of your correspondence with us via email or contact forms.</li>
      </ul>
      
      <h4>1.2 Automatically Collected Information</h4>
      <p>When you visit our website, we may automatically collect certain information about your device and usage:</p>
      <ul>
        <li><strong>Usage Data:</strong> Pages visited, time spent on site, and referral sources.</li>
        <li><strong>Device Technical Data:</strong> IP address, browser type, and operating system (anonymized).</li>
      </ul>
    `,
  },
  {
    id: 'usage',
    title: '2. How We Use Your Information',
    content: `
      <p>We use the collected information for the following purposes:</p>
      <ul>
        <li><strong>Service Delivery:</strong> To provide project estimates, proposals, and software development services.</li>
        <li><strong>Communication:</strong> To respond to your inquiries and provide project updates.</li>
        <li><strong>Marketing:</strong> To send occasional updates or newsletters (only if you have opted in).</li>
        <li><strong>Improvement:</strong> To analyze website performance and improve our user experience.</li>
      </ul>
      <p><strong>We do NOT sell your data to third parties.</strong></p>
    `,
  },
  {
    id: 'sharing',
    title: '3. Data Sharing & Third Parties',
    content: `
      <p>We only share your information with trusted third-party service providers who assist us in operating our business:</p>
      <ul>
        <li><strong>Cloud Infrastructure:</strong> Vercel/Netlify for website hosting.</li>
        <li><strong>Communication Tools:</strong> Email service providers for handling inquiries.</li>
        <li><strong>Analytics:</strong> Privacy-focused analytics tools to measure website traffic.</li>
      </ul>
      <p>All third parties are required to maintain the confidentiality of your data and are prohibited from using it for any other purpose.</p>
    `,
  },
  {
    id: 'security',
    title: '4. Data Security',
    content: `
      <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, loss, or alteration. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
    `,
  },
  {
    id: 'rights',
    title: '5. Your Rights',
    content: `
      <p>Depending on your location, you may have the following rights regarding your data:</p>
      <ul>
        <li>The right to access the personal information we hold about you.</li>
        <li>The right to request the correction of inaccurate information.</li>
        <li>The right to request the deletion of your data.</li>
        <li>The right to opt-out of marketing communications at any time.</li>
      </ul>
      <p>To exercise these rights, please contact us at <a href="mailto:hello@qubitcalculus.com">hello@qubitcalculus.com</a>.</p>
    `,
  },
  {
    id: 'contact',
    title: '6. Contact Us',
    content: `
      <p>If you have any questions about this Privacy Policy or our data practices, please reach out to us:</p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:hello@qubitcalculus.com">hello@qubitcalculus.com</a></li>
        <li><strong>Website:</strong> <a href="https://qubitcalculus.com">qubitcalculus.com</a></li>
      </ul>
    `,
  },
];

export default function PrivacyPolicy() {
  return (
    <MarketingLayout
      title="Privacy Policy"
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
              At Qubit Calculus, we take your privacy seriously. This policy outlines how we handle your personal information when you interact with our agency website and services. We are committed to being transparent about our data practices and ensuring your information is protected.
            </p>
          </motion.div>

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
