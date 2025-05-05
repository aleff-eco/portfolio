"use client";

import React, { useState, useEffect, useRef } from "react";
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

export default function NotificationButton() {
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [totalStars, setTotalStars] = useState(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch("https://api.github.com/users/aleff-eco/repos");
        const data: Repo[] = await res.json();
        const popular = data
          .filter((r) => r.stargazers_count >= 3)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);
        setRepos(popular);
        const total = data.reduce((sum, r) => sum + r.stargazers_count, 0);
        setTotalStars(total);
        prevCountRef.current = popular.length;
      } catch (e) {
        console.error(e);
      }
    }
    fetchRepos();
  }, []);

  return (
    <div className="fixed top-4 md:top-8 lg:top-12 right-4 md:right-8 lg:right-16 z-50">
      <motion.button
        onClick={() => setOpen((o) => !o)}
        className="relative w-16 h-16 flex items-center justify-center bg-gray-100 dark:bg-gray-800 focus:outline-none"
      >
        <motion.div
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1 }}
        >
          <FaGithub className="w-10 h-10 text-gray-800 dark:text-white" />
        </motion.div>
        <span className="absolute w-14 h-14 rounded-full animate-ping" />
        <span
          className="absolute top-0 right-0 flex items-center justify-center h-6 w-6 text-sm font-bold"
          style={{
            color: repos.length > 0 ? "rgba(255, 0, 0, 0.6)" : "transparent",
          }}
        >
          {repos.length}
        </span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute top-full mt-3 right-0 w-96 rounded-[20px] shadow-2xl overflow-hidden z-10"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }}
          >
            <div className="text-center text-lg bg-indigo-600 dark:bg-indigo-700 text-white font-bold px-4 py-3">
              {t.notification.title}
            </div>
            <div className="max-h-72 overflow-y-auto">
              {repos.length === 0 ? (
                <div className="p-4 text-center text-sm text-gray-600 dark:text-gray-400">
                  {t.notification.empty}
                </div>
              ) : (
                repos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="inline-flex items-center bg-red-100 dark:bg-red-800 text-red-600 dark:text-red-400 px-2 py-1 rounded-full mr-4 text-sm font-medium">
                      <FaStar className="inline-block mx-2 h-4 w-4" />
                      {repo.stargazers_count}
                    </span>
                    <div className="flex-grow">
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {repo.name}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {repo.description
                          ? repo.description.length > 80
                            ? `${repo.description.slice(0, 80)}...`
                            : repo.description
                          : t.notification.noDescription}
                      </p>
                    </div>
                  </a>
                ))
              )}
            </div>
            <a
              href="https://github.com/aleff-eco"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 block text-center bg-indigo-50 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 font-medium py-3 hover:bg-indigo-100 dark:hover:bg-gray-700 transition-colors"
            >
              {t.notification.viewAll} ({totalStars} {t.notification.starsIcon})
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
