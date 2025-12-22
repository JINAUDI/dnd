import Link from 'next/link'

const images = [
  'https://images.unsplash.com/photo-1501876725168-00c445821c9e?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1502164980785-90d5e0a27996?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80&auto=format&fit=crop',
]

export default function Page() {
  return (
    <main className="px-6 py-12 max-w-7xl mx-auto">
      <Link href="/" className="inline-block text-sm text-gray-600 mb-6">← Back to Home</Link>
      <h1 className="text-4xl font-semibold mb-4">Wooden Flooring</h1>
      <p className="text-gray-600 mb-8">High-quality wooden flooring textures and planks for warm, elegant interiors.</p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {images.map((src, i) => (
          <div key={i} className="rounded-lg overflow-hidden shadow">
            <img src={src} alt={`Flooring ${i+1}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
    </main>
  )
}
