import "./globals.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contador de puntos para Continental | Juego de cartas",
  description: "Herramienta gratuita para llevar el conteo de puntos del juego de cartas Continental. Ideal para partidas con amigos y familia.",
  keywords: "continental, juego de cartas, contador de puntos, puntuación continental, juegos de mesa",
  openGraph: {
    title: "Contador de puntos para Continental",
    description: "Lleva el control de tus partidas de Continental sin papel",
    type: "website",
    locale: "es_ES",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8f8f8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2509995047108497"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-LKFZ1ZYJE4" />

    </html>
  );
}
