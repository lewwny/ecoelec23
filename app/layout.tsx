import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { siteData } from '@/data/content'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: siteData.seo.title,
  description: siteData.seo.description,
  keywords: [
    'électricien Creuse',
    'électricien Guéret',
    'dépannage électrique 24h',
    'Eco Elec 23',
    'électricien éco-responsable',
    'installation électrique Creuse',
    'rénovation électrique',
    'Saint-Léger-le-Guérétois',
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://ecoelec23.fr' },
  openGraph: {
    title: siteData.seo.title,
    description: siteData.seo.description,
    type: 'website',
    locale: 'fr_FR',
    url: 'https://ecoelec23.fr',
    siteName: 'Eco Elec 23',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteData.jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
