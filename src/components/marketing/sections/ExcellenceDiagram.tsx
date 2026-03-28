import { motion } from 'framer-motion';

const pillars = [
  { id: 1, icon: '🛡️', color: 'from-blue-400 to-indigo-600', delay: 0 },
  { id: 2, icon: '🚀', color: 'from-cyan-400 to-blue-600', delay: 0.1 },
  { id: 3, icon: '🤝', color: 'from-indigo-400 to-purple-600', delay: 0.2 },
  { id: 4, icon: '⚛️', color: 'from-purple-400 to-pink-600', delay: 0.3 },
  { id: 5, icon: '🏗️', color: 'from-blue-500 to-cyan-500', delay: 0.4 },
  { id: 6, icon: '🚩', color: 'from-orange-400 to-red-500', delay: 0.5 },
];

export const ExcellenceDiagram = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-visible">
      {/* 3D Isometric Wrapper */}
      <div className="relative w-[500px] h-[500px] transform-gpu perspective-[1000px] -rotate-x-[30deg] rotate-y-[45deg]">
        
        {/* Glow Foundation */}
        <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full" />

        {/* Pillars Grid */}
        <div className="grid grid-cols-3 gap-8 p-12 relative z-10 h-full w-full">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="relative group">
              {/* Pillar Body (Glass) */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: pillar.delay, duration: 0.8 }
                }}
                className="relative"
              >
                {/* 3D Pillar Mockup */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: pillar.delay
                  }}
                  className="w-20 h-40 relative perspective-[1000px]"
                >
                  {/* Front Face */}
                  <div className="absolute inset-0 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl shadow-2xl" />
                  
                  {/* Side Face (Left) */}
                  <div className="absolute top-0 -left-4 w-4 h-full bg-white/5 dark:bg-white/[0.02] border-l border-white/20 dark:border-white/10 rounded-l-xl -skew-y-[45deg] origin-right" />
                  
                  {/* Top Face */}
                  <div className="absolute -top-4 left-0 w-full h-4 bg-white/20 dark:bg-white/10 border-t border-white/30 dark:border-white/20 rounded-t-xl -skew-x-[45deg] origin-bottom shadow-lg" />

                  {/* Icon Node */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: pillar.delay }}
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pillar.color} shadow-lg shadow-indigo-500/20 flex items-center justify-center text-2xl border border-white/30`}
                    >
                      {pillar.icon}
                    </motion.div>
                    
                    {/* Connecting Light Thread */}
                    <div className="absolute top-full w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent" />
                  </div>

                  {/* Shadow on "Floor" */}
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-16 h-4 bg-black/10 dark:bg-black/40 blur-md rounded-full scale-x-150 rotate-x-[60deg]" />
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Floating Technical Lines */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent opacity-50" />
      </div>
    </div>
  );
};
