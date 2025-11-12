'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const values = [
  {
    title: 'Excellence',
    description: 'We strive for perfection in every detail, ensuring the highest quality in design and execution.',
  },
  {
    title: 'Innovation',
    description: 'We embrace new ideas and technologies to create cutting-edge design solutions.',
  },
  {
    title: 'Integrity',
    description: 'We conduct our business with honesty, transparency, and respect for our clients and partners.',
  },
  {
    title: 'Collaboration',
    description: 'We work closely with clients, contractors, and artisans to bring visions to life.',
  },
]

export default function Values() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Our Values
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

