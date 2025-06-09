"use client";

import React, { useRef, useEffect, useState } from "react";
import { companies } from "@/data/information";
import { useTranslations } from "../hooks/useTranslations";
import { PiFastForwardCircleBold, PiFastForwardCircle } from "react-icons/pi";

export function Companies() {
  const t = useTranslations();
  const items = [...companies, ...companies];
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [showSpeed, setShowSpeed] = useState(false);

  useEffect(() => {
    let frameId: number;

    const step = () => {
      const el = scrollRef.current;
      if (el && !isHovered) {
        el.scrollLeft += speed;
        const cycleWidth = el.scrollWidth / 2;
        if (el.scrollLeft >= cycleWidth) {
          el.scrollLeft -= cycleWidth;
        }
      }
      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isHovered, speed]);

  return (
    <section className="w-full pt-12 lg:py-20 flex justify-center items-center">
      <div className="container flex flex-col items-center gap-8">
        <h2 className="text-4xl font-bold text-center">
          {t.companies.sectionTitle}
        </h2>
        <p className="text-xl text-muted-foreground text-center max-w-2xl">
          {t.companies.description}
        </p>

        <button
          onClick={() => setShowSpeed((prev) => !prev)}
          className="flex items-center transition"
        >
          {showSpeed ? <PiFastForwardCircle /> : <PiFastForwardCircleBold />}
        </button>

        <div
          className={`
            overflow-hidden transition-all duration-300
            ${showSpeed ? "max-h-32 opacity-100 mt-2" : "max-h-0 opacity-0"}
          `}
        >
          <div className="flex items-center gap-2 px-4 py-2">
            <label className="text-sm">{t.companies.velocidad}</label>
            <input
              type="range"
              min="1"
              max="2"
              step="0.1"
              value={speed}
              onChange={(e) => setSpeed(parseFloat(e.target.value))}
              title="{t.companies.ajustarVelocidad}"
              className="flex-1"
            />
            <span className="text-sm w-12 text-right">{speed.toFixed(1)}</span>
          </div>
        </div>

        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-[98vw] overflow-x-hidden"
        >
          <div className="flex gap-6 py-6 px-4 md:gap-8 md:px-6">
            {items.map(({ key }, idx) => {
              const data = t.companies[key];
              return (
                <div
                  key={`${key}-${idx}`}
                  className="relative group flex-shrink-0 w-64 h-32 rounded-lg bg-[hsl(var(--secondary-card))] transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src={data.imageUrl}
                    alt={data.name}
                    className="object-contain h-full w-full p-4"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[hsl(var(--secondary-card))] p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <a
                      href={data.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold hover:underline text-[hsl(var(--text-card))] hover:text-[hsl(var(--navbar))] transition-colors"
                    >
                      {data.name}
                    </a>
                    <p className="text-sm font-semibold mt-1 text-[hsl(var(--text-card))] hover:text-[hsl(var(--navbar))] transition-colors">
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
