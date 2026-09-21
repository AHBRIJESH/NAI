import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onBookCall: () => void;
  currentPage?: 'home' | 'faq';
  onNavigate?: (page: 'home' | 'faq', sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onBookCall,
  currentPage = 'home',
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'SOLUTIONS', sectionId: 'solutions' },
    { label: 'JOURNEY', sectionId: 'journey' },
    { label: 'CAPABILITIES', sectionId: 'capabilities' },
    { label: 'IMPACT ROI', sectionId: 'calculator' },
    { label: 'FAQ', page: 'faq' as const },
  ];

  const handleLinkClick = (e: React.MouseEvent, link: typeof navLinks[number]) => {
    e.preventDefault();
    if (link.page === 'faq') {
      if (onNavigate) {
        onNavigate('faq');
      } else {
        window.location.hash = '#/faq';
      }
    } else {
      if (onNavigate) {
        onNavigate('home', link.sectionId);
      } else {
        const el = document.getElementById(link.sectionId);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('home');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#FFFDEE]/90 backdrop-blur-xl border-b border-[#0C342C]/10 shadow-xs'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={handleLogoClick}
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#076653] rounded-xl cursor-pointer"
          >
            <img
              src="/images/logo.png"
              alt="NAIR.AI"
              className="h-7 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-[#076653]/20 bg-[#E2FBCE] text-[#06231D] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#076653] pulse-beacon"></span>
              ENTERPRISE AI
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => {
              const isFaqActive = link.page === 'faq' && currentPage === 'faq';
              return (
                <button
                  key={link.label}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`text-xs font-mono tracking-[0.18em] uppercase font-bold transition-all duration-200 cursor-pointer ${
                    isFaqActive
                      ? 'text-[#06231D] px-3 py-1 rounded-full bg-[#E2FBCE] border border-[#076653]/30 shadow-2xs'
                      : 'text-[#0C342C]/75 hover:text-[#076653]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button (Button-in-Button Architecture) */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onBookCall}
              className="px-6 py-3 text-xs font-mono uppercase tracking-[0.16em] font-bold transition-all duration-300 flex items-center gap-3 rounded-full bg-[#0C342C] hover:bg-[#076653] text-[#FFFDEE] shadow-lg shadow-[#0C342C]/15 hover:shadow-xl hover:shadow-[#076653]/25 active:scale-[0.98] group cursor-pointer border border-[#076653]/30"
            >
              <span>Book Strategy Call</span>
              <div className="w-6 h-6 rounded-full bg-[#E3EF26] text-[#06231D] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-[#E2FBCE]/60 text-[#06231D] focus:outline-none focus:ring-2 focus:ring-[#076653]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#06231D]/98 backdrop-blur-2xl text-[#FFFDEE] flex flex-col justify-between p-8 lg:hidden animate-in fade-in duration-200"
        >
          <div className="flex items-center justify-between pb-6 border-b border-[#076653]/30">
            <div className="flex items-center gap-3">
              <span className="font-display text-3xl font-extrabold tracking-wider">
                NAIR<span className="text-[#E3EF26]">.AI</span>
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-full bg-white/10 text-[#FFFDEE]"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 py-12">
            {navLinks.map((link) => {
              const isFaqActive = link.page === 'faq' && currentPage === 'faq';
              return (
                <button
                  key={link.label}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`text-2xl font-mono tracking-widest flex items-center justify-between group text-left cursor-pointer transition-colors ${
                    isFaqActive ? 'text-[#E3EF26]' : 'text-[#FFFDEE]/90 hover:text-[#E3EF26]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-6 h-6 text-[#E3EF26] transition-transform group-hover:translate-x-1" />
                </button>
              );
            })}
          </nav>

          <div className="flex flex-col gap-3 pt-6 border-t border-[#076653]/30">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookCall();
              }}
              className="w-full py-4.5 bg-[#E3EF26] text-[#06231D] font-mono text-sm uppercase tracking-wider font-extrabold text-center rounded-full shadow-lg shadow-[#E3EF26]/20 transition-transform active:scale-[0.98] cursor-pointer"
            >
              Book an AI Strategy Call
            </button>
            <p className="text-xs text-[#E2FBCE]/80 text-center font-mono pt-2">
              Enterprise AI Consulting • Governance • Automation
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
