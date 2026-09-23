import React, { useState, useRef, useEffect } from 'react';
import { X, Calendar, CheckCircle2, ArrowRight, ShieldCheck, Clock, Video, Download, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillService?: string;
  assessmentData?: Record<string, string>;
}

interface DateSlot {
  dateStr: string; // e.g., '2026-09-24'
  dayName: string; // e.g., 'Thu'
  dayNumber: number; // e.g., 24
  monthName: string; // e.g., 'Sep'
  label: string; // e.g., 'Tomorrow' or 'Thu, Sep 24'
}

// Generate the next 7 business days starting from today/tomorrow
function getUpcomingBusinessDays(): DateSlot[] {
  const slots: DateSlot[] = [];
  const now = new Date();
  let candidate = new Date(now);
  candidate.setDate(candidate.getDate() + 1); // Start from tomorrow

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  while (slots.length < 6) {
    const dayOfWeek = candidate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      // Business day
      const dateStr = candidate.toISOString().split('T')[0];
      const dayName = dayNames[dayOfWeek];
      const dayNumber = candidate.getDate();
      const monthName = monthNames[candidate.getMonth()];
      const isTomorrow = slots.length === 0;

      slots.push({
        dateStr,
        dayName,
        dayNumber,
        monthName,
        label: isTomorrow ? 'Tomorrow' : `${dayName}, ${monthName} ${dayNumber}`,
      });
    }
    candidate.setDate(candidate.getDate() + 1);
  }
  return slots;
}

const AVAILABLE_TIME_SLOTS = [
  '09:30 AM EST',
  '11:00 AM EST',
  '01:30 PM EST',
  '03:00 PM EST',
  '04:30 PM EST',
];

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  prefillService,
  assessmentData,
}) => {
  const modalScrollRef = useRef<HTMLDivElement>(null);
  const dateSlots = React.useMemo(() => getUpcomingBusinessDays(), []);

  const [selectedDate, setSelectedDate] = useState<DateSlot>(dateSlots[0]);
  const [selectedTime, setSelectedTime] = useState<string>(AVAILABLE_TIME_SLOTS[1]);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [teamSize, setTeamSize] = useState('21-100');
  const [service, setService] = useState(prefillService || 'AI Strategy & Feasibility Audit');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Manage Lenis and document body overflow for guaranteed smooth modal mouse-wheel scroll
  useEffect(() => {
    if (!isOpen) return;

    // Pause Lenis smooth scrolling
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    lenis?.stop();

    // Prevent background body bounce
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      lenis?.start();
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Handle wheel events directly so mouse wheel scrolls modal content reliably
  const handleWheelScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (modalScrollRef.current) {
      modalScrollRef.current.scrollTop += e.deltaY;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API booking call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.55 },
          colors: ['#1D4ED8', '#DC2626', '#0284C7', '#0A192F', '#38BDF8'],
        });
      } catch (e) {
        // Safe fallback
      }
    }, 700);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  // Generate Google Calendar Add Event URL
  const googleCalendarUrl = React.useMemo(() => {
    const title = encodeURIComponent('NAIR.AI Executive AI Strategy Call');
    const details = encodeURIComponent(
      `Executive 30-minute AI Strategy Call with NAIR.AI Senior Architect.\n\nAttendee: ${fullName} (${company})\nEmail: ${email}\nFocus Area: ${service}\nAgenda: Technical feasibility, architecture roadmap & 30-day deployment sizing.`
    );
    const location = encodeURIComponent('Google Meet (link in confirmation email)');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  }, [fullName, company, email, service]);

  // Download .ics Calendar File
  const handleDownloadICS = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//NAIR.AI//Strategy Call Scheduler//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:REQUEST',
      'BEGIN:VEVENT',
      `SUMMARY:NAIR.AI Executive AI Strategy Call`,
      `DESCRIPTION:30-minute AI Strategy Call with NAIR.AI Senior Solutions Architect for ${fullName} (${company}).`,
      `LOCATION:Google Meet / Zoom`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'NAIR-AI-Strategy-Call.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      data-lenis-prevent="true"
      onWheel={handleWheelScroll}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#0A192F]/80 backdrop-blur-xl animate-in fade-in duration-200"
    >
      <div
        ref={modalScrollRef}
        data-lenis-prevent="true"
        onWheel={handleWheelScroll}
        className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl relative max-h-[92vh] overflow-y-auto overscroll-contain text-[#0A192F]"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 text-slate-400 hover:text-[#0A192F] hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header */}
            <div className="mb-7 text-left">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A192F]">
                Book an AI Strategy Call
              </h3>
              <p className="text-sm text-slate-600 mt-2 font-normal leading-relaxed">
                Meet directly with a senior NAIR.AI architect to evaluate practical opportunities, inspect compliance guardrails, and map out an execution blueprint.
              </p>
            </div>

            {/* Assessment Context Banner if prefilled */}
            {assessmentData?.readinessScore && (
              <div className="mb-6 p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs text-[#0A192F] flex items-center justify-between shadow-xs">
                <div>
                  <span className="font-mono font-bold uppercase block text-[#1D4ED8]">
                    Diagnostic Score Attached: {assessmentData.readinessScore}
                  </span>
                  <span className="text-[11px] text-slate-600 font-normal">
                    Your assessment answers will be reviewed prior to the call.
                  </span>
                </div>
                <ShieldCheck className="w-5 h-5 text-[#1D4ED8] shrink-0" />
              </div>
            )}

            {/* Interactive Date & Time Slot Picker */}
            <div className="mb-6 text-left p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-4">
              {/* Step 1: Select Date */}
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <label className="font-mono text-xs font-bold uppercase tracking-wider text-[#0A192F] flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#1D4ED8]" />
                    <span>1. Select Date</span>
                  </label>
                  <span className="text-[11px] font-mono text-slate-500 font-medium">
                    {selectedDate.label}
                  </span>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {dateSlots.map((slot) => {
                    const isSelected = selectedDate.dateStr === slot.dateStr;
                    return (
                      <button
                        key={slot.dateStr}
                        type="button"
                        onClick={() => setSelectedDate(slot)}
                        className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#1D4ED8] text-white border-[#1D4ED8] shadow-md shadow-blue-500/20 scale-[1.02]'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50/50'
                        }`}
                      >
                        <span className="block text-[10px] font-mono font-semibold uppercase opacity-80">
                          {slot.dayName}
                        </span>
                        <span className="block text-base font-extrabold font-display leading-tight my-0.5">
                          {slot.dayNumber}
                        </span>
                        <span className="block text-[10px] font-mono uppercase opacity-75">
                          {slot.monthName}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Select Time Slot */}
              <div className="pt-2 border-t border-slate-200/70">
                <div className="flex items-center justify-between mb-2.5">
                  <label className="font-mono text-xs font-bold uppercase tracking-wider text-[#0A192F] flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#1D4ED8]" />
                    <span>2. Select Time (30 min)</span>
                  </label>
                  <span className="text-[11px] font-mono text-[#1D4ED8] font-bold">
                    {selectedTime}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {AVAILABLE_TIME_SLOTS.map((timeSlot) => {
                    const isSelected = selectedTime === timeSlot;
                    return (
                      <button
                        key={timeSlot}
                        type="button"
                        onClick={() => setSelectedTime(timeSlot)}
                        className={`py-2 px-3 rounded-xl border text-xs font-mono font-bold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#0A192F] text-white border-[#0A192F] shadow-sm'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        {timeSlot}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Session Logistics Callout */}
              <div className="flex items-center gap-2 text-[11px] font-mono text-slate-600 pt-1">
                <Video className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0" />
                <span>Format: Remote 1-on-1 Video Session (Google Meet / Zoom link dispatched upon booking)</span>
              </div>
            </div>

            {/* Form Inputs */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Elena Rostova"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-[#0A192F] text-sm focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 transition-all font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="elena@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-[#0A192F] text-sm focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 transition-all font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-1.5">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Horizon Labs"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-[#0A192F] text-sm focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 transition-all font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-1.5">
                    Organization Size
                  </label>
                  <select
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-[#0A192F] text-sm focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 transition-all font-medium"
                  >
                    <option value="1-20">1 - 20 employees</option>
                    <option value="21-100">21 - 100 employees</option>
                    <option value="101-500">101 - 500 employees</option>
                    <option value="500+">500+ enterprise</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-1.5">
                  Strategic Consultation Focus
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-[#0A192F] text-sm focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 transition-all font-medium"
                >
                  <option value="AI Strategy & Feasibility Audit">AI Consulting & Strategic Feasibility (30-Day Pilot)</option>
                  <option value="Agentic AI Workflows">Agentic AI Swarms & Process Orchestration</option>
                  <option value="Private LLMs & Air-Gapped Deployments">Generative AI & Private LLMs (Zero-Data-Retention)</option>
                  <option value="Healthcare & Life Sciences Automation">Healthcare & HIPAA-Compliant Automation</option>
                  <option value="Financial Systems & Risk Intelligence">Financial Intelligence, Fraud Defense & Ops</option>
                  <option value="Legal AI & Contract Intelligence">Legal Practice Automation & Contract Verification</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-1.5">
                  Context or Key Workflow Friction (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe your workflows, existing software stack, or compliance requirements..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-[#0A192F] text-sm focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 transition-all resize-none font-medium"
                />
              </div>

              {/* Data Safety Assurance */}
              <div className="flex items-center gap-2.5 text-xs font-mono text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                <span>NDA protected. Your consultation details remain strictly confidential.</span>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4.5 px-6 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs uppercase tracking-wider font-extrabold rounded-full shadow-xl shadow-red-600/30 transition-all flex items-center justify-center gap-2.5 cursor-pointer hover:scale-[1.01] active:scale-[0.98] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Scheduling Your Strategy Call...</span>
                  ) : (
                    <>
                      <span>Confirm AI Strategy Call • {selectedDate.label} ({selectedTime})</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-blue-50 text-[#1D4ED8] border border-blue-200 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/10">
              <CheckCircle2 className="w-8 h-8 text-[#1D4ED8]" />
            </div>

            <div className="font-mono text-xs uppercase tracking-widest text-[#1D4ED8] font-bold block mb-2">
              STRATEGY CALL CONFIRMED
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A192F] mb-2">
              You're Booked, {fullName.split(' ')[0]}!
            </h3>

            <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto mb-6 leading-relaxed font-normal">
              A calendar invitation with video conference credentials has been dispatched to <strong className="font-bold text-[#0A192F]">{email}</strong>.
            </p>

            {/* Scheduled Details Card */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left max-w-md mx-auto mb-6 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-2 border-b border-slate-200/80">
                <span className="font-bold uppercase text-[#0A192F]">Meeting Summary</span>
                <span className="px-2 py-0.5 rounded bg-blue-100 text-[#1D4ED8] font-bold">Confirmed</span>
              </div>
              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-700">
                  <Calendar className="w-4 h-4 text-[#1D4ED8]" />
                  <span className="font-bold">{selectedDate.label}, 2026</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Clock className="w-4 h-4 text-[#1D4ED8]" />
                  <span className="font-bold">{selectedTime} (30 Minutes)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Video className="w-4 h-4 text-[#1D4ED8]" />
                  <span>Google Meet / Zoom Video Link in Email</span>
                </div>
              </div>
            </div>

            {/* Quick Calendar Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-6">
              <a
                href={googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 py-2.5 px-4 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#1D4ED8] border border-blue-200 font-mono text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Add to Google Cal</span>
              </a>

              <button
                type="button"
                onClick={handleDownloadICS}
                className="w-full sm:w-1/2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download .ics File</span>
              </button>
            </div>

            <button
              onClick={handleClose}
              className="px-8 py-3 bg-[#0A192F] hover:bg-[#1D4ED8] text-white font-mono text-xs uppercase tracking-wider font-extrabold rounded-full shadow-md transition-colors cursor-pointer"
            >
              Done &amp; Return to Overview
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
