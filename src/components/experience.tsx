'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';
import { experience } from '@/data/information';

export function Experience() {
  const t = useTranslations();
  const [showAll, setShowAll] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setIsClient(true);
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  if (!isClient) return null;

  const limit = width < 768 ? 1 : 2;
  const keys = experience.map(e => e.key);
  const shownKeys = showAll ? keys : keys.slice(0, limit);

  return (
    <section
      id="experience"
      className="py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-800 dark:text-white text-center mb-4"
        >
          {t.experience.sectionTitle}
        </motion.h2>
        <div className="h-1 w-32 mx-auto mb-16 rounded-full" />

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px" />

          <div className="space-y-16">
            {shownKeys.map((key, idx) => {
              const item = t.experience.list[key];
              const alignRight = idx % 2 === 0;
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="relative"
                >
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-8 w-4 h-4 border-4 border-white dark:border-gray-900" />
                  <div
                    className={`flex flex-col md:flex-row items-start gap-8 ${
                      alignRight ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    <div
                      className={`md:w-1/2 flex ${
                        alignRight ? 'justify-start' : 'justify-end'
                      } md:px-12`}
                    >
                      <div className="p-2 rounded-lg shadow-lg border-l-4 border-indigo-500 bg-[hsla(var(--background-secondary))]">
                        <div className="flex items-center justify-between mx-2">
                          <div className="flex items-center gap-4">
                            <div className="p-2 rounded-full text-indigo-600 ">
                              {item.icon}
                            </div>
                            <a
                              href={item.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-lg font-semibold transition"
                            >
                              {item.company}
                            </a>
                          </div>
                          <span className="pl-2 text-sm text-gray-500 dark:text-gray-400">
                            {item.date}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="md:w-1/2">
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg bg-[hsla(var(--background-secondary))]">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                          {item.title}
                        </h3>
                        {item.descriptionPoints?.length ? (
                          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                            {item.descriptionPoints.map((pt, i) => (
                              <li key={i}>{pt}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-300">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {keys.length > limit && (
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
        )}
      </div>
    </section>
  );
}
