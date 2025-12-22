import Link from 'next/link'

const images = [
  'https://images.unsplash.com/photo-1560184897-6a5e7b1b3c83?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1598302732816-4b1a92f9f6e0?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1602526213642-4a6f7f2ed1d4?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505691723518-36a3f1d0b9c1?w=1200&q=80&auto=format&fit=crop',
]

export default function Page() {
  return (
    <main className="px-6 py-12 max-w-7xl mx-auto">
      <Link href="/" className="inline-block text-sm text-gray-600 mb-6">← Back to Home</Link>
      <h1 className="text-4xl font-semibold mb-4">Stone Wall & Cladding</h1>
      <p className="text-gray-600 mb-8">Textures and patterns for stone cladding and feature walls, curated for authentic finishes.</p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {images.map((src, i) => (
          <div key={i} className="rounded-lg overflow-hidden shadow">
            <img src={src} alt={`Stone wall ${i+1}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
    </main>
  )
}
