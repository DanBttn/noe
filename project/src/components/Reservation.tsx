import { Clock, Mail, Phone, Users } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { OPENTABLE_RESERVATION_URL } from '../links';
import { EMAIL, HOURS, PHONE } from '../data/info';

const Reservation = () => {
  return (
    <section id="reservation" className="py-24 sm:py-28 lg:py-36 bg-moss">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <SectionHeading index="04" eyebrow="Réservation" title="Réserver votre table" align="left" />

            <div data-anim-group className="mt-10 space-y-8">
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 mt-1 text-cream/60 shrink-0" />
                <div className="w-full">
                  <h3 className="text-xs uppercase tracking-[0.25em] text-cream/60">Horaires d'ouverture</h3>
                  <dl className="mt-4 divide-y divide-cream/10">
                    {HOURS.map((slot) => (
                      <div key={slot.days} className="flex flex-wrap justify-between gap-x-6 py-3">
                        <dt className="text-cream">{slot.days}</dt>
                        <dd className="text-cream/75 font-light">{slot.times}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Users className="w-5 h-5 mt-1 text-cream/60 shrink-0" />
                <div>
                  <h3 className="text-xs uppercase tracking-[0.25em] text-cream/60">Groupes &amp; privatisations</h3>
                  <p className="mt-3 font-light text-cream/80 leading-relaxed">
                    Pour les groupes de plus de 8 personnes, merci de nous contacter par email. Nous proposons également
                    des événements privatifs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div data-anim="fade-up" className="lg:col-span-6 bg-cream text-moss rounded-lg p-8 sm:p-10 lg:p-12 shadow-2xl shadow-black/20">
            <p className="text-xs uppercase tracking-[0.3em] text-wine">En ligne</p>
            <h3 className="mt-3 font-serif text-3xl sm:text-4xl">Réservez en quelques clics</h3>
            <p className="mt-4 font-light text-moss/75">Réservation recommandée. Nous acceptons les cartes bancaires.</p>

            <a
              href={OPENTABLE_RESERVATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center bg-sage text-cream py-4 px-6 rounded-full text-base tracking-wide hover:bg-sage-dark transition-colors duration-300"
            >
              Réserver sur OpenTable
            </a>

            <div className="mt-8 flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-moss/50">
              <span className="h-px flex-1 bg-moss/15"></span>
              ou
              <span className="h-px flex-1 bg-moss/15"></span>
            </div>

            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-moss hover:text-wine transition-colors duration-300 break-all"
              >
                <Mail className="w-4 h-4 shrink-0" />
                {EMAIL}
              </a>
              <a href={PHONE.href} className="flex items-center gap-3 text-moss hover:text-wine transition-colors duration-300">
                <Phone className="w-4 h-4 shrink-0" />
                {PHONE.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
