"use client";

import { useState } from "react";

export function Career({ c }) {
  const [open, setOpen] = useState(0);
  return (
    <section id="trayectoria" className="sec band">
      <div className="wrap">
        <div className="sec-head tight">
          <span className="dot fill-blue">05</span>
          <h2 className="big h-sec">{c.title}</h2>
        </div>
        <p className="caps muted career-hint">{c.hint}</p>
        <ol className="tl-list">
          {c.items.map((item, i) => {
            const on = open === i;
            return (
              <li key={item.org} className={on ? "tl-item on" : "tl-item"}>
                <button type="button" className="tl" aria-expanded={on} aria-controls={`tl-${i}`} onClick={() => setOpen(i)}>
                  <span className="ring" aria-hidden="true" />
                  <span className="tl-main">
                    <span className="tl-org">{item.org}</span>
                    <span className="muted">{item.role}</span>
                  </span>
                  <span className="caps tl-yr">{item.when}</span>
                  <span className={item.now ? "seal fill-blue" : "seal"}>
                    <span className="seal-n">{item.sn}</span>
                    <span className="caps seal-w">{item.sw}</span>
                  </span>
                </button>
                <div id={`tl-${i}`} className="tl-panel" role="region" aria-label={item.org} inert={!on}>
                  <div className="tl-panel-in">
                    <div className="tl-body">
                      <p className="tl-sum">{item.summary}</p>
                      <div>
                        <p className="caps muted">{c.resultsLabel}</p>
                        <ul className="tl-res">
                          {item.results.map((r) => (
                            <li key={r}>{r}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
