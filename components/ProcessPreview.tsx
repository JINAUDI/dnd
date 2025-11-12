'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { ScrollReveal } from './Scroll'

const steps = [
  { number: '01', title: 'Initial Consultation', description: 'Understanding your vision and requirements' },
  { number: '02', title: 'Design Development', description: 'Creating detailed design concepts and plans' },
  { number: '03', title: 'Approval & Refinement', description: 'Reviewing and perfecting the design' },
  { number: '04', title: 'Implementation', description: 'Bringing your design to life with precision' },
]

export default function ProcessPreview() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <ScrollReveal as="h2" duration={0.7} distance={32} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Our Process
          </ScrollReveal>
          <ScrollReveal as="p" delay={0.1} duration={0.7} distance={24} className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            A streamlined approach to delivering exceptional design solutions
          </ScrollReveal>
          <ScrollReveal delay={0.2} duration={0.7} distance={20}>
            <Link
              href="/our-process"
              className="inline-block text-sm font-medium uppercase tracking-wider border-b-2 border-black hover:border-gray-600 transition-colors"
            >
              Learn More
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-6xl font-bold text-gray-200 mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

