"use client";

import { useEffect } from "react";

const MAGNETIC = ".btn, .chip3d";
const PULL = 0.22;

export default function MouseMoveEffect() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let magnet = null;

    const release = () => {
      magnet?.style.removeProperty("--tx");
      magnet?.style.removeProperty("--ty");
      magnet = null;
    };

    const move = (event) => {
      const target = event.target;
      const card = target?.closest?.(".glow");
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${event.clientX - r.left}px`);
        card.style.setProperty("--my", `${event.clientY - r.top}px`);
      }
      if (calm) return;
      const button = target?.closest?.(MAGNETIC) ?? null;
      if (button !== magnet) release();
      if (!button) return;
      magnet = button;
      const r = button.getBoundingClientRect();
      button.style.setProperty("--tx", `${(event.clientX - r.left - r.width / 2) * PULL}px`);
      button.style.setProperty("--ty", `${(event.clientY - r.top - r.height / 2) * PULL}px`);
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", release);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", release);
    };
  }, []);

  return null;
}
