"use client";

import { useEffect, useRef, useState } from "react";
import { LINKS } from "@/content/site";
import { ArrowRight, Close } from "./icons";

export function Contact({ c }) {
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null);
  const timer = useRef(null);
  const message = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  useEffect(() => {
    const prefill = (event) => {
      if (!message.current) return;
      message.current.value = event.detail;
      message.current.focus({ preventScroll: true });
    };
    window.addEventListener("contact:prefill", prefill);
    return () => window.removeEventListener("contact:prefill", prefill);
  }, []);

  const notify = (ok) => {
    clearTimeout(timer.current);
    setToast(ok);
    timer.current = setTimeout(() => setToast(null), 4500);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (sending) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("_honey")) {
      form.reset();
      notify(true);
      return;
    }
    setSending(true);
    try {
      data.set("_captcha", "false");
      data.set("_template", "box");
      const res = await fetch(`https://formsubmit.co/${LINKS.email}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error();
      form.reset();
      notify(true);
    } catch {
      notify(false);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contacto" className="contact">
      <div className="contact-ring" aria-hidden="true" />
      <div className="contact-ball fill-cyan hide-sm" aria-hidden="true" />
      <div className="wrap sec" style={{ position: "relative" }}>
        <div className="two">
          <div className="contact-copy">
            <h2 className="big contact-t">{c.title}</h2>
            <p className="contact-sub">{c.sub}</p>
            <p className="caps" style={{ marginTop: "0.6em" }}>
              {c.contactMe}
            </p>
            <a className="contact-mail" href={`mailto:${LINKS.email}`}>
              {LINKS.email}
            </a>
            <div className="caps contact-links">
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            </div>
          </div>
          <form className="form" onSubmit={submit}>
            <div className="field">
              <label htmlFor="c-name" className="caps">
                {c.name}
              </label>
              <input id="c-name" name="name" type="text" autoComplete="name" required />
            </div>
            <div className="field">
              <label htmlFor="c-mail" className="caps">
                {c.email}
              </label>
              <input id="c-mail" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="field">
              <label htmlFor="c-msg" className="caps">
                {c.message}
              </label>
              <textarea ref={message} id="c-msg" name="message" rows={3} required />
            </div>
            <input type="text" name="_honey" className="sr-only" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <button type="submit" className="btn btn-main" style={{ alignSelf: "flex-start" }} disabled={sending}>
              {sending ? c.sending : c.send}
              <span className="o" aria-hidden="true">
                <ArrowRight />
              </span>
            </button>
          </form>
        </div>
      </div>
      {toast !== null && (
        <div className="toast" role="status" aria-live={toast ? "polite" : "assertive"}>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700 }}>{toast ? c.okTitle : c.errTitle}</p>
            <p className="muted">
              {toast ? c.okText : c.errText}
            </p>
          </div>
          <button type="button" className="icon" onClick={() => setToast(null)} aria-label={c.close}>
            <Close />
          </button>
        </div>
      )}
    </section>
  );
}
