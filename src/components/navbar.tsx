"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Menu as MenuIcon, X, Sun, Moon, Github, Linkedin } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";

type ThemeMode = "light" | "dark";

export function Navbar() {
  const { t } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [activeId, setActiveId] = useState<string>("inicio");

  const navScrollRef = useRef<HTMLUListElement | null>(null);

  const navItems = useMemo(
    () => [
      { id: "inicio", name: t.nav.inicio, href: "#inicio" },
      { id: "about", name: t.nav.sobreMi, href: "#about" },
      { id: "skills", name: t.nav.habilidades, href: "#skills" },
      { id: "projects", name: t.nav.proyectos, href: "#projects" },
      { id: "experience", name: t.nav.trayectoria, href: "#experience" },
      { id: "contact", name: t.nav.contacto, href: "#contact" },
    ],
    [t],
  );

  const socialLinks = useMemo(
    () => [
      { icon: Github, href: "https://github.com/aleff-eco", label: "GitHub" },
      {
        icon: Linkedin,
        href: "https://www.linkedin.com/in/aleff-espinosa-cordova/",
        label: "LinkedIn",
      },
    ],
    [],
  );

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const initial: ThemeMode =
      stored === "dark" || stored === "light" ? (stored as ThemeMode) : "light";

    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");

    if (!stored) localStorage.setItem("theme", initial);
  }, []);

  const toggleTheme = () => {
    const next: ThemeMode = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    const ids = navItems.map((n) => n.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .map((e) => ({
            id: (e.target as HTMLElement).id,
            top: e.boundingClientRect.top,
          }))
          .sort((a, b) => Math.abs(a.top - 88) - Math.abs(b.top - 88))[0];

        if (!visible?.id) return;

        setActiveId(visible.id);

        const href = `#${visible.id}`;
        if (window.location.hash !== href) {
          history.replaceState(null, "", href);
        }
      },
      {
        root: null,
        threshold: [0.01, 0.15, 0.3, 0.45],
        rootMargin: "-88px 0px -60% 0px",
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [navItems]);

  useEffect(() => {
    const list = navScrollRef.current;
    if (!list) return;

    const activeEl = list.querySelector<HTMLAnchorElement>(
      `a[data-id="${activeId}"]`,
    );
    if (!activeEl) return;

    const parent = list.parentElement;
    if (!parent) return;

    const left = activeEl.offsetLeft;
    const right = left + activeEl.offsetWidth;
    const viewLeft = parent.scrollLeft;
    const viewRight = viewLeft + parent.clientWidth;

    if (left < viewLeft + 16)
      parent.scrollTo({ left: Math.max(left - 16, 0), behavior: "smooth" });

    if (right > viewRight - 16)
      parent.scrollTo({
        left: right - parent.clientWidth + 16,
        behavior: "smooth",
      });
  }, [activeId]);

  const iconBtn =
    "grid place-items-center h-10 w-10 rounded-full transition " +
    "text-[hsl(var(--foreground)/0.72)] " +
    "hover:text-[hsl(var(--foreground))] hover:bg-black/5 dark:hover:bg-white/10 " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] " +
    "focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]";

  const glass =
    scrolled || isOpen
      ? "bg-[hsl(var(--card)/0.55)] dark:bg-[hsl(var(--card)/0.55)] backdrop-blur-lg backdrop-brightness-110 shadow-[0_10px_30px_-22px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.55)]"
      : "bg-transparent";

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.32, ease: [0.23, 0.86, 0.39, 0.96] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${glass}`}
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-[1440px] px-4 sm:px-6">
        <div className="h-[72px] grid grid-cols-[auto_1fr_auto] items-center gap-3">
          <div className="flex items-center justify-start">
            <Link href="/" className="inline-flex items-center">
              <img src="/logo.gif" alt={t.nav.logoAlt} className="h-10 w-10" />
            </Link>
          </div>

          <nav className="hidden md:block">
            <div className="max-w-[860px] lg:max-w-[980px] mx-auto">
              <div className="overflow-x-auto scrollbar-hide">
                <ul
                  ref={navScrollRef}
                  className="flex flex-nowrap items-center justify-center gap-6 whitespace-nowrap py-2"
                >
                  {navItems.map(({ id, name, href }) => {
                    const isActive = activeId === id;

                    return (
                      <li key={id} className="relative">
                        <Link
                          href={href}
                          data-id={id}
                          onClick={() => {
                            setActiveId(id);
                            setIsOpen(false);
                          }}
                          className={[
                            "relative inline-flex items-center justify-center",
                            "px-1 py-1 text-md font-medium transition-colors",
                            isActive
                              ? "text-[hsl(var(--foreground))]"
                              : "text-[hsl(var(--foreground)/0.72)] hover:text-[hsl(var(--foreground))]",
                            "focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]",
                            "focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]",
                          ].join(" ")}
                        >
                          {name}

                          {isActive && (
                            <motion.span
                              layoutId="nav-underline"
                              className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-[hsl(var(--primary))]"
                              transition={{
                                type: "spring",
                                stiffness: 520,
                                damping: 40,
                              }}
                            />
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </nav>

          <div className="hidden md:flex items-center justify-end gap-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={iconBtn}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}

            <LanguageSwitcher />

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={t.nav.themeToggle}
              className={iconBtn}
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={t.nav.themeToggle}
              className={iconBtn}
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              aria-label={t.nav.menuToggle}
              aria-expanded={isOpen}
              className={`${iconBtn} ${
                isOpen ? "bg-black/5 dark:bg-white/10" : ""
              }`}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <div
              className="absolute inset-0 bg-[hsl(var(--background)/0.92)] backdrop-blur-xl backdrop-saturate-150"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative h-[100dvh] w-full"
            >
              <div className="sticky top-0 z-10 h-[72px] bg-[hsl(var(--card)/0.82)] backdrop-blur-xl backdrop-saturate-150">
                <div className="mx-auto max-w-7xl 2xl:max-w-[1440px] h-full px-4 sm:px-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src="/logo.gif"
                      alt={t.nav.logoAlt}
                      className="h-10 w-10"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label={t.nav.menuToggle}
                    className={iconBtn}
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="h-[calc(100dvh-72px)] overflow-y-auto px-6 py-10 bg-[hsl(var(--background))]">
                <div className="mx-auto w-full max-w-sm">
                  <ul className="space-y-3 text-center">
                    {navItems.map(({ id, name, href }, i) => {
                      const isActive = activeId === id;

                      return (
                        <motion.li
                          key={id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ delay: 0.03 * i }}
                        >
                          <Link
                            href={href}
                            onClick={() => {
                              setActiveId(id);
                              setIsOpen(false);
                            }}
                            className={[
                              "relative block w-full py-4 text-lg font-semibold",
                              "text-[hsl(var(--foreground))] transition-colors",
                              "focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]",
                              "focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]",
                              "after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-28 after:-translate-x-1/2 after:rounded-full",
                              "after:bg-[hsl(var(--primary))] after:origin-center after:transition-transform after:duration-200",
                              isActive
                                ? "after:scale-x-100"
                                : "after:scale-x-0 hover:after:scale-x-100",
                            ].join(" ")}
                          >
                            {name}
                          </Link>
                        </motion.li>
                      );
                    })}
                  </ul>

                  <div className="mt-10 flex items-center justify-center gap-3">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="grid place-items-center h-11 w-11 rounded-full transition text-[hsl(var(--foreground)/0.8)] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--foreground)/0.06)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    ))}

                    <LanguageSwitcher />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
