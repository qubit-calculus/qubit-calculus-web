/**
 * Contact Page
 *
 * Contact information and support options.
 *
 * @since v0.9.2
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MarketingLayout } from '@/components/marketing';
import { NeonIcon } from '@/components/marketing/ui';
import { REVEAL_UP } from '../../lib/motion-presets';

const contactMethods = [
  {
    icon: '📧',
    title: 'General Inquiries',
    description: 'Questions about our services and capabilities',
    contact: 'hello@qubitcalculus.com',
    link: 'mailto:hello@qubitcalculus.com',
  },
  {
    icon: '💼',
    title: 'New Projects',
    description: 'Start a new project or request a quote',
    contact: 'projects@qubitcalculus.com',
    link: 'mailto:projects@qubitcalculus.com',
  },
  {
    icon: '🛡️',
    title: 'Technical Support',
    description: 'Support for existing clients and projects',
    contact: 'support@qubitcalculus.com',
    link: 'mailto:support@qubitcalculus.com',
  },
  {
    icon: '🤝',
    title: 'Partnerships',
    description: 'Collaboration and partnership opportunities',
    contact: 'partners@qubitcalculus.com',
    link: 'mailto:partners@qubitcalculus.com',
  },
  {
    icon: '💼',
    title: 'Careers',
    description: 'Join our team of engineers',
    contact: 'careers@qubitcalculus.com',
    link: 'mailto:careers@qubitcalculus.com',
  },
  {
    icon: '📰',
    title: 'Press & Media',
    description: 'Press inquiries and interview requests',
    contact: 'press@qubitcalculus.com',
    link: 'mailto:press@qubitcalculus.com',
  },
];

const faqItems = [
  {
    question: 'How quickly can I expect a response?',
    answer:
      'We respond to all project inquiries within 24-48 business hours. For urgent matters, email us directly at hello@qubitcalculus.com with "URGENT" in the subject line.',
  },
  {
    question: 'What is your typical project timeline?',
    answer:
      'Timelines vary by scope. A landing page or MVP takes 2-4 weeks. A full-stack application typically takes 6-12 weeks. Enterprise projects are scoped individually. We provide detailed timelines during our free consultation.',
  },
  {
    question: 'Do you work with startups or only enterprises?',
    answer:
      'Both! We work with early-stage startups building their first MVP, growth-stage companies scaling their platforms, and enterprises modernizing legacy systems. Our engagement models are flexible to fit your stage.',
  },
  {
    question: 'What happens after the project launches?',
    answer:
      'Every project includes post-launch support (30-90 days depending on tier). We also offer ongoing maintenance retainers for monitoring, bug fixes, and feature additions. Your project is never left unsupported.',
  },
  {
    question: 'Do you sign NDAs?',
    answer:
      'Yes. We sign NDAs before any project discussion if requested. Your ideas and business information are always treated with complete confidentiality.',
  },
  {
    question: 'Can I see examples of your previous work?',
    answer:
      'Absolutely. Check out our case studies on the homepage, or request a portfolio walkthrough during your free consultation. We can also share relevant examples specific to your industry.',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: 'general', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MarketingLayout
      title="Let's Talk"
      subtitle="Have a project in mind? Get a free consultation and detailed estimate within 48 hours."
      eyebrow="Start Your Project"
    >
      {/* Contact Methods */}
      <section className="marketing-section marketing-section--alt">
        <div className="marketing-section__container">
          <div className="marketing-section__header">
            <motion.div
              {...REVEAL_UP}
            >
              <h2 className="marketing-section__title">Reach Out Directly</h2>
              <p className="marketing-section__desc">Choose the best channel for your needs</p>
            </motion.div>
          </div>

          <div className="marketing-grid marketing-grid--3">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.link}
                {...REVEAL_UP}
                transition={{ delay: index * 0.1 }}
                className="marketing-card"
                style={{ textDecoration: 'none' }}
              >
                <span className="marketing-card__icon">
                  <NeonIcon symbol={method.icon} size={34} title={method.title} />
                </span>
                <h3 className="marketing-card__title">{method.title}</h3>
                <p className="marketing-card__desc">{method.description}</p>
                <span
                  style={{ color: 'var(--color-primary)', marginTop: '0.75rem', display: 'block' }}
                >
                  {method.contact}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="marketing-section marketing-section--dark">
        <div className="mx-auto max-w-3xl px-4">
          <div className="marketing-section__header">
            <motion.div
              {...REVEAL_UP}
            >
              <h2 className="marketing-section__title">Send Us a Message</h2>
              <p className="marketing-section__desc">
                Fill out the form below and we'll get back to you
              </p>
            </motion.div>
          </div>

          <motion.div
            {...REVEAL_UP}
            transition={{ delay: 0.1 }}
          >
            {submitStatus === 'success' ? (
              <div
                className="marketing-card text-center"
                style={{
                  borderColor: 'rgba(16, 185, 129, 0.3)',
                  background: 'rgba(16, 185, 129, 0.1)',
                }}
              >
                <span className="marketing-card__icon">
                  <NeonIcon symbol="✅" size={34} title="Message sent" />
                </span>
                <h3 className="marketing-card__title">Message Sent!</h3>
                <p className="marketing-card__desc">
                  Thank you for reaching out. We'll get back to you within 24-48 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitStatus('idle');
                    setFormData({ name: '', email: '', subject: 'general', message: '' });
                  }}
                  style={{ color: 'var(--color-primary)', marginTop: '1.5rem' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="marketing-grid marketing-grid--2">
                  <div className="contact-form__group">
                    <label htmlFor="name" className="contact-form__label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="contact-form__input"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="contact-form__group">
                    <label htmlFor="email" className="contact-form__label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="contact-form__input"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="contact-form__group">
                  <label htmlFor="subject" className="contact-form__label">
                    Subject
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="contact-form__input"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="new-project">New Project / Get a Quote</option>
                    <option value="support">Technical Support (Existing Client)</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="careers">Careers / Join Our Team</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="contact-form__group">
                  <label htmlFor="message" className="contact-form__label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="contact-form__textarea"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="marketing-btn marketing-btn--primary"
                  style={{ width: '100%' }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="marketing-section marketing-section--alt">
        <div className="mx-auto max-w-3xl px-4">
          <div className="marketing-section__header">
            <motion.div
              {...REVEAL_UP}
            >
              <h2 className="marketing-section__title">Frequently Asked Questions</h2>
            </motion.div>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                {...REVEAL_UP}
                transition={{ delay: index * 0.1 }}
                className="marketing-card"
              >
                <h3 className="marketing-card__title">{faq.question}</h3>
                <p className="marketing-card__desc">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Follow Us Section */}
      <section className="marketing-section marketing-section--dark">
        <div className="marketing-section__container">
          <motion.div
            {...REVEAL_UP}
            className="text-center"
          >
            <h2 className="marketing-section__title">Follow Our Work</h2>
            <p className="marketing-section__desc" style={{ marginBottom: '2rem' }}>
              Stay updated on our latest projects and insights
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://twitter.com/qubitcalculus"
                target="_blank"
                rel="noopener noreferrer"
                className="marketing-btn marketing-btn--secondary"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                @qubitcalculus
              </a>
              <a
                href="https://github.com/qubitcalculus"
                target="_blank"
                rel="noopener noreferrer"
                className="marketing-btn marketing-btn--secondary"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </MarketingLayout>
  );
}
