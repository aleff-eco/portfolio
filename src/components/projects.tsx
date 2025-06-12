// src/components/Projects.jsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import NotificationButton from "./githubalert";
import { projects } from "@/data/information";
import { useTranslations } from "../hooks/useTranslations";
import { ChevronDown, ChevronUp } from 'lucide-react';

export function Projects({ children }: { children?: React.ReactNode }) {
  const t = useTranslations();
  const [showAll, setShowAll] = useState(false);
  const [count, setCount] = useState(3);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setCount(window.innerWidth < 768 ? 2 : 3);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projectKeys = projects.map((p) => p.key);
  const visibleKeys = showAll ? projectKeys : projectKeys.slice(0, count);
  return (
    <section id="projects" className="relative py-20">
      <div className="absolute top-4 right-6 z-50">
        <NotificationButton />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {children}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-4"
        >
          {t.projects.sectionTitle}
        </motion.h2>
        <div className="h-1 w-24 mx-auto mb-12 rounded-full" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
          {visibleKeys.map((key, idx) => {
            const data = t.projects[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative"
              >
                <motion.div
                  onHoverStart={() => setHovered(idx)}
                  onHoverEnd={() => setHovered(null)}
                  className={`rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 bg-[hsla(var(--background-secondary))] ${
                    hovered === idx ? "scale-105 shadow-2xl" : ""
                  }`}
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={data.imageSrc}
                      alt={data.imageAlt}
                      layout="fill"
                      objectFit="cover"
                      className="hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <a
                      href={data.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl font-bold hover:"
                    >
                      {data.title}
                    </a>
                    <p className="mt-2 text-gray-600italic leading-snug">
                      {data.description}
                    </p>
                  </div>
                  <div className="px-6 pb-6 border-t">
                    <span className="mt-3 text-sm font-semibold">
                      {data.occupation}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-12 flex justify-center hover:underline">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setShowAll(prev => !prev)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            >
              {showAll ? t.experience.showLess : t.experience.showMore}
              {showAll ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
