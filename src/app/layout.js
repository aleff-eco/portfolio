import { Caveat, Inter, Oswald, Sora } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ClientProviders } from "@/components/ClientProviders";
import { SITE_URL } from "@/content/site";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const oswald = Oswald({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-oswald", display: "swap", preload: false });
const caveat = Caveat({ subsets: ["latin"], weight: ["700"], variable: "--font-caveat", display: "swap", preload: false });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef1f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1621" },
  ],
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Aleff Espinosa",
  authors: [{ name: "Aleff Espinosa Córdova", url: SITE_URL }],
  creator: "Aleff Espinosa Córdova",
  publisher: "Aleff Espinosa Córdova",
  category: "technology",
  formatDetection: { telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX" className={`${sora.variable} ${inter.variable} ${oswald.variable} ${caveat.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: 'try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}',
          }}
        />
      </head>
      <body>
        {children}
        <ClientProviders />
        <SpeedInsights />
      </body>
    </html>
  );
}
