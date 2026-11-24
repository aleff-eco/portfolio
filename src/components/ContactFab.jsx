"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "./icons";

export function ContactFab({ label }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const targets = ["#inicio", "#contacto", ".site-foot"].map((s) => document.querySelector(s)).filter(Boolean);
    const seen = new Set();
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) seen.add(e.target);
        else seen.delete(e.target);
      }
      setShow(seen.size === 0);
    });
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <a href="#contacto" className="btn btn-main fab" data-show={show} aria-hidden={!show} tabIndex={show ? undefined : -1}>
      {label}
      <span className="o" aria-hidden="true">
        <ArrowRight />
      </span>
    </a>
  );
}
