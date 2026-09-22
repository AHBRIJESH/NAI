import React from 'react';
import { ArrowUp, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface GradientFooterProps {
  onBookCall: () => void;
  onNavigate: (page: 'home' | 'faq', sectionId?: string) => void;
}

export const GradientFooter: React.FC<GradientFooterProps> = ({
  onBookCall,
  onNavigate,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navColumns = [
    {
      title: 'SERVICES',
      links: [
        { name: 'Enterprise AI Strategy', id: 'services' },
        { name: 'Multi-Agent Automation', id: 'services' },
        { name: 'Sovereign Private LLMs', id: 'services' },
        { name: 'Rapid Sprint Prototyping', id: 'services' },
      ],
    },
    {
      title: 'SOLUTIONS',
      links: [
        { name: 'Healthcare & Life Sciences', id: 'capabilities' },
        { name: 'Financial Services & Banking', id: 'capabilities' },
        { name: 'Smart Manufacturing & IoT', id: 'capabilities' },
        { name: 'Enterprise Cloud Systems', id: 'capabilities' },
      ],
    },
    {
      title: 'GOVERNANCE',
      links: [
        { name: 'Zero Data Retention Policy', id: 'about' },
        { name: 'SOC2 Type II Controls', id: 'about' },
        { name: 'On-Prem VPC Deployment', id: 'about' },
        { name: 'Audit Trails & Rollback', id: 'about' },
      ],
    },
    {
      title: 'RESOURCES',
      links: [
        { name: 'Frequently Asked Questions', isFaq: true },
        { name: 'Customer Success Stories', id: 'case-studies' },
        { name: 'Technical Whitepapers', id: 'capabilities' },
        { name: 'Book an Architecture Call', action: 'book' },
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
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6 select-none">
                <img
                  src="/images/logo.png"
                  alt="NAIR.AI Logo"
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
                <span className="font-display font-black text-2xl tracking-tight text-white">
                  NAIR<span className="text-[#DC2626]">.AI</span>
                </span>
              </div>

              <p className="text-sm sm:text-base text-blue-100/80 leading-relaxed font-normal mb-8 max-w-sm">
                We architect, build, and deploy production-grade autonomous agent systems and enterprise AI software with guaranteed delivery milestones.
              </p>

              <div className="space-y-2 text-xs font-mono text-blue-200/70">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
                  <span>Zero Data Retention Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4ADE80]" />
                  <span>SOC2 Type II Compliance Aligned</span>
                </div>
              </div>
            </div>

            {/* Nav Links Columns (8 cols) */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
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
                            if (link.isFaq) {
                              onNavigate('faq');
                            } else if (link.action === 'book') {
                              onBookCall();
                            } else if (link.id) {
                              onNavigate('home', link.id);
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
            &copy; {new Date().getFullYear()} NAIR.AI Enterprise Systems Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Security Architecture
            </span>
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
