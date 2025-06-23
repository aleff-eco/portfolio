// src/app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ClientProviders } from "@/components/ClientProviders";
import Script from "next/script";

export const dynamic = "force-dynamic";
export const viewport = { width: "device-width", initialScale: 1 };

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const ABSOLUTE_URL = "https://www.devaleff.com";
export const metadataBase = new URL(ABSOLUTE_URL);

async function getLocale() {
  const hdrs = await headers();
  const acceptLang = hdrs.get("accept-language") || "";
  return acceptLang.startsWith("es") ? "es" : "en";
}

export const metadata = {

  title: "Desarrollador Web | Aleff Espinosa Córdova",
  description:
    "Soy Aleff Espinosa Córdova, desarrollador web full‑stack en México. Transformo ideas en experiencias digitales rápidas, accesibles y escalables. ¡Contáctame para tu próximo proyecto!",
  keywords: [
    "desarrollador web",
    "portafolio full stack",
    "Laravel",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Consultor TI",
    "Líder técnico",
    "aplicaciones a medida",
    "Chiapas",
    "México",
    "Proyectos de software",
    "Desarrollo web",
  ],
  authors: [{ name: "Aleff Espinosa Córdova", url: ABSOLUTE_URL }],
  publisher: "Aleff Espinosa Córdova",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  alternates: {
    canonical: `${ABSOLUTE_URL}/`,
    languages: { es: `${ABSOLUTE_URL}/` },
  },
  openGraph: {
    title: "Desarrollador Web | Aleff Espinosa Córdova",
    description:
      "Soy Aleff Espinosa Córdova, desarrollador web full‑stack en México. Transformo ideas en experiencias digitales rápidas, accesibles y escalables.",
    url: `${ABSOLUTE_URL}/`,
    siteName: "Portafolio de Aleff Espinosa",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: `${ABSOLUTE_URL}/image.png`,
        width: 1200,
        height: 630,
        alt: "Vista previa del portafolio de Aleff Espinosa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollador Web | Aleff Espinosa Córdova",
    description:
      "Soy Aleff Espinosa Córdova, desarrollador web full‑stack en México. Transformo ideas en experiencias digitales rápidas, accesibles y escalables.",
    site: "@aleffespinosa",
    creator: "@aleffespinosa",
    images: [`${ABSOLUTE_URL}/image.png`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang={getLocale()} suppressHydrationWarning>
      <body className={inter.className}>
        <SpeedInsights />
        <ClientProviders>{children}</ClientProviders>
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Aleff Espinosa Córdova",
            jobTitle: "Full‑Stack Developer",
            url: ABSOLUTE_URL,
            sameAs: [
              "https://github.com/aleff",
              "https://www.linkedin.com/in/aleffespinosa/",
              "https://aleff.vercel.app",
            ],
          })}
        </Script>
      </body>
    </html>
  );
}
