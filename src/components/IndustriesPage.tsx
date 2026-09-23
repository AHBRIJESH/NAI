import React, { useState, useEffect } from 'react';
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
  Database,
  Search,
  Sparkles,
  Server,
  FileCheck2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { PageRoute } from './Navbar';
import { SubPageMotionBackground } from './SubPageMotionBackground';
import { useHorizontalWheelScroll } from './useHorizontalWheelScroll';
import { MotionDotCanvas } from './MotionDotCanvas';

interface IndustriesPageProps {
  onBackToHome: () => void;
  onBookCall: (service?: string) => void;
  onOpenAssessment: () => void;
  onNavigate: (page: PageRoute) => void;
  initialSector?: ActiveSector;
}

type ActiveSector = 'healthcare' | 'finance' | 'legal';

export const IndustriesPage: React.FC<IndustriesPageProps> = ({
  onBackToHome,
  onBookCall,
  onOpenAssessment,
  initialSector,
}) => {
  const [activeSector, setActiveSector] = useState<ActiveSector>(initialSector || 'healthcare');
  const { ref: scrollContainerRef, scrollLeft, scrollRight } = useHorizontalWheelScroll<HTMLDivElement>();

  // Synchronize sector when navigating from Navbar dropdown
  useEffect(() => {
    if (initialSector) {
      setActiveSector(initialSector);
      const timer = setTimeout(() => {
        const cockpit = document.getElementById('sector-cockpit');
        if (cockpit) {
          cockpit.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [initialSector]);

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
      desc: 'Context-preserved symptom sorting and patient appointment routing with rigorous medical guardrails and audit trails.',
      color: '#1D4ED8',
      icon: Activity,
    },
    {
      sector: 'Finance',
      title: 'ERP Invoice & Ledger Matching',
      metric: '99.8% Precision',
      sla: 'Zero-Drift OCR',
      desc: 'Deterministic line-item reconciliation comparing supplier invoices against POs, contracts, and general ledgers.',
      color: '#DC2626',
      icon: Zap,
    },
    {
      sector: 'Legal',
      title: 'Regulatory Cross-Jurisdiction Search',
      metric: '10x Diligence Speed',
      sla: 'Cryptographic Air-Gap',
      desc: 'Semantic synthesis of regulatory filings, statute revisions, and compliance requirements across EU, UK, and US jurisdictions.',
      color: '#0284C7',
      icon: FileText,
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

      {/* BESPOKE HERO: Sector Command Cockpit & Interactive Operational Simulator */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20">
        <div className="text-left mb-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1D4ED8] mb-3 block">
              Enterprise Sovereign Infrastructure
            </span>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A192F] mb-6 leading-[1.04]">
              High-Stakes AI for <span className="text-[#1D4ED8]">Regulated Sectors</span>.
            </h1>

            <p className="text-base sm:text-xl text-slate-600 max-w-3xl font-normal leading-relaxed mb-8">
              Mission-critical industries cannot risk generic consumer models or opaque wrappers. NAIR Corporation architects sovereign, deterministic multi-agent systems hardened against regulatory standards, air-gapped environments, and zero-data-retention mandates.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onBookCall('Industries Strategic Briefing')}
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
                <span>Readiness Diagnostic</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* INTERACTIVE SECTOR SWITCHER COCKPIT */}
        <div id="sector-cockpit" className="rounded-3xl bg-white border border-slate-200/90 shadow-2xl p-6 sm:p-8 backdrop-blur-md">
          {/* Sector Tab Controller - EXACT ORDER: Healthcare, Finance, Legal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pb-6 border-b border-slate-200/80">
            <button
              type="button"
              onClick={() => setActiveSector('healthcare')}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                activeSector === 'healthcare'
                  ? 'bg-blue-50/80 border-[#1D4ED8] shadow-md shadow-blue-500/10'
                  : 'bg-white hover:bg-slate-50 border-slate-200/80'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
                  activeSector === 'healthcare' ? 'bg-[#1D4ED8] text-white' : 'bg-blue-100/60 text-[#1D4ED8]'
                }`}>
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-display font-extrabold text-sm sm:text-base text-[#0A192F] block">
                    1. Healthcare
                  </span>
                  <span className="font-mono text-[11px] text-slate-500">
                    HIPAA BAA · FHIR Engine
                  </span>
                </div>
              </div>
              {activeSector === 'healthcare' && (
                <span className="w-2 h-2 rounded-full bg-[#1D4ED8] shrink-0" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setActiveSector('finance')}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                activeSector === 'finance'
                  ? 'bg-red-50/80 border-[#DC2626] shadow-md shadow-red-500/10'
                  : 'bg-white hover:bg-slate-50 border-slate-200/80'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
                  activeSector === 'finance' ? 'bg-[#DC2626] text-white' : 'bg-red-100/60 text-[#DC2626]'
                }`}>
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-display font-extrabold text-sm sm:text-base text-[#0A192F] block">
                    2. Finance
                  </span>
                  <span className="font-mono text-[11px] text-slate-500">
                    SOC 2 Type II · &lt; 15ms Latency
                  </span>
                </div>
              </div>
              {activeSector === 'finance' && (
                <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setActiveSector('legal')}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                activeSector === 'legal'
                  ? 'bg-sky-50/80 border-[#0284C7] shadow-md shadow-sky-500/10'
                  : 'bg-white hover:bg-slate-50 border-slate-200/80'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
                  activeSector === 'legal' ? 'bg-[#0284C7] text-white' : 'bg-sky-100/60 text-[#0284C7]'
                }`}>
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-display font-extrabold text-sm sm:text-base text-[#0A192F] block">
                    3. Legal
                  </span>
                  <span className="font-mono text-[11px] text-slate-500">
                    Air-Gapped VPC · Zero Retention
                  </span>
                </div>
              </div>
              {activeSector === 'legal' && (
                <span className="w-2 h-2 rounded-full bg-[#0284C7] shrink-0" />
              )}
            </button>
          </div>

          {/* DYNAMIC SECTOR SIMULATION COCKPIT VIEW */}
          <div className="pt-6">
            <AnimatePresence mode="wait">
              {activeSector === 'healthcare' && (
                <motion.div
                  key="healthcare"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left"
                >
                  <div className="lg:col-span-6 space-y-4">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-100/70 text-[#1D4ED8] font-mono text-xs font-bold">
                      <HeartPulse className="w-3.5 h-3.5" />
                      <span>CLINICAL INGESTION &amp; TRIAGE ENGINE</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
                      Autonomous FHIR Structuring &amp; Zero-PHI Persistence
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Converts complex unstructured clinical dictation, insurance prior-authorizations, and lab results into standardized FHIR v4 payloads. All data is processed in ephemeral memory with signed HIPAA Business Associate Agreements (BAAs).
                    </p>
                    <div className="grid grid-cols-3 gap-3 pt-2">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="block font-display font-black text-xl text-[#1D4ED8]">91%</span>
                        <span className="text-[11px] font-mono text-slate-500">Intake Speed Lift</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="block font-display font-black text-xl text-[#0A192F]">100%</span>
                        <span className="text-[11px] font-mono text-slate-500">HIPAA Compliant</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="block font-display font-black text-xl text-[#1D4ED8]">0 MB</span>
                        <span className="text-[11px] font-mono text-slate-500">PHI Retained</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="p-5 rounded-2xl bg-[#0A192F] text-slate-200 font-mono text-xs shadow-xl space-y-3">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                        <span className="text-[#38BDF8] font-bold">● FHIR STREAM: EHR_GATEWAY_v4.1</span>
                        <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-sm">DE-ID ACTIVE</span>
                      </div>
                      <div className="space-y-1.5 text-[11px] text-slate-300">
                        <p><span className="text-slate-500">[0.02s]</span> Ingesting clinical note: Prior-Auth Cardiology</p>
                        <p><span className="text-slate-500">[0.08s]</span> <span className="text-yellow-400">PHI Tokens Detected:</span> Redacting SSN, DOB, MRN</p>
                        <p><span className="text-slate-500">[0.15s]</span> Extracting CPT codes: 93000 (ECG), 93306 (Echo)</p>
                        <p><span className="text-slate-500">[0.21s]</span> Validating against CMS Medicare LCD Guidelines</p>
                        <p className="text-emerald-400 font-bold"><span className="text-slate-500">[0.29s]</span> ✓ FHIR Bundle Ready: DiagnosticReport/DR-99214</p>
                      </div>
                      <div className="pt-2 border-t border-slate-700/80 flex items-center justify-between text-[10px] text-slate-400">
                        <span>Integration: Epic Systems · Cerner · AthenaHealth</span>
                        <span className="text-blue-400 font-semibold">Doctor-in-the-Loop</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeSector === 'finance' && (
                <motion.div
                  key="finance"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left"
                >
                  <div className="lg:col-span-6 space-y-4">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-red-100/70 text-[#DC2626] font-mono text-xs font-bold">
                      <Landmark className="w-3.5 h-3.5" />
                      <span>HIGH-FREQUENCY FRAUD &amp; ANOMALY RADAR</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
                      Sub-15ms Neural Scoring &amp; Automated Ledger Audits
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Instantaneous fraud detection and trade reconciliation executing inside deterministic microsecond windows. Our models monitor cross-border velocity, synthetic identity patterns, and multi-currency ledger discrepancies without impacting consumer checkout latency.
                    </p>
                    <div className="grid grid-cols-3 gap-3 pt-2">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="block font-display font-black text-xl text-[#DC2626]">&lt; 14ms</span>
                        <span className="text-[11px] font-mono text-slate-500">Inference Latency</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="block font-display font-black text-xl text-[#0A192F]">SOC 2</span>
                        <span className="text-[11px] font-mono text-slate-500">Type II Verified</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="block font-display font-black text-xl text-[#DC2626]">$2.4B+</span>
                        <span className="text-[11px] font-mono text-slate-500">Daily Analyzed</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="p-5 rounded-2xl bg-[#0A192F] text-slate-200 font-mono text-xs shadow-xl space-y-3">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                        <span className="text-rose-400 font-bold">● RADAR MONITOR: TX_STREAM_US_EAST</span>
                        <span className="text-[10px] text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded-sm">SOC 2 AUDITED</span>
                      </div>
                      <div className="space-y-1.5 text-[11px] text-slate-300">
                        <p><span className="text-slate-500">[12ms]</span> Wire Event #88419: $64,200 (Zurich &rarr; NYC)</p>
                        <p><span className="text-slate-500">[13ms]</span> Evaluating IP velocity, biometric hash &amp; AML sanctions list</p>
                        <p><span className="text-slate-500">[14ms]</span> Multi-factor anomaly score: <span className="text-emerald-400 font-bold">0.03 (Safe)</span></p>
                        <p className="text-emerald-400 font-bold"><span className="text-slate-500">[14.2ms]</span> ✓ Transaction Passed to SWIFT Gateway</p>
                        <p className="text-slate-400 text-[10px]">Zero drift model guardrails: P99.9 latency maintained.</p>
                      </div>
                      <div className="pt-2 border-t border-slate-700/80 flex items-center justify-between text-[10px] text-slate-400">
                        <span>Compliance: FINRA · SEC 17a-4 · PCI-DSS</span>
                        <span className="text-rose-400 font-semibold">100% Deterministic</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeSector === 'legal' && (
                <motion.div
                  key="legal"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left"
                >
                  <div className="lg:col-span-6 space-y-4">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-sky-100/70 text-[#0284C7] font-mono text-xs font-bold">
                      <Scale className="w-3.5 h-3.5" />
                      <span>AUTONOMOUS REDLINE &amp; DILIGENCE WORKSTATION</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
                      Private VPC Clause Redlining &amp; Cross-Document Risk
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Scans thousands of vendor contracts, enterprise MSAs, and lease obligations in private air-gapped environments. Identifies unfavorable indemnity caps, non-standard indemnification, and missing assignment clauses with cryptographic audit logging.
                    </p>
                    <div className="grid grid-cols-3 gap-3 pt-2">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="block font-display font-black text-xl text-[#0284C7]">91%</span>
                        <span className="text-[11px] font-mono text-slate-500">Review Time Saved</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="block font-display font-black text-xl text-[#0A192F]">0%</span>
                        <span className="text-[11px] font-mono text-slate-500">Public Model Leakage</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="block font-display font-black text-xl text-[#0284C7]">Air-Gap</span>
                        <span className="text-[11px] font-mono text-slate-500">Private VPC Host</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="p-5 rounded-2xl bg-[#0A192F] text-slate-200 font-mono text-xs shadow-xl space-y-3">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                        <span className="text-sky-400 font-bold">● REDLINE ENGINE: CONTRACT_DIFF_V2</span>
                        <span className="text-[10px] text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded-sm">AIR-GAPPED</span>
                      </div>
                      <div className="space-y-1.5 text-[11px] text-slate-300">
                        <p><span className="text-slate-500">[Doc 14A]</span> Ingesting Vendor Master Services Agreement</p>
                        <p><span className="text-rose-400 font-bold">[Risk Flag]</span> Clause 14.2: Unlimited Consequential Damages</p>
                        <p><span className="text-sky-300 font-semibold">[Auto-Redline]</span> Cap liabilities at 12-month fees paid ($250,000)</p>
                        <p><span className="text-slate-500">[Audit]</span> Verifying compliance against Delaware General Corporation Law</p>
                        <p className="text-emerald-400 font-bold">✓ Redline Diff Exported to Word / PDF with Tracking Tags</p>
                      </div>
                      <div className="pt-2 border-t border-slate-700/80 flex items-center justify-between text-[10px] text-slate-400">
                        <span>Security: Zero-Retention IP · Private Enclave</span>
                        <span className="text-sky-400 font-semibold">100% Sovereign</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* HORIZONTAL SCROLL SECTION: Enhanced with Mouse Wheel, Grab-to-Drag, and Chevron Navigation */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div className="text-left">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
              Cross-Sector Architecture Modules
            </h2>
            <p className="text-sm text-slate-500 font-normal mt-1">
              Scroll with mouse wheel or drag horizontally to inspect modular deployment kernels.
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

        {/* The Horizontal Scroll Track - Intercepts Mouse Wheel and Drag Horizontally */}
        <div
          ref={scrollContainerRef}
          data-lenis-prevent="true"
          className="flex gap-6 overflow-x-auto pb-6 pt-2 select-none scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {horizontalCards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <div
                key={idx}
                className="w-[320px] sm:w-[370px] shrink-0 rounded-3xl bg-white border border-slate-200/90 p-7 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group text-left"
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
                  <span className="font-mono text-xs font-bold" style={{ color: card.color }}>
                    {card.metric}
                  </span>
                  <button
                    type="button"
                    onClick={() => onBookCall(`${card.sector}: ${card.title}`)}
                    className="text-xs font-mono font-bold text-slate-500 hover:text-[#0A192F] flex items-center gap-1 group-hover:text-[#1D4ED8] transition-colors cursor-pointer"
                  >
                    <span>Deploy Kernel</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* DETAILED SECTOR ARCHITECTURE BLUEPRINTS - STRICT ORDER: 1. Healthcare, 2. Finance, 3. Legal */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-24">
        
        {/* 1. HEALTHCARE DEEP DIVE */}
        <div id="healthcare" className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs font-extrabold uppercase tracking-wider text-[#1D4ED8] block">
                Sector Focus 01 // Clinical &amp; Patient Systems
              </span>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0A192F] leading-tight">
                Healthcare AI: Accelerating Patient Outcomes Without Privacy Compromise.
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                Healthcare organizations face mounting administrative loads, complex payer prior-authorizations, and fragmented electronic health records. NAIR Corporation deploys sovereign AI pipelines that extract structured diagnostics from messy doctor dictations while strictly preserving patient anonymity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2 mb-2 font-display font-bold text-sm text-[#0A192F]">
                    <CheckCircle2 className="w-4 h-4 text-[#1D4ED8]" />
                    <span>Prior Authorization Swarms</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Automate payer criteria matching and clinical justification assembly in minutes rather than days.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2 mb-2 font-display font-bold text-sm text-[#0A192F]">
                    <CheckCircle2 className="w-4 h-4 text-[#1D4ED8]" />
                    <span>Triage &amp; Intake Routing</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Intelligent symptom evaluation and dynamic calendar scheduling with context-preserved doctor escalation.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onBookCall('Healthcare AI Blueprint')}
                  className="px-6 py-3 rounded-full bg-[#1D4ED8] hover:bg-blue-800 text-white font-mono text-xs uppercase tracking-wider font-extrabold shadow-md flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <span>Request Healthcare Architecture Blueprint</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-slate-900 text-white shadow-lg space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider text-[#38BDF8] font-bold block">
                  Healthcare Compliance Verification
                </span>
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-slate-400">HIPAA BAA Guarantee</span>
                    <span className="text-emerald-400 font-bold">100% Signed</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-slate-400">PHI Token Ingestion</span>
                    <span className="text-emerald-400 font-bold">De-Identified at Gateway</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-slate-400">Clinical Coding Match</span>
                    <span className="text-blue-400 font-bold">ICD-10 / SNOMED CT</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">EHR Interoperability</span>
                    <span className="text-white font-bold">HL7 / FHIR v4 REST API</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. FINANCE DEEP DIVE */}
        <div id="finance" className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs font-extrabold uppercase tracking-wider text-[#DC2626] block">
                Sector Focus 02 // Financial Services &amp; Banking
              </span>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0A192F] leading-tight">
                Finance AI: Millisecond Fraud Defense &amp; Automated Ledger Audits.
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                Financial institutions must maintain razor-sharp operational margins while satisfying stringent audit, AML, and risk frameworks. We design ultra-low-latency neural scoring pipelines that process high-frequency transaction volumes and eliminate invoice processing drag.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2 mb-2 font-display font-bold text-sm text-[#0A192F]">
                    <CheckCircle2 className="w-4 h-4 text-[#DC2626]" />
                    <span>Real-Time Fraud Prevention</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Evaluate multi-variable fraud vectors under 15ms without slowing checkout flow or spiking false positives.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2 mb-2 font-display font-bold text-sm text-[#0A192F]">
                    <CheckCircle2 className="w-4 h-4 text-[#DC2626]" />
                    <span>ERP Invoice Reconciliation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Pydantic-validated line-item matching against purchase orders, contracts, and general ledger accounts.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onBookCall('Finance AI Blueprint')}
                  className="px-6 py-3 rounded-full bg-[#DC2626] hover:bg-red-800 text-white font-mono text-xs uppercase tracking-wider font-extrabold shadow-md flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <span>Request Finance Architecture Blueprint</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-slate-900 text-white shadow-lg space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider text-rose-400 font-bold block">
                  Financial Regulatory Standards
                </span>
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-slate-400">Audit Verification</span>
                    <span className="text-emerald-400 font-bold">SOC 2 Type II Certified</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-slate-400">P99 Inference Latency</span>
                    <span className="text-rose-400 font-bold">&lt; 14.8 milliseconds</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-slate-400">Data Integrity</span>
                    <span className="text-white font-bold">Immutable Event Ledgers</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Model Drift Detection</span>
                    <span className="text-emerald-400 font-bold">Active 24/7 Canary Monitored</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. LEGAL DEEP DIVE */}
        <div id="legal" className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs font-extrabold uppercase tracking-wider text-[#0284C7] block">
                Sector Focus 03 // Legal Operations &amp; Corporate Diligence
              </span>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0A192F] leading-tight">
                Legal AI: Sovereign Diligence, Contract Redlining &amp; Zero IP Leakage.
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                Law firms and enterprise corporate counsel require deep contextual reasoning over confidential filings with absolute confidentiality. We deploy isolated, zero-retention AI instances within your own private cloud or on-premise hardware to ensure your proprietary client work is never indexed or used to train external models.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2 mb-2 font-display font-bold text-sm text-[#0A192F]">
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
                    <span>Contract Redline Comparison</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Pinpoint non-standard indemnities, liability caps, and unfavorable termination clauses automatically.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2 mb-2 font-display font-bold text-sm text-[#0A192F]">
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
                    <span>M&amp;A Diligence Synthesis</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Synthesize thousands of virtual data room documents into structured covenant tables and risk summaries.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onBookCall('Legal AI Blueprint')}
                  className="px-6 py-3 rounded-full bg-[#0284C7] hover:bg-sky-700 text-white font-mono text-xs uppercase tracking-wider font-extrabold shadow-md flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <span>Request Legal Architecture Blueprint</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-slate-900 text-white shadow-lg space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider text-sky-400 font-bold block">
                  Legal IP Sovereignty Guarantees
                </span>
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-slate-400">Zero Retention Mandate</span>
                    <span className="text-emerald-400 font-bold">100% Cryptographic Ephemeral</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-slate-400">Public Model Isolation</span>
                    <span className="text-emerald-400 font-bold">Strict Air-Gapped VPC</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-slate-400">Attorney-Client Privilege</span>
                    <span className="text-white font-bold">Protected Architecture</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Extraction Precision</span>
                    <span className="text-sky-400 font-bold">Deterministic Pydantic Schemas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* BOTTOM CALL TO ACTION: Light Blue Theme with Motion Dot Deflection */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-20">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#F0F7FF] via-[#E0F2FE] to-[#EFF6FF] border border-blue-200/90 text-[#0A192F] text-center shadow-xl relative overflow-hidden">
          {/* Motion Dot Deflection Effect */}
          <MotionDotCanvas dotCount={40} deflectionRadius={120} />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A192F]">
              Ready to Deploy Sovereign AI in Your Organization?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Book a 30-minute technical evaluation with a senior NAIR solutions architect. We will evaluate your compliance boundaries, data infrastructure, and outline a 30-day production path.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onBookCall('Executive Consultation')}
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

export default IndustriesPage;
