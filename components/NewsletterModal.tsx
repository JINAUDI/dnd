'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Show modal after 3 seconds delay (only once)
    const timer = setTimeout(() => {
      if (!hasShown && !localStorage.getItem('newsletterDismissed')) {
        setIsOpen(true)
        setHasShown(true)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [hasShown])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem('newsletterDismissed', 'true')
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle newsletter subscription
    handleClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white max-w-md w-full p-8 relative">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter for the latest design insights and project updates.
              </p>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full bg-gray-100 px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-black"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="w-full bg-black text-white px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-gray-800 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

