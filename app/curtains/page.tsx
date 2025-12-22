import Link from 'next/link'

const images = [
  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505691723518-36a3f1d0b9c1?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200&q=80&auto=format&fit=crop',
]

export default function Page() {
  return (
    <main className="px-6 py-12 max-w-7xl mx-auto">
      <Link href="/" className="inline-block text-sm text-gray-600 mb-6">← Back to Home</Link>
      <h1 className="text-4xl font-semibold mb-4">Curtains</h1>
      <p className="text-gray-600 mb-8">Luxury curtain designs and fabrics — selections for light control and drama.</p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {images.map((src, i) => (
          <div key={i} className="rounded-lg overflow-hidden shadow">
            <img src={src} alt={`Curtains ${i+1}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
    </main>
  )
}
