"use client";
import { useNavigate } from 'react-router-dom';
import {
  Mail,
  MapPin,
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "../../ui/hover-footer";
import { footerLinks } from '@/data/landing-data';
import { LogoIcon } from '@/components/Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const sections = [
    { title: "Services", links: footerLinks.product },
    { title: "Resources", links: footerLinks.resources },
    { title: "Company", links: footerLinks.company },
    { title: "Legal", links: footerLinks.legal },
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} className="text-indigo-400" />,
      text: "hello@qubitcalculus.com",
      href: "mailto:hello@qubitcalculus.com",
    },
    {
      icon: <MapPin size={18} className="text-indigo-400" />,
      text: "International (Remote-first)",
    },
  ];

  const handleLinkClick = (to: string) => {
    if (to.startsWith('/#')) {
      const hash = to.slice(1);
      if (window.location.pathname === '/') {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    } else {
      navigate(to);
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-white dark:bg-[#0F0F11]/10 relative h-fit rounded-3xl overflow-hidden m-4 md:m-8 border border-gray-200/60 dark:border-white/5 transition-colors duration-500 shadow-sm dark:shadow-none">
      <div className="max-w-7xl mx-auto p-8 md:p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-8 lg:gap-10 pb-10">
          {/* Brand + Contact section (compact) */}
          <div className="flex flex-col space-y-5 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <LogoIcon size={28} color="white" showGlow={true} />
              <span className="text-gray-900 dark:text-white text-xl font-bold tracking-tight transition-colors duration-500">Qubit Calculus</span>
            </div>
            <ul className="space-y-3">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-sm text-gray-600 dark:text-slate-400 transition-colors duration-500">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Footer link sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-gray-900 dark:text-white text-sm font-bold uppercase tracking-widest mb-5 opacity-50 transition-colors duration-500">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {'href' in link && link.href ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                      >
                        {link.label}
                      </a>
                    ) : 'to' in link ? (
                      <button
                        onClick={() => handleLinkClick(link.to!)}
                        className="text-sm text-gray-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                      >
                        {link.label}
                      </button>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-t border-black/5 dark:border-white/5 my-6 transition-colors duration-500" />

        {/* QUBIT hover text animation */}
        <div className="flex items-center justify-center h-20 md:h-28 -my-2">
          <TextHoverEffect text="QUBIT" />
        </div>

        {/* Footer bottom — copyright only */}
        <div className="flex justify-center text-xs text-gray-500 dark:text-slate-500 transition-colors duration-500">
          <p>
            &copy; {currentYear} Qubit Calculus. All rights reserved.
          </p>
        </div>
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
