'use client'

import React from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

export interface BottomUpLettersProps extends React.ComponentPropsWithoutRef<'span'> {
  text: string
  delay?: number
  stagger?: number
  triggerOnView?: boolean
  className?: string
  wordClassName?: string
  letterClassName?: string
  as?: React.ElementType
}

export const BottomUpLetters: React.FC<BottomUpLettersProps> = ({
  text,
  delay = 0.1,
  stagger = 0.088, // 88ms per-character stagger for deliberate, one-letter-at-a-time rhythm
  triggerOnView = true,
  className,
  wordClassName,
  letterClassName,
  as: Component = 'span',
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return (
      <Component className={cn('inline-block', className)} {...props}>
        {text}
      </Component>
    )
  }

  // Split into words so words don't break across lines awkwardly
  const words = text.split(' ')
  let charCounter = 0

  const animationProps = triggerOnView
    ? {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true, amount: 0.2 },
      }
    : {
        initial: 'hidden',
        animate: 'visible',
      }

  return (
    <Component
      className={cn('inline-flex flex-wrap justify-center', className)}
      aria-label={text}
      role="text"
      {...props}
    >
      {words.map((word, wordIndex) => {
        const letters = Array.from(word)
        return (
          <span
            key={wordIndex}
            className={cn('inline-flex overflow-hidden whitespace-nowrap', wordClassName)}
            aria-hidden="true"
          >
            {letters.map((char) => {
              const charIndex = charCounter++
              return (
                <motion.span
                  key={charIndex}
                  variants={{
                    hidden: {
                      y: '105%',
                      opacity: 0,
                    },
                    visible: {
                      y: '0%',
                      opacity: 1,
                      transition: {
                        duration: 0.42,
                        ease: [0.16, 1, 0.3, 1], // Smooth premium cubic-bezier curve
                        delay: delay + charIndex * stagger,
                      },
                    },
                  }}
                  {...animationProps}
                  className={cn(
                    'inline-block will-change-transform select-none',
                    letterClassName
                  )}
                >
                  {char}
                </motion.span>
              )
            })}
            {wordIndex < words.length - 1 && (
              <span className="inline-block whitespace-pre">&nbsp;</span>
            )}
          </span>
        )
      })}
    </Component>
  )
}

export default BottomUpLetters
