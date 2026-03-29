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
import { REVEAL_UP } from '../../lib/motion-presets';
import SEO, { breadcrumbJsonLd } from '@/components/SEO';

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
    project: 'mvp',
    budget: '',
    timeline: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API call or integrate with actual backend later
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', project: 'mvp', budget: '', timeline: '', message: '' });
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MarketingLayout
      title="Let's Build Something Great"
      subtitle="Whether you're starting from scratch or modernizing a legacy platform, we're here to help you navigate the technological era."
    >
      <SEO
        title="Contact Us"
        description="Get a free project estimate within 48 hours. Tell us about your project and we'll put together a detailed plan. No commitment, no hidden fees."
        path="/contact"
        keywords="contact software agency, free project estimate, hire developers, software consultation"
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />
      <section className="marketing-section marketing-section--alt">
        <div className="marketing-section__container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Info Column */}
            <motion.div {...REVEAL_UP}>
              <h2 className="text-3xl font-bold mb-6 text-white">How it works</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold font-zentry">1</div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Strategy Call</h3>
                    <p className="text-gray-400">We hop on a 30-min call to discuss your goals, timeline, and technical requirements.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold font-zentry">2</div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Project Roadmap</h3>
                    <p className="text-gray-400">We provide a detailed fixed-price quote and a step-by-step roadmap for your project.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold font-zentry">3</div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Active Engineering</h3>
                    <p className="text-gray-400">Weekly demos and direct access to your build team via dedicated channels.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 rounded-3xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Urgent Inquiry?</h3>
                <p className="text-gray-400 mb-6">Email us directly for a faster response on time-sensitive projects.</p>
                <a href="mailto:hello@qubitcalculus.com" className="text-indigo-400 font-bold hover:text-indigo-300 transition-colors">hello@qubitcalculus.com →</a>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-500 mb-3">Connect with us</p>
                  <div className="flex gap-4">
                    <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors" aria-label="LinkedIn">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors" aria-label="GitHub">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form Column */}
            <motion.div {...REVEAL_UP} transition={{ delay: 0.1 }} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
              {submitStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">✅</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                  <p className="text-gray-400 mb-8">We'll get back to you within 24 hours.</p>
                  <button onClick={() => setSubmitStatus('idle')} className="text-indigo-400 font-bold">Send another message →</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
                      placeholder="john@company.com" 
                    />
                  </div>
                  <div>
                    <label htmlFor="project" className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Project Type</label>
                    <select 
                      id="project" 
                      value={formData.project}
                      onChange={(e) => setFormData({...formData, project: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all appearance-none"
                    >
                      <option value="mvp">New MVP / Startup</option>
                      <option value="modernization">Legacy Modernization</option>
                      <option value="mobile">Mobile Application</option>
                      <option value="uiux">UI/UX Design Only</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Budget Range</label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all appearance-none"
                      >
                        <option value="">Select budget</option>
                        <option value="under-1k">Under $1K</option>
                        <option value="1k-5k">$1K – $5K</option>
                        <option value="5k-15k">$5K – $15K</option>
                        <option value="15k+">$15K+</option>
                        <option value="unsure">Not sure yet</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Timeline</label>
                      <select
                        id="timeline"
                        value={formData.timeline}
                        onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all appearance-none"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-2weeks">1–2 weeks</option>
                        <option value="1-3months">1–3 months</option>
                        <option value="3months+">3+ months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">About the project</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
                      placeholder="Tell us what you're building..." 
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-white text-black font-bold py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-white/5 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="marketing-section marketing-section--dark">
        <div className="marketing-section__container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
            <div className="space-y-6">
              {faqItems.map((faq, index) => (
                <motion.div 
                  key={index} 
                  {...REVEAL_UP} 
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10"
                >
                  <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
