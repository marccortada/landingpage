import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'GTiQ - Control horario inteligente',
    short_name: 'GTiQ',
    description: 'Sistema de control horario con geolocalización que cumple con la normativa española',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/logo png.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}


