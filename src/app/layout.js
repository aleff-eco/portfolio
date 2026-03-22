// src/app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/ProfileComponent.css";
import "../styles/Experience.css";
import "../styles/Contact.css";
import "../styles/Skills.css";
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

const ABSOLUTE_URL = "https://www.devaleff.com";
export const metadataBase = new URL(ABSOLUTE_URL);

async function getLocale() {
  const hdrs = await headers();
  const acceptLang = hdrs.get("accept-language") || "";
  return acceptLang.startsWith("es") ? "es" : "en";
}

export const metadata = {
  title: {
    default: "Aleff Espinosa | Desarrollador Full-Stack · Chiapas, México",
    template: "%s | Aleff Espinosa · Desarrollador Web",
  },
  description:
    "Desarrollador web full-stack en Chiapas, México. +3 años liderando proyectos con Laravel, React y Next.js. Soluciones escalables y a medida. ¡Contáctame!",
  keywords: [
    "desarrollador web Chiapas",
    "programador web Chiapas",
    "desarrollador full-stack México",
    "desarrollador web México",
    "desarrollador Laravel Chiapas",
    "desarrollador React México",
    "ingeniero en software Chiapas",
    "desarrollador freelance México",
    "Next.js developer Mexico",
    "desarrollo de aplicaciones web México",
    "consultor TI México",
    "Tuxtla Gutiérrez desarrollador",
    "Aleff Espinosa",
    "devaleff",
    "portafolio desarrollador web",
    "Laravel",
    "React",
    "Next.js",
    "PHP",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Docker",
    "líder técnico",
    "desarrollo web profesional",
  ],
  authors: [{ name: "Aleff Espinosa Córdova", url: ABSOLUTE_URL }],
  publisher: "Aleff Espinosa Córdova",
  creator: "Aleff Espinosa Córdova",
  applicationName: "Portafolio de Aleff Espinosa",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: `${ABSOLUTE_URL}/`,
    languages: {
      "es-MX": `${ABSOLUTE_URL}/`,
      "en-US": `${ABSOLUTE_URL}/`,
      "x-default": `${ABSOLUTE_URL}/`,
    },
  },
  openGraph: {
    title: "Aleff Espinosa | Desarrollador Full-Stack · Chiapas, México",
    description:
      "Desarrollador web full-stack en Chiapas, México. +3 años liderando proyectos con Laravel, React y Next.js. ¡Contáctame para tu próximo proyecto!",
    url: `${ABSOLUTE_URL}/`,
    siteName: "Aleff Espinosa · Desarrollador Web",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: `${ABSOLUTE_URL}/image.png`,
        width: 1200,
        height: 630,
        alt: "Aleff Espinosa Córdova — Desarrollador Full-Stack en Chiapas, México",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aleff Espinosa | Desarrollador Full-Stack · Chiapas, México",
    description:
      "Desarrollador web full-stack en Chiapas, México. +3 años liderando proyectos con Laravel, React y Next.js. ¡Contáctame!",
    site: "@aleffespinosa",
    creator: "@aleffespinosa",
    images: [
      {
        url: `${ABSOLUTE_URL}/image.png`,
        alt: "Aleff Espinosa Córdova — Desarrollador Full-Stack en Chiapas, México",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: [
      { rel: "icon", url: "/favicon.ico", sizes: "32x32" },
      { rel: "icon", url: "/favicon.ico", sizes: "16x16" },
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
};

const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${ABSOLUTE_URL}/#person`,
    name: "Aleff Espinosa Córdova",
    givenName: "Aleff",
    familyName: "Espinosa Córdova",
    jobTitle: "Desarrollador Web Full-Stack",
    description:
      "Ingeniero en software con más de 3 años de experiencia como desarrollador full-stack en México. Especialista en Laravel, React, Next.js y PHP.",
    url: ABSOLUTE_URL,
    image: {
      "@type": "ImageObject",
      url: `${ABSOLUTE_URL}/image.png`,
      width: 1200,
      height: 630,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tuxtla Gutiérrez",
      addressRegion: "Chiapas",
      addressCountry: "MX",
    },
    nationality: {
      "@type": "Country",
      name: "México",
    },
    knowsLanguage: ["es", "en"],
    knowsAbout: [
      "Desarrollo Web",
      "Laravel",
      "React",
      "Next.js",
      "PHP",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Docker",
      "MySQL",
      "PostgreSQL",
      "Tailwind CSS",
      "Flutter",
      "React Native",
      "Metodologías Ágiles",
      "SOLID",
    ],
    sameAs: [
      "https://github.com/aleff-eco",
      "https://www.linkedin.com/in/aleff-espinosa-cordova/",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Strappberry",
      url: "https://strappberry.com/es",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidad Politécnica de Chiapas",
      url: "https://www.upchiapas.edu.mx/",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${ABSOLUTE_URL}/#website`,
    name: "Aleff Espinosa · Desarrollador Web",
    url: ABSOLUTE_URL,
    description:
      "Portafolio profesional de Aleff Espinosa Córdova, desarrollador web full-stack en Chiapas, México.",
    author: { "@id": `${ABSOLUTE_URL}/#person` },
    inLanguage: ["es-MX", "en-US"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${ABSOLUTE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${ABSOLUTE_URL}/#profilepage`,
    name: "Portafolio de Aleff Espinosa",
    url: ABSOLUTE_URL,
    isPartOf: { "@id": `${ABSOLUTE_URL}/#website` },
    about: { "@id": `${ABSOLUTE_URL}/#person` },
    mainEntity: { "@id": `${ABSOLUTE_URL}/#person` },
  },
];

export default async function RootLayout({ children }) {
  const lang = await getLocale();

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas) }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <SpeedInsights />
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
