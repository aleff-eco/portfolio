"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "./icons";

const subscribe = (onChange) => {
  window.addEventListener("themechange", onChange);
  return () => window.removeEventListener("themechange", onChange);
};
const getDark = () => document.documentElement.classList.contains("dark");

export function ThemeToggle({ label }) {
  const dark = useSyncExternalStore(subscribe, getDark, () => false);

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    window.dispatchEvent(new Event("themechange"));
  };

  return (
    <button type="button" className="chip3d round" onClick={toggle} aria-label={label} aria-pressed={dark}>
      {dark ? <Sun /> : <Moon />}
    </button>
  );
}
