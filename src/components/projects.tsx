// src/components/Projects.jsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import NotificationButton from './githubalert';
import { projects } from '@/data/information';
import { useTranslations } from '../hooks/useTranslations';

export function Projects({ children }: { children?: React.ReactNode }) {
  const t = useTranslations();
  const [showAll, setShowAll] = useState(false);
  const [count, setCount] = useState(3);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setCount(window.innerWidth < 768 ? 2 : 3);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Asegurarnos de que 'projects' está importado
  const projectKeys = projects.map(p => p.key);
  const visibleKeys = showAll ? projectKeys : projectKeys.slice(0, count);

  return (
    <section id="projects" className="relative py-20 bg-gray-100 dark:bg-gray-900">
      <div className="absolute top-4 right-6 z-50">
        <NotificationButton />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {children}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-800 dark:text-white text-center mb-4"
        >
          {t.projects.sectionTitle}
        </motion.h2>
        <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-12 rounded-full" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                  className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 ${
                    hovered === idx ? 'scale-105 shadow-2xl' : ''
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
                      className="text-2xl font-bold text-gray-800 dark:text-white hover:text-indigo-500 transition-colors"
                    >
                      {data.title}
                    </a>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 italic leading-snug">
                      {data.description}
                    </p>
                  </div>
                  <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      {data.occupation}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          >
            {showAll ? t.projects.showLess : t.projects.showMore}
          </motion.button>
        </div>
      </div>
    </section>
  );
}
