import React, { useState } from 'react';
import { X, ArrowRight, RefreshCw, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { FluidOrb } from './FluidOrb';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookCallWithData: (assessmentData: Record<string, string>) => void;
}

interface Question {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  options: { label: string; score: number; detail: string }[];
}

const QUESTIONS: Question[] = [
  {
    id: 'data',
    category: '1. DATA READINESS & INFRASTRUCTURE',
    title: 'Where does your organizational data currently reside?',
    subtitle: 'High-performing AI solutions require structured or accessible domain data.',
    options: [
      {
        label: 'Dispersed across PDFs, emails & Google Sheets',
        score: 15,
        detail: 'Best suited for ingestion pipelines & OCR structuring.',
      },
      {
        label: 'Standard SaaS applications (Salesforce, Zendesk, QuickBooks, HubSpot)',
        score: 25,
        detail: 'High API connectivity ready for automated webhook agent sync.',
      },
      {
        label: 'Centralized Cloud Data Warehouse (Snowflake, BigQuery, Postgres)',
        score: 30,
        detail: 'Ideal foundation for vector indexing and high-throughput LLM pipelines.',
      },
      {
        label: 'Custom on-premise servers with strict network isolation',
        score: 20,
        detail: 'Ready for self-hosted open-weight models (Llama 3, DeepSeek, Mistral).',
      },
    ],
  },
  {
    id: 'bottleneck',
    category: '2. OPERATIONAL BOTTLENECKS',
    title: 'What is your primary operational efficiency bottleneck?',
    subtitle: 'Identifying high-friction repetitive workflows delivers immediate ROI.',
    options: [
      {
        label: 'Manual document processing (Invoices, claims, contract review)',
        score: 25,
        detail: 'Immediate 70%+ time recovery via intelligent extraction agents.',
      },
      {
        label: 'Repetitive customer support & triage tickets',
        score: 25,
        detail: 'Autonomous resolution agents handle tier-1 & tier-2 cases safely.',
      },
      {
        label: 'Disjointed departmental data search & knowledge retrieval',
        score: 25,
        detail: 'Unified Private RAG copilot empowers employee productivity.',
      },
      {
        label: 'Complex decision-making with multi-system data reconciliation',
        score: 25,
        detail: 'Multi-agent orchestration swarms execute complex logic checks.',
      },
    ],
  },
  {
    id: 'governance',
    category: '3. GOVERNANCE & PRIVACY COMPLIANCE',
    title: 'What are your enterprise data privacy and security requirements?',
    subtitle: 'Zero data leakage is the foundational prerequisite of practical AI.',
    options: [
      {
        label: 'Standard business privacy (Terms of Service confidentiality)',
        score: 20,
        detail: 'Can leverage zero-retention commercial enterprise API tiers.',
      },
      {
        label: 'Strict regulatory standards (HIPAA, SOC2 Type II, GDPR, ISO 27001)',
        score: 25,
        detail: 'Requires dedicated VPC deployments with end-to-end cryptographic audit logs.',
      },
      {
        label: 'Zero external transmission allowed (100% On-Premise / Air-gapped)',
        score: 25,
        detail: 'Requires local containerized model inference with private vector databases.',
      },
      {
        label: 'Currently evaluating compliance frameworks',
        score: 15,
        detail: 'NAIR.AI establishes baseline AI governance guardrails during pilot.',
      },
    ],
  },
  {
    id: 'timeline',
    category: '4. IMPLEMENTATION HORIZON',
    title: 'What is your target deployment timeline?',
    subtitle: 'We prioritize 3-to-4 week quick wins to prove ROI rapidly.',
    options: [
      {
        label: 'Immediate quick-win pilot (Within 30 days)',
        score: 25,
        detail: 'Rapid triage & high-yield workflow automation sprint.',
      },
      {
        label: 'Next quarter initiative (30 - 90 days)',
        score: 20,
        detail: 'Full architectural audit followed by phase-gated rollout.',
      },
      {
        label: 'Strategic enterprise roadmap planning (6+ months)',
        score: 15,
        detail: 'Comprehensive executive training and workforce adoption program.',
      },
      {
        label: 'Feasibility exploration & budgeting',
        score: 15,
        detail: 'Feasibility audit & multi-vendor total cost of ownership model.',
      },
    ],
  },
];

export const AssessmentModal: React.FC<AssessmentModalProps> = ({
  isOpen,
  onClose,
  onBookCallWithData,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, { label: string; score: number }>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const modalScrollRef = React.useRef<HTMLDivElement>(null);

  // Pause Lenis and lock body scroll when modal is open so mouse wheel scrolls modal freely
  React.useEffect(() => {
    if (!isOpen) return;
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    lenis?.stop();
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      lenis?.start();
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleWheelScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (modalScrollRef.current) {
      modalScrollRef.current.scrollTop += e.deltaY;
    }
  };

  const currentQ = QUESTIONS[currentStep];

  const handleSelectOption = (option: { label: string; score: number }) => {
    const updatedAnswers = {
      ...answers,
      [currentQ.id]: option,
    };
    setAnswers(updatedAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#1D4ED8', '#DC2626', '#0284C7', '#0A192F', '#38BDF8'],
        });
      } catch (e) {
        // Safe fallback
      }
    }
  };

  const calculateTotalScore = () => {
    const total = Object.values(answers).reduce((acc, curr) => acc + curr.score, 0);
    return Math.min(100, Math.max(30, Math.round((total / 105) * 100)));
  };

  const getTier = (score: number) => {
    if (score >= 80) {
      return {
        label: 'High Production Readiness — Immediate Pilot Deployable',
        color: 'text-white bg-[#1D4ED8] px-3 py-1 rounded-full border border-blue-600',
        recommendation:
          'Your infrastructure and clarity place you in the top 15% of enterprise readiness. We recommend deploying an autonomous agent workflow directly to production in 3 to 4 weeks.',
      };
    }
    if (score >= 60) {
      return {
        label: 'Moderate Readiness — Targeted Architectural Structuring',
        color: 'text-white bg-[#0A192F] px-3 py-1 rounded-full border border-blue-900',
        recommendation:
          'Your operational friction points are primed for AI, but data pipeline structuring or compliance guardrails should be installed first to guarantee reliability.',
      };
    }
    return {
      label: 'Foundational Phase — Strategy & Governance Workshop',
      color: 'text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-full border border-blue-200',
      recommendation:
        'You will benefit most from our AI Readiness & Opportunity Audit, identifying high-yield quick wins while standardizing governance.',
    };
  };

  const totalScore = calculateTotalScore();

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsCompleted(false);
  };

  const handleProceedToCall = () => {
    const payload: Record<string, string> = {
      readinessScore: `${totalScore}%`,
      dataInfrastructure: answers.data?.label || 'Not specified',
      primaryBottleneck: answers.bottleneck?.label || 'Not specified',
      governancePosture: answers.governance?.label || 'Not specified',
      timeline: answers.timeline?.label || 'Not specified',
    };
    onBookCallWithData(payload);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      data-lenis-prevent="true"
      onWheel={handleWheelScroll}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A192F]/80 backdrop-blur-xl animate-in fade-in duration-200"
    >
      <div
        ref={modalScrollRef}
        data-lenis-prevent="true"
        onWheel={handleWheelScroll}
        className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-8 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto overscroll-contain text-[#0A192F]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-[#0A192F] hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
          aria-label="Close assessment"
        >
          <X className="w-5 h-5" />
        </button>

        {!isCompleted ? (
          <div>
            {/* Header with Step Tracker */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2.5 font-bold">
                <span className="uppercase tracking-wider">{currentQ.category}</span>
                <span>
                  STEP {currentStep + 1} OF {QUESTIONS.length}
                </span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#1D4ED8] transition-all duration-300 rounded-full"
                  style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Details */}
            <div className="mb-8">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A192F] mb-2 leading-tight">
                {currentQ.title}
              </h3>
              <p className="text-base text-slate-600 font-normal">
                {currentQ.subtitle}
              </p>
            </div>

            {/* Answer Options */}
            <div className="space-y-3.5">
              {currentQ.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(option)}
                  className="w-full text-left p-5 rounded-2xl border border-slate-200 hover:border-[#1D4ED8] bg-white hover:bg-blue-50/50 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-start justify-between gap-4 group cursor-pointer"
                >
                  <div>
                    <span className="font-bold text-[#0A192F] text-base block group-hover:text-[#1D4ED8]">
                      {option.label}
                    </span>
                    <span className="text-xs text-slate-600 mt-1 block font-normal">
                      {option.detail}
                    </span>
                  </div>
                  <div className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#1D4ED8] group-hover:text-white transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </div>

            {/* Previous Step Navigator */}
            {currentStep > 0 && (
              <div className="mt-8 flex justify-start">
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="text-xs font-mono text-slate-500 hover:text-[#0A192F] font-bold cursor-pointer underline"
                >
                  ← Previous Question
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Assessment Completed Screen */
          <div className="text-center py-4">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl scale-130" />
                <FluidOrb size={96} color="#1D4ED8" className="shadow-xl ring-4 ring-[#DC2626]/20" />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-mono text-[11px] tracking-wider uppercase bg-blue-50 text-[#1D4ED8] border border-blue-200 mb-3 font-bold">
              DIAGNOSTIC REPORT GENERATED
            </div>

            <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A192F] mb-3">
              AI Readiness Score: <span className="text-[#1D4ED8]">{totalScore}%</span>
            </h3>

            <div className="inline-block font-mono text-xs uppercase tracking-wider font-bold mb-8">
              <span className={getTier(totalScore).color}>{getTier(totalScore).label}</span>
            </div>

            {/* Score Summary Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left mb-8">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
                <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1 font-bold">
                  EFFICIENCY GAIN
                </span>
                <span className="font-display font-extrabold text-lg text-[#0A192F]">
                  35% to 55%
                </span>
                <span className="text-xs text-slate-600 block mt-0.5 font-medium">
                  Overhead reduction
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
                <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1 font-bold">
                  RECOMMENDED ARCHITECTURE
                </span>
                <span className="font-display font-extrabold text-lg text-[#0A192F]">
                  Agentic Automation
                </span>
                <span className="text-xs text-slate-600 block mt-0.5 font-medium">
                  Private RAG + Tool-use
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
                <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1 font-bold">
                  TIME TO PILOT
                </span>
                <span className="font-display font-extrabold text-lg text-[#0A192F]">
                  3 to 4 Weeks
                </span>
                <span className="text-xs text-slate-600 block mt-0.5 font-medium">
                  To live production test
                </span>
              </div>
            </div>

            {/* Diagnostic Takeaways */}
            <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200 text-left mb-8 shadow-xs">
              <div className="flex items-center gap-2 text-[#0A192F] font-extrabold text-sm mb-2">
                <ShieldCheck className="w-4 h-4 text-[#1D4ED8]" />
                <span>Executive Strategy Takeaway:</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                Based on your bottleneck in <strong className="font-bold text-[#0A192F]">{answers.bottleneck?.label.toLowerCase()}</strong> and your compliance posture,
                NAIR.AI can immediately deploy zero-data-retention agentic workflows that preserve your IP while slashing cycle time.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
              <button
                onClick={handleProceedToCall}
                className="px-8 py-4 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs uppercase tracking-wider font-extrabold rounded-full shadow-lg shadow-red-600/25 flex items-center justify-center gap-2.5 cursor-pointer hover:scale-102 transition-all"
              >
                <span>Book Strategy Call With These Results</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleReset}
                className="px-5 py-4 border border-slate-200 text-[#0A192F] font-mono text-xs uppercase tracking-wider font-bold rounded-full hover:bg-slate-100 flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Retake</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssessmentModal;
