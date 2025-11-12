'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Image from 'next/image'

const categories = ['All', 'Residential', 'Commercial', 'Hotels', 'Restaurant & Bar']

const projects = [
  {
    slug: 'luxury-residence-mumbai',
    title: 'Luxury Residence, Mumbai',
    category: 'Residential',
    location: 'Mumbai, India',
    year: '2024',
    size: '4,500 sq ft',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A stunning modern residence featuring open-plan living spaces and premium finishes.',
  },
  {
    slug: 'modern-office-delhi',
    title: 'Modern Office Space, Delhi',
    category: 'Commercial',
    location: 'Delhi, India',
    year: '2024',
    size: '8,000 sq ft',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Contemporary office design promoting collaboration and productivity.',
  },
  {
    slug: 'boutique-hotel-goa',
    title: 'Boutique Hotel, Goa',
    category: 'Hotels',
    location: 'Goa, India',
    year: '2023',
    size: '15,000 sq ft',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A luxurious boutique hotel with coastal-inspired interiors.',
  },
  {
    slug: 'fine-dining-restaurant',
    title: 'Fine Dining Restaurant',
    category: 'Restaurant & Bar',
    location: 'Bangalore, India',
    year: '2023',
    size: '3,500 sq ft',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Elegant restaurant design creating an intimate dining experience.',
  },
  {
    slug: 'penthouse-apartment',
    title: 'Penthouse Apartment',
    category: 'Residential',
    location: 'Mumbai, India',
    year: '2023',
    size: '3,200 sq ft',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Sophisticated penthouse with panoramic city views.',
  },
  {
    slug: 'retail-store',
    title: 'Premium Retail Store',
    category: 'Commercial',
    location: 'Delhi, India',
    year: '2023',
    size: '2,500 sq ft',
    image: 'https://images.unsplash.com/photo-1555529908-3ba0359ef759?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Modern retail space designed to showcase products beautifully.',
  },
  {
    slug: 'resort-spa',
    title: 'Resort & Spa',
    category: 'Hotels',
    location: 'Kerala, India',
    year: '2022',
    size: '25,000 sq ft',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Tranquil resort design blending nature with luxury.',
  },
  {
    slug: 'rooftop-bar',
    title: 'Rooftop Bar',
    category: 'Restaurant & Bar',
    location: 'Mumbai, India',
    year: '2022',
    size: '2,000 sq ft',
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Vibrant rooftop bar with stunning city skyline views.',
  },
]

export default function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section className="py-20 lg:py-32 bg-white min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Our Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of exceptional design projects
          </p>
        </motion.div>

        {/* Category Filters */}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, inView }: { project: typeof projects[0], index: number, inView: boolean }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="relative h-80 overflow-hidden bg-gray-100">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={`object-cover transition-transform duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isHovered ? 'opacity-40' : 'opacity-0'
          }`} />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300">
            <div className="text-xs uppercase tracking-wider mb-2 opacity-90">{project.category}</div>
            <h3 className="text-xl font-semibold">{project.title}</h3>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

