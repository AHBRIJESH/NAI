import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  HeartPulse,
  Landmark,
  Scale,
  ShieldCheck,
  Zap,
  CheckCircle2,
  FileText,
  Activity,
  Layers,
  Lock,
  ChevronLeft,
  ChevronRight,
  Cpu,
} from 'lucide-react';
import { motion } from 'motion/react';
import type { PageRoute } from './Navbar';
import { SubPageMotionBackground } from './SubPageMotionBackground';
import { useHorizontalWheelScroll } from './useHorizontalWheelScroll';

interface IndustriesPageProps {
  onBackToHome: () => void;
  onBookCall: (service?: string) => void;
  onOpenAssessment: () => void;
  onNavigate: (page: PageRoute) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({
  onBackToHome,
  onBookCall,
  onOpenAssessment,
}) => {
  const scrollContainerRef = useHorizontalWheelScroll<HTMLDivElement>();

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const horizontalCards = [
    {
      sector: 'Healthcare',
      title: 'EHR Data & Prior Authorization',
      metric: '91% Faster Intake',
      sla: 'HIPAA Aligned',
      desc: 'Autonomous parsing of unstructured clinical notes and insurance records into FHIR-compliant payloads with zero PHI persistence.',
      color: '#1D4ED8',
      icon: HeartPulse,
    },
    {
      sector: 'Finance',
      title: 'Real-Time Fraud & Anomaly Defense',
      metric: '< 15ms Latency',
      sla: 'SOC2 Type II',
      desc: 'Stream-processing neural scoring for millions of daily transactions, slashing false positives without human bottlenecking.',
      color: '#DC2626',
      icon: Landmark,
    },
    {
      sector: 'Legal',
      title: 'Contract Redlining & Clause Audit',
      metric: '91% Time Saved',
      sla: 'Zero-Retention IP',
      desc: 'Deterministic extraction of non-standard covenants, risk indemnities, and cross-document reconciliation in private VPCs.',
      color: '#0284C7',
      icon: Scale,
    },
    {
      sector: 'Healthcare',
      title: 'Autonomous Clinical Triage',
      metric: '650+ hrs/mo Saved',
      sla: 'Doctor-in-the-Loop',
      desc: '24/7 conversational symptom evaluation, urgent-care queue routing, and electronic prescription verification workflows.',
      color: '#1D4ED8',
      icon: Activity,
    },
    {
      sector: 'Finance',
      title: 'Automated KYC & Onboarding Mesh',
      metric: '84% Less Friction',
      sla: 'FINRA / SEC Trace',
      desc: 'Identity verification, sanctions screening, and corporate chart extraction with auditable explainability logs.',
      color: '#DC2626',
      icon: ShieldCheck,
    },
    {
      sector: 'Legal',
      title: 'M&A Diligence Synthesizer',
      metric: '99.8% Recall',
      sla: 'Air-Gapped Vault',
      desc: 'Deep multi-file scanning across 5,000+ data-room files to flag change-of-control triggers and hidden liabilities in minutes.',
      color: '#0284C7',
      icon: FileText,
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0A192F] selection:bg-[#1D4ED8] selection:text-white pt-24 pb-24 overflow-hidden">
      {/* Light Colored Motion Background with Subtle Hero Sculpture & Ambient Orbs */}
      <SubPageMotionBackground />

      {/* Top Breadcrumb Navigation */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-6 pb-6">
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

      {/* Wide Hero Header: Full Left & Right Space Utilization */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (7 cols): Full breadth content */}
          <div className="lg:col-span-7 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A192F] mb-6 leading-[1.05]">
                Sovereign AI Built for{' '}
                <span className="text-[#1D4ED8]">High-Stakes Sectors.</span>
              </h1>

              <p className="text-base sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed mb-8">
                Regulated industries cannot rely on generic wrappers or public consumer models. We engineer deterministic, sovereign AI architectures hardened around your strict compliance requirements, air-gapped infrastructure, and mission-critical workflows.
              </p>

              {/* Direct Call to Action & Jump Links */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <button
                  onClick={() => onBookCall('Industries Strategic Briefing')}
                  className="px-8 py-3.5 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full transition-all shadow-xl shadow-red-600/25 hover:scale-102 flex items-center gap-2.5 cursor-pointer"
                >
                  <span>Book an AI strategy call</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                <button
                  onClick={onOpenAssessment}
                  className="px-7 py-3.5 bg-white hover:bg-slate-100 text-[#0A192F] border border-slate-300 font-mono text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full transition-all shadow-xs cursor-pointer"
                >
                  <span>Readiness Diagnostic</span>
                </button>
              </div>

              {/* Quick Sector Anchors - EXACT ORDER: Healthcare, Finance, Legal */}
              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-200/80">
                <span className="font-mono text-xs text-slate-400 font-bold uppercase tracking-wider">
                  Jump to Sector:
                </span>
                <a
                  href="#healthcare"
                  className="px-4 py-2 rounded-full bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-xs font-mono font-bold text-[#0A192F] hover:text-[#1D4ED8] shadow-xs transition-all flex items-center gap-2"
                >
                  <HeartPulse className="w-3.5 h-3.5 text-[#1D4ED8]" />
                  <span>1. Healthcare</span>
                </a>
                <a
                  href="#finance"
                  className="px-4 py-2 rounded-full bg-white hover:bg-red-50 border border-slate-200 hover:border-red-300 text-xs font-mono font-bold text-[#0A192F] hover:text-[#DC2626] shadow-xs transition-all flex items-center gap-2"
                >
                  <Landmark className="w-3.5 h-3.5 text-[#DC2626]" />
                  <span>2. Finance</span>
                </a>
                <a
                  href="#legal"
                  className="px-4 py-2 rounded-full bg-white hover:bg-sky-50 border border-slate-200 hover:border-sky-300 text-xs font-mono font-bold text-[#0A192F] hover:text-[#0284C7] shadow-xs transition-all flex items-center gap-2"
                >
                  <Scale className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>3. Legal</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column (5 cols): Visual Telemetry & Security Board */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="p-7 sm:p-8 rounded-3xl bg-white/95 border border-slate-200/90 shadow-2xl backdrop-blur-md text-left space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center font-bold">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-display font-extrabold text-base text-[#0A192F] block leading-tight">
                      Compliance Guardrails
                    </span>
                    <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                      Sovereign Execution
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#1D4ED8] px-3 py-1 rounded-full bg-blue-50 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] animate-pulse" />
                  <span>HARDENED</span>
                </div>
              </div>

              <div className="space-y-3.5 font-mono text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <span className="text-slate-600 font-semibold">Zero Data Retention</span>
                  <span className="font-bold text-[#1D4ED8]">100% Ephemeral</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <span className="text-slate-600 font-semibold">Healthcare Compliance</span>
                  <span className="font-bold text-[#1D4ED8]">HIPAA BAA Aligned</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <span className="text-slate-600 font-semibold">Financial Audit Trail</span>
                  <span className="font-bold text-[#DC2626]">SOC 2 Type II</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <span className="text-slate-600 font-semibold">Legal IP Isolation</span>
                  <span className="font-bold text-[#0284C7]">Air-Gapped VPC</span>
                </div>
              </div>

              <div className="pt-2 text-xs font-mono text-slate-500 flex items-center justify-between">
                <span>Infrastructure: AWS · Azure · GCP</span>
                <ShieldCheck className="w-4 h-4 text-[#1D4ED8]" />
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* HORIZONTAL SCROLL SECTION: Mouse Wheel Scroll Enabled */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
              Cross-Sector Architecture Modules
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-slate-500 mr-2 hidden sm:inline-block">
              Scroll Mouse Wheel to Slide
            </span>
            <button
              onClick={() => handleScroll('left')}
              className="w-10 h-10 rounded-full bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors shadow-xs cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-10 h-10 rounded-full bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors shadow-xs cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* The Horizontal Scroll Track - Intercepts Mouse Wheel to Scroll Horizontally */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {horizontalCards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="w-[320px] sm:w-[370px] shrink-0 snap-start rounded-3xl bg-white border border-slate-200/90 p-7 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group text-left"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className="px-3 py-1 rounded-full font-mono text-[10px] uppercase font-bold tracking-wider"
                      style={{ backgroundColor: `${card.color}15`, color: card.color }}
                    >
                      {card.sector}
                    </span>
                    <span className="font-mono text-[10px] text-slate-600 font-bold px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200">
                      {card.sla}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-6 h-6" style={{ color: card.color }} />
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#0A192F] mb-3 leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <div className="font-mono text-sm font-extrabold text-[#0A192F]">
                    {card.metric}
                  </div>
                  <button
                    onClick={() => onBookCall(`${card.sector} - ${card.title}`)}
                    className="font-mono text-xs font-bold text-[#1D4ED8] hover:text-[#DC2626] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Deploy Module</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SUB-SECTIONS IN STRICT ORDER: 1. Healthcare, 2. Finance, 3. Legal */}

      {/* 1. HEALTHCARE SUB-SECTION */}
      <section id="healthcare" className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-24 scroll-mt-28">
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl p-8 sm:p-12 lg:p-16 relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header (No Header Pill) */}
          <div className="max-w-3xl mb-10 relative z-10">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A192F] mb-4">
              Healthcare &amp; Life Sciences
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Clinical burnout, disconnected electronic health records (EHR), and manual prior authorization bottlenecks cost hospitals billions. We engineer HIPAA-compliant agentic pipelines that streamline administration while maintaining uncompromised clinical safety.
            </p>
          </div>

          {/* 3 Pillars of Healthcare AI */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative z-10">
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-blue-100/80 text-[#1D4ED8] flex items-center justify-center mb-4">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#0A192F] mb-2">
                Patient Triage &amp; Intake
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Intelligent conversational triage that safely evaluates patient symptom severity, collects demographic history, and pre-populates EHR encounter forms.
              </p>
              <div className="mt-5 pt-3 border-t border-slate-200/60 font-mono text-xs font-bold text-[#1D4ED8]">
                88% reduction in intake wait times
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-blue-100/80 text-[#1D4ED8] flex items-center justify-center mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#0A192F] mb-2">
                Prior Authorization Pipeline
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Deterministic extraction of clinical criteria against insurer payor guidelines, drafting defensible submission packets in seconds instead of days.
              </p>
              <div className="mt-5 pt-3 border-t border-slate-200/60 font-mono text-xs font-bold text-[#1D4ED8]">
                72% faster approvals; zero coding backlog
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-red-100/80 text-[#DC2626] flex items-center justify-center mb-4">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#0A192F] mb-2">
                Zero-Retention PHI Guardrail
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                In-memory volatile prompt sanitization that strips 18 HIPAA identifiers before model inference, guaranteeing zero patient data persistence.
              </p>
              <div className="mt-5 pt-3 border-t border-slate-200/60 font-mono text-xs font-bold text-[#DC2626]">
                100% HIPAA compliance trace verification
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            <div className="flex items-center gap-3 text-xs font-mono text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-[#1D4ED8]" />
              <span>EHR Integrations: Epic, Cerner, AthenaHealth, Allscripts</span>
            </div>
            <button
              onClick={() => onBookCall('Healthcare AI Strategy')}
              className="px-7 py-3 rounded-full bg-[#1D4ED8] hover:bg-blue-700 text-white font-mono text-xs font-extrabold uppercase tracking-wider transition-all shadow-md hover:scale-102 flex items-center gap-2 cursor-pointer"
            >
              <span>Book an AI strategy call</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. FINANCE SUB-SECTION */}
      <section id="finance" className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-24 scroll-mt-28">
        <div className="rounded-3xl bg-[#071326] text-white border border-blue-950 shadow-2xl p-8 sm:p-12 lg:p-16 relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#DC2626]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1D4ED8]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header (No Header Pill) */}
          <div className="max-w-3xl mb-10 relative z-10">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Financial Services &amp; Capital Markets
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Financial institutions operate under razor-thin audit margins and constant regulatory scrutiny. We engineer high-throughput transaction anomaly detection, automated KYC verification, and loan diligence copilots that cut review time from weeks to hours.
            </p>
          </div>

          {/* 3 Pillars of Finance AI */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative z-10">
            <div className="p-7 rounded-2xl bg-[#0A192F] border border-blue-900/60 hover:border-blue-700/80 transition-all">
              <div className="w-11 h-11 rounded-xl bg-red-950/80 text-[#DC2626] border border-red-900/50 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Real-Time Anomaly &amp; Fraud
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Sub-15ms streaming transaction evaluation that identifies novel laundering and fraud patterns, dramatically reducing costly false positive locks.
              </p>
              <div className="mt-5 pt-3 border-t border-blue-900/50 font-mono text-xs font-bold text-[#38BDF8]">
                84% reduction in false-positive alerts
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-[#0A192F] border border-blue-900/60 hover:border-blue-700/80 transition-all">
              <div className="w-11 h-11 rounded-xl bg-blue-950/80 text-[#38BDF8] border border-blue-900/50 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Loan &amp; Deal Diligence Copilot
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Autonomous extraction of commercial loan packages, balance sheets, and debt covenants, highlighting financial risk exceptions with audit citations.
              </p>
              <div className="mt-5 pt-3 border-t border-blue-900/50 font-mono text-xs font-bold text-[#38BDF8]">
                92% faster underwriting packet prep
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-[#0A192F] border border-blue-900/60 hover:border-blue-700/80 transition-all">
              <div className="w-11 h-11 rounded-xl bg-blue-950/80 text-[#38BDF8] border border-blue-900/50 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Continuous Ledger Reconciliation
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Multi-agent reconciliation swarms that cross-verify banking records, ERP entries, and payment gateway logs with cryptographic HMAC traces.
              </p>
              <div className="mt-5 pt-3 border-t border-blue-900/50 font-mono text-xs font-bold text-[#DC2626]">
                100% audit log defensibility; zero manual entry
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-blue-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
              <span>Compliance: SOC2 Type II, FINRA, SEC Rule 17a-4, ISO 27001</span>
            </div>
            <button
              onClick={() => onBookCall('Financial Services AI Strategy')}
              className="px-7 py-3 rounded-full bg-[#DC2626] hover:bg-red-700 text-white font-mono text-xs font-extrabold uppercase tracking-wider transition-all shadow-md hover:scale-102 flex items-center gap-2 cursor-pointer"
            >
              <span>Book an AI strategy call</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. LEGAL SUB-SECTION */}
      <section id="legal" className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-24 scroll-mt-28">
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl p-8 sm:p-12 lg:p-16 relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header (No Header Pill) */}
          <div className="max-w-3xl mb-10 relative z-10">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A192F] mb-4">
              Legal Practice &amp; Corporate Counsel
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Attorneys and corporate legal teams lose thousands of billable hours to contract line-by-line review and boilerplate document drafting. We build private, air-gapped legal AI copilots that accelerate drafting by 91% while preserving strict attorney-client privilege.
            </p>
          </div>

          {/* 3 Pillars of Legal AI */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative z-10">
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-sky-100/80 text-[#0284C7] flex items-center justify-center mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#0A192F] mb-2">
                Contract Intelligence &amp; Redlining
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Deterministic scanning of commercial agreements against playbook standards, auto-flagging risky clauses, ambiguous liabilities, and missing warranties.
              </p>
              <div className="mt-5 pt-3 border-t border-slate-200/60 font-mono text-xs font-bold text-[#0284C7]">
                76% faster contract negotiation cycles
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-sky-100/80 text-[#0284C7] flex items-center justify-center mb-4">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#0A192F] mb-2">
                Demand Letter &amp; Brief Synthesis
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Transforms complex factual records, medical bills, and police reports into comprehensive, citation-backed legal demand letters in under 10 minutes.
              </p>
              <div className="mt-5 pt-3 border-t border-slate-200/60 font-mono text-xs font-bold text-[#0284C7]">
                91% reduction in drafting time (120m &rarr; 10m)
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-blue-100/80 text-[#1D4ED8] flex items-center justify-center mb-4">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#0A192F] mb-2">
                Zero-Retention IP Confidentiality
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Private cloud or on-premise execution guaranteeing that privileged legal briefs and client secrets are never used to train public models.
              </p>
              <div className="mt-5 pt-3 border-t border-slate-200/60 font-mono text-xs font-bold text-[#1D4ED8]">
                100% client code &amp; IP ownership
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            <div className="flex items-center gap-3 text-xs font-mono text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
              <span>Integrations: Clio, NetDocuments, iManage, Relativity</span>
            </div>
            <button
              onClick={() => onBookCall('Legal AI Strategy')}
              className="px-7 py-3 rounded-full bg-[#0284C7] hover:bg-sky-700 text-white font-mono text-xs font-extrabold uppercase tracking-wider transition-all shadow-md hover:scale-102 flex items-center gap-2 cursor-pointer"
            >
              <span>Book an AI strategy call</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </section>

      {/* Strategic Callout Banner */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-left">
        <div className="rounded-3xl bg-gradient-to-br from-[#1D4ED8] via-[#1E40AF] to-[#0A192F] text-white p-10 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
                Evaluate Your Sector Architecture.
              </h2>
              <p className="text-base sm:text-lg text-blue-100/90 font-normal leading-relaxed">
                Discuss your technical compliance boundary, latency needs, and data governance with our senior AI architects.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => onBookCall('Industry Solutions Diagnostic')}
                className="w-full px-8 py-4 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full transition-all shadow-xl shadow-red-600/30 hover:scale-102 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book an AI strategy call</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={onOpenAssessment}
                className="w-full px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-mono text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full transition-all text-center cursor-pointer"
              >
                <span>Readiness Diagnostic</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default IndustriesPage;
