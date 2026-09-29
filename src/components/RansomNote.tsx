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
  '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
]

// Official NAIR.AI Website Theme Palette scraps (high-contrast, distinct cards in website colors)
export const WEBSITE_THEME_PALETTE = [
  { bg: '#0A192F', text: '#FFFFFF', border: '#030712' }, // Sovereign Midnight Navy
  { bg: '#DC2626', text: '#FFFFFF', border: '#7F1D1D' }, // Brand Crimson Red
  { bg: '#FFFFFF', text: '#0A192F', border: '#0A192F' }, // Crisp White / Navy Letter & Dark Border
  { bg: '#1D4ED8', text: '#FFFFFF', border: '#172554' }, // Royal Electric Blue
  { bg: '#FFFFFF', text: '#DC2626', border: '#DC2626' }, // Crisp White / Red Letter & Red Border
  { bg: '#0F172A', text: '#38BDF8', border: '#0284C7' }, // Deep Slate / Cyan Letter & Blue Border
]

export const RansomNote: React.FC<RansomNoteProps> = ({
  text,
  seed = 2026,
  intensity = 0.35,
  animate = 'assemble',
  fonts = DEFAULT_FONTS,
  palette = WEBSITE_THEME_PALETTE,
  rotation = 3,
  className,
  wordClassName,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion()

  const sentencesLayout = useMemo(() => {
    const rng = createSeededRandom(seed)
    // Split into sentences / lines by newline or period
    const rawSentences = text.includes('\n')
      ? text.split('\n')
      : text.split(/(?<=\.)\s+/)
    let globalCharIndex = 0
    let lastColorIndex = -1

    return rawSentences.map((sentence) => {
      const words = sentence.trim().split(/\s+/).filter(Boolean)
      return words.map((word) => {
        const chars = Array.from(word).map((char) => {
          const charIdx = globalCharIndex++
          const font = fonts[Math.floor(rng() * fonts.length)]

          // Guarantee adjacent letters never share the same color pair
          let colorIdx = Math.floor(rng() * palette.length)
          if (colorIdx === lastColorIndex) {
            colorIdx = (colorIdx + 1) % palette.length
          }
          lastColorIndex = colorIdx
          const colorPair = palette[colorIdx]

          const rot = Math.round((rng() * 2 - 1) * rotation * intensity * 10) / 10
          const offsetY = Math.round((rng() * 2 - 1) * 3 * intensity)
          const offsetX = Math.round((rng() * 2 - 1) * 2 * intensity)
          const paddingX = Math.round(8 + rng() * 3 * intensity)
          const paddingY = Math.round(6 + rng() * 3 * intensity)

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
    })
  }, [text, seed, intensity, fonts, palette, rotation])

  return (
    <div
      data-slot="ransom-note"
      className={cn('relative flex flex-col items-center justify-center gap-8 sm:gap-12 md:gap-16 select-none', className)}
      {...props}
    >
      <span className="sr-only">{text.replace('\n', ' ')}</span>

      {sentencesLayout.map((wordsInSentence, sIdx) => (
        <div
          key={sIdx}
          className="inline-flex flex-wrap items-center justify-center gap-x-3.5 sm:gap-x-5 md:gap-x-6 gap-y-2.5 sm:gap-y-3.5"
          aria-hidden="true"
        >
          {wordsInSentence.map((wordChars, wIdx) => (
            <span
              key={wIdx}
              className={cn('inline-flex items-center gap-1 sm:gap-1.5 md:gap-2 whitespace-nowrap', wordClassName)}
            >
              {wordChars.map((scrap) => {
                const baseStyle: React.CSSProperties = {
                  fontFamily: scrap.font,
                  backgroundColor: scrap.colorPair.bg,
                  color: scrap.colorPair.text,
                  border: `2px solid ${scrap.colorPair.border || '#0A192F'}`,
                  boxShadow: '0 4px 10px -2px rgba(10, 25, 47, 0.22), 2px 2px 0px rgba(10, 25, 47, 0.18)',
                  borderRadius: '6px',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  imageRendering: 'crisp-edges',
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
                      className="inline-block px-1.5 py-0.5 sm:px-2.5 sm:py-1 md:px-3 md:py-1.5 font-black text-xs sm:text-lg md:text-2xl lg:text-3xl leading-none uppercase tracking-tight"
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
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{
                      duration: 0.5,
                      delay: 0.05 + (scrap.charIdx % 10) * 0.025,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{
                      scale: 1.15,
                      rotate: scrap.rot * 2,
                      zIndex: 30,
                      transition: { duration: 0.15 },
                    }}
                    className="inline-block px-1.5 py-0.5 sm:px-2.5 sm:py-1 md:px-3 md:py-1.5 font-black text-xs sm:text-lg md:text-2xl lg:text-3xl leading-none uppercase tracking-tight cursor-default select-none"
                  >
                    {scrap.char}
                  </motion.span>
                )
              })}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}

export default RansomNote
