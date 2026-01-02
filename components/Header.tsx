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

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden z-50 flex flex-col space-y-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <motion.span animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : {}} className={`w-6 h-0.5 ${isScrolled ? 'bg-black' : 'bg-white'}`} />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : {}}
              className={`w-6 h-0.5 ${isScrolled ? 'bg-black' : 'bg-white'}`}
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : {}}
              className={`w-6 h-0.5 ${isScrolled ? 'bg-black' : 'bg-white'}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 lg:hidden"
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="h-full flex flex-col pt-24 px-8"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block py-4 text-xl font-medium uppercase tracking-wider border-b border-gray-200"
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
                          className="block py-2 text-base text-gray-600"
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
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  className="inline-block bg-black text-white px-8 py-4 text-sm font-medium uppercase tracking-wider"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

