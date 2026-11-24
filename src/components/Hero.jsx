import Image from "next/image";
import { clients } from "@/content/site";
import { ArrowDown, ArrowRight, Scribble, ScribbleCircle } from "./icons";
import { Typed } from "./Typed";

const TRUSTED = ["UNINNOVA · Universidad del País Innova", "KUXPRO", "BNI Chiapas", "FLDCH", "INEF", "REICHSTAG"];
const trusted = clients.filter((c) => TRUSTED.includes(c.name));

export function Hero({ t }) {
  const h = t.hero;
  return (
    <section id="inicio" className="hero-sec">
      <div className="swiss" aria-hidden="true" />
      <div className="wrap hero-in">
        <div className="hero">
          <div className="hero-copy">
            <h1 className="h1">
              <span className="caps eyebrow">{h.eyebrow}</span>
              <span className="big hello">
                {h.hello1}
                <br />
                <span className="under">
                  {h.hello2}
                  <Scribble />
                </span>
              </span>
            </h1>
            <Typed words={h.words} />
            <div className="ctas">
              <a href="#contacto" className="btn btn-main">
                {h.cta}
                <span className="o" aria-hidden="true">
                  <ArrowRight />
                </span>
              </a>
              <a href="#proyectos" className="btn">
                {h.cta2}
                <span className="o" aria-hidden="true">
                  <ArrowDown />
                </span>
              </a>
            </div>
          </div>
          <div className="orbs" aria-hidden="true">
            <div className="orb orb-disc fill-blue cut" />
            <div className="orb orb-ring orbit">
              <span />
            </div>
            <div className="orb orb-core">
              <Image src="/logo.webp" alt="" width={400} height={400} unoptimized priority />
            </div>
            <div className="orb orb-ink float fill-ink cut" />
            <div className="orb orb-cyan fill-cyan" />
          </div>
        </div>
        <div className="stats">
          <div>
            <p className="big stat-n">4+</p>
            <p className="stat-l">{h.stats.years}</p>
          </div>
          <div>
            <p className="big stat-n">30+</p>
            <p className="stat-l">{h.stats.systems}</p>
          </div>
          <div>
            <p className="big stat-n">
              100%
              <ScribbleCircle />
            </p>
            <p className="stat-l">{h.stats.deadlines}</p>
          </div>
          <div>
            <p className="big stat-n">6</p>
            <p className="stat-l">{h.stats.certs}</p>
          </div>
        </div>
        <div className="trust">
          <p className="caps muted">{h.trust}</p>
          <ul>
            {trusted.map((c) => (
              <li key={c.name}>
                <Image src={c.logo} alt={c.name} fill sizes="140px" unoptimized={c.logo.endsWith(".svg")} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
