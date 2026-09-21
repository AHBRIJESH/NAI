'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

export interface PagePreloaderProps {
  active?: boolean
  defaultActive?: boolean
  duration?: number // hold duration in ms before smooth dissolve
  container?: boolean
  onComplete?: () => void
  className?: string
  brandName?: string
}

export const PagePreloader: React.FC<PagePreloaderProps> = ({
  active,
  defaultActive = true,
  duration = 1300,
  container = false,
  onComplete,
  className,
  brandName = 'NAIR.AI',
}) => {
  const [isShowing, setIsShowing] = useState(defaultActive)
  const [isMounted, setIsMounted] = useState(true)
  const shouldReduceMotion = useReducedMotion()

  // Respect controlled `active` prop
  useEffect(() => {
    if (active === false) {
      setIsShowing(false)
    }
  }, [active])

  // Timer: After `duration` ms, initiate smooth dissolve exit
  useEffect(() => {
    if (!isMounted) return

    const holdTimer = setTimeout(() => {
      setIsShowing(false)
    }, duration)

    return () => clearTimeout(holdTimer)
  }, [duration, isMounted])

  // Failsafe timer: Force unmount and restore overflow
  useEffect(() => {
    const failsafeTimer = setTimeout(() => {
      document.body.style.overflow = ''
      setIsMounted(false)
      if (onComplete) onComplete()
    }, duration + 800)

    return () => clearTimeout(failsafeTimer)
  }, [duration, onComplete])

  // Scroll locking for full-page mode
  useEffect(() => {
    if (container || !isShowing) {
      document.body.style.overflow = ''
      return
    }

    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [container, isShowing])

  const handleExitComplete = () => {
    document.body.style.overflow = ''
    setIsMounted(false)
    if (onComplete) onComplete()
  }

  const handleSkip = () => {
    setIsShowing(false)
    document.body.style.overflow = ''
    setTimeout(() => {
      setIsMounted(false)
      if (onComplete) onComplete()
    }, 120)
  }

  if (!isMounted) return null

  if (shouldReduceMotion) {
    if (!isShowing) {
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
          'z-50 bg-[#FFFDEE] flex flex-col items-center justify-center text-[#06231D] cursor-pointer',
          className
        )}
      >
        <span className="sr-only">Loading {brandName}...</span>
        <img
          src="/images/logo.png"
          alt={brandName}
          className="h-12 sm:h-14 w-auto object-contain mb-4"
        />
        <div className="font-mono text-xs text-[#076653] tracking-widest uppercase font-bold">
          CLICK TO ENTER
        </div>
      </div>
    )
  }

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      {isShowing && (
        <motion.div
          role="status"
          aria-live="polite"
          data-slot="page-preloader"
          onClick={handleSkip}
          title="Click to skip"
          className={cn(
            container ? 'absolute inset-0' : 'fixed inset-0',
            'z-50 flex items-center justify-center overflow-hidden cursor-pointer select-none bg-[#FFFDEE]',
            className
          )}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: {
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
        >
          {/* Accessible Screen Reader Announcement */}
          <span className="sr-only">Loading {brandName}... Click to skip.</span>

          {/* Ambient Lighting Halo Background */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
            <div className="w-[500px] h-[500px] rounded-full bg-radial from-[#E2FBCE]/60 via-[#E3EF26]/15 to-transparent blur-3xl opacity-70 animate-pulse" />
            <div className="absolute w-[320px] h-[320px] rounded-full bg-radial from-white/90 via-transparent to-transparent blur-2xl pointer-events-none" />
          </div>

          {/* Center Brand Showcase with Smooth Reveal Animation */}
          <motion.div
            className="relative z-10 flex flex-col items-center justify-center pointer-events-none px-6 text-center"
            initial={{ opacity: 0, y: 12, scale: 0.9, filter: 'blur(10px)' }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
              transition: {
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
            exit={{
              opacity: 0,
              y: -8,
              scale: 1.04,
              filter: 'blur(6px)',
              transition: {
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
          >
            {/* Official Logo Display */}
            <div className="relative flex items-center justify-center mb-5">
              <motion.img
                src="/images/logo.png"
                alt={brandName}
                className="h-12 sm:h-16 md:h-20 w-auto object-contain relative z-10 drop-shadow-[0_8px_24px_rgba(6,35,29,0.08)]"
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            {/* Architectural Telemetry Capsule Below Logo */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full font-mono text-[10px] sm:text-[11px] tracking-[0.24em] uppercase font-bold bg-[#E2FBCE]/80 text-[#06231D] border border-[#076653]/25 shadow-2xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#076653] pulse-beacon" />
              <span>ENTERPRISE AI ARCHITECTURE</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PagePreloader
