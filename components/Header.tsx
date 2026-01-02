'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { name: 'Our Story', href: '/our-story' },
    { name: 'Our Process', href: '/our-process' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ]

  const baseLink = isScrolled
    ? 'text-gray-900 hover:text-gray-600'
    : 'text-white/80 hover:text-white'
  const ctaClasses = isScrolled
    ? 'bg-black text-white hover:bg-gray-900'
    : 'bg-white text-black hover:bg-gray-100 shadow-[0_18px_40px_rgba(0,0,0,0.25)]'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 text-gray-900 shadow-lg'
          : 'bg-gradient-to-r from-black/45 via-black/20 to-transparent text-white backdrop-blur-xl'
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center z-50">
            <Image
              src="/assets/logo/logo1.png"
              alt="Drishti Nimawat Designs"
              width={1000}
              height={400}
              className={`object-contain max-h-64 lg:max-h-80 w-auto transition-all duration-300 ${
                isScrolled ? 'brightness-0' : 'brightness-100'
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link href={item.href} className={`text-sm font-medium uppercase tracking-wider transition-colors ${baseLink}`}>
                  {item.name}
                </Link>
                {item.dropdown && (
                  <AnimatePresence>
                    {hoveredItem === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl py-4 z-[60]"
                        style={{ pointerEvents: 'auto' }}
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-6 py-2 text-sm text-gray-800 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <Link href="/contact" className={`rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition ${ctaClasses}`}>
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button - Hidden when menu is open */}
          {!isMobileMenuOpen && (
            <button
              className="lg:hidden z-[10001] flex flex-col space-y-1.5"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className={`w-6 h-0.5 ${isScrolled ? 'bg-black' : 'bg-white'}`} />
              <span className={`w-6 h-0.5 ${isScrolled ? 'bg-black' : 'bg-white'}`} />
              <span className={`w-6 h-0.5 ${isScrolled ? 'bg-black' : 'bg-white'}`} />
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Modal */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[10000] lg:hidden"
            style={{ backgroundColor: '#F5F1EB', width: '100vw', height: '100vh', top: 0, left: 0 }}
          >
            {/* Top Bar with Logo and Close Button */}
            <div className="flex items-center justify-between px-4 py-4">
              {/* Logo */}
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <Image
                  src="/assets/logo/logo1.png"
                  alt="Drishti Nimawat Designs"
                  width={250}
                  height={100}
                  className="object-contain brightness-0"
                  style={{ width: '250px', height: 'auto', maxWidth: 'unset', maxHeight: 'unset' }}
                  priority
                />
              </Link>
              
              {/* Close Button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-[#111111] hover:opacity-70 transition-opacity"
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="h-full flex flex-col pt-8 px-8 overflow-y-auto">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block py-5 text-2xl font-semibold uppercase tracking-wider border-b border-[#111111]/20 text-[#111111] hover:opacity-70 transition-opacity"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-4 py-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-2 text-lg font-semibold text-[#111111]/80 hover:text-[#111111] transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="mt-10"
              >
                <Link
                  href="/contact"
                  className="inline-block bg-[#111111] text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#111111]/90 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

