"use client";

import { useEffect, useState } from "react";
import { SiNextdotjs, SiTailwindcss, SiVercel, SiReact } from "react-icons/si";
import { Heart } from "lucide-react";
import { useTranslations } from "../hooks/useTranslations";

export function Footer() {
  const t = useTranslations();
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const linkClass =
    "inline-flex items-center gap-2 px-2 py-1 text-sm font-medium " +
    "text-[hsl(var(--foreground)/0.72)] transition-colors " +
    "hover:text-[hsl(var(--foreground))] " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] " +
    "focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background-secondary))]";

  const underline =
    "relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full " +
    "after:origin-left after:scale-x-0 after:rounded-full after:bg-[hsl(var(--primary))] " +
    "after:transition-transform after:duration-200 hover:after:scale-x-100";

  return (
    <footer className="bg-[hsl(var(--background-secondary))] text-[hsl(var(--foreground))]">
      <div className="border-t border-[hsl(var(--border)/0.65)]">
        <div className="mx-auto max-w-7xl 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <div className="text-sm font-semibold tracking-tight">
                {t.footer.madeWith}
              </div>

              <nav
                aria-label="Tech stack"
                className="flex flex-wrap items-center gap-2"
              >
                <a
                  href="https://react.dev"
                  rel="noreferrer noopener"
                  target="_blank"
                  className={`${linkClass} ${underline}`}
                >
                  <SiReact className="h-4 w-4" />
                  React
                </a>

                <span className="h-4 w-px bg-[hsl(var(--border)/0.7)]" />

                <a
                  href="https://nextjs.org"
                  rel="noreferrer noopener"
                  target="_blank"
                  className={`${linkClass} ${underline}`}
                >
                  <SiNextdotjs className="h-4 w-4" />
                  Next.js
                </a>

                <span className="h-4 w-px bg-[hsl(var(--border)/0.7)]" />

                <a
                  href="https://tailwindcss.com"
                  rel="noreferrer noopener"
                  target="_blank"
                  className={`${linkClass} ${underline}`}
                >
                  <SiTailwindcss className="h-4 w-4" />
                  Tailwind CSS
                </a>

                <span className="h-4 w-px bg-[hsl(var(--border)/0.7)]" />

                <a
                  href="https://vercel.com"
                  rel="noreferrer noopener"
                  target="_blank"
                  className={`${linkClass} ${underline}`}
                >
                  <SiVercel className="h-4 w-4" />
                  Vercel
                </a>

              </nav>
            </div>

            <div className="flex flex-col items-start md:items-end gap-1">
              <div className="text-sm text-[hsl(var(--foreground)/0.65)]">
                © 2024 - {year ?? ""}{" "}
                <span className="text-[hsl(var(--foreground))] font-semibold">
                  Aleff Espinosa Córdova
                </span>
                .
              </div>

              <div className="text-xs text-[hsl(var(--foreground)/0.55)]">
                {t.footer.rights ?? ""}
              </div>
            </div>
          </div>

          <div className="mt-8 h-px w-full bg-[hsl(var(--border)/0.6)]" />

          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-[hsl(var(--foreground)/0.55)]">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[hsl(var(--primary))]" />
              <span>{t.footer.tagline ?? ""}</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#inicio"
                className={`text-[hsl(var(--foreground)/0.65)] hover:text-[hsl(var(--foreground))] transition-colors ${underline}`}
              >
                {t.nav.inicio}
              </a>
              <span className="h-3 w-px bg-[hsl(var(--border)/0.7)]" />
              <a
                href="#contact"
                className={`text-[hsl(var(--foreground)/0.65)] hover:text-[hsl(var(--foreground))] transition-colors ${underline}`}
              >
                {t.nav.contacto}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
