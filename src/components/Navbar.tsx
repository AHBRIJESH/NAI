import React, { useState } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onBookCall: () => void;
  currentPage: 'home' | 'faq';
  onNavigate: (page: 'home' | 'faq', sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onBookCall,
  currentPage,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', sectionId: 'services' },
    { name: 'About', sectionId: 'about' },
    { name: 'Case Studies', sectionId: 'case-studies' },
    { name: 'Capabilities', sectionId: 'capabilities' },
    { name: 'FAQ', isPage: true },
  ];

  const handleLinkClick = (link: typeof navLinks[0]) => {
    setMobileMenuOpen(false);
    if (link.isPage) {
      onNavigate('faq');
    } else {
      onNavigate('home', link.sectionId);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-20">
        
        {/* Brand Logo */}
        <div
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 cursor-pointer select-none group"
        >
          <img
            src="/images/logo.png"
            alt="NAIR.AI Logo"
            className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-display font-black text-xl tracking-tight text-[#0A192F]">
              NAIR<span className="text-[#DC2626]">.AI</span>
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500 font-bold -mt-0.5">
              Enterprise Systems
            </span>
          </div>
        </div>

        {/* Desktop Centered Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const isActive = link.isPage && currentPage === 'faq';
            return (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link)}
                className={`text-sm font-semibold transition-colors cursor-pointer py-1 ${
                  isActive
                    ? 'text-[#2563EB] font-bold border-b-2 border-[#2563EB]'
                    : 'text-slate-700 hover:text-[#2563EB]'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onBookCall}
            className="px-6 py-2.5 rounded-full bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 flex items-center gap-2 cursor-pointer hover:scale-102 active:scale-98"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-black focus:outline-hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link)}
              className="block w-full text-left py-2 text-base font-semibold text-slate-800 hover:text-[#2563EB]"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-4 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookCall();
              }}
              className="w-full py-3 rounded-full bg-[#1D4ED8] text-white text-sm font-bold shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
