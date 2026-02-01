"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();
  const next = locale === "es" ? "en" : "es";

  return (
    <button
      type="button"
      onClick={() => setLocale(next)}
      aria-label={t.nav.languageToggle}
      className="
        inline-flex items-center gap-2
        rounded-full px-2 py-1
        border border-[hsl(var(--border)/0.6)]
        bg-[hsl(var(--background-secondary)/0.6)]
        text-[hsl(var(--foreground))]
        shadow-sm backdrop-blur
        transition
        hover:bg-[hsl(var(--background-secondary)/0.8)]
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]
        focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]
      "
    >
      <Globe className="h-4 w-4 text-[hsl(var(--foreground)/0.65)]" />

      <span className="relative inline-flex items-center rounded-full bg-[hsl(var(--background)/0.35)] p-0.5">
        <span
          aria-hidden="true"
          className={[
            "absolute top-0.5 bottom-0.5 left-0.5 w-[44px] rounded-full transition-transform duration-200",
            "bg-[hsl(var(--primary))]",
            locale === "es" ? "translate-x-0" : "translate-x-[44px]",
          ].join(" ")}
        />

        <span
          className={[
            "relative z-10 h-7 w-[44px] rounded-full",
            "inline-flex items-center justify-center",
            "text-xs font-semibold leading-none transition-colors",
            locale === "es"
              ? "text-[hsl(var(--primary-foreground))]"
              : "text-[hsl(var(--foreground)/0.65)]",
          ].join(" ")}
        >
          ES
        </span>

        <span
          className={[
            "relative z-10 h-7 w-[44px] rounded-full",
            "inline-flex items-center justify-center",
            "text-xs font-semibold leading-none transition-colors",
            locale === "en"
              ? "text-[hsl(var(--primary-foreground))]"
              : "text-[hsl(var(--foreground)/0.65)]",
          ].join(" ")}
        >
          EN
        </span>
      </span>
    </button>
  );
}
