import React from 'react';
import { ArrowUp, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import type { PageRoute } from './Navbar';

interface GradientFooterProps {
  onBookCall: () => void;
  onNavigate: (page: PageRoute) => void;
  onOpenAssessment?: () => void;
}

export const GradientFooter: React.FC<GradientFooterProps> = ({
  onBookCall,
  onNavigate,
  onOpenAssessment,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navColumns = [
    {
      title: 'PRODUCTS & SERVICES',
      links: [
        { name: 'All Products & Services', page: 'services' as PageRoute },
        { name: 'NAIR Chat™ Assistant', page: 'services' as PageRoute },
        { name: 'NAIR Docs™ Extraction', page: 'services' as PageRoute },
        { name: 'Custom Agentic AI Swarms', page: 'services' as PageRoute },
      ],
    },
    {
      title: 'COMPANY',
      links: [
        { name: 'About Us', page: 'about' as PageRoute },
        { name: 'Global Presence (USA & India)', page: 'about' as PageRoute },
        { name: 'Case Studies', page: 'case-studies' as PageRoute },
        { name: 'Contact Our Architects', page: 'contact' as PageRoute },
      ],
    },
    {
      title: 'GOVERNANCE & TRUST',
      links: [
        { name: 'Zero Data Retention Policy', page: 'about' as PageRoute },
        { name: 'SOC2 & HIPAA Alignment', page: 'about' as PageRoute },
        { name: 'Air-Gapped Private VPC', page: 'services' as PageRoute },
        { name: '100% Client Code Ownership', page: 'about' as PageRoute },
      ],
    },
    {
      title: 'RESOURCES',
      links: [
        { name: 'Enterprise FAQ Knowledge Base', page: 'faq' as PageRoute },
        { name: 'Client Success Case Studies', page: 'case-studies' as PageRoute },
        { name: 'Interactive ROI Diagnostic', action: 'assessment' },
        { name: 'Schedule Technical Briefing', action: 'book' },
      ],
    },
  ];

  return (
    <footer className="relative bg-gradient-to-r from-[#071326] via-[#0D254C] to-[#1E3A8A] text-white overflow-hidden border-t border-blue-900/50">
      {/* Subtle Ambient Red Glow Accent */}
      <div className="absolute -bottom-24 right-1/4 w-[500px] h-[300px] rounded-full bg-[#DC2626]/10 blur-[130px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-12 relative z-10">
        <ScrollReveal y={24} duration={0.6}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
            
            {/* Brand Column (4 cols) */}
            <div className="lg:col-span-4 text-left">
              <div
                onClick={() => onNavigate('home')}
                className="flex items-center gap-3 mb-6 select-none cursor-pointer group inline-flex"
              >
                <img
                  src="/images/logo.png"
                  alt="NAIR.AI Logo"
                  className="h-10 w-auto object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-105"
                />
                <span className="font-display font-black text-2xl tracking-tight text-white">
                  NAIR<span className="text-[#DC2626]">.AI</span>
                </span>
              </div>

              <p className="text-sm sm:text-base text-blue-100/80 leading-relaxed font-normal mb-8 max-w-sm">
                Transforming small and mid-size businesses with intelligent, production-grade AI solutions built for the future.
              </p>

              <div className="space-y-2 text-xs font-mono text-blue-200/70">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
                  <span>Zero Data Retention Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                  <span>SOC2 Type II Compliance Aligned</span>
                </div>
              </div>
            </div>

            {/* Nav Links Columns (8 cols) */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
              {navColumns.map((col, idx) => (
                <div key={idx}>
                  <h4 className="font-mono text-xs uppercase tracking-[0.2em] font-extrabold text-white mb-5">
                    {col.title}
                  </h4>
                  <ul className="space-y-3 text-xs sm:text-sm text-blue-100/75">
                    {col.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <button
                          onClick={() => {
                            if (link.page) {
                              onNavigate(link.page);
                            } else if (link.action === 'book') {
                              onBookCall();
                            } else if (link.action === 'assessment' && onOpenAssessment) {
                              onOpenAssessment();
                            }
                          }}
                          className="hover:text-white transition-colors cursor-pointer text-left"
                        >
                          {link.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </ScrollReveal>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-blue-200/60">
          <div>
            &copy; {new Date().getFullYear()} Nair Corporation. All rights reserved. Intelligence. Precision. Results.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
            <button
              onClick={() => onNavigate('faq')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              FAQ
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white hover:text-blue-300 transition-colors cursor-pointer ml-2 font-bold"
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
