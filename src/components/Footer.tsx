import React from 'react';
import { ArrowUp, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface FooterProps {
  onBookCall: () => void;
  isCinematicDark: boolean;
  onNavigate?: (page: 'home' | 'faq', sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookCall, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent, page: 'home' | 'faq', sectionId?: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page, sectionId);
    } else {
      if (page === 'faq') {
        window.location.hash = '#/faq';
      } else if (sectionId) {
        const el = document.getElementById(sectionId);
        el?.scrollIntoView({ behavior: 'smooth' });
      } else {
        scrollToTop();
      }
    }
  };

  return (
    <footer className="py-24 bg-[#06231D] border-t border-[#076653]/30 text-[#FFFDEE]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#076653]/25">
          
          {/* Brand & Purpose (5 cols) */}
          <div className="md:col-span-5 text-left">
            <div className="flex items-center gap-3.5 mb-6">
              <button
                onClick={(e) => handleLinkClick(e, 'home')}
                className="focus:outline-none cursor-pointer"
              >
                <img
                  src="/images/logo.png"
                  alt="NAIR.AI"
                  className="h-8 sm:h-9 w-auto object-contain brightness-110 drop-shadow-[0_2px_12px_rgba(255,255,255,0.15)] hover:scale-105 transition-transform"
                />
              </button>
            </div>

            <p className="text-base text-[#E2FBCE]/80 max-w-sm mb-8 leading-relaxed font-normal">
              Helping growing organizations identify AI opportunities, deploy practical solutions, automate workflows, and scale responsibly.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#E2FBCE]/90">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E3EF26]" />
                SOC2 Type II Ready
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E3EF26]" />
                Zero Data Retention
              </span>
            </div>
          </div>

          {/* Solutions Column (3 cols) */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#E3EF26] font-extrabold mb-5">
              Solutions &amp; Info
            </h4>
            <ul className="space-y-3 text-sm text-[#E2FBCE]/75 font-mono">
              <li><button onClick={(e) => handleLinkClick(e, 'home', 'solutions')} className="hover:text-[#E3EF26] transition-colors cursor-pointer text-left">AI Consulting & Strategy</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'home', 'solutions')} className="hover:text-[#E3EF26] transition-colors cursor-pointer text-left">AI Governance & Guardrails</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'home', 'solutions')} className="hover:text-[#E3EF26] transition-colors cursor-pointer text-left">Agentic AI Workflows</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'home', 'solutions')} className="hover:text-[#E3EF26] transition-colors cursor-pointer text-left">Operational Automation</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'home', 'solutions')} className="hover:text-[#E3EF26] transition-colors cursor-pointer text-left">Generative AI & Private LLMs</button></li>
              <li>
                <button
                  onClick={(e) => handleLinkClick(e, 'faq')}
                  className="text-[#E3EF26] hover:underline transition-colors font-bold cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>Enterprise FAQ &amp; Governance</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation & Action (4 cols) */}
          <div className="md:col-span-4 text-left">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#E3EF26] font-extrabold mb-5">
              Get Started
            </h4>
            <p className="text-sm text-[#E2FBCE]/75 mb-6 font-mono leading-relaxed">
              Book a strategic feasibility call or benchmark your organizational readiness.
            </p>
            <div className="space-y-3.5">
              <button
                onClick={onBookCall}
                className="w-full py-4 px-6 bg-[#E3EF26] hover:bg-[#d2de1e] text-[#06231D] font-mono text-xs uppercase tracking-wider font-extrabold rounded-full transition-transform hover:scale-102 text-center cursor-pointer shadow-lg shadow-[#E3EF26]/15 flex items-center justify-center gap-2"
              >
                <span>Book an AI Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => handleLinkClick(e, 'faq')}
                className="w-full py-4 px-6 block border border-[#076653]/60 hover:border-[#E3EF26] text-[#FFFDEE] hover:text-[#E3EF26] font-mono text-xs uppercase tracking-wider font-bold rounded-full transition-colors text-center cursor-pointer"
              >
                Explore Enterprise FAQ
              </button>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Bottom Strip */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-[#E2FBCE]/60">
          <p className="text-center md:text-left text-xs">
            Opening a NAIR.AI enterprise engagement signals that you accept our{' '}
            <a href="#privacy-notice" className="text-[#FFFDEE] underline underline-offset-3 hover:text-[#E3EF26]">
              Privacy Notice
            </a>{' '}
            and{' '}
            <a href="#service-contract" className="text-[#FFFDEE] underline underline-offset-3 hover:text-[#E3EF26]">
              Service Contract
            </a>
            .
          </p>

          <div className="flex items-center gap-6 text-xs">
            <span>© {new Date().getFullYear()} NAIR.AI Inc. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-[#0C342C] border border-[#076653]/40 hover:border-[#E3EF26] text-[#FFFDEE] hover:text-[#E3EF26] transition-all cursor-pointer hover:scale-105"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
