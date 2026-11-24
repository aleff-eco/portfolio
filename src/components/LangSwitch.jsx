"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

function currentSection() {
  let id = "";
  document.querySelectorAll("main section[id]").forEach((s) => {
    if (s.getBoundingClientRect().top <= 140) id = s.id;
  });
  return id ? `#${id}` : "";
}

export function LangSwitch({ locale, label }) {
  const router = useRouter();
  const go = (href) => (e) => {
    e.preventDefault();
    router.push(href + currentSection());
  };

  return (
    <div className="seg" role="group" aria-label={label}>
      {locale === "es" ? (
        <span className="seg-i on" aria-current="page">ES</span>
      ) : (
        <Link href="/" hrefLang="es" className="seg-i" onClick={go("/")}>ES</Link>
      )}
      {locale === "en" ? (
        <span className="seg-i on" aria-current="page">EN</span>
      ) : (
        <Link href="/en" hrefLang="en" className="seg-i" onClick={go("/en")}>EN</Link>
      )}
    </div>
  );
}
