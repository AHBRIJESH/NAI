import React from 'react';
import { ArrowUp, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { MotionDotCanvas } from './MotionDotCanvas';
import type { PageRoute } from './Navbar';

interface GradientFooterProps {
  onBookCall: () => void;
  onNavigate: (page: PageRoute) => void;
  onOpenAssessment?: () => void;
}

// Custom SVG Icons for exact brand representation
const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export const GradientFooter: React.FC<GradientFooterProps> = ({
  onBookCall,
  onNavigate,
  onOpenAssessment,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { name: string; page?: PageRoute; action?: string }[] = [
    { name: 'About', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'Artificial Intelligence', page: 'artificial-intelligence' },
    { name: 'Data & AI', page: 'data-and-ai' },
    { name: 'Industries', page: 'industries' },
    { name: 'Resources', page: 'resources' },
    { name: 'Case Studies', page: 'case-studies' },
    { name: 'Contact Us', page: 'contact' },
    { name: 'Diagnostic', action: 'assessment' },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/nairai',
      icon: LinkedInIcon,
      hoverClass: 'hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]',
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@naircorp?si=gcy-P6RD3bsbm9Zv',
      icon: YouTubeIcon,
      hoverClass: 'hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000]',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/naircorp?stkn=NTJoY2VjcDUxY3B0&utm_source=qr',
      icon: InstagramIcon,
      hoverClass: 'hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white hover:border-transparent',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/1MA8bMLjab/?mibextid=wwXIfr',
      icon: FacebookIcon,
      hoverClass: 'hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]',
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#F0F7FF] via-[#E8F3FF] to-[#F1F5F9] text-[#0A192F] overflow-hidden border-t border-blue-200/80">
      {/* Interactive Motion Dot Deflection Effect */}
      <MotionDotCanvas dotCount={45} deflectionRadius={120} />

      {/* Subtle Ambient Radial Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[250px] bg-blue-300/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[250px] bg-sky-300/15 blur-[120px] pointer-events-none rounded-full" />

      {/* Main Minimal Footer Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-14 pb-10 relative z-10">
        <ScrollReveal y={20} duration={0.55}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-blue-200/70">
            
            {/* Brand Logo Only (NO duplicate text next to it) */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div
                onClick={() => onNavigate('home')}
                className="select-none cursor-pointer group mb-3 inline-block"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onNavigate('home')}
                aria-label="NAIR.AI Homepage"
              >
                <img
                  src="/images/logo.png"
                  alt="NAIR.AI"
                  className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm font-normal leading-relaxed">
                Autonomous AI systems, multi-agent swarms, and sovereign enterprise decision architectures.
              </p>
              <a
                href="mailto:info@nair.ai"
                className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#1D4ED8] hover:underline"
              >
                <span>info@nair.ai</span>
              </a>
            </div>

            {/* Streamlined Core Navigation Links */}
            <nav className="flex flex-wrap items-center justify-center gap-5 sm:gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => {
                    if (link.page) {
                      onNavigate(link.page);
                    } else if (link.action === 'book') {
                      onBookCall();
                    } else if (link.action === 'assessment' && onOpenAssessment) {
                      onOpenAssessment();
                    }
                  }}
                  className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#1D4ED8] transition-colors cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Social Links with Attractive Icons */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map((s) => {
                const IconComp = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow NAIR.AI on ${s.name}`}
                    title={s.name}
                    className={`w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-600 flex items-center justify-center transition-all duration-200 shadow-xs hover:scale-110 active:scale-95 ${s.hoverClass}`}
                  >
                    <IconComp />
                  </a>
                );
              })}
            </div>

          </div>
        </ScrollReveal>

        {/* Minimal Bottom Bar: Copyright & Back To Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} NAIR.AI. All rights reserved. Sovereign AI.
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#1D4ED8]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Zero Data Retention</span>
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-700 hover:text-[#1D4ED8] transition-colors cursor-pointer font-bold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default GradientFooter;
