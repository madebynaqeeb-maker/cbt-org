import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  ClipboardList,
  FlaskConical,
  HelpCircle,
  Info,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import ProgramIcon from '../components/ProgramIcon';
import CTABand from '../components/CTABand';
import Reveal from '../components/Reveal';
import { useFetch } from '../lib/useFetch';
import { COLLEGE, PROGRAM_IMAGES } from '../lib/site';
import type { Program } from '../lib/types';

export default function Programs() {
  const { data: programs, loading, error, refetch } = useFetch<Program[]>('/api/programs');

  return (
    <>
      <PageHero
        kicker="DAE Programs"
        title="Diploma of Associate Engineering — 3-Year Technologies"
        description="The college officially offers three DAE technologies: Electrical, Petroleum and Civil. Each program is built around practical lab work, the digital education system and professional skill development."
      />

      <section className="section-pad bg-white">
        <div className="container-x">
          {error ? (
            <div className="mx-auto max-w-md rounded-3xl border border-rose-200 bg-rose-50 p-8 text-center">
              <p className="text-sm font-semibold text-rose-700">{error}</p>
              <button
                type="button"
                onClick={refetch}
                className="mt-4 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-bold text-white"
              >
                Retry
              </button>
            </div>
          ) : null}

          <div className="space-y-8">
            {(programs ?? []).map((p, i) => (
              <Reveal key={p.id} delay={0.05}>
                <article
                  className={`grid overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-2xl hover:shadow-navy-900/10 lg:grid-cols-2`}
                >
                  <div className={`relative min-h-64 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={PROGRAM_IMAGES[p.slug]}
                      alt={`${p.name} practical training at the college`}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-navy-950/85 px-3.5 py-1.5 text-xs font-bold text-white backdrop-blur">
                      <ProgramIcon slug={p.slug} className="h-4 w-4 text-gold-400" />
                      DAE · {p.duration}
                    </span>
                  </div>
                  <div className="flex flex-col gap-5 p-7 sm:p-10">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">
                        {p.tagline}
                      </p>
                      <h2 className="mt-1.5 font-display text-2xl font-extrabold text-navy-900 sm:text-3xl">
                        DAE — {p.name}
                      </h2>
                    </div>
                    <p className="text-sm leading-relaxed text-navy-600 sm:text-base">{p.overview}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.skills.slice(0, 5).map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-navy-100 bg-navy-50/70 px-3 py-1 text-xs font-semibold text-navy-700"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
                      <Link
                        to={`/programs/${p.slug}`}
                        className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-800"
                      >
                        Program Details
                        <ArrowRight className="h-4 w-4 text-gold-400" />
                      </Link>
                      <Link
                        to="/admissions"
                        className="inline-flex items-center gap-2 rounded-full border border-navy-200 px-6 py-3 text-sm font-bold text-navy-800 transition-colors hover:border-navy-400 hover:bg-navy-50"
                      >
                        <ClipboardList className="h-4 w-4 text-gold-500" />
                        Admission Inquiry
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
            {loading
              ? [0, 1, 2].map((i) => (
                  <div key={i} className="h-72 animate-pulse rounded-3xl bg-navy-100/50" />
                ))
              : null}
          </div>

          {/* Shared program facts */}
          <Reveal>
            <div className="mt-14 grid gap-5 rounded-3xl border border-navy-100 bg-navy-50/50 p-7 sm:grid-cols-3 sm:p-9">
              {[
                {
                  icon: BadgeCheck,
                  title: 'Duration & Structure',
                  text: 'Every DAE technology at the college is a full three-year diploma program combining classroom study with practical training.',
                },
                {
                  icon: FlaskConical,
                  title: 'Practical Focus',
                  text: 'Laboratory work, workshop practice and AutoCAD training are part of the college\u2019s Practical Lab Work & Digital Education System.',
                },
                {
                  icon: BriefcaseBusiness,
                  title: 'Career Ready',
                  text: 'Programs prepare students for technician and supervisor-level roles, supported by career counseling and character building.',
                },
              ].map((b) => (
                <div key={b.title} className="flex flex-col gap-2">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-navy-100">
                    <b.icon className="h-5 w-5 text-navy-700" />
                  </span>
                  <h3 className="font-display text-base font-bold text-navy-900">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-navy-600">{b.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* AI Technology — mentioned in promotional material, not confirmed */}
          <Reveal delay={0.1}>
            <div className="mt-8 rounded-3xl border-2 border-dashed border-navy-200 bg-white p-7 sm:p-9">
              <div className="flex flex-col items-start gap-4 sm:flex-row">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-navy-50 ring-1 ring-navy-100">
                  <HelpCircle className="h-6 w-6 text-navy-500" />
                </span>
                <div>
                  <p className="font-display text-lg font-bold text-navy-900">
                    Note on AI Technology
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-600">
                    AI Technology has appeared in recent college promotional material. It is{' '}
                    <span className="font-semibold text-navy-900">
                      not currently listed among the college's confirmed official DAE technologies
                    </span>
                    . Any announcement about a new technology will be made officially once verified.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-navy-100 bg-white p-5 text-sm text-navy-500">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-navy-400" />
              <p>
                Detailed syllabus outlines, fee structures and session dates are shared directly by
                the Admissions Office. Call{' '}
                <a href={`tel:${COLLEGE.phones[0].tel}`} className="font-semibold text-navy-800">
                  {COLLEGE.phones[0].label}
                </a>{' '}
                for the latest verified information.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
