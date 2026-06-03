import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chips & Chipset | Tech Store - Hart Plaza Maraba',
  description: 'Your trusted tech hub at Hart Plaza Maraba Market. Laptops, accessories, gadgets, repairs, game consoles, and software installation. Owned by Bright Ajeh.',
  keywords: 'laptop sales, laptop repair, gadgets, game consoles, software installation, Maraba market, Hart Plaza',
  openGraph: {
    title: 'Chips & Chipset | Tech Store',
    description: 'Your trusted tech hub at Hart Plaza Maraba Market.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="noise antialiased">{children}</body>
    </html>
  )
}
