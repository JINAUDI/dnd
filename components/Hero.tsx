'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Parallax, ScrollReveal } from './Scroll'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Parallax offset={-120} start={-150} end={350} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Modern interior design by DND"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40" />
      </Parallax>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <ScrollReveal as="h1" delay={0.15} duration={0.9} distance={36} className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 tracking-tight">
          Transform Your Space
          <br />
          <span className="font-light">With Premium Design</span>
        </ScrollReveal>
        <ScrollReveal as="p" delay={0.3} duration={0.9} distance={30} className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
          DND creates exceptional interior and architectural designs that reflect your unique vision and lifestyle.
        </ScrollReveal>
        <ScrollReveal delay={0.45} duration={0.9} distance={28}>
          <Link
            href="/contact"
            className="inline-block bg-white text-black px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-gray-100 transition-colors"
          >
            Start Your Project
          </Link>
        </ScrollReveal>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}

