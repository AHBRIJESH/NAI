'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

export interface PagePreloaderProps {
  columns?: number
  rows?: number
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
  active,
  defaultActive = true,
  duration = 1300,
  container = false,
  onComplete,
  className,
  brandName = 'NAIR.AI',
}) => {
  const isControlled = typeof active === 'boolean'
  const [internalActive, setInternalActive] = useState(defaultActive)
  const [isMounted, setIsMounted] = useState(true)
  const shouldReduceMotion = useReducedMotion()

  const isShowing = isControlled ? active : internalActive

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
    if (container || !isShowing) {
      document.body.style.overflow = ''
      return
    }
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [container, isShowing])

  // Timer: After `duration` ms, initiate pixel dissolve exit
  useEffect(() => {
    if (isControlled || !isMounted) return

    const holdTimer = setTimeout(() => {
      setInternalActive(false)
    }, duration)

    return () => clearTimeout(holdTimer)
  }, [isControlled, duration, isMounted])

  // Failsafe timer: Force unmount and restore overflow
  useEffect(() => {
    const failsafeTimer = setTimeout(() => {
      document.body.style.overflow = ''
      setIsMounted(false)
      if (onComplete) onComplete()
    }, duration + 1400)

    return () => clearTimeout(failsafeTimer)
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
    }, 140)
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
            'z-50 flex items-center justify-center overflow-hidden cursor-pointer select-none',
            className
          )}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 1,
            transition: {
              // Keep parent layer visible until all pixel tiles dissolve
              delay: totalPixels * 0.007 + 0.35,
            },
          }}
        >
          {/* Accessible Screen Reader Announcement */}
          <span className="sr-only">Loading {brandName}... Click to skip.</span>

          {/* PIXEL TRANSITION OUT: Grid of Cream #FFFDEE Tiles Dissolving in Deterministic Order */}
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
                className="w-full h-full bg-[#FFFDEE]"
                initial={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  transition: {
                    duration: 0.28,
                    delay: pixelDelays.get(tileIdx) || 0,
                    ease: 'easeInOut',
                  },
                }}
              />
            ))}
          </div>

          {/* Ambient Lighting Halo Background */}
          <motion.div
            className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden z-1"
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
          >
            <div className="w-[500px] h-[500px] rounded-full bg-radial from-[#E2FBCE]/60 via-[#E3EF26]/15 to-transparent blur-3xl opacity-70 animate-pulse pointer-events-none" />
            <div className="absolute w-[320px] h-[320px] rounded-full bg-radial from-white/90 via-transparent to-transparent blur-2xl pointer-events-none" />
          </motion.div>

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
                duration: 0.3,
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PagePreloader
