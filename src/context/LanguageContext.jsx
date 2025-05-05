'use client';

import { createContext, useState, useContext } from 'react';
import es from '../locales/es.json';
import en from '../locales/en.json';

const translations = { es, en };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('es');
  return (
    <LanguageContext.Provider value={{
      locale,
      setLocale,
      t: translations[locale]
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
