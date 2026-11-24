"use client";

import { useEffect, useRef } from "react";

export function Typed({ words }) {
  const out = useRef(null);

  useEffect(() => {
    const el = out.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let word = 0;
    let current = words[0];
    let deleting = true;
    let timer = setTimeout(function tick() {
      const full = words[word % words.length];
      let delay = 85;
      if (!deleting && current.length < full.length) current = full.slice(0, current.length + 1);
      else if (!deleting) {
        deleting = true;
        delay = 1600;
      } else if (current.length > 0) {
        current = current.slice(0, -1);
        delay = 40;
      } else {
        deleting = false;
        word += 1;
        delay = 320;
      }
      el.textContent = current;
      timer = setTimeout(tick, delay);
    }, 2400);
    return () => clearTimeout(timer);
  }, [words]);

  return (
    <p className="typed">
      <span className="sr-only">{words.join(" · ")}</span>
      <span aria-hidden="true">
        <span ref={out}>{words[0]}</span>
        <span className="caret" />
      </span>
    </p>
  );
}
