import SectionHeading from './SectionHeading';
import { useLanguage } from '../i18n/context';

// Photos du restaurant (dans public/images/galerie), dans l'ordre d'affichage.
// Les textes alternatifs sont dans src/i18n/translations.ts (gallery.alts), dans le même ordre.
const IMAGES = [
  { file: 'noe-01.jpg', width: 1600, height: 1066 },
  { file: 'noe-02.jpg', width: 1600, height: 1600 },
  { file: 'noe-03.jpg', width: 1600, height: 1600 },
  { file: 'noe-04.jpg', width: 1600, height: 1066 },
  { file: 'noe-05.jpg', width: 1600, height: 1600 },
  { file: 'noe-06.jpg', width: 1600, height: 1066 },
  { file: 'noe-07.jpg', width: 1600, height: 1066 },
  { file: 'noe-08.jpg', width: 1600, height: 1600 },
  { file: 'noe-09.jpg', width: 1600, height: 1600 },
  { file: 'noe-10.jpg', width: 1600, height: 1600 },
  { file: 'noe-11.jpg', width: 1600, height: 1600 },
  { file: 'noe-12.jpg', width: 1600, height: 1066 },
  { file: 'noe-13.jpg', width: 1600, height: 1600 },
  { file: 'noe-14.jpg', width: 1600, height: 1600 },
  { file: 'noe-15.jpg', width: 1600, height: 1066 },
  { file: 'noe-16.jpg', width: 1600, height: 1600 },
  { file: 'noe-17.jpg', width: 1600, height: 1600 },
  { file: 'noe-18.jpg', width: 1600, height: 1066 },
  { file: 'noe-19.jpg', width: 1600, height: 1600 },
  { file: 'noe-20.jpg', width: 1600, height: 1600 },
];

const Gallery = () => {
  const { t } = useLanguage();

  return (
    <section id="galerie" className="py-24 sm:py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading index="03" eyebrow={t.gallery.eyebrow} title={t.gallery.title} intro={t.gallery.intro} />
      </div>

      {/*
        Défilement horizontal : au scroll, la rangée de photos glisse vers la gauche (GSAP, voir motion.ts).
        Sans animation (mouvement réduit), la rangée se fait défiler à la main.
      */}
      <div data-hscroll className="mt-16 overflow-x-auto overscroll-x-contain">
        <div
          data-hscroll-track
          className="flex w-max gap-4 sm:gap-6 px-4 sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
        >
          {IMAGES.map((image, index) => (
            <figure
              key={image.file}
              className="h-[50vh] sm:h-[60vh] max-h-[640px] shrink-0 overflow-hidden rounded-lg"
              style={{ aspectRatio: `${image.width} / ${image.height}` }}
            >
              <img
                src={`/images/galerie/${image.file}`}
                alt={t.gallery.alts[index]}
                width={image.width}
                height={image.height}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </figure>
          ))}
        </div>

        <div className="mt-8 px-4 sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]" aria-hidden="true">
          <div className="h-px w-full bg-white/15 overflow-hidden">
            <div data-hscroll-progress className="h-full w-full origin-left bg-white/70" style={{ transform: 'scaleX(0)' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
