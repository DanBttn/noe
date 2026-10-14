import { BookOpen, Wine } from 'lucide-react';
import { openTableUrl } from '../links';
import type { CardId } from '../data/cards';
import { ADDRESS } from '../data/info';
import { useLanguage } from '../i18n/context';

const Hero = ({ onOpenCard }: { onOpenCard: (card: CardId) => void }) => {
  const { lang, t } = useLanguage();

  return (
    <section id="accueil" className="relative h-[100svh] min-h-[620px] overflow-hidden">
      {/* Photo de fond */}
      <div data-hero-bg className="absolute inset-x-0 -top-[10%] h-[120%]">
        <img
          src="/images/salle.jpg"
          alt=""
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </div>

      <div data-hero-content className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div data-hero-logo>
          <img
            src="/logo-vert.png"
            alt={t.hero.logoAlt}
            className="h-40 sm:h-52 lg:h-60 w-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
          />
        </div>

        <p data-hero-item className="mt-8 font-serif italic text-xl sm:text-2xl lg:text-3xl">
          {t.hero.tagline}
          <sup>{t.common.arrondissementSup}</sup>
        </p>

        <div data-hero-item className="mt-10">
          <a
            href={openTableUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-9 sm:px-10 py-4 rounded-full text-base sm:text-lg tracking-wide shadow-lg shadow-black/20 hover:scale-105 transition-all duration-300"
          >
            {t.hero.book}
          </a>
        </div>

        <div data-hero-item className="mt-5 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => onOpenCard('menu')}
            className="inline-flex items-center gap-2 border px-6 py-2.5 rounded-full text-sm tracking-wide backdrop-blur-sm transition-colors duration-300"
          >
            <BookOpen className="w-4 h-4" />
            {t.hero.menu}
          </button>
          <button
            type="button"
            onClick={() => onOpenCard('wine')}
            className="inline-flex items-center gap-2 border px-6 py-2.5 rounded-full text-sm tracking-wide backdrop-blur-sm transition-colors duration-300"
          >
            <Wine className="w-4 h-4" />
            {t.hero.wine}
          </button>
        </div>
      </div>

      {/* Bas de l'écran : adresse et indicateur de défilement */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 flex items-end justify-between text-xs uppercase tracking-[0.25em]">
          <span className="hidden sm:block">
            {ADDRESS.street}, Paris 17<sup>{t.common.arrondissementSup}</sup>
          </span>
          <div data-hero-scroll className="mx-auto sm:mx-0 w-px h-12 overflow-hidden" aria-hidden="true">
            <span className="block w-full h-full"></span>
          </div>
          <span className="hidden sm:block">{t.hero.metro}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
