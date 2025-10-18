// src/app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ClientProviders } from "@/components/ClientProviders";
import Script from "next/script";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";
export const viewport = { width: "device-width", initialScale: 1 };

const inter = Inter({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  style: ["normal","italic"],
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
  title: "Aleff Espinosa Córdova | Desarrollador Web Mexicano",
  description:
    "Soy un ingeniero en software con más de tres años de experiencia como desarrollador full-stack. Diseño, construyo y despliego aplicaciones web robustas y escalables, Estoy muy orgulloso de liderar proyectos de principio a fin, desde su concepción hasta su lanzamiento en producción. ¡Contáctame para tu próximo proyecto!",
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
    title: "Aleff Espinosa Córdova | Desarrollador Web",
    description:
      "Soy un ingeniero en software Mexicano con más de tres años de experiencia como desarrollador full-stack. Diseño, construyo y despliego aplicaciones web robustas y escalables. ¡Contáctame para tu próximo proyecto!",
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
    title: "Aleff Espinosa Córdova | Desarrollador Web",
    description:
      "Soy un ingeniero en software Mexicano con más de tres años de experiencia como desarrollador full-stack. Diseño, construyo y despliego aplicaciones web robustas y escalables. ¡Contáctame para tu próximo proyecto!",
    site: "@aleffespinosa",
    creator: "@aleffespinosa",
    images: [`${ABSOLUTE_URL}/image.png`],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: [
      { rel: "icon", url: "/favicon.ico", sizes: "32x32" },
      { rel: "icon", url: "/favicon.ico", sizes: "16x16" },
    ],
  },
};

export default async function RootLayout({ children }) {
  const lang = await getLocale();

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={inter.className} 
        suppressHydrationWarning >
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
            jobTitle: "Full-Stack Developer",
            url: ABSOLUTE_URL,
            sameAs: [
              //NO LO PUEDO CREER. .   .      .
              //Duerman bien, amigos.
              "https://github.com/aleff-eco",
              "https://www.linkedin.com/in/aleff-espinosa-cordova/",
              "https://aleff.vercel.app",
            ],
          })}
        </Script>
      </body>
    </html>
  );
}
