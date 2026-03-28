/**
 * Press Page — Qubit Calculus Agency
 *
 * Media resources, press kit, and company news.
 */

import { motion } from 'framer-motion';
import { MarketingLayout } from '@/components/marketing';
import { REVEAL_UP } from '../../lib/motion-presets';

const pressReleases = [
  {
    date: 'October 2024',
    title: 'Qubit Calculus Launches: A New Era of Boutique Software Engineering',
    summary:
      'Qubit Calculus officially launches its agency services, focusing on high-performance web applications, MVP engineering for startups, and digital transformation for established businesses.',
    link: '#',
  },
  {
    date: 'September 2024',
    title: 'Digital Transformation: Bringing Old-School Tech to the Modern Era',
    summary:
      'Qubit Calculus announces its specialized service tier for small to mid-sized companies looking to modernize their legacy systems with cutting-edge technology.',
    link: '#',
  },
];

const brandAssets = [
  {
    name: 'Logo Pack',
    description: 'Full logo in various formats (SVG, PNG, PDF)',
    formats: 'SVG, PNG',
    icon: '🎨',
    href: '#',
  },
  {
    name: 'Brand Guidelines',
    description: 'Colors, typography, and usage guidelines',
    formats: 'PDF',
    icon: '📐',
    href: '#',
  },
  {
    name: 'Project Showcases',
    description: 'High-resolution screenshots of our recent work',
    formats: 'JPG, PNG',
    icon: '📱',
    href: '#',
  },
  {
    name: 'Agency Fact Sheet',
    description: 'Detailed profile of our services and expertise',
    formats: 'PDF',
    icon: '📊',
    href: '#',
  },
];

const companyFacts = [
  { label: 'Founded', value: '2024' },
  { label: 'Headquarters', value: 'Remote (Europe/Georgia)' },
  { label: 'Focus', value: 'Web & Mobile Development' },
  { label: 'Expertise', value: 'Full-stack, UI/UX, Scalability' },
  { label: 'Primary Contact', value: 'hello@qubitcalculus.com' },
  { label: 'Website', value: 'qubitcalculus.com' },
];

export default function Press() {
  return (
    <MarketingLayout
      title="Press & Media"
      subtitle="Resources and news for media partners and journalists."
    >
      {/* Press Kit Download */}
      <section className="marketing-section marketing-section--alt">
        <div className="marketing-section__container">
          <motion.div
            {...REVEAL_UP}
            className="marketing-card text-center"
            style={{
              background:
                'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(5, 150, 105, 0.05) 100%)',
            }}
          >
            <h2 className="mb-4 text-2xl font-bold text-slate-100">Official Media Kit</h2>
            <p className="mb-6 text-slate-400">
              Download our complete press package including high-resolution assets, brand guidelines, and agency backgrounder.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#"
                className="marketing-btn marketing-btn--primary"
              >
                Download Media Kit (ZIP)
              </a>
              <a href="mailto:hello@qubitcalculus.com" className="marketing-btn marketing-btn--secondary">
                Request Interview
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Assets */}
      <section className="marketing-section marketing-section--dark">
        <div className="marketing-section__container">
          <motion.div {...REVEAL_UP} className="marketing-section__header">
            <h2 className="marketing-section__title">Brand Assets</h2>
            <p className="marketing-section__desc">Pre-approved visuals and guidelines for media use</p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {brandAssets.map((asset, index) => (
              <motion.div
                key={asset.name}
                {...REVEAL_UP}
                transition={{ delay: index * 0.1 }}
                className="marketing-card group cursor-pointer"
                style={{ padding: '1.5rem' }}
              >
                <div className="mb-3" style={{ fontSize: '2rem' }}>
                  {asset.icon}
                </div>
                <h3 className="mb-1 font-semibold text-slate-100">{asset.name}</h3>
                <p className="mb-3 text-sm text-slate-400">{asset.description}</p>
                <span className="text-xs font-mono text-indigo-400">
                  {asset.formats}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Facts */}
      <section className="marketing-section marketing-section--alt">
        <div className="marketing-section__container">
          <motion.div {...REVEAL_UP} className="marketing-section__header">
            <h2 className="marketing-section__title">At a Glance</h2>
            <p className="marketing-section__desc">Key facts about Qubit Calculus Agency</p>
          </motion.div>

          <motion.div
            {...REVEAL_UP}
            className="marketing-card mx-auto max-w-3xl"
            style={{ padding: '1.5rem' }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {companyFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex justify-between border-b border-white/10 pb-3 last:border-0 sm:border-0 sm:pb-0"
                >
                  <span className="text-slate-400">{fact.label}</span>
                  <span className="font-medium text-slate-100">{fact.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="marketing-section marketing-section--dark">
        <div className="marketing-section__container" style={{ maxWidth: '56rem' }}>
          <motion.div {...REVEAL_UP} className="marketing-section__header">
            <h2 className="marketing-section__title">Recent News</h2>
            <p className="marketing-section__desc">Official announcements and press releases</p>
          </motion.div>

          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.title}
                {...REVEAL_UP}
                transition={{ delay: index * 0.1 }}
                className="marketing-card group block cursor-pointer"
                style={{ padding: '1.5rem' }}
              >
                <span className="text-sm text-indigo-400">
                  {release.date}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-slate-100 group-hover:text-indigo-300">
                  {release.title}
                </h3>
                <p className="mt-2 text-slate-400">{release.summary}</p>
                <span className="mt-3 inline-block text-sm text-indigo-400">
                  Read more →
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
