"use client";
import { createContext, useContext, useState, useEffect } from "react";
import en from "../locales/en.json";
import es from "../locales/es.json";

const LanguageContext = createContext({
  locale: "en",
  setLocale: () => {},
  t: en,
});

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const lang = navigator.language?.split("-")[0] || "en";
    setLocale(lang === "es" ? "es" : "en");
  }, []);

  const t = locale === "es" ? es : en;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
