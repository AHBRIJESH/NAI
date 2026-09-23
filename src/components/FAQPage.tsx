import React, { useState, useMemo, useEffect } from 'react';
import {
  ChevronDown,
  HelpCircle,
  Search,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Lock,
  Zap,
  CheckCircle2,
  Sparkles,
  X,
  SlidersHorizontal,
  ChevronUp,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { SubPageMotionBackground } from './SubPageMotionBackground';

interface FAQPageProps {
  onBackToHome: () => void;
  onBookCall: (service?: string) => void;
  onOpenAssessment: () => void;
}

export type FAQCategory =
  | 'Security & Privacy'
  | 'Implementation & Sprints'
  | 'Agentic Workflows'
  | 'Governance & Models'
  | 'Integrations & APIs';

interface FAQItem {
  id: string;
  category: FAQCategory;
  question: string;
  answer: string;
  badge?: string;
}

const CATEGORIES: ('All Topics' | FAQCategory)[] = [
  'All Topics',
  'Security & Privacy',
  'Implementation & Sprints',
  'Agentic Workflows',
  'Governance & Models',
  'Integrations & APIs',
];

const FAQ_ITEMS: FAQItem[] = [
  // 1. Security & Privacy
  {
    id: 'data-privacy',
    category: 'Security & Privacy',
    question: 'How does NAIR.AI protect our proprietary enterprise data?',
    answer:
      'We enforce zero-retention enterprise agreements with foundation model providers, meaning your corporate data is never stored, indexed, cached, or utilized to retrain public models. For regulated organizations in finance, healthcare, and defense, we deploy isolated private VPC containers or sovereign self-hosted open-weight LLMs (such as Llama 3 and DeepSeek) running strictly within your internal security boundary.',
    badge: 'Zero-Retention NDA',
  },
  {
    id: 'ip-ownership',
    category: 'Security & Privacy',
    question: 'Who owns the intellectual property and code created during our engagement?',
    answer:
      'You do. 100% of custom pipelines, domain-tuned adapters, system prompts, integration middleware, and automated workflows developed for your company are your exclusive intellectual property. We do not lock clients into proprietary black-box platforms; your team retains complete ownership and code portability.',
    badge: '100% Client IP',
  },
  {
    id: 'compliance-certifications',
    category: 'Security & Privacy',
    question: 'Are NAIR.AI architectures aligned with SOC 2 Type II, HIPAA, and GDPR standards?',
    answer:
      'Yes. Our reference architectures are specifically engineered to conform with SOC 2 Type II, ISO 27001, HIPAA BAA provisions, and GDPR Article 28 data processor requirements. We mandate end-to-end TLS 1.3 encryption in transit, AES-256 at rest, strict zero-trust credential isolation, and comprehensive cryptographic audit trails.',
    badge: 'SOC2 & HIPAA Ready',
  },
  {
    id: 'air-gapped-deployment',
    category: 'Security & Privacy',
    question: 'Can NAIR.AI pipelines deploy into physically air-gapped or on-premises server environments?',
    answer:
      'Absolutely. For defense contractors and sovereign entities requiring complete network isolation, we deploy entirely air-gapped Kubernetes clusters running containerized vLLM and TensorRT-LLM inference engines. These run with zero outbound public internet egress, reading strictly from internal mirrored package registries.',
    badge: 'Air-Gapped Sovereign',
  },
  {
    id: 'cryptographic-auditing',
    category: 'Security & Privacy',
    question: 'How do you audit and log autonomous actions taken by AI agents?',
    answer:
      'Every autonomous decision, tool invocation, and API payload is recorded into an append-only, tamper-evident cryptographic audit stream. Compliance teams can trace the exact prompt context, intermediate reasoning trace, deterministic validation checks, and output state for every single agent execution.',
    badge: 'Forensic Audit Stream',
  },

  // 2. Implementation & Sprints
  {
    id: 'timeline-sprints',
    category: 'Implementation & Sprints',
    question: 'How quickly can we expect working results in our organization?',
    answer:
      'Most organizations have their first high-impact autonomous pipeline operating in production within 3 to 4 weeks. We follow a rapid 90-day milestone sprint framework: Week 1 discovery and vulnerability audit, Weeks 2–3 private container sandbox build and testing, Week 4 initial departmental deployment. We focus on high-yield low-friction wins first to deliver measurable ROI before scaling swarms across further departments.',
    badge: '3–4 Week Sprints',
  },
  {
    id: 'team-requirements',
    category: 'Implementation & Sprints',
    question: 'Do we need an internal team of AI researchers or machine learning PhDs to work with NAIR.AI?',
    answer:
      'No. NAIR.AI functions as your dedicated external AI engineering, architecture, and deployment vanguard. We handle discovery, mathematical pipeline design, security containment, API orchestration, and stress testing. Simultaneously, we provide hands-on departmental prompt labs and training playbooks so your existing software engineers and operators become proficient system managers.',
    badge: 'Turnkey Partnership',
  },
  {
    id: 'pricing-structure',
    category: 'Implementation & Sprints',
    question: 'What does the engagement and pricing structure look like?',
    answer:
      'We offer modular 90-day milestone sprint contracts with transparent fixed deliverable pricing, as well as fractional Chief AI Officer retainer tiers for ongoing architecture governance. Every engagement begins with an objective technical feasibility audit and a quantified ROI roadmap so leadership knows exact timeline and payback projections prior to capital commitment.',
    badge: 'Milestone Fixed Pricing',
  },
  {
    id: 'slas-support',
    category: 'Implementation & Sprints',
    question: 'What SLAs and ongoing operational support do you guarantee after deployment?',
    answer:
      'Production deployments include our 99.9% uptime inference SLA, sub-hour critical incident response, and active synthetic telemetry monitoring. We proactively monitor model drift, schema changes, and upstream API deprecations, ensuring systems adapt seamlessly to enterprise software updates.',
    badge: '99.9% Uptime SLA',
  },
  {
    id: 'feasibility-audit',
    category: 'Implementation & Sprints',
    question: 'What occurs during the initial Technical Feasibility & ROI Audit?',
    answer:
      'Our senior architects conduct a structured 30-minute discovery into your existing software topography, data pipeline readiness, manual labor bottlenecks, and security constraints. Within 48 hours, we deliver a quantified feasibility matrix documenting estimated labor hours reclaimed, infrastructure costs, and delivery milestones.',
    badge: 'Quantified ROI Audit',
  },

  // 3. Agentic Workflows
  {
    id: 'multi-agent-orchestration',
    category: 'Agentic Workflows',
    question: 'What is the practical difference between a simple chatbot and an autonomous multi-agent pipeline?',
    answer:
      'A chatbot passively responds to user text. An autonomous multi-agent pipeline proactively executes end-to-end multi-step business operations: triaging incoming requests, pulling real-time records across multiple systems, verifying calculations with deterministic scripts, generating drafts, and triggering downstream actions (such as posting ledger entries or generating customer contracts) under strict role-based access control.',
    badge: 'Autonomous Swarms',
  },
  {
    id: 'human-in-the-loop',
    category: 'Agentic Workflows',
    question: 'How does Human-in-the-Loop (HITL) review work in production?',
    answer:
      'We build dual-key consensus boundaries. For critical operations—such as payments exceeding configured thresholds, contract signatures, or sensitive medical authorizations—the agent prepares the verified artifact, flags the exact reasoning delta, and routes an actionable one-click approval ticket to designated personnel via Slack, Teams, or email.',
    badge: 'Dual-Key HITL',
  },
  {
    id: 'agent-consensus',
    category: 'Agentic Workflows',
    question: 'How do multiple autonomous agents reach consensus without conversational deadlock?',
    answer:
      'We employ hierarchical orchestrator-worker graph architectures with strict step budgets, deterministic arbitration protocols, and typed Pydantic message contracts. Specialization prevents hallucination: research agents gather evidence, validator agents critique hypotheses against ground truth, and executive agents synthesize finalized output.',
    badge: 'Consensus Protocols',
  },
  {
    id: 'stateful-recovery',
    category: 'Agentic Workflows',
    question: 'How do agent swarms recover from transient API timeouts or external system failures?',
    answer:
      'All execution graphs are stateful and idempotent. If a downstream CRM rate-limits or an ERP connection drops, the swarm pauses the execution checkpoint to durable distributed storage (Redis/Postgres), applies exponential backoff with jitter, and resumes without losing intermediate calculation states.',
    badge: 'Idempotent Checkpoints',
  },
  {
    id: 'tool-calling-capabilities',
    category: 'Agentic Workflows',
    question: 'Which tools and environments can autonomous agents safely interact with?',
    answer:
      'Agents operate inside sandboxed gVisor/Docker containers with restricted network egress. They can execute compiled Python analytics scripts, query read-only database replicas via parametrized SQL, call validated REST/GraphQL endpoints, and control authenticated browser sessions without accessing host systems.',
    badge: 'Sandboxed Tooling',
  },

  // 4. Governance & Models
  {
    id: 'hallucination-prevention',
    category: 'Governance & Models',
    question: 'How do you eliminate model hallucination and ensure deterministic precision in production?',
    answer:
      'We never deploy raw probabilistic LLMs directly to mission-critical business logic. Instead, our architectures combine multi-agent consensus validation, structured Pydantic schema enforcement, deterministic rule engines, and strict confidence thresholds. If an autonomous output falls below verified thresholds, it is automatically routed to human-in-the-loop review with a complete forensic audit log.',
    badge: 'Deterministic Layer',
  },
  {
    id: 'custom-rag-models',
    category: 'Governance & Models',
    question: 'How do you build enterprise RAG (Retrieval-Augmented Generation) without data leakage?',
    answer:
      'Our RAG architectures enforce strict document-level and user-level Access Control Lists (ACLs). When an employee or agent queries the knowledge base, vector retrieval queries only surface chunks that the requester has cryptographic permission to read. Sensitive corporate documents never bleed across permission tiers or departments.',
    badge: 'Granular ACLs',
  },
  {
    id: 'foundation-model-selection',
    category: 'Governance & Models',
    question: 'How do you decide between proprietary API models (OpenAI, Claude) and open-weight models (Llama 3, DeepSeek)?',
    answer:
      'We use a task-calibrated model routing layer. Frontier proprietary models are utilized where high-level multi-step contextual synthesis is required; open-weight sovereign models fine-tuned with LoRA/QLoRA are deployed in private VPCs where strict latency, zero-retention compliance, and fixed operational token economics govern.',
    badge: 'Hybrid Model Router',
  },
  {
    id: 'evals-and-drift',
    category: 'Governance & Models',
    question: 'How do you protect against model drift and regressions over time?',
    answer:
      'We implement automated CI/CD continuous evaluation suites. Every prompt adjustment or model version upgrade is automatically scored against a suite of hundreds of synthetic and historical golden-test enterprise edge cases prior to deployment, ensuring accuracy never degrades below baseline SLAs.',
    badge: 'Continuous Evals CI/CD',
  },
  {
    id: 'regulatory-compliance',
    category: 'Governance & Models',
    question: 'How do your architectures comply with the EU AI Act and NIST AI Risk Management Framework?',
    answer:
      'We generate machine-readable system cards, risk categorization assessments, algorithmic explainability logs, and human oversight mechanisms directly conforming with the EU AI Act High-Risk classification guidelines and NIST AI RMF Core profiles.',
    badge: 'EU AI Act & NIST Aligned',
  },

  // 5. Integrations & APIs
  {
    id: 'erp-crm-integration',
    category: 'Integrations & APIs',
    question: 'Can NAIR.AI integrate with our existing ERP, CRM, and proprietary databases?',
    answer:
      'Yes. Our multi-agent orchestrators connect via enterprise-grade REST APIs, GraphQL, secure webhooks, and authenticated database connectors. We regularly integrate with Salesforce, HubSpot, SAP S/4HANA, NetSuite, Zendesk, QuickBooks, Workday, Snowflake, Postgres, and proprietary on-premises legacy mainframes with VPC peering.',
    badge: 'Native Connectors',
  },
  {
    id: 'streaming-latency',
    category: 'Integrations & APIs',
    question: 'What latency benchmarks do you achieve for real-time customer and employee interactions?',
    answer:
      'For customer-facing and interactive operational tools, we implement edge token streaming and speculative decoding pipelines that achieve sub-60ms time-to-first-token (TTFT). High-throughput batch swarms run in parallelized asynchronous queues to process millions of documents cost-efficiently.',
    badge: 'Sub-60ms TTFT',
  },
  {
    id: 'legacy-mainframe',
    category: 'Integrations & APIs',
    question: 'How do you connect modern agent swarms to legacy on-premise mainframes or terminal systems?',
    answer:
      'Through secure VPC peering, dedicated VPN tunnels, and audited socket/terminal transformation middleware. We bridge modern JSON-RPC payloads into legacy AS400, mainframe, or terminal interfaces without requiring costly re-architectures of your legacy core banking or manufacturing systems.',
    badge: 'Legacy Modernization',
  },
  {
    id: 'multi-cloud',
    category: 'Integrations & APIs',
    question: 'Which cloud providers and on-premise environments are supported for private deployment?',
    answer:
      'We deploy natively across AWS (including AWS GovCloud), Google Cloud Platform, Microsoft Azure, Oracle Cloud Infrastructure (OCI), and on-premises private bare-metal GPU clusters managed with Kubernetes or Nomad.',
    badge: 'Multi-Cloud Native',
  },
  {
    id: 'sso-rbac',
    category: 'Integrations & APIs',
    question: 'How do agent permissions map to our corporate Single Sign-On (SSO) and Active Directory?',
    answer:
      'All agent access tokens and human review consoles interface with your corporate Identity Provider (IdP) via SAML 2.0 or OIDC. We support Okta, Microsoft Entra ID (Azure AD), PingIdentity, and Google Workspace with granular least-privilege role-based access control (RBAC).',
    badge: 'Enterprise SSO & RBAC',
  },
];

function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function HighlightText({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;
  const tokens = query.trim().split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return <>{text}</>;
  const pattern = new RegExp(`(${tokens.map(escapeRegExp).join('|')})`, 'gi');
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, index) =>
        pattern.test(part) ? (
          <mark
            key={index}
            className="bg-yellow-200/90 text-[#0A192F] px-1 py-0.5 rounded-sm font-semibold selection:bg-[#1D4ED8] selection:text-white"
          >
            {part}
          </mark>
        ) : (
          <React.Fragment key={index}>{part}</React.Fragment>
        )
      )}
    </>
  );
}

export const FAQPage: React.FC<FAQPageProps> = ({
  onBackToHome,
  onBookCall,
  onOpenAssessment,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All Topics' | FAQCategory>('All Topics');
  
  // Set of expanded FAQ item IDs (allows multiple open items & expand all)
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set(['data-privacy']));

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      'All Topics': FAQ_ITEMS.length,
    };
    CATEGORIES.forEach((cat) => {
      if (cat !== 'All Topics') {
        counts[cat] = FAQ_ITEMS.filter((item) => item.category === cat).length;
      }
    });
    return counts;
  }, []);

  // Filter items based on active category and tokenized search query
  const filteredFaqs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const queryTokens = query.split(/\s+/).filter(Boolean);

    return FAQ_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All Topics' || item.category === selectedCategory;

      if (!matchesCategory) return false;
      if (queryTokens.length === 0) return true;

      const searchableText = `${item.question} ${item.answer} ${item.category} ${
        item.badge || ''
      }`.toLowerCase();

      return queryTokens.every((token) => searchableText.includes(token));
    });
  }, [searchQuery, selectedCategory]);

  // When changing category, auto-expand the first item of that category if nothing is open
  useEffect(() => {
    if (filteredFaqs.length > 0) {
      const hasAnyOpen = filteredFaqs.some((f) => expandedIds.has(f.id));
      if (!hasAnyOpen) {
        setExpandedIds(new Set([filteredFaqs[0].id]));
      }
    }
  }, [selectedCategory]);

  const toggleAccordion = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const isAllExpanded = useMemo(() => {
    if (filteredFaqs.length === 0) return false;
    return filteredFaqs.every((f) => expandedIds.has(f.id));
  }, [filteredFaqs, expandedIds]);

  const toggleExpandAll = () => {
    if (isAllExpanded) {
      setExpandedIds(new Set());
    } else {
      setExpandedIds(new Set(filteredFaqs.map((f) => f.id)));
    }
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Topics');
  };

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0A192F] selection:bg-[#1D4ED8] selection:text-white pt-24 pb-24 overflow-hidden">
      {/* Light Colored Motion Background with Subtle Hero Sculpture & Ambient Orbs */}
      <SubPageMotionBackground />

      {/* Top Breadcrumb Header Bar */}
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

      {/* Main FAQ Hero Header: Wide Layout */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A192F] mb-6 leading-[1.04]">
            Answers on Safety, Scale, &amp; <span className="text-[#1D4ED8]">Enterprise AI</span>.
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
            Everything growing enterprise leadership needs to know regarding sovereign data privacy, deterministic guardrails, multi-agent pipelines, and rapid 90-day deployment roadmaps.
          </p>
        </div>

        {/* Real-time Search Input with Clear Button */}
        <div className="relative max-w-xl mx-auto mb-8">
          <div className="absolute inset-y-0 left-0 pl-4.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search security, VPC, 3-4 week sprints, ERP, pricing, SLAs..."
            className="w-full pl-12 pr-10 py-4 rounded-full bg-white border border-slate-200 focus:border-[#1D4ED8] focus:ring-3 focus:ring-blue-100 text-sm sm:text-base text-[#0A192F] placeholder-slate-400 shadow-sm transition-all focus:outline-none font-normal"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Filter Pills with Item Counts */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count = categoryCounts[cat] || 0;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  'px-3.5 sm:px-4 py-2 rounded-full font-mono text-xs tracking-wider uppercase font-bold transition-all duration-200 cursor-pointer flex items-center gap-2',
                  isSelected
                    ? 'bg-[#1D4ED8] text-white shadow-md shadow-blue-500/25 scale-102 font-black'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-xs'
                )}
              >
                <span>{cat}</span>
                <span
                  className={cn(
                    'text-[10px] px-1.5 py-0.2 rounded-full font-bold',
                    isSelected
                      ? 'bg-blue-800 text-white'
                      : 'bg-slate-100 text-slate-500'
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Accordion Questions List */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 mb-24">
        
        {/* Active Filter & Results Status Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-3 border-b border-slate-200 text-xs font-mono text-slate-600">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#0A192F]">
              Showing {filteredFaqs.length} {filteredFaqs.length === 1 ? 'result' : 'results'}
            </span>
            {selectedCategory !== 'All Topics' && (
              <span className="px-2 py-0.5 rounded-md bg-blue-50 text-[#1D4ED8] font-bold border border-blue-200">
                Category: {selectedCategory}
              </span>
            )}
            {searchQuery && (
              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-bold border border-slate-200">
                Query: "{searchQuery}"
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {(selectedCategory !== 'All Topics' || searchQuery) && (
              <button
                onClick={handleResetFilters}
                className="text-[#DC2626] hover:underline font-bold cursor-pointer flex items-center gap-1"
              >
                <X className="w-3.5 h-3.5" />
                Reset Filter
              </button>
            )}

            {filteredFaqs.length > 0 && (
              <button
                onClick={toggleExpandAll}
                className="text-[#1D4ED8] hover:text-[#0A192F] font-bold transition-colors cursor-pointer flex items-center gap-1"
              >
                {isAllExpanded ? (
                  <>
                    <ChevronUp className="w-3.5 h-3.5" />
                    Collapse All
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-3.5 h-3.5" />
                    Expand All
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Empty State */}
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 shadow-xs">
            <Sparkles className="w-8 h-8 text-[#1D4ED8] mx-auto mb-3" />
            <h3 className="font-display font-bold text-xl text-[#0A192F] mb-2">No matching questions found</h3>
            <p className="text-sm text-slate-600 mb-6 max-w-md mx-auto">
              No questions matched your current combination of "{selectedCategory}" and search query "{searchQuery}".
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-2.5 rounded-full font-mono text-xs uppercase font-bold bg-[#1D4ED8] text-white hover:bg-blue-800 transition-colors shadow-sm cursor-pointer"
            >
              Reset Filters &amp; View All
            </button>
          </div>
        ) : (
          /* Robust Layout Grid */
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = expandedIds.has(faq.id);
              return (
                <div
                  key={faq.id}
                  className={cn(
                    'rounded-3xl border transition-all duration-200 overflow-hidden bg-white',
                    isOpen
                      ? 'border-[#1D4ED8] shadow-lg shadow-blue-500/8'
                      : 'border-slate-200 hover:border-slate-300 shadow-xs'
                  )}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-6 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-2.5 pr-4 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        {/* Clickable category badge */}
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedCategory(faq.category);
                          }}
                          className="font-mono text-[10px] uppercase tracking-widest text-[#1D4ED8] font-bold px-2.5 py-0.5 rounded-md bg-blue-50 hover:bg-blue-100 border border-blue-100 transition-colors cursor-pointer"
                          title={`Filter by ${faq.category}`}
                        >
                          {faq.category}
                        </span>

                        {faq.badge && (
                          <span className="font-mono text-[10px] uppercase tracking-widest text-[#DC2626] font-extrabold px-2.5 py-0.5 rounded-md bg-red-50 border border-red-100">
                            {faq.badge}
                          </span>
                        )}
                      </div>

                      <h2 className="font-display font-bold text-lg sm:text-xl text-[#0A192F] leading-snug">
                        <HighlightText text={faq.question} query={searchQuery} />
                      </h2>
                    </div>

                    <div
                      className={cn(
                        'p-2.5 rounded-full border border-slate-200 transition-all duration-300 shrink-0 mt-1',
                        isOpen
                          ? 'rotate-180 bg-[#1D4ED8] text-white'
                          : 'bg-slate-50 text-slate-700'
                      )}
                    >
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-8 pb-8 pt-1 text-base sm:text-lg text-slate-700 leading-relaxed border-t border-slate-100 font-normal">
                          <p>
                            <HighlightText text={faq.answer} query={searchQuery} />
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Bottom Advisory Consultation Card */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16 text-left">
        <div className="rounded-3xl bg-[#0A192F] text-white p-8 sm:p-14 border border-blue-900/60 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#1D4ED8]/25 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#DC2626]/15 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                Have a Specific Architectural or Regulatory Inquiry?
              </h3>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Schedule an objective 30-minute feasibility session directly with our senior AI systems architects. We will examine your internal stack, compliance constraints, and provide deterministic ROI projections.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => onBookCall('Enterprise Architecture Consultation')}
                className="w-full px-8 py-4 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-3 cursor-pointer hover:scale-102"
              >
                <span>Book an AI strategy call</span>
                <ArrowRight className="w-4 h-4 text-white stroke-[2.5]" />
              </button>

              <button
                onClick={onOpenAssessment}
                className="w-full px-8 py-4 font-mono text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full border border-blue-700/60 bg-blue-950 hover:bg-blue-900 text-white transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <span>Take Readiness Diagnostic</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Return Button */}
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

export default FAQPage;
