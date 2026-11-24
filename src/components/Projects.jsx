"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Plus } from "./icons";

const VISIBLE = 4;

export function Projects({ title, more, less, items }) {
  const [all, setAll] = useState(false);
  return (
    <section id="proyectos" className="sec">
      <div className="wrap">
        <div className="sec-head">
          <span className="dot fill-blue">04</span>
          <h2 className="big h-sec">{title}</h2>
        </div>
        <div className="cards" id="project-list">
          {items.map((p, i) => (
            <a key={p.key} href={p.href} className="card" target="_blank" rel="noopener noreferrer" hidden={!all && i >= VISIBLE}>
              <div className="frame glow">
                <Image src={p.img} alt={p.alt} fill sizes="(min-width: 2400px) 800px, (min-width: 1100px) 50vw, 100vw" />
                <span className="go fill-blue" aria-hidden="true">
                  <ArrowRight size={22} />
                </span>
              </div>
              <div className="card-meta">
                <h3 className="card-t">{p.name}</h3>
                <span className="caps muted">
                  {p.role}
                </span>
              </div>
              <p className="card-x">{p.line}</p>
              {p.tags && <p className="tools">{p.tags.join(" · ")}</p>}
            </a>
          ))}
        </div>
        <div className="more-row">
          <button type="button" className="btn" onClick={() => setAll((v) => !v)} aria-expanded={all} aria-controls="project-list">
            {all ? less : more}
            <span className="o" aria-hidden="true">
              <Plus />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
