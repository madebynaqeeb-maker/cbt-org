import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Compass,
  GraduationCap,
  Landmark,
  Layers,
  MapPin,
  Target,
  Trophy,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTABand from '../components/CTABand';
import Reveal from '../components/Reveal';
import { COLLEGE } from '../lib/site';

const FACTS = [
  { icon: CalendarCheck, label: 'Established', value: '2010' },
  { icon: Layers, label: 'DAE Technologies', value: 'Electrical · Petroleum · Civil' },
  { icon: GraduationCap, label: 'Programs', value: 'Three-Year DAE' },
  { icon: Trophy, label: 'Recognition', value: '1st Position · Technical Board Peshawar (2022)' },
];

export default function About() {
  return (
    <>
      <PageHero
        kicker="About the College"
        title="College of Business & Technology, Abbottabad"
        description="Building skills, creating professionals and shaping the future since 2010 — a technical institute at College Road, Mandian, Abbottabad, Khyber Pakhtunkhwa."
      />

      <section className="section-pad bg-white">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              kicker="Who We Are"
              title="A Focused Technical Institute in the Heart of Abbottabad"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-600">
              <p>
                College of Business &amp; Technology was established in 2010 at College Road,
                Mandian, Abbottabad, and has since served students from across Khyber Pakhtunkhwa
                who want a practical, career-oriented technical education.
              </p>
              <p>
                The college offers three-year Diploma of Associate Engineering (DAE) programs in
                Electrical Technology, Petroleum Technology and Civil Technology. Teaching is built
                around the college's Practical Lab Work and Digital Education System, supported by
                AutoCAD training, career counseling and a strong emphasis on character building.
              </p>
              <p>
                The college's academic record is reflected in its results at the Technical Board
                Peshawar — including a 1st Position in DAE Petroleum (Session 2022).
              </p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {FACTS.map((f) => (
                <div
                  key={f.label}
                  className="rounded-2xl border border-navy-100 bg-navy-50/50 p-4"
                >
                  <f.icon className="h-5 w-5 text-gold-500" />
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-navy-400">
                    {f.label}
                  </p>
                  <p className="mt-0.5 text-sm font-bold text-navy-900">{f.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="space-y-5">
              <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-navy-100">
                <img
                  src="/img/real/campus.jpeg"
                  alt="College building exterior at College Road Mandian Abbottabad"
                  className="h-80 w-full object-cover sm:h-96"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-navy-50/60">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              kicker="Purpose"
              title="Mission & Educational Focus"
              description="Everything at the college is organised around producing capable, disciplined and employable technical professionals."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                text: 'To build practical skills through a three-year DAE education that combines classroom learning with laboratories, workshops and a digital education system.',
              },
              {
                icon: Compass,
                title: 'Our Focus',
                text: 'Technical mastery plus professional development — AutoCAD training, computer skills, communication and career counseling are part of student life.',
              },
              {
                icon: Landmark,
                title: 'Our Character',
                text: 'Character building and discipline are treated as seriously as technical subjects, so graduates are ready for professional environments.',
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-navy-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900">
                    <c.icon className="h-6 w-6 text-gold-400" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="grid-navy absolute inset-0" aria-hidden="true" />
        <div className="container-x relative grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              dark
              align="left"
              kicker="Campus & Location"
              title="College Road, Mandian — Abbottabad"
              description="The campus is conveniently located near Hassan Pharmacy on College Road, Mandian. A hostel facility is available for students coming from outside Abbottabad; details are provided by the Admissions Office."
            />
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold-400" />
              <p className="text-sm leading-relaxed text-navy-100">{COLLEGE.address}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-bold text-navy-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400"
              >
                Visit / Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <ul className="space-y-4">
              {[
                'Practical laboratories for hands-on technical training',
                'Digital education system supporting every discipline',
                'Computer lab for AutoCAD and IT skill development',
                'Career counseling and character-building activities',
                'Hostel facility available (details from the Admissions Office)',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-navy-100"
                >
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
