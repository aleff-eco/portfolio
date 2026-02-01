// src/components/ClientProviders.jsx
"use client";

import dynamic from "next/dynamic";

const Analytics = dynamic(
  () => import("@vercel/analytics/react").then((mod) => mod.Analytics),
  { ssr: false }
);
const MouseMoveEffect = dynamic(() => import("@/components/MouseMoveEffect"), {
  ssr: false,
});
import { LanguageProvider } from '@/context/LanguageContext'

export function ClientProviders({ children }) {
  return (
    <>
      <Analytics />
      <MouseMoveEffect />
      <LanguageProvider>{children}</LanguageProvider>
    </>
  );
}
