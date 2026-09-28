import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  Clock,
  Video,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Globe,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface DateSlot {
  dateStr: string; // 'YYYY-MM-DD'
  dayName: string; // 'Thu'
  dayNumber: number; // 15
  monthName: string; // 'Oct'
  label: string; // 'Thu, Oct 15'
}

interface EnlargedCalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: DateSlot;
  onSelectDate: (slot: DateSlot) => void;
  selectedTime: string;
  onSelectTime: (time: string) => void;
  availableTimeSlots: string[];
}

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const SHORT_MONTH_NAMES = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const EnlargedCalendarModal: React.FC<EnlargedCalendarModalProps> = ({
  isOpen,
  onClose,
  selectedDate,
  onSelectDate,
  selectedTime,
  onSelectTime,
  availableTimeSlots,
}) => {
  const modalScrollRef = useRef<HTMLDivElement>(null);

  // Parse current selectedDate to initialize calendar month/year
  const initialDate = React.useMemo(() => {
    if (selectedDate?.dateStr) {
      const parts = selectedDate.dateStr.split('-');
      if (parts.length === 3) {
        return new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
      }
    }
    return new Date();
  }, [selectedDate]);

  const [currentYear, setCurrentYear] = useState<number>(initialDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState<number>(initialDate.getMonth());
  const [tempSelectedDate, setTempSelectedDate] = useState<DateSlot>(selectedDate);
  const [tempSelectedTime, setTempSelectedTime] = useState<string>(selectedTime);
  const [timezone, setTimezone] = useState<string>('EST (UTC-5)');

  // Sync state if selectedDate/time changes externally
  useEffect(() => {
    if (selectedDate) {
      setTempSelectedDate(selectedDate);
      const parts = selectedDate.dateStr.split('-');
      if (parts.length === 3) {
        setCurrentYear(parseInt(parts[0]));
        setCurrentMonth(parseInt(parts[1]) - 1);
      }
    }
    if (selectedTime) {
      setTempSelectedTime(selectedTime);
    }
  }, [selectedDate, selectedTime, isOpen]);

  // Lock scroll and handle ESC key
  useEffect(() => {
    if (!isOpen) return;

    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    lenis?.stop();

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      lenis?.start();
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || typeof document === 'undefined') return null;

  // Wheel event for modal scroll
  const handleWheelScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (modalScrollRef.current) {
      modalScrollRef.current.scrollTop += e.deltaY;
    }
  };

  // Calendar math
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay(); // 0 for Sunday
  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const jumpToToday = () => {
    const now = new Date();
    setCurrentYear(now.getFullYear());
    setCurrentMonth(now.getMonth());
  };

  // Handle Day Click
  const handleDayClick = (dayNumber: number) => {
    const candidate = new Date(currentYear, currentMonth, dayNumber);
    candidate.setHours(0, 0, 0, 0);

    // Don't select past days
    if (candidate < today) return;

    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(
      dayNumber
    ).padStart(2, '0')}`;
    const dayOfWeek = candidate.getDay();
    const dayName = DAY_NAMES[dayOfWeek];
    const monthName = SHORT_MONTH_NAMES[currentMonth];

    const slot: DateSlot = {
      dateStr,
      dayName,
      dayNumber,
      monthName,
      label: `${dayName}, ${monthName} ${dayNumber}`,
    };

    setTempSelectedDate(slot);
  };

  const handleConfirm = () => {
    onSelectDate(tempSelectedDate);
    onSelectTime(tempSelectedTime);
    onClose();
  };

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      data-lenis-prevent="true"
      onWheel={handleWheelScroll}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-5 md:p-6 bg-[#0A192F]/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <motion.div
        ref={modalScrollRef}
        data-lenis-prevent="true"
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white border border-slate-200/90 rounded-3xl max-w-4xl w-full shadow-2xl relative max-h-[92vh] overflow-y-auto overscroll-contain text-[#0A192F] flex flex-col"
      >
        {/* Header Bar */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md z-20 px-6 sm:px-8 py-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#1D4ED8] border border-blue-200/80 flex items-center justify-center shadow-xs">
              <CalendarIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#0A192F]">
                  Executive Strategy Scheduler
                </h2>
                <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-blue-100/70 text-[#1D4ED8]">
                  <Sparkles className="w-3 h-3" /> Live Calendar
                </span>
              </div>
              <p className="text-xs text-slate-500 font-normal">
                Select your preferred date &amp; time slot with our senior architecture team.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-[#0A192F] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close calendar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Main Two-Column Calendar Body */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Full Month Grid (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Month Navigation Strip */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-xl sm:text-2xl text-[#0A192F]">
                  {MONTH_NAMES[currentMonth]} {currentYear}
                </span>
                <button
                  type="button"
                  onClick={jumpToToday}
                  className="px-2.5 py-1 text-[11px] font-mono uppercase font-bold text-[#1D4ED8] bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors cursor-pointer"
                >
                  Today
                </button>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={prevMonth}
                  className="w-8 h-8 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50 text-slate-600 hover:text-[#1D4ED8] flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Previous month"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextMonth}
                  className="w-8 h-8 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50 text-slate-600 hover:text-[#1D4ED8] flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Next month"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Weekday Names Header */}
            <div className="grid grid-cols-7 gap-1.5 text-center">
              {DAY_NAMES.map((name, idx) => (
                <div
                  key={name}
                  className={`text-[11px] font-mono font-bold uppercase py-1.5 ${
                    idx === 0 || idx === 6 ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {name}
                </div>
              ))}
            </div>

            {/* Day Grid Matrix */}
            <div className="grid grid-cols-7 gap-1.5">
              {/* Previous Month Trailing Days */}
              {Array.from({ length: firstDayOfWeek }).map((_, i) => {
                const prevDayNum = daysInPrevMonth - firstDayOfWeek + i + 1;
                return (
                  <div
                    key={`prev-${i}`}
                    className="h-11 sm:h-12 rounded-xl flex items-center justify-center text-xs font-mono text-slate-300 select-none bg-slate-50/50"
                  >
                    {prevDayNum}
                  </div>
                );
              })}

              {/* Current Month Active Days */}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const dayNumber = i + 1;
                const candidate = new Date(currentYear, currentMonth, dayNumber);
                candidate.setHours(0, 0, 0, 0);

                const isPast = candidate < today;
                const isCurrentToday = candidate.getTime() === today.getTime();
                const isWeekend = candidate.getDay() === 0 || candidate.getDay() === 6;

                const candidateDateStr = `${currentYear}-${String(currentMonth + 1).padStart(
                  2,
                  '0'
                )}-${String(dayNumber).padStart(2, '0')}`;
                const isSelected = tempSelectedDate?.dateStr === candidateDateStr;

                return (
                  <button
                    key={dayNumber}
                    type="button"
                    disabled={isPast}
                    onClick={() => handleDayClick(dayNumber)}
                    className={`h-11 sm:h-12 rounded-xl flex flex-col items-center justify-center relative transition-all duration-150 cursor-pointer ${
                      isSelected
                        ? 'bg-[#1D4ED8] text-white font-bold shadow-lg shadow-blue-600/30 scale-105 z-10'
                        : isPast
                        ? 'text-slate-300 cursor-not-allowed bg-transparent'
                        : isWeekend
                        ? 'text-slate-500 hover:bg-slate-100/80 font-medium'
                        : 'text-[#0A192F] hover:bg-blue-50/70 hover:text-[#1D4ED8] hover:border-blue-300 font-bold border border-transparent'
                    } ${isCurrentToday && !isSelected ? 'border border-[#1D4ED8]/60 bg-blue-50/30' : ''}`}
                  >
                    <span className="text-xs sm:text-sm font-display leading-none">
                      {dayNumber}
                    </span>

                    {/* Availability Dot Indicator */}
                    {!isPast && !isSelected && (
                      <span
                        className={`w-1 h-1 rounded-full mt-1 ${
                          isWeekend ? 'bg-amber-400' : 'bg-emerald-500'
                        }`}
                      />
                    )}

                    {isSelected && (
                      <span className="w-1 h-1 rounded-full mt-1 bg-white" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Calendar Legend / Info Bar */}
            <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-100 gap-2">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Available Weekday</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>Weekend (Advisory)</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-[#1D4ED8]" />
                <span className="font-bold text-slate-700">{timezone}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Time Slot & Summary Confirmation (5 cols) */}
          <div className="lg:col-span-5 bg-slate-50/90 rounded-2xl p-5 sm:p-6 border border-slate-200/90 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="font-mono text-[10px] uppercase font-bold text-[#1D4ED8] tracking-wider block mb-1">
                  SELECTED DATE
                </span>
                <h3 className="font-display font-extrabold text-xl text-[#0A192F] leading-snug">
                  {tempSelectedDate?.label || 'Select a date'}
                </h3>
                <span className="text-xs text-slate-500 block mt-0.5">
                  30-Minute AI Systems Feasibility Consultation
                </span>
              </div>

              {/* Time Slots Grid */}
              <div>
                <label className="font-mono text-xs font-bold uppercase tracking-wider text-[#0A192F] flex items-center gap-1.5 mb-2.5">
                  <Clock className="w-3.5 h-3.5 text-[#1D4ED8]" />
                  <span>Choose Available Time Slot</span>
                </label>

                <div className="space-y-2">
                  {availableTimeSlots.map((time) => {
                    const isTimeSelected = tempSelectedTime === time;
                    return (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setTempSelectedTime(time)}
                        className={`w-full py-2.5 px-3.5 rounded-xl border text-xs font-mono font-bold flex items-center justify-between transition-all cursor-pointer ${
                          isTimeSelected
                            ? 'bg-[#0A192F] text-white border-[#0A192F] shadow-sm'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:bg-blue-50/50'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isTimeSelected ? 'bg-blue-400' : 'bg-slate-300'
                            }`}
                          />
                          <span>{time}</span>
                        </span>
                        {isTimeSelected && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Platform Details */}
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2 font-bold text-[#0A192F]">
                  <Video className="w-3.5 h-3.5 text-[#1D4ED8]" />
                  <span>Direct Video Conference</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                  Invitation link (Google Meet / Zoom) will be automatically sent to your work email with calendar invitation upon confirmation.
                </p>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 font-semibold pt-1 border-t border-slate-100">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1D4ED8]" />
                  <span>Protected under standard mutual NDA</span>
                </div>
              </div>
            </div>

            {/* Confirm CTA */}
            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={handleConfirm}
                className="w-full py-3.5 px-5 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-mono text-xs uppercase tracking-wider font-extrabold rounded-full shadow-lg shadow-red-600/25 flex items-center justify-center gap-2 cursor-pointer hover:scale-102 transition-all"
              >
                <span>Confirm Selection ({tempSelectedDate?.dayName}, {tempSelectedDate?.monthName} {tempSelectedDate?.dayNumber})</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 text-xs font-mono text-slate-500 hover:text-[#0A192F] font-bold transition-colors cursor-pointer"
              >
                Cancel &amp; Return
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>,
    document.body
  );
};

export default EnlargedCalendarModal;
