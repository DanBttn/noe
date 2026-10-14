import { Fragment, useEffect, useMemo, useState, type ReactNode } from 'react';
import { LanguageContext } from './context';
import { TRANSLATIONS, type Lang } from './translations';

const STORAGE_KEY = 'noe-lang';

const readStoredLang = (): Lang => {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'fr';
  } catch {
    return 'fr';
  }
};

const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(readStoredLang);

  useEffect(() => {
    const { meta } = TRANSLATIONS[lang];
    document.documentElement.lang = lang;
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Stockage indisponible (navigation privée) : la langue n'est simplement pas mémorisée.
    }
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: TRANSLATIONS[lang] }), [lang]);

  // La clé remonte le site à chaque changement de langue, pour que les animations
  // (titres découpés lettre par lettre) repartent sur les nouveaux textes.
  return (
    <LanguageContext.Provider value={value}>
      <Fragment key={lang}>{children}</Fragment>
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
