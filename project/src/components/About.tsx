import SectionHeading from './SectionHeading';

const STATS = [
  { value: '1 500+', label: 'références en cave' },
  { value: '2', label: "tables d'hôtes" },
  { value: 'Semi-ouverte', label: 'notre cuisine' },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 sm:py-28 lg:py-36 bg-moss overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <SectionHeading index="01" eyebrow="À propos" title="Bienvenue chez Noé" align="left" />

            <div data-anim-group className="mt-10 space-y-5 font-serif text-lg sm:text-xl leading-relaxed text-cream/85">
              <p>Un restaurant bistronomique niché au cœur du 17ᵉ arrondissement.</p>
              <p>
                Nous célébrons la cuisine française de saison, gourmande et généreuse, signée par notre chef Den Mi Kim,
                dans une cuisine semi-ouverte qui met en lumière son savoir-faire.
              </p>
              <p>
                Notre cave exceptionnelle de plus de 1 500 références abrite également un espace unique, où deux grandes
                tables d'hôtes accueillent déjeuners, dîners ou événements privatifs au plus près des flacons.
              </p>
              <p>
                À chaque service, notre sommelier Jeremy Le Bon est présent pour vous accompagner et vous conseiller afin
                de trouver l'accord parfait entre mets et vins.
              </p>
              <p className="italic text-cream">
                Dans une ambiance conviviale et raffinée, nous vous invitons à partager un moment où le goût, le vin et
                l'art de recevoir s'accordent harmonieusement.
              </p>
            </div>

            <dl data-anim-group className="mt-12 grid grid-cols-3 gap-4 border-t border-cream/15 pt-8">
              {STATS.map((stat) => (
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
              <img
                src="/images/cave.jpg"
                alt="Cave à vins du restaurant Noé avec sa collection de bouteilles"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
