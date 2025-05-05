"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu as MenuIcon, X, Sun, Moon, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslations } from "../hooks/useTranslations";

export function Navbar() {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScroll] = useState(false);
  const [theme, setTheme] = useState("light");
  const pathname = usePathname();

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      document.documentElement.classList.add(stored);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(next);
    localStorage.setItem("theme", next);
  };

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const navItems = [
    { name: t.nav.inicio, href: "#inicio" },
    { name: t.nav.habilidades, href: "#skills" },
    { name: t.nav.proyectos, href: "#projects" },
    { name: t.nav.trayectoria, href: "#experience" },
    { name: t.nav.contacto, href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/aleff-eco", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/aleff-espinosa-cordova/",
      label: "LinkedIn",
    },
  ];

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.23, 0.86, 0.39, 0.96] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-background/90 dark:bg-background/90 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold relative z-20">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            <img
              src="/logo.gif"
              alt={t.nav.logoAlt}
              className="inline-block h-8 w-8 mr-2"
            />
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-1">
            {navItems.map(({ name, href }) => (
              <li key={href} className="relative">
                <Link
                  href={href}
                  className={`py-2 px-5 hover:text-gray-50 hover:bg-foreground/10 transition-colors ${
                    pathname === href
                      ? "text-foreground font-medium"
                      : "text-foreground"
                  }`}
                >
                  {name}
                  {pathname === href && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 top-full h-0.5 w-full origin-left bg-gradient-to-r from-purple-500 to-pink-500"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="ml-4 flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-full p-2 hover:bg-foreground/10"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}

            <LanguageSwitcher />

            <button
              onClick={toggleTheme}
              className="ml-8 rounded-full p-2 hover:bg-foreground/10"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
              <span className="sr-only">{t.nav.themeToggle}</span>
            </button>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden rounded-full p-2 z-50 hover:bg-foreground/10 transition-colors"
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
          <span className="sr-only">{t.nav.menuToggle}</span>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 flex flex-col bg-background pt-24 px-8"
            >
              <ul className="flex flex-col gap-6">
                {navItems.map(({ name, href }, i) => (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      href={href}
                      className={`text-xl transition-colors ${
                        pathname === href
                          ? "text-foreground font-medium"
                          : "text-foreground/70"
                      }`}
                    >
                      {name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto pb-10 flex items-center justify-between">
                <div className="flex gap-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="rounded-full p-2 hover:bg-foreground/10 transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>

                <LanguageSwitcher />
                <button
                  onClick={toggleTheme}
                  className="px-8 rounded-full p-2 hover:bg-foreground/10 transition-colors"
                >
                  {theme === "light" ? (
                    <Moon className="h-5 w-5" />
                  ) : (
                    <Sun className="h-5 w-5" />
                  )}
                  <span className="sr-only">Cambiar tema</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
