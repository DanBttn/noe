import { useCallback, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { X } from 'lucide-react';
import type { Card } from '../data/cards';
import { setScrollLocked } from '../motion';

interface CardModalProps {
  card: Card;
  onClose: () => void;
}

const CardModal = ({ card, onClose }: CardModalProps) => {
  const container = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const closing = useRef(false);
  const closeTween = useRef<gsap.core.Tween | null>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(container);
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap
          .timeline({ defaults: { ease: 'expo.out' } })
          .from(q('[data-card-backdrop]'), { autoAlpha: 0, duration: 0.5 })
          .from(q('[data-card-panel]'), { autoAlpha: 0, y: 60, scale: 0.96, duration: 0.9 }, '-=0.3')
          .from(q('[data-card-section]'), { autoAlpha: 0, y: 24, duration: 0.7, stagger: 0.07 }, '-=0.6');
      });
      return () => mm.revert();
    },
    { scope: container }
  );

  const close = useCallback(() => {
    if (closing.current) return;
    closing.current = true;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    closeTween.current = gsap.to(container.current, {
      autoAlpha: 0,
      duration: reduced ? 0 : 0.35,
      ease: 'power2.in',
      onComplete: onClose,
    });
  }, [onClose]);

  useEffect(() => {
    setScrollLocked(true);
    closeButton.current?.focus();
    return () => {
      closeTween.current?.kill();
      setScrollLocked(false);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [close]);

  return (
    <div
      ref={container}
      className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={card.title}
    >
      <div data-card-backdrop className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={close}></div>

      <div
        data-card-panel
        data-lenis-prevent
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto overscroll-contain rounded-lg bg-[#F8F6F0] text-[#4B4C3A] shadow-2xl"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 bg-[#F8F6F0] px-5 sm:px-10 pt-6 sm:pt-8 pb-4 border-b border-[#4B4C3A]/10">
          <div>
            <h3 className="text-2xl sm:text-4xl font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
              {card.title}
            </h3>
            <p className="mt-1 text-sm sm:text-base italic text-[#7B2D26]" style={{ fontFamily: 'Playfair Display, serif' }}>
              {card.subtitle}
            </p>
          </div>
          <button
            ref={closeButton}
            type="button"
            onClick={close}
            aria-label="Fermer"
            className="shrink-0 p-2 -mr-2 rounded-full hover:bg-[#4B4C3A]/10 transition-colors duration-300"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        <div className="px-5 sm:px-10 py-6 sm:py-8 space-y-8 sm:space-y-10">
          {card.sections.map((section) => (
            <section key={section.title} data-card-section>
              <h4
                className="text-lg sm:text-xl uppercase tracking-[0.2em] text-center"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {section.title}
              </h4>
              {section.subtitle && <p className="mt-1 text-center text-xs sm:text-sm italic opacity-70">{section.subtitle}</p>}
              <div className="w-10 h-px bg-[#7B2D26] mx-auto mt-3 mb-5"></div>

              <div className="space-y-5">
                {section.groups.map((group, groupIndex) => (
                  <div key={group.label ?? groupIndex}>
                    {group.label && (
                      <p className="mb-2 text-xs sm:text-sm uppercase tracking-widest text-[#7B2D26]">{group.label}</p>
                    )}
                    <ul className="space-y-3">
                      {group.items.map((item) => (
                        <li key={item.name} className="flex items-baseline gap-3 text-sm sm:text-base">
                          <div className="max-w-[72%]">
                            <span className="font-medium">{item.name}</span>
                            {item.detail && <span className="block text-xs sm:text-sm opacity-75">{item.detail}</span>}
                          </div>
                          <span className="flex-1 min-w-4 border-b border-dotted border-[#4B4C3A]/30"></span>
                          {item.meta && <span className="text-xs sm:text-sm opacity-60 whitespace-nowrap">{item.meta}</span>}
                          <span className="font-medium whitespace-nowrap">{item.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <div data-card-section className="pt-5 border-t border-[#4B4C3A]/10 text-center space-y-1">
            {card.notes.map((note) => (
              <p key={note} className="text-xs sm:text-sm italic opacity-70">
                {note}
              </p>
            ))}
            {card.link && (
              <a
                href={card.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block pt-3 text-xs sm:text-sm text-[#7B2D26] underline underline-offset-4 hover:opacity-70 transition-opacity duration-300"
              >
                {card.link.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
