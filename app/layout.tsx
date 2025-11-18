import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { CustomCursor } from '@/components/custom-cursor'
import './globals.css'

export const metadata: Metadata = {
  title: 'GTiQ - Control horario inteligente para empresas modernas',
  description: 'GTiQ te ayuda a cumplir la normativa de fichaje en España con un sistema rápido, sencillo y con geolocalización precisa.',
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={GeistSans.className}>
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
