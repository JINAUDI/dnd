'use client'

import CategoryGrid from '@/components/CategoryGrid'
import { stoneCladdingProducts } from '@/src/data/categoryProducts'

export default function StoneCladPage() {
  return (
    <main className="min-h-screen bg-[#050608] text-white">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-amber-900/20 to-transparent py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Stone Cladding Walls</h1>
          <p className="mt-3 text-base sm:text-lg text-white/70">
            Elevate your walls with premium stone cladding. Natural slate, limestone, granite, and more for a sophisticated accent.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <CategoryGrid products={stoneCladdingProducts} />
      </section>
    </main>
  )
}
