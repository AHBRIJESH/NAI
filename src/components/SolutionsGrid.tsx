import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import {
  Compass,
  ShieldCheck,
  Bot,
  Workflow,
  Sparkles,
  GraduationCap,
  ArrowUpRight,
  ArrowRight,
  Cpu,
  Layers,
  CheckCircle2,
} from 'lucide-react';

interface SolutionsGridProps {
  onBookCall: (serviceName?: string) => void;
  isCinematicDark: boolean;
}

export const SolutionsGrid: React.FC<SolutionsGridProps> = ({ onBookCall }) => {
  const timelineRef = useRef<HTMLDivElement>(null);

  // Scroll-linked animation for the continuous timeline track
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 70%', 'end 80%'],
  });

  const animatedScaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  const solutions = [
    {
      id: 'consulting',
      step: '01',
      phase: 'PHASE 01 // STRATEGIC DISCOVERY',
      title: 'AI Consulting & Strategy',
      badge: 'FOUNDATION',
      description:
        'Cut through the hype. We audit your workflows, quantify ROI potential, and architect a pragmatic multi-quarter AI transformation roadmap tailored to your existing tech stack.',
      capabilities: [
        'Opportunity & ROI Bottleneck Audit',
        'Model Selection & TCO Optimization',
        'Enterprise Vendor Neutrality',
        'Phase-Gated Deployment Architecture',
      ],
      icon: Compass,
      featured: false,
    },
    {
      id: 'governance',
      step: '02',
      phase: 'PHASE 02 // GOVERNANCE & PRIVACY',
      title: 'AI Governance & Risk Mitigation',
      badge: 'SAFETY & COMPLIANCE',
      description:
        'Protect your IP and brand reputation. We install enterprise guardrails that prevent model hallucination, enforce data isolation, and ensure compliance with emerging global AI frameworks.',
      capabilities: [
        'Zero Data Leakage & Private VPC Isolation',
        'Hallucination & Bias Guardrails',
        'EU AI Act & SOC2 Compliance Mappings',
        'Full Audit Logging & Deterministic Bounds',
      ],
      icon: ShieldCheck,
      featured: true,
    },
    {
      id: 'agentic',
      step: '03',
      phase: 'PHASE 03 // AUTONOMOUS SWARMS',
      title: 'Agentic AI & Multi-Agent Swarms',
      badge: 'NEXT GENERATION',
      description:
        'Move beyond passive chatbots. We design autonomous, goal-seeking agent networks that plan, query external APIs, execute multi-step software tasks, and self-correct discrepancies.',
      capabilities: [
        'Autonomous Tool & Function Calling',
        'Multi-Agent Coordination & Review Loops',
        'Long-Term Memory & Stateful Context',
        'Human-in-the-Loop Approval Checkpoints',
      ],
      icon: Bot,
      featured: true,
    },
    {
      id: 'automation',
      step: '04',
      phase: 'PHASE 04 // WORKFLOW SCALE',
      title: 'Intelligent Workflow Automation',
      badge: 'EFFICIENCY',
      description:
        'Eliminate repetitive operational work. We replace manual data re-entry, invoice reconciliations, and ticket triage with high-throughput intelligent processing pipelines.',
      capabilities: [
        'Unstructured Document & OCR Extraction',
        'Cross-Platform ERP & CRM Synchronization',
        'Automated Exception Routing & Alerts',
        'Cycle Time Reductions up to 85%',
      ],
      icon: Workflow,
      featured: false,
    },
    {
      id: 'generative',
      step: '05',
      phase: 'PHASE 05 // PRIVATE INTELLIGENCE',
      title: 'Generative AI & Private LLMs',
      badge: 'CUSTOM INTELLIGENCE',
      description:
        'Leverage domain-specific knowledge. We build secure Retrieval-Augmented Generation (RAG) knowledge systems and fine-tune open-weight models strictly on your proprietary datasets.',
      capabilities: [
        'Permission-Aware Vector Search & RAG',
        'Domain-Specific Model Fine-Tuning',
        'On-Premise or Private Cloud Deployment',
        'Semantic Enterprise Knowledge Search',
      ],
      icon: Sparkles,
      featured: false,
    },
    {
      id: 'training',
      step: '06',
      phase: 'PHASE 06 // WORKFORCE READINESS',
      title: 'AI Training & Organizational Adoption',
      badge: 'PEOPLE & CULTURE',
      description:
        'Technology is only as effective as the teams wielding it. We conduct executive masterclasses, departmental prompt labs, and adoption programs to upskill your entire workforce.',
      capabilities: [
        'Executive & Board AI Briefings',
        'Role-Specific Prompt Engineering Labs',
        'Change Management & Employee Buy-In',
        'Continuous Upskilling Playbooks',
      ],
      icon: GraduationCap,
      featured: false,
    },
  ];

  return (
    <section
      id="solutions"
      className="py-24 md:py-36 bg-[#FFFDEE] border-t border-[#0C342C]/10 text-[#06231D] relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Sticky Split Layout: Written Content Stays While Timeline Moves */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: STICKY WRITTEN CONTENT (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start pt-2">
            <h2 className="font-display text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight mb-5 text-[#06231D] leading-[1.08]">
              Practical AI Engineering, <span className="text-[#076653]">Zero Complexity</span>.
            </h2>

            <p className="text-base sm:text-lg font-normal leading-relaxed text-[#0C342C]/80 mb-8">
              We eliminate the trial-and-error of enterprise AI. Follow our proven execution timeline architected with strict governance, deterministic testing, and clear ROI metrics.
            </p>

            {/* Sticky Timeline Phase Directory */}
            <div className="space-y-2.5 hidden sm:block pt-6 border-t border-[#0C342C]/15">
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#076653] font-black block mb-3">
                DEPLOYMENT TIMELINE MILESTONES
              </span>
              {solutions.map((s) => (
                <div key={s.id} className="flex items-center gap-3 text-xs font-mono group">
                  <span className="w-5 font-extrabold text-[#076653] group-hover:text-[#06231D] transition-colors">{s.step}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E3EF26] border border-[#076653]/40" />
                  <span className="text-[#0C342C]/80 font-medium group-hover:text-[#076653] transition-colors">
                    {s.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Status Pill */}
            <div className="mt-8 pt-6 border-t border-[#0C342C]/15 flex items-center gap-3 text-xs font-mono text-[#076653]">
              <span className="w-2 h-2 rounded-full bg-[#076653] pulse-beacon" />
              <span className="font-bold">CONTINUOUS INTEGRATION // PROVABLY BOUNDED</span>
            </div>
          </div>

          {/* Right Column: MOVING TIMELINE WITH SCROLL ANIMATION (7 cols) */}
          <div ref={timelineRef} className="lg:col-span-7 relative pl-8 sm:pl-14">
            
            {/* Background Static Timeline Stem Line */}
            <div className="absolute left-3.5 sm:left-5 top-8 bottom-12 w-0.5 bg-[#076653]/15 rounded-full pointer-events-none" />

            {/* Scroll-Linked Animated Glowing Timeline Beam */}
            <motion.div
              style={{ scaleY: animatedScaleY, originY: 0 }}
              className="absolute left-3.5 sm:left-5 top-8 bottom-12 w-0.5 bg-gradient-to-b from-[#076653] via-[#E3EF26] to-[#076653] origin-top rounded-full shadow-[0_0_12px_rgba(227,239,38,0.5)] pointer-events-none z-10"
            />

            {/* Moving Timeline Cards */}
            <div className="space-y-10 sm:space-y-14">
              {solutions.map((sol) => {
                const Icon = sol.icon;

                return (
                  <div key={sol.id} className="relative">
                    
                    {/* Animated Milestone Node */}
                    <div className="absolute -left-[29px] sm:-left-[43px] top-6 z-20">
                      <motion.div
                        initial={{ scale: 0.7, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.4 }}
                        className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#06231D] text-[#E3EF26] border-2 border-[#076653] flex items-center justify-center font-mono text-xs font-black shadow-lg shadow-[#06231D]/20 hover:border-[#E3EF26] transition-colors"
                      >
                        <span>{sol.step}</span>
                      </motion.div>
                    </div>

                    {/* Scroll-Triggered Animated Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 35, scale: 0.97 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: false, amount: 0.25 }}
                      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                      className={`rounded-3xl border p-7 sm:p-9 transition-all duration-300 group hover:-translate-y-1 ${
                        sol.featured
                          ? 'bg-gradient-to-b from-[#E2FBCE]/45 via-white to-white border-[#076653]/35 shadow-xl shadow-[#076653]/10'
                          : 'bg-white border-[#0C342C]/15 hover:border-[#076653]/35 shadow-md hover:shadow-xl shadow-[#0C342C]/5'
                      }`}
                    >
                      {/* Top Bar */}
                      <div className="flex items-center justify-between mb-5">
                        <div
                          className={`p-3.5 rounded-2xl ${
                            sol.featured
                              ? 'bg-[#0C342C] text-[#E3EF26] shadow-md shadow-[#0C342C]/15'
                              : 'bg-[#E2FBCE] text-[#076653]'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-mono text-[10px] tracking-widest uppercase px-3 py-1 rounded-full bg-[#0C342C]/5 text-[#076653] font-bold border border-[#076653]/15">
                          {sol.badge}
                        </span>
                      </div>

                      {/* Phase & Title */}
                      <span className="text-[11px] font-mono uppercase tracking-[0.2em] font-extrabold text-[#076653] block mb-1.5">
                        {sol.phase}
                      </span>
                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight mb-3 text-[#06231D]">
                        {sol.title}
                      </h3>
                      <p className="text-sm sm:text-base leading-relaxed mb-6 font-normal text-[#0C342C]/80">
                        {sol.description}
                      </p>

                      {/* Capabilities Checklist */}
                      <div className="space-y-2 mb-7 pt-4 border-t border-[#0C342C]/10">
                        {sol.capabilities.map((cap, cIdx) => (
                          <div key={cIdx} className="flex items-center gap-2.5 text-xs sm:text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#076653] shrink-0" />
                            <span className="text-[#0C342C] font-medium">{cap}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action Button */}
                      <button
                        onClick={() => onBookCall(sol.title)}
                        className="w-full py-3.5 px-5 rounded-full font-mono text-xs uppercase tracking-wider font-extrabold transition-all duration-200 flex items-center justify-center gap-2 border border-[#0C342C]/20 bg-[#FFFDEE] hover:bg-[#E3EF26] hover:border-[#E3EF26] text-[#06231D] shadow-xs cursor-pointer group-hover:shadow-md"
                      >
                        <span>Consult on {sol.title.split(' ')[0]}</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </motion.div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>

      {/* CONFIDENTIAL 48-HOUR EVALUATION Section — Broader Full-Sized Viewport Section */}
      <div className="mt-28 w-full bg-[#0C342C] text-[#FFFDEE] border-t border-b border-[#076653]/35 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[600px] lg:min-h-[700px] xl:min-h-[760px]">
          
          {/* Left Column: Full-Size Image From Left Viewport Edge (6 cols) */}
          <div className="lg:col-span-6 relative w-full min-h-[460px] sm:min-h-[540px] lg:min-h-full overflow-hidden group bg-[#06231D]">
            <img
              src="/images/executive_architect.jpg"
              alt="Chief Enterprise AI Technologist"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06231D]/80 via-transparent to-black/20 pointer-events-none" />

            {/* Floating Badge Top Left */}
            <div className="absolute top-8 sm:top-10 left-8 sm:left-12 px-4 py-2.5 rounded-full bg-[#06231D]/85 backdrop-blur-md text-[#E3EF26] font-mono text-[10px] sm:text-[11px] uppercase tracking-widest font-extrabold border border-[#076653]/40 flex items-center gap-2 shadow-xl">
              <Cpu className="w-3.5 h-3.5 text-[#E3EF26]" />
              <span>SENIOR AI ARCHITECTS // DIRECT REVIEW</span>
            </div>

            {/* Floating Metric Strip Bottom */}
            <div className="absolute bottom-8 sm:bottom-10 left-8 sm:left-12 right-8 sm:right-12 p-5 rounded-2xl bg-[#06231D]/85 backdrop-blur-md border border-[#076653]/30 text-[#FFFDEE] flex items-center justify-between text-xs font-mono shadow-2xl">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E3EF26] pulse-beacon" />
                <span className="font-bold text-[#E2FBCE] text-xs sm:text-sm tracking-wide">CONFIDENTIAL EVALUATION</span>
              </div>
              <span className="text-[#E3EF26] font-extrabold uppercase tracking-widest text-xs sm:text-sm">
                48-HOUR TURNAROUND
              </span>
            </div>
          </div>

          {/* Right Column: Broader Full-Width Content Container to Right Viewport Edge (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center px-8 sm:px-14 lg:px-16 xl:px-24 py-20 lg:py-28 text-left bg-gradient-to-br from-[#0C342C] via-[#0C342C] to-[#06231D]">
            <div className="max-w-2xl xl:max-w-3xl">
              <h4 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] text-[#FFFDEE] tracking-tight mb-6 leading-[1.08]">
                Need a Custom Architectural Audit?
              </h4>

              <p className="text-base sm:text-lg lg:text-xl text-[#E2FBCE]/90 leading-relaxed mb-9 font-normal">
                Our principal AI architects will examine your data infrastructure, identify high-friction bottlenecks, and deliver an objective feasibility report with projected payback metrics.
              </p>

              {/* Proof Points */}
              <div className="space-y-4 mb-10 w-full">
                <div className="flex items-center gap-3.5 text-sm sm:text-base text-[#E2FBCE]">
                  <CheckCircle2 className="w-5 h-5 text-[#E3EF26] shrink-0" />
                  <span className="font-medium">Direct review by senior AI systems technologists</span>
                </div>
                <div className="flex items-center gap-3.5 text-sm sm:text-base text-[#E2FBCE]">
                  <CheckCircle2 className="w-5 h-5 text-[#E3EF26] shrink-0" />
                  <span className="font-medium">Strict zero-retention NDA & VPC isolation guarantees</span>
                </div>
                <div className="flex items-center gap-3.5 text-sm sm:text-base text-[#E2FBCE]">
                  <CheckCircle2 className="w-5 h-5 text-[#E3EF26] shrink-0" />
                  <span className="font-medium">Deterministic ROI breakdown & phased milestone roadmap</span>
                </div>
              </div>

              <button
                onClick={() => onBookCall('Custom Architectural Audit')}
                className="px-9 py-4.5 bg-[#E3EF26] hover:bg-[#d2de1e] text-[#06231D] font-mono text-xs sm:text-sm uppercase tracking-wider font-black rounded-full shadow-xl shadow-[#E3EF26]/20 transition-all flex items-center gap-3.5 cursor-pointer hover:scale-102"
              >
                <span>Request Technical Feasibility Audit</span>
                <ArrowRight className="w-4 h-4 text-[#06231D] stroke-[2.5]" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;
