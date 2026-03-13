"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaGithub, FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "../hooks/useTranslations";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
}

function useOnClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T>,
  handler: () => void,
) {
  useEffect(() => {
    const onDown = (e: MouseEvent | TouchEvent) => {
      const el = ref.current;
      if (!el) return;
      const target = e.target as Node | null;
      if (target && el.contains(target)) return;
      handler();
    };

    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown, { passive: true });

    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
    };
  }, [ref, handler]);
}

export default function NotificationButton() {
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [totalStars, setTotalStars] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(wrapRef, () => setOpen(false));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          "https://api.github.com/users/aleff-eco/repos",
          {
            headers: { Accept: "application/vnd.github+json" },
          },
        );

        if (!res.ok) return;

        const data: Repo[] = await res.json();

        const popular = data
          .filter((r) => r.stargazers_count >= 3)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);

        setRepos(popular);
        setTotalStars(data.reduce((sum, r) => sum + r.stargazers_count, 0));
      } catch (e) {
        console.error(e);
      }
    }

    fetchRepos();
  }, []);

  const count = repos.length;

  const containerClass = "relative z-10 md:fixed md:top-8 md:right-8";

  const panelMotion = useMemo(
    () => ({
      initial: { opacity: 0, y: -10, scale: 0.98 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: -10, scale: 0.98 },
      transition: { type: "spring", stiffness: 260, damping: 22 },
    }),
    [],
  );

  return (
    <div ref={wrapRef} className={containerClass}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="dialog"
        className="
          relative inline-flex items-center justify-center
          h-12 w-12 rounded-full
          bg-card text-card-foreground
          border border-border/60 shadow-sm
          hover:shadow-md transition
          focus:outline-none focus:ring-2 focus:ring-ring/40
        "
      >
        <FaGithub className="h-6 w-6" />

        {count > 0 && (
          <span
            className="
              absolute -top-1 -right-1
              min-w-5 h-5 px-1
              rounded-full
              text-[11px] leading-5 font-semibold
              bg-red-500/70 text-white
              shadow
              text-center
            "
          >
            {count}
          </span>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            {...panelMotion}
            role="dialog"
            aria-label={t.notification.title}
            className="
              absolute right-0 mt-3 w-80 md:w-[26rem] lg:w-[30rem]
              rounded-2xl overflow-hidden
              border border-border/60 shadow-xl
              bg-[hsl(var(--background-secondary))]
              text-foreground
            "
          >
            <div className="px-4 py-3 border-b border-border/50 bg-card/70 backdrop-blur">
              <div className="flex items-center justify-between gap-3">
                <div className="font-semibold">{t.notification.title}</div>
                <a
                  href="https://github.com/aleff-eco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 hover:text-foreground underline underline-offset-4 transition"
                >
                  {totalStars} {t.notification.starsIcon}
                </a>
              </div>
            </div>

            <div className="max-h-72 md:max-h-96 overflow-y-auto overflow-x-hidden custom-scrollbar">
              {repos.length === 0 ? (
                <div className="p-4 text-center text-sm text-foreground/70">
                  {t.notification.empty}
                </div>
              ) : (
                repos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-start gap-3 px-4 py-3
                      hover:bg-card/60 transition-colors
                      border-b border-border/30 last:border-b-0
                    "
                  >
                    <span
                      className="
                        inline-flex items-center gap-1
                        px-2 py-1 rounded-full
                        text-xs font-semibold
                        border border-border/50
                        bg-card/60
                        text-foreground
                        shrink-0
                      "
                    >
                      <FaStar className="h-3.5 w-3.5" />
                      {repo.stargazers_count}
                    </span>

                    <div className="min-w-0">
                      <div className="font-medium truncate">{repo.name}</div>
                      <p className="text-xs text-foreground/70 mt-1 line-clamp-2">
                        {repo.description
                          ? repo.description
                          : t.notification.noDescription}
                      </p>
                    </div>
                  </a>
                ))
              )}
            </div>

            <div className="p-3 bg-card/50 border-t border-border/40">
              <a
                href="https://github.com/aleff-eco"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  block text-center
                  rounded-xl
                  px-4 py-2
                  font-medium
                  bg-card text-card-foreground
                  border border-border/60
                  hover:shadow-md transition
                "
              >
                {t.notification.viewAll}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
