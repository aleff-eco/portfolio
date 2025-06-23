// src/app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ClientProviders } from "@/components/ClientProviders";
import { headers } from "next/headers";
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
const IMAGE_URL = `${ABSOLUTE_URL}/image.png`;

async function getLocale() {
  const hdrs = await headers();
  const acceptLang = hdrs.get("accept-language") || "";
  return acceptLang.startsWith("es") ? "es" : "en";
}

export async function generateMetadata() {
  const locale = await getLocale();

  const titles = {
    es: "Desarrollador Web | Aleff Espinosa Córdova",
    en: "Web Developer | Aleff Espinosa Córdova",
  };

  const descriptions = {
    es: "Soy Aleff Espinosa Córdova, ingeniero de software full‑stack especializado en Laravel, React y Next.js. Desarrollo experiencias digitales rápidas, accesibles y escalables.",
    en: "I'm Aleff Espinosa Córdova, a full‑stack software engineer specialized in Laravel, React and Next.js. I craft fast, accessible and scalable digital experiences.",
  };

  const keywords = {
    es: [
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
    en: [
      "web developer",
      "full stack portfolio",
      "Laravel",
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "IT consultant",
      "technical lead",
      "custom applications",
      "Chiapas",
      "Mexico",
      "software projects",
      "web development",
    ],
  };

  return {
    title: titles[locale],
    description: descriptions[locale],
    keywords: keywords[locale],
    authors: [{ name: "Aleff Espinosa Córdova", url: ABSOLUTE_URL }],
    publisher: "Aleff Espinosa Córdova",
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
    metadataBase,
    alternates: {
      canonical: `${ABSOLUTE_URL}/${locale === "en" ? "en" : ""}`,
      languages: {
        es: `${ABSOLUTE_URL}/`,      
        en: `${ABSOLUTE_URL}/en`,    
      },
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: `${ABSOLUTE_URL}/${locale === "en" ? "en" : ""}`,
      siteName: "Aleff Espinosa Portfolio",
      locale: locale === "es" ? "es_ES" : "en_US",
      type: "website",
      images: [
        {
          url: IMAGE_URL,
          width: 1200,
          height: 630,
          alt: "Vista previa del portafolio de Aleff Espinosa",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale],
      description: descriptions[locale],
      site: "",
      creator: "",
      images: [IMAGE_URL],
    },
  };
}

export default async function RootLayout({ children }) {
  const locale = await getLocale();

  const structuredData = {
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
  };

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <SpeedInsights />
        <ClientProviders>{children}</ClientProviders>
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(structuredData)}
        </Script>
      </body>
    </html>
  );
}
