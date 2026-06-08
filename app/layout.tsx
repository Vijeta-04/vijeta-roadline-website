import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Sora, Inter, Geist_Mono } from 'next/font/google'
import './globals.css'

const sora = Sora({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
})
const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const SITE_URL = 'https://vijetaroadline.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Vijeta Roadline Solutions | Premium Transportation & Logistics',
    template: '%s | Vijeta Roadline Solutions',
  },
  description:
    'Vijeta Roadline Solutions delivers reliable, premium road transportation and logistics across Rajasthan, Punjab, Haryana and Chandigarh. FTL, PTL, industrial logistics and express delivery.',
  keywords: [
    'transportation',
    'logistics',
    'road transport',
    'FTL',
    'PTL',
    'Rajasthan logistics',
    'Punjab transport',
    'Haryana logistics',
    'Chandigarh transport',
    'Vijeta Roadline',
  ],
  authors: [{ name: 'Vijeta Roadline Solutions' }],
  creator: 'Vijeta Roadline Solutions',
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Vijeta Roadline Solutions',
    title: 'Vijeta Roadline Solutions | Premium Transportation & Logistics',
    description:
      'Reliable transportation solutions across Rajasthan, Punjab, Haryana and Chandigarh.',
    images: [
      {
        url: '/fleet-hero.png',
        width: 1200,
        height: 630,
        alt: 'Vijeta Roadline Solutions fleet on the highway',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vijeta Roadline Solutions | Premium Transportation & Logistics',
    description:
      'Reliable transportation solutions across Rajasthan, Punjab, Haryana and Chandigarh.',
    images: ['/fleet-hero.png'],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#0B1F3A',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MovingCompany',
  name: 'Vijeta Roadline Solutions',
  description:
    'Premium road transportation and logistics across North India.',
  telephone: '+91-9783081709',
  areaServed: ['Rajasthan', 'Punjab', 'Haryana', 'Chandigarh'],
  url: SITE_URL,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${geistMono.variable} dark bg-background`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
