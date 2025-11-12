'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function StoryContent() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About DND</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              DND (Drishti Nimawat Designs) was founded with a vision to transform spaces into
              extraordinary experiences. We believe that great design goes beyond aesthetics—it
              creates environments that inspire, comfort, and enhance the way people live and work.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our team of talented designers and architects brings together years of experience
              in residential and commercial design, combining innovative thinking with meticulous
              attention to detail. Every project we undertake is a unique journey, tailored to
              reflect our clients' individual needs, preferences, and aspirations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From concept to completion, we work closely with our clients to ensure that every
              element of the design aligns with their vision while maintaining the highest standards
              of quality and functionality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-96 lg:h-[500px] mb-16"
          >
            <Image
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="DND Design Team"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              To create beautiful, functional, and sustainable spaces that enrich lives and inspire
              communities. We are committed to excellence in every project, no matter the scale,
              and to building lasting relationships with our clients based on trust, transparency,
              and exceptional service.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our approach is collaborative and client-centered. We listen carefully to understand
              your needs, explore creative solutions, and deliver designs that exceed expectations
              while staying true to your vision and budget.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

