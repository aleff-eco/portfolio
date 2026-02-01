"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "../hooks/useTranslations";
import { experience } from "@/data/information";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemV = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.18, ease: "easeOut" } },
};

export function Experience() {
  const t = useTranslations();
  const [showAll, setShowAll] = useState(false);
  const [width, setWidth] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const limit = width < 768 ? 1 : 2;
  const keys = useMemo(() => experience.map((e) => e.key), []);
  const shownKeys = showAll ? keys : keys.slice(0, limit);

  const renderCard = (key: string, idx: number) => {
    const item = t?.experience?.list?.[key];
    if (!item) return null;

    const alignRight = idx % 2 === 0;

    return (
      <div id="experience" className="relative">
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-9">
          <div className="h-3.5 w-3.5 rounded-full bg-[hsl(var(--primary))] ring-4 ring-[hsl(var(--background))]" />
        </div>

        <div
          className={`flex flex-col md:flex-row gap-8 ${
            alignRight ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="md:w-1/2 md:px-10">
            <div className={`flex ${alignRight ? "md:justify-start" : "md:justify-end"}`}>
              <div className="w-full max-w-md rounded-2xl border border-[hsl(var(--border)/0.55)] bg-[hsl(var(--card)/0.45)] px-4 py-3 shadow-sm backdrop-blur-lg">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <a
                      href={item.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="truncate text-lg font-semibold hover:opacity-90"
                    >
                      {item.company}
                    </a>
                  </div>

                  <span className="shrink-0 rounded-full px-2.5 py-1 text-md font-medium text-[hsl(var(--foreground)/0.8)]">
                    {item.date}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:px-5">
            <div className="rounded-2xl border border-[hsl(var(--border)/0.55)] bg-[hsl(var(--card)/0.45)] p-6 shadow-sm transition will-change-transform hover:-translate-y-0.5">
              <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>

              <div className="mt-4 h-px w-full bg-[hsl(var(--border)/0.55)]" />

              {item.descriptionPoints?.length ? (
                <ul className="mt-4 space-y-2 text-[hsl(var(--foreground)/0.82)]">
                  {item.descriptionPoints.map((pt: string, i: number) => (
                    <li key={`${key}-pt-${i}`} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--primary))]" />
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 leading-relaxed text-[hsl(var(--foreground)/0.82)]">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      id="experience"
      className="relative overflow-hidden py-20 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-30 blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      <div className="mx-auto max-w-5xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center text-4xl font-extrabold tracking-tight"
        >
          {t.experience.sectionTitle}
        </motion.h2>


        <div className="relative mt-14">
          <div className="pointer-events-none hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[hsl(var(--border)/0.7)]" />

          {mounted ? (
            <motion.div variants={container} initial="hidden" animate="show" className="space-y-14">
              <AnimatePresence initial={false}>
                {shownKeys.map((key, idx) => (
                  <motion.div key={key} variants={itemV} initial="hidden" animate="show" exit="exit">
                    {renderCard(key, idx)}
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="space-y-14">
              {shownKeys.map((key, idx) => (
                <div key={key}>{renderCard(key, idx)}</div>
              ))}
            </div>
          )}
        </div>

        {keys.length > limit && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full bg-[#263a92] hover:bg-[#1f2f76] px-6 py-3 text-[hsl(var(--primary-foreground))] shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]"
              type="button"
            >
              {showAll ? t.experience.showLess : t.experience.showMore}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
