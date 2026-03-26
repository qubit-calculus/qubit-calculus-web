import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';

const projects = [
  {
    title: 'DeFi Swap Protocol',
    client: 'Apex Finance',
    challenge: 'Needed a high-throughput decentralized exchange with sub-second finality and institutional-grade security.',
    description: 'We built a fully decentralized swapping interface with custom smart contracts, real-time price feeds, and an intuitive trading UI using Next.js and ethers.js.',
    metrics: ['$12M TVL in first 30 days', 'Sub-50ms UI response time', 'Zero security incidents since launch'],
    image: '/case_study_1.png',
    link: '#',
    tags: ['Web3', 'Next.js', 'Smart Contracts'],
  },
  {
    title: 'AI-Powered Supply Chain Dashboard',
    client: 'Meridian Logistics',
    challenge: 'Legacy systems couldn’t predict disruptions, costing millions in delayed shipments and idle inventory.',
    description: 'We developed an enterprise analytics platform using LLMs and ML models to predict supply chain disruptions in real time, with automated alert routing and decision support.',
    metrics: ['24% reduction in operational costs', '99.7% prediction accuracy on disruptions', '6-week delivery from kickoff to production'],
    image: '/case_study_2.png',
    link: '#',
    tags: ['AI/ML', 'React', 'Python'],
  },
  {
    title: 'Patient Portal & Telehealth Platform',
    client: 'CareConnect Health',
    challenge: 'Fragmented patient experience across scheduling, records, and virtual visits — all needing HIPAA compliance.',
    description: 'Built a unified patient portal with secure video consultations, appointment booking, medical records access, and real-time messaging between patients and providers.',
    metrics: ['40% increase in patient engagement', 'Full HIPAA & SOC 2 compliance', '3x faster appointment scheduling'],
    image: '/case_study_3.png',
    link: '#',
    tags: ['Healthcare', 'React Native', 'WebRTC'],
  },
];

export const CaseStudies = () => {
  return (
    <section id="work" className="zoom-section relative py-24 md:py-32 px-6 bg-gray-50 dark:bg-[#050508] border-t border-black/5 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Proven"
          titleAccent="Impact"
          titleAccentClass="title-fx--neon"
          description="Explore how we've helped startups and enterprises scale their visions into highly-performant digital realities."
        />

        <div className="mt-16 space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${isEven ? '' : 'md:flex-row-reverse'}`}
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2 relative group perspective">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 dark:from-indigo-500/20 dark:to-blue-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 shadow-xl dark:shadow-2xl transition-all duration-700 group-hover:scale-[1.02] group-hover:rotate-y-2">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-auto object-cover aspect-[4/3]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/5 dark:bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <span className="text-indigo-600 dark:text-indigo-500 font-mono text-sm tracking-widest mb-2 block transition-colors duration-500">CLIENT: {project.client}</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-500">{project.title}</h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map(tag => (
                      <span key={tag} className="inline-flex items-center rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-400 transition-colors duration-500">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Challenge */}
                  <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-2">The Challenge</p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 transition-colors duration-500">
                    {project.challenge}
                  </p>

                  {/* Solution */}
                  <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-2">Our Solution</p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 transition-colors duration-500">
                    {project.description}
                  </p>

                  {/* Results */}
                  <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-3">Results</p>
                  <div className="space-y-2 mb-8">
                    {project.metrics.map(metric => (
                      <div key={metric} className="flex items-center text-gray-700 dark:text-gray-300 transition-colors duration-500">
                        <svg className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {metric}
                      </div>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="inline-flex items-center w-max px-6 py-3 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-900 dark:text-white font-medium hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all group"
                  >
                    View Full Case Study
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
