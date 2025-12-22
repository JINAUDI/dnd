'use client'

import Link from 'next/link'

const sofaProducts = [
  {
    id: 1,
    name: 'Classic Tufted Sofa',
    price: '₹48,000',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop',
  },
  {
    id: 2,
    name: 'Modern Minimalist Couch',
    price: '₹42,000',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=500&fit=crop',
  },
  {
    id: 3,
    name: 'Sectional L-Shape Sofa',
    price: '₹65,000',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500&h=500&fit=crop',
  },
  {
    id: 4,
    name: 'Contemporary Gray Sofa',
    price: '₹38,000',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=500&fit=crop',
  },
  {
    id: 5,
    name: 'Luxury Velvet Sofa',
    price: '₹72,000',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=500&fit=crop',
  },
]

export default function SofaPage() {
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
        <h1 className="text-5xl font-bold mb-4">Sofas & Couches</h1>
        <p className="text-lg text-white/70 mb-8 max-w-2xl">
          Discover timeless sofa designs matching your style. From modern minimalist to classic tufted, find the perfect seating for your living space.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sofaProducts.map((product) => (
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
