import React from 'react';

interface NavbarProps {
  onBookCall?: () => void;
  currentPage?: 'home' | 'faq';
  onNavigate: (page: 'home' | 'faq', sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-16 sm:h-18">
        {/* Brand Logo Only */}
        <div
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 cursor-pointer select-none group"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onNavigate('home')}
          aria-label="NAIR.AI Homepage"
        >
          <img
            src="/images/logo.png"
            alt="NAIR.AI Logo"
            className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
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
      </div>
    </header>
  );
};

export default Navbar;
