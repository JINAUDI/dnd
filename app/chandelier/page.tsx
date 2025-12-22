import Link from 'next/link'

const images = [
  // Unsplash direct images (stable). Replace with Google image URLs if you prefer.
  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505691723518-36a3f1d0b9c1?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1549187774-b4e9b0445b16?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1582719478250-8f6e1f6f5c8a?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1530629013299-6cbf6bff2f3f?w=1200&q=80&auto=format&fit=crop',
]

export default function Page() {
  return (
    <main className="px-6 py-12 max-w-7xl mx-auto">
      <Link href="/" className="inline-block text-sm text-gray-600 mb-6">← Back to Home</Link>
      <h1 className="text-4xl font-semibold mb-4">Chandeliers</h1>
      <p className="text-gray-600 mb-8">A curated selection of chandelier designs to elevate your living space — modern, classic and statement lighting.</p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {images.map((src, i) => (
          <div key={i} className="rounded-lg overflow-hidden shadow">
            <img src={src} alt={`Chandelier ${i+1}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
    </main>
  )
}
