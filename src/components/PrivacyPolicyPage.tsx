import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Shield,
  FileText,
  Lock,
  Eye,
  Database,
  Cpu,
  Mail,
  Globe,
  Calendar,
  CheckCircle2,
  Server,
  Key,
} from 'lucide-react';
import { motion } from 'motion/react';
import type { PageRoute } from './Navbar';
import { SubPageMotionBackground } from './SubPageMotionBackground';

interface PrivacyPolicyPageProps {
  onBackToHome: () => void;
  onBookCall: (service?: string) => void;
  onOpenAssessment?: () => void;
  onNavigate: (page: PageRoute) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({
  onBackToHome,
  onBookCall,
  onNavigate,
}) => {
  const sections = [
    {
      id: 'information-we-collect',
      number: '01',
      title: 'Information We Collect',
      icon: Database,
      content: (
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div>
            <h4 className="font-bold text-[#0A192F] mb-1.5 text-sm sm:text-base">
              Information You Voluntarily Provide:
            </h4>
            <p>
              We may collect information you voluntarily provide, such as your name, email address, phone number, company information, and details submitted through contact forms or communications with us.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#0A192F] mb-1.5 text-sm sm:text-base">
              Automatically Collected Technical Information:
            </h4>
            <p>
              We may also automatically collect limited technical information, such as IP address, browser type, device information, website usage, and analytics data.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'how-we-use-information',
      number: '02',
      title: 'How We Use Information',
      icon: Eye,
      content: (
        <div className="space-y-3 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>We may use information to:</p>
          <ul className="space-y-2.5 text-sm text-slate-700 pl-1">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] mt-0.5 shrink-0" />
              <span>Respond to inquiries and provide requested services.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] mt-0.5 shrink-0" />
              <span>Deliver and improve our AI consulting and technology solutions.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] mt-0.5 shrink-0" />
              <span>Communicate with clients and prospective clients.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] mt-0.5 shrink-0" />
              <span>Maintain website functionality, security, and performance.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] mt-0.5 shrink-0" />
              <span>Comply with applicable legal and regulatory requirements.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'ai-services-and-customer-data',
      number: '03',
      title: 'AI Services and Customer Data',
      icon: Cpu,
      content: (
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            NAIRAI / NAIR AI may provide AI solutions including chatbots, RAG systems, AI agents, document processing, workflow automation, and other AI-powered services.
          </p>

          {/* Critical Guarantee Box */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300/80 text-[#0A192F] shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-[#1D4ED8]" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                Sovereign Model Privacy Guarantee
              </span>
            </div>
            <p className="font-semibold text-sm sm:text-base text-slate-900 leading-snug">
              &ldquo;NAIRAI / NAIR AI does not sell Customer Data and does not use confidential Customer Data to train generalized AI models for unrelated customers unless expressly authorized by the customer.&rdquo;
            </p>
          </div>

          <p className="text-slate-600 text-sm">
            We may process customer-provided data as necessary to deliver these services. Some services may use third-party AI, cloud, hosting, or technology providers as necessary to deliver the requested solution.
          </p>
        </div>
      ),
    },
    {
      id: 'cookies-and-analytics',
      number: '04',
      title: 'Cookies and Analytics',
      icon: Globe,
      content: (
        <div className="space-y-3 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            Our website may use cookies, analytics tools, and similar technologies to understand website usage and improve our services.
          </p>
          <p className="text-slate-600 text-sm">
            You may manage cookies through your browser settings or other controls provided on our website.
          </p>
        </div>
      ),
    },
    {
      id: 'data-sharing-and-security',
      number: '05',
      title: 'Data Sharing and Security',
      icon: Lock,
      content: (
        <div className="space-y-3 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            We may share information with trusted service providers when necessary to operate our business or provide our services, or when required by law.
          </p>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 text-sm space-y-2">
            <p>
              We use reasonable administrative and technical safeguards designed to protect personal and customer information.
            </p>
            <p className="text-slate-500 text-xs italic">
              However, no electronic transmission or digital storage system can guarantee absolute security.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'your-privacy-rights',
      number: '06',
      title: 'Your Privacy Rights',
      icon: Key,
      content: (
        <div className="space-y-3 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            Depending on your location and applicable law, you may have rights to request access to, correction of, or deletion of your personal information.
          </p>
          <p>
            You may contact us at{' '}
            <a href="mailto:info@nair.ai" className="font-bold text-[#1D4ED8] underline hover:text-[#0A192F]">
              info@nair.ai
            </a>{' '}
            to submit a privacy-related request.
          </p>
        </div>
      ),
    },
    {
      id: 'third-party-services',
      number: '07',
      title: 'Third-Party Services',
      icon: Server,
      content: (
        <div className="space-y-3 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            Our website may contain links to third-party websites or use third-party services. Their privacy practices are governed by their own privacy policies.
          </p>
        </div>
      ),
    },
    {
      id: 'changes-to-this-policy',
      number: '08',
      title: 'Changes to This Policy',
      icon: Calendar,
      content: (
        <div className="space-y-3 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            We may update this Privacy Policy periodically. Any changes will be reflected by updating the &ldquo;Last Updated&rdquo; date above.
          </p>
        </div>
      ),
    },
    {
      id: 'contact',
      number: '09',
      title: 'Contact Us',
      icon: Mail,
      content: (
        <div className="space-y-3 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>For questions regarding this Privacy Policy or our privacy practices, please contact:</p>
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
            <Shield className="w-3.5 h-3.5" />
            <span>Sovereign Data Protection &amp; Privacy</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A192F] mb-4 leading-tight">
            Website Privacy Policy
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 mb-6 pb-6 border-b border-slate-200">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#1D4ED8]" />
              <strong>Last Updated:</strong> September 10, 2026
            </span>
            <span>•</span>
            <span>Nair Corporation (d/b/a NAIRAI, NAIR AI)</span>
          </div>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl font-normal">
            Nair Corporation, doing business as NAIRAI, NAIR AI (&ldquo;NAIRAI,&rdquo; &ldquo;NAIR AI&rdquo;, &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), respects your privacy and is committed to protecting the information you share with us. This Privacy Policy explains how we collect, use, and protect information when you visit <strong className="font-bold text-[#1D4ED8]">nair.ai</strong> or use our services.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-6">
            <button
              type="button"
              onClick={() => onNavigate('terms')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 hover:bg-blue-100/80 text-[#1D4ED8] border border-blue-200 font-mono text-xs uppercase tracking-wider font-extrabold transition-colors cursor-pointer shadow-xs"
            >
              <FileText className="w-4 h-4 text-[#1D4ED8]" />
              <span>View Terms of Service</span>
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
              Need custom data isolation, HIPAA BAA, or private VPC hosting?
            </h3>
            <p className="text-blue-100 text-sm max-w-xl">
              We engineer zero-retention ephemeral memory architectures that ensure your data never trains third-party foundation models.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onBookCall('Privacy Architecture Briefing')}
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

export default PrivacyPolicyPage;
