"use client";

import Image from "next/image";
import { useState } from "react";
import { Minus, Pause, Play, Plus } from "./icons";

export function Marquee({ clients, roles, slower, faster, pause, play, children }) {
  const [speed, setSpeed] = useState(2);
  const [paused, setPaused] = useState(false);
  const loop = [...clients, ...clients];

  return (
    <>
      <div className="clients-head">
        {children}
        <div className="speed">
          <button type="button" className="icon" onClick={() => setSpeed((s) => Math.max(1, s - 1))} aria-label={slower}>
            <Minus />
          </button>
          <span className="caps" style={{ minWidth: "3ch", textAlign: "center", fontVariantNumeric: "tabular-nums" }} aria-live="polite">
            {speed}×
          </span>
          <button type="button" className="icon" onClick={() => setSpeed((s) => Math.min(4, s + 1))} aria-label={faster}>
            <Plus />
          </button>
          <button type="button" className="icon" onClick={() => setPaused((v) => !v)} aria-label={paused ? play : pause} aria-pressed={paused}>
            {paused ? <Play /> : <Pause />}
          </button>
        </div>
      </div>
      <div className="mq bleed">
        <ul className="marquee" style={{ animationDuration: `${Math.round(70 / speed)}s`, animationPlayState: paused ? "paused" : undefined }}>
          {loop.map((client, i) => {
            const copy = i >= clients.length;
            const role = client.role ? roles[client.role] : null;
            const body = (
              <>
                <Image src={client.logo} alt={client.name} fill sizes="(min-width: 1800px) 380px, 260px" unoptimized={client.logo.endsWith(".svg")} />
                <span className="logo-tip" aria-hidden="true">
                  <span className="logo-tip-n">{client.name}</span>
                  {role?.split(" · ").map((r) => (
                    <span key={r} className="caps logo-tip-r">
                      {r}
                    </span>
                  ))}
                </span>
              </>
            );
            const label = role ? `${client.name} — ${role}` : client.name;
            return (
              <li key={`${client.name}-${i}`} aria-hidden={copy || undefined}>
                {client.href ? (
                  <a className="logo-cell glow" href={client.href} target="_blank" rel="noopener noreferrer" tabIndex={copy ? -1 : undefined} aria-label={label}>
                    {body}
                  </a>
                ) : (
                  <div className="logo-cell glow" tabIndex={copy ? -1 : 0} role="img" aria-label={label}>
                    {body}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
