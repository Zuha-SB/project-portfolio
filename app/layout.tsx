import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zuha Beyabani',
  description: 'Zuha Beyabani - Software Engineer specializing in Frontend, Backend, and AI/ML',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

