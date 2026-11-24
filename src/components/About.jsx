import Image from "next/image";

export function About({ t }) {
  const a = t.about;
  return (
    <section id="sobre" className="sec band about">
      <div className="about-deco" aria-hidden="true" />
      <div className="wrap" style={{ position: "relative" }}>
        <div className="sec-head">
          <span className="dot fill-blue">01</span>
          <h2 className="big h-sec">{a.title}</h2>
        </div>
        <p className="about-text">{a.text}</p>
        <div className="trio">
          <article className="pc glow fill-blue">
            <span className="pc-deco" aria-hidden="true" />
            <p className="caps status">
              <span className="sdot" />
              {a.live}
            </p>
            <div className="pc-body">
              <div className="pc-brand">
                <Image src="/experience/mexicoapi.webp" alt="" width={56} height={60} className="pc-logo" />
                <h3 className="caps">México API</h3>
              </div>
              <p className="big pc-num">100K+</p>
              <p>{a.apiLabel}</p>
            </div>
          </article>
          <article className="pc glow pc-soon">
            <p className="caps status">
              <span className="sdot" />
              {a.soon}
            </p>
            <div className="pc-body">
              <div className="redacted" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <p className="big pc-q" aria-hidden="true">
                ?
              </p>
              <h3 className="hand" style={{ fontSize: "clamp(30px, 2.4vw, 64px)" }}>
                {a.soonNote}
              </h3>
            </div>
          </article>
          <article className="pc glow fill-ink">
            <span className="pc-orbit orbit" aria-hidden="true">
              <span />
            </span>
            <p className="caps status">
              <span className="sdot ring" />
              {a.building}
            </p>
            <div className="pc-body">
              <p className="caps">UNINNOVA</p>
              <h3 className="big pc-name">
                EDUVERSE
                <br />
                ONE
              </h3>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
