'use client'

import Link from 'next/link'

const curtainProducts = [
  { id: 1, name: 'Silk Drape Curtains', price: '₹4,200/pair', image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop' },
  { id: 2, name: 'Linen Neutral Curtains', price: '₹2,800/pair', image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=500&h=500&fit=crop' },
  { id: 3, name: 'Velvet Blackout Curtains', price: '₹3,600/pair', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=500&fit=crop' },
  { id: 4, name: 'Cotton Print Curtains', price: '₹2,200/pair', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=500&fit=crop' },
  { id: 5, name: 'Jacquard Patterned Curtains', price: '₹3,500/pair', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=500&fit=crop' },
]

export default function CurtainsPage() {
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
        <h1 className="text-5xl font-bold mb-4">Curtains & Drapes</h1>
        <p className="text-lg text-white/70 mb-8 max-w-2xl">
          Transform your windows with elegant curtains. Silk, linen, velvet, and cotton options in various styles and colors.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {curtainProducts.map((product) => (
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
