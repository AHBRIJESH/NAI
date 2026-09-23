import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Globe2,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Users2,
  Cpu,
  Zap,
  Building2,
  ChevronLeft,
  ChevronRight,
  Compass,
  Award,
  Lock,
} from 'lucide-react';
import { motion } from 'motion/react';
import type { PageRoute } from './Navbar';
import { SubPageMotionBackground } from './SubPageMotionBackground';
import { useHorizontalWheelScroll } from './useHorizontalWheelScroll';
import { MotionDotCanvas } from './MotionDotCanvas';

interface AboutPageProps {
  onBackToHome: () => void;
  onBookCall: (service?: string) => void;
  onOpenAssessment: () => void;
  onNavigate: (page: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onBackToHome,
  onBookCall,
  onOpenAssessment,
  onNavigate,
}) => {
  const { ref: scrollContainerRef, scrollLeft, scrollRight } = useHorizontalWheelScroll<HTMLDivElement>();

  const manifestoPillars = [
    {
      step: '01',
      title: 'Determinism Over Speculative Hype',
      desc: 'Consumer AI celebrates creative unpredictability. Enterprise software demands mathematical certainty. We build deterministic multi-agent swarms with strict Pydantic schemas, hallucination firewalls, and verified audit trails.',
      icon: Cpu,
      color: '#1D4ED8',
    },
    {
      step: '02',
      title: 'Sovereign IP & Air-Gapped Privacy',
      desc: 'Your proprietary corporate intelligence must never train third-party public models or sit in shared consumer databases. We deploy private VPC and on-premise AI models with cryptographic access control and zero retention.',
      icon: Lock,
      color: '#DC2626',
    },
    {
      step: '03',
      title: 'Pragmatic 30-Day Velocity',
      desc: 'We reject multi-million-dollar slideware and endless theoretical roadmaps. Every engagement ships working, tested, production-grade AI code to your team within 30 days, backed by measurable SLAs.',
      icon: Zap,
      color: '#0284C7',
    },
    {
      step: '04',
      title: 'Amplified Human-in-the-Loop',
      desc: 'The greatest AI value comes from amplifying expert doctors, financial analysts, and corporate attorneys — eliminating administrative drudgery while keeping high-judgment decisions in human hands.',
      icon: Users2,
      color: '#1D4ED8',
    },
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Inception in Silicon Valley',
      desc: 'Founded by enterprise systems veterans to bridge the chasm between raw LLM research and robust enterprise production environments.',
      metric: 'Seed Phase',
    },
    {
      year: '2024',
      title: 'Bangalore Global Engineering Hub',
      desc: 'Established our 24/7 technical deployment center in Bangalore, creating a continuous follow-the-sun engineering delivery pipeline.',
      metric: '24/7 Swarms',
    },
    {
      year: '2025',
      title: 'NAIR Core Platforms Release',
      desc: 'Launched NAIR Chat™, NAIR Docs™, NAIR Insight™, and NAIR Guard™ across healthcare, banking, and global manufacturing clients.',
      metric: '5 Sovereign Kernels',
    },
    {
      year: '2026',
      title: '$14.2M+ Client Impact',
      desc: 'Scaling enterprise agentic swarms processing millions of daily transactions with zero data retention and SOC 2 Type II assurance.',
      metric: 'Enterprise Scale',
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0A192F] selection:bg-[#1D4ED8] selection:text-white pt-24 pb-24 overflow-hidden">
      {/* Light Colored Motion Background with Subtle Hero Sculpture & Ambient Orbs */}
      <SubPageMotionBackground />

      {/* Top Breadcrumb Navigation */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-6 pb-4">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider font-extrabold text-[#1D4ED8] hover:text-[#0A192F] transition-colors group cursor-pointer"
        >
          <div className="w-7 h-7 rounded-full bg-blue-50 group-hover:bg-[#1D4ED8] text-[#1D4ED8] group-hover:text-white border border-blue-200 flex items-center justify-center transition-all">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          </div>
          <span>Back to Home Overview</span>
        </button>
      </div>

      {/* BESPOKE HERO: Dual-Continent Global Radar & Strategic Engineering DNA */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20">
        <div className="text-left mb-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#1D4ED8] animate-pulse" />
              <span className="font-mono text-[11px] font-bold tracking-wider text-[#1D4ED8] uppercase">
                Global Engineering Architecture
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A192F] mb-6 leading-[1.04]">
              Silicon Valley Vision.{' '}
              <span className="text-[#1D4ED8]">Global Engineering Scale.</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-600 max-w-3xl font-normal leading-relaxed mb-8">
              Nair Corporation pairs high-level architectural strategy in the San Francisco Bay Area with 24/7 deployment and fine-tuning engineering hubs in Bangalore, India. We deliver sovereign, battle-tested AI solutions tailored to modern enterprise workflows.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onBookCall('About Us - Consultation')}
                className="px-8 py-3.5 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full transition-all shadow-xl shadow-red-600/25 hover:scale-102 flex items-center gap-2.5 cursor-pointer"
              >
                <span>Book an AI strategy call</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="px-7 py-3.5 bg-white hover:bg-slate-100 text-[#0A192F] border border-slate-300 font-mono text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full transition-all shadow-xs cursor-pointer"
              >
                <span>Explore Services</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* DUAL-CONTINENT OPERATIONAL TOPOLOGY BOARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* Hub 1: Silicon Valley */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-xl text-[#0A192F]">
                    Silicon Valley, California
                  </h3>
                  <span className="font-mono text-xs text-slate-500">
                    San Francisco Bay Area · United States
                  </span>
                </div>
              </div>
              <span className="font-mono text-[11px] font-bold px-3 py-1 rounded-full bg-blue-50 text-[#1D4ED8]">
                STRATEGY HQ
              </span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
              Executive architectural leadership, regulatory compliance scoping, enterprise governance frameworks, and direct C-suite technology advisement.
            </p>

            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-3 rounded-xl bg-slate-50 flex items-center justify-between">
                <span className="text-slate-600">Focus:</span>
                <span className="font-bold text-[#1D4ED8]">Enterprise Systems Architecture</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 flex items-center justify-between">
                <span className="text-slate-600">Compliance:</span>
                <span className="font-bold text-[#0A192F]">HIPAA · SOC 2 · FINRA Standards</span>
              </div>
            </div>
          </div>

          {/* Hub 2: Bangalore */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-red-50 text-[#DC2626] flex items-center justify-center font-bold">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-xl text-[#0A192F]">
                    Bangalore, Karnataka
                  </h3>
                  <span className="font-mono text-xs text-slate-500">
                    Tech Corridor · India
                  </span>
                </div>
              </div>
              <span className="font-mono text-[11px] font-bold px-3 py-1 rounded-full bg-red-50 text-[#DC2626]">
                24/7 DELIVERY
              </span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
              Continuous multi-agent swarm development, high-throughput data engineering, private model fine-tuning, and 24/7 SLA infrastructure monitoring.
            </p>

            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-3 rounded-xl bg-slate-50 flex items-center justify-between">
                <span className="text-slate-600">Focus:</span>
                <span className="font-bold text-[#DC2626]">Model Tuning &amp; Agent Mesh</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 flex items-center justify-between">
                <span className="text-slate-600">Execution:</span>
                <span className="font-bold text-[#0A192F]">Continuous Follow-the-Sun Swarms</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HORIZONTAL SCROLL SECTION: Milestones & Evolution Deck */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div className="text-left">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
              Engineering Milestones &amp; Trajectory
            </h2>
            <p className="text-sm text-slate-500 font-normal mt-1">
              Scroll with mouse wheel or drag horizontally to view our operational timeline.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-slate-500 mr-2 hidden sm:inline-block">
              Wheel / Drag Scroll
            </span>
            <button
              type="button"
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors shadow-xs cursor-pointer active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={scrollRight}
              className="w-10 h-10 rounded-full bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors shadow-xs cursor-pointer active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* The Horizontal Scroll Track */}
        <div
          ref={scrollContainerRef}
          data-lenis-prevent="true"
          className="flex gap-6 overflow-x-auto pb-6 pt-2 select-none scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="w-[300px] sm:w-[350px] shrink-0 p-7 rounded-3xl bg-white border border-slate-200/90 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-black text-3xl text-[#1D4ED8]">
                    {m.year}
                  </span>
                  <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#1D4ED8]">
                    {m.metric}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-[#0A192F] mb-3 leading-snug">
                  {m.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  {m.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-slate-400">
                <span>Enterprise Proven</span>
                <CheckCircle2 className="w-4 h-4 text-[#1D4ED8]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CORE ENGINEERING MANIFESTO: 4 Pillars */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-24">
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1D4ED8] font-mono text-xs font-extrabold uppercase mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Foundational Principles</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0A192F] leading-tight">
            The NAIR Engineering Manifesto.
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mt-3">
            How we write software, guard intellectual property, and measure customer success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {manifestoPillars.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-white shadow-xs"
                    style={{ backgroundColor: p.color }}
                  >
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="font-mono font-black text-2xl text-slate-300">
                    {p.step}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-2xl text-[#0A192F]">
                  {p.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* BOTTOM CALL TO ACTION: Light Blue Theme with Motion Dot Deflection */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-20">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#F0F7FF] via-[#E0F2FE] to-[#EFF6FF] border border-blue-200/90 text-[#0A192F] text-center shadow-xl relative overflow-hidden">
          {/* Motion Dot Deflection Effect */}
          <MotionDotCanvas dotCount={40} deflectionRadius={120} />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A192F]">
              Partner With Engineers Who Ship.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Book a strategy call to explore how our dual-continent architecture team can accelerate your AI roadmap with deterministic precision.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onBookCall('About Us - Leadership Call')}
                className="px-8 py-3.5 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full transition-all shadow-xl shadow-red-600/30 hover:scale-102 flex items-center gap-2 cursor-pointer"
              >
                <span>Book an AI strategy call</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
              <button
                type="button"
                onClick={onOpenAssessment}
                className="px-7 py-3.5 bg-white hover:bg-slate-50 text-[#0A192F] border border-slate-300 font-mono text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full transition-all shadow-xs cursor-pointer"
              >
                <span>Take Feasibility Diagnostic</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
