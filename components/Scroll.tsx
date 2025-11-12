'use client'

import React, { PropsWithChildren, useEffect, useRef } from 'react'
import { motion, useInView, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion'

type ScrollRevealProps = PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements
  delay?: number
  duration?: number
  distance?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  once?: boolean
  className?: string
  threshold?: number
  /** Lighter animation on small screens */
  mobileLight?: boolean
}>

/**
 * ScrollReveal
 * Reveals children on entering viewport with subtle motion and fade.
 * Intended for headers, paragraphs, cards, etc.
 */
export function ScrollReveal({
  as = 'div',
  delay = 0,
  duration = 0.6,
  distance = 30,
  direction = 'up',
  once = true,
  className,
  threshold = 0.15,
  mobileLight = true,
  children,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { amount: threshold, once })

  // Lighter motion on mobile if requested
  const isMobile = typeof window !== 'undefined' ? window.matchMedia('(max-width: 768px)').matches : false
  const effectiveDistance = mobileLight && isMobile ? Math.min(16, distance) : distance
  const base: Record<string, number> = { opacity: 0 }
  if (direction === 'up') base.y = effectiveDistance
  if (direction === 'down') base.y = -effectiveDistance
  if (direction === 'left') base.x = effectiveDistance
  if (direction === 'right') base.x = -effectiveDistance

  return (
    <motion.div
      ref={ref}
      initial={base}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: base.x ?? 0, y: base.y ?? 0 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: 'contents' }}
    >
      {React.createElement(as, { className }, children)}
    </motion.div>
  )
}

type ParallaxProps = PropsWithChildren<{
  /** Negative values move opposite to scroll for depth effect */
  offset?: number
  /** Input start/end in pixels relative to viewport top */
  start?: number
  end?: number
  /** Optional fade range 0..1 across the same start/end */
  fade?: boolean
  className?: string
}>

/**
 * Parallax
 * Applies smooth y-translation tied to scroll progress between start and end.
 * Useful for background images or large hero text.
 */
export function Parallax({ offset = -80, start = -200, end = 300, fade = false, className, children }: ParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollY } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollY, [start, end], [0, offset], { clamp: false })
  const ySpring = useSpring(y, { stiffness: 120, damping: 24, mass: 0.4 })
  const opacity = useTransform(scrollY, [start, end], [1, fade ? 0.85 : 1])

  return (
    <motion.div ref={ref} style={{ y: ySpring, opacity }} className={className}>
      {children}
    </motion.div>
  )
}

/**
 * ScrubOnScroll
 * Turns a numeric progress 0..1 while the element is in view, can be used to drive complex timelines.
 * Provided here for future extensibility if needed.
 */
export function useScrubProgress(threshold: number = 0.1) {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'end 0.1'] })
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 })
  return { ref, progress: smooth }
}


