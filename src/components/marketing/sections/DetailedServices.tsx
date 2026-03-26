import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';

const services = [
  {
    title: 'AI Development',
    description: 'Custom machine learning models, predictive analytics, and LLM integrations fine-tuned for your specific business needs.',
    icon: (
      <svg className="w-8 h-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L4.2 15.3m15.6 0v1.47a2.25 2.25 0 01-1.8 2.2089l-4.2.84a9.042 9.042 0 01-3.6 0l-4.2-.84a2.25 2.25 0 01-1.8-2.209V15.3m15.6 0H4.2" />
      </svg>
    ),
    gradient: 'from-indigo-500/20 to-transparent',
    border: 'group-hover:border-indigo-500/50'
  },
  {
    title: 'Web3 & Blockchain',
    description: 'Smart contract development, dApp creation, tokenomics consulting, and secure Web3 infrastructure auditing.',
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 016.364 6.364l-1.757 1.757a4.5 4.5 0 01-6.364 0m1.757-9.879a4.5 4.5 0 00-6.364 0L5.07 8.687a4.5 4.5 0 000 6.364m3.182-3.182l7.5-7.5" />
      </svg>
    ),
    gradient: 'from-blue-500/20 to-transparent',
    border: 'group-hover:border-blue-500/50',
    span: 'md:col-span-2'
  },
  {
    title: 'Custom Web Apps',
    description: 'High-performance, scalable web applications built with React, Next.js, and modern serverless architectures.',
    icon: (
      <svg className="w-8 h-8 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    gradient: 'from-cyan-500/20 to-transparent',
    border: 'group-hover:border-cyan-500/50',
    span: 'md:col-span-2'
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Resilient and auto-scaling cloud deployments using AWS, Docker, Kubernetes, and optimized CI/CD pipelines.',
    icon: (
      <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
      </svg>
    ),
    gradient: 'from-indigo-400/20 to-transparent',
    border: 'group-hover:border-indigo-400/50'
  }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }
};

export const DetailedServices = () => {
  return (
    <section id="services" className="zoom-section relative py-24 md:py-32 px-6 overflow-hidden bg-[#050508]">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Digital Transformation"
          titleAccent="Engineered"
          titleAccentClass="title-fx--neon"
          description="We do not just write code. We architect scalable solutions that drive measurable business outcomes across AI, Web3, and modern infrastructure."
        />

        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.title}
              variants={staggerItem}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-colors duration-500 ${service.border} ${service.span || ''}`}
            >
              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              <div className="relative z-10">
                <div className="mb-6 inline-flex p-4 rounded-xl bg-white/5 border border-white/10 shadow-xl group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {service.description}
                </p>
                <div className="mt-8 flex items-center text-sm font-medium text-white/70 group-hover:text-white transition-colors cursor-pointer">
                  Explore Capabilities
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
