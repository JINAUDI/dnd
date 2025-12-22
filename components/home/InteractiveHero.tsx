'use client'

/**
 * InteractiveHero Component
 * 
 * Full-screen hero with 6 interactive clickable hotspots.
 * Each hotspot redirects to a category page when clicked.
 * 
 * Hotspots:
 * 1. Chandelier (top center)
 * 2. Curtains (left side)
 * 3. Wall (center back)
 * 4. Sofa (center)
 * 5. Vase with stand (right side)
 * 6. Wooden flooring (bottom)
 */

import Link from 'next/link'

export default function InteractiveHero() {
  const hotspots = [
    {
      name: 'Chandelier',
      href: '/category/chandelier',
      style: {
        top: '5%',
        left: '40%',
        width: '20%',
        height: '15%',
      },
    },
    {
      name: 'Curtains',
      href: '/category/curtains',
      style: {
        top: '10%',
        left: '2%',
        width: '15%',
        height: '65%',
      },
    },
    {
      name: 'Wall',
      href: '/category/wall',
      style: {
        top: '20%',
        left: '30%',
        width: '40%',
        height: '35%',
      },
    },
    {
      name: 'Sofa',
      href: '/category/sofa',
      style: {
        top: '50%',
        left: '15%',
        width: '70%',
        height: '30%',
      },
    },
    {
      name: 'Vase',
      href: '/category/vase',
      style: {
        top: '50%',
        left: '82%',
        width: '16%',
        height: '35%',
      },
    },
    {
      name: 'Flooring',
      href: '/category/flooring',
      style: {
        top: '80%',
        left: '5%',
        width: '90%',
        height: '20%',
      },
    },
  ]

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Background image */}
      <img
        src="/assets/hero/ChatGPT Image Nov 21, 2025, 12_13_01 PM.png"
        alt="Elegant living room with sofa, chandelier, curtains, stone wall and wooden floor"
        className="w-full h-full object-cover"
        loading="eager"
      />

      {/* Interactive hotspots */}
      {hotspots.map((hotspot) => (
        <Link
          key={hotspot.href}
          href={hotspot.href}
          className="absolute group cursor-pointer transition-all duration-300 hover:bg-white/5"
          style={{
            top: hotspot.style.top,
            left: hotspot.style.left,
            width: hotspot.style.width,
            height: hotspot.style.height,
          }}
          title={hotspot.name}
        >
          {/* Tooltip on hover */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-black/80 text-white text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            {hotspot.name}
          </div>
        </Link>
      ))}
    </div>
  )
}
