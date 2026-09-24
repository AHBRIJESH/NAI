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
  Compass,
  Award,
  Lock,
} from 'lucide-react';
import { motion } from 'motion/react';
import type { PageRoute } from './Navbar';
import { SubPageMotionBackground } from './SubPageMotionBackground';
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

      {/* HERO: Active Operations Across the United States & India */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20">
        <div className="text-left mb-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1D4ED8] mb-3 block">
              Global Operations &amp; Presence
            </span>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A192F] mb-6 leading-[1.04]">
              Operating Across <span className="text-[#1D4ED8]">India &amp; the United States</span>.
            </h1>

            <p className="text-base sm:text-xl text-slate-600 max-w-3xl font-normal leading-relaxed mb-8">
              NAIR.AI actively operates across both India and the United States, seamlessly uniting strategic client consultation and compliance leadership with world-class engineering execution.
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

        {/* ACTIVE US & INDIA OPERATIONS BOARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-8">
          {/* Operations Hub 1: United States */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center font-bold">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-2xl text-[#0A192F]">
                      United States Operations
                    </h3>
                    <span className="font-mono text-xs text-slate-500">
                      Strategy, Client Advisory &amp; Architecture
                    </span>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-[#1D4ED8]">
                  US ACTIVE
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                Direct client engagements, executive discovery workshops, compliance alignment (HIPAA, SOC 2, FINRA), and enterprise architecture consulting for organizations across North America.
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 flex items-center justify-between">
                  <span className="text-slate-600">Client Strategy:</span>
                  <span className="font-bold text-[#1D4ED8]">Executive Discovery &amp; Advisory</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 flex items-center justify-between">
                  <span className="text-slate-600">Compliance Scoping:</span>
                  <span className="font-bold text-[#0A192F]">SOC 2 · HIPAA · Private Cloud</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 flex items-center justify-between">
                  <span className="text-slate-600">Timezone Coverage:</span>
                  <span className="font-bold text-slate-800">EST · CST · PST Business Hours</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-slate-500 mt-6">
              <span>Dedicated Enterprise Success</span>
              <CheckCircle2 className="w-4 h-4 text-[#1D4ED8]" />
            </div>
          </div>

          {/* Operations Hub 2: India */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#DC2626] flex items-center justify-center font-bold">
                    <Globe2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-2xl text-[#0A192F]">
                      India Operations
                    </h3>
                    <span className="font-mono text-xs text-slate-500">
                      Engineering Scale &amp; 24/7 Deployment Swarms
                    </span>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-red-50 text-[#DC2626]">
                  INDIA ACTIVE
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                Advanced AI software engineering, multi-agent pipeline development, high-throughput model fine-tuning, and 24/7 operational infrastructure monitoring.
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 flex items-center justify-between">
                  <span className="text-slate-600">Core Engineering:</span>
                  <span className="font-bold text-[#DC2626]">Multi-Agent Pipeline Synthesis</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 flex items-center justify-between">
                  <span className="text-slate-600">Model Tuning:</span>
                  <span className="font-bold text-[#0A192F]">Sovereign Llama &amp; DeepSeek Tuning</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 flex items-center justify-between">
                  <span className="text-slate-600">Timezone Coverage:</span>
                  <span className="font-bold text-slate-800">IST · 24/7 Continuous Delivery</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-slate-500 mt-6">
              <span>Continuous Sprint Velocity</span>
              <CheckCircle2 className="w-4 h-4 text-[#DC2626]" />
            </div>
          </div>
        </div>

        {/* Cross-Border Delivery Model Banner */}
        <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200/80 text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-display font-bold text-base text-[#0A192F]">
              Follow-the-Sun Continuous Delivery Model
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Clients consult directly during US business hours while engineering pipelines proceed around the clock in India—accelerating production deployments into rapid 3–4 week sprints.
            </p>
          </div>
          <span className="font-mono text-xs font-extrabold text-[#1D4ED8] bg-white px-3.5 py-1.5 rounded-full border border-blue-200 shrink-0">
            3–4 WEEK VELOCITY
          </span>
        </div>
      </section>

      {/* CORE ENGINEERING MANIFESTO: 4 Pillars */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-24">
        <div className="text-left mb-12">
          <span className="font-mono text-xs font-extrabold uppercase tracking-wider text-[#1D4ED8] mb-2 block">
            Foundational Principles
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0A192F] leading-tight">
            The NAIR.AI Engineering Manifesto.
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
