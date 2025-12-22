'use client'

import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { CSSProperties, PointerEvent, useEffect, useMemo, useState } from 'react'

export type InteractiveType =
  | 'sofa'
  | 'chandelier'
  | 'curtains'
  | 'armchair'
  | 'coffee-table'
  | 'rug'
  | 'shelving'

export type HoverConfig = {
  scale?: number
  lift?: number
  rotate?: number
  parallaxX?: number
  parallaxY?: number
  glow?: boolean
}

export type InteractiveObjectProps = {
  id: string
  type: InteractiveType
  label: string
  description?: string
  ariaLabel?: string
  style: CSSProperties
  hoverConfig?: HoverConfig
  onClick?: () => void
}

const DEFAULT_HOVER: Record<InteractiveType, HoverConfig> = {
  sofa: { scale: 1.02, lift: -6, parallaxX: 6, parallaxY: 4, glow: true },
  chandelier: { scale: 1.02, lift: -4, rotate: 1.5, parallaxX: 4, parallaxY: 4, glow: true },
  curtains: { scale: 1.01, lift: -2, parallaxX: 8, parallaxY: 3 },
  armchair: { scale: 1.02, lift: -5, parallaxX: 5, parallaxY: 3, glow: true },
  'coffee-table': { scale: 1.02, lift: -4, rotate: 2, parallaxX: 5, parallaxY: 4, glow: true },
  rug: { scale: 1.015, lift: -2, parallaxX: 4, parallaxY: 2 },
  shelving: { scale: 1.02, lift: -3, parallaxX: 4, parallaxY: 3, glow: true },
}

/**
 * InteractiveObject
 * Absolute-positioned hotspot overlay that adds premium hover + parallax motion.
 */
export function InteractiveObject({
  id,
  type,
  label,
  description,
  ariaLabel,
  style,
  hoverConfig,
  onClick,
}: InteractiveObjectProps) {
  const prefersReducedMotion = useReducedMotion()
  const [hovered, setHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Detect mobile for reduced interactions (client-side only)
  useEffect(() => {
    setMounted(true)
    setIsMobile(window.innerWidth < 768)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const config = useMemo(() => {
    return {
      ...DEFAULT_HOVER[type],
      ...hoverConfig,
    }
  }, [type, hoverConfig])

  const motionX = useMotionValue(0)
  const motionY = useMotionValue(0)
  const rotateValue = useMotionValue(0)
  const springX = useSpring(motionX, { stiffness: 140, damping: 20, mass: 0.4 })
  const springY = useSpring(motionY, { stiffness: 140, damping: 20, mass: 0.4 })
  const springRotate = useSpring(rotateValue, { stiffness: 120, damping: 18, mass: 0.4 })

  const handlePointerMove = (event: PointerEvent<HTMLButtonElement>) => {
    if (!mounted || prefersReducedMotion || isMobile) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - bounds.left
    const y = event.clientY - bounds.top
    const relativeX = (x / bounds.width) * 2 - 1
    const relativeY = (y / bounds.height) * 2 - 1

    // Reduced parallax on mobile
    const parallaxMultiplier = isMobile ? 0.3 : 1
    motionX.set(relativeX * (config.parallaxX ?? 0) * parallaxMultiplier)
    motionY.set(relativeY * (config.parallaxY ?? 0) * parallaxMultiplier)
    
    // Cursor-reactive rotation for coffee table and chandelier (desktop only)
    if (config.rotate && (type === 'coffee-table' || type === 'chandelier') && !isMobile) {
      rotateValue.set(relativeX * (config.rotate ?? 0))
    }
  }

  const handlePointerLeave = () => {
    setHovered(false)
    motionX.set(0)
    motionY.set(0)
    rotateValue.set(0)
  }

  return (
    <motion.button
      id={id}
      type="button"
      aria-label={ariaLabel ?? label}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      onClick={onClick}
      className="absolute z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
      style={{
        ...style,
        x: !mounted || prefersReducedMotion || isMobile ? 0 : springX,
        y: !mounted || prefersReducedMotion || isMobile ? 0 : springY,
        rotate: !mounted || prefersReducedMotion || !hovered || !config.rotate || isMobile ? 0 : springRotate,
        transformOrigin: 'center center',
      }}
      animate={
        !mounted || prefersReducedMotion
          ? {}
          : {
              scale: hovered ? (isMobile ? 1.01 : config.scale ?? 1.02) : 1,
              y: hovered ? (isMobile ? -2 : config.lift ?? -4) : 0,
              boxShadow: hovered
                ? isMobile
                  ? '0 15px 40px rgba(0,0,0,0.3)'
                  : '0 25px 65px rgba(0,0,0,0.4)'
                : '0 12px 35px rgba(0,0,0,0.2)',
            }
      }
      transition={{ duration: 0.35, ease: [0.2, 0.9, 0.2, 1] }}
    >
      <span className="sr-only">{label}</span>
      <motion.span
        aria-hidden="true"
        className="block h-full w-full rounded-3xl border border-white/15 bg-white/8 backdrop-blur-sm"
        animate={
          hovered && !prefersReducedMotion
            ? {
                backgroundColor: 'rgba(255,255,255,0.12)',
                borderColor: 'rgba(255,255,255,0.3)',
              }
            : { backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.12)' }
        }
        transition={{ duration: 0.3, ease: [0.2, 0.9, 0.2, 1] }}
      />
      {description && (
        <motion.span
          initial={{ opacity: 0, y: 5 }}
          animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
          transition={{ duration: 0.2 }}
          className="pointer-events-none absolute left-1/2 top-full mt-3 hidden -translate-x-1/2 whitespace-nowrap rounded-full bg-white/85 backdrop-blur-md px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-[#111] shadow-[0_8px_24px_rgba(0,0,0,0.15)] lg:flex"
        >
          {description}
        </motion.span>
      )}
      {config.glow && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[32px] blur-2xl"
          animate={{
            opacity: hovered ? (isMobile ? 0.3 : 0.6) : 0,
            backgroundColor: type === 'chandelier' ? 'rgba(255, 220, 150, 0.15)' : 'rgba(255, 255, 255, 0.12)',
          }}
          transition={{ duration: 0.35 }}
        />
      )}
    </motion.button>
  )
}


