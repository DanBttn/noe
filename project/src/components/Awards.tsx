import { useLanguage } from '../i18n/context';

/*
 * Distinctions du restaurant (images dans public/images/distinctions).
 * Règles Gault&Millau : le bloc-marque ne se modifie pas (ni couleur ni proportions), la version
 * jaune est à privilégier, et aucun élément ne doit le toucher (d'où la marge autour).
 */
const Awards = () => {
  const { t } = useLanguage();
  const a = t.awards;

  return (
    <section aria-labelledby="distinctions-title" className="py-16 sm:py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          id="distinctions-title"
          data-anim="fade-up"
          className="text-center text-xs sm:text-sm uppercase tracking-[0.3em]"
        >
          {a.eyebrow}
        </p>

        <ul
          data-anim-group
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-20 lg:gap-28"
        >
          <li className="flex flex-col items-center text-center">
            <div className="flex h-40 sm:h-48 items-center p-4">
              <img
                src="/images/distinctions/gault-millau-1-toque.png"
                alt={a.gaultMillau.alt}
                width={278}
                height={124}
                loading="lazy"
                className="h-20 sm:h-24 w-auto"
              />
            </div>
            <p className="mt-4 font-serif text-xl">{a.gaultMillau.title}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] opacity-70">{a.gaultMillau.text}</p>
          </li>

          <li className="flex flex-col items-center text-center">
            <div className="flex h-40 sm:h-48 items-center">
              <img
                src="/images/distinctions/star-wine-list-2026-silver.png"
                alt={a.starWineList.alt}
                width={480}
                height={842}
                loading="lazy"
                className="h-full w-auto rounded-sm"
              />
            </div>
            <p className="mt-4 font-serif text-xl">{a.starWineList.title}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] opacity-70">{a.starWineList.text}</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Awards;
