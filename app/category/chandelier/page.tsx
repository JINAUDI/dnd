'use client'

import Link from 'next/link'

const chandelierProducts = [
  {
    id: 1,
    name: 'Crystal Luxury Chandelier',
    price: '₹18,000',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=500&fit=crop',
  },
  {
    id: 2,
    name: 'Modern Minimalist Pendant',
    price: '₹8,500',
    image: 'https://images.unsplash.com/photo-1565638550024-19a66f40784d?w=500&h=500&fit=crop',
  },
  {
    id: 3,
    name: 'Vintage Brass Chandelier',
    price: '₹12,000',
    image: 'https://images.unsplash.com/photo-1618227123733-3c45b87d4f26?w=500&h=500&fit=crop',
  },
  {
    id: 4,
    name: 'Contemporary Glass Fixture',
    price: '₹15,500',
    image: 'https://images.unsplash.com/photo-1613150537793-6a41202b7c91?w=500&h=500&fit=crop',
  },
  {
    id: 5,
    name: 'Art Deco Golden Chandelier',
    price: '₹22,000',
    image: 'https://images.unsplash.com/photo-1598848212624-11a81d3bf200?w=500&h=500&fit=crop',
  },
]

export default function ChandelierPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header with back button */}
      <div className="sticky top-0 z-40 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Hero section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-4">Chandeliers & Lighting</h1>
        <p className="text-lg text-white/70 mb-8 max-w-2xl">
          Illuminate your space with luxury chandeliers and pendant lights. From crystal classics to modern minimalist designs, find the perfect lighting fixture for your home.
        </p>
      </section>

      {/* Products Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {chandelierProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:border-amber-400/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Product image */}
              <div className="relative h-56 bg-black/50 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Product info */}
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
