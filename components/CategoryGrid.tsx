'use client'

import Image from 'next/image'

interface Product {
  id: string
  name: string
  imageUrl: string
  price: string
  tag?: string
}

interface CategoryGridProps {
  products: Product[]
}

export default function CategoryGrid({ products }: CategoryGridProps) {
  return (
    <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 hover:border-white/20"
        >
          <div className="relative w-full h-56 bg-white/5 overflow-hidden">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4 space-y-1">
            <h3 className="text-lg font-semibold text-white">{product.name}</h3>
            <p className="text-sm text-white/70">{product.price}</p>
            {product.tag && (
              <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-amber-500/20 text-amber-200 font-medium">
                {product.tag}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
