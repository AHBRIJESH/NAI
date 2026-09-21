import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillService?: string;
  assessmentData?: Record<string, string>;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  prefillService,
  assessmentData,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [teamSize, setTeamSize] = useState('21-100');
  const [service, setService] = useState(prefillService || 'AI Strategy & Readiness');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API booking call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#076653', '#E3EF26', '#E2FBCE', '#0C342C'],
        });
      } catch (e) {
        // Safe fallback
      }
    }, 750);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#06231D]/80 backdrop-blur-xl animate-in fade-in duration-200"
    >
      <div className="bg-[#FFFDEE] border border-[#0C342C]/15 rounded-3xl max-w-xl w-full p-8 sm:p-10 shadow-2xl relative max-h-[92vh] overflow-y-auto text-[#06231D]">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 p-2 text-[#0C342C]/70 hover:text-[#06231D] hover:bg-[#E2FBCE]/60 rounded-full transition-colors cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header */}
            <div className="mb-8 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2FBCE] text-[#06231D] border border-[#076653]/30 font-mono text-[10px] tracking-widest uppercase font-bold mb-3">
                <Calendar className="w-3.5 h-3.5 text-[#076653]" />
                <span>30-MINUTE EXECUTIVE CONSULTATION</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#06231D]">
                Book an AI Strategy Call
              </h3>
              <p className="text-sm text-[#0C342C]/75 mt-2 font-normal">
                Meet directly with a senior NAIR.AI architect to evaluate practical opportunities, discuss enterprise governance, and review implementation timelines.
              </p>
            </div>

            {/* Assessment Context Banner if prefilled */}
            {assessmentData?.readinessScore && (
              <div className="mb-6 p-4 rounded-2xl bg-[#E2FBCE]/40 border border-[#076653]/30 text-xs text-[#06231D] flex items-center justify-between shadow-xs">
                <div>
                  <span className="font-mono font-bold uppercase block">
                    Diagnostic Score Attached: {assessmentData.readinessScore}
                  </span>
                  <span className="text-[11px] text-[#0C342C]/70 font-normal">
                    Your assessment answers will be reviewed prior to the call.
                  </span>
                </div>
                <ShieldCheck className="w-5 h-5 text-[#076653] shrink-0" />
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#06231D] font-bold mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Elena Rostova"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#0C342C]/20 bg-[#FFFDEE] text-[#06231D] text-sm focus:outline-none focus:ring-2 focus:ring-[#076653] transition-all font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#06231D] font-bold mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="elena@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#0C342C]/20 bg-[#FFFDEE] text-[#06231D] text-sm focus:outline-none focus:ring-2 focus:ring-[#076653] transition-all font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#06231D] font-bold mb-1.5">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Horizon Labs"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#0C342C]/20 bg-[#FFFDEE] text-[#06231D] text-sm focus:outline-none focus:ring-2 focus:ring-[#076653] transition-all font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#06231D] font-bold mb-1.5">
                    Organization Size
                  </label>
                  <select
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#0C342C]/20 bg-[#FFFDEE] text-[#06231D] text-sm focus:outline-none focus:ring-2 focus:ring-[#076653] transition-all font-medium"
                  >
                    <option value="1-20">1 - 20 employees</option>
                    <option value="21-100">21 - 100 employees</option>
                    <option value="101-500">101 - 500 employees</option>
                    <option value="500+">500+ enterprise</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#06231D] font-bold mb-1.5">
                  Primary Area of Interest
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#0C342C]/20 bg-[#FFFDEE] text-[#06231D] text-sm focus:outline-none focus:ring-2 focus:ring-[#076653] transition-all font-medium"
                >
                  <option value="AI Strategy & Readiness">AI Consulting & Strategic Feasibility</option>
                  <option value="AI Governance & Guardrails">AI Governance & Enterprise Guardrails</option>
                  <option value="Agentic AI Workflows">Agentic AI & Multi-Agent Swarms</option>
                  <option value="Operational Automation">Operational Workflow Automation</option>
                  <option value="Generative AI & Private LLMs">Generative AI & Private LLM Deployment</option>
                  <option value="Executive & Team Training">AI Training & Organizational Adoption</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#06231D] font-bold mb-1.5">
                  Context or Key Workflow Friction (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about the workflows you're looking to automate, systems you connect to, or compliance constraints..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#0C342C]/20 bg-[#FFFDEE] text-[#06231D] text-sm focus:outline-none focus:ring-2 focus:ring-[#076653] transition-all resize-none font-medium"
                />
              </div>

              {/* Data Safety Assurance */}
              <div className="flex items-center gap-2.5 text-xs font-mono text-[#0C342C]/70 pt-1">
                <ShieldCheck className="w-4 h-4 text-[#076653] shrink-0" />
                <span>NDA protected. Your consultation details remain strictly confidential.</span>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4.5 px-6 bg-[#E3EF26] hover:bg-[#d2de1e] text-[#06231D] font-mono text-xs uppercase tracking-wider font-extrabold rounded-full shadow-xl shadow-[#E3EF26]/20 transition-all flex items-center justify-center gap-2.5 cursor-pointer hover:scale-[1.01] active:scale-[0.98] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Confirming Appointment...</span>
                  ) : (
                    <>
                      <span>Confirm AI Strategy Call</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#E3EF26] text-[#06231D] flex items-center justify-center mx-auto mb-5 shadow-lg shadow-[#E3EF26]/20">
              <CheckCircle2 className="w-8 h-8 text-[#06231D]" />
            </div>

            <span className="font-mono text-xs uppercase tracking-widest text-[#06231D] bg-[#E2FBCE] px-3.5 py-1 rounded-full border border-[#076653]/30 font-bold block w-fit mx-auto mb-3">
              CONSULTATION SCHEDULED
            </span>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#06231D] mb-3">
              We'll see you on the call, {fullName.split(' ')[0]}!
            </h3>

            <p className="text-base text-[#0C342C]/80 max-w-md mx-auto mb-8 leading-relaxed font-normal">
              A calendar invite and preparation briefing have been sent to <strong className="font-bold text-[#06231D]">{email}</strong>. Our senior AI architect is reviewing your domain requirements.
            </p>

            <div className="p-5 rounded-2xl bg-[#E2FBCE]/30 border border-[#076653]/20 text-left max-w-md mx-auto mb-8 font-mono text-xs text-[#0C342C]/80 shadow-xs">
              <div className="font-bold text-[#06231D] uppercase mb-2">What to expect:</div>
              <ul className="list-disc pl-4 space-y-1.5">
                <li>Zero-fluff audit of your operational workflows</li>
                <li>Clear architectural feasibility & risk overview</li>
                <li>Estimated budget, payback period, and 30-day pilot timeline</li>
              </ul>
            </div>

            <button
              onClick={handleClose}
              className="px-8 py-3.5 bg-[#0C342C] hover:bg-[#076653] text-[#FFFDEE] font-mono text-xs uppercase tracking-wider font-extrabold rounded-full shadow-md shadow-[#0C342C]/10 transition-colors cursor-pointer"
            >
              Back to Overview
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
