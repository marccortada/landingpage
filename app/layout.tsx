import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { CustomCursor } from '@/components/custom-cursor'
import { StructuredData } from '@/components/structured-data'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'GTiQ - Control horario inteligente para empresas modernas',
    template: '%s | GTiQ',
  },
  description: 'GTiQ te ayuda a cumplir la normativa de fichaje en España con un sistema rápido, sencillo y con geolocalización precisa. Fichajes con geolocalización, informes automáticos y gestión de ausencias.',
  keywords: [
    'control horario',
    'fichaje digital',
    'geolocalización',
    'normativa española',
    'fichaje empresa',
    'control de asistencia',
    'gestión horarios',
    'fichaje trabajadores',
    'sistema fichaje',
    'app fichaje',
    'control horario España',
    'fichaje geolocalizado',
    'normativa fichaje',
    'software control horario',
    'fichaje online',
  ],
  authors: [{ name: 'GNERAI' }],
  creator: 'GNERAI',
  publisher: 'GNERAI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://gtiq.gneraitiq.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: '/',
    siteName: 'GTiQ',
    title: 'GTiQ - Control horario inteligente para empresas modernas',
    description: 'GTiQ te ayuda a cumplir la normativa de fichaje en España con un sistema rápido, sencillo y con geolocalización precisa.',
    images: [
      {
        url: '/logo png.png',
        width: 1200,
        height: 630,
        alt: 'GTiQ - Control horario inteligente',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTiQ - Control horario inteligente para empresas modernas',
    description: 'GTiQ te ayuda a cumplir la normativa de fichaje en España con un sistema rápido, sencillo y con geolocalización precisa.',
    images: ['/logo png.png'],
    creator: '@_gnerai_',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo png.png',
    apple: '/logo png.png',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'GTiQ',
  },
  verification: {
    // Añade aquí tus códigos de verificación cuando los tengas
    // google: 'tu-codigo-google',
    // yandex: 'tu-codigo-yandex',
    // yahoo: 'tu-codigo-yahoo',
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
        <StructuredData />
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
