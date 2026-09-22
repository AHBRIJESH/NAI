import React from 'react';
import { Bot, ShieldCheck, Zap, Layers, CheckCircle2 } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const TeamSplitSection: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'Dedicated Engineering Squads',
      desc: 'Senior AI architects, data engineers, and infrastructure leads working as an integrated extension of your team.',
    },
    {
      icon: Layers,
      title: 'Full-Stack AI Architecture',
      desc: 'End-to-end implementation covering model selection, vector retrieval, orchestration, and custom UI.',
    },
    {
      icon: ShieldCheck,
      title: 'Zero Data Retention & Sovereign Security',
      desc: 'Strict air-gapped VPC deployments ensuring proprietary data is never persisted or used for model training.',
    },
    {
      icon: Zap,
      title: 'Rapid Sprint Prototyping',
      desc: 'Working proof-of-concepts delivered in 14 days, validated with real organizational data.',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white text-[#0A192F] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline and Feature List (6 cols) */}
          <div className="lg:col-span-6">
            <ScrollReveal y={28} duration={0.6}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full font-mono text-xs tracking-[0.2em] uppercase font-bold bg-blue-50 text-[#1D4ED8] border border-blue-200 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                <span>COLLABORATIVE INTELLIGENCE</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A192F] mb-8 leading-tight">
                Smart AI Solutions with an{' '}
                <span className="text-[#1D4ED8]">Even Smarter AI Team.</span>
              </h2>
            </ScrollReveal>

            <StaggerContainer stagger={0.09} delay={0.1} className="space-y-6">
              {features.map((feature, idx) => {
                const IconComp = feature.icon;
                return (
                  <StaggerItem key={idx} y={20}>
                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-[#1D4ED8] text-[#1D4ED8] group-hover:text-white border border-blue-200 transition-colors flex items-center justify-center shrink-0 mt-1">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg text-[#0A192F] mb-1 group-hover:text-[#1D4ED8] transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          {/* Right Column: Photography (6 cols) */}
          <div className="lg:col-span-6">
            <ScrollReveal delay={0.15} y={32} duration={0.7}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                <img
                  src="/images/team_collaboration.jpg"
                  alt="NAIR.AI Engineering Team"
                  className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 font-bold block">
                      TEAM VELOCITY //
                    </span>
                    <span className="font-display font-extrabold text-sm sm:text-base text-[#0A192F]">
                      Top 1% Senior AI Engineers &amp; MLOps Leads
                    </span>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-[#DC2626] animate-pulse shrink-0 ml-3" />
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamSplitSection;
