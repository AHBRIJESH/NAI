import React from 'react';
import { Bot, ShieldCheck, Zap, Layers, CheckCircle2 } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const TeamSplitSection: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'Dedicated Systems Architecture Pods',
      desc: 'Principal AI architects, distributed systems engineers, and infrastructure leads deployed directly into your engineering workflows.',
    },
    {
      icon: Layers,
      title: 'End-to-End Sovereign Runtime',
      desc: 'Full-stack implementation spanning fine-tuned open weights, in-memory vector indexing, deterministic state machines, and private cluster orchestration.',
    },
    {
      icon: ShieldCheck,
      title: 'Cryptographic Isolation & Zero Data Persistence',
      desc: 'Air-gapped VPC and on-prem execution ensuring client proprietary data and weights never leak into public foundation models.',
    },
    {
      icon: Zap,
      title: 'Pragmatic 14-Day Sprint Validation',
      desc: 'Production-ready proof-of-concept pipelines running live against your proprietary enterprise telemetry within two weeks—guaranteed.',
    },
  ];

  return (
    <section className="py-14 sm:py-20 md:py-32 bg-white text-[#0A192F] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Headline and Feature List (6 cols) */}
          <div className="lg:col-span-6">
            <ScrollReveal y={28} duration={0.6}>

              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A192F] mb-6 sm:mb-8 leading-tight">
                Architected by Principal Engineers.{' '}
                <span className="text-[#1D4ED8]">Delivered With Zero Bloat.</span>
              </h2>
            </ScrollReveal>

            <StaggerContainer stagger={0.09} delay={0.1} className="space-y-4 sm:space-y-6">
              {features.map((feature, idx) => {
                const IconComp = feature.icon;
                return (
                  <StaggerItem key={idx} y={20}>
                    <div className="flex items-start gap-3 sm:gap-4 group">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 group-hover:bg-[#1D4ED8] text-[#1D4ED8] group-hover:text-white border border-blue-200 transition-colors flex items-center justify-center shrink-0 mt-1">
                        <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-base sm:text-lg text-[#0A192F] mb-0.5 sm:mb-1 group-hover:text-[#1D4ED8] transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                <img
                  src="/images/team_collaboration.jpg"
                  alt="NAIR.AI Engineering Team"
                  className="w-full h-[260px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Overlay Badge */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-500 font-bold block">
                      SYSTEMS ARCHITECTURE GUILD //
                    </span>
                    <span className="font-display font-extrabold text-xs sm:text-base text-[#0A192F]">
                      Senior Distributed AI Systems &amp; MLOps Architects
                    </span>
                  </div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#DC2626] animate-pulse shrink-0 ml-2 sm:ml-3" />
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
