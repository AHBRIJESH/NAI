import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Globe2,
  Mail,
  CheckCircle2,
  ShieldCheck,
  Calendar,
  Video,
  Download,
  ExternalLink,
} from 'lucide-react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { SubPageMotionBackground } from './SubPageMotionBackground';

interface ContactPageProps {
  onBackToHome: () => void;
  onBookCall: (service?: string) => void;
  onOpenAssessment: () => void;
}

interface DateSlot {
  dateStr: string;
  dayName: string;
  dayNumber: number;
  monthName: string;
  label: string;
}

function getUpcomingBusinessDays(): DateSlot[] {
  const slots: DateSlot[] = [];
  const now = new Date();
  let candidate = new Date(now);
  candidate.setDate(candidate.getDate() + 1);

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  while (slots.length < 6) {
    const dayOfWeek = candidate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
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

export const ContactPage: React.FC<ContactPageProps> = ({
  onBackToHome,
  onBookCall,
}) => {
  const dateSlots = React.useMemo(() => getUpcomingBusinessDays(), []);
  const [selectedDate, setSelectedDate] = useState<DateSlot>(dateSlots[0]);
  const [selectedTime, setSelectedTime] = useState<string>(AVAILABLE_TIME_SLOTS[1]);

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
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.55 },
        colors: ['#1D4ED8', '#DC2626', '#0284C7', '#0A192F', '#38BDF8'],
      });
    } catch (e) {
      // Safe fallback
    }
  };

  const googleCalendarUrl = React.useMemo(() => {
    const title = encodeURIComponent('NAIR.AI Executive AI Strategy Call');
    const details = encodeURIComponent(
      `Executive 30-minute AI Strategy Call with NAIR.AI Senior Architect.\n\nAttendee: ${formData.name} (${formData.company})\nEmail: ${formData.email}\nPhone: ${formData.phone}\nFocus: ${formData.interest}\nNotes: ${formData.message}`
    );
    const location = encodeURIComponent('Google Meet (link dispatched to email)');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  }, [formData]);

  const handleDownloadICS = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//NAIR.AI//Strategy Call Scheduler//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:REQUEST',
      'BEGIN:VEVENT',
      `SUMMARY:NAIR.AI Executive AI Strategy Call`,
      `DESCRIPTION:30-minute AI Strategy Call with NAIR.AI Senior Solutions Architect for ${formData.name} (${formData.company}).`,
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
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0A192F] selection:bg-[#1D4ED8] selection:text-white pt-24 pb-24 overflow-hidden">
      {/* Light Colored Motion Background with Subtle Hero Sculpture & Ambient Orbs */}
      <SubPageMotionBackground />

      {/* Top Breadcrumb Navigation Bar */}
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

      {/* Wide Hero Header: Full Space Utilization */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-14 text-left">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A192F] mb-6 leading-[1.04]">
              Book an AI Strategy Call
            </h1>

            <p className="text-base sm:text-xl text-slate-600 max-w-3xl font-normal leading-relaxed">
              Schedule an objective 30-minute consultation directly with our senior AI systems architects. We map out high-ROI opportunities, review compliance constraints, and outline a deterministic 30-day implementation plan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Grid: Left Info & Right Interactive Scheduler - Wide 12-Column Layout */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Operational Parameters (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="rounded-3xl bg-white border border-slate-200/90 p-8 shadow-md space-y-6">
              <span className="font-mono text-xs uppercase tracking-wider text-[#1D4ED8] font-extrabold block border-b border-slate-100 pb-3">
                DIRECT CHANNELS &amp; OPERATIONAL HOURS
              </span>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-slate-500 uppercase block font-semibold">Operational Window</span>
                    <span className="font-display font-bold text-sm text-[#0A192F]">Mon – Sun, 6:00 AM – 11:00 PM EST</span>
                    <span className="text-xs text-slate-500 block mt-0.5">Response within 24 business hours</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-slate-500 uppercase block font-semibold">Executive Email</span>
                    <a href="mailto:contact@nair.ai" className="font-mono text-sm text-[#1D4ED8] hover:underline font-bold">
                      contact@nair.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-slate-500 uppercase block font-semibold">Global Engineering Topology</span>
                    <span className="text-xs text-slate-700 font-medium">Silicon Valley, USA &amp; Bangalore, India</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 text-xs text-slate-600 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-[#0A192F]">
                    <ShieldCheck className="w-4 h-4 text-[#1D4ED8]" />
                    <span>Strict Mutual NDA Protected</span>
                  </div>
                  <p className="font-normal leading-relaxed">
                    All initial discussions operate under standard mutual NDA protocol. Your business metrics, system architecture, and proprietary datasets remain strictly confidential.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Consultation Perks */}
            <div className="rounded-3xl bg-gradient-to-br from-[#0A192F] to-[#1E3A8A] text-white p-8 shadow-xl text-left">
              <span className="font-mono text-[10px] uppercase tracking-widest text-blue-200 block mb-2 font-bold">
                WHAT HAPPENS ON THE CALL
              </span>
              <h3 className="font-display font-extrabold text-xl text-white mb-3">
                Zero Fluff. Pure Engineering.
              </h3>
              <ul className="text-xs sm:text-sm text-blue-100/90 leading-relaxed space-y-2.5 font-normal">
                <li className="flex items-start gap-2">
                  <span className="text-[#38BDF8] font-bold">1.</span>
                  <span>Objective breakdown of where AI creates immediate ROI in your workflows.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#38BDF8] font-bold">2.</span>
                  <span>Evaluation of compliance constraints (SOC2, HIPAA, air-gapped runtimes).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#38BDF8] font-bold">3.</span>
                  <span>Realistic 30-day proof-of-concept milestone and budget estimate.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Appointment Scheduler (7 cols) */}
          <div className="lg:col-span-7 text-left">
            <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-xl">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A192F]">
                      Schedule Strategy Call
                    </h2>
                    <p className="text-slate-500 text-xs sm:text-sm font-normal mt-1">
                      Choose an available time slot for your 30-minute session with a principal architect.
                    </p>
                  </div>

                  {/* Interactive Date & Time Slot Picker */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-4">
                    {/* Step 1: Select Date */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="font-mono text-xs font-bold uppercase tracking-wider text-[#0A192F] flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#1D4ED8]" />
                          <span>1. Select Preferred Date</span>
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
                              className={`p-2 rounded-xl border text-center transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#1D4ED8] text-white border-[#1D4ED8] shadow-md shadow-blue-500/20 scale-[1.02]'
                                  : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50/50'
                              }`}
                            >
                              <span className="block text-[10px] font-mono font-semibold uppercase opacity-80">
                                {slot.dayName}
                              </span>
                              <span className="block text-sm sm:text-base font-extrabold font-display leading-tight my-0.5">
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
                      <div className="flex items-center justify-between mb-2">
                        <label className="font-mono text-xs font-bold uppercase tracking-wider text-[#0A192F] flex items-center gap-1.5">
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

                    <div className="flex items-center gap-2 text-[11px] font-mono text-slate-600 pt-1">
                      <Video className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0" />
                      <span>Remote Video Call via Google Meet / Zoom</span>
                    </div>
                  </div>

                  {/* Attendee Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="s.jenkins@enterprise.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Health Holdings"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 019-2834"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                      Strategic Consultation Focus
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 text-sm outline-none bg-white transition-all font-medium"
                    >
                      <option>General AI Strategy &amp; Architecture Feasibility</option>
                      <option>Autonomous Agentic Swarms &amp; Workflow Automation</option>
                      <option>NAIR Docs™ Intelligent Extraction &amp; OCR</option>
                      <option>Healthcare &amp; Life Sciences HIPAA Automation</option>
                      <option>Financial Services, Risk Modeling &amp; Fraud Defense</option>
                      <option>Legal Practice &amp; Automated Contract Review</option>
                      <option>Private VPC &amp; Air-Gapped Sovereign Deployment</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                      Current Systems or Workflow Challenges (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your existing software stack, key workflow friction, or compliance requirements..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all resize-none font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4.5 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold rounded-full transition-all shadow-xl shadow-red-600/30 flex items-center justify-center gap-2.5 cursor-pointer hover:scale-[1.01] active:scale-[0.98]"
                  >
                    <span>Confirm AI Strategy Call • {selectedDate.label} ({selectedTime})</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </form>
              ) : (
                <div className="py-8 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-blue-50 text-[#1D4ED8] border border-blue-200 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-blue-500/10">
                    <CheckCircle2 className="w-8 h-8 text-[#1D4ED8]" />
                  </div>

                  <div className="font-mono text-xs uppercase tracking-widest text-[#1D4ED8] font-bold block mb-2">
                    APPOINTMENT CONFIRMED
                  </div>

                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A192F]">
                    We'll See You on the Call, {formData.name.split(' ')[0] || 'Partner'}!
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                    A calendar invitation and conference briefing have been sent to <strong className="font-bold text-[#0A192F]">{formData.email}</strong>.
                  </p>

                  {/* Scheduled Details Card */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left max-w-md mx-auto space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-2 border-b border-slate-200/80">
                      <span className="font-bold uppercase text-[#0A192F]">Scheduled Session</span>
                      <span className="px-2 py-0.5 rounded bg-blue-100 text-[#1D4ED8] font-bold">Confirmed</span>
                    </div>
                    <div className="space-y-1 text-xs font-mono text-slate-700">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#1D4ED8]" />
                        <span className="font-bold">{selectedDate.label}, 2026</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#1D4ED8]" />
                        <span className="font-bold">{selectedTime} (30 Minutes)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Video className="w-4 h-4 text-[#1D4ED8]" />
                        <span>Google Meet / Zoom Video Link Dispatched</span>
                      </div>
                    </div>
                  </div>

                  {/* Calendar Sync Options */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2">
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
                      <span>Download .ics</span>
                    </button>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-full border border-slate-300 font-mono text-xs uppercase font-bold text-slate-700 hover:bg-slate-50 cursor-pointer transition-colors"
                    >
                      Schedule Another Session
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ContactPage;
