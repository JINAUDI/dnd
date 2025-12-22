'use client'

import Link from 'next/link'

const vaseProducts = [
  { id: 1, name: 'Ceramic White Vase Set', price: '₹4,500', image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop' },
  { id: 2, name: 'Crystal Cut Glass Vase', price: '₹6,800', image: 'https://images.unsplash.com/photo-1578926078328-123456789?w=500&h=500&fit=crop' },
  { id: 3, name: 'Marble Pedestal Table + Vase', price: '₹12,500', image: 'https://images.unsplash.com/photo-1595359707802-91d3172a6c84?w=500&h=500&fit=crop' },
  { id: 4, name: 'Minimalist Metal Stand Vase', price: '₹3,200', image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&h=500&fit=crop' },
  { id: 5, name: 'Bohemian Rattan Vase', price: '₹2,800', image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&h=500&fit=crop' },
]

export default function VasePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="sticky top-0 z-40 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-4">Vases & Decorative Stands</h1>
        <p className="text-lg text-white/70 mb-8 max-w-2xl">
          Add elegance to your décor with beautiful vases and display stands. Ceramic, crystal, marble, and artisan pieces.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vaseProducts.map((product) => (
            <div key={product.id} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:border-amber-400/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-56 bg-black/50 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-amber-400 transition-colors">{product.name}</h3>
                <p className="text-amber-400 text-xl font-bold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
