import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Full Stack Developer — Scalable Business Applications',
  description:
    'Full Stack Developer with nearly 3 years of experience building ERP systems, SaaS platforms, business applications, and high-performance web experiences with React, Next.js, Node.js, TypeScript and PostgreSQL.',
  generator: 'v0.app',
  keywords: [
    'Full Stack Developer',
    'ERP Systems',
    'SaaS',
    'Next.js',
    'React',
    'Node.js',
    'TypeScript',
    'PostgreSQL',
  ],
  openGraph: {
    title: 'Full Stack Developer — Scalable Business Applications',
    description:
      'Building scalable ERP systems, SaaS platforms and high-performance web applications.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#030712',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
