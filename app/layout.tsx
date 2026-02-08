import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vibe Coding Academy - Code at the Speed of Thought',
  description: 'Learn to build software with AI assistants. No computer science degree required. Express your vision, let AI handle the syntax.',
  metadataBase: new URL('https://vibe-coding.academy'),
  openGraph: {
    title: 'Vibe Coding Academy - Code at the Speed of Thought',
    description: 'Learn to build software with AI assistants. No computer science degree required. Express your vision, let AI handle the syntax.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vibe Coding Academy - Code at the Speed of Thought',
    description: 'Learn to build software with AI assistants. No computer science degree required.',
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
