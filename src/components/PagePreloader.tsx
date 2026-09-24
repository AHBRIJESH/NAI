'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

export interface PagePreloaderProps {
  columns?: number
  rows?: number
  words?: string[]
  active?: boolean
  defaultActive?: boolean
  duration?: number // hold duration in ms before pixel transition out
  container?: boolean
  onComplete?: () => void
  className?: string
  brandName?: string
}

// Deterministic pseudo-random order generator based on a seed
function generateDeterministicOrder(totalTiles: number, seed = 2026): number[] {
  const indices = Array.from({ length: totalTiles }, (_, i) => i)
  let s = seed
  for (let i = indices.length - 1; i > 0; i--) {
    // Linear Congruential Generator
    s = (s * 9301 + 49297) % 233280
    const rnd = s / 233280
    const j = Math.floor(rnd * (i + 1))
    ;[indices[i], indices[j]] = [indices[j], indices[i]]
  }
  return indices
}

export const PagePreloader: React.FC<PagePreloaderProps> = ({
  columns = 10,
  rows = 8,
  words = [
    'Autonomous Strategy.',
    'Cryptographic Governance.',
    'Multi-Agent Automation.',
    'Intelligent Systems.',
    'NAIR.AI',
  ],
  active,
  defaultActive = true,
  duration = 1350,
  container = false,
  onComplete,
  className,
  brandName = 'NAIR.AI',
}) => {
  const isControlled = typeof active === 'boolean'
  const [internalActive, setInternalActive] = useState(defaultActive)
  const [isMounted, setIsMounted] = useState(true)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  const isActive = isControlled ? active : internalActive

  // Total grid tiles
  const totalPixels = columns * rows

  // Deterministic order & staggered exit delays for pixel grid
  const pixelDelays = useMemo(() => {
    const order = generateDeterministicOrder(totalPixels, 2026)
    const map = new Map<number, number>()
    order.forEach((idx, step) => {
      map.set(idx, step * 0.007) // Smooth, high-tech staggered dissolve
    })
    return map
  }, [totalPixels])

  // Scroll locking for full-page mode
  useEffect(() => {
    if (container || !isActive) {
      document.body.style.overflow = ''
      return
    }
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [container, isActive])

  // Word cycling ticker while preloader holds
  useEffect(() => {
    if (words.length <= 1 || !isActive) return
    const intervalMs = Math.max(240, Math.floor(duration / (words.length + 0.5)))
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => {
        if (prev < words.length - 1) return prev + 1
        return prev
      })
    }, intervalMs)
    return () => clearInterval(interval)
  }, [words, duration, isActive])

  // Timer-driven exit trigger when uncontrolled
  useEffect(() => {
    if (isControlled || !isMounted) return
    const timer = setTimeout(() => {
      setInternalActive(false)
    }, duration)
    return () => clearTimeout(timer)
  }, [isControlled, duration, isMounted])

  // Failsafe timer to guarantee overflow unlock & unmount
  useEffect(() => {
    const failsafe = setTimeout(() => {
      document.body.style.overflow = ''
      setIsMounted(false)
      if (onComplete) onComplete()
    }, duration + 1400)
    return () => clearTimeout(failsafe)
  }, [duration, onComplete])

  const handleExitComplete = () => {
    document.body.style.overflow = ''
    setIsMounted(false)
    if (onComplete) onComplete()
  }

  const handleSkip = () => {
    setInternalActive(false)
    document.body.style.overflow = ''
    setTimeout(() => {
      setIsMounted(false)
      if (onComplete) onComplete()
    }, 180)
  }

  if (!isMounted) return null

  // Reduced motion: immediate unmount on exit
  if (shouldReduceMotion) {
    if (!isActive) {
      if (onComplete) onComplete()
      return null
    }
    return (
      <div
        role="status"
        aria-live="polite"
        onClick={handleSkip}
        className={cn(
          container ? 'absolute inset-0' : 'fixed inset-0',
          'z-50 bg-[#030712] flex flex-col items-center justify-center text-white cursor-pointer',
          className
        )}
      >
        <span className="sr-only">Loading {brandName}... Click to skip.</span>
        <img
          src="/images/logo.png"
          alt={brandName}
          className="h-12 w-auto object-contain mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]"
        />
        <div className="font-mono text-xs text-blue-400 tracking-widest uppercase font-bold">
          CLICK TO ENTER
        </div>
      </div>
    )
  }

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      {isActive && (
        <motion.div
          role="status"
          aria-live="polite"
          data-slot="page-preloader"
          onClick={handleSkip}
          title="Click to skip"
          className={cn(
            container ? 'absolute inset-0' : 'fixed inset-0',
            'z-50 flex items-center justify-center overflow-hidden cursor-pointer select-none',
            className
          )}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 1,
            transition: {
              // Keep parent visible until all pixel tiles dissolve
              delay: totalPixels * 0.007 + 0.35,
            },
          }}
        >
          {/* Accessible Screen Reader Announcement */}
          <span className="sr-only">Loading {brandName}... Click to skip.</span>

          {/* PIXEL TRANSITION OUT: Grid of Tiles Dissolving in Deterministic Order */}
          <div
            className="absolute inset-0 pointer-events-none grid z-0"
            style={{
              gridTemplateColumns: `repeat(${columns}, 1fr)`,
              gridTemplateRows: `repeat(${rows}, 1fr)`,
            }}
            aria-hidden="true"
          >
            {Array.from({ length: totalPixels }).map((_, tileIdx) => (
              <motion.div
                key={tileIdx}
                className="w-full h-full bg-[#030712]"
                initial={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  scale: 0.92,
                  transition: {
                    duration: 0.28,
                    delay: pixelDelays.get(tileIdx) || 0,
                    ease: 'easeInOut',
                  },
                }}
              />
            ))}
          </div>

          {/* Ambient Radial Backlight Glow Behind Centerpiece */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden z-1">
            <div className="w-[520px] h-[520px] rounded-full bg-blue-600/15 blur-3xl opacity-60 animate-pulse pointer-events-none" />
            <div className="absolute w-[300px] h-[300px] rounded-full bg-sky-400/10 blur-2xl pointer-events-none" />
          </div>

          {/* Center Brand Showcase: Logo, Cycling Word Ticker, & Live Telemetry */}
          <motion.div
            className="relative z-10 flex flex-col items-center justify-center pointer-events-none px-6 text-center"
            initial={{ opacity: 0, y: 14, scale: 0.92 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.94,
              filter: 'blur(6px)',
              transition: {
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
          >
            {/* Official Logo Display with Luminous Backing */}
            <div className="relative flex items-center justify-center mb-5 px-6 py-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl shadow-blue-500/10">
              <motion.img
                src="/images/logo.png"
                alt={brandName}
                className="h-10 sm:h-12 md:h-14 w-auto object-contain relative z-10 drop-shadow-[0_2px_12px_rgba(255,255,255,0.4)]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            {/* Cycling Word Ticker with Vertical Roll Motion */}
            <div className="h-8 overflow-hidden relative w-80 sm:w-96 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -16, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="font-mono text-xs sm:text-[13px] uppercase tracking-[0.22em] text-[#38BDF8] font-bold"
                >
                  {words[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Micro Telemetry Bar */}
            <div className="mt-4 flex items-center gap-2.5 sm:gap-3 text-[10px] sm:text-[11px] font-mono text-slate-400 tracking-wider">
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                CORE ACTIVE
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">SOC2 COMPLIANT</span>
              <span className="text-slate-600">•</span>
              <span className="text-blue-300">ZERO RETENTION</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PagePreloader
