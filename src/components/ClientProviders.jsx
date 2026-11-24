"use client";

import dynamic from "next/dynamic";

const Analytics = dynamic(() => import("@vercel/analytics/react").then((mod) => mod.Analytics), { ssr: false });
const MouseMoveEffect = dynamic(() => import("@/components/MouseMoveEffect"), { ssr: false });

export function ClientProviders() {
  return (
    <>
      <Analytics />
      <MouseMoveEffect />
    </>
  );
}
