import Link from 'next/link'

const images = [
  'https://images.unsplash.com/photo-1549187774-b4e9b0445b16?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=1200&q=80&auto=format&fit=crop',
]

export default function Page() {
  return (
    <main className="px-6 py-12 max-w-7xl mx-auto">
      <Link href="/" className="inline-block text-sm text-gray-600 mb-6">← Back to Home</Link>
      <h1 className="text-4xl font-semibold mb-4">Sofas</h1>
      <p className="text-gray-600 mb-8">Elegant sofas and lounge seating — carefully selected for comfort and style.</p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {images.map((src, i) => (
          <div key={i} className="rounded-lg overflow-hidden shadow">
            <img src={src} alt={`Sofa ${i+1}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
    </main>
  )
}
