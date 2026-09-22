import React from 'react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const LogoTrustBar: React.FC = () => {
  const partners = [
    { name: 'CARMAX', sub: 'ENTERPRISE RETAIL' },
    { name: 'TWIX', sub: 'CONFECTIONERY GLOBAL' },
    { name: 'BAKER TILLY', sub: 'AUDIT & ADVISORY' },
    { name: 'ICON HEALTH', sub: 'MEDICAL INTELLIGENCE' },
    { name: 'NEXUS CLOUD', sub: 'INFRASTRUCTURE' },
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <ScrollReveal y={20} duration={0.5}>
          <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-slate-600 font-bold mb-8">
            TRUSTED BY INDUSTRY LEADERS
          </p>
        </ScrollReveal>

        <StaggerContainer stagger={0.08} className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-85 hover:opacity-100 transition-opacity">
          {partners.map((partner, index) => (
            <StaggerItem key={index} y={20}>
              <div
                className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-slate-50 transition-colors group cursor-default"
              >
                <span className="font-display font-black text-xl md:text-2xl tracking-tight text-[#0A192F] group-hover:text-[#1D4ED8] transition-colors">
                  {partner.name}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500 font-semibold mt-0.5">
                  {partner.sub}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default LogoTrustBar;
