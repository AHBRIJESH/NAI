import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Globe2,
  Mail,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Send,
  Building,
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface ContactPageProps {
  onBackToHome: () => void;
  onBookCall: (service?: string) => void;
  onOpenAssessment: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onBackToHome,
  onBookCall,
  onOpenAssessment,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: 'General AI Strategy & Advisory',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-[#0A192F] selection:bg-[#1D4ED8] selection:text-white pt-24 pb-20">
      
      {/* Top Breadcrumb Navigation Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-6 pb-8">
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

      {/* Main Contact Hero Header */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full font-mono text-[11px] tracking-[0.26em] uppercase font-extrabold bg-blue-50 text-[#1D4ED8] border border-blue-200 shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <span>START YOUR AI JOURNEY</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A192F] mb-6 leading-[1.04]">
            Let’s Build Something{' '}
            <span className="text-[#1D4ED8]">Intelligent</span>.
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed mb-6">
            Tell us about your business and we'll map out where AI can have the biggest impact — no obligation, no jargon. We respond within one business day.
          </p>
        </motion.div>
      </section>

      {/* Contact Grid: Info & Form */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Operational Parameters (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="rounded-3xl bg-white border border-slate-200/90 p-8 shadow-md space-y-6">
              <span className="font-mono text-xs uppercase tracking-wider text-[#1D4ED8] font-extrabold block border-b border-slate-100 pb-3">
                DIRECT CHANNELS &amp; HOURS
              </span>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase text-slate-500 font-bold block">
                      Operating Hours
                    </span>
                    <span className="font-display font-bold text-base text-[#0A192F]">
                      Mon–Sun, 6AM–11PM EST
                    </span>
                    <span className="text-xs text-slate-600 block mt-0.5">
                      Guaranteed response within 1 business day
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0 mt-0.5">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase text-slate-500 font-bold block">
                      Global Presence
                    </span>
                    <span className="font-display font-bold text-base text-[#0A192F]">
                      United States &amp; India
                    </span>
                    <span className="text-xs text-slate-600 block mt-0.5">
                      Seamless round-the-clock delivery &amp; support
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase text-slate-500 font-bold block">
                      Confidentiality
                    </span>
                    <span className="font-display font-bold text-base text-[#0A192F]">
                      Mutual Enterprise NDA
                    </span>
                    <span className="text-xs text-slate-600 block mt-0.5">
                      All technical discussions protected by zero-retention NDA
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => onBookCall('Direct Calendar Schedule')}
                  className="w-full py-3.5 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs uppercase tracking-wider font-extrabold rounded-full transition-all shadow-md shadow-red-600/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Skip Form &amp; Schedule Call</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Quick Readiness Card */}
            <div className="rounded-3xl bg-gradient-to-br from-[#0A192F] to-[#1E3A8A] text-white p-7 shadow-lg">
              <span className="font-mono text-[10px] uppercase tracking-wider text-blue-300 font-bold block mb-2">
                SELF-SERVE EVALUATION
              </span>
              <h4 className="font-display font-bold text-lg text-white mb-2">
                Unsure where to begin?
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                Take our 2-minute feasibility assessment to calculate your reclaimable hours and readiness score.
              </p>
              <button
                onClick={onOpenAssessment}
                className="text-xs font-mono font-bold text-white underline hover:text-blue-200 cursor-pointer"
              >
                Launch Assessment Diagnostic →
              </button>
            </div>
          </div>

          {/* Right Column: Send Us A Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-xl text-left">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#1D4ED8] font-bold block mb-1">
                    PROJECT INTAKE
                  </span>
                  <h3 className="font-display text-2xl font-extrabold text-[#0A192F]">
                    Send Us a Message
                  </h3>
                </div>
                <Sparkles className="w-5 h-5 text-[#1D4ED8]" />
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <h4 className="font-display font-bold text-2xl text-[#0A192F]">
                    Message Transmitted Successfully
                  </h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you, <strong className="text-[#0A192F]">{formData.name}</strong>. Our senior AI architecture team has received your inquiry and will respond within one business day.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full font-mono text-xs uppercase font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-xs uppercase text-slate-600 font-bold block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-xs uppercase text-slate-600 font-bold block mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="s.jenkins@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-xs uppercase text-slate-600 font-bold block mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Health Logistics"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-xs uppercase text-slate-600 font-bold block mb-1.5">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-xs uppercase text-slate-600 font-bold block mb-1.5">
                      Primary Area of Interest
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all bg-white"
                    >
                      <option value="General AI Strategy &amp; Advisory">General AI Strategy &amp; Advisory</option>
                      <option value="NAIR Chat™ Customer &amp; Team Assistant">NAIR Chat™ Customer &amp; Team Assistant</option>
                      <option value="NAIR Docs™ Document Extraction &amp; Processing">NAIR Docs™ Document Extraction &amp; Processing</option>
                      <option value="NAIR Insight™ Predictive Analytics">NAIR Insight™ Predictive Analytics</option>
                      <option value="NAIR Guard™ Safety &amp; Governance">NAIR Guard™ Safety &amp; Governance</option>
                      <option value="NAIR Learn™ Team Enablement">NAIR Learn™ Team Enablement</option>
                      <option value="Custom Agentic Swarm Architecture">Custom Agentic Swarm Architecture</option>
                      <option value="ERP / CRM Intelligent Integration">ERP / CRM Intelligent Integration</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-mono text-xs uppercase text-slate-600 font-bold block mb-1.5">
                      Tell Us About Your Project &amp; Goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe the operational bottleneck, data workflow, or customer experience you want to automate..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#1D4ED8] hover:bg-blue-800 text-white font-mono text-xs uppercase tracking-wider font-extrabold rounded-full transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2.5 cursor-pointer hover:scale-101"
                  >
                    <span>Send Message to Architects</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-center font-mono text-[10px] text-slate-400">
                    Protected by zero-retention NDA. Your information is never sold or shared.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Return to Home Overview Button */}
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

export default ContactPage;
