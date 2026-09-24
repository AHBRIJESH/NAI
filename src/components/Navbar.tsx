import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export type PageRoute = 'home' | 'about' | 'services' | 'industries' | 'resources' | 'case-studies' | 'faq' | 'contact';
export type IndustrySector = 'healthcare' | 'finance' | 'legal';

export interface IndustrySubPage {
  id: IndustrySector;
  name: string;
}

export const industrySubPages: IndustrySubPage[] = [
  { id: 'healthcare', name: 'Healthcare' },
  { id: 'finance', name: 'Finance' },
  { id: 'legal', name: 'Legal' },
];

interface NavbarProps {
  onBookCall: () => void;
  currentPage: PageRoute;
  onNavigate: (page: PageRoute, sector?: IndustrySector) => void;
  onOpenAssessment?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onBookCall,
  currentPage,
  onNavigate,
  onOpenAssessment,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const resourcesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resourcesDropdownRef = useRef<HTMLDivElement | null>(null);

  // Dynamic Scroll Detection for Seamless Top-Transparency & Cool Scrolled Transition
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Exact Requested Navbar Setup: About > Services > Industries > Resources > Case Studies > Contact Us
  const navLinks: { name: string; page: PageRoute; dropdownType?: 'industries' | 'resources' }[] = [
    { name: 'About', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'Industries', page: 'industries', dropdownType: 'industries' },
    { name: 'Resources', page: 'resources', dropdownType: 'resources' },
    { name: 'Case Studies', page: 'case-studies' },
    { name: 'Contact Us', page: 'contact' },
  ];

  // Mouse hover handlers for Industries dropdown
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

  // Mouse hover handlers for Resources dropdown
  const handleResourcesMouseEnter = () => {
    if (resourcesTimeoutRef.current) {
      clearTimeout(resourcesTimeoutRef.current);
      resourcesTimeoutRef.current = null;
    }
    setResourcesOpen(true);
  };

  const handleResourcesMouseLeave = () => {
    if (resourcesTimeoutRef.current) {
      clearTimeout(resourcesTimeoutRef.current);
    }
    resourcesTimeoutRef.current = setTimeout(() => {
      setResourcesOpen(false);
    }, 180);
  };

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIndustriesOpen(false);
        setResourcesOpen(false);
        setMobileMenuOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIndustriesOpen(false);
      }
      if (resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
      if (resourcesTimeoutRef.current) clearTimeout(resourcesTimeoutRef.current);
    };
  }, []);

  const handleLinkClick = (page: PageRoute) => {
    setMobileMenuOpen(false);
    setIndustriesOpen(false);
    setResourcesOpen(false);
    onNavigate(page);
  };

  const handleSubSectorClick = (sector: IndustrySector) => {
    setMobileMenuOpen(false);
    setIndustriesOpen(false);
    onNavigate('industries', sector);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out ${
        mobileMenuOpen
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-md py-0'
          : isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-0'
            : 'bg-transparent border-b border-transparent shadow-none py-1 sm:py-2'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between transition-all duration-300 ease-in-out ${
          isScrolled ? 'h-16 sm:h-18' : 'h-18 sm:h-20'
        }`}
      >
        
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

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-8">
          {navLinks.map((link) => {
            const isActive =
              currentPage === link.page ||
              (link.page === 'resources' && (currentPage === 'resources' || currentPage === 'faq')) ||
              (link.page === 'contact' && currentPage === 'contact');

            // Industries Dropdown
            if (link.dropdownType === 'industries') {
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

                  <AnimatePresence>
                    {industriesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.96 }}
                        transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 pointer-events-auto"
                      >
                        <div className="w-44 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl p-1.5 space-y-0.5 text-left">
                          {industrySubPages.map((sub) => (
                            <button
                              key={sub.id}
                              type="button"
                              onClick={() => handleSubSectorClick(sub.id)}
                              className="w-full px-3.5 py-2.5 rounded-xl text-left text-sm font-semibold text-slate-700 hover:text-[#1D4ED8] hover:bg-blue-50/75 transition-all duration-150 cursor-pointer"
                            >
                              {sub.name}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            // Resources Dropdown
            if (link.dropdownType === 'resources') {
              return (
                <div
                  key={link.name}
                  ref={resourcesDropdownRef}
                  className="relative py-2"
                  onMouseEnter={handleResourcesMouseEnter}
                  onMouseLeave={handleResourcesMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() => handleLinkClick('resources')}
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 cursor-pointer py-1 relative group ${
                      isActive || resourcesOpen
                        ? 'text-[#1D4ED8] font-bold'
                        : 'text-slate-700 hover:text-[#1D4ED8]'
                    }`}
                    aria-expanded={resourcesOpen}
                    aria-haspopup="true"
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-250 ease-out ${
                        resourcesOpen
                          ? 'rotate-180 text-[#1D4ED8]'
                          : 'text-slate-400 group-hover:text-[#1D4ED8]'
                      }`}
                    />
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1D4ED8] rounded-full" />
                    )}
                  </button>

                  <AnimatePresence>
                    {resourcesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.96 }}
                        transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 pointer-events-auto"
                      >
                        <div className="w-56 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl p-1.5 space-y-0.5 text-left">
                          <button
                            type="button"
                            onClick={() => {
                              setResourcesOpen(false);
                              handleLinkClick('resources');
                            }}
                            className="w-full px-3.5 py-2.5 rounded-xl text-left text-sm font-semibold text-slate-700 hover:text-[#1D4ED8] hover:bg-blue-50/75 transition-all duration-150 cursor-pointer flex items-center justify-between"
                          >
                            <span>FAQ &amp; Knowledge Base</span>
                            <span className="font-mono text-[10px] text-slate-400 font-bold">25 FAQs</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setResourcesOpen(false);
                              if (onOpenAssessment) {
                                onOpenAssessment();
                              } else {
                                handleLinkClick('home');
                              }
                            }}
                            className="w-full px-3.5 py-2.5 rounded-xl text-left text-sm font-semibold text-slate-700 hover:text-[#1D4ED8] hover:bg-blue-50/75 transition-all duration-150 cursor-pointer flex items-center justify-between"
                          >
                            <span>AI Readiness Diagnostic</span>
                            <span className="font-mono text-[10px] text-[#1D4ED8] font-bold">Launch</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setResourcesOpen(false);
                              handleLinkClick('home');
                              setTimeout(() => {
                                const el = document.getElementById('calculator');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                              }, 150);
                            }}
                            className="w-full px-3.5 py-2.5 rounded-xl text-left text-sm font-semibold text-slate-700 hover:text-[#1D4ED8] hover:bg-blue-50/75 transition-all duration-150 cursor-pointer flex items-center justify-between"
                          >
                            <span>ROI Impact Calculator</span>
                            <span className="font-mono text-[10px] text-emerald-600 font-bold">Estimator</span>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            // Standard navigation link
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
            const isActive =
              currentPage === link.page ||
              (link.page === 'resources' && (currentPage === 'resources' || currentPage === 'faq')) ||
              (link.page === 'contact' && currentPage === 'contact');

            // Industries Accordion on Mobile
            if (link.dropdownType === 'industries') {
              return (
                <div key={link.name} className="space-y-1">
                  <button
                    type="button"
                    onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                    className={`w-full flex items-center justify-between py-2.5 px-3 rounded-xl text-base font-semibold cursor-pointer transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-[#1D4ED8] font-bold'
                        : 'text-slate-800 hover:text-[#1D4ED8]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                        mobileIndustriesOpen ? 'rotate-180 text-[#1D4ED8]' : ''
                      }`}
                    />
                  </button>

                  {mobileIndustriesOpen && (
                    <div className="pl-4 pr-1 py-1 space-y-1">
                      {industrySubPages.map((sub) => (
                        <button
                          key={sub.id}
                          type="button"
                          onClick={() => handleSubSectorClick(sub.id)}
                          className="w-full text-left py-2 px-3 rounded-lg text-sm font-semibold text-slate-600 hover:text-[#1D4ED8] hover:bg-blue-50/60 transition-colors cursor-pointer"
                        >
                          {sub.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            // Resources Accordion on Mobile
            if (link.dropdownType === 'resources') {
              return (
                <div key={link.name} className="space-y-1">
                  <button
                    type="button"
                    onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                    className={`w-full flex items-center justify-between py-2.5 px-3 rounded-xl text-base font-semibold cursor-pointer transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-[#1D4ED8] font-bold'
                        : 'text-slate-800 hover:text-[#1D4ED8]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                        mobileResourcesOpen ? 'rotate-180 text-[#1D4ED8]' : ''
                      }`}
                    />
                  </button>

                  {mobileResourcesOpen && (
                    <div className="pl-4 pr-1 py-1 space-y-1">
                      <button
                        type="button"
                        onClick={() => handleLinkClick('resources')}
                        className="w-full text-left py-2 px-3 rounded-lg text-sm font-semibold text-slate-600 hover:text-[#1D4ED8] hover:bg-blue-50/60 transition-colors cursor-pointer flex items-center justify-between"
                      >
                        <span>FAQ &amp; Knowledge Base</span>
                        <span className="font-mono text-xs text-slate-400">25 FAQs</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          if (onOpenAssessment) {
                            onOpenAssessment();
                          } else {
                            handleLinkClick('home');
                          }
                        }}
                        className="w-full text-left py-2 px-3 rounded-lg text-sm font-semibold text-slate-600 hover:text-[#1D4ED8] hover:bg-blue-50/60 transition-colors cursor-pointer flex items-center justify-between"
                      >
                        <span>AI Readiness Diagnostic</span>
                        <span className="font-mono text-xs text-[#1D4ED8]">Launch</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          handleLinkClick('home');
                          setTimeout(() => {
                            const el = document.getElementById('calculator');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }, 150);
                        }}
                        className="w-full text-left py-2 px-3 rounded-lg text-sm font-semibold text-slate-600 hover:text-[#1D4ED8] hover:bg-blue-50/60 transition-colors cursor-pointer flex items-center justify-between"
                      >
                        <span>ROI Impact Calculator</span>
                        <span className="font-mono text-xs text-emerald-600">Estimator</span>
                      </button>
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
