import { Clock, Mail, Phone, Users } from 'lucide-react';
import SectionHeading from './SectionHeading';
import OpenTableWidget from './OpenTableWidget';
import { openTableUrl } from '../links';
import { EMAIL, PHONE } from '../data/info';
import { useLanguage } from '../i18n/context';

const Reservation = () => {
  const { lang, t } = useLanguage();
  const r = t.reservation;

  return (
    <section id="reservation" className="py-24 sm:py-28 lg:py-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <SectionHeading index="04" eyebrow={r.eyebrow} title={r.title} align="left" />

            <div data-anim-group className="mt-10 space-y-8">
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 mt-1 shrink-0" />
                <div className="w-full">
                  <h3 className="text-xs uppercase tracking-[0.25em]">{r.hoursTitle}</h3>
                  <dl className="mt-4 divide-y">
                    {t.hours.map((slot) => (
                      <div key={slot.days} className="flex flex-wrap justify-between gap-x-6 py-3">
                        <dt>{slot.days}</dt>
                        <dd className="font-light">{slot.times}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Users className="w-5 h-5 mt-1 shrink-0" />
                <div>
                  <h3 className="text-xs uppercase tracking-[0.25em]">{r.groupsTitle}</h3>
                  <p className="mt-3 font-light leading-relaxed">{r.groupsText}</p>
                </div>
              </div>
            </div>
          </div>

          <div data-anim="fade-up" className="lg:col-span-6 rounded-lg p-8 sm:p-10 lg:p-12 shadow-2xl shadow-black/20">
            <p className="text-xs uppercase tracking-[0.3em]">{r.online}</p>
            <h3 className="mt-3 font-serif text-xl sm:text-3xl whitespace-nowrap">{r.cardTitle}</h3>
            <p className="mt-4 font-light">{r.cardText}</p>

            <div className="mt-8">
              <OpenTableWidget lang={lang} title={r.openTable} />
            </div>

            {/* Lien de secours si le module ne se charge pas (bloqueur de publicité, réseau…) */}
            <p className="mt-4 text-center text-sm">
              <a
                href={openTableUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 opacity-80 hover:opacity-100 transition-opacity duration-300"
              >
                {r.openTable}
              </a>
            </p>

            <div className="mt-8 flex items-center gap-4 text-xs uppercase tracking-[0.25em]">
              <span className="h-px flex-1"></span>
              {r.or}
              <span className="h-px flex-1"></span>
            </div>

            <div className="mt-8 space-y-3">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 transition-colors duration-300 break-all">
                <Mail className="w-4 h-4 shrink-0" />
                {EMAIL}
              </a>
              <a href={PHONE.href} className="flex items-center gap-3 transition-colors duration-300">
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
