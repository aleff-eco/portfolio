"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Buoy, Cloud, Compass, Rocket } from "./icons";

const ICONS = { rocket: Rocket, compass: Compass, cloud: Cloud, buoy: Buoy };

export function Agreement({ a }) {
  const [mode, setMode] = useState(0);
  const [signed, setSigned] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  useEffect(() => {
    const pick = () => {
      const match = window.location.hash.match(/^#acuerdo-(\d)$/);
      if (!match) return;
      const index = Number(match[1]);
      if (index < a.modes.length) setMode(index);
      document.getElementById("acuerdo")?.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    pick();
    window.addEventListener("hashchange", pick);
    return () => window.removeEventListener("hashchange", pick);
  }, [a.modes.length]);

  const goToContact = () => {
    window.dispatchEvent(new CustomEvent("contact:prefill", { detail: `${a.prefill} ${a.modes[mode].title}. ` }));
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", "#contacto");
  };

  const sign = (ev) => {
    ev.preventDefault();
    if (signed) return goToContact();
    setSigned(true);
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    timer.current = setTimeout(goToContact, calm ? 400 : 1900);
  };

  return (
    <div className="deal" id="acuerdo">
      <div className="deal-copy">
        <p className="caps muted">{a.label}</p>
        <h3 className="big deal-t">{a.title}</h3>
        <p className="deal-sub">{a.sub}</p>
      </div>
      <form className={signed ? "doc glow signed" : "doc glow"} onSubmit={sign}>
        <div className="doc-head">
          <p className="caps doc-title">{a.docTitle}</p>
          <p className="caps doc-no">N.º 2026-001</p>
        </div>
        <p className="doc-parties">
          {a.between} <strong>{a.you}</strong> {a.and} <strong>Aleff Espinosa Córdova</strong>, Cloud &amp; DevOps Engineer.
        </p>
        <ol className="clauses">
          {a.clauses.map((c, i) => (
            <li key={c.title}>
              <span className="caps clause-n">{String(i + 1).padStart(2, "0")}</span>
              <span className="clause-t">{c.title}</span>
              <span className="clause-x">{c.text}</span>
            </li>
          ))}
        </ol>
        <fieldset className="doc-modes">
          <legend className="caps">{a.modeLabel}</legend>
          <div className="modes-grid">
            {a.modes.map((m, i) => {
              const MIcon = ICONS[m.icon];
              return (
                <label key={m.title} className="mode">
                  <input type="radio" name="deal-mode" checked={mode === i} onChange={() => setMode(i)} disabled={signed} />
                  <span className="mode-seal" aria-hidden="true">
                    <MIcon />
                  </span>
                  <span className="mode-t">{m.title}</span>
                  <span className="mode-x">{m.text}</span>
                </label>
              );
            })}
          </div>
        </fieldset>
        <div className="sign-row">
          <div className="sign">
            <div className="sign-line">
              <span className="sign-name" aria-hidden={!signed}>
                Aleff Espinosa
              </span>
            </div>
            <span className="caps sign-l">{a.byMe}</span>
          </div>
          <div className="sign">
            <div className="sign-line">
              <span className="sign-you">{a.yourSign}</span>
            </div>
            <span className="caps sign-l">{a.byYou}</span>
          </div>
          <button type="submit" className="btn btn-main">
            {signed ? a.signedBtn : a.btn}
            <span className="o" aria-hidden="true">
              <ArrowRight />
            </span>
          </button>
        </div>
        <div className="stamp" aria-hidden="true">
          <span>{a.stamp}</span>
          <span className="stamp-d">2026 · devaleff.com</span>
        </div>
        <p className="sr-only" role="status">
          {signed ? a.stamp : ""}
        </p>
      </form>
    </div>
  );
}
