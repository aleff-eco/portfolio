"use client";

import { useState } from "react";
import { ChevronDown } from "./icons";

export function TechStack({ openLabel, closeLabel, cols }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="techs">
      <button type="button" className="btn btn-tech" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="tech-panel">
        {open ? closeLabel : openLabel}
        <span className={open ? "o flip" : "o"} aria-hidden="true">
          <ChevronDown />
        </span>
      </button>
      <div id="tech-panel" className="tech-panel" hidden={!open}>
        {cols.map((col) => (
          <div key={col.title}>
            <p className="caps tech-h">
              <span className={`tone-${col.tone}`} />
              {col.title}
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {col.items.map((item) => (
                <li key={item} className="tech-i">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
