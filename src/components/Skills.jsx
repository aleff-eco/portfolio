import Image from "next/image";
import { certs } from "@/content/site";
import { RoleSwitch } from "./RoleSwitch";
import { TechStack } from "./TechStack";

function Cell({ n, cell, tools, children }) {
  return (
    <div className="cap glow">
      <div className="cap-h">
        <span className="caps muted">{n}</span>
        <h3 className="cap-t">{cell.title}</h3>
      </div>
      <div className="cap-v">{children}</div>
      <p className="cap-x">{cell.text}</p>
      {tools && <p className="tools">{tools}</p>}
    </div>
  );
}

const awsBadges = certs.filter((cert) => cert.provider === "AWS Academy");

const ROSETTE = Array.from({ length: 48 }, (_, i) => {
  const r = i % 2 ? 86 : 96;
  const a = (i / 48) * Math.PI * 2;
  return `${(100 + r * Math.sin(a)).toFixed(2)},${(100 - r * Math.cos(a)).toFixed(2)}`;
}).join(" ");

function SecuritySeal({ ring, center, label }) {
  return (
    <svg className="seal-svg" viewBox="0 0 200 236" role="img" aria-label={label}>
      <defs>
        <path id="seal-arc" d="M100 100 m-63 0 a63 63 0 1 1 126 0 a63 63 0 1 1 -126 0" />
      </defs>
      <path className="seal-tail" d="M58 150 L36 232 L60 218 L76 236 L92 160 Z" />
      <path className="seal-tail" d="M142 150 L164 232 L140 218 L124 236 L108 160 Z" />
      <polygon className="seal-body" points={ROSETTE} />
      <circle className="seal-stitch" cx="100" cy="100" r="78" />
      <circle className="seal-inner" cx="100" cy="100" r="49" />
      <g className="seal-ring">
        <text className="seal-ring-text">
          <textPath href="#seal-arc" textLength="392" lengthAdjust="spacing">
            {ring}
          </textPath>
        </text>
      </g>
      <path className="seal-shield" d="M100 70 l18 7 v13 c0 11 -8 18 -18 21 c-10 -3 -18 -10 -18 -21 v-13 z M92 90 l6 6 l11 -12" />
      <text className="seal-center" x="100" y="130" textAnchor="middle">
        {center}
      </text>
    </svg>
  );
}

function Badges({ list }) {
  return (
    <div className="badges">
      {list.map((cert) => (
        <Image key={cert.name} src={cert.img} alt={`${cert.provider} ${cert.name}`} width={320} height={320} />
      ))}
    </div>
  );
}

export function Skills({ t }) {
  const s = t.skills;
  const c = s.cells;
  return (
    <section id="habilidades" className="sec band">
      <div className="wrap">
        <div className="sec-head tight">
          <span className="dot fill-blue">03</span>
          <p className="caps muted">{s.label}</p>
        </div>
        <h2 className="big h-xl">{s.title}</h2>
        <p className="lead">{s.sub}</p>

        <p className="caps group-t">{s.toolsTitle}</p>
        <div className="cap-grid">
          <Cell n="01" cell={c.cloud} tools="EC2 · S3 · IAM · Cost Explorer">
            <Badges list={awsBadges} />
          </Cell>
          <Cell n="02" cell={c.auto} tools="GitHub Actions · Docker · Cloudflare">
            <div className="pipe" role="img" aria-label="local → staging → prod">
              <span className="pipe-line" aria-hidden="true">
                <span className="dotx" />
              </span>
              {["local", "staging", "prod"].map((env) => (
                <div key={env} className="pipe-n" aria-hidden="true">
                  <span className={env === "prod" ? "pipe-c fill-blue" : "pipe-c"} />
                  <span className="caps muted">{env}</span>
                </div>
              ))}
            </div>
          </Cell>
          <Cell n="03" cell={c.scale} tools="Laravel · FastAPI · MySQL · PostgreSQL">
            <p className="num">100K+</p>
          </Cell>
          <Cell n="04" cell={c.secure} tools="CVE · Hardening · SSO">
            <SecuritySeal ring={c.secure.ring} center={c.secure.center} label={c.secure.label} />
          </Cell>
        </div>

        <p className="caps group-t">{s.humanTitle}</p>
        <div className="cap-grid duo">
          <Cell n="05" cell={c.web}>
            <svg className="venn-svg" viewBox="-46 6 332 222" role="img" aria-label={c.web.label}>
              <g className="venn-c venn-web">
                <circle cx="88" cy="88" r="64" />
                <text x="62" y="74" textAnchor="middle">Web</text>
              </g>
              <g className="venn-c venn-mob">
                <circle cx="152" cy="88" r="64" />
                <text x="178" y="74" textAnchor="middle">{c.web.mobile}</text>
              </g>
              <g className="venn-c venn-arc">
                <circle cx="120" cy="144" r="64" />
                <text x="120" y="176" textAnchor="middle">{c.web.arch}</text>
              </g>
              <circle className="venn-pulse" cx="120" cy="108" r="9" />
              <circle className="venn-core" cx="120" cy="108" r="6" />
              <path className="venn-arrow" d="M222 196 C 196 186, 150 160, 128 118 M128 118 l1 11 M128 118 l9 6" />
              <text className="venn-core-t" x="230" y="214" textAnchor="middle">{c.web.core}</text>
            </svg>
          </Cell>
          <Cell n="06" cell={c.lead}>
            <RoleSwitch roles={c.lead.roles} label={c.lead.label} />
          </Cell>
        </div>

        <TechStack openLabel={s.techOpen} closeLabel={s.techClose} cols={s.techCols} />

        <h3 className="big certs-t">{s.certsTitle}</h3>
        <ul className="certs">
          {certs.map((cert) => (
            <li key={cert.name} className="cert glow">
              <Image src={cert.img} alt={`${cert.provider} — ${cert.name}`} width={340} height={360} />
              <div className="cert-body">
                <p className="caps muted cert-p">{cert.provider}</p>
                <p className="cert-n">{cert.name}</p>
                <p className="caps cert-y">{cert.year}</p>
              </div>
            </li>
          ))}
          <li className="cert glow cert-next">
            <span className="cert-ghost" aria-hidden="true">AWS</span>
            <div className="cert-body">
              <p className="caps muted cert-p">{s.certNext.provider}</p>
              <p className="cert-n">{s.certNext.name}</p>
            </div>
            <p className="hand cert-note">{s.certNext.note}</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
