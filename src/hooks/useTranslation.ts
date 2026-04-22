'use client';

import { useState, useEffect } from 'react';
import { t, Language, T } from '@/data/translations';

export function useTranslation() {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    const stored = localStorage.getItem('minijob_lang') as Language | null;
    if (stored === 'en' || stored === 'de') setLang(stored);
  }, []);

  function toggleLang() {
    const next: Language = lang === 'en' ? 'de' : 'en';
    setLang(next);
    localStorage.setItem('minijob_lang', next);
  }

  return { t: t[lang] as T, lang, toggleLang };
}