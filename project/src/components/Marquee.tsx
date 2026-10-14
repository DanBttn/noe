import { useLanguage } from '../i18n/context';

const Marquee = () => {
  const { t } = useLanguage();

  return (
    <div className="overflow-hidden py-6 sm:py-8" aria-hidden="true">
      <div data-marquee className="flex w-max whitespace-nowrap will-change-transform">
        {[0, 1, 2, 3].map((copy) => (
          <div key={copy} className="flex shrink-0">
            {t.marquee.map((word) => (
              <span key={word} className="flex items-center font-serif italic text-3xl sm:text-5xl lg:text-6xl">
                <span className="px-6 sm:px-10">{word}</span>
                <span className="w-2 h-2 rounded-full"></span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
