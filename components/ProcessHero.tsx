'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProcessHero() {
  return (
    <section className="relative h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Our Design Process"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
        >
          Our Process
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
        >
          A streamlined approach to delivering exceptional design solutions
        </motion.p>
      </div>
    </section>
  )
}

