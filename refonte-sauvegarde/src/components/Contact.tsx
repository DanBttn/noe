import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { MAPS_EMBED_URL, MAPS_DIRECTIONS_URL } from '../links';
import { ADDRESS, EMAIL, HOURS, PHONE } from '../data/info';

const PRACTICAL_INFO = ['Réservation conseillée', 'Cartes bancaires acceptées', 'Accès PMR'];

const Contact = () => {
  return (
    <section id="contact" className="py-24 sm:py-28 lg:py-36 bg-olive">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title="Nous trouver"
          intro="Venez nous retrouver au cœur du 17ᵉ arrondissement."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div data-anim-group className="lg:col-span-5 space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 mt-1 text-cream/60 shrink-0" />
              <div>
                <h3 className="text-xs uppercase tracking-[0.25em] text-cream/60">Adresse</h3>
                <p className="mt-2 text-cream leading-relaxed">
                  {ADDRESS.street}
                  <br />
                  {ADDRESS.city}
                </p>
                <p className="mt-1 text-sm font-light text-cream/70">Métro : {ADDRESS.metro}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 mt-1 text-cream/60 shrink-0" />
              <div>
                <h3 className="text-xs uppercase tracking-[0.25em] text-cream/60">Téléphone</h3>
                <a href={PHONE.href} className="mt-2 inline-block text-cream hover:text-cream/70 transition-colors duration-300">
                  {PHONE.label}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 mt-1 text-cream/60 shrink-0" />
              <div className="min-w-0">
                <h3 className="text-xs uppercase tracking-[0.25em] text-cream/60">Email</h3>
                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-2 inline-block text-cream hover:text-cream/70 transition-colors duration-300 break-all"
                >
                  {EMAIL}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 mt-1 text-cream/60 shrink-0" />
              <div>
                <h3 className="text-xs uppercase tracking-[0.25em] text-cream/60">Horaires</h3>
                <dl className="mt-2 space-y-1">
                  {HOURS.map((slot) => (
                    <div key={slot.days} className="text-sm">
                      <dt className="inline text-cream">{slot.days} : </dt>
                      <dd className="inline font-light text-cream/75">{slot.times}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          <div data-anim="fade-up" className="lg:col-span-7">
            <div className="relative h-80 sm:h-96 lg:h-full lg:min-h-[420px] rounded-lg overflow-hidden bg-moss">
              <iframe
                src={MAPS_EMBED_URL}
                title="Plan d'accès au restaurant Noé, 34 rue Legendre, 75017 Paris"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div
          data-anim="fade-up"
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-cream/15 pt-8"
        >
          <ul className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2 text-sm text-cream/75">
            {PRACTICAL_INFO.map((info) => (
              <li key={info} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-wine"></span>
                {info}
              </li>
            ))}
          </ul>
          <a
            href={MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-wine text-cream px-6 py-3 rounded-full text-sm tracking-wide hover:bg-wine-dark transition-colors duration-300"
          >
            <Navigation className="w-4 h-4" />
            Afficher l'itinéraire
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
