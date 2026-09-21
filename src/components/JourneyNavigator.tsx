import React from 'react';
import {
  Compass,
  Code2,
  Workflow,
  GraduationCap,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Users,
} from 'lucide-react';

interface JourneyNavigatorProps {
  onOpenAssessment: () => void;
  onSelectPath: (pathId: string) => void;
  isCinematicDark: boolean;
}

export const JourneyNavigator: React.FC<JourneyNavigatorProps> = ({
  onOpenAssessment,
  onSelectPath,
}) => {
  const journeys = [
    {
      id: 'assessment',
      question: 'Not sure where to start?',
      action: 'AI Readiness Assessment',
      badge: 'RECOMMENDED FIRST STEP',
      badgeColor: 'bg-[#E3EF26] text-[#06231D] border border-[#076653]/30 font-black',
      description:
        'Benchmark your organizational data readiness, map high-impact ROI bottlenecks, and receive a customized 90-day AI implementation roadmap.',
      icon: Compass,
      buttonText: 'Launch Assessment',
      isPrimary: true,
      onClick: onOpenAssessment,
      deliverables: ['Custom Opportunity Matrix', 'Security & Risk Evaluation', 'Instant Readiness Score'],
    },
    {
      id: 'solutions',
      question: 'Know what you want to build?',
      action: 'AI Solutions',
      badge: 'CUSTOM ARCHITECTURE',
      badgeColor: 'bg-[#0C342C] text-[#FFFDEE] border border-[#076653]/40 font-bold',
      description:
        'Transform concepts into production software. From private Retrieval-Augmented Generation (RAG) to custom domain-tuned model deployment.',
      icon: Code2,
      buttonText: 'Explore Solutions',
      isPrimary: false,
      onClick: () => onSelectPath('solutions'),
      deliverables: ['Enterprise Model Fine-tuning', 'Vector Search & RAG', 'Multi-Agent Tool Orchestration'],
    },
    {
      id: 'automation',
      question: 'Need to eliminate repetitive work?',
      action: 'AI Automation',
      badge: 'IMMEDIATE EFFICIENCY',
      badgeColor: 'bg-[#E2FBCE] text-[#06231D] border border-[#076653]/30 font-bold',
      description:
        'Deploy goal-driven agentic pipelines that extract, reconcile, triage, and execute back-office and customer workflows with zero human fatigue.',
      icon: Workflow,
      buttonText: 'See Automation Engine',
      isPrimary: false,
      onClick: () => onSelectPath('automation'),
      deliverables: ['Document Processing & Invoicing', 'Customer Ticket Autopilot', 'System-to-System Reconciliations'],
    },
    {
      id: 'training',
      question: 'Need to prepare your organization?',
      action: 'AI Training & Adoption',
      badge: 'PEOPLE & CULTURE',
      badgeColor: 'bg-[#FFFDEE] text-[#0C342C] border border-[#0C342C]/20 font-bold',
      description:
        'Bridge the skill gap with tailored executive masterclasses, departmental prompt engineering bootcamps, and pragmatic governance playbooks.',
      icon: GraduationCap,
      buttonText: 'View Training Programs',
      isPrimary: false,
      onClick: () => onSelectPath('training'),
      deliverables: ['Leadership Alignment Briefings', 'Hands-On Departmental Labs', 'Responsible AI Governance Code'],
    },
  ];

  return (
    <section
      id="journey"
      className="py-24 md:py-32 bg-[#FFFDEE] border-t border-[#0C342C]/10 relative text-[#06231D]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-[11px] tracking-[0.24em] uppercase font-bold bg-[#E2FBCE] text-[#06231D] border border-[#076653]/20 shadow-xs mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#076653]" />
            <span>NAVIGATION PATHWAYS</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 text-[#06231D]">
            Where are you in your <span className="text-[#076653]">AI journey?</span>
          </h2>

          <p className="text-lg sm:text-xl max-w-2xl font-normal leading-relaxed text-[#0C342C]/75">
            Whether evaluating initial feasibility or deploying autonomous agent swarms,
            NAIR.AI provides targeted entry points tailored to your immediate business objectives.
          </p>
        </div>

        {/* 4 Broad, Spacious Journey Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {journeys.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className={`flex flex-col justify-between rounded-3xl border p-8 transition-all duration-300 group hover:-translate-y-1.5 ${
                  item.isPrimary
                    ? 'bg-gradient-to-b from-[#E2FBCE]/40 to-[#FFFDEE] border-[#076653]/30 shadow-xl shadow-[#076653]/8'
                    : 'bg-[#FFFDEE] border-[#0C342C]/10 hover:border-[#076653]/30 shadow-sm hover:shadow-lg hover:shadow-[#0C342C]/5'
                }`}
              >
                <div>
                  {/* Top Meta: Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-[10px] font-mono tracking-wider px-3 py-1 rounded-full uppercase ${item.badgeColor}`}
                    >
                      {item.badge}
                    </span>
                    <div
                      className={`p-3 rounded-2xl ${
                        item.isPrimary
                          ? 'bg-[#E3EF26] text-[#06231D] shadow-md shadow-[#E3EF26]/20'
                          : 'bg-[#0C342C] text-[#FFFDEE] shadow-sm'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Question & Target Pathway */}
                  <div className="mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider block mb-1.5 text-[#0C342C]/60 font-bold">
                      {item.question}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl tracking-tight leading-snug text-[#06231D]">
                      → {item.action}
                    </h3>
                  </div>

                  {/* Explanatory Body */}
                  <p className="text-sm leading-relaxed mb-6 text-[#0C342C]/75 font-normal">
                    {item.description}
                  </p>

                  {/* Micro Deliverables */}
                  <div className="space-y-2 mb-6 pt-5 border-t border-[#0C342C]/10">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#0C342C]/50 font-bold block mb-2">
                      Key Deliverables:
                    </span>
                    {item.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2.5 text-xs">
                        <CheckCircle2 className="w-4 h-4 text-[#076653] shrink-0" />
                        <span className="text-[#0C342C] font-medium">
                          {deliv}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Trigger */}
                <button
                  onClick={item.onClick}
                  className={`w-full py-3.5 px-5 rounded-full font-mono text-xs uppercase tracking-wider font-extrabold transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer ${
                    item.isPrimary
                      ? 'bg-[#E3EF26] hover:bg-[#d2de1e] text-[#06231D] shadow-lg shadow-[#E3EF26]/20 hover:scale-[1.02]'
                      : 'bg-[#0C342C] hover:bg-[#076653] text-[#FFFDEE] shadow-md shadow-[#0C342C]/10 hover:scale-[1.02]'
                  }`}
                >
                  <span>{item.buttonText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Human-Centered AI Executive Collaboration Spotlight — Broader Full-Sized Viewport Section */}
      <div className="mt-24 w-full bg-white border-t border-b border-[#0C342C]/15 overflow-hidden shadow-xl shadow-[#076653]/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[600px] lg:min-h-[700px] xl:min-h-[760px]">
          
          {/* Left Column: Full-Size Image from Left Viewport Edge (6 cols) */}
          <div className="lg:col-span-6 relative w-full min-h-[460px] sm:min-h-[540px] lg:min-h-full overflow-hidden group bg-[#0C342C]">
            <img
              src="/images/team_collaboration.jpg"
              alt="Enterprise executives and AI architects collaborating in studio"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06231D]/80 via-transparent to-black/20 pointer-events-none" />

            {/* Floating Badge Top Left */}
            <div className="absolute top-8 sm:top-10 left-8 sm:left-12 px-4 py-2.5 rounded-full bg-[#06231D]/85 backdrop-blur-md text-[#E3EF26] font-mono text-[10px] sm:text-[11px] uppercase tracking-widest font-extrabold border border-[#076653]/40 flex items-center gap-2 shadow-xl">
              <Users className="w-3.5 h-3.5 text-[#E3EF26]" />
              <span>EXECUTIVE WORKSHOPS & ADOPTION</span>
            </div>

            {/* Floating Metric Strip Bottom */}
            <div className="absolute bottom-8 sm:bottom-10 left-8 sm:left-12 right-8 sm:right-12 p-5 rounded-2xl bg-[#06231D]/85 backdrop-blur-md border border-[#076653]/30 text-[#FFFDEE] flex items-center justify-between text-xs font-mono shadow-2xl">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E3EF26] pulse-beacon" />
                <span className="font-bold text-[#E2FBCE] text-xs sm:text-sm tracking-wide">DIRECT EMBEDDED TEAMS</span>
              </div>
              <span className="text-[#E3EF26] font-extrabold uppercase tracking-widest text-xs sm:text-sm">
                94% RETENTION ADOPTION
              </span>
            </div>
          </div>

          {/* Right Column: Broader Full-Width Narrative Content to Right Viewport Edge (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center px-8 sm:px-14 lg:px-16 xl:px-24 py-20 lg:py-28 text-left bg-gradient-to-br from-[#FFFDEE] via-[#FFFDEE] to-[#E2FBCE]/25">
            <div className="max-w-2xl xl:max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-[#076653] font-black mb-4 px-3.5 py-1.5 rounded-full bg-[#E2FBCE]/60 border border-[#076653]/20">
                <Users className="w-3.5 h-3.5 text-[#076653]" />
                <span>HUMAN-CENTERED ENTERPRISE TRANSFORMATION</span>
              </div>
              
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] text-[#06231D] tracking-tight mb-6 leading-[1.08]">
                Built for Growing Teams, Directed by Veteran AI Strategists.
              </h3>
              
              <p className="text-base sm:text-lg lg:text-xl text-[#0C342C]/85 leading-relaxed mb-9 font-normal">
                True AI value isn't just algorithmic; it's cultural and operational. We partner side-by-side with your leadership, department heads, and software teams to ensure rapid adoption, governance alignment, and immediate workflow wins.
              </p>

              {/* High-Impact Proof Points */}
              <div className="space-y-4 mb-10 w-full">
                <div className="flex items-center gap-3.5 text-sm sm:text-base text-[#0C342C]">
                  <CheckCircle2 className="w-5 h-5 text-[#076653] shrink-0" />
                  <span className="font-medium">Direct leadership alignment & quantified 90-day ROI roadmaps</span>
                </div>
                <div className="flex items-center gap-3.5 text-sm sm:text-base text-[#0C342C]">
                  <CheckCircle2 className="w-5 h-5 text-[#076653] shrink-0" />
                  <span className="font-medium">Zero-friction team upskilling with departmental prompt labs</span>
                </div>
                <div className="flex items-center gap-3.5 text-sm sm:text-base text-[#0C342C]">
                  <CheckCircle2 className="w-5 h-5 text-[#076653] shrink-0" />
                  <span className="font-medium">Enterprise governance guardrails ensuring zero IP leakage</span>
                </div>
              </div>

              <button
                onClick={onOpenAssessment}
                className="px-9 py-4.5 bg-[#0C342C] hover:bg-[#076653] text-[#FFFDEE] font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full shadow-lg shadow-[#0C342C]/20 transition-all flex items-center gap-3.5 cursor-pointer hover:scale-102"
              >
                <span>Benchmark Your Team's Readiness</span>
                <ArrowRight className="w-4 h-4 text-[#E3EF26]" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default JourneyNavigator;
