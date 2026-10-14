import { useEffect, useRef } from 'react';
import { openTableWidgetUrl } from '../links';
import type { Lang } from '../i18n/translations';

// Le script d'OpenTable insère son iframe à l'endroit où il est placé : on l'ajoute dans ce conteneur.
// La hauteur est réservée à l'avance (490 px, taille du format « tall ») pour éviter que la page saute.
const OpenTableWidget = ({ lang, title }: { lang: Lang; title: string }) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = container.current;
    if (!element) return;
    const script = document.createElement('script');
    script.src = openTableWidgetUrl(lang);
    script.async = true;
    element.appendChild(script);
    return () => element.replaceChildren();
  }, [lang]);

  return (
    <div
      ref={container}
      role="region"
      aria-label={title}
      className="flex min-h-[490px] justify-center [&_iframe]:max-w-full"
    ></div>
  );
};

export default OpenTableWidget;
