'use client'

import React, { useMemo } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

export interface RansomNoteProps extends React.ComponentPropsWithoutRef<'div'> {
  text: string
  seed?: number
  intensity?: number // 0 (calm) to 1 (wild)
  animate?: 'assemble' | 'jitter' | 'none'
  fonts?: string[]
  palette?: { bg: string; text: string; border?: string }[]
  rotation?: number // max rotation in degrees
  className?: string
  wordClassName?: string
}

// Deterministic Mulberry32 Seeded PRNG
function createSeededRandom(seed: number) {
  let s = seed >>> 0
  return function () {
    s = (s + 0x6d2b79f5) | 0
    let t = Math.imul(s ^ (s >>> 15), 1 | s)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const DEFAULT_FONTS = [
  '"JetBrains Mono", ui-monospace, monospace',
  '"Sora", "Inter", sans-serif',
  'Impact, "Arial Black", sans-serif',
  'Georgia, "Times New Roman", serif',
  '"Trebuchet MS", sans-serif',
]

// High-end Blue, White & Red Ransom Tile Palette
const BRAND_PALETTE = [
  { bg: '#0A192F', text: '#FFFFFF', border: '#071326' }, // Midnight Navy
  { bg: '#DC2626', text: '#FFFFFF', border: '#991B1B' }, // Crimson Red
  { bg: '#FFFFFF', text: '#0A192F', border: '#CBD5E1' }, // Clean White
  { bg: '#1D4ED8', text: '#FFFFFF', border: '#1E40AF' }, // Royal Blue
  { bg: '#F8FAFC', text: '#1D4ED8', border: '#94A3B8' }, // Crisp Slate
]

export const RansomNote: React.FC<RansomNoteProps> = ({
  text,
  seed = 2026,
  intensity = 0.45,
  animate = 'assemble',
  fonts = DEFAULT_FONTS,
  palette = BRAND_PALETTE,
  rotation = 5,
  className,
  wordClassName,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion()

  const wordsLayout = useMemo(() => {
    const rng = createSeededRandom(seed)
    const words = text.split(' ')
    let globalCharIndex = 0

    return words.map((word) => {
      const chars = Array.from(word).map((char) => {
        const charIdx = globalCharIndex++
        const font = fonts[Math.floor(rng() * fonts.length)]
        const colorPair = palette[Math.floor(rng() * palette.length)]
        const rot = Math.round((rng() * 2 - 1) * rotation * intensity * 10) / 10
        const offsetY = Math.round((rng() * 2 - 1) * 3 * intensity)
        const offsetX = Math.round((rng() * 2 - 1) * 2 * intensity)
        const paddingX = Math.round(9 + rng() * 4 * intensity)
        const paddingY = Math.round(7 + rng() * 3 * intensity)

        const flyX = Math.round((rng() * 2 - 1) * 35)
        const flyY = Math.round((rng() * 2 - 1) * 35 + 10)

        return {
          char,
          charIdx,
          font,
          colorPair,
          rot,
          offsetY,
          offsetX,
          paddingX,
          paddingY,
          flyX,
          flyY,
        }
      })
      return chars
    })
  }, [text, seed, intensity, fonts, palette, rotation])

  return (
    <div
      data-slot="ransom-note"
      className={cn('relative inline-flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-5 select-none', className)}
      {...props}
    >
      <span className="sr-only">{text}</span>

      <div className="inline-flex flex-wrap items-center justify-center gap-x-3.5 sm:gap-x-4.5 gap-y-3.5" aria-hidden="true">
        {wordsLayout.map((wordChars, wIdx) => (
          <span
            key={wIdx}
            className={cn('inline-flex items-center gap-1 sm:gap-1.5 whitespace-nowrap', wordClassName)}
          >
            {wordChars.map((scrap) => {
              const baseStyle: React.CSSProperties = {
                fontFamily: scrap.font,
                backgroundColor: scrap.colorPair.bg,
                color: scrap.colorPair.text,
                padding: `${scrap.paddingY}px ${scrap.paddingX}px`,
                border: `1.5px solid ${scrap.colorPair.border || '#0C342C'}`,
                boxShadow: '0 4px 12px -2px rgba(6, 35, 29, 0.12), 2px 2px 0px rgba(6, 35, 29, 0.08)',
                borderRadius: '4px',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'translateZ(0)',
              }

              if (shouldReduceMotion || animate === 'none') {
                return (
                  <span
                    key={scrap.charIdx}
                    style={{
                      ...baseStyle,
                      transform: `rotate(${scrap.rot}deg) translate(${scrap.offsetX}px, ${scrap.offsetY}px) translateZ(0)`,
                    }}
                    className="inline-block font-black text-lg sm:text-2xl md:text-3xl leading-none uppercase tracking-tight"
                  >
                    {scrap.char}
                  </span>
                )
              }

              return (
                <motion.span
                  key={scrap.charIdx}
                  style={baseStyle}
                  initial={{
                    opacity: 0,
                    x: scrap.flyX,
                    y: scrap.flyY,
                    rotate: scrap.rot * 1.6,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: scrap.offsetX,
                    y: scrap.offsetY,
                    rotate: scrap.rot,
                    scale: 1,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.45,
                    delay: scrap.charIdx * 0.018,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block font-black text-lg sm:text-2xl md:text-3xl leading-none uppercase tracking-tight will-change-transform transform-gpu"
                >
                  {scrap.char}
                </motion.span>
              )
            })}
          </span>
        ))}
      </div>
    </div>
  )
}

export default RansomNote
