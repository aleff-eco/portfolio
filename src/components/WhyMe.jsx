import Image from "next/image";
import { clients } from "@/content/site";
import { Agreement } from "./Agreement";
import { Scribble } from "./icons";
import { Marquee } from "./Marquee";

const stopCls = ["st fill-ink", "st", "st", "st", "st fill-blue"];

export function WhyMe({ t }) {
  const w = t.why;
  return (
    <section id="porque" className="sec">
      <div className="wrap">
        <div className="sec-head tight">
          <span className="dot fill-blue">02</span>
          <p className="caps muted">{w.label}</p>
        </div>
        <h2 className="big title-hero">
          {w.titleA}
          <br />
          <span className="under under-sm blue-ink">
            {w.titleB}
            <Scribble />
          </span>
        </h2>

        <div className="route-wrap">
          <span className="rail" aria-hidden="true">
            <span className="bus" />
          </span>
          <ol className="route" aria-label={w.routeLabel}>
            {w.stops.map((stop, i) => (
              <li key={stop} className="stop">
                <span className={stopCls[i]} aria-hidden="true">
                  0{i + 1}
                </span>
                <p className="stop-t">{stop}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="clients">
          <Marquee clients={clients} roles={w.clientRoles} slower={w.slower} faster={w.faster} pause={w.pause} play={w.play}>
            <div>
              <h3 className="big h-sec">{w.clientsTitle}</h3>
              <p className="clients-sub">{w.clientsSub}</p>
            </div>
          </Marquee>
          {w.testimonials.length > 0 && (
            <div className="quotes">
              {w.testimonials.map((q) => (
                <figure key={q.who} className="quote glow">
                  <span className="quote-mark" aria-hidden="true">“</span>
                  <blockquote>{q.text}</blockquote>
                  <figcaption className="quote-who">
                    <Image src={q.logo} alt="" width={44} height={44} unoptimized={q.logo.endsWith(".svg")} />
                    <span className="quote-id">
                      <span className="quote-role">{q.role}</span>
                      <span className="caps muted">{q.who}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>

        <Agreement a={w.agreement} />
      </div>
    </section>
  );
}
