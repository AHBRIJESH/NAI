import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export type PageRoute = 'home' | 'about' | 'services' | 'industries' | 'case-studies' | 'faq' | 'contact';

interface NavbarProps {
  onBookCall: () => void;
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onBookCall,
  currentPage,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { name: string; page: PageRoute }[] = [
    { name: 'Home', page: 'home' },
    { name: 'About', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'Industries', page: 'industries' },
    { name: 'Case Studies', page: 'case-studies' },
    { name: 'FAQ', page: 'faq' },
    { name: 'Contact', page: 'contact' },
  ];

  const handleLinkClick = (page: PageRoute) => {
    setMobileMenuOpen(false);
    onNavigate(page);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-18 sm:h-20">
        
        {/* Brand: Logo Only (No text name) */}
        <div
          onClick={() => onNavigate('home')}
          className="flex items-center cursor-pointer select-none group py-1"
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

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = currentPage === link.page;
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
