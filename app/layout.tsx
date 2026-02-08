import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vibot - AI Memory Palace',
  description: 'Voice-first mobile app that captures your thoughts and surprises you with AI-powered insights.',
  metadataBase: new URL('https://vibot.app'),
  openGraph: {
    title: 'Vibot - AI Memory Palace',
    description: 'Voice-first mobile app that captures your thoughts and surprises you with AI-powered insights.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vibot - AI Memory Palace',
    description: 'Voice-first mobile app that captures your thoughts and surprises you with AI-powered insights.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-950 text-white">{children}</body>
    </html>
  )
}
