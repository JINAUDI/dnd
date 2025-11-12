'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We begin with an in-depth conversation to understand your vision, lifestyle, and requirements. This helps us create a design that truly reflects your personality and needs.',
  },
  {
    number: '02',
    title: 'Site Visit & Analysis',
    description: 'Our team conducts a thorough site visit to assess the space, lighting, structure, and any constraints. We document everything needed to create an accurate design plan.',
  },
  {
    number: '03',
    title: 'Design Development',
    description: 'We develop comprehensive design concepts including floor plans, 3D visualizations, material selections, and color schemes. Multiple options are presented for your review.',
  },
  {
    number: '04',
    title: 'Approval & Refinement',
    description: 'Based on your feedback, we refine the design until it perfectly matches your vision. All details are finalized, including materials, finishes, and specifications.',
  },
  {
    number: '05',
    title: 'Project Management',
    description: 'We coordinate with contractors, suppliers, and artisans to ensure smooth execution. Regular site visits and updates keep you informed throughout the process.',
  },
  {
    number: '06',
    title: 'Installation & Styling',
    description: 'Our team oversees the installation of all elements, ensuring quality and precision. Final styling and accessories complete the transformation.',
  },
  {
    number: '07',
    title: 'Final Walkthrough',
    description: 'We conduct a comprehensive walkthrough to ensure everything meets our high standards. Your feedback is addressed, and we provide guidance for maintaining your new space.',
  },
]

export default function ProcessSteps() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              ref={index === 0 ? ref : undefined}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-16 last:mb-0"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="text-6xl lg:text-7xl font-bold text-gray-200 leading-none">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="ml-8 md:ml-16 mt-8 mb-8">
                  <div className="w-px h-16 bg-gray-200" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

