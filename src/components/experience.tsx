"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { BriefcaseBusiness, ChevronDown, ChevronUp, ExternalLink } from "lucide-react"

// Tipo para cada entrada de experiencia
interface ExperienceItem {
  company: string
  companyUrl: string
  date: string
  title: string
  descriptionPoints?: string[]
  description?: string
  icon?: React.ReactNode
}

import { experience } from "../data/information"

export function Experience() {
  const [showAll, setShowAll] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setIsClient(true)
    setWidth(window.innerWidth)
    const onResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  if (!isClient) return null

  const limit = width < 768 ? 1 : 2
  const entries = showAll ? experience : experience.slice(0, limit)

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-800 dark:text-white text-center mb-4"
        >
          Mi Trayectoria
        </motion.h2>
        <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-16 rounded-full"></div>

        <div className="relative">
          {/* Línea vertical central */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-indigo-200 dark:bg-indigo-900"></div>

          <div className="space-y-16">
            {entries.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="relative"
              >
                {/* Punto en la línea */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-8 w-4 h-4 bg-indigo-500 rounded-full border-4 border-white dark:border-gray-900"></div>

                {/* Contenedor de tarjeta alternante */}
                <div
                  className={`flex flex-col md:flex-row items-start gap-8 ${
                    idx % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Bloque empresa y fecha */}
                  <div className={`md:w-1/2 flex ${idx % 2 === 0 ? "justify-start" : "justify-end"} md:px-12`}>
                    <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg border-l-4 border-indigo-500">
                      <div className="flex items-center justify-between mx-2">
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-full text-indigo-600 dark:text-indigo-300">
                            {item.icon || <BriefcaseBusiness className="w-3 h-3" />}
                          </div>
                          <a
                            href={item.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-semibold text-gray-800 dark:text-white hover:text-indigo-600 transition"
                          >
                            {item.company}
                          </a>
                        </div>
                        <span className="pl-2 text-sm text-gray-500 dark:text-gray-400">{item.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bloque titulo y descripcion */}
                  <div className="md:w-1/2">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                        {item.title}
                      </h3>
                      {item.descriptionPoints ? (
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                          {item.descriptionPoints.map((pt, i) => (
                            <li key={i}>{pt}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {experience.length > limit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            >
              {showAll ? "Ver menos" : "Ver más"}
              {showAll ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
