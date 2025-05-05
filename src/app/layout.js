import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import MouseMoveEffect from "@/components/MouseMoveEffect";
import { LanguageProvider } from "@/context/LanguageContext";

// Importar Chakra Petch con los pesos disponibles
const InterPetch = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "Aleff - Portfolio",
  description:
    "Mi sitio web personal que presenta mi trayectoria profesional, proyectos destacados y habilidades. Desarrollado con Next.js y Tailwind CSS.",
  keywords:
    "web development, portfolio, projects, Aleff Espinosa Cordova, developer, software engineer, software, engineering",
  author: "Aleff Espinosa Cordova",
  openGraph: {
    title: "Aleff Espinosa Cordova - Portfolio",
    description:
      "Mi sitio web personal que presenta mi trayectoria profesional, proyectos destacados y habilidades. Desarrollado con Next.js y Tailwind CSS.",
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
      <Analytics />
      <SpeedInsights />
      <MouseMoveEffect />
      <body className={InterPetch.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
