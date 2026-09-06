import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  ClipboardList,
  FlaskConical,
  GraduationCap,
  Info,
  Phone,
  Wrench,
} from 'lucide-react';
import ProgramIcon from '../components/ProgramIcon';
import CTABand from '../components/CTABand';
import Reveal from '../components/Reveal';
import { useFetch } from '../lib/useFetch';
import { COLLEGE, PROGRAM_IMAGES } from '../lib/site';
import type { Program } from '../lib/types';

export default function ProgramDetail() {
  const { slug } = useParams();
  const { data: program, loading, error } = useFetch<Program>(`/api/programs?slug=${slug}`);

  if (!loading && (error || !program)) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center bg-white px-4">
        <div className="max-w-md text-center">
          <GraduationCap className="mx-auto h-10 w-10 text-navy-300" />
          <h1 className="mt-4 font-display text-2xl font-bold text-navy-900">Program not found</h1>
          <p className="mt-2 text-sm text-navy-500">
            The program you are looking for is not available. Please browse the officially offered
            DAE technologies.
          </p>
          <Link
            to="/programs"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-bold text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            All DAE Programs
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Program hero */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="grid-navy absolute inset-0" aria-hidden="true" />
        <div className="container-x relative grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2">
          <div>
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-navy-300 transition-colors hover:text-gold-300"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All DAE Programs
            </Link>
            <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.9rem]">
              DAE — {loading ? '…' : program?.name}
            </h1>
            {program ? (
              <p className="mt-3 font-display text-base font-semibold text-gold-300 sm:text-lg">
                {program.tagline}
              </p>
            ) : (
              <div className="mt-3 h-5 w-48 animate-pulse rounded bg-white/10" />
            )}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold text-white">
                <GraduationCap className="h-3.5 w-3.5 text-gold-400" />
                Three-Year DAE
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold text-white">
                <FlaskConical className="h-3.5 w-3.5 text-gold-400" />
                Practical Lab Work
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold text-white">
                <BadgeCheck className="h-3.5 w-3.5 text-gold-400" />
                Digital Education System
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-bold text-navy-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400"
              >
                <ClipboardList className="h-4 w-4" />
                Admission Inquiry
              </Link>
              <a
                href={`tel:${COLLEGE.phones[0].tel}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10"
              >
                <Phone className="h-4 w-4 text-gold-400" />
                {COLLEGE.phones[0].label}
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
              {program ? (
                <img
                  src={PROGRAM_IMAGES[program.slug]}
                  alt={`${program.name} students during practical training`}
                  className="h-72 w-full object-cover sm:h-80"
                  loading="lazy"
                />
              ) : (
                <div className="h-72 w-full animate-pulse bg-white/5 sm:h-80" />
              )}
            </div>
            {program ? (
              <span className="absolute -bottom-4 left-6 inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-navy-900 px-4 py-2.5 shadow-xl">
                <ProgramIcon slug={program.slug} className="h-5 w-5 text-gold-400" />
                <span className="text-xs font-bold text-white">
                  DAE · {program.duration} · Technical Education
                </span>
              </span>
            ) : null}
          </div>
        </div>
      </section>

      {program ? (
        <>
          {/* Overview */}
          <section className="section-pad bg-white">
            <div className="container-x grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <Reveal>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-600">
                  Program Overview
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                  What You Will Study
                </h2>
                <p className="mt-5 text-base leading-relaxed text-navy-600">{program.overview}</p>
                <div className="mt-6 flex items-start gap-3 rounded-2xl border border-navy-100 bg-navy-50/60 p-5 text-sm text-navy-600">
                  <Info className="mt-0.5 h-5 w-5 shrink-0 text-navy-400" />
                  <p>
                    Detailed syllabus and semester plans are provided by the college Admissions
                    Office. As per the college's current promotional material, eligibility is Matric
                    (Science) with 33% marks.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-navy-100 bg-navy-50/50 p-7">
                  <p className="flex items-center gap-2 font-display text-base font-bold text-navy-900">
                    <Wrench className="h-5 w-5 text-gold-500" />
                    Core Skills Developed
                  </p>
                  <ul className="mt-5 space-y-3">
                    {program.skills.map((s) => (
                      <li key={s} className="flex items-start gap-3 text-sm font-medium text-navy-700">
                        <BadgeCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-500" style={{ width: 18, height: 18 }} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Practical learning */}
          <section className="relative overflow-hidden bg-navy-950 text-white">
            <div className="grid-navy absolute inset-0" aria-hidden="true" />
            <div className="container-x relative grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-gold-300">
                  <FlaskConical className="h-3.5 w-3.5" />
                  Practical Learning
                </span>
                <h2 className="mt-5 font-display text-2xl font-bold sm:text-3xl">
                  Learn in the Lab, Apply in the Field
                </h2>
                <p className="mt-5 text-base leading-relaxed text-navy-200">{program.practical}</p>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
                  <img
                    src="/img/lab.png"
                    alt="Students doing practical laboratory work"
                    className="h-64 w-full object-cover sm:h-72"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>
          </section>

          {/* Careers */}
          <section className="section-pad bg-navy-50/50">
            <div className="container-x">
              <Reveal>
                <div className="max-w-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-600">
                    Career Opportunities
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                    Where {program.name} Graduates Work
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-navy-600">
                    A DAE in {program.name} opens doors across Pakistan's technical and industrial
                    sectors. Career counseling at the college helps students plan their next step.
                  </p>
                </div>
              </Reveal>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {program.careers.map((c, i) => (
                  <Reveal key={c} delay={i * 0.06}>
                    <div className="flex h-full items-start gap-3 rounded-2xl border border-navy-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-navy-900">
                        <BriefcaseBusiness className="h-4 w-4 text-gold-400" />
                      </span>
                      <p className="text-sm font-bold leading-snug text-navy-800">{c}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.2}>
                <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl border border-navy-100 bg-white p-7 shadow-sm sm:flex-row sm:items-center">
                  <div>
                    <p className="font-display text-lg font-bold text-navy-900">
                      Interested in DAE — {program.name}?
                    </p>
                    <p className="mt-1 text-sm text-navy-500">
                      Send an admission inquiry or call the college — the Admissions Office will
                      guide you through eligibility, session dates and enrollment.
                    </p>
                  </div>
                  <Link
                    to="/admissions"
                    className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-800"
                  >
                    Admission Inquiry
                    <ArrowRight className="h-4 w-4 text-gold-400" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>
        </>
      ) : (
        <section className="section-pad">
          <div className="container-x space-y-4">
            <div className="h-8 w-1/3 animate-pulse rounded bg-navy-100" />
            <div className="h-40 animate-pulse rounded-3xl bg-navy-50" />
          </div>
        </section>
      )}

      <CTABand />
    </>
  );
}
