/**
 * Download CTA Section
 *
 * Call-to-action with App Store, Google Play, and web app links.
 * Store URLs point to placeholder pages until stores approve submissions.
 *
 * @since v1.0.0
 */

import { memo, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { LandingButton } from '../ui/LandingButton';

const AppleIcon = () => (
  <svg className="h-10 w-10" viewBox="0 0 384 512" fill="currentColor">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-62.6 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

const GooglePlayIcon = () => (
  <svg className="h-10 w-10" viewBox="0 0 512 512" fill="currentColor">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    className="h-10 w-10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

interface Platform {
  name: string;
  icon: ReactNode;
  description: string;
  href: string;
  badge: string;
}

const platforms: Platform[] = [
  {
    name: 'App Store',
    icon: <AppleIcon />,
    description: 'iOS 15+ (Coming Soon)',
    href: '/download',
    badge: 'Download on the',
  },
  {
    name: 'Google Play',
    icon: <GooglePlayIcon />,
    description: 'Android 10+ (Coming Soon)',
    href: '/download',
    badge: 'Get it on',
  },
  {
    name: 'Web App',
    icon: <GlobeIcon />,
    description: 'Any modern browser',
    href: 'https://web.cgraph.org',
    badge: 'Open',
  },
];

export const DownloadCTA = memo(function DownloadCTA() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="download" className="download-cta-section zoom-section py-24">
      <SectionHeader
        title="Available"
        titleAccent="Everywhere"
        titleAccentClass="title-fx--air"
        description="Download CGraph for your platform or use it right in your browser."
      />

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-6 sm:grid-cols-3">
        {platforms.map((platform, i) => (
          <motion.a
            key={platform.name}
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={prefersReduced ? {} : { scale: 1.03, y: -4 }}
            className="group flex flex-col items-center gap-3 rounded-2xl border border-dark-700/50 bg-dark-900/60 p-8 text-center transition-colors hover:border-indigo-500/30 hover:bg-dark-800/80"
          >
            <span className="text-white/80 transition-colors group-hover:text-indigo-400">
              {platform.icon}
            </span>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">{platform.badge}</p>
              <h4 className="text-lg font-bold text-slate-100">{platform.name}</h4>
            </div>
            <p className="text-sm text-slate-400">{platform.description}</p>
          </motion.a>
        ))}
      </div>

      {/* Direct CTA below */}
      <div className="mt-12 text-center">
        <LandingButton href="https://web.cgraph.org/register" variant="primary" size="lg">
          Get Started Free — No Download Required
        </LandingButton>
      </div>
    </section>
  );
});
