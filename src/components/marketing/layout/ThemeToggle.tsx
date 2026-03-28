import { motion } from 'framer-motion';
import { useTheme } from '../../../hooks/use-theme';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const options = [
    {
      id: 'system',
      label: 'System Theme',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      id: 'light',
      label: 'Light Mode',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      )
    },
    {
      id: 'dark',
      label: 'Dark Mode',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )
    }
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] hidden md:block">
      <div className="flex items-center gap-1 p-1 rounded-full border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-[#050505]/70 backdrop-blur-xl shadow-lg transition-colors">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => setTheme(option.id as any)}
            className="relative px-3 py-1.5 rounded-full text-sm outline-none w-10 h-8 flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
            aria-label={option.label}
            title={option.label}
          >
            {theme === option.id && (
              <motion.div
                layoutId="theme-toggle-bubble"
                className="absolute inset-0 rounded-full bg-gray-200 dark:bg-white/10"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
              />
            )}
            <span className={`relative z-10 transition-colors duration-200 ${
              theme === option.id 
                ? 'text-black dark:text-white' 
                : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
            }`}>
              {option.icon}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
