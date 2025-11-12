'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { ScrollReveal } from './Scroll'

const categories = ['All', 'Residential', 'Commercial', 'Interior', 'Architectural']

const features = [
  {
    id: 1,
    category: 'Residential',
    title: 'Residential Design',
    description: 'Custom home designs that blend functionality with aesthetic excellence, creating spaces that truly feel like home.',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    category: 'Commercial',
    title: 'Commercial Spaces',
    description: 'Professional office and retail designs that enhance productivity and customer experience while reflecting your brand identity.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    category: 'Interior',
    title: 'Interior Design',
    description: 'Complete interior transformation services from concept to execution, ensuring every detail reflects your personal style.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    category: 'Architectural',
    title: 'Architectural Services',
    description: 'Comprehensive architectural planning and design services for new constructions and renovations.',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    category: 'Residential',
    title: 'Kitchen Design',
    description: 'Modern and functional kitchen designs that serve as the heart of your home, combining style with practicality.',
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    category: 'Interior',
    title: 'Living Room Design',
    description: 'Create inviting living spaces that balance comfort, style, and functionality for everyday living and entertaining.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    category: 'Interior',
    title: 'Bathroom Design',
    description: 'Luxurious bathroom designs that transform daily routines into spa-like experiences with premium finishes.',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    category: 'Commercial',
    title: 'Restaurant & Bar',
    description: 'Captivating restaurant and bar designs that create memorable dining experiences and enhance customer engagement.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
]

export default function Features() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const filteredFeatures = activeCategory === 'All' 
    ? features 
    : features.filter(f => f.category === activeCategory)

  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <ScrollReveal as="h2" duration={0.7} distance={32} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Explore Features
          </ScrollReveal>
          <ScrollReveal as="p" delay={0.1} duration={0.7} distance={24} className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive design services tailored to your needs
          </ScrollReveal>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm font-medium uppercase tracking-wider transition-colors ${
                activeCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFeatures.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          className={`object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isHovered ? 'opacity-30' : 'opacity-0'
        }`} />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  )
}

