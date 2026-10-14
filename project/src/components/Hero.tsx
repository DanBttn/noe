import { BookOpen, Wine } from 'lucide-react';
import { OPENTABLE_RESERVATION_URL } from '../links';
import type { CardId } from '../data/cards';
import { ADDRESS } from '../data/info';

const Hero = ({ onOpenCard }: { onOpenCard: (card: CardId) => void }) => {
  return (
    <section id="accueil" className="relative h-[100svh] min-h-[620px] overflow-hidden bg-olive">
      {/* Photo de fond */}
      <div data-hero-bg className="absolute inset-x-0 -top-[10%] h-[120%]">
        <img
          src="/images/salle.jpg"
          alt=""
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-moss-dark/75 via-moss-dark/55 to-moss-dark/95"></div>

      <div data-hero-content className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div data-hero-logo>
          <img
            src="/ok top.png"
            alt="Noé - Restaurant, bar à vins"
            className="h-40 sm:h-52 lg:h-60 w-auto"
          />
        </div>

        <p data-hero-item className="mt-8 font-serif italic text-xl sm:text-2xl lg:text-3xl text-cream/90">
          Bistronomie &amp; bar à vins au cœur du 17<sup>e</sup>
        </p>

        <div data-hero-item className="mt-10">
          <a
            href={OPENTABLE_RESERVATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-sage text-cream px-9 sm:px-10 py-4 rounded-full text-base sm:text-lg tracking-wide shadow-lg shadow-black/20 hover:bg-sage-dark hover:scale-105 transition-all duration-300"
          >
            Réserver une table
          </a>
        </div>

        <div data-hero-item className="mt-5 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => onOpenCard('menu')}
            className="inline-flex items-center gap-2 border border-cream/40 text-cream px-6 py-2.5 rounded-full text-sm tracking-wide backdrop-blur-sm hover:bg-cream hover:text-moss transition-colors duration-300"
          >
            <BookOpen className="w-4 h-4" />
            Menu
          </button>
          <button
            type="button"
            onClick={() => onOpenCard('wine')}
            className="inline-flex items-center gap-2 border border-cream/40 text-cream px-6 py-2.5 rounded-full text-sm tracking-wide backdrop-blur-sm hover:bg-wine hover:border-wine transition-colors duration-300"
          >
            <Wine className="w-4 h-4" />
            Carte des vins
          </button>
        </div>
      </div>

      {/* Bas de l'écran : adresse et indicateur de défilement */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 flex items-end justify-between text-xs uppercase tracking-[0.25em] text-cream/60">
          <span className="hidden sm:block">
            {ADDRESS.street}, Paris 17<sup>e</sup>
          </span>
          <div data-hero-scroll className="mx-auto sm:mx-0 w-px h-12 bg-cream/20 overflow-hidden" aria-hidden="true">
            <span className="block w-full h-full bg-cream/80"></span>
          </div>
          <span className="hidden sm:block">Métro Villiers</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
