import React, { useState } from 'react';
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
  BarChart,
  DollarSign,
  Activity,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { PageRoute } from './Navbar';
import { SubPageMotionBackground } from './SubPageMotionBackground';
import { useHorizontalWheelScroll } from './useHorizontalWheelScroll';
import { MotionDotCanvas } from './MotionDotCanvas';

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
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const { ref: scrollContainerRef, scrollLeft, scrollRight } = useHorizontalWheelScroll<HTMLDivElement>();

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
      filterCategory: 'healthcare',
      title: 'Autonomous Clinical Triage & Intake Swarm',
      client: 'Multi-Regional Hospital Network (14 Locations)',
      challenge: 'Overwhelming intake volume causing 45-minute patient waiting room delays, administrative burnout, and dropped prior-authorization paperwork during peak clinical shifts.',
      solution: 'Deployed a HIPAA-compliant conversational triage agent (NAIR Chat™) calibrated to clinical specialty guidelines. Automatically verifies patient insurance, matches symptoms to department protocols, and handles appointment booking with context-preserved physician handoff.',
      metrics: [
        { label: 'Intake Wait Reduction', value: '88%' },
        { label: 'Routine Triage Coverage', value: '24/7 Active' },
        { label: 'Clinical Staff Reclaimed', value: '140+ hrs/mo' },
      ],
      tags: ['Healthcare', 'HIPAA Aligned', 'Automated Triage', 'Epic EHR Integration'],
      icon: HeartPulse,
      accentColor: '#1D4ED8',
      before: 'Manual paperwork intake, 45-min triage queues, doctor fatigue.',
      after: 'Sub-60s digital intake, zero PHI retained, seamless EHR sync.',
    },
    {
      id: 'doc-processing',
      category: 'Financial Operations & Supply Chain',
      filterCategory: 'finance',
      title: 'Deterministic ERP Invoice Reconciliation',
      client: 'National Logistics & Distribution Enterprise ($320M Rev)',
      challenge: 'Accounts payable overwhelmed by 12,000+ monthly multi-format vendor invoices, bills of lading, and paper manifests resulting in data entry errors and lost early-payment discounts.',
      solution: 'Engineered a deterministic invoice extraction pipeline (NAIR Docs™) that parses multi-page PDFs, extracts line items, validates totals against ERP records via Pydantic schemas, and writes approved vouchers directly into SAP with zero human touch.',
      metrics: [
        { label: 'Cycle Time Reduction', value: '92%' },
        { label: 'Line-Item Extraction Precision', value: '99.8%' },
        { label: 'Monthly Processing Savings', value: '$46,000+' },
      ],
      tags: ['Finance', 'Invoice Extraction', 'SAP Integration', 'Pydantic Schemas'],
      icon: Receipt,
      accentColor: '#DC2626',
      before: '8 days average invoice processing cycle, high manual errors.',
      after: 'Instantaneous reconciliation, 100% mathematical audit trail.',
    },
    {
      id: 'sales-assistant',
      category: 'B2B Enterprise & High-Growth Commerce',
      filterCategory: 'sales',
      title: 'Sub-20s Autonomous Sales Qualification Mesh',
      client: 'B2B Enterprise Cloud Software Provider',
      challenge: 'Inbound high-value enterprise leads waited an average of 4.5 hours for sales rep email replies, causing a 35% pipeline drop-off to faster-moving competitors.',
      solution: 'Implemented an autonomous conversational sales agent trained on enterprise product documentation, security certifications, and pricing tiers. Interacts in real time with website buyers, qualifies budget/authority, and schedules qualified meetings on rep calendars.',
      metrics: [
        { label: 'Speed to Qualified Lead', value: '< 20 sec' },
        { label: 'Pipeline Conversion Lift', value: '+38%' },
        { label: 'Weekend Demo Bookings', value: '100% Automated' },
      ],
      tags: ['Sales Enablement', 'Instant Qualification', 'Calendar Sync', 'Salesforce CRM'],
      icon: Users,
      accentColor: '#0284C7',
      before: '4.5-hour response delay, high lead abandonment rate.',
      after: 'Immediate 20s qualification, meetings booked directly into CRM.',
    },
    {
      id: 'predictive-restocking',
      category: 'Industrial Manufacturing & Assembly',
      filterCategory: 'manufacturing',
      title: 'Neural Restocking & Supply Chain Forensics',
      client: 'Precision Automotive Component Fabricator',
      challenge: 'Erratic component supply swings caused unexpected factory line shutdowns and over $600K in idle buffer inventory stored across regional warehouses.',
      solution: 'Built a predictive forecasting engine (NAIR Insight™) tracking machine output rates, raw supplier transit times, and weather disruptions to trigger dynamic JIT restocking orders.',
      metrics: [
        { label: 'Emergency Stockouts', value: 'Reduced by 84%' },
        { label: 'Idle Inventory Recaptured', value: '$280K+' },
        { label: 'Forecast Precision', value: '96.4%' },
      ],
      tags: ['Manufacturing', 'Predictive Supply', 'Kafka Streams', 'JIT Restocking'],
      icon: Workflow,
      accentColor: '#DC2626',
      before: 'Reactive spreadsheets, chronic stockouts, excess buffer cost.',
      after: 'Neural automated re-ordering, 84% stockout reduction.',
    },
  ];

  const filteredStudies = selectedFilter === 'all'
    ? caseStudies
    : caseStudies.filter((cs) => cs.filterCategory === selectedFilter);

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

      {/* BESPOKE HERO: Executive Impact Terminal & Verified Macro Outcomes */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20">
        <div className="text-left mb-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1D4ED8] mb-3 block">
              Production Case Studies &amp; SLA Audits
            </span>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A192F] mb-6 leading-[1.04]">
              AI That Delivers <span className="text-[#1D4ED8]">Measurable ROI</span>.
            </h1>

            <p className="text-base sm:text-xl text-slate-600 max-w-3xl font-normal leading-relaxed mb-8">
              Explore how NAIR Corporation engineers sovereign, production-grade AI systems that eliminate operational bottlenecks, slash response times, and deliver verified economic returns across demanding industries.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onBookCall('Case Studies Strategic Review')}
                className="px-8 py-3.5 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full transition-all shadow-xl shadow-red-600/25 hover:scale-102 flex items-center gap-2.5 cursor-pointer"
              >
                <span>Book an AI strategy call</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                type="button"
                onClick={onOpenAssessment}
                className="px-7 py-3.5 bg-white hover:bg-slate-100 text-[#0A192F] border border-slate-300 font-mono text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full transition-all shadow-xs cursor-pointer"
              >
                <span>Take Feasibility Diagnostic</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* MACRO IMPACT KPI HUD */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xl backdrop-blur-md text-left">
          <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
            <span className="font-mono text-[11px] text-slate-500 uppercase tracking-wider block mb-1">
              Client Value Created
            </span>
            <span className="font-display font-black text-3xl sm:text-4xl text-[#1D4ED8]">
              $14.2M+
            </span>
            <span className="text-xs text-slate-600 mt-1 block">
              Quantified operational savings
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-red-50/60 border border-red-100">
            <span className="font-mono text-[11px] text-slate-500 uppercase tracking-wider block mb-1">
              Production SLA
            </span>
            <span className="font-display font-black text-3xl sm:text-4xl text-[#DC2626]">
              99.4%
            </span>
            <span className="text-xs text-slate-600 mt-1 block">
              Zero-drift uptime adherence
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100">
            <span className="font-mono text-[11px] text-slate-500 uppercase tracking-wider block mb-1">
              Daily Operations
            </span>
            <span className="font-display font-black text-3xl sm:text-4xl text-[#0284C7]">
              1.8M+
            </span>
            <span className="text-xs text-slate-600 mt-1 block">
              Automated without human delay
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="font-mono text-[11px] text-slate-500 uppercase tracking-wider block mb-1">
              Average Delivery
            </span>
            <span className="font-display font-black text-3xl sm:text-4xl text-[#0A192F]">
              30 Days
            </span>
            <span className="text-xs text-slate-600 mt-1 block">
              From blueprint to live system
            </span>
          </div>
        </div>
      </section>

      {/* HORIZONTAL SCROLL SECTION: Benchmark Velocity Ribbon */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div className="text-left">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
              Quantified Benchmark Metrics
            </h2>
            <p className="text-sm text-slate-500 font-normal mt-1">
              Scroll with mouse wheel or drag horizontally across verified production metrics.
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
          className="flex gap-5 overflow-x-auto pb-6 pt-2 select-none scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {benchmarkPills.map((pill, idx) => (
            <div
              key={idx}
              className="w-[280px] sm:w-[320px] shrink-0 p-6 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 inline-block mb-3">
                  {pill.sector}
                </span>
                <span className="font-display font-black text-4xl block mb-1" style={{ color: pill.color }}>
                  {pill.metric}
                </span>
                <span className="font-display font-bold text-lg text-[#0A192F] block mb-2">
                  {pill.label}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {pill.detail}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-[11px] font-mono font-bold text-slate-400">
                <span>Verified SLA</span>
                <ShieldCheck className="w-4 h-4 text-[#1D4ED8]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FILTER RIBBON & DETAILED CASE STUDY SHOWCASE */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-24">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
          <div className="text-left">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0A192F]">
              In-Depth Production Deployments
            </h2>
            <p className="text-sm text-slate-500 font-normal mt-1">
              Detailed technical architecture, problem statement, and verified outcomes.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Engagements' },
              { id: 'healthcare', label: 'Healthcare' },
              { id: 'finance', label: 'Finance' },
              { id: 'sales', label: 'B2B Sales' },
              { id: 'manufacturing', label: 'Manufacturing' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 rounded-full font-mono text-xs font-bold transition-all cursor-pointer ${
                  selectedFilter === tab.id
                    ? 'bg-[#1D4ED8] text-white shadow-md shadow-blue-500/20'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Case Study Deep Dive Cards */}
        <div className="space-y-12">
          {filteredStudies.map((cs) => {
            const IconComp = cs.icon;
            return (
              <div
                key={cs.id}
                className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl text-left"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* Left Column: Context, Challenge, Solution */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className="px-3.5 py-1 rounded-full font-mono text-xs font-extrabold uppercase tracking-wider"
                        style={{ backgroundColor: `${cs.accentColor}15`, color: cs.accentColor }}
                      >
                        {cs.category}
                      </span>
                      <span className="font-mono text-xs text-slate-500 font-semibold">
                        {cs.client}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-[#0A192F] leading-tight">
                      {cs.title}
                    </h3>

                    <div className="space-y-4 text-sm text-slate-600 leading-relaxed font-normal">
                      <div>
                        <span className="font-mono text-xs font-bold text-slate-900 uppercase block mb-1">
                          The Operational Challenge:
                        </span>
                        <p>{cs.challenge}</p>
                      </div>
                      <div>
                        <span className="font-mono text-xs font-bold text-[#1D4ED8] uppercase block mb-1">
                          The Engineered Solution:
                        </span>
                        <p>{cs.solution}</p>
                      </div>
                    </div>

                    {/* Before vs After Callout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-200/70">
                        <span className="font-mono text-[10px] uppercase font-bold text-rose-700 block mb-1">
                          Before NAIR Deployment:
                        </span>
                        <span className="text-xs text-slate-700">{cs.before}</span>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/70">
                        <span className="font-mono text-[10px] uppercase font-bold text-emerald-700 block mb-1">
                          After NAIR Deployment:
                        </span>
                        <span className="text-xs text-slate-700">{cs.after}</span>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-wrap gap-2">
                      {cs.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-mono text-[11px] font-semibold"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Key Quantified Outcomes */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="p-7 rounded-3xl bg-[#0A192F] text-white shadow-xl space-y-6">
                      <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                        <div className="flex items-center gap-2">
                          <IconComp className="w-5 h-5" style={{ color: cs.accentColor }} />
                          <span className="font-display font-extrabold text-base">Verified Outcomes</span>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded-sm">
                          AUDITED
                        </span>
                      </div>

                      <div className="space-y-4">
                        {cs.metrics.map((metric, mIdx) => (
                          <div
                            key={mIdx}
                            className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between"
                          >
                            <span className="font-mono text-xs text-slate-300 font-medium">
                              {metric.label}
                            </span>
                            <span
                              className="font-display font-black text-2xl"
                              style={{ color: cs.accentColor }}
                            >
                              {metric.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => onBookCall(`Case Study Consultation: ${cs.title}`)}
                        className="w-full py-3.5 rounded-full text-white font-mono text-xs uppercase tracking-wider font-extrabold shadow-md flex items-center justify-center gap-2 transition-all hover:scale-102 cursor-pointer"
                        style={{ backgroundColor: cs.accentColor }}
                      >
                        <span>Schedule Technical Debrief</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
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
              Ready to Achieve Measurable Results?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Talk directly with a senior NAIR solutions architect. We will evaluate your business processes and provide an estimated ROI forecast.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onBookCall('Case Studies - Strategy Briefing')}
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

export default CaseStudiesPage;
