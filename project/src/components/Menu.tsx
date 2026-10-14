import { ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import type { CardId } from '../data/cards';

const CARD_TEASERS: { id: CardId; image: string; alt: string; eyebrow: string; title: string; text: string }[] = [
  {
    id: 'menu',
    image: '/images/noe-resto-14.jpg',
    alt: 'Assiette du restaurant Noé accompagnée de vin rouge',
    eyebrow: 'Petites assiettes · Entrées · Plats · Desserts',
    title: 'Le Menu',
    text: 'Une cuisine française de saison, gourmande et généreuse.',
  },
  {
    id: 'wine',
    image: '/images/noe-resto-27.jpg',
    alt: 'Cave à vins et sélection de bouteilles',
    eyebrow: 'Bulles · Blancs · Rouges · Rosé · Doux',
    title: 'La Carte des vins',
    text: 'Notre sélection au verre, choisie par notre sommelier.',
  },
];

const WINE_STYLES = ['Vins naturels', 'Biodynamiques', 'Conventionnels'];

const Menu = ({ onOpenCard }: { onOpenCard: (card: CardId) => void }) => {
  return (
    <section id="carte" className="py-24 sm:py-28 lg:py-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="La Carte"
          title="Cuisine de saison, cave d'exception"
          intro="Une cuisine raffinée qui célèbre les produits de saison et les saveurs authentiques."
        />

        <div data-anim-group="clip" className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CARD_TEASERS.map((card) => (
            <button
              key={card.id}
              type="button"
              onClick={() => onOpenCard(card.id)}
              className="group relative aspect-[4/5] sm:aspect-[4/3] md:aspect-[4/5] lg:aspect-[5/6] overflow-hidden rounded-lg text-left"
            >
              <img
                src={card.image}
                alt={card.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em]">{card.eyebrow}</p>
                <h3 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl">{card.title}</h3>
                <p className="mt-3 font-light max-w-sm">{card.text}</p>
                <span className="mt-6 inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em]">
                  Découvrir
                  <span className="flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300">
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </span>
              </div>
            </button>
          ))}
        </div>

        <div data-anim="fade-up" className="mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t pt-12">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em]">Notre cave</p>
            <p className="mt-3 font-serif text-2xl sm:text-3xl leading-snug">
              Plus de 1 500 références soigneusement sélectionnées par notre sommelier Jeremy Le Bon.
            </p>
          </div>
          <ul className="lg:col-span-7 flex flex-wrap gap-3 lg:justify-end">
            {WINE_STYLES.map((style) => (
              <li
                key={style}
                className="flex items-center gap-2 border rounded-full px-5 py-2.5 text-sm tracking-wide"
              >
                <span className="w-1.5 h-1.5 rounded-full"></span>
                {style}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Menu;
