'use client';

import dynamic from 'next/dynamic';

const Portfolio = dynamic(
  () => import('@/pages/portfolio').then((mod) => mod.default || mod),
  { ssr: false }
);

export default function Home() {
  return <Portfolio />;
}
