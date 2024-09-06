import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aleff Espinosa Cordova - Portfolio",
  description: "Portfolio showcasing my projects and skills in web development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <SpeedInsights/>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="web development, portfolio, projects, Aleff Espinosa Cordova" />
        <meta name="author" content="Aleff Espinosa Cordova" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://aleff.vercel.app/" />
        <meta property="og:site_name" content="Aleff Espinosa Cordova" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://aleff.vercel.app/" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}