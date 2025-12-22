'use client'

/**
 * FullscreenHero Component
 * 
 * Uses CSS background-size: cover to display a fullscreen background image.
 * The image will cover the entire viewport without margins or whitespace.
 * 
 * Features:
 * - 100vw x 100vh fullscreen coverage
 * - background-size: cover for responsive scaling
 * - Centered background positioning
 * - No repeat
 * - Removes default margins from body
 */

export default function FullscreenHero() {
  return (
    <div
      className="w-screen h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/assets/home/sofa-room.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
      }}
    />
  )
}
