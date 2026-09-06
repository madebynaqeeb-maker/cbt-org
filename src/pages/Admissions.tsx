import {
  BedDouble,
  CheckCircle2,
  ClipboardList,
  FileText,
  GraduationCap,
  HandCoins,
  Info,
  MapPin,
  Percent,
  Phone,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import InquiryForm from '../components/InquiryForm';
import Reveal from '../components/Reveal';
import { COLLEGE } from '../lib/site';

const STEPS = [
  {
    icon: ClipboardList,
    title: '1. Admission Inquiry',
    text: 'Call the college or submit the inquiry form on this page. The Admissions Office will respond and answer your questions.',
  },
  {
    icon: MapPin,
    title: '2. Campus Visit & Guidance',
    text: `Visit the campus at ${COLLEGE.addressShort}. Meet the admissions team, see the labs and choose the right DAE technology.`,
  },
  {
    icon: FileText,
    title: '3. Documents & Enrollment',
    text: 'Submit the required documents and complete enrollment with the Admissions Office. Document checklists are shared at the campus.',
  },
];

export default function Admissions() {
  return (
    <>
      <PageHero
        kicker="Admissions"
        title="Admissions & Eligibility"
        description="Join the three-year DAE programs at College of Business & Technology, Abbottabad. Submit an inquiry, visit the campus and complete your enrollment with the Admissions Office."
      />

      <section className="section-pad bg-white">
        <div className="container-x grid gap-6 lg:grid-cols-3">
          <Reveal>
            <div className="flex h-full flex-col gap-4 rounded-3xl border border-navy-100 bg-white p-8 shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900">
                <Percent className="h-6 w-6 text-gold-400" />
              </span>
              <h2 className="font-display text-xl font-bold text-navy-900">Eligibility</h2>
              <p className="text-sm leading-relaxed text-navy-600">
                As displayed in the college's current promotional material, eligibility for DAE
                admission is:
              </p>
              <p className="rounded-2xl bg-navy-50 px-5 py-4 font-display text-base font-extrabold text-navy-900">
                Matric (Science) with 33% marks
              </p>
              <p className="text-xs leading-relaxed text-navy-400">
                Please confirm current criteria with the Admissions Office, as official college
                announcements always take precedence.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex h-full flex-col gap-4 rounded-3xl border border-navy-100 bg-white p-8 shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900">
                <GraduationCap className="h-6 w-6 text-gold-400" />
              </span>
              <h2 className="font-display text-xl font-bold text-navy-900">Programs Offered</h2>
              <ul className="space-y-3 text-sm font-medium text-navy-700">
                {[
                  'DAE — Electrical Technology',
                  'DAE — Petroleum Technology',
                  'DAE — Civil Technology',
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                    {p}
                  </li>
                ))}
              </ul>
              <p className="text-xs leading-relaxed text-navy-400">
                Each technology is a full three-year Diploma of Associate Engineering program.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="flex h-full flex-col gap-4 rounded-3xl border border-gold-400/40 bg-gradient-to-br from-gold-500/10 to-white p-8">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-500/20">
                <HandCoins className="h-6 w-6 text-gold-600" />
              </span>
              <h2 className="font-display text-xl font-bold text-navy-900">
                Scholarships & Hostel
              </h2>
              <p className="flex items-start gap-2.5 text-sm leading-relaxed text-navy-600">
                <HandCoins className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                Promotional material mentions scholarship support of up to 50 lakh — an opportunity
                whose eligibility and terms are confirmed by the college.
              </p>
              <p className="flex items-start gap-2.5 text-sm leading-relaxed text-navy-600">
                <BedDouble className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                Hostel facility is available for students from outside Abbottabad. Ask the
                Admissions Office for details.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-navy-50/50">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              kicker="How to Apply"
              title="Three Simple Steps"
              description="The exact session dates, fee details and document requirements are shared by the Admissions Office — the process itself is straightforward."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="relative h-full rounded-3xl border border-navy-100 bg-white p-8 shadow-sm">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900">
                    <s.icon className="h-6 w-6 text-gold-400" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{s.text}</p>
                  {i < 2 ? (
                    <span
                      className="absolute right-6 top-8 hidden font-display text-5xl font-extrabold text-navy-50 md:block"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-950">
        <div className="grid-navy absolute inset-0" aria-hidden="true" />
        <div className="container-x relative grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:py-24">
          <Reveal>
            <SectionHeading
              dark
              align="left"
              kicker="Admission Inquiry"
              title="Talk to the Admissions Office"
              description="Call now for immediate guidance, or submit the form and the college will contact you. Phones are answered during college hours."
            />
            <div className="mt-8 space-y-3">
              {COLLEGE.phones.map((p) => (
                <a
                  key={p.tel}
                  href={`tel:${p.tel}`}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white transition-colors hover:border-gold-400/40"
                >
                  <span className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-gold-400" />
                    <span className="font-display text-base font-bold tracking-wide">{p.label}</span>
                  </span>
                  <span className="rounded-full bg-gold-500 px-4 py-1.5 text-xs font-bold text-navy-950">
                    Call Now
                  </span>
                </a>
              ))}
            </div>
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-navy-100">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              {COLLEGE.address}
            </div>
            <div className="mt-4 flex items-start gap-3 text-xs leading-relaxed text-navy-300">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              Scholarship, hostel, fee and session-date details will be shared by the Admissions
              Office — no figures are published online until officially confirmed.
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <InquiryForm source="admissions" heading="Request Admission Information" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
