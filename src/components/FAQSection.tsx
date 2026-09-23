import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQSectionProps {
  isCinematicDark: boolean;
}

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'How does NAIR.AI protect our proprietary enterprise data?',
    answer:
      'We enforce zero-retention enterprise agreements with model providers, meaning your corporate data is never stored, indexed, or used to retrain public models. For regulated organizations, we deploy isolated private VPC containers or self-hosted open-weight LLMs (such as Llama 3 and DeepSeek) entirely within your sovereign security perimeter.',
  },
  {
    question: 'How quickly can we see working results in our organization?',
    answer:
      'Most organizations see their first automated production pipeline live within 3 to 4 weeks. We prioritize high-impact, low-friction quick wins (such as invoice auditing, contract triage, or customer ticket routing) to demonstrate measurable ROI before scaling into complex multi-agent architectures.',
  },
  {
    question: 'Do we need an internal team of AI engineers to work with NAIR.AI?',
    answer:
      'No. NAIR.AI functions as your dedicated AI engineering and strategy arm. We handle discovery, architecture, integration, testing, and continuous monitoring. We also provide comprehensive training and adoption playbooks so your operational teams can seamlessly manage and leverage the solutions.',
  },
  {
    question: 'How do you prevent model hallucination and ensure deterministic accuracy?',
    answer:
      'We pair generative models with strict deterministic validation layers, schema enforcement, and multi-agent cross-verification loops. If a model output does not meet confidence thresholds, it is automatically routed to designated human reviewers with an audit log.',
  },
  {
    question: 'Can NAIR.AI integrate with our existing ERP and CRM software?',
    answer:
      'Yes. Our agentic pipelines connect natively via REST APIs, GraphQL, webhooks, and secure database connections to systems like Salesforce, HubSpot, SAP, NetSuite, Zendesk, QuickBooks, and internal Postgres/Snowflake warehouses.',
  },
];

export const FAQSection: React.FC<FAQSectionProps> = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="py-28 md:py-36 border-t border-[#0C342C]/10 bg-[#FFFDEE] text-[#06231D] relative"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">


          <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight mb-5 text-[#06231D]">
            Frequently Asked <span className="text-[#076653]">Questions</span>.
          </h2>

          <p className="text-lg sm:text-xl max-w-xl font-normal leading-relaxed text-[#0C342C]/75">
            Clear answers regarding enterprise safety, implementation timelines, and security protocols.
          </p>
        </div>

        {/* Broad Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#E2FBCE]/35 border-[#076653]/35 shadow-lg shadow-[#076653]/5'
                    : 'bg-[#FFFDEE] border-[#0C342C]/10 hover:border-[#076653]/30 shadow-xs'
                }`}
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left p-7 sm:p-8 flex items-center justify-between gap-6 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-lg sm:text-xl text-[#06231D] pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`p-2.5 rounded-full border border-[#0C342C]/10 transition-all duration-300 shrink-0 ${
                      isOpen
                        ? 'rotate-180 bg-[#076653] text-[#E3EF26]'
                        : 'bg-[#FFFDEE] text-[#0C342C]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-7 sm:px-8 pb-8 pt-1 text-base sm:text-lg text-[#0C342C]/80 leading-relaxed border-t border-[#076653]/15 animate-in fade-in duration-200 font-normal">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
