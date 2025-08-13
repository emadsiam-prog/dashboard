import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ENGINEERING STATUS – MATERIAL SUBMISSION',
  description: 'Interactive dashboard for materials status',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 print:bg-white">{children}</body>
    </html>
  )
}
