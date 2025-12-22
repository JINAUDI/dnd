"use client"

import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'

interface Slide {
  id: number
  beforeImage: string
  afterImage: string
  headline: string
  subtext: string
  ctaText: string
  ctaLink: string
}

const slides: Slide[] = [
  {
    id: 1,
    beforeImage: '/assets/hero/hero-sketch.png',
    afterImage: '/assets/hero/hero.png',
    headline: 'Inspiring',
    subtext: 'We blend creativity with technical expertise to build modern, functional, and aesthetic interiors & exteriors.',
    ctaText: 'Explore Our Work',
    ctaLink: '/projects'
  },
  {
    id: 2,
    beforeImage: '/assets/hero/hero-sketch.png',
    afterImage: '/assets/hero/hero.png',
    headline: 'Spaces',
    subtext: 'Designing spaces that inspire living with expert architectural solutions and interior excellence.',
    ctaText: 'View Projects',
    ctaLink: '/projects'
  }
]

export default function BeforeAfterHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [displaySlide, setDisplaySlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  
  const containerRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const afterRef = useRef<HTMLDivElement>(null)
  const positionRef = useRef(50)
  const rafRef = useRef<number | null>(null)

  // GPU-accelerated position update using transforms
  const updateSliderPosition = useCallback((percentage: number) => {
    positionRef.current = percentage
    
    if (sliderRef.current) {
      // Use left percentage for positioning, transform only for centering
      sliderRef.current.style.left = `${percentage}%`
    }
    if (afterRef.current) {
      afterRef.current.style.clipPath = `inset(0 0 0 ${percentage}%)`
    }
  }, [])

  // Throttled move handler using requestAnimationFrame
  const handleMove = useCallback((clientX: number) => {
    if (!isDragging || !containerRef.current) return

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
    }

    rafRef.current = requestAnimationFrame(() => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = clientX - rect.left
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
      updateSliderPosition(percentage)
    })
  }, [isDragging, updateSliderPosition])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    handleMove(e.clientX)
  }, [handleMove])

  const handleTouchMove = useCallback((e: TouchEvent) => {
    e.preventDefault()
    handleMove(e.touches[0].clientX)
  }, [handleMove])

  const handleEnd = useCallback(() => {
    setIsDragging(false)
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
  }, [])

  const handleStart = useCallback(() => {
    setIsDragging(true)
  }, [])

  // Smooth slide transition handler
  const goToSlide = useCallback((index: number) => {
    if (index === currentSlide || isTransitioning) return
    
    setIsTransitioning(true)
    
    // After fade out, change the slide
    setTimeout(() => {
      setDisplaySlide(index)
      setCurrentSlide(index)
      // Reset slider position for new slide
      updateSliderPosition(50)
    }, 400)
    
    // Fade back in
    setTimeout(() => {
      setIsTransitioning(false)
    }, 800)
  }, [currentSlide, isTransitioning, updateSliderPosition])

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true })
      window.addEventListener('mouseup', handleEnd, { passive: true })
      window.addEventListener('touchmove', handleTouchMove, { passive: false })
      window.addEventListener('touchend', handleEnd, { passive: true })
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleEnd)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleEnd)
    }
  }, [isDragging, handleMouseMove, handleTouchMove, handleEnd])

  // Auto-advance slides with smooth transition
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging && !isTransitioning) {
        const nextSlide = (currentSlide + 1) % slides.length
        goToSlide(nextSlide)
      }
    }, 8000)

    return () => clearInterval(interval)
  }, [isDragging, isTransitioning, currentSlide, goToSlide])

  // Initial load animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
      updateSliderPosition(50)
    }, 100)
    return () => clearTimeout(timer)
  }, [updateSliderPosition])

  // Cleanup RAF on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  const slide = slides[displaySlide]

  return (
    <section className="ba-hero" aria-label="Homepage hero slider">
      <div 
        ref={containerRef}
        className={`ba-hero__container ${isTransitioning ? 'is-transitioning' : ''} ${isDragging ? 'is-dragging' : ''}`}
      >
        {/* Slide wrapper for fade transitions */}
        <div className={`ba-hero__slide ${isTransitioning ? 'is-fading' : ''}`}>
          {/* Before Image (Background - Sketch) */}
          <div className="ba-hero__before">
            <img
              src={slide.beforeImage}
              alt="Before transformation - architectural sketch"
              className="ba-hero__image"
              draggable={false}
            />
            <div className="ba-hero__before-overlay" />
            
            <div className={`ba-hero__content ba-hero__content--before ${isLoaded && !isTransitioning ? 'is-visible' : ''}`}>
              <h1 className="ba-hero__headline ba-hero__headline--dark">
                {slide.headline}
              </h1>
              <p className="ba-hero__subtext ba-hero__subtext--dark">
                {slide.subtext}
              </p>
              <Link href={slide.ctaLink} className="ba-hero__cta ba-hero__cta--dark">
                {slide.ctaText}
              </Link>
            </div>
          </div>

          {/* After Image (Clipped - Realistic) */}
          <div 
            ref={afterRef}
            className="ba-hero__after"
            style={{ clipPath: 'inset(0 0 0 50%)' }}
          >
            <img
              src={slide.afterImage}
              alt="After transformation - realistic render"
              className="ba-hero__image"
              draggable={false}
            />
            <div className="ba-hero__after-overlay" />
            
            <div className={`ba-hero__content ba-hero__content--after ${isLoaded && !isTransitioning ? 'is-visible' : ''}`}>
              <h1 className="ba-hero__headline ba-hero__headline--light">
                {slide.headline}
              </h1>
              <p className="ba-hero__subtext ba-hero__subtext--light">
                {slide.subtext}
              </p>
              <Link href={slide.ctaLink} className="ba-hero__cta ba-hero__cta--light">
                {slide.ctaText}
              </Link>
            </div>
          </div>
        </div>

        {/* Slider Handle - Draggable divider for before/after comparison */}
        <div 
          ref={sliderRef}
          className={`ba-hero__slider ${isTransitioning ? 'is-hidden' : ''}`}
          style={{ left: '50%' }}
          onMouseDown={handleStart}
          onTouchStart={handleStart}
          role="slider"
          aria-label="Drag to compare before and after images"
          aria-valuenow={50}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
        >
          <div className="ba-hero__slider-line" />
          <div className="ba-hero__slider-handle">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5L3 12L8 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 5L21 12L16 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="ba-hero__indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`ba-hero__indicator ${index === currentSlide ? 'is-active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              disabled={isTransitioning}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
