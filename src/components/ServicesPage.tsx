import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  MessageSquare,
  BarChart3,
  Eye,
  FileText,
  Cloud,
  Cpu,
  Bot,
  Shield,
  GraduationCap,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Workflow,
  Server,
  Layers,
  Terminal,
  Activity,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { PageRoute } from './Navbar';
import { SubPageMotionBackground } from './SubPageMotionBackground';
import { useHorizontalWheelScroll } from './useHorizontalWheelScroll';
import { MotionDotCanvas } from './MotionDotCanvas';

interface ServicesPageProps {
  onBackToHome: () => void;
  onBookCall: (service?: string) => void;
  onOpenAssessment: () => void;
  onNavigate: (page: PageRoute) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onBackToHome,
  onBookCall,
  onOpenAssessment,
}) => {
  const [activePlatformIndex, setActivePlatformIndex] = useState(0);
  const { ref: scrollContainerRef, scrollLeft, scrollRight } = useHorizontalWheelScroll<HTMLDivElement>();

  const proprietaryPlatforms = [
    {
      id: 'chat',
      name: 'NAIR.AI Chat™',
      tagline: 'Conversational Runtime & Context Router',
      desc: 'Autonomous multi-turn conversational agents with stateful context preservation, enterprise CRM sync, and intelligent human escalation.',
      latency: '< 180ms TTFT',
      security: 'Zero Retention / VPC Isolated',
      architecture: 'Stateful Agent Swarm with RAG Vector Cache',
      color: '#1D4ED8',
      icon: Bot,
      capabilities: [
        'Domain-specific grounding on approved enterprise knowledge',
        'Multi-channel webhooks (Web, Mobile, WhatsApp, Slack)',
        'Context-preserved escalation to human operators',
        'Automatic sentiment triage & intent classification',
      ],
    },
    {
      id: 'docs',
      name: 'NAIR.AI Docs™',
      tagline: 'Deterministic Document Parser & Validator',
      desc: 'Pydantic-governed extraction converting complex PDFs, invoices, medical records, and supply manifests into verified database records.',
      latency: '99.8% Extraction Recall',
      security: 'ISO 27001 / PII Masked',
      architecture: 'Vision-LLM OCR + Deterministic Schema Compiler',
      color: '#DC2626',
      icon: FileText,
      capabilities: [
        'Line-item reconciliation against ERP purchase orders',
        'Automated redlining of non-standard legal indemnities',
        'Multi-page table extraction with mathematical checksums',
        'Direct write-back to SAP, Oracle, and Postgres databases',
      ],
    },
    {
      id: 'insight',
      name: 'NAIR.AI Insight™',
      tagline: 'Predictive Analytics & Anomaly Radar',
      desc: 'Continuous stream analytics that forecast demand shifts, flag operational anomalies, and surface actionable intelligence in real time.',
      latency: '< 15ms Stream Scoring',
      security: 'Immutable Event Telemetry',
      architecture: 'Distributed Kafka / Neural Scoring Pipeline',
      color: '#0284C7',
      icon: BarChart3,
      capabilities: [
        'High-frequency transaction fraud prevention',
        'Automated churn early-warning and revenue forecasting',
        'Predictive supply chain restocking calculations',
        'Live operational executive dashboards & automated reports',
      ],
    },
    {
      id: 'guard',
      name: 'NAIR.AI Guard™',
      tagline: 'Hallucination Firewall & Governance Layer',
      desc: 'The mission-critical security layer preventing prompt injection, data exfiltration, schema drifting, and ungrounded model hallucinations.',
      latency: 'Zero Pipeline Overhead',
      security: 'Cryptographic ACLs / Air-Gap',
      architecture: 'Dual-Layer Guardrail & Deterministic Filter Gate',
      color: '#DC2626',
      icon: Shield,
      capabilities: [
        'Mathematical fact-checking against source ground truth',
        'Granular user-level and document-level cryptographic ACLs',
        'Continuous compliance mapping for HIPAA, ISO 27001, and GDPR',
        'Automated red-teaming and prompt vulnerability scanning',
      ],
    },
    {
      id: 'learn',
      name: 'NAIR.AI Learn™',
      tagline: 'Enterprise Enablement & Workflow Playbooks',
      desc: 'Hands-on enablement programs, interactive departmental playbooks, and continuous certification tracks to elevate your internal workforce.',
      latency: '100% Practical Adoption',
      security: 'Role-Based Playbooks',
      architecture: 'Custom Interactive Corporate AI Academy',
      color: '#1D4ED8',
      icon: GraduationCap,
      capabilities: [
        'Executive alignment workshops on AI feasibility and ROI',
        'Engineering team deep dives into LLMOps and model hosting',
        'Departmental automation playbooks (HR, Legal, Finance, Ops)',
        'Ongoing evaluation metrics and adoption benchmarking',
      ],
    },
  ];

  const serviceCapabilities = [
    {
      title: 'Conversational AI & Support Agents',
      desc: 'Autonomous agents that qualify leads, resolve support tickets, schedule appointments, and coordinate logistics around the clock.',
      tag: 'Support & Sales',
      icon: MessageSquare,
      color: '#1D4ED8',
    },
    {
      title: 'Predictive Analytics & Forecasting',
      desc: 'Transform historical transactions and sensor logs into forward-looking forecasts — predict demand, reduce churn, and hedge risk.',
      tag: 'Intelligence',
      icon: BarChart3,
      color: '#DC2626',
    },
    {
      title: 'Computer Vision & Inspection',
      desc: 'Neural vision models that inspect manufacturing quality, extract physical document scans, and automate image-based classification at scale.',
      tag: 'Vision',
      icon: Eye,
      color: '#0284C7',
    },
    {
      title: 'Natural Language Processing (NLP)',
      desc: 'Semantic classification, entity linking, sentiment tracking, and multi-lingual summarization tuned to your specific domain vocabulary.',
      tag: 'NLP',
      icon: FileText,
      color: '#1D4ED8',
    },
    {
      title: 'Real-Time Insights & Dashboards',
      desc: 'Streaming event monitors that alert executive and operational teams to anomalies the second they emerge.',
      tag: 'Real-Time',
      icon: Activity,
      color: '#DC2626',
    },
    {
      title: 'Cloud Integration & Scalable Infra',
      desc: 'Deterministic orchestration across AWS, Azure, GCP, or hybrid private clouds with enterprise security built-in from day one.',
      tag: 'Infrastructure',
      icon: Cloud,
      color: '#0284C7',
    },
    {
      title: 'Custom Sovereign AI Models',
      desc: 'Fine-tuned open-weight models (Llama 3, DeepSeek, Mistral) hosted in your private VPC for maximum IP privacy and cost control.',
      tag: 'Sovereign',
      icon: Cpu,
      color: '#1D4ED8',
    },
  ];

  const activePlatform = proprietaryPlatforms[activePlatformIndex];

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

      {/* BESPOKE HERO: Interactive Platform Operating System Matrix */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20">
        <div className="text-left mb-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1D4ED8] mb-3 block">
              Proprietary AI Platform Suite
            </span>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A192F] mb-6 leading-[1.04]">
              The Enterprise AI <span className="text-[#1D4ED8]">Operating System</span>.
            </h1>

            <p className="text-base sm:text-xl text-slate-600 max-w-3xl font-normal leading-relaxed mb-8">
              From deterministic document parsing to sovereign multi-agent swarms, NAIR.AI provides the modular software layer that turns enterprise data into measurable competitive advantage.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onBookCall('Services Architecture Briefing')}
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

        {/* 5-PLATFORM INTERACTIVE BENCHMARK WORKBENCH */}
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-2xl p-6 sm:p-8 backdrop-blur-md">
          {/* Platform Tab Selector */}
          <div className="flex gap-2 overflow-x-auto pb-4 border-b border-slate-200/80 scrollbar-none">
            {proprietaryPlatforms.map((platform, idx) => {
              const isSelected = idx === activePlatformIndex;
              const IconComp = platform.icon;
              return (
                <button
                  key={platform.id}
                  type="button"
                  onClick={() => setActivePlatformIndex(idx)}
                  className={`px-4 py-3 rounded-2xl border text-left shrink-0 transition-all cursor-pointer flex items-center gap-3 ${
                    isSelected
                      ? 'bg-blue-50/80 border-[#1D4ED8] shadow-md shadow-blue-500/10 scale-[1.02]'
                      : 'bg-white hover:bg-slate-50 border-slate-200/80'
                  }`}
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center font-bold text-white shadow-xs"
                    style={{ backgroundColor: platform.color }}
                  >
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-display font-bold text-sm text-[#0A192F] block whitespace-nowrap">
                      {platform.name}
                    </span>
                    <span className="font-mono text-[10px] text-slate-500 block whitespace-nowrap">
                      {platform.latency}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Platform Interactive Blueprint Display */}
          <div className="pt-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePlatform.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left"
              >
                {/* Left Description & Capabilities */}
                <div className="lg:col-span-7 space-y-4">
                  <div
                    className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md font-mono text-xs font-bold"
                    style={{ backgroundColor: `${activePlatform.color}15`, color: activePlatform.color }}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{activePlatform.tagline.toUpperCase()}</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-[#0A192F]">
                    {activePlatform.name}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    {activePlatform.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {activePlatform.capabilities.map((cap, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5"
                      >
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: activePlatform.color }}
                        />
                        <span className="text-xs font-medium text-[#0A192F] leading-snug">
                          {cap}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => onBookCall(`Platform Inquiry: ${activePlatform.name}`)}
                      className="px-6 py-3 rounded-full text-white font-mono text-xs uppercase tracking-wider font-extrabold shadow-md flex items-center gap-2 cursor-pointer transition-colors"
                      style={{ backgroundColor: activePlatform.color }}
                    >
                      <span>Deploy {activePlatform.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Architectural Telemetry Terminal */}
                <div className="lg:col-span-5">
                  <div className="p-6 rounded-2xl bg-[#0A192F] text-slate-200 font-mono text-xs shadow-xl space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-[#38BDF8]" />
                        <span className="text-[#38BDF8] font-bold">KERNEL ARCHITECTURE</span>
                      </div>
                      <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-sm">
                        ACTIVE
                      </span>
                    </div>

                    <div className="space-y-3 font-mono text-xs">
                      <div>
                        <span className="text-slate-400 text-[10px] uppercase block">Topology:</span>
                        <span className="text-white font-bold">{activePlatform.architecture}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] uppercase block">Benchmark Latency:</span>
                        <span className="text-emerald-400 font-bold">{activePlatform.latency}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] uppercase block">Security Posture:</span>
                        <span className="text-sky-300 font-bold">{activePlatform.security}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] uppercase block">Infrastructure Fabric:</span>
                        <span className="text-slate-300 font-medium">AWS ECS · Azure Private Cloud · Bare Metal GPU</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-700/80 flex items-center justify-between text-[10px] text-slate-400">
                      <span>Telemetry: Ephemeral Memory</span>
                      <span className="text-blue-400 font-semibold">100% Deterministic</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* HORIZONTAL SCROLL SECTION: Service Capabilities Stream */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div className="text-left">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
              End-to-End Enterprise AI Capabilities
            </h2>
            <p className="text-sm text-slate-500 font-normal mt-1">
              Scroll with mouse wheel or drag horizontally across core technical disciplines.
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
          {serviceCapabilities.map((srv, idx) => {
            const IconComp = srv.icon;
            return (
              <div
                key={idx}
                className="w-[320px] sm:w-[370px] shrink-0 rounded-3xl bg-white border border-slate-200/90 p-7 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group text-left"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className="px-2.5 py-0.5 rounded-md font-mono text-[10px] uppercase font-bold tracking-wider"
                      style={{ backgroundColor: `${srv.color}15`, color: srv.color }}
                    >
                      {srv.tag}
                    </span>
                    <span className="font-mono text-[10px] text-slate-500 font-bold">
                      Enterprise Tier
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <IconComp className="w-6 h-6" style={{ color: srv.color }} />
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#0A192F] mb-3 leading-snug">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <span className="font-mono text-xs font-bold text-[#1D4ED8]">
                    Production Ready
                  </span>
                  <button
                    type="button"
                    onClick={() => onBookCall(`Capability Sizing: ${srv.title}`)}
                    className="text-xs font-mono font-bold text-slate-500 hover:text-[#0A192F] flex items-center gap-1 group-hover:text-[#1D4ED8] transition-colors cursor-pointer"
                  >
                    <span>Inspect Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* BOTTOM CALL TO ACTION: Light Blue Theme with Motion Dot Deflection */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-16">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#F0F7FF] via-[#E0F2FE] to-[#EFF6FF] border border-blue-200/90 text-[#0A192F] text-center shadow-xl relative overflow-hidden">
          {/* Motion Dot Deflection Effect */}
          <MotionDotCanvas dotCount={40} deflectionRadius={120} />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A192F]">
              Ready to Upgrade Your Enterprise Workflows?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Schedule an executive AI strategy session with our lead architects. We will evaluate your technical landscape and propose a structured execution roadmap.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onBookCall('Services Strategy Call')}
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

export default ServicesPage;
