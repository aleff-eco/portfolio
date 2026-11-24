"use client";

import { useEffect, useRef, useState } from "react";

export function Nav({ items, label, menuLabel }) {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const panel = useRef(null);

  useEffect(() => {
    const sections = items.map((item) => document.getElementById(item.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    if (!open) return;
    panel.current?.querySelector("a")?.focus();
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = (onClick) =>
    items.map((item) => (
      <a key={item.id} href={`#${item.id}`} className={active === item.id ? "on" : undefined} aria-current={active === item.id ? "true" : undefined} onClick={onClick}>
        {item.label}
      </a>
    ));

  return (
    <>
      <nav className="navlinks" aria-label={label}>
        {links()}
      </nav>
      <button type="button" className="chip3d round menu-btn" aria-expanded={open} aria-controls="menu-panel" aria-label={menuLabel} onClick={() => setOpen((v) => !v)}>
        <span className={open ? "burger x" : "burger"} aria-hidden="true">
          <span />
          <span />
        </span>
      </button>
      <nav id="menu-panel" ref={panel} className={open ? "menu-panel open" : "menu-panel"} aria-label={label} hidden={!open}>
        {links(() => setOpen(false))}
      </nav>
    </>
  );
}
