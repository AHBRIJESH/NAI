import React, { useState, useMemo } from 'react';
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
} from 'lucide-react';

interface FAQPageProps {
  onBackToHome: () => void;
  onBookCall: (service?: string) => void;
  onOpenAssessment: () => void;
}

interface FAQItem {
  id: string;
  category: 'Security & Privacy' | 'Implementation & Sprints' | 'Agentic Workflows' | 'Governance & Models' | 'Integrations & APIs';
  question: string;
  answer: string;
  badge?: string;
}

const CATEGORIES = [
  'All Topics',
  'Security & Privacy',
  'Implementation & Sprints',
  'Agentic Workflows',
  'Governance & Models',
  'Integrations & APIs',
] as const;

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'data-privacy',
    category: 'Security & Privacy',
    question: 'How does NAIR.AI protect our proprietary enterprise data?',
    answer:
      'We enforce zero-retention enterprise agreements with foundation model providers, meaning your corporate data is never stored, indexed, cached, or utilized to retrain public models. For regulated organizations in finance, healthcare, and defense, we deploy isolated private VPC containers or sovereign self-hosted open-weight LLMs (such as Llama 3 and DeepSeek) running strictly within your internal security boundary.',
    badge: 'Zero-Retention NDA',
  },
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
    id: 'hallucination-prevention',
    category: 'Governance & Models',
    question: 'How do you eliminate model hallucination and ensure deterministic precision in production?',
    answer:
      'We never deploy raw probabilistic LLMs directly to mission-critical business logic. Instead, our architectures combine multi-agent consensus validation, structured Pydantic schema enforcement, deterministic rule engines, and strict confidence thresholds. If an autonomous output falls below verified thresholds, it is automatically routed to human-in-the-loop review with a complete forensic audit log.',
    badge: 'Deterministic Layer',
  },
  {
    id: 'erp-crm-integration',
    category: 'Integrations & APIs',
    question: 'Can NAIR.AI integrate with our existing ERP, CRM, and proprietary databases?',
    answer:
      'Yes. Our multi-agent orchestrators connect via enterprise-grade REST APIs, GraphQL, secure webhooks, and authenticated database connectors. We regularly integrate with Salesforce, HubSpot, SAP S/4HANA, NetSuite, Zendesk, QuickBooks, Workday, Snowflake, Postgres, and proprietary on-premises legacy mainframes with VPC peering.',
    badge: 'Native Connectors',
  },
  {
    id: 'multi-agent-orchestration',
    category: 'Agentic Workflows',
    question: 'What is the practical difference between a simple chatbot and an autonomous multi-agent pipeline?',
    answer:
      'A chatbot passively responds to user text. An autonomous multi-agent pipeline proactively executes end-to-end multi-step business operations: triaging incoming requests, pulling real-time records across multiple systems, verifying calculations with deterministic scripts, generating drafts, and triggering downstream actions (such as posting ledger entries or generating customer contracts) under strict role-based access control.',
    badge: 'Autonomous Agents',
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
    id: 'custom-rag-models',
    category: 'Governance & Models',
    question: 'How do you build enterprise RAG (Retrieval-Augmented Generation) without data leakage?',
    answer:
      'Our RAG architectures enforce strict document-level and user-level Access Control Lists (ACLs). When an employee or agent queries the knowledge base, vector retrieval queries only surface chunks that the requester has cryptographic permission to read. Sensitive corporate documents never bleed across permission tiers or departments.',
    badge: 'Granular ACLs',
  },
  {
    id: 'pricing-structure',
    category: 'Implementation & Sprints',
    question: 'What does the engagement and pricing structure look like?',
    answer:
      'We offer modular 90-day milestone sprint contracts with transparent fixed deliverable pricing, as well as fractional Chief AI Officer retainer tiers for ongoing architecture governance. Every engagement begins with an objective technical feasibility audit and a quantified ROI roadmap so leadership knows exact timeline and payback projections prior to capital commitment.',
    badge: 'Transparent Milestone Pricing',
  },
];

export const FAQPage: React.FC<FAQPageProps> = ({
  onBackToHome,
  onBookCall,
  onOpenAssessment,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Topics');
  const [openIndex, setOpenIndex] = useState<string | null>('data-privacy');

  const filteredFaqs = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All Topics' || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const toggleAccordion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#FFFDEE] text-[#06231D] selection:bg-[#E3EF26] selection:text-[#06231D] pt-24 pb-20">
      
      {/* Top Breadcrumb Header Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-6 pb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider font-extrabold text-[#076653] hover:text-[#06231D] transition-colors group cursor-pointer"
        >
          <div className="w-7 h-7 rounded-full bg-[#E2FBCE] group-hover:bg-[#E3EF26] text-[#06231D] flex items-center justify-center transition-all">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          </div>
          <span>Back to Home Overview</span>
        </button>
      </div>

      {/* Main FAQ Hero Header */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center mb-16">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full font-mono text-[11px] tracking-[0.26em] uppercase font-extrabold bg-[#E2FBCE] text-[#06231D] border border-[#076653]/30 shadow-xs mb-6">
          <HelpCircle className="w-3.5 h-3.5 text-[#076653]" />
          <span>ENTERPRISE KNOWLEDGE BASE & FAQ</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#06231D] mb-6 leading-[1.04]">
          Answers on Safety, Scale, &amp; <span className="text-[#076653]">Enterprise AI</span>.
        </h1>

        <p className="text-base sm:text-xl text-[#0C342C]/80 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          Everything growing enterprise leadership needs to know regarding sovereign data privacy, deterministic guardrails, multi-agent pipelines, and rapid 90-day deployment roadmaps.
        </p>

        {/* Real-time Search Input */}
        <div className="relative max-w-xl mx-auto mb-10">
          <div className="absolute inset-y-0 left-0 pl-4.5 flex items-center pointer-events-none text-[#076653]">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search security protocols, timelines, ERP integrations, SLAs..."
            className="w-full pl-12 pr-5 py-4 rounded-full bg-white border border-[#0C342C]/15 focus:border-[#076653] focus:ring-3 focus:ring-[#076653]/15 text-sm sm:text-base text-[#06231D] placeholder-[#0C342C]/45 shadow-sm transition-all focus:outline-none font-normal"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider uppercase font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#06231D] text-[#FFFDEE] shadow-md scale-102'
                  : 'bg-white/80 hover:bg-[#E2FBCE] text-[#0C342C] border border-[#0C342C]/15 shadow-2xs'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Accordion Questions List */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 mb-24">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#0C342C]/10 p-8 shadow-xs">
            <Sparkles className="w-8 h-8 text-[#076653] mx-auto mb-3" />
            <h3 className="font-display font-bold text-xl text-[#06231D] mb-2">No matching questions found</h3>
            <p className="text-sm text-[#0C342C]/75 mb-6">
              Try searching with different terms or reset your category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Topics');
              }}
              className="px-6 py-2.5 rounded-full font-mono text-xs uppercase font-bold bg-[#E2FBCE] text-[#06231D] hover:bg-[#E3EF26] transition-colors"
            >
              Reset Search Filter
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openIndex === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#076653]/40 shadow-xl shadow-[#076653]/8'
                      : 'bg-white/70 hover:bg-white border-[#0C342C]/10 hover:border-[#076653]/25 shadow-xs'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-6 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-2 pr-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#076653] font-bold px-2 py-0.5 rounded-md bg-[#E2FBCE]/60">
                          {faq.category}
                        </span>
                        {faq.badge && (
                          <span className="font-mono text-[10px] uppercase tracking-widest text-[#06231D] font-extrabold px-2 py-0.5 rounded-md bg-[#E3EF26]/70">
                            {faq.badge}
                          </span>
                        )}
                      </div>
                      <h2 className="font-display font-bold text-lg sm:text-xl text-[#06231D] leading-snug">
                        {faq.question}
                      </h2>
                    </div>

                    <div
                      className={`p-2.5 rounded-full border border-[#0C342C]/10 transition-all duration-300 shrink-0 mt-1 ${
                        isOpen
                          ? 'rotate-180 bg-[#076653] text-[#E3EF26]'
                          : 'bg-[#FFFDEE] text-[#0C342C]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-8 pt-1 text-base sm:text-lg text-[#0C342C]/85 leading-relaxed border-t border-[#076653]/10 font-normal">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Bottom Advisory Consultation Card */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        <div className="rounded-3xl bg-[#06231D] text-[#FFFDEE] p-8 sm:p-14 border border-[#076653]/35 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#076653]/30 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#E3EF26]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.24em] text-[#E3EF26] font-bold mb-4 px-3.5 py-1.5 rounded-full bg-[#0C342C] border border-[#076653]/40">
              <Cpu className="w-3.5 h-3.5 text-[#E3EF26]" />
              <span>DIRECT ARCHITECT ADVISORY</span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFFDEE] tracking-tight mb-4 leading-tight">
              Have a Specific Architectural or Regulatory Inquiry?
            </h3>

            <p className="text-base sm:text-lg text-[#E2FBCE]/85 leading-relaxed mb-8 font-normal">
              Schedule an objective 30-minute feasibility session directly with our senior AI systems architects. We will examine your internal stack, compliance constraints, and provide deterministic ROI projections.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onBookCall('Enterprise Architecture Consultation')}
                className="px-8 py-4 bg-[#E3EF26] hover:bg-[#d2de1e] text-[#06231D] font-mono text-xs sm:text-sm uppercase tracking-wider font-black rounded-full shadow-lg shadow-[#E3EF26]/20 transition-all flex items-center justify-center gap-3 cursor-pointer hover:scale-102"
              >
                <span>Book Architecture Call</span>
                <ArrowRight className="w-4 h-4 text-[#06231D] stroke-[2.5]" />
              </button>

              <button
                onClick={onOpenAssessment}
                className="px-8 py-4 font-mono text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full border border-[#076653]/40 bg-[#0C342C] hover:bg-[#076653] text-[#FFFDEE] transition-all flex items-center justify-center gap-2 cursor-pointer"
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
          className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider font-bold text-[#076653] hover:text-[#06231D] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage Overview</span>
        </button>
      </div>

    </div>
  );
};

export default FAQPage;
