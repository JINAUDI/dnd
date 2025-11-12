'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Image from 'next/image'
import { ScrollReveal } from './Scroll'

const projects = [
  {
    slug: 'luxury-residence-mumbai',
    title: 'Luxury Residence, Mumbai',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'modern-office-delhi',
    title: 'Modern Office Space, Delhi',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'boutique-hotel-goa',
    title: 'Boutique Hotel, Goa',
    category: 'Hotels',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'fine-dining-restaurant',
    title: 'Fine Dining Restaurant',
    category: 'Restaurant & Bar',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
]

export default function ProjectsPreview() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <ScrollReveal as="h2" duration={0.7} distance={32} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Featured Projects
          </ScrollReveal>
          <ScrollReveal as="p" delay={0.1} duration={0.7} distance={24} className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our portfolio of exceptional design projects
          </ScrollReveal>
          <ScrollReveal delay={0.2} duration={0.7} distance={20}>
            <Link
              href="/projects"
              className="inline-block text-sm font-medium uppercase tracking-wider border-b-2 border-black hover:border-gray-600 transition-colors"
            >
              View All Projects
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
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
        <div className="relative h-96 overflow-hidden bg-gray-100">
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
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-transform duration-300">
            <div className="text-sm uppercase tracking-wider mb-2 opacity-90">{project.category}</div>
            <h3 className="text-2xl font-semibold">{project.title}</h3>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

