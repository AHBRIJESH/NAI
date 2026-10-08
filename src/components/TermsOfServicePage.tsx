import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Shield,
  FileText,
  Scale,
  CheckCircle2,
  AlertTriangle,
  Lock,
  Mail,
  Globe,
  Building2,
  Calendar,
} from 'lucide-react';
import { motion } from 'motion/react';
import type { PageRoute } from './Navbar';
import { SubPageMotionBackground } from './SubPageMotionBackground';

interface TermsOfServicePageProps {
  onBackToHome: () => void;
  onBookCall: (service?: string) => void;
  onOpenAssessment?: () => void;
  onNavigate: (page: PageRoute) => void;
}

export const TermsOfServicePage: React.FC<TermsOfServicePageProps> = ({
  onBackToHome,
  onBookCall,
  onNavigate,
}) => {
  const sections = [
    {
      id: 'services',
      number: '01',
      title: 'Services',
      icon: Building2,
      content: (
        <div className="space-y-3 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            NAIRAI / NAIR AI provides AI consulting, strategy, training, automation, and technology solutions, including AI chatbots, RAG solutions, AI agents, document processing, workflow automation, and custom AI solutions.
          </p>
          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 text-blue-900 text-sm">
            <span className="font-semibold block mb-1">Separate Client Agreements:</span>
            Paid client engagements may be governed by separate agreements or statements of work (SOW), which will control in the event of a conflict with these Terms.
          </div>
        </div>
      ),
    },
    {
      id: 'ai-content',
      number: '02',
      title: 'AI-Generated Content',
      icon: AlertTriangle,
      content: (
        <div className="space-y-3 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            Our services may generate AI-powered responses, recommendations, analyses, or other content. AI-generated outputs may contain errors or inaccuracies and should be appropriately reviewed and validated before use.
          </p>
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-amber-900 text-sm">
            <span className="font-semibold block mb-1">Professional Advice Disclaimer:</span>
            Unless expressly agreed otherwise, such outputs do not constitute legal, medical, financial, or other professional advice.
          </div>
        </div>
      ),
    },
    {
      id: 'customer-data',
      number: '03',
      title: 'Customer Data',
      icon: Lock,
      content: (
        <div className="space-y-3 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            Clients retain ownership of the data and content they provide to NAIRAI / NAIR AI. By providing information, you confirm that you have the necessary rights to use and share it.
          </p>
          <p>
            NAIRAI / NAIR AI may process Customer Data as reasonably necessary to provide, secure, and support the requested services. Personal information is handled in accordance with our{' '}
            <button
              type="button"
              onClick={() => onNavigate('privacy')}
              className="font-bold text-[#1D4ED8] underline underline-offset-2 hover:text-[#0A192F] cursor-pointer"
            >
              Privacy Policy
            </button>
            .
          </p>
        </div>
      ),
    },
    {
      id: 'intellectual-property',
      number: '04',
      title: 'Intellectual Property',
      icon: Shield,
      content: (
        <div className="space-y-3 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            The NAIRAI / NAIR AI website, trademarks, branding, software, methodologies, documentation, and other proprietary materials remain the property of Nair Corporation or its licensors.
          </p>
          <p className="text-slate-600 text-sm">
            Ownership and usage rights for custom client deliverables will be defined in the applicable client agreement.
          </p>
        </div>
      ),
    },
    {
      id: 'third-party-services',
      number: '05',
      title: 'Third-Party Services',
      icon: Globe,
      content: (
        <div className="space-y-3 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            Our solutions may use third-party AI models, cloud platforms, APIs, and other technology providers.
          </p>
          <p className="text-slate-600 text-sm">
            These services may be subject to their own terms and privacy policies, and NAIRAI / NAIR AI is not responsible for the independent operation or availability of third-party services.
          </p>
        </div>
      ),
    },
    {
      id: 'acceptable-use',
      number: '06',
      title: 'Acceptable Use',
      icon: Scale,
      content: (
        <div className="space-y-3 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            You may use our website and services only for lawful purposes. You may not:
          </p>
          <ul className="space-y-2 text-sm text-slate-700 pl-1">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 shrink-0" />
              <span>Misuse our systems or attempt unauthorized access.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 shrink-0" />
              <span>Introduce malicious software or tamper with application security.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 shrink-0" />
              <span>Infringe upon intellectual property rights.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 shrink-0" />
              <span>Use our services for fraudulent, illegal, or harmful activities.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'liability',
      number: '07',
      title: 'Disclaimer & Limitation of Liability',
      icon: AlertTriangle,
      content: (
        <div className="space-y-3 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            Our website and services are provided subject to applicable agreements and law. We do not guarantee that AI outputs or services will always be error-free, uninterrupted, or completely accurate.
          </p>
          <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 text-slate-800 text-sm">
            To the maximum extent permitted by law, Nair Corporation and NAIRAI / NAIR AI will not be liable for indirect, incidental, special, or consequential damages arising from use of our website or services.
          </div>
        </div>
      ),
    },
    {
      id: 'changes',
      number: '08',
      title: 'Changes to These Terms',
      icon: Calendar,
      content: (
        <div className="space-y-3 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            We may update these Terms periodically. Changes will be posted on this page with an updated revision date.
          </p>
        </div>
      ),
    },
    {
      id: 'governing-law',
      number: '09',
      title: 'Governing Law',
      icon: Scale,
      content: (
        <div className="space-y-3 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            These Terms are governed by the laws of the State of New York, except where applicable law requires otherwise.
          </p>
        </div>
      ),
    },
    {
      id: 'contact',
      number: '10',
      title: 'Contact Us',
      icon: Mail,
      content: (
        <div className="space-y-3 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>For questions regarding these Terms, please contact:</p>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 space-y-2 text-sm font-mono">
            <div className="font-bold text-base text-[#0A192F] font-sans">
              Nair Corporation / NAIRAI / NAIR AI
            </div>
            <div>
              <span className="text-slate-500">Website:</span>{' '}
              <a href="https://nair.ai" className="text-[#1D4ED8] hover:underline">
                nair.ai
              </a>
            </div>
            <div>
              <span className="text-slate-500">Email:</span>{' '}
              <a href="mailto:info@nair.ai" className="text-[#1D4ED8] hover:underline font-bold">
                info@nair.ai
              </a>
            </div>
            <div>
              <span className="text-slate-500">Jurisdiction:</span> United States
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0A192F] selection:bg-[#1D4ED8] selection:text-white pt-24 pb-24 overflow-hidden">
      {/* Light Colored Motion Background */}
      <SubPageMotionBackground />

      {/* Top Breadcrumb Navigation */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 pt-6 pb-4">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider font-extrabold text-[#1D4ED8] hover:text-[#0A192F] transition-colors group cursor-pointer"
        >
          <div className="w-7 h-7 rounded-full bg-blue-50 group-hover:bg-[#1D4ED8] text-[#1D4ED8] group-hover:text-white border border-blue-200 flex items-center justify-center transition-all">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          </div>
          <span>Back to Home</span>
        </button>
      </div>

      {/* Hero Header */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1D4ED8] font-mono text-xs font-bold uppercase tracking-wider mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>Legal Governance &amp; Agreements</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A192F] mb-4 leading-tight">
            Terms of Service
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 mb-6 pb-6 border-b border-slate-200">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#1D4ED8]" />
              <strong>Last Updated:</strong> September 11, 2026
            </span>
            <span>•</span>
            <span>Nair Corporation (d/b/a NAIRAI / NAIR AI)</span>
          </div>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl font-normal">
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of <strong className="font-bold text-[#1D4ED8]">nair.ai</strong> and services provided by Nair Corporation, doing business as NAIRAI / NAIR AI (&ldquo;NAIRAI / NAIR AI,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By using our website or services, you agree to these Terms.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-6">
            <button
              type="button"
              onClick={() => onNavigate('privacy')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 hover:bg-blue-100/80 text-[#1D4ED8] border border-blue-200 font-mono text-xs uppercase tracking-wider font-extrabold transition-colors cursor-pointer shadow-xs"
            >
              <Shield className="w-4 h-4 text-[#1D4ED8]" />
              <span>View Privacy Policy</span>
            </button>
          </div>
        </motion.div>
      </section>

      {/* Main Content Sections */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 space-y-6">
        {sections.map((sec, idx) => {
          const IconComp = sec.icon;
          return (
            <motion.div
              key={sec.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.03 }}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md text-left"
            >
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <span className="font-mono text-xs font-bold text-[#1D4ED8] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/60">
                  {sec.number}
                </span>
                <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#1D4ED8]">
                  <IconComp className="w-4 h-4" />
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0A192F]">
                  {sec.title}
                </h2>
              </div>

              <div>{sec.content}</div>
            </motion.div>
          );
        })}

        {/* Bottom CTA Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0A192F] via-[#112445] to-[#1E3A8A] text-white shadow-xl text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white">
              Have questions regarding custom enterprise master service agreements?
            </h3>
            <p className="text-blue-100 text-sm max-w-xl">
              We work with enterprise procurement and legal counsel to execute custom Statements of Work and sovereign air-gapped SLAs.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onBookCall('Legal & Compliance Inquiry')}
            className="shrink-0 px-6 py-3.5 rounded-full bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs uppercase tracking-wider font-extrabold shadow-lg shadow-red-600/30 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Book a Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;
