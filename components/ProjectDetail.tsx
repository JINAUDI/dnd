'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const projectData: Record<string, {
  title: string
  category: string
  location: string
  year: string
  size: string
  description: string
  heroImage: string
  gallery: string[]
}> = {
  'luxury-residence-mumbai': {
    title: 'Luxury Residence, Mumbai',
    category: 'Residential',
    location: 'Mumbai, India',
    year: '2024',
    size: '4,500 sq ft',
    description: 'A stunning modern residence featuring open-plan living spaces, premium finishes, and seamless indoor-outdoor connectivity. The design emphasizes natural light, clean lines, and sophisticated material choices.',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
  },
  'modern-office-delhi': {
    title: 'Modern Office Space, Delhi',
    category: 'Commercial',
    location: 'Delhi, India',
    year: '2024',
    size: '8,000 sq ft',
    description: 'Contemporary office design promoting collaboration and productivity. The space features flexible work zones, modern amenities, and a vibrant aesthetic that reflects the company culture.',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366754035-f200168a620e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200168a620e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
  },
  'boutique-hotel-goa': {
    title: 'Boutique Hotel, Goa',
    category: 'Hotels',
    location: 'Goa, India',
    year: '2023',
    size: '15,000 sq ft',
    description: 'A luxurious boutique hotel with coastal-inspired interiors. The design blends local craftsmanship with modern luxury, creating a serene and sophisticated atmosphere.',
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
  },
  'fine-dining-restaurant': {
    title: 'Fine Dining Restaurant',
    category: 'Restaurant & Bar',
    location: 'Bangalore, India',
    year: '2023',
    size: '3,500 sq ft',
    description: 'Elegant restaurant design creating an intimate dining experience. The space features sophisticated lighting, premium materials, and a warm, inviting atmosphere.',
    heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
  },
  'penthouse-apartment': {
    title: 'Penthouse Apartment',
    category: 'Residential',
    location: 'Mumbai, India',
    year: '2023',
    size: '3,200 sq ft',
    description: 'Sophisticated penthouse with panoramic city views. The design features luxury finishes, open-plan living, and seamless integration of indoor and outdoor spaces.',
    heroImage: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
  },
  'retail-store': {
    title: 'Premium Retail Store',
    category: 'Commercial',
    location: 'Delhi, India',
    year: '2023',
    size: '2,500 sq ft',
    description: 'Modern retail space designed to showcase products beautifully. The design creates an engaging shopping experience with strategic lighting and layout.',
    heroImage: 'https://images.unsplash.com/photo-1555529908-3ba0359ef759?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555529908-3ba0359ef759?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
  },
  'resort-spa': {
    title: 'Resort & Spa',
    category: 'Hotels',
    location: 'Kerala, India',
    year: '2022',
    size: '25,000 sq ft',
    description: 'Tranquil resort design blending nature with luxury. The space features organic materials, natural lighting, and serene environments for relaxation and rejuvenation.',
    heroImage: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
  },
  'rooftop-bar': {
    title: 'Rooftop Bar',
    category: 'Restaurant & Bar',
    location: 'Mumbai, India',
    year: '2022',
    size: '2,000 sq ft',
    description: 'Vibrant rooftop bar with stunning city skyline views. The design features modern furnishings, ambient lighting, and an energetic atmosphere perfect for socializing.',
    heroImage: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
  },
}

export default function ProjectDetail({ slug }: { slug: string }) {
  const project = projectData[slug] || projectData['luxury-residence-mumbai']
  const [selectedImage, setSelectedImage] = useState(0)
  const allImages = [project.heroImage, ...project.gallery]

  return (
    <div className="pt-20">
      {/* Hero Image */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src={allImages[selectedImage]}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16 text-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-sm uppercase tracking-wider mb-2">{project.category}</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{project.title}</h1>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">{project.description}</p>
              <p className="text-gray-600 leading-relaxed">
                This project showcases our commitment to creating spaces that are both beautiful and
                functional. Every detail was carefully considered to ensure the final result exceeds
                expectations while staying true to the client's vision.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Location</div>
                <div className="text-lg font-semibold">{project.location}</div>
              </div>
              <div>
                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Year</div>
                <div className="text-lg font-semibold">{project.year}</div>
              </div>
              <div>
                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Size</div>
                <div className="text-lg font-semibold">{project.size}</div>
              </div>
              <div>
                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Category</div>
                <div className="text-lg font-semibold">{project.category}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-64 cursor-pointer overflow-hidden group"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Link
            href="/projects"
            className="inline-block text-sm font-medium uppercase tracking-wider border-b-2 border-black hover:border-gray-600 transition-colors"
          >
            ← Back to Projects
          </Link>
        </div>
      </section>
    </div>
  )
}

