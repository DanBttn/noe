import { useState, type ReactNode } from 'react';
import { FileText, ChevronDown } from 'lucide-react';
import { openTableUrl } from '../links';
import { ADDRESS, EMAIL, INSTAGRAM_URL, PHONE } from '../data/info';
import { useLanguage } from '../i18n/context';

// lucide-react 1.x no longer ships brand icons; this reproduces the previous one.
const BrandIcon = ({ className, children }: { className?: string; children: ReactNode }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

const Instagram = ({ className }: { className?: string }) => (
  <BrandIcon className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </BrandIcon>
);

const Footer = () => {
  const { lang, t } = useLanguage();
  const f = t.footer;
  const [cgvOpen, setCgvOpen] = useState(false);

  return (
    <footer>
      {/* Appel à réserver */}
      <div className="border-b">
        <div
          data-anim="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <p className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-2xl">
            {f.ctaLead} <span className="italic">{f.ctaStreet}</span>
          </p>
          <a
            href={openTableUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center px-8 py-4 rounded-full tracking-wide transition-colors duration-300"
          >
            {f.book}
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div data-anim-group className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <img src="/ok top.png" alt={f.logoAlt} className="h-24 w-auto" />
            <p className="mt-6 font-light leading-relaxed max-w-xs">{f.tagline}</p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em]">{f.contact}</h4>
            <div className="mt-4 space-y-2 font-light">
              <p>
                {ADDRESS.street}, {ADDRESS.city}
              </p>
              <a href={PHONE.href} className="block transition-colors duration-300">
                {PHONE.label}
              </a>
              <a href={`mailto:${EMAIL}`} className="block break-all transition-colors duration-300">
                {EMAIL}
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em]">{f.hours}</h4>
            <dl className="mt-4 space-y-2 font-light text-sm">
              {t.hours.map((slot) => (
                <div key={slot.days}>
                  <dt>{slot.days}</dt>
                  <dd>{slot.times}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.25em]">{f.follow}</h4>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="mt-4 inline-flex items-center gap-2 font-light transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
              @noeparis17
            </a>
          </div>
        </div>

        {/* CGV */}
        <div className="mt-14 border-t pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
            <p>
              {f.signature} · {new Date().getFullYear()}
            </p>
            <button
              type="button"
              onClick={() => setCgvOpen(!cgvOpen)}
              aria-expanded={cgvOpen}
              className="flex items-center gap-2 transition-colors duration-300"
            >
              <FileText className="w-4 h-4" />
              <span>{f.cgv}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${cgvOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {cgvOpen && (
            <div className="mt-6 max-w-3xl mx-auto text-xs sm:text-sm leading-relaxed space-y-4">
              {f.cgvNote && <p className="italic opacity-70">{f.cgvNote}</p>}
              {f.cgvParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <ul className="list-none pl-4 space-y-2">
                {f.cgvItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
