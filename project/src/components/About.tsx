import SectionHeading from './SectionHeading';
import { useLanguage } from '../i18n/context';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-24 sm:py-28 lg:py-36 bg-moss overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <SectionHeading index="01" eyebrow={t.about.eyebrow} title={t.about.title} align="left" />

            <div data-anim-group className="mt-10 space-y-5 font-serif text-lg sm:text-xl leading-relaxed text-cream/85">
              <p>{t.about.intro}</p>
              {t.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="italic text-cream">{t.about.closing}</p>
            </div>

            <dl data-anim-group className="mt-12 grid grid-cols-3 gap-4 border-t border-cream/15 pt-8">
              {t.about.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-serif text-xl sm:text-3xl lg:text-4xl text-cream">{stat.value}</dt>
                  <dd className="mt-1 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-cream/60">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 relative lg:pl-8">
            <div
              data-parallax="40"
              className="absolute -bottom-6 left-0 sm:-left-6 lg:left-2 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-wine rounded-lg"
            ></div>
            <div data-anim="image" className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <img src="/images/cave.jpg" alt={t.about.imageAlt} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
