import { useLanguage } from '../i18n/context';
import type { Lang } from '../i18n/translations';

const LANGS: Lang[] = ['fr', 'en'];

const LanguageSwitch = ({ className = '' }: { className?: string }) => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className={`flex items-center gap-1 text-xs sm:text-sm tracking-[0.2em] ${className}`} role="group" aria-label={t.header.switchTo}>
      {LANGS.map((code, index) => (
        <span key={code} className="flex items-center gap-1">
          {index > 0 && <span className="opacity-40">/</span>}
          <button
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            lang={code}
            className={`px-1 py-1 uppercase transition-opacity duration-300 ${
              lang === code ? 'font-semibold opacity-100' : 'opacity-50 hover:opacity-100'
            }`}
          >
            {code}
          </button>
        </span>
      ))}
    </div>
  );
};

export default LanguageSwitch;
