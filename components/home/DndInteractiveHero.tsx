'use client'

import Image from 'next/image'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { QuickViewPanel } from './QuickViewPanel'

export default function DndInteractiveHero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const inView = useInView(sectionRef, { amount: 0.3, once: false })
  const prefersReducedMotion = useReducedMotion()
  const [sofaOpen, setSofaOpen] = useState(false)

  

  return (
    <>
      <section
        ref={sectionRef}
        className="relative isolate overflow-hidden bg-[#101b18] text-white"
        aria-label="DND (Drishti Nimawat Designs) hero"
      >
        <div className="absolute inset-0">
          <Image
            src="/assets/hero/hero-bg.jpg"
            alt="Luxury interior designed by DND"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-[#0c1512] via-[#101b18]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />
        </div>

        <div className="relative z-10 grid min-h-screen grid-cols-1 gap-12 px-6 pb-20 pt-32 sm:px-10 lg:grid-cols-[minmax(0,520px)_1fr] lg:px-16 xl:gap-20">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.6 }}
                className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60"
              >
                DND – DRISHTI NIMAWAT DESIGNS
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.8, ease: [0.2, 0.9, 0.2, 1] }}
                className="text-5xl leading-tight tracking-tight sm:text-6xl lg:text-[4.5rem]"
              >
                Designed for life,
                <br />
                <span className="text-white/80">styled for Luxury</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="max-w-lg text-base text-white/80"
              >
                Drishti Designs create to elevate daily living where life unfolds serine comfort
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-wrap items-center gap-6"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wide text-black shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition ease-[0.2,0.9,0.2,1] hover:-translate-y-1 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Get Started
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <p className="text-sm text-white/70">
                Premium interiors & architectural spaces crafted around the way you live.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.9, ease: [0.2, 0.9, 0.2, 1] }}
            className="relative mx-auto w-full max-w-[720px]"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-[40px] bg-[#151c1a] shadow-[0_40px_120px_rgba(0,0,0,0.65)] hero-image-motion">
                <Image
                  src="/assets/hero/hero-bg.jpg"
                  alt="Luxury interior living room design by DND"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 640px"
                />
              </div>
          </motion.div>
        </div>
      </section>

      <QuickViewPanel
        isOpen={sofaOpen}
        onClose={() => setSofaOpen(false)}
        title="Signature DND Sofa Composition"
        description="A tailored seating composition designed by DND (Drishti Nimawat Designs) to anchor living spaces with generous proportions, layered textures, and a serene, warm palette."
        images={[
          '/assets/hero/sofa-detail-1.jpg',
          '/assets/hero/sofa-detail-2.jpg',
          '/assets/hero/sofa-detail-3.jpg',
        ]}
      />
    </>
  )
}


