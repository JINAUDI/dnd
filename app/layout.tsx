import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsletterModal from '@/components/NewsletterModal'

export const metadata: Metadata = {
  title: 'DND - Drishti Nimawat Designs | Premium Interior & Architectural Design',
  description: 'DND (Drishti Nimawat Designs) offers premium interior design, architectural services, and custom design solutions for residential and commercial spaces.',
  keywords: 'interior design, architecture, design studio, residential design, commercial design, DND',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <NewsletterModal />
      </body>
    </html>
  )
}

