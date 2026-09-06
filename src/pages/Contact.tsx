import { MapPin, Navigation, Phone } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import InquiryForm from '../components/InquiryForm';
import Reveal from '../components/Reveal';
import { COLLEGE, MAPS_EMBED } from '../lib/site';

export default function Contact() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Contact the College"
        description="Call the college directly, send a message through the form below, or visit the campus at College Road, Mandian, Abbottabad."
      />

      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {COLLEGE.phones.map((p, i) => (
              <Reveal key={p.tel} delay={i * 0.06}>
                <a
                  href={`tel:${p.tel}`}
                  className="group flex h-full flex-col gap-4 rounded-3xl border border-navy-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-navy-300 hover:shadow-xl"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 transition-colors group-hover:bg-navy-800">
                    <Phone className="h-5 w-5 text-gold-400" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-navy-400">
                      Admissions Line {i + 1}
                    </span>
                    <span className="mt-1 block font-display text-xl font-extrabold tracking-wide text-navy-900">
                      {p.label}
                    </span>
                  </span>
                  <span className="mt-auto inline-flex w-fit items-center rounded-full bg-navy-50 px-4 py-1.5 text-xs font-bold text-navy-800 transition-colors group-hover:bg-navy-900 group-hover:text-white">
                    Call Now
                  </span>
                </a>
              </Reveal>
            ))}
            <Reveal delay={0.18}>
              <div className="flex h-full flex-col gap-4 rounded-3xl bg-navy-950 p-7 text-white shadow-xl">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <MapPin className="h-5 w-5 text-gold-400" />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy-300">
                    Campus Address
                  </p>
                  <p className="mt-1.5 text-sm font-medium leading-relaxed text-navy-100">
                    {COLLEGE.address}
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=College+Road+Mandian+Abbottabad+Khyber+Pakhtunkhwa+Pakistan"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-full bg-gold-500 px-4 py-2 text-xs font-bold text-navy-950 transition-colors hover:bg-gold-400"
                >
                  <Navigation className="h-3.5 w-3.5" />
                  Get Directions
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy-50/50">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col gap-6">
              <SectionHeading
                align="left"
                kicker="Location"
                title="Find Us on the Map"
                description="The campus is located on College Road, Mandian — near Hassan Pharmacy, Abbottabad. The map below shows the campus area; ask locally for Hassan Pharmacy as the landmark."
              />
              <div className="overflow-hidden rounded-3xl border border-navy-100 shadow-xl">
                <iframe
                  title="College location map — College Road, Mandian, Abbottabad"
                  src={MAPS_EMBED}
                  className="h-80 w-full sm:h-96"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <InquiryForm source="contact" heading="Send a Message" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
