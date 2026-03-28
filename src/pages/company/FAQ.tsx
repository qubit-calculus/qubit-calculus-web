/**
 * FAQ Page — Qubit Calculus
 *
 * Frequently asked questions about working with the agency.
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MarketingLayout } from '@/components/marketing';
import { REVEAL_UP } from '@/lib/motion-presets';
import SEO, { breadcrumbJsonLd, faqJsonLd } from '@/components/SEO';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: 'Working With Us',
    question: 'How long does a typical project take?',
    answer: 'Most MVPs ship in 4-6 weeks. Larger enterprise projects typically run 8-16 weeks depending on complexity. We provide a detailed timeline in our initial estimate, and we stick to it — our on-time delivery rate is 98%.',
  },
  {
    category: 'Working With Us',
    question: 'What does your development process look like?',
    answer: 'We follow an agile sprint-based process with 2-week cycles. You get weekly demos, access to a shared project board, and direct Slack access to your team. No surprises, no black boxes — you see progress in real time.',
  },
  {
    category: 'Working With Us',
    question: 'Do you work with startups or only established companies?',
    answer: 'Both. About 60% of our clients are startups building their first product, and 40% are established businesses modernizing legacy systems or adding new features. We adjust our process and pricing to fit each stage.',
  },
  {
    category: 'Working With Us',
    question: 'What happens after launch?',
    answer: 'Every project includes a 90-day post-launch support window. After that, we offer ongoing maintenance retainers. We also do thorough knowledge transfer and documentation so your internal team can take over confidently.',
  },
  {
    category: 'Pricing & Contracts',
    question: 'How much does a project cost?',
    answer: 'MVPs typically range from $15K-$40K depending on complexity. Enterprise projects are $40K-$150K+. We provide fixed-price quotes for defined scopes, or hourly rates for ongoing engagements. No hidden fees — the price we quote is the price you pay.',
  },
  {
    category: 'Pricing & Contracts',
    question: 'Do you offer fixed-price or time-and-materials?',
    answer: 'Both. Fixed-price works best for well-defined projects with clear requirements. Time-and-materials is better for ongoing development or projects where scope may evolve. We\'ll recommend the best model during our discovery call.',
  },
  {
    category: 'Pricing & Contracts',
    question: 'What are your payment terms?',
    answer: 'For fixed-price projects: 30% upfront, 40% at midpoint milestone, 30% on delivery. For retainers: monthly billing. We accept wire transfers and credit cards.',
  },
  {
    category: 'Technical',
    question: 'What technologies do you specialize in?',
    answer: 'Our core stack is React/Next.js + TypeScript on the frontend, Node.js/Python on the backend, and PostgreSQL for data. We also work with React Native for mobile, AWS/Vercel for cloud, and modern AI tools (OpenAI, LangChain). See our full stack at /stack.',
  },
  {
    category: 'Technical',
    question: 'Can you work with our existing codebase?',
    answer: 'Absolutely. About 40% of our work involves inheriting and improving existing codebases. We start with a thorough code audit, identify technical debt, and create a prioritized modernization roadmap.',
  },
  {
    category: 'Technical',
    question: 'Do you handle design as well as development?',
    answer: 'Yes. We have UI/UX designers who create high-fidelity prototypes in Figma before development begins. If you already have designs, we\'re happy to work from those instead.',
  },
  {
    category: 'Technical',
    question: 'Who owns the code?',
    answer: 'You do. 100%. All source code, designs, and assets are your intellectual property. We provide full access to the Git repository from day one, and complete handoff documentation at project end.',
  },
];

const faqCategories = [...new Set(faqs.map((f) => f.category))];

function FAQAccordion({ faq, index }: { faq: FAQItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border border-gray-200/30 dark:border-white/[0.04] rounded-xl overflow-hidden bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors"
      >
        <span className="text-sm font-semibold text-gray-900 dark:text-white pr-4">{faq.question}</span>
        <motion.svg
          className="w-5 h-5 text-gray-400 dark:text-gray-500 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-0">
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <MarketingLayout
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about working with Qubit Calculus."
    >
      <SEO
        title="FAQ"
        description="Answers to common questions about working with Qubit Calculus — pricing, timelines, process, tech stack, code ownership, and post-launch support."
        path="/faq"
        keywords="software agency FAQ, development pricing, project timeline, code ownership, post-launch support"
        jsonLd={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'FAQ', path: '/faq' },
          ]),
          faqJsonLd(faqs),
        ]}
      />
      <section className="relative py-20 px-6">
        <div className="max-w-3xl mx-auto">
          {faqCategories.map((category) => {
            const categoryFaqs = faqs.filter((f) => f.category === category);
            return (
              <div key={category} className="mb-12 last:mb-0">
                <motion.div {...REVEAL_UP} className="mb-6">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">{category}</h2>
                  <div className="h-px w-16 bg-gradient-to-r from-indigo-500 to-blue-500 mt-2" />
                </motion.div>
                <div className="space-y-3">
                  {categoryFaqs.map((faq, index) => (
                    <FAQAccordion key={faq.question} faq={faq} index={index} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="relative py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl border border-gray-200/30 dark:border-white/10"
            style={{
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.06), rgba(59, 130, 246, 0.06))',
            }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Still have questions?</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              We're happy to jump on a quick call and answer anything not covered here.
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
              <span className="relative z-10">Contact Us</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </MarketingLayout>
  );
}
