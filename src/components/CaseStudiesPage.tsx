import React, { useRef } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  FileCheck2,
  Clock,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Building,
  HeartPulse,
  Receipt,
  Users,
  Workflow,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Gauge,
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

import type { PageRoute } from './Navbar';

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
  const scrollRef = useRef<HTMLDivElement>(null);

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
    <div className="min-h-screen bg-slate-50 text-[#0A192F] selection:bg-[#1D4ED8] selection:text-white pt-24 pb-20">
      
      {/* Top Breadcrumb Navigation Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-6 pb-8">
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

      {/* Main Case Studies Hero */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full font-mono text-[11px] tracking-[0.26em] uppercase font-extrabold bg-blue-50 text-[#1D4ED8] border border-blue-200 shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <span>PROVEN CLIENT ENGAGEMENTS</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A192F] mb-6 leading-[1.04]">
            AI That Delivers <span className="text-[#1D4ED8]">Real Results</span>.
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
            See how Nair Corporation delivers measurable AI outcomes across healthcare, finance, retail, and manufacturing. Real solutions engineered for real-world enterprise operations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onBookCall('Case Studies - Strategy Briefing')}
              className="px-8 py-3.5 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full transition-all shadow-xl shadow-red-600/25 hover:scale-102 flex items-center gap-2.5 cursor-pointer"
            >
              <span>Discuss Your Use Case</span>
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
      </section>

      {/* Horizontal Scroll Track: Verified Production Benchmarks */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#1D4ED8] font-bold mb-1">
              <Gauge className="w-3.5 h-3.5" />
              <span>LIVE SLA &amp; ROI BENCHMARKS</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
              Production Velocity Benchmarks
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-slate-500 mr-2 hidden sm:inline-block">
              Swipe Horizontally
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
              className="w-[280px] sm:w-[320px] shrink-0 snap-start rounded-2xl bg-white border border-slate-200/90 p-5 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded-md"
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

      {/* Case Studies Dossiers Grid */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 mb-20 space-y-10">
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
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-md bg-blue-50 text-[#1D4ED8] border border-blue-200">
                      CASE STUDY 0{idx + 1} // {cs.category}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#0A192F] leading-tight">
                    {cs.title}
                  </h2>

                  <div className="space-y-4 pt-2">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                      <span className="font-mono text-xs uppercase font-extrabold text-[#DC2626] block mb-1">
                        THE CHALLENGE:
                      </span>
                      <p className="text-slate-600 text-sm leading-relaxed font-normal">
                        {cs.challenge}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
                      <span className="font-mono text-xs uppercase font-extrabold text-[#1D4ED8] block mb-1">
                        THE SOLUTION:
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
                        className="font-mono text-[10px] text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full font-medium"
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

                  <button
                    onClick={() => onBookCall(`Case Study Inquiry: ${cs.title}`)}
                    className="w-full py-3 bg-[#1D4ED8] hover:bg-blue-800 text-white font-mono text-xs uppercase tracking-wider font-bold rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer mt-4"
                  >
                    <span>Deploy Similar Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        <div className="rounded-3xl bg-[#0A192F] text-white p-8 sm:p-14 border border-blue-900/60 shadow-2xl relative overflow-hidden text-left">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#1D4ED8]/25 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#DC2626]/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-blue-300 font-bold block mb-4">
              MEASURABLE RESULTS //
            </span>

            <h3 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              Turn Your AI Ideas Into Measurable Results
            </h3>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-normal">
              Whether you're exploring AI for the first time or expanding existing capabilities, Nair Corporation can help you turn ideas into measurable business results.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onBookCall('Case Studies - Start Your Journey')}
                className="px-8 py-4 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-3 cursor-pointer hover:scale-102"
              >
                <span>Start Your AI Journey</span>
                <ArrowRight className="w-4 h-4 text-white stroke-[2.5]" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 font-mono text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full border border-blue-700/60 bg-blue-950 hover:bg-blue-900 text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Contact Our Architects</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Return to Home Overview Button */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider font-bold text-[#1D4ED8] hover:text-[#0A192F] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage Overview</span>
        </button>
      </div>

    </div>
  );
};

export default CaseStudiesPage;
