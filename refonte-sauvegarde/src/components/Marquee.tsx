const WORDS = ['Bar à vins', 'Cuisine de saison', 'Cave de 1 500 références', 'Paris 17ᵉ'];

const Marquee = () => {
  return (
    <div className="overflow-hidden bg-wine py-6 sm:py-8" aria-hidden="true">
      <div data-marquee className="flex w-max whitespace-nowrap will-change-transform">
        {[0, 1, 2, 3].map((copy) => (
          <div key={copy} className="flex shrink-0">
            {WORDS.map((word) => (
              <span key={word} className="flex items-center font-serif italic text-3xl sm:text-5xl lg:text-6xl text-cream/90">
                <span className="px-6 sm:px-10">{word}</span>
                <span className="w-2 h-2 rounded-full bg-cream/50"></span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
