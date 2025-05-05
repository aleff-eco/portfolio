// src/hooks/useTranslations.js
import { useLanguage } from '../context/LanguageContext';

export function useTranslations() {
  const { t } = useLanguage();
  return t;
}
