import Link from 'next/link'

const images = [
  'https://images.unsplash.com/photo-1531984077486-27e2c5d8f6a3?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505691723518-36a3f1d0b9c1?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=1200&q=80&auto=format&fit=crop',
]

export default function Page() {
  return (
    <main className="px-6 py-12 max-w-7xl mx-auto">
      <Link href="/" className="inline-block text-sm text-gray-600 mb-6">← Back to Home</Link>
      <h1 className="text-4xl font-semibold mb-4">Vases & Stands</h1>
      <p className="text-gray-600 mb-8">Decorative vases and stands — curated pieces for style and proportion.</p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {images.map((src, i) => (
          <div key={i} className="rounded-lg overflow-hidden shadow">
            <img src={src} alt={`Vase ${i+1}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
    </main>
  )
}
