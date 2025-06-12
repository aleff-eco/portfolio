import React from "react";
import { useTranslations } from "@/hooks/useTranslations";

export function Soon() {
  const t = useTranslations();
  return (
    <section className="relative bg-[hsl(var(--background))] text-[hsl(var(--foreground))] py-52 overflow-hidden">
      <h1
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center text-[12rem] font-black text-[hsl(var(--foreground))] opacity-20 blur-md select-none pointer-events-none"
      >
        {t.soon.title}
      </h1>
      <p
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center text-[2.5rem] md:text-[3.5rem] leading-snug text-[hsl(var(--foreground))] opacity-10 blur-lg w-2/3 mx-auto text-center select-none pointer-events-none"
      >
        {t.soon.description}
      </p>

      <div className="relative z-10 container mx-auto px-6 text-center space-y-8">
        <h2 className="text-4xl md:text-7xl font-extrabold waterfall delay-1">
          {t.soon.title}
        </h2>
        <div className="inline-block px-8 py-3 rounded-full backdrop-blur-sm waterfall delay-2">
          <span className="text-2xl font-medium text-[hsl(var(--card-foreground))]">
            {t.soon.subtitle}
          </span>
        </div>
      </div>
    </section>
  );
}
