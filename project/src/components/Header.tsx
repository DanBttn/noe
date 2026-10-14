import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageSwitch from './LanguageSwitch';
import InstagramIcon from './InstagramIcon';
import { openTableUrl } from '../links';
import { INSTAGRAM_URL } from '../data/info';
import { scrollToSection } from '../motion';
import { useLanguage } from '../i18n/context';

const NAV_IDS = ['accueil', 'about', 'carte', 'galerie', 'reservation', 'contact'] as const;

const Header = () => {
  const { lang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLabels: Record<(typeof NAV_IDS)[number], string> = {
    accueil: t.nav.home,
    about: t.nav.about,
    carte: t.nav.menu,
    galerie: t.nav.gallery,
    reservation: t.nav.booking,
    contact: t.nav.contact,
  };

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

  // Flou derrière l'en-tête dès que la page défile ou que le menu mobile est ouvert.
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
            aria-label={t.header.backHome}
            className={`transition-opacity duration-500 ${solid ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <img src="/noe_logo_transparent.png" alt="Restaurant Noé" className="h-10 sm:h-12 w-auto" />
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_IDS.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => goToSection(id)}
                className="relative text-sm tracking-wide transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {navLabels[id]}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @noeparis17"
              className="p-1 opacity-90 hover:opacity-100 transition-opacity duration-300"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <LanguageSwitch />
            <a
              href={openTableUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center px-5 lg:px-6 py-2.5 rounded-full text-sm tracking-wide transition-colors duration-300"
            >
              {t.header.book}
            </a>
            <button
              type="button"
              className="lg:hidden p-2 -mr-2 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? t.header.closeMenu : t.header.openMenu}
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
            {NAV_IDS.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => goToSection(id)}
                className="py-3 text-left font-serif text-2xl transition-colors duration-300"
              >
                {navLabels[id]}
              </button>
            ))}
            <a
              href={openTableUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 mb-2 inline-flex justify-center px-6 py-3 rounded-full tracking-wide transition-colors duration-300"
            >
              {t.header.bookTable}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
