import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  BrainCircuit,
  Cpu,
  FileText,
  Shield,
  Layers,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Lock,
  Workflow,
  Eye,
  Sliders,
  Database,
  ArrowUpRight,
  Compass,
  AlertTriangle,
  Terminal,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { PageRoute } from './Navbar';
import { MotionDotCanvas } from './MotionDotCanvas';

interface ArtificialIntelligencePageProps {
  onBackToHome: () => void;
  onBookCall: (service?: string) => void;
  onOpenAssessment: () => void;
  onNavigate: (page: PageRoute) => void;
}

export const ArtificialIntelligencePage: React.FC<ArtificialIntelligencePageProps> = ({
  onBackToHome,
  onBookCall,
  onOpenAssessment,
  onNavigate,
}) => {
  // Active step for the interactive Workflow Architecture Simulator
  const [activeSimStep, setActiveSimStep] = useState<number>(0);

  // Accordion FAQ state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const simulationSteps = [
    {
      step: '01',
      title: 'Context Intake & Verification',
      badge: 'Step 1: Input Ingestion',
      desc: 'Ingests complex unstructured enterprise documents, database events, or live messages. Extracts raw entities and matches against verified schemas.',
      tech: 'Vision OCR · Pydantic Schema · Hash Integrity',
      status: 'VERIFIED',
      accentColor: '#1D4ED8',
      metrics: '0.4s Parse Time · 99.8% Recall',
    },
    {
      step: '02',
      title: 'Specialized Multi-Agent Routing',
      badge: 'Step 2: Orchestration',
      desc: 'Routes tasks across domain-specialized agents with defined tool permissions. Enforces deterministic consensus before executing downstream steps.',
      tech: 'Dynamic Graph Router · Ephemeral Memory Cache',
      status: 'CONSENSUS REACHED',
      accentColor: '#0284C7',
      metrics: '4 Parallel Agents · Zero Hallucination Gate',
    },
    {
      step: '03',
      title: 'Boundary & Human Approval Gate',
      badge: 'Step 3: Governance',
      desc: 'High-stakes financial updates, external messages, or sensitive record edits trigger an explicit approval ticket with complete provenance diffs.',
      tech: 'Role-Based ACL · Cryptographic Verification · Slack/Teams Webhook',
      status: 'APPROVAL PENDING',
      accentColor: '#DC2626',
      metrics: '1-Click Review · Full Audit Trail',
    },
    {
      step: '04',
      title: 'System Writeback & Telemetry',
      badge: 'Step 4: Execution',
      desc: 'Executes verified updates directly into SAP, Oracle, Postgres, or legacy APIs. Logs full execution telemetry into your private observability stack.',
      tech: 'Transactional Rollback · Private VPC · Zero Retention',
      status: 'COMMITTED',
      accentColor: '#059669',
      metrics: '< 180ms Latency · 100% Deterministic',
    },
  ];

  const aiServices = [
    {
      id: 'strategy',
      title: 'Enterprise AI Strategy & Architecture',
      tag: 'Strategic Advisory',
      icon: Compass,
      color: '#1D4ED8',
      desc: 'Decide where AI belongs in your business and what it will take to operate it. Assess candidate workflows, compare model approaches, and plan the infrastructure around your performance, privacy, and cost requirements.',
      scopeItems: [
        'Use-case assessment & ROI modeling',
        'Model evaluation (Proprietary vs. Open-Weight)',
        'Hardware sizing & bare-metal vs. cloud costing',
        'Deployment architecture & private VPC planning',
        'Implementation roadmap & milestone planning',
      ],
      callToAction: 'Plan Strategy Session',
    },
    {
      id: 'multi-agent',
      title: 'Multi-Agent Workflow Automation',
      tag: 'Autonomous Systems',
      icon: Workflow,
      color: '#DC2626',
      desc: 'Coordinate specialized agents across a defined business process. Connect them to approved tools and systems, specify the actions each can take, and route sensitive decisions to a person.',
      scopeItems: [
        'Document intake and verification cascades',
        'Cross-system reconciliation across disparate ERPs',
        'Automated exception triage & routing',
        'Preparation of verified ledger & ERP updates',
        'Deterministic consensus & tool execution safeguards',
      ],
      callToAction: 'Explore Multi-Agent Swarms',
    },
    {
      id: 'private-llm',
      title: 'Private Language-Model Applications',
      tag: 'Sovereign Hosting',
      icon: Cpu,
      color: '#0284C7',
      desc: 'Bring language-model capabilities into a deployment environment that meets your organization’s requirements. Plan how models access information, how requests are processed, and which records need to be retained for operation and oversight.',
      scopeItems: [
        'Open-weight model evaluation (Llama 3, DeepSeek, Mistral)',
        'Private inference in customer-controlled VPC / On-Prem',
        'Fine-tuning on domain-specific vocabulary and schemas',
        'Cryptographic access controls and role-based ACLs',
        'Deployment-specific zero-retention & logging policies',
      ],
      callToAction: 'Review Private Model Options',
    },
    {
      id: 'assistants',
      title: 'Enterprise Knowledge Assistants',
      tag: 'Internal Intelligence',
      icon: Bot,
      color: '#1D4ED8',
      desc: 'Help employees work with internal information through a conversational interface. Connect an assistant to approved knowledge sources, preserve access restrictions, and provide references that help users check its answers.',
      scopeItems: [
        'Rapid retrieval of complex SOPs and operating procedures',
        'Interactive navigation of technical documentation',
        'Answering questions on internal compliance & policies',
        'Document-level and chunk-level citation linking',
        'Preservation of granular departmental read permissions',
      ],
      callToAction: 'Design Knowledge Assistant',
    },
    {
      id: 'doc-processing',
      title: 'Intelligent Document Processing',
      tag: 'Deterministic Extraction',
      icon: FileText,
      color: '#DC2626',
      desc: 'Turn incoming documents into information your workflows can use. Combine document recognition, extraction, and validation to prepare structured records and surface exceptions for review.',
      scopeItems: [
        'Complex logistics manifests & bill of lading intake',
        'Multi-currency financial documents & invoices',
        'Operational & medical records with strict validation',
        'Automated mathematical and ledger reconciliation',
        'Exception staging queues with human-in-the-loop review',
      ],
      callToAction: 'Audit Document Pipeline',
    },
    {
      id: 'production-ops',
      title: 'Integration & Production Operation',
      tag: 'LLMOps & SRE',
      icon: Layers,
      color: '#0284C7',
      desc: 'Connect AI applications to enterprise APIs, databases, and existing tools. Define tool permissions, approval gates, failure handling, and operational monitoring so the application can be supported after launch.',
      scopeItems: [
        'Task accuracy & hallucination evaluation suites',
        'Real-time exception rate monitoring & alerts',
        'Latency optimization & time-to-first-token tuning',
        'Hardware resource utilization & compute autoscaling',
        'Cost-per-completed-workflow budgeting & governance',
      ],
      callToAction: 'Review Integration Framework',
    },
  ];

  const controlPoints = [
    {
      title: 'Set boundaries for every action',
      icon: Lock,
      desc: 'Define which systems an agent can access and what it is allowed to change. Introduce explicit approval steps where actions affect business records or external parties.',
      detail: 'Granular read-only vs. read-write permissions, human sign-off for financial transactions, and cryptographic API gatekeeping.',
    },
    {
      title: 'Make outputs reviewable',
      icon: Eye,
      desc: 'Use source references, structured validation, and exception queues to help employees assess results. AI outputs can be incorrect; the workflow should make those errors easier to catch and resolve.',
      detail: 'Exact page/line citations, deterministic schema verification, confidence scoring, and side-by-side visual diff comparisons.',
    },
    {
      title: 'Define data handling deliberately',
      icon: Sliders,
      desc: 'Agree on deployment location, information access, and retention requirements during architecture design. Application data, model-provider settings, logs, and backups all need to be considered together.',
      detail: 'Air-gapped deployment options, zero training on customer data, ephemeral in-memory processing, and automated audit logs.',
    },
  ];

  const engagementSteps = [
    {
      step: '01',
      title: 'Scope the Task',
      desc: 'Identify users, systems, risks, and a measurable definition of success.',
      deliverable: 'Task Charter & Success Matrix',
    },
    {
      step: '02',
      title: 'Validate the Approach',
      desc: 'Test a focused implementation on representative business examples.',
      deliverable: 'Functional Proof of Concept',
    },
    {
      step: '03',
      title: 'Integrate the Workflow',
      desc: 'Add system connections, access controls, approval steps, and exception handling.',
      deliverable: 'Enterprise-Hardened Architecture',
    },
    {
      step: '04',
      title: 'Prepare for Operation',
      desc: 'Establish monitoring, documentation, ownership, and a process for improvements.',
      deliverable: 'Production Handover & SLA Runbook',
    },
  ];

  const faqs = [
    {
      question: 'Can the solution run within our infrastructure?',
      answer:
        'Private deployment is central to NAIR.AI’s positioning. The appropriate arrangement depends on your systems, model requirements, available hardware, and operational constraints. These are assessed during architecture planning.',
    },
    {
      question: 'Does every project need multiple agents?',
      answer:
        'No. A single application or a defined automation may be sufficient. Multiple agents are useful when a workflow benefits from distinct responsibilities and coordinated tool use.',
    },
    {
      question: 'How do we know whether the application works well enough?',
      answer:
        'Agree on representative tasks and acceptance criteria before rollout. Evaluate both successful completion and failure cases, including when the application should request human help.',
    },
    {
      question: 'Can we begin with one process?',
      answer:
        'Yes. A bounded workflow provides a practical way to test value, understand integration requirements, and decide what to expand next.',
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0A192F] selection:bg-[#1D4ED8] selection:text-white pt-24 pb-24 overflow-hidden">
      {/* Interactive Motion Dot Canvas Background covering the entire subpage */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <MotionDotCanvas
          dotCount={75}
          deflectionRadius={150}
          dotColor="rgba(29, 78, 216, "
          lineColor="rgba(56, 189, 248, "
        />
      </div>

      {/* Ambient gradient orbs for high-end aesthetic depth */}
      <div className="fixed top-20 left-10 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-20 right-10 w-[30rem] h-[30rem] bg-indigo-200/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Top Breadcrumb & Quick Navigation Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-4 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-slate-500">
            <button
              onClick={onBackToHome}
              className="hover:text-[#1D4ED8] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="text-slate-300">/</span>
            <button
              onClick={() => onNavigate('services')}
              className="hover:text-[#1D4ED8] transition-colors cursor-pointer"
            >
              Services
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-[#1D4ED8] font-extrabold">Artificial Intelligence</span>
          </div>

          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#1D4ED8] hover:text-[#0A192F] transition-colors cursor-pointer group"
          >
            <div className="w-6 h-6 rounded-full bg-blue-50 group-hover:bg-[#1D4ED8] text-[#1D4ED8] group-hover:text-white border border-blue-200 flex items-center justify-center transition-all">
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
            </div>
            <span>All Services</span>
          </button>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Positioning */}
          <div className="lg:col-span-7 text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#1D4ED8] font-mono text-xs font-bold tracking-wider uppercase mb-5 shadow-xs">
                <BrainCircuit className="w-3.5 h-3.5" />
                <span>Enterprise AI Development & Automation</span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A192F] leading-[1.05] mb-6">
                Put AI to work inside your <span className="text-[#1D4ED8]">enterprise</span>.
              </h1>

              <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed mb-4">
                Build AI applications that help your teams process documents, retrieve information, and complete complex workflows. NAIR.AI brings model selection, agent orchestration, and enterprise integration together around the work your business needs to get done.
              </p>

              <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 backdrop-blur-sm mb-8 text-xs sm:text-sm text-slate-700 font-medium flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>Designed around your infrastructure, data requirements, and approval processes.</span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onBookCall('Artificial Intelligence Project')}
                  className="px-8 py-3.5 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full transition-all shadow-xl shadow-red-600/25 hover:scale-102 flex items-center gap-2.5 cursor-pointer"
                >
                  <span>Discuss your AI project</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                <a
                  href="#ai-services"
                  className="px-7 py-3.5 bg-white hover:bg-slate-100 text-[#0A192F] border border-slate-300 font-mono text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full transition-all shadow-xs cursor-pointer flex items-center gap-2"
                >
                  <span>Explore AI services</span>
                  <ChevronDown className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Live Interactive Workflow Simulator */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white border border-slate-200/90 shadow-2xl p-6 sm:p-7 backdrop-blur-md relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="font-mono text-xs font-bold text-slate-500 ml-2">
                    WORKFLOW RUNTIME
                  </span>
                </div>
                <span className="font-mono text-[11px] text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded-md">
                  LIVE PIPELINE
                </span>
              </div>

              {/* Simulation Step Tabs */}
              <div className="grid grid-cols-4 gap-1.5 mb-5 p-1 bg-slate-100 rounded-xl">
                {simulationSteps.map((step, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveSimStep(idx)}
                    className={`py-2 text-center rounded-lg font-mono text-xs font-extrabold transition-all cursor-pointer ${
                      activeSimStep === idx
                        ? 'bg-white text-[#1D4ED8] shadow-xs'
                        : 'text-slate-500 hover:text-[#0A192F]'
                    }`}
                  >
                    {step.step}
                  </button>
                ))}
              </div>

              {/* Active Step Panel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSimStep}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4 text-left"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="px-2.5 py-0.5 rounded-md font-mono text-[11px] font-bold uppercase tracking-wider"
                      style={{
                        backgroundColor: `${simulationSteps[activeSimStep].accentColor}15`,
                        color: simulationSteps[activeSimStep].accentColor,
                      }}
                    >
                      {simulationSteps[activeSimStep].badge}
                    </span>
                    <span className="font-mono text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-sm">
                      {simulationSteps[activeSimStep].status}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-[#0A192F]">
                    {simulationSteps[activeSimStep].title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {simulationSteps[activeSimStep].desc}
                  </p>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs font-mono">
                    <div className="flex justify-between items-center text-slate-500">
                      <span>Stack:</span>
                      <span className="text-[#0A192F] font-bold">
                        {simulationSteps[activeSimStep].tech}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-slate-500 pt-1 border-t border-slate-200/60">
                      <span>Benchmark:</span>
                      <span className="text-blue-600 font-bold">
                        {simulationSteps[activeSimStep].metrics}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>Deterministic Execution</span>
                    <button
                      onClick={() => onBookCall(`Workflow Step: ${simulationSteps[activeSimStep].title}`)}
                      className="font-bold text-[#1D4ED8] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Simulate this workflow</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION: "Start with the workflow" */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-28">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#0A192F] via-[#0D2140] to-[#112A4F] text-white shadow-2xl relative overflow-hidden">
          {/* Subtle canvas overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.15),transparent_50%)]" />

          <div className="relative z-10 max-w-4xl text-left space-y-6">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
              Methodology & Philosophy
            </span>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Start with the workflow.
            </h2>

            <p className="text-slate-300 text-base sm:text-xl font-normal leading-relaxed">
              An AI project needs a clear job to do. That might mean reviewing incoming documents, reconciling information between systems, or preparing an action for an employee to approve.
            </p>

            <p className="text-slate-400 text-sm sm:text-base font-normal leading-relaxed">
              We help you define that job, identify the information and integrations it requires, and establish how to evaluate the result. From there, we design an application that fits your operating environment.
            </p>

            {/* 3 Core Workflow Execution Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#1D4ED8] flex items-center justify-center text-white font-mono font-extrabold text-xs">
                  01
                </div>
                <h4 className="font-display font-bold text-base text-white">Define the Job</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Pinpoint manual bottlenecks, repetitive handoffs, and deterministic acceptance criteria.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#38BDF8] flex items-center justify-center text-[#0A192F] font-mono font-extrabold text-xs">
                  02
                </div>
                <h4 className="font-display font-bold text-base text-white">Map Integrations</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Connect live data sources, enterprise systems of record, and tool authorization policies.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#DC2626] flex items-center justify-center text-white font-mono font-extrabold text-xs">
                  03
                </div>
                <h4 className="font-display font-bold text-base text-white">Evaluate & Fit</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Establish quantitative benchmarks, human escalation thresholds, and private infrastructure constraints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR AI SERVICES (6 Core Services) */}
      <section id="ai-services" className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-28">
        <div className="text-left mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1D4ED8] mb-3 block">
            Core Service Modules
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A192F] mb-4">
            Our AI Services.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
            Engineering end-to-end intelligence architectures built around your proprietary data, existing tooling, and stringent operational boundaries.
          </p>
        </div>

        {/* 6 High-Fidelity Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {aiServices.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.id}
                className="rounded-3xl bg-white border border-slate-200/90 p-7 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group text-left relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span
                      className="px-2.5 py-0.5 rounded-md font-mono text-[10px] uppercase font-bold tracking-wider"
                      style={{ backgroundColor: `${service.color}15`, color: service.color }}
                    >
                      {service.tag}
                    </span>
                    <span className="font-mono text-[10px] text-slate-500 font-bold">
                      Enterprise Grade
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <IconComp className="w-6 h-6" style={{ color: service.color }} />
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#0A192F] mb-3 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {service.desc}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="font-mono text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                      Scope & Capabilities:
                    </span>
                    <ul className="space-y-1.5">
                      {service.scopeItems.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2
                            className="w-3.5 h-3.5 shrink-0 mt-0.5"
                            style={{ color: service.color }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <button
                    type="button"
                    onClick={() => onBookCall(`AI Service: ${service.title}`)}
                    className="w-full py-2.5 px-4 rounded-xl font-mono text-xs uppercase tracking-wider font-extrabold transition-all flex items-center justify-between text-white cursor-pointer hover:opacity-95"
                    style={{ backgroundColor: service.color }}
                  >
                    <span>{service.callToAction}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION: "Control where it matters" */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-28">
        <div className="text-left mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-3 block">
            Governance & Boundaries
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A192F] mb-4">
            Control where it matters.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
            Enterprise adoption fails when systems are unpredictable or ungoverned. We bake explicit authorization boundaries and verifiable audit trails into every interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {controlPoints.map((ctrl, idx) => {
            const IconComp = ctrl.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all text-left space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8]">
                  <IconComp className="w-6 h-6" />
                </div>

                <h3 className="font-display font-extrabold text-xl text-[#0A192F]">
                  {ctrl.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {ctrl.desc}
                </p>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 text-xs text-slate-700 font-mono">
                  <span className="font-bold text-[#1D4ED8] block mb-1">Architecture Standard:</span>
                  <span>{ctrl.detail}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION: "How an engagement takes shape" (4 Steps) */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-28">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl text-left">
          <div className="mb-10">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1D4ED8] mb-3 block">
              Engagement Lifecycle
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0A192F] mb-3">
              How an engagement takes shape.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-3xl">
              Delivery milestones are agreed around the scope and readiness of your environment. We operate with radical transparency at each delivery stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {engagementSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between space-y-4 relative group hover:bg-blue-50/50 hover:border-blue-300 transition-all"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[#1D4ED8] block mb-2">
                    Phase {step.step}
                  </span>
                  <h3 className="font-display font-extrabold text-lg text-[#0A192F] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60">
                  <span className="font-mono text-[10px] uppercase font-bold text-slate-500 block">
                    Deliverable:
                  </span>
                  <span className="font-mono text-xs font-bold text-[#0A192F]">
                    {step.deliverable}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANION CROSS-LINK: "Build on information you can use" */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-28">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-900 via-[#1D4ED8] to-blue-800 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 text-left relative overflow-hidden">
          <div className="space-y-4 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider">
              <Database className="w-3.5 h-3.5" />
              <span>Foundation Architecture</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white">
              Build on information you can use.
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed font-normal">
              Disconnected sources and inconsistent records can limit an AI application before it reaches users. Our Data & AI Foundation services address the integration, organization, and access requirements behind the application.
            </p>
          </div>

          <div className="shrink-0 relative z-10">
            <button
              type="button"
              onClick={() => onNavigate('data-and-ai')}
              className="px-7 py-3.5 bg-white text-[#1D4ED8] hover:bg-slate-100 font-mono text-xs uppercase tracking-wider font-extrabold rounded-full transition-all shadow-lg flex items-center gap-2 cursor-pointer group"
            >
              <span>Explore Data & AI Foundations</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 mb-28 text-left">
        <div className="text-center mb-10">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1D4ED8] mb-2 block">
            Clear Answers
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0A192F]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/90 shadow-xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-[#0A192F]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-blue-100 text-[#1D4ED8]' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-6 sm:px-6 text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* CLOSING CTA SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#F0F7FF] via-[#E0F2FE] to-[#EFF6FF] border border-blue-200/90 text-[#0A192F] text-center shadow-xl relative overflow-hidden">
          <MotionDotCanvas dotCount={40} deflectionRadius={120} />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1D4ED8] block">
              Engagement Initiation
            </span>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A192F]">
              Bring us a workflow worth improving.
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Tell us what your team handles today, where the process gets stuck, and what a better outcome would look like.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onBookCall('AI Workflow Discussion')}
                className="px-8 py-3.5 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full transition-all shadow-xl shadow-red-600/30 hover:scale-102 flex items-center gap-2 cursor-pointer"
              >
                <span>Discuss your AI project</span>
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

export default ArtificialIntelligencePage;
