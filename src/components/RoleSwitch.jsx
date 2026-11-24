"use client";

import { useEffect, useState } from "react";

export function RoleSwitch({ roles, label }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    if (paused || stopped || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, [paused, stopped, roles.length]);

  return (
    <div className="roles" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div className="roles-track" role="group" aria-label={label} style={{ "--i": active, "--n": roles.length }}>
        <span className="roles-thumb" aria-hidden="true" />
        {roles.map((r, i) => (
          <button key={r.title} type="button" className={i === active ? "role on" : "role"} aria-pressed={i === active} onClick={() => {
              setActive(i);
              setStopped(true);
            }}>
            {r.title}
          </button>
        ))}
      </div>
      <p className="roles-line" aria-live="polite">
        {roles[active].text}
      </p>
    </div>
  );
}
