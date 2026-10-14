import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { OPENTABLE_RESERVATION_URL } from '../links';
import { scrollToSection } from '../motion';

const NAV_ITEMS = [
  { label: 'Accueil', id: 'accueil' },
  { label: 'À propos', id: 'about' },
  { label: 'La Carte', id: 'carte' },
  { label: 'Galerie', id: 'galerie' },
  { label: 'Réservation', id: 'reservation' },
  { label: 'Contact', id: 'contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSection = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  // Fond clair dès que la page défile ou que le menu mobile est ouvert.
  const solid = isScrolled || isMobileMenuOpen;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
 solid ? 'backdrop-blur-md shadow-[0_1px_0_rgba(75,76,58,0.12)]' : 'bg-transparent'
 }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <button
            type="button"
            onClick={() => goToSection('accueil')}
            aria-label="Retour à l'accueil"
            className={`transition-opacity duration-500 ${solid ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <img src="/noe_logo_transparent.png" alt="Restaurant Noé" className="h-10 sm:h-12 w-auto" />
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goToSection(item.id)}
                className="relative text-sm tracking-wide transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={OPENTABLE_RESERVATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center px-5 lg:px-6 py-2.5 rounded-full text-sm tracking-wide transition-colors duration-300"
            >
              Réserver
            </a>
            <button
              type="button"
              className="lg:hidden p-2 -mr-2 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden border-t">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goToSection(item.id)}
                className="py-3 text-left font-serif text-2xl transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <a
              href={OPENTABLE_RESERVATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 mb-2 inline-flex justify-center px-6 py-3 rounded-full tracking-wide transition-colors duration-300"
            >
              Réserver une table
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
