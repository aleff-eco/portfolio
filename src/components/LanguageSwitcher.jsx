'use client';

import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();
  const next = locale === 'es' ? 'en' : 'es';

  const selectedStyle = {
    backgroundColor: '#263a92',
    color: '#FFFFFF',
  };

  const unselectedStyle = {
    backgroundColor: 'transparent',
    color: '#6B7280',
  };

  return (
    <button
      onClick={() => setLocale(next)}
      aria-label={t.nav.languageToggle}
      className="
        relative flex items-center space-x-2
        rounded-full
        bg-white dark:bg-gray-800
        px-3 py-2 py-1 transition
        hover:bg-gray-100 dark:hover:bg-gray-700
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
      "
    >
      <Globe className="h-4 w-4 text-gray-500 dark:text-gray-400" />
      <span
        style={locale === 'es' ? selectedStyle : unselectedStyle}
        className="px-2 py-0.5 rounded-full text-xs font-semibold transition-colors"
      >
        ES
      </span>
      <span
        style={locale === 'en' ? selectedStyle : unselectedStyle}
        className="px-2 py-0.5 rounded-full text-xs font-semibold transition-colors"
      >
        EN
      </span>
    </button>
  );
}
