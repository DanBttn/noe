import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
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

const SIDE_PADDING = 'px-4 sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]';

/*
 * Rangée de photos indépendante du défilement de la page : on la fait glisser au doigt, au trackpad,
 * à la souris (cliquer-glisser) ou avec les flèches. Le scroll vertical traverse la galerie normalement.
 */
const Gallery = () => {
  const { t } = useLanguage();
  const rail = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; scrollLeft: number } | null>(null);
  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateState = () => {
    const el = rail.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= max - 2);
  };

  useEffect(() => {
    updateState();
    window.addEventListener('resize', updateState);
    return () => window.removeEventListener('resize', updateState);
  }, []);

  const scrollByPage = (direction: 1 | -1) => {
    const el = rail.current;
    if (el) el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  // Cliquer-glisser à la souris (le tactile et le trackpad défilent nativement).
  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || !rail.current) return;
    drag.current = { x: event.clientX, scrollLeft: rail.current.scrollLeft };
    rail.current.setPointerCapture(event.pointerId);
  };
  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const state = drag.current;
    if (!state || !rail.current) return;
    rail.current.scrollLeft = state.scrollLeft - (event.clientX - state.x);
  };
  const endDrag = () => {
    drag.current = null;
  };

  return (
    <section id="galerie" className="py-24 sm:py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading index="03" eyebrow={t.gallery.eyebrow} title={t.gallery.title} intro={t.gallery.intro} />
      </div>

      <div data-anim="fade-up" className="mt-16">
        <div
          ref={rail}
          onScroll={updateState}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onDragStart={(event) => event.preventDefault()}
          className={`flex gap-4 sm:gap-6 overflow-x-auto cursor-grab active:cursor-grabbing select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${SIDE_PADDING}`}
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
                draggable={false}
                className="h-full w-full object-cover"
              />
            </figure>
          ))}
        </div>

        <div className={`mt-8 flex items-center gap-6 ${SIDE_PADDING}`}>
          <div className="h-px flex-1 bg-white/15 overflow-hidden" aria-hidden="true">
            <div
              className="h-full w-full origin-left bg-white/70 transition-transform duration-150"
              style={{ transform: `scaleX(${Math.max(progress, 0.04)})` }}
            ></div>
          </div>
          <p className="hidden sm:block text-xs uppercase tracking-[0.2em] opacity-70">{t.gallery.hint}</p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollByPage(-1)}
              disabled={atStart}
              aria-label={t.gallery.previous}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 transition-opacity duration-300 hover:bg-white/10 disabled:opacity-30"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByPage(1)}
              disabled={atEnd}
              aria-label={t.gallery.next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 transition-opacity duration-300 hover:bg-white/10 disabled:opacity-30"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
