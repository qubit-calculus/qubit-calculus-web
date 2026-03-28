/**
 * Case Studies / Portfolio Page — Qubit Calculus
 *
 * Showcases selected projects with results, tech stack, and testimonials.
 */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MarketingLayout } from '@/components/marketing';
import { SectionHeader } from '@/components/marketing/ui/SectionHeader';
import { GlassCard } from '@/components/marketing/ui/GlassCard';
import { REVEAL_UP } from '@/lib/motion-presets';

const caseStudies = [
  {
    title: 'FinTrack — Real-Time Financial Dashboard',
    category: 'FinTech',
    description: 'A high-performance trading dashboard processing 50K+ real-time data points per second. Built for a Series A startup that needed to replace their legacy Java monolith.',
    results: ['3x faster page loads', '99.99% uptime', '40% cost reduction'],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'WebSockets'],
    duration: '8 weeks',
    gradient: 'from-indigo-500 to-blue-500',
    image: '📊',
  },
  {
    title: 'MediConnect — Telehealth Platform',
    category: 'HealthTech',
    description: 'End-to-end telehealth solution with HIPAA-compliant video consultations, appointment scheduling, and electronic health records integration.',
    results: ['10K+ consultations/month', 'HIPAA compliant', '4.8★ app rating'],
    stack: ['React Native', 'Next.js', 'AWS', 'PostgreSQL', 'Twilio'],
    duration: '12 weeks',
    gradient: 'from-emerald-500 to-teal-500',
    image: '🏥',
  },
  {
    title: 'ShopStream — E-Commerce Modernization',
    category: 'Retail',
    description: 'Migrated a legacy Magento store to a headless commerce architecture. Rebuilt the entire frontend with Next.js and integrated with Shopify\'s Storefront API.',
    results: ['2.5x conversion rate', '60% faster checkout', '$2M+ ARR impact'],
    stack: ['Next.js', 'Shopify API', 'Tailwind CSS', 'Vercel', 'Stripe'],
    duration: '6 weeks',
    gradient: 'from-orange-500 to-amber-500',
    image: '🛒',
  },
  {
    title: 'DataPulse — AI Analytics Engine',
    category: 'AI / SaaS',
    description: 'An intelligent analytics platform that uses LLMs to generate natural-language insights from raw business data. Features automated report generation and anomaly detection.',
    results: ['85% faster insights', '200+ enterprise users', 'SOC 2 certified'],
    stack: ['Python', 'React', 'OpenAI', 'PostgreSQL', 'Docker'],
    duration: '10 weeks',
    gradient: 'from-violet-500 to-purple-500',
    image: '🤖',
  },
  {
    title: 'FleetOps — Logistics Management',
    category: 'Logistics',
    description: 'Real-time fleet tracking and route optimization platform for a mid-size logistics company. Reduced fuel costs and improved delivery times through intelligent routing.',
    results: ['22% fuel savings', '15% faster deliveries', 'Real-time GPS'],
    stack: ['React', 'Node.js', 'MongoDB', 'Google Maps API', 'AWS'],
    duration: '9 weeks',
    gradient: 'from-cyan-500 to-blue-500',
    image: '🚚',
  },
  {
    title: 'LegalDocs — Contract Automation',
    category: 'LegalTech',
    description: 'AI-powered contract drafting and review platform that reduced manual document preparation time by 70%. Integrated with existing legal practice management systems.',
    results: ['70% time saved', '500+ templates', '99.2% accuracy'],
    stack: ['Next.js', 'Python', 'OpenAI', 'Redis', 'Vercel'],
    duration: '7 weeks',
    gradient: 'from-pink-500 to-rose-500',
    image: '⚖️',
  },
];

const testimonials = [
  {
    quote: "Qubit Calculus delivered our MVP in 5 weeks flat. The quality was better than what our previous agency produced in 6 months.",
    author: 'Sarah Chen',
    role: 'CTO, FinTrack',
  },
  {
    quote: "They didn't just build what we asked for — they challenged our assumptions and made the product significantly better.",
    author: 'Marcus Rodriguez',
    role: 'Founder, DataPulse',
  },
  {
    quote: "Working with Qubit felt like having senior engineers on our team, not an external agency. The communication was exceptional.",
    author: 'Emily Park',
    role: 'VP Engineering, MediConnect',
  },
];

export default function CaseStudies() {
  return (
    <MarketingLayout
      title="Our Work"
      subtitle="Selected projects that showcase our engineering capabilities and business impact."
    >
      {/* Case Studies Grid */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...REVEAL_UP} className="text-center mb-16">
            <SectionHeader
              title="Featured"
              titleAccent="Projects"
              description="Real results from real engagements. Each project built with the same rigor and quality."
              align="center"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <GlassCard className="h-full" enableTilt={false}>
                  <div className="p-6">
                    {/* Category + Duration */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-bold uppercase tracking-[0.15em] bg-clip-text text-transparent bg-gradient-to-r ${study.gradient}`}>
                        {study.category}
                      </span>
                      <span className="text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-white/5 px-2.5 py-1 rounded-full">
                        {study.duration}
                      </span>
                    </div>

                    {/* Icon + Title */}
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-2xl">{study.image}</span>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                        {study.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
                      {study.description}
                    </p>

                    {/* Results */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {study.results.map((result) => (
                        <span
                          key={result}
                          className="text-xs px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-500/20 font-medium"
                        >
                          {result}
                        </span>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-200/30 dark:border-white/5">
                      {study.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-500 border border-gray-200/50 dark:border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...REVEAL_UP} className="text-center mb-12">
            <SectionHeader
              title="What Clients"
              titleAccent="Say"
              description="Feedback from the founders and engineering leaders we've partnered with."
              align="center"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="p-6 rounded-2xl border border-gray-200/30 dark:border-white/[0.04] bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm"
              >
                {/* Quote mark */}
                <div className="text-3xl text-indigo-300 dark:text-indigo-500/40 mb-3 leading-none">"</div>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4 italic">
                  {testimonial.quote}
                </p>
                <div className="pt-3 border-t border-gray-200/30 dark:border-white/5">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">{testimonial.author}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-gray-200/30 dark:border-white/10 p-12"
            style={{
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.06), rgba(59, 130, 246, 0.06))',
            }}
          >
            <div className="absolute -right-20 -top-20 w-56 h-56 bg-indigo-500/10 rounded-full blur-3xl" />
            <div className="absolute -left-20 -bottom-20 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to be our next success story?
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto">
                Tell us about your project and we'll put together a detailed plan and estimate within 48 hours.
              </p>
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-base font-semibold text-indigo-600 dark:text-white overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
              >
                <span className="absolute inset-0 rounded-full p-[1.5px] hero-cta-border">
                  <span className="block h-full w-full rounded-full bg-white/90 dark:bg-[#0c0c18]/80 backdrop-blur-2xl transition-colors duration-500" />
                </span>
                <span className="absolute inset-[1.5px] rounded-full bg-gradient-to-r from-indigo-600/0 via-blue-500/0 to-indigo-500/0 group-hover:from-indigo-600/30 group-hover:via-blue-500/20 group-hover:to-indigo-500/30 transition-all duration-500" />
                <span className="absolute -inset-1 rounded-full bg-indigo-500/0 group-hover:bg-indigo-500/20 blur-xl transition-all duration-500 -z-10" />
                <span className="relative z-10 flex items-center gap-2.5">
                  Start a Conversation
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </MarketingLayout>
  );
}
