import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SALAMISIM: Beyond Hiraya',
  description:
    'Kung bibigyan ka ng pagkakataong bumalik sa nakaraan, babalikan mo ba ito? SALAMISIM: Beyond Hiraya is a meaningful pause—a moment of reflection on everything we have learned, experienced, and discovered throughout our journey as HUMSS students. Challenge misconceptions about the Humanities and Social Sciences strand and discover a space for growth, voice, and awareness.',
  generator: 'v0.app',
  icons: {
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main%20picture-GRHE0iAJdRargcdv4sQTToz52K1brq.jpg',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A1628',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
