import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zuha Beyabani - Software Engineer',
  description: 'Zuha Beyabani - Software Engineer specializing in Frontend, Backend, and AI/ML',
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

