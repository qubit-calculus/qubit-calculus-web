import { SectionHeader } from '../ui/SectionHeader';

const technologies = [
  'React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'PyTorch', 
  'Solidity', 'AWS', 'Docker', 'Kubernetes', 'GraphQL', 'Swift', 'Kotlin'
];

export const TechStack = () => {
  return (
    <section className="zoom-section relative py-24 bg-gray-50 dark:bg-[#050508] overflow-hidden border-b border-black/5 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <SectionHeader
          title="Engineered with"
          titleAccent="Modern Stacks"
          titleAccentClass="title-fx--neon"
          description="We leverage enterprise-grade technologies to build secure, scalable, and high-performance applications."
        />
      </div>

      {/* Infinite Marquee */}
      <div className="relative flex overflow-hidden w-full bg-white/50 dark:bg-white/[0.02] border-y border-black/5 dark:border-white/5 py-8 opacity-80 hover:opacity-100 transition-colors duration-500">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 dark:from-[#050508] to-transparent z-10 pointer-events-none transition-colors duration-500" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 dark:from-[#050508] to-transparent z-10 pointer-events-none transition-colors duration-500" />
        
        <div className="animate-marquee flex whitespace-nowrap items-center space-x-12 px-6">
          {/* Duplicate list 3 times for seamless scrolling */}
          {[...technologies, ...technologies, ...technologies].map((tech, i) => (
            <div key={`${tech}-${i}`} className="flex items-center justify-center px-8 py-4 rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm dark:shadow-inner backdrop-blur-sm min-w-[200px] transition-colors duration-500">
               <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-400 dark:from-gray-200 dark:to-gray-500 tracking-wider transition-colors duration-500">
                 {tech}
               </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
