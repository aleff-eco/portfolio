"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "@/hooks/useTranslations";

const variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function About() {
  const t = useTranslations();
  const skills = Object.values(t.about.skills);

  return (
    <section id="about" className="relative overflow-hidden py-1 md:py-12 text-white">
      <motion.div
        className="pointer-events-none absolute blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <div className="container mx-auto max-w-6xl lg:px-8 space-y-10 px-6">
        <motion.h2
          variants={variants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }}
          className="text-4xl font-bold text-center"
        >
          {t.about.title}
        </motion.h2>

        <motion.p
          variants={variants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }}
          className="mx-auto max-w-5xl text-lg leading-relaxed"
        >
          {t.about.description}
        </motion.p>

        <ul className="grid gap-8 sm:grid-cols-2 px-2 lg:px-4">
          {skills.map(({ title, body }, idx) => (
            <motion.li
              key={idx}
              variants={variants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.6 }}
              className="rounded-2xl px-6 py-2 backdrop-blur-lg"
            >
              <h3 className="mb-2 text-2xl font-semibold">* {title}</h3>
              <p className="text-base leading-relaxed">{body}</p>
            </motion.li>
          ))}
        </ul>

        <motion.p
          variants={variants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }}
          className="mx-auto max-w-5xl text-lg leading-relaxed"
        >
          {t.about.closing}
        </motion.p>
      </div>
    </section>
  );
}
