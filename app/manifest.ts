import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Contador Continental',
    short_name: 'Continental',
    description: 'Lleva el control de tus partidas de Continental sin papel',
    start_url: '/',
    display: 'standalone',
    background_color: '#fafbfc',
    theme_color: '#2BEE4A',
    orientation: 'portrait',
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any'
      }
    ]
  }
}
