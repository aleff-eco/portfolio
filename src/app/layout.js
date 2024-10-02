import { Chakra_Petch } from "next/font/google"; // Importar la fuente Chakra Petch
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"

// Importar Chakra Petch con los pesos disponibles
const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'], // Pesos de Chakra Petch
  style: ['normal', 'italic'],
});

export const metadata = {
  title: "Aleff Espinosa Cordova - Portfolio",
  description: "Mi sitio web personal que presenta mi trayectoria profesional, proyectos destacados y habilidades. Desarrollado con Next.js y Tailwind CSS.",
  keywords: "web development, portfolio, projects, Aleff Espinosa Cordova, developer, software engineer, software, engineering",
  author: "Aleff Espinosa Cordova",
  openGraph: {
    title: "Aleff Espinosa Cordova - Portfolio",
    description: "Mi sitio web personal que presenta mi trayectoria profesional, proyectos destacados y habilidades. Desarrollado con Next.js y Tailwind CSS.",
    url: "https://aleff.vercel.app/",
    siteName: "Aleff Espinosa Cordova",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://aleff.vercel.app/",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Analytics/>
      <SpeedInsights />
      {/* Aplicar la fuente Chakra Petch globalmente */}
      <body className={chakraPetch.className}>{children}</body>
    </html>
  );
}
