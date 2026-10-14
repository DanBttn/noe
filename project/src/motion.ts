import { useEffect, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

// Toutes les animations sont désactivées si l'utilisateur demande moins de mouvement.
const MOTION_OK = '(prefers-reduced-motion: no-preference)';

const HIDDEN_CLIP = 'inset(100% 0% 0% 0%)';
const VISIBLE_CLIP = 'inset(0% 0% 0% 0%)';

let lenis: Lenis | null = null;

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (!element) return;
  if (lenis) {
    lenis.scrollTo(element, { duration: 1.6 });
  } else {
    element.scrollIntoView();
  }
};

// Bloque le défilement de la page (carte ouverte).
export const setScrollLocked = (locked: boolean) => {
  if (lenis) {
    if (locked) lenis.stop();
    else lenis.start();
  } else {
    document.body.style.overflow = locked ? 'hidden' : '';
  }
};

// Défilement fluide Lenis, synchronisé sur le ticker GSAP et ScrollTrigger.
export const useSmoothScroll = () => {
  useEffect(() => {
    if (!window.matchMedia(MOTION_OK).matches) return;

    const instance = new Lenis({ autoRaf: false });
    lenis = instance;
    instance.on('scroll', ScrollTrigger.update);

    const raf = (time: number) => instance.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      instance.destroy();
      lenis = null;
    };
  }, []);
};

/*
 * Animations pilotées par attributs :
 *   data-anim="title"      titre révélé lettre par lettre
 *   data-anim="line"       filet qui se déploie
 *   data-anim="fade-up"    bloc qui monte en fondu
 *   data-anim="image"      image dévoilée par un masque, avec parallaxe interne
 *   data-anim-group        enfants révélés en cascade ("clip" = dévoilés par un masque)
 *   data-parallax="40"     décalage vertical (px) lié au défilement
 *   data-hscroll           rangée épinglée qui défile horizontalement (data-hscroll-track, data-hscroll-progress)
 */
export const useSiteAnimations = (scope: RefObject<HTMLElement | null>) => {
  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;
      const all = (selector: string) => gsap.utils.toArray<HTMLElement>(selector, root);

      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        // Barre de progression
        gsap.to(all('[data-progress]'), {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: { start: 0, end: 'max', scrub: 0.3 },
        });

        // Hero : entrée, puis sortie en parallaxe au défilement
        const hero = root.querySelector<HTMLElement>('#accueil');
        if (hero) {
          gsap
            .timeline({ defaults: { ease: 'expo.out' } })
            .from(all('[data-hero-bg] img'), { scale: 1.25, duration: 2.6, ease: 'power3.out' })
            .from(all('[data-hero-logo]'), { autoAlpha: 0, scale: 0.85, y: 40, duration: 1.6 }, 0.3)
            .from(all('[data-hero-item]'), { autoAlpha: 0, y: 40, duration: 1.2, stagger: 0.12 }, '-=1.1')
            .from(all('[data-hero-scroll]'), { autoAlpha: 0, duration: 1 }, '-=0.6');

          gsap.to(all('[data-hero-content]'), {
            yPercent: -30,
            autoAlpha: 0,
            ease: 'none',
            scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
          });

          gsap.to(all('[data-hero-bg]'), {
            yPercent: 8,
            ease: 'none',
            scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
          });

          gsap.fromTo(
            all('[data-hero-scroll] span'),
            { yPercent: -100 },
            { yPercent: 100, duration: 1.8, ease: 'power2.inOut', repeat: -1 }
          );
        }

        all('[data-anim="title"]').forEach((title) => {
          SplitText.create(title, {
            type: 'lines,chars',
            mask: 'lines',
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(self.chars, {
                yPercent: 110,
                duration: 1.1,
                ease: 'expo.out',
                stagger: 0.035,
                scrollTrigger: { trigger: title, start: 'top 88%', once: true },
                // Rend le texte d'origine une fois l'animation jouée.
                onComplete: () => self.revert(),
              }),
          });
        });

        all('[data-anim="line"]').forEach((line) => {
          gsap.from(line, {
            scaleX: 0,
            transformOrigin: line.classList.contains('mx-auto') ? 'center' : 'left',
            duration: 1.4,
            ease: 'expo.out',
            scrollTrigger: { trigger: line, start: 'top 90%', once: true },
          });
        });

        all('[data-anim="fade-up"]').forEach((block) => {
          gsap.from(block, {
            y: 50,
            autoAlpha: 0,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: block, start: 'top 90%', once: true },
          });
        });

        all('[data-anim="image"]').forEach((frame) => {
          gsap.fromTo(
            frame,
            { clipPath: HIDDEN_CLIP },
            {
              clipPath: VISIBLE_CLIP,
              duration: 1.5,
              ease: 'expo.inOut',
              scrollTrigger: { trigger: frame, start: 'top 85%', once: true },
            }
          );
          gsap.fromTo(
            frame.querySelectorAll('img'),
            { yPercent: -8, scale: 1.2 },
            {
              yPercent: 8,
              ease: 'none',
              scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: true },
            }
          );
        });

        all('[data-anim-group]').forEach((group) => {
          const items = Array.from(group.children);
          const clip = group.dataset.animGroup === 'clip';
          gsap.set(items, clip ? { clipPath: HIDDEN_CLIP, y: 60 } : { autoAlpha: 0, y: 50 });
          ScrollTrigger.batch(items, {
            start: 'top 92%',
            once: true,
            onEnter: (batch) =>
              gsap.to(
                batch,
                clip
                  ? { clipPath: VISIBLE_CLIP, y: 0, duration: 1.3, ease: 'expo.out', stagger: 0.12 }
                  : { autoAlpha: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.12 }
              ),
          });
        });

        all('[data-parallax]').forEach((layer) => {
          const distance = Number(layer.dataset.parallax);
          gsap.fromTo(
            layer,
            { y: distance },
            {
              y: -distance,
              ease: 'none',
              scrollTrigger: { trigger: layer.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
            }
          );
        });

        // Bandeau défilant lié au scroll
        all('[data-marquee]').forEach((track) => {
          gsap.fromTo(
            track,
            { xPercent: 0 },
            {
              xPercent: -25,
              ease: 'none',
              scrollTrigger: { trigger: track.parentElement, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
            }
          );
        });

        // Galerie : la rangée de photos est épinglée et glisse vers la gauche pendant le scroll.
        all('[data-hscroll]').forEach((wrapper) => {
          const track = wrapper.querySelector<HTMLElement>('[data-hscroll-track]');
          const progress = wrapper.querySelector<HTMLElement>('[data-hscroll-progress]');
          if (!track) return;
          const distance = () => Math.max(0, track.scrollWidth - wrapper.clientWidth);

          gsap.set(wrapper, { overflow: 'hidden' });
          gsap.to(track, {
            x: () => -distance(),
            ease: 'none',
            scrollTrigger: {
              trigger: wrapper,
              start: 'center center',
              // Défilement un peu plus court que la largeur de la rangée, pour que la galerie ne paraisse pas interminable.
              end: () => `+=${distance() * 0.75}`,
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => progress && gsap.set(progress, { scaleX: self.progress }),
            },
          });
        });
      });

      return () => mm.revert();
    },
    { scope }
  );
};
