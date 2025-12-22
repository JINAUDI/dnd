'use client'

import CategoryGrid from '@/components/CategoryGrid'
import { vaseStandProducts } from '@/src/data/categoryProducts'

export default function VaseStandPage() {
  return (
    <main className="min-h-screen bg-[#050608] text-white">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-amber-900/20 to-transparent py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Vases & Decorative Stands</h1>
          <p className="mt-3 text-base sm:text-lg text-white/70">
            Add elegance to your décor with beautiful vases and display stands. Ceramic, crystal, marble, and artisan pieces.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <CategoryGrid products={vaseStandProducts} />
      </section>
    </main>
  )
}
