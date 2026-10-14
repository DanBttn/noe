import { createContext, useContext } from 'react';
import { TRANSLATIONS, type Dictionary, type Lang } from './translations';

export interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
}

export const LanguageContext = createContext<LanguageContextValue>({
  lang: 'fr',
  setLang: () => {},
  t: TRANSLATIONS.fr,
});

export const useLanguage = () => useContext(LanguageContext);
