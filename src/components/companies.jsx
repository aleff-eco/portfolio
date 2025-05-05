'use client';

import React, { useRef, useEffect, useState } from 'react';
import { companies } from '@/data/information';
import { useTranslations } from '../hooks/useTranslations';

export function Companies() {
  const t = useTranslations();
  const items = [...companies, ...companies, ...companies];
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let frameId;
    const speed = 0.5; // píxeles por frame

    const step = () => {
      const el = scrollRef.current;
      if (el && !isHovered) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isHovered]);

  return (
    <section className="w-full pt-12 lg:py-20 flex justify-center items-center">
      <div className="container flex flex-col items-center gap-8">
        <h2 className="text-3xl font-bold text-center">
          {t.companies.sectionTitle}
        </h2>
        <p className="text-xl text-muted-foreground text-center max-w-2xl">
          {t.companies.description}
        </p>

        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-[98vw] overflow-x-auto scrollbar-hide scroll-snap-x scroll-snap-mandatory"
        >
          <div className="flex gap-6 py-6 px-4 md:gap-8 md:px-6">
            {items.map(({ key }, idx) => {
              const data = t.companies[key];
              return (
                <div
                  key={`${key}-${idx}`}
                  className="relative group flex-shrink-0 w-64 h-32 rounded-lg bg-[hsl(var(--secondary-card))] transition-transform duration-300 hover:scale-110 hover:shadow-lg snap-start"
                >
                  <img
                    src={data.imageUrl}
                    alt={data.name}
                    className="object-contain h-full w-full p-4"
                  />
                  <div className="absolute inset-0 flex flex-col items-center rounded-lg justify-center gap-2 bg-[hsl(var(--secondary-card))] p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <a
                      href={data.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-black hover:underline"
                    >
                      {data.name}
                    </a>
                    <p className="text-sm text-black mt-1">
                      {data.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
