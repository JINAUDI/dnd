"use client"

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function CinematicHero() {
  const heroRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const mediaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Small delay to ensure DOM is ready, then trigger animations
    const timer = setTimeout(() => {
      const textEl = textRef.current
      const mediaEl = mediaRef.current

      if (textEl) {
        textEl.classList.add('is-visible')
      }
      if (mediaEl) {
        mediaEl.classList.add('is-visible')
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section 
      ref={heroRef}
      className="cinematic-hero" 
      aria-label="Homepage hero"
    >
      <div className="cinematic-hero__container">
        {/* Left Column - Text Content */}
        <div 
          ref={textRef}
          className="cinematic-hero__content"
        >
          <h1 className="cinematic-hero__heading">
            Designing Spaces<br />
            With Purpose<br />
            <span className="cinematic-hero__heading--accent">&amp; Precision</span>
          </h1>
          
          <p className="cinematic-hero__subtext">
            We believe architecture should speak quietly but with conviction — 
            where every material, proportion, and detail serves a greater intention.
          </p>

          <Link href="/projects" className="cinematic-hero__cta">
            Explore Work
          </Link>
        </div>

        {/* Right Column - Media */}
        <div 
          ref={mediaRef}
          className="cinematic-hero__media"
        >
          <div className="cinematic-hero__media-wrapper">
            <img
              src="/assets/home/interior-hero.jpg"
              alt="Minimal architectural interior featuring clean lines and natural materials"
              className="cinematic-hero__image"
              draggable={false}
            />
            <div className="cinematic-hero__overlay" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
