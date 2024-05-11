import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// app/layout.tsx
import { Providers } from './providers'
import Header from './components/navbar/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chung-Ying Ho',
  description: 'I am a web developer based in Tainan, Taiwan.',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
