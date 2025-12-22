'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef } from 'react'

type QuickViewPanelProps = {
  isOpen: boolean
  title: string
  description: string
  images: string[]
  onClose: () => void
}

export function QuickViewPanel({ isOpen, title, description, images, onClose }: QuickViewPanelProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const previousActiveElementRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (isOpen) {
      previousActiveElementRef.current = document.activeElement as HTMLElement
      closeButtonRef.current?.focus()
    } else if (previousActiveElementRef.current) {
      previousActiveElementRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 flex items-stretch justify-end bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
          aria-labelledby="quickview-title"
          onClick={onClose}
        >
          <motion.aside
            className="relative h-full bg-[#101010] text-white shadow-2xl w-full md:w-[var(--quickview-width-desktop)] max-w-xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <header className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <h2 id="quickview-title" className="text-lg font-semibold tracking-tight">
                {title}
              </h2>
              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Close sofa details"
                onClick={onClose}
                className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Close
              </button>
            </header>

            <div className="flex flex-col gap-4 px-6 py-5 overflow-y-auto h-[calc(100%-64px)]">
              <p className="text-sm text-white/70 leading-relaxed">{description}</p>
              <div className="grid grid-cols-1 gap-3">
                {images.map((src) => (
                  <div key={src} className="relative h-40 w-full overflow-hidden rounded-xl bg-white/5">
                    <Image
                      src={src}
                      alt={title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 90vw, 420px"
                      priority={false}
                    />
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold tracking-wide text-black hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-black"
              >
                View Projects
              </button>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


