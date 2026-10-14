import SectionHeading from './SectionHeading';

const IMAGES = [
  { src: '/images/noe-resto-14.jpg', alt: 'Ambiance chaleureuse du restaurant Noé' },
  { src: '/images/noe-resto-43.jpg', alt: 'Espace de dégustation et cave à vins' },
  { src: '/images/noe-resto-33.jpg', alt: 'Salle du restaurant avec décoration moderne' },
  { src: '/images/noe-resto-37.jpg', alt: 'Bar et espace convivial' },
  { src: '/images/noe-resto-38.jpg', alt: 'Cuisine ouverte et équipe en action' },
  { src: '/images/noe-resto-27.jpg', alt: 'Cave à vins et sélection de bouteilles' },
  { src: '/images/noe-resto-32.jpg', alt: 'Détail de la décoration et ambiance du restaurant' },
];

const Gallery = () => {
  return (
    <section id="galerie" className="py-24 sm:py-28 lg:py-36 bg-olive">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          eyebrow="Galerie"
          title="L'univers de Noé"
          intro="Découvrez l'univers de Noé à travers nos créations culinaires et notre atmosphère chaleureuse."
        />

        {/* Toutes les photos au même format portrait (format d'origine), sans recadrage. */}
        <div data-anim-group="clip" className="mt-16 flex flex-wrap justify-center gap-4 sm:gap-6">
          {IMAGES.map((image) => (
            <div
              key={image.src}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div className="group relative aspect-[2/3] overflow-hidden rounded-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-moss-dark/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
