import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ArrowRight, RefreshCw, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

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
    category: 'DATA READINESS & INFRASTRUCTURE',
    title: 'Where does your organizational data currently reside?',
    subtitle: 'High-performing AI solutions require accessible domain data.',
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
    category: 'OPERATIONAL BOTTLENECKS',
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
    category: 'GOVERNANCE & PRIVACY COMPLIANCE',
    title: 'What are your enterprise data privacy and security requirements?',
    subtitle: 'Zero data leakage is the foundational prerequisite of practical AI.',
    options: [
      {
        label: 'Standard business privacy (Terms of Service confidentiality)',
        score: 20,
        detail: 'Can leverage zero-retention commercial enterprise API tiers.',
      },
      {
        label: 'Strict regulatory standards (HIPAA, GDPR, ISO 27001)',
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
    category: 'IMPLEMENTATION HORIZON',
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

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      lenis?.start();
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || typeof document === 'undefined') return null;

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
          particleCount: 70,
          spread: 60,
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
        label: 'High Production Readiness',
        color: 'text-white bg-[#1D4ED8] px-3 py-1 rounded-full border border-blue-600',
        recommendation:
          'Your infrastructure and clarity place you in the top 15% of enterprise readiness. We recommend deploying an autonomous agent workflow directly to production in 3 to 4 weeks.',
      };
    }
    if (score >= 60) {
      return {
        label: 'Moderate Readiness — Structuring Phase',
        color: 'text-white bg-[#0A192F] px-3 py-1 rounded-full border border-blue-900',
        recommendation:
          'Your operational friction points are primed for AI, but data pipeline structuring or compliance guardrails should be installed first to guarantee reliability.',
      };
    }
    return {
      label: 'Foundational Phase — Strategy Workshop',
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

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      data-lenis-prevent="true"
      onWheel={handleWheelScroll}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#0A192F]/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        ref={modalScrollRef}
        data-lenis-prevent="true"
        onWheel={handleWheelScroll}
        className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl max-w-xl w-full p-5 sm:p-7 md:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto overscroll-contain text-[#0A192F] transition-all"
      >
        {/* Minimal Round Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-[#0A192F] flex items-center justify-center transition-colors cursor-pointer z-10"
          aria-label="Close assessment"
        >
          <X className="w-4 h-4" />
        </button>

        {!isCompleted ? (
          <div>
            {/* Minimal Segmented Progress Bar & Category Header */}
            <div className="mb-4 sm:mb-5 pr-8">
              <div className="flex items-center justify-between text-[11px] font-mono font-bold text-slate-400 mb-2 uppercase tracking-wider">
                <span className="text-[#1D4ED8]">{currentQ.category}</span>
                <span>Question {currentStep + 1} of {QUESTIONS.length}</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 h-1.5">
                {QUESTIONS.map((_, idx) => (
                  <div
                    key={idx}
                    className={`rounded-full transition-all duration-300 ${
                      idx <= currentStep ? 'bg-[#1D4ED8]' : 'bg-slate-100'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Question Details */}
            <div className="mb-4 sm:mb-5">
              <h3 className="font-display font-extrabold text-lg sm:text-xl md:text-2xl text-[#0A192F] mb-1.5 leading-snug">
                {currentQ.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-normal">
                {currentQ.subtitle}
              </p>
            </div>

            {/* Answer Options - Streamlined & Minimal */}
            <div className="space-y-2.5 sm:space-y-3">
              {currentQ.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(option)}
                  className="w-full text-left p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200/90 hover:border-[#1D4ED8] bg-white hover:bg-blue-50/40 shadow-xs hover:shadow-sm transition-all duration-150 flex items-start gap-3 group cursor-pointer"
                >
                  <div className="w-4 h-4 rounded-full border-2 border-slate-300 group-hover:border-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[#1D4ED8] transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-bold text-[#0A192F] text-xs sm:text-sm block group-hover:text-[#1D4ED8] leading-snug">
                      {option.label}
                    </span>
                    <span className="text-[11px] sm:text-xs text-slate-500 mt-0.5 block font-normal leading-relaxed">
                      {option.detail}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Minimal Previous Step Link */}
            {currentStep > 0 && (
              <div className="mt-4 sm:mt-5 flex justify-start">
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="text-xs font-mono text-slate-500 hover:text-[#1D4ED8] font-bold cursor-pointer inline-flex items-center gap-1"
                >
                  <span>← Previous Question</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Minimal Diagnostic Results Screen */
          <div className="text-center py-2 sm:py-3 space-y-5">
            {/* Score Ring / Pill */}
            <div className="inline-flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-blue-50/80 border-2 border-blue-200 shadow-inner mx-auto">
              <span className="font-display font-black text-3xl sm:text-4xl text-[#1D4ED8] leading-none">
                {totalScore}%
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 font-bold mt-1">
                Readiness
              </span>
            </div>

            <div>
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#1D4ED8] font-bold block mb-1">
                DIAGNOSTIC REPORT GENERATED
              </span>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#0A192F]">
                Assessment Complete
              </h3>
              <div className="mt-2 inline-block">
                <span className={getTier(totalScore).color + ' text-xs font-bold'}>{getTier(totalScore).label}</span>
              </div>
            </div>

            {/* Compact Metric Breakdown */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 text-left">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[9px] font-mono text-slate-400 uppercase font-bold block">
                  EFFICIENCY
                </span>
                <span className="font-display font-extrabold text-sm sm:text-base text-[#0A192F] block mt-0.5">
                  35%–55%
                </span>
                <span className="text-[10px] text-slate-500 block truncate">
                  Overhead reduction
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[9px] font-mono text-slate-400 uppercase font-bold block">
                  ARCHITECTURE
                </span>
                <span className="font-display font-extrabold text-sm sm:text-base text-[#0A192F] block mt-0.5 truncate">
                  Agentic RAG
                </span>
                <span className="text-[10px] text-slate-500 block truncate">
                  Private Tool-Use
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[9px] font-mono text-slate-400 uppercase font-bold block">
                  TIME TO PILOT
                </span>
                <span className="font-display font-extrabold text-sm sm:text-base text-[#0A192F] block mt-0.5">
                  3–4 Wks
                </span>
                <span className="text-[10px] text-slate-500 block truncate">
                  Live production test
                </span>
              </div>
            </div>

            {/* Strategic Recommendation */}
            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/80 text-left text-xs text-slate-700 leading-relaxed">
              <div className="flex items-center gap-1.5 font-bold text-[#0A192F] mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1D4ED8]" />
                <span>Executive Recommendation:</span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-600">
                Based on your bottleneck in <strong className="text-[#0A192F]">{answers.bottleneck?.label.toLowerCase()}</strong> and your compliance posture, NAIR.AI can deploy a sovereign zero-retention agentic workflow pilot within 3 to 4 weeks.
              </p>
            </div>

            {/* Actions: Primary Red CTA, Secondary Royal Blue CTA */}
            <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
              <button
                onClick={handleProceedToCall}
                className="flex-1 py-3.5 px-5 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs uppercase tracking-wider font-extrabold rounded-full shadow-lg shadow-red-600/25 flex items-center justify-center gap-2 cursor-pointer hover:scale-102 transition-all"
              >
                <span>Book Call With Results</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={handleReset}
                className="py-3.5 px-6 bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-mono text-xs uppercase tracking-wider font-extrabold rounded-full border border-[#1D4ED8] shadow-md shadow-blue-600/20 hover:scale-102 flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Retake</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default AssessmentModal;
