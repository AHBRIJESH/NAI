import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  FileCheck2,
  Clock,
  CheckCircle2,
  HeartPulse,
  Receipt,
  Users,
  Workflow,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Gauge,
  Cpu,
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

import type { PageRoute } from './Navbar';
import { SubPageMotionBackground } from './SubPageMotionBackground';
import { useHorizontalWheelScroll } from './useHorizontalWheelScroll';

interface CaseStudiesPageProps {
  onBackToHome: () => void;
  onBookCall: (service?: string) => void;
  onOpenAssessment: () => void;
  onNavigate: (page: PageRoute) => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({
  onBackToHome,
  onBookCall,
  onOpenAssessment,
  onNavigate,
}) => {
  const scrollRef = useHorizontalWheelScroll<HTMLDivElement>();

  const handleScroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -360 : 360,
        behavior: 'smooth',
      });
    }
  };

  const benchmarkPills = [
    {
      metric: '88%',
      label: 'Intake Wait Drop',
      sector: 'Healthcare',
      detail: 'Triage AI active 24/7 across clinical hubs',
      color: '#1D4ED8',
    },
    {
      metric: '92%',
      label: 'Cycle Time Cut',
      sector: 'Finance',
      detail: 'NAIR Docs™ ERP invoice reconciliation',
      color: '#DC2626',
    },
    {
      metric: '< 20s',
      label: 'Speed to Lead',
      sector: 'Sales Enablement',
      detail: 'Autonomous calendar qualification swarm',
      color: '#0284C7',
    },
    {
      metric: '$280K+',
      label: 'Annual Saved',
      sector: 'Manufacturing',
      detail: 'ERP restocking prediction & dispatch mesh',
      color: '#DC2626',
    },
    {
      metric: '$3.8M',
      label: 'Compute Recaptured',
      sector: 'Cloud Tech',
      detail: 'Cluster auto-tuning with 0.00ms downtime',
      color: '#1D4ED8',
    },
    {
      metric: '99.8%',
      label: 'Clause Recall',
      sector: 'Corporate Legal',
      detail: 'Zero-retention contract diligence pipeline',
      color: '#0284C7',
    },
  ];

  const caseStudies = [
    {
      id: 'support-chatbot',
      category: 'Healthcare & Patient Services',
      title: 'AI Customer Support Chatbot',
      challenge: 'High volume of customer inquiries causing long wait times, frustrated patients, and administrative staff burnout during peak hours.',
      solution: 'Developed an intelligent conversational AI chatbot to automate patient FAQs, triage symptoms safely, schedule appointments, and coordinate support requests with context-preserved human escalation.',
      metrics: [
        { label: 'Wait Time Reduction', value: '88%' },
        { label: 'Routine Inquiry Triage', value: '24/7' },
        { label: 'Staff Hours Reclaimed', value: '140+ hrs/mo' },
      ],
      tags: ['Healthcare', 'Conversational AI', 'Automated Triage', 'HIPAA Aligned'],
      icon: HeartPulse,
      accentColor: '#1D4ED8',
    },
    {
      id: 'doc-processing',
      category: 'Finance & Supply Operations',
      title: 'AI Document Processing',
      challenge: 'Manual processing of thousands of multi-page vendor invoices, bills of lading, and paper contracts causing operational bottlenecks, data entry errors, and missed early-payment discounts.',
      solution: 'Built a deterministic AI-powered document extraction and validation pipeline (NAIR Docs™) that parses diverse PDF layouts, extracts line items, validates totals against ERP records, and pushes clean data directly into the general ledger.',
      metrics: [
        { label: 'Cycle Time Reduction', value: '92%' },
        { label: 'Extraction Precision', value: '99.8%' },
        { label: 'Processing Cost Cut', value: '74%' },
      ],
      tags: ['Finance', 'Invoice Extraction', 'ERP Integration', 'Pydantic Schemas'],
      icon: Receipt,
      accentColor: '#DC2626',
    },
    {
      id: 'sales-assistant',
      category: 'B2B Enterprise & High-Growth Retail',
      title: 'AI Sales Assistant',
      challenge: 'Slow lead qualification and sluggish weekend follow-ups resulting in high drop-off rates and lost revenue opportunities to faster-moving competitors.',
      solution: 'Implemented an autonomous AI virtual sales assistant trained on product specifications and qualification criteria to engage inbound website visitors in real time, answer complex pricing questions, and book qualified meetings directly onto account executive calendars.',
      metrics: [
        { label: 'Speed to Lead', value: '< 20 sec' },
        { label: 'Lead Conversion Lift', value: '+38%' },
        { label: 'Off-Hours Coverage', value: '100%' },
      ],
      tags: ['Sales Enablement', 'Instant Qualification', 'Calendar Booking', 'CRM Sync'],
      icon: Users,
      accentColor: '#1D4ED8',
    },
    {
      id: 'workflow-automation',
      category: 'Manufacturing & Cross-Department Operations',
      title: 'AI Workflow Automation',
      challenge: 'Time-consuming manual operational handoffs between purchasing, floor inventory, and logistics teams causing production cycle friction and inventory misallocations.',
      solution: 'Deployed multi-agent autonomous automation swarms that continuously monitor ERP inventory, predict restocking thresholds, generate draft purchase orders, and alert plant managers to supply chain disruptions before production halted.',
      metrics: [
        { label: 'Production Lag Reduction', value: '65%' },
        { label: 'Reorder Accuracy', value: '99.4%' },
        { label: 'Annual Operational Savings', value: '$280K+' },
      ],
      tags: ['Manufacturing', 'Agentic Swarms', 'Inventory AI', 'Autonomous Ops'],
      icon: Workflow,
      accentColor: '#DC2626',
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0A192F] selection:bg-[#1D4ED8] selection:text-white pt-24 pb-24 overflow-hidden">
      {/* Light Colored Motion Background with Subtle Hero Sculpture & Ambient Orbs */}
      <SubPageMotionBackground />

      {/* Top Breadcrumb Navigation Bar */}
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

      {/* Wide Left-Right Hero: Full Space Utilization */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A192F] mb-6 leading-[1.04]">
                AI That Delivers <span className="text-[#1D4ED8]">Real Results</span>.
              </h1>

              <p className="text-base sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed mb-8">
                See how Nair Corporation delivers measurable AI outcomes across healthcare, finance, retail, and manufacturing. Real solutions engineered for real-world enterprise operations.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onBookCall('Case Studies - Strategy Briefing')}
                  className="px-8 py-3.5 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full transition-all shadow-xl shadow-red-600/25 hover:scale-102 flex items-center gap-2.5 cursor-pointer"
                >
                  <span>Book an AI strategy call</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                <button
                  onClick={onOpenAssessment}
                  className="px-7 py-3.5 bg-white hover:bg-slate-100 text-[#0A192F] border border-slate-300 font-mono text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full transition-all shadow-xs cursor-pointer"
                >
                  <span>Take Feasibility Diagnostic</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column (5 cols): Verified Impact Card */}
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
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-display font-extrabold text-base text-[#0A192F] block leading-tight">
                      Production Outcomes
                    </span>
                    <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                      Quantified Client Audits
                    </span>
                  </div>
                </div>
                <span className="font-mono text-[11px] text-[#1D4ED8] px-3 py-1 rounded-full bg-blue-50 font-bold">
                  VERIFIED
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="font-display font-black text-2xl sm:text-3xl text-[#1D4ED8] block">88%</span>
                  <span className="font-mono text-[11px] text-slate-600 font-semibold">Triage Wait Cut</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="font-display font-black text-2xl sm:text-3xl text-[#DC2626] block">92%</span>
                  <span className="font-mono text-[11px] text-slate-600 font-semibold">Cycle Time Cut</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="font-display font-black text-2xl sm:text-3xl text-[#0284C7] block">&lt; 20s</span>
                  <span className="font-mono text-[11px] text-slate-600 font-semibold">Speed to Lead</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="font-display font-black text-2xl sm:text-3xl text-[#1D4ED8] block">$3.8M</span>
                  <span className="font-mono text-[11px] text-slate-600 font-semibold">Cloud Recaptured</span>
                </div>
              </div>

              <div className="pt-2 text-xs font-mono text-slate-500 flex items-center justify-between">
                <span>Zero Speculative Research</span>
                <CheckCircle2 className="w-4 h-4 text-[#1D4ED8]" />
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Horizontal Scroll Track: Mouse Wheel Scroll Enabled */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
              Production Velocity Benchmarks
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

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {benchmarkPills.map((pill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="w-[280px] sm:w-[320px] shrink-0 snap-start rounded-3xl bg-white border border-slate-200/90 p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className="font-mono text-[10px] uppercase font-bold px-2.5 py-1 rounded-md"
                    style={{ backgroundColor: `${pill.color}15`, color: pill.color }}
                  >
                    {pill.sector}
                  </span>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: pill.color }} />
                </div>
                <div className="font-display font-black text-3xl sm:text-4xl text-[#0A192F] mb-1">
                  {pill.metric}
                </div>
                <div className="font-display font-bold text-sm text-slate-800 mb-2">
                  {pill.label}
                </div>
                <p className="text-xs text-slate-500 font-normal leading-relaxed">
                  {pill.detail}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between font-mono text-[11px] text-[#1D4ED8] font-bold">
                <span>Verified Client SLA</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1D4ED8]" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case Studies Dossiers Grid: Wide Layout */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20 space-y-10">
        {caseStudies.map((cs, idx) => {
          const IconComp = cs.icon;
          return (
            <div
              key={cs.id}
              className="rounded-3xl bg-white border border-slate-200/90 shadow-md p-8 sm:p-12 text-left relative overflow-hidden group hover:border-[#1D4ED8] transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Detail Column (8 cols) */}
                <div className="lg:col-span-8 space-y-5">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#1D4ED8] font-bold">
                    <span>{cs.category}</span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#0A192F] leading-tight">
                    {cs.title}
                  </h2>

                  <div className="space-y-4 pt-2">
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/60">
                      <span className="font-mono text-xs uppercase font-extrabold text-[#DC2626] block mb-1">
                        THE CHALLENGE
                      </span>
                      <p className="text-slate-600 text-sm leading-relaxed font-normal">
                        {cs.challenge}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-100">
                      <span className="font-mono text-xs uppercase font-extrabold text-[#1D4ED8] block mb-1">
                        THE SOLUTION
                      </span>
                      <p className="text-slate-700 text-sm leading-relaxed font-normal">
                        {cs.solution}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] text-slate-500 bg-slate-100 px-3 py-1 rounded-full font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Metrics Column (4 cols) */}
                <div className="lg:col-span-4 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-7 space-y-5">
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-bold block pb-2 border-b border-slate-200">
                    VERIFIED OUTCOMES
                  </span>

                  {cs.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <span className="font-display text-3xl font-black text-[#1D4ED8] block">
                        {m.value}
                      </span>
                      <span className="font-mono text-xs uppercase text-slate-600 font-medium">
                        {m.label}
                      </span>
                    </div>
                  ))}

                  <div className="pt-4 border-t border-slate-200">
                    <button
                      onClick={() => onBookCall(`Case Study Review: ${cs.title}`)}
                      className="w-full py-3 bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-mono text-xs uppercase tracking-wider font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Book an AI strategy call</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* Strategic Callout Banner */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-left">
        <div className="rounded-3xl bg-gradient-to-br from-[#1D4ED8] via-[#1E40AF] to-[#0A192F] text-white p-10 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
                Have a Complex Enterprise Workflow?
              </h2>
              <p className="text-base sm:text-lg text-blue-100/90 font-normal leading-relaxed">
                Connect with our senior architects to evaluate feasibility, data security, and expected ROI.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => onBookCall('Case Studies Bottom CTA')}
                className="w-full px-8 py-4 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full transition-all shadow-xl shadow-red-600/30 hover:scale-102 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book an AI strategy call</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={onOpenAssessment}
                className="w-full px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-mono text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full transition-all text-center cursor-pointer"
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

export default CaseStudiesPage;
