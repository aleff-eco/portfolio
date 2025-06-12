// src/app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ClientProviders } from "@/components/ClientProviders";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";
export const viewport = { width: "device-width", initialScale: 1 };

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

async function getLocale() {
  const hdrs = await headers();
  const acceptLang = hdrs.get("accept-language") || "";
  return acceptLang.startsWith("es") ? "es" : "en";
}

export async function generateMetadata() {
  const locale = await getLocale();

  const titles = {
    es: "Aleff – Portafolio",
    en: "Aleff – Portfolio",
  };
  const descriptions = {
    es: "Aleff Espinosa Cordova: portafolio que muestra proyectos Web, Mobile, Backend y Rest Apis.",
    en: "Aleff Espinosa Cordova: portfolio showcasing Web, Mobile, Backend and Rest Apis projects.",
  };
  const keywords = {
    es: [
      "portafolio Full Stack",
      "Full Stack",
      "PHP",
      "Laravel",
      "SQL",
      "Tailwind CSS",
      "React.js",
      "Next.js",
      "desarrollador web",
      "Consultor TI",
      "Lider Técnico",
      "UI UX",
      "JavaScript",
      "TypeScript",
    ],
    en: [
      "Full Stack Portfolio",
      "Full Stack",
      "PHP",
      "Laravel",
      "SQL",
      "Tailwind CSS",
      "React.js",
      "Next.js",
      "web developer",
      "TI Consultant",
      "Technical Leader",
      "UI UX",
      "JavaScript",
      "TypeScript",
    ],
  };

  return {
    title: titles[locale],
    description: descriptions[locale],
    keywords: keywords[locale],
    authors: [{ name: "Aleff Espinosa", url: "https://aleff.vercel.app" }],
    publisher: "Aleff Espinosa",
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
    alternates: {
      canonical: "https://aleff.vercel.app/",
      languages: {
        es: "https://aleff.vercel.app/",
        en: "https://aleff.vercel.app/",
      },
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: "https://aleff.vercel.app",
      siteName: "Aleff Portfolio",
      locale: locale === "es" ? "es_ES" : "en_US",
      type: "website",
    },
    // twitter: {
    //   card: "summary_large_image",
    //   title: titles[locale],
    //   description: descriptions[locale],
    //   site: "@aleff-espinosa-cordova",
    //   creator: "@aleff-espinosa-cordova",
    // },
  };
}

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <SpeedInsights />
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
