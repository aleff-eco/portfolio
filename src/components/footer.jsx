import { LINKS } from "@/content/site";
import { ArrowUp, LogoMark } from "./icons";

export function Footer({ t }) {
  const f = t.footer;
  return (
    <footer className="site-foot">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <a href="#inicio" className="foot-logo">
              <LogoMark className="foot-mark" />
              <span className="sora">Aleff Espinosa</span>
            </a>
            <p className="foot-tag">{f.tagline}</p>
          </div>
          <nav aria-label={f.sections}>
            <p className="caps foot-h">{f.sections}</p>
            <ul>
              {t.nav.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="caps foot-h">{f.services}</p>
            <ul>
              {t.why.agreement.modes.map((m, i) => (
                <li key={m.title}>
                  <a href={`#acuerdo-${i}`}>{m.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="caps foot-h">{f.contact}</p>
            <ul>
              <li>
                <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
              </li>
              <li>
                <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
                  GitHub ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bar">
          <p>
            © 2024 – {new Date().getFullYear()} Aleff Espinosa Córdova. {f.rights}
          </p>
          <span className="wink" aria-hidden="true">
            (⌐■_
            <span className="eye">
              <span>■</span>
              <span>-</span>
            </span>
            )
          </span>
          <a href="#inicio" className="chip3d foot-top">
            {f.top}
            <ArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}
