/**
 * Services Page — Qubit Calculus
 *
 * Professional services overview with categorized offerings,
 * engagement models, and clear CTAs.
 */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MarketingLayout } from '@/components/marketing';
import { SectionHeader } from '@/components/marketing/ui/SectionHeader';
import { GlassCard } from '@/components/marketing/ui/GlassCard';
import { REVEAL_UP } from '@/lib/motion-presets';
import SEO, { breadcrumbJsonLd, serviceJsonLd } from '@/components/SEO';

const services = [
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Custom Software Development',
    description: 'End-to-end development of bespoke applications tailored to your unique business requirements. From architecture to deployment.',
    tags: ['Full-Stack', 'SaaS', 'Enterprise'],
    gradient: 'from-indigo-500 to-blue-500',
    glowColor: 'rgba(99, 102, 241, 0.3)',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" />
      </svg>
    ),
    title: 'Web Application Development',
    description: 'High-performance React and Next.js applications with server-side rendering, real-time features, and pixel-perfect UIs.',
    tags: ['React', 'Next.js', 'TypeScript'],
    gradient: 'from-blue-500 to-cyan-500',
    glowColor: 'rgba(59, 130, 246, 0.3)',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" />
      </svg>
    ),
    title: 'Mobile App Development',
    description: 'Native-quality iOS and Android apps built with React Native and Expo. Offline-first architecture with seamless sync.',
    tags: ['React Native', 'iOS', 'Android'],
    gradient: 'from-violet-500 to-indigo-500',
    glowColor: 'rgba(139, 92, 246, 0.3)',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.26-2.33 4.17L12 12l-1.67-1.83C9.4 9.26 8 7.95 8 6a4 4 0 0 1 4-4z" />
        <path d="M4.93 10.93a10 10 0 1 0 14.14 0" />
        <circle cx="12" cy="18" r="2" />
      </svg>
    ),
    title: 'AI & Machine Learning',
    description: 'Intelligent features powered by modern AI — from chatbots and recommendation engines to document analysis and predictive models.',
    tags: ['LLMs', 'Computer Vision', 'NLP'],
    gradient: 'from-emerald-500 to-teal-500',
    glowColor: 'rgba(16, 185, 129, 0.3)',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: 'UI/UX Design',
    description: 'Research-driven design that converts. We craft intuitive interfaces with high-fidelity prototypes validated by real users before a single line of code.',
    tags: ['Figma', 'Prototyping', 'User Research'],
    gradient: 'from-pink-500 to-rose-500',
    glowColor: 'rgba(236, 72, 153, 0.3)',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
      </svg>
    ),
    title: 'Cloud & DevOps',
    description: 'Infrastructure as code, automated CI/CD pipelines, and zero-downtime deployments. AWS, GCP, and Vercel expertise.',
    tags: ['AWS', 'Docker', 'CI/CD'],
    gradient: 'from-orange-500 to-amber-500',
    glowColor: 'rgba(249, 115, 22, 0.3)',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
    title: 'MVP Engineering',
    description: 'Go from idea to launched product in 4-6 weeks. We build lean, scalable MVPs that validate your market hypothesis fast.',
    tags: ['Rapid Prototyping', 'Lean', 'Launch'],
    gradient: 'from-indigo-600 to-indigo-400',
    glowColor: 'rgba(99, 102, 241, 0.3)',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'API Development & Integration',
    description: 'RESTful and GraphQL APIs designed for scale. We integrate third-party services and build the connective tissue of your tech ecosystem.',
    tags: ['REST', 'GraphQL', 'Webhooks'],
    gradient: 'from-cyan-500 to-blue-500',
    glowColor: 'rgba(6, 182, 212, 0.3)',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" />
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" /><path d="M16 16h5v5" />
      </svg>
    ),
    title: 'Legacy Modernization',
    description: 'Breathe new life into aging systems. We migrate monoliths to microservices, upgrade frameworks, and eliminate technical debt.',
    tags: ['Migration', 'Refactoring', 'Microservices'],
    gradient: 'from-amber-500 to-orange-500',
    glowColor: 'rgba(245, 158, 11, 0.3)',
  },
];

const engagementModels = [
  {
    title: 'Project-Based',
    description: 'Fixed scope, fixed price. Ideal for well-defined features, MVPs, or standalone projects.',
    icon: '📋',
    features: ['Clear deliverables & timeline', 'Fixed budget with no surprises', 'Milestone-based payments', 'Dedicated project manager'],
  },
  {
    title: 'Dedicated Team',
    description: 'Your own engineering squad, fully embedded in your workflow. Scale up or down as needed.',
    icon: '👥',
    features: ['Handpicked senior engineers', 'Integrated with your tools', 'Weekly sprints & demos', 'Flexible team size'],
  },
  {
    title: 'Staff Augmentation',
    description: 'Fill skill gaps with our specialists. They work as part of your team, on your schedule.',
    icon: '🔌',
    features: ['Fast onboarding (< 1 week)', 'Your tech stack & processes', 'Full-time or part-time', 'No long-term commitment'],
  },
];

export default function Services() {
  return (
    <MarketingLayout
      title="Our Services"
      subtitle="We build, design, and scale digital products for ambitious companies."
    >
      <SEO
        title="Software Development Services"
        description="Custom software development, MVP engineering, legacy modernization, mobile apps, AI integration, and cloud optimization. Fixed pricing, 4-6 week delivery."
        path="/services"
        keywords="custom software development services, MVP development, legacy modernization, React Native mobile apps, AI integration, cloud optimization"
        jsonLd={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
          ]),
          serviceJsonLd({
            name: 'Custom Software Development',
            description: 'End-to-end development of bespoke applications tailored to your unique business requirements. From architecture to deployment.',
            url: '/services',
          }),
        ]}
      />
      {/* Services Grid */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            {...REVEAL_UP}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <SectionHeader
              title="What We"
              titleAccent="Build"
              description="From MVPs to enterprise platforms — we cover the full spectrum of modern software development."
              align="center"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <GlassCard className="h-full p-6">
                  {/* Icon */}
                  <div className="relative mb-5">
                    <div
                      className="absolute -inset-2 rounded-2xl opacity-20 blur-xl"
                      style={{ background: service.glowColor }}
                    />
                    <div
                      className="relative w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 dark:border-white/10"
                      style={{
                        background: `linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))`,
                        backdropFilter: 'blur(12px)',
                      }}
                    >
                      <div
                        className="absolute inset-0 rounded-xl opacity-40"
                        style={{ background: `linear-gradient(135deg, ${service.glowColor}, transparent 70%)` }}
                      />
                      <span className="relative z-10 text-white">{service.icon}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{service.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200/50 dark:border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-20 px-6 border-t border-black/5 dark:border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div {...REVEAL_UP} className="text-center mb-16">
            <SectionHeader title="Our" titleAccent="Process" description="A proven methodology that keeps projects on time, on budget, and on point." align="center" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'We analyze your business needs, define scope, and map out the technical architecture.' },
              { step: '02', title: 'Design', desc: 'UX/UI wireframes and interactive prototypes validated before writing code.' },
              { step: '03', title: 'Development', desc: 'Agile sprints with weekly demos. You see progress every 5 business days.' },
              { step: '04', title: 'Launch & Support', desc: 'Deployment, monitoring, and ongoing maintenance to keep things running.' },
            ].map((item, i) => (
              <motion.div key={item.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center md:text-left">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent mb-3">{item.step}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="relative py-12 px-6 border-t border-black/5 dark:border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-8">Trusted by innovative teams</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {['TechFlow', 'DataSync', 'CloudBase', 'ScaleUp', 'NeuralKit', 'BuildStack'].map((name) => (
              <span key={name} className="text-lg font-semibold text-gray-300 dark:text-gray-600 tracking-wide">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="relative py-20 px-6 border-t border-black/5 dark:border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div {...REVEAL_UP} className="text-center mb-12">
            <SectionHeader title="Industries We" titleAccent="Serve" description="Deep domain expertise across high-growth sectors." align="center" />
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'FinTech', desc: 'Payment systems, trading platforms, and compliance tools.', icon: '💳' },
              { title: 'HealthTech', desc: 'Patient portals, telehealth, and EHR integrations.', icon: '🏥' },
              { title: 'E-commerce', desc: 'Storefronts, inventory systems, and checkout optimization.', icon: '🛒' },
              { title: 'SaaS', desc: 'Multi-tenant platforms, dashboards, and analytics tools.', icon: '☁️' },
            ].map((industry, i) => (
              <motion.div key={industry.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                <GlassCard className="h-full p-5 text-center">
                  <div className="text-2xl mb-3">{industry.icon}</div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">{industry.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{industry.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...REVEAL_UP} className="text-center mb-16">
            <SectionHeader
              title="How We"
              titleAccent="Engage"
              description="Flexible models that adapt to your project's needs and your team's workflow."
              align="center"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <GlassCard className="h-full p-6">
                  <div className="text-3xl mb-4">{model.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{model.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">{model.description}</p>
                  <ul className="space-y-2.5">
                    {model.features.map(feature => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300">
                        <svg className="w-4 h-4 mt-0.5 text-indigo-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
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
                Have a project in mind?
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto">
                Get a detailed estimate within 48 hours. No commitment, no hidden fees — just a clear plan for your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                    Get a Free Estimate
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
                <a
                  href="mailto:hello@qubitcalculus.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium text-gray-700 dark:text-white/80 border border-gray-300 dark:border-white/20 hover:border-indigo-300 dark:hover:border-white/40 hover:bg-indigo-50 dark:hover:bg-white/5 transition-all duration-300"
                >
                  hello@qubitcalculus.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </MarketingLayout>
  );
}
