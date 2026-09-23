import React, { useState, useRef, useEffect } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  HeartPulse,
  Landmark,
  Scale,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export type PageRoute = 'home' | 'about' | 'services' | 'industries' | 'case-studies' | 'faq' | 'contact';
export type IndustrySector = 'healthcare' | 'finance' | 'legal';

export interface IndustrySubPage {
  id: IndustrySector;
  name: string;
  shortName: string;
  badge: string;
  desc: string;
  metric: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  accentColor: string;
  bgHover: string;
}

export const industrySubPages: IndustrySubPage[] = [
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    shortName: 'Healthcare',
    badge: 'HIPAA BAA · FHIR v4',
    desc: 'Autonomous clinical note structuring, prior-auth swarms & patient intake triage with zero PHI persistence.',
    metric: '91% Faster Intake',
    icon: HeartPulse,
    accentColor: '#1D4ED8',
    bgHover: 'hover:bg-blue-50/80',
  },
  {
    id: 'finance',
    name: 'Banking, Fintech & Capital Markets',
    shortName: 'Finance',
    badge: 'SOC 2 · < 15ms Latency',
    desc: 'Sub-15ms fraud neural scoring, high-frequency transaction radar & deterministic ERP ledger matching.',
    metric: '< 15ms Latency',
    icon: Landmark,
    accentColor: '#DC2626',
    bgHover: 'hover:bg-red-50/80',
  },
  {
    id: 'legal',
    name: 'Legal Operations & Diligence',
    shortName: 'Legal',
    badge: 'Air-Gapped · Zero IP Leak',
    desc: 'Deterministic contract redlining, M&A diligence synthesis & regulatory cross-jurisdiction search.',
    metric: '91% Time Saved',
    icon: Scale,
    accentColor: '#0284C7',
    bgHover: 'hover:bg-sky-50/80',
  },
];

interface NavbarProps {
  onBookCall: () => void;
  currentPage: PageRoute;
  onNavigate: (page: PageRoute, sector?: IndustrySector) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onBookCall,
  currentPage,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const navLinks: { name: string; page: PageRoute; hasDropdown?: boolean }[] = [
    { name: 'Home', page: 'home' },
    { name: 'About', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'Industries', page: 'industries', hasDropdown: true },
    { name: 'Case Studies', page: 'case-studies' },
    { name: 'FAQ', page: 'faq' },
  ];

  // Mouse hover handlers with debounced exit to prevent accidental closing
  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIndustriesOpen(true);
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setIndustriesOpen(false);
    }, 180);
  };

  // Close dropdown on outside click or escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIndustriesOpen(false);
        setMobileMenuOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIndustriesOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleLinkClick = (page: PageRoute) => {
    setMobileMenuOpen(false);
    setIndustriesOpen(false);
    onNavigate(page);
  };

  const handleSubSectorClick = (sector: IndustrySector) => {
    setMobileMenuOpen(false);
    setIndustriesOpen(false);
    onNavigate('industries', sector);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-18 sm:h-20">
        
        {/* Brand: Official Logo */}
        <div
          onClick={() => handleLinkClick('home')}
          className="flex items-center cursor-pointer select-none group py-1"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleLinkClick('home')}
          aria-label="NAIR.AI Homepage"
        >
          <img
            src="/images/logo.png"
            alt="NAIR.AI"
            className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Desktop Navigation Links with Cool Industries Dropdown */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = currentPage === link.page;

            // Dedicated Dropdown item for Industries
            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  ref={dropdownRef}
                  className="relative py-2"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() => handleLinkClick('industries')}
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 cursor-pointer py-1 relative group ${
                      isActive || industriesOpen
                        ? 'text-[#1D4ED8] font-bold'
                        : 'text-slate-700 hover:text-[#1D4ED8]'
                    }`}
                    aria-expanded={industriesOpen}
                    aria-haspopup="true"
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-250 ease-out ${
                        industriesOpen
                          ? 'rotate-180 text-[#1D4ED8]'
                          : 'text-slate-400 group-hover:text-[#1D4ED8]'
                      }`}
                    />
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1D4ED8] rounded-full" />
                    )}
                  </button>

                  {/* Desktop Dropdown Popover */}
                  <AnimatePresence>
                    {industriesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 pointer-events-auto"
                      >
                        {/* Dropdown Card */}
                        <div className="w-[500px] rounded-3xl bg-white/98 backdrop-blur-2xl border border-slate-200/90 shadow-[0_24px_64px_-12px_rgba(10,25,47,0.18),0_0_0_1px_rgba(255,255,255,0.9)] p-2.5 text-left overflow-hidden">
                          
                          {/* Header banner */}
                          <div className="px-3.5 pt-2 pb-2.5 flex items-center justify-between border-b border-slate-100">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#1D4ED8] animate-pulse" />
                              <span className="font-mono text-[10.5px] font-extrabold uppercase tracking-wider text-slate-500">
                                Specialized Industry Practices
                              </span>
                            </div>
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#1D4ED8] font-mono text-[10px] font-bold">
                              3 Sovereign Stacks
                            </span>
                          </div>

                          {/* 3 Sub-pages list */}
                          <div className="py-2 space-y-1">
                            {industrySubPages.map((sub) => {
                              const IconComponent = sub.icon;
                              return (
                                <button
                                  key={sub.id}
                                  type="button"
                                  onClick={() => handleSubSectorClick(sub.id)}
                                  className={`w-full p-3 rounded-2xl transition-all duration-200 flex items-start gap-3.5 text-left group cursor-pointer border border-transparent ${sub.bgHover} hover:border-slate-200/90 hover:shadow-xs`}
                                >
                                  {/* Subpage Icon */}
                                  <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-250 group-hover:scale-105 shadow-xs"
                                    style={{
                                      backgroundColor: `${sub.accentColor}12`,
                                      color: sub.accentColor,
                                    }}
                                  >
                                    <IconComponent className="w-5 h-5 transition-transform group-hover:rotate-3" />
                                  </div>

                                  {/* Subpage Info */}
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-2 mb-1">
                                      <span className="font-display font-extrabold text-[13.5px] text-[#0A192F] group-hover:text-[#1D4ED8] transition-colors leading-tight">
                                        {sub.name}
                                      </span>
                                      <span
                                        className="font-mono text-[9.5px] font-bold px-2 py-0.5 rounded-md whitespace-nowrap"
                                        style={{
                                          backgroundColor: `${sub.accentColor}15`,
                                          color: sub.accentColor,
                                        }}
                                      >
                                        {sub.badge}
                                      </span>
                                    </div>
                                    <p className="text-xs text-slate-500 group-hover:text-slate-700 leading-relaxed font-normal line-clamp-2">
                                      {sub.desc}
                                    </p>
                                    <div className="mt-1.5 flex items-center gap-2">
                                      <span className="font-mono text-[10.5px] text-slate-500">
                                        Key Outcome: <strong className="font-bold" style={{ color: sub.accentColor }}>{sub.metric}</strong>
                                      </span>
                                    </div>
                                  </div>

                                  {/* Hover Indicator Arrow */}
                                  <div className="w-6 h-6 rounded-full bg-slate-100/70 group-hover:bg-white flex items-center justify-center shrink-0 mt-2 transition-all group-hover:translate-x-0.5">
                                    <ArrowRight
                                      className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1D4ED8] transition-colors"
                                    />
                                  </div>
                                </button>
                              );
                            })}
                          </div>

                          {/* Footer with Overview & Custom CTA */}
                          <div className="px-3.5 py-2.5 bg-slate-50/90 rounded-2xl border border-slate-100 flex items-center justify-between mt-1">
                            <button
                              type="button"
                              onClick={() => handleLinkClick('industries')}
                              className="font-mono text-xs font-bold text-[#1D4ED8] hover:text-[#0A192F] flex items-center gap-1.5 transition-colors cursor-pointer group"
                            >
                              <span>Explore All Industries Overview</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button
                              type="button"
                              onClick={() => {
                                setIndustriesOpen(false);
                                onBookCall();
                              }}
                              className="font-mono text-[11px] font-bold text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                            >
                              Custom Architecture &rarr;
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            // Regular link
            return (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.page)}
                className={`text-sm font-semibold transition-all duration-200 cursor-pointer py-1 relative ${
                  isActive
                    ? 'text-[#1D4ED8] font-bold'
                    : 'text-slate-700 hover:text-[#1D4ED8]'
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1D4ED8] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onBookCall();
            }}
            className="px-5 py-2.5 rounded-full bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 flex items-center gap-2 cursor-pointer hover:scale-102 active:scale-98 whitespace-nowrap"
          >
            <span>Book an AI strategy call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-black focus:outline-hidden cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-2 shadow-xl">
          {navLinks.map((link) => {
            const isActive = currentPage === link.page;

            // Accordion for Industries on Mobile
            if (link.hasDropdown) {
              return (
                <div key={link.name} className="rounded-2xl border border-slate-200/80 overflow-hidden bg-slate-50/50">
                  <button
                    type="button"
                    onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                    className={`w-full flex items-center justify-between py-3 px-4 text-base font-semibold cursor-pointer transition-colors ${
                      isActive
                        ? 'bg-blue-50/80 text-[#1D4ED8] font-bold'
                        : 'text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span>{link.name}</span>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-100/70 text-[#1D4ED8]">
                        3 Sub Pages
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                        mobileIndustriesOpen ? 'rotate-180 text-[#1D4ED8]' : ''
                      }`}
                    />
                  </button>

                  {mobileIndustriesOpen && (
                    <div className="px-3 pb-3 pt-1 space-y-1.5 bg-white border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => handleLinkClick('industries')}
                        className="w-full text-left py-2 px-3 rounded-xl font-mono text-xs font-bold text-[#1D4ED8] hover:bg-blue-50/60 flex items-center justify-between"
                      >
                        <span>Explore All Industries Overview</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      {industrySubPages.map((sub) => {
                        const IconComponent = sub.icon;
                        return (
                          <button
                            key={sub.id}
                            type="button"
                            onClick={() => handleSubSectorClick(sub.id)}
                            className="w-full p-2.5 rounded-xl border border-slate-100 hover:border-slate-200 bg-slate-50/70 hover:bg-slate-50 text-left flex items-start gap-3 transition-colors cursor-pointer"
                          >
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                              style={{
                                backgroundColor: `${sub.accentColor}15`,
                                color: sub.accentColor,
                              }}
                            >
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-1">
                                <span className="font-display font-bold text-xs text-[#0A192F]">
                                  {sub.name}
                                </span>
                                <span
                                  className="font-mono text-[9px] font-bold px-1.5 py-0.2 rounded"
                                  style={{
                                    backgroundColor: `${sub.accentColor}15`,
                                    color: sub.accentColor,
                                  }}
                                >
                                  {sub.metric}
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-500 font-normal line-clamp-1 mt-0.5">
                                {sub.desc}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.page)}
                className={`block w-full text-left py-2.5 px-3 rounded-xl text-base font-semibold transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-blue-50 text-[#1D4ED8] font-bold'
                    : 'text-slate-800 hover:text-[#1D4ED8]'
                }`}
              >
                {link.name}
              </button>
            );
          })}
          <div className="pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setMobileMenuOpen(false);
                onBookCall();
              }}
              className="w-full py-3 rounded-full bg-[#1D4ED8] text-white text-sm font-bold shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book an AI strategy call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
