import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CalendarCheck,
  ClipboardList,
  Code2,
  Compass,
  FileSpreadsheet,
  FlaskConical,
  Globe,
  GraduationCap,
  HandCoins,
  Languages,
  Laptop,
  Layers,
  Megaphone,
  MonitorSmartphone,
  Palette,
  PencilRuler,
  Trophy,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProgramIcon from '../components/ProgramIcon';
import CTABand from '../components/CTABand';
import Reveal from '../components/Reveal';
import { useFetch } from '../lib/useFetch';
import { COLLEGE, LEADER_PHOTOS, PROGRAM_IMAGES, SKILLS_TRAINING } from '../lib/site';
import type { Achievement, Leader, Program } from '../lib/types';

const SKILL_ICONS: Record<string, typeof Globe> = {
  IELTS: Globe,
  'English Grammar': BookOpen,
  'English Language': Languages,
  'MS Office': FileSpreadsheet,
  'Web Development': Code2,
  AutoCAD: PencilRuler,
  'Graphic Designing': Palette,
  'Digital Marketing': Megaphone,
  Freelancing: Laptop,
};

const HERO_STATS = [
  { icon: CalendarCheck, label: 'Established', value: '2010' },
  { icon: Layers, label: 'DAE Technologies', value: '3 Disciplines' },
  { icon: GraduationCap, label: 'Program Duration', value: '3-Year DAE' },
  { icon: Trophy, label: 'Board Merit Position', value: 'Session 2022' },
];

const PRACTICAL_POINTS = [
  {
    icon: FlaskConical,
    title: 'Practical Laboratory Work',
    text: 'Hands-on lab sessions throughout the three-year DAE, so every student learns by doing — not only from books.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Digital Education System',
    text: 'A modern digital education system supports classroom teaching and keeps students comfortable with technology.',
  },
  {
    icon: PencilRuler,
    title: 'AutoCAD Training',
    text: 'Structured AutoCAD practice prepares students for modern engineering drawing and design workflows.',
  },
  {
    icon: Compass,
    title: 'Career Counseling',
    text: 'Guidance for study choices, skills and early career direction helps students plan their professional path.',
  },
];

export default function Home() {
  const { data: programs, loading: programsLoading } = useFetch<Program[]>('/api/programs');
  const { data: leaders } = useFetch<Leader[]>('/api/leadership');
  const { data: achievements } = useFetch<Achievement[]>('/api/achievements');

  return (
    <>
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="grid-navy absolute inset-0" aria-hidden="true" />
        <div
          className="absolute -top-32 left-1/3 h-[420px] w-[420px] rounded-full bg-navy-600/25 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-40 right-0 h-[380px] w-[380px] rounded-full bg-gold-500/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-x relative grid items-center gap-12 pb-20 pt-14 sm:pb-24 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-28 lg:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-white/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-gold-300">
              <BadgeCheck className="h-3.5 w-3.5" />
              Abbottabad · Serving since 2010
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
              College of Business
              <span className="block">&amp; Technology</span>
            </h1>
            <p className="mt-4 font-display text-lg font-semibold text-gold-300 sm:text-xl">
              {COLLEGE.tagline}
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-100 sm:text-lg">
              A technical institute in the heart of Abbottabad offering three-year Diploma of
              Associate Engineering (DAE) programs in Electrical, Petroleum and Civil Technology —
              built around practical laboratory work, a digital education system and professional
              skill development.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-bold text-navy-950 shadow-xl shadow-gold-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400"
              >
                <Layers className="h-4 w-4" />
                Explore DAE Programs
              </Link>
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                <ClipboardList className="h-4 w-4 text-gold-400" />
                Admission Inquiry
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl border border-white/15 shadow-2xl shadow-navy-950/60 ring-1 ring-white/10">
              <img
                src="/img/hero.png"
                alt="Students of College of Business and Technology Abbottabad in uniform — white shirt, navy trousers and navy tie"
                className="h-auto w-full object-cover"
                loading="eager"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute -left-3 top-6 rounded-2xl border border-white/15 bg-navy-900/90 px-4 py-3 shadow-xl backdrop-blur sm:-left-6"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy-300">
                Est. 2010
              </p>
              <p className="font-display text-sm font-bold text-white">15+ Years of Service</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -bottom-5 right-4 flex items-center gap-3 rounded-2xl border border-gold-400/40 bg-navy-950/95 px-4 py-3 shadow-xl backdrop-blur sm:right-8"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500/15">
                <Trophy className="h-5 w-5 text-gold-400" />
              </span>
              <div>
                <p className="text-xs font-bold text-white">1st Position — DAE Petroleum</p>
                <p className="text-[11px] text-navy-300">Technical Board Peshawar · Session 2022</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ───────────────────── STATS STRIP ───────────────────── */}
      <section className="border-b border-navy-100 bg-white">
        <div className="container-x grid grid-cols-2 gap-px overflow-hidden rounded-none bg-navy-100 py-0 lg:grid-cols-4">
          {HERO_STATS.map((s) => (
            <div key={s.label} className="flex items-center gap-4 bg-white px-4 py-7 sm:px-6">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-navy-50 ring-1 ring-navy-100">
                <s.icon className="h-5 w-5 text-navy-700" />
              </span>
              <span>
                <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-navy-400">
                  {s.label}
                </span>
                <span className="block font-display text-base font-bold text-navy-900 sm:text-lg">
                  {s.value}
                </span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────────── ABOUT PREVIEW ───────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-xl shadow-navy-900/10 ring-1 ring-navy-100">
                <img
                  src="/img/real/campus.jpeg"
                  alt="College of Business and Technology campus building, College Road Mandian Abbottabad"
                  className="h-auto w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 left-6 rounded-2xl border border-navy-100 bg-white px-5 py-4 shadow-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy-400">
                  Located In
                </p>
                <p className="font-display text-sm font-bold text-navy-900">
                  Mandian, Abbottabad — Khyber Pakhtunkhwa
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              align="left"
              kicker="About the College"
              title="A Technical Institute Focused on Real Skills"
              description="Established in 2010, College of Business & Technology Abbottabad prepares students for technical careers through three-year DAE programs. The college combines classroom teaching with practical laboratory work, a digital education system, AutoCAD training and character building — developing skilled, disciplined professionals for Pakistan's technical workforce."
            />
            <ul className="mt-8 space-y-3">
              {[
                'Three-year Diploma of Associate Engineering programs',
                'Electrical, Petroleum and Civil Technology disciplines',
                'Practical labs, digital education and hands-on training',
                'Hostel facility available for out-of-city students',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium text-navy-700">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-800"
              >
                About the College
                <ArrowRight className="h-4 w-4 text-gold-400" />
              </Link>
              <Link
                to="/benefits"
                className="inline-flex items-center gap-2 rounded-full border border-navy-200 px-6 py-3 text-sm font-bold text-navy-800 transition-colors hover:border-navy-400 hover:bg-navy-50"
              >
                Student Benefits
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────── PROGRAMS ───────────────────── */}
      <section className="section-pad bg-navy-50/60">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              kicker="DAE Programs"
              title="Three-Year Diploma Programs"
              description="Officially offered Diploma of Associate Engineering technologies at the college — each built around practical training and professional readiness."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {(programs ?? []).map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08}>
                <Link
                  to={`/programs/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy-900/10"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={PROGRAM_IMAGES[p.slug]}
                      alt={`${p.name} students in practical training`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-navy-950/85 px-3 py-1 text-[11px] font-bold text-white backdrop-blur">
                      <ProgramIcon slug={p.slug} className="h-3.5 w-3.5 text-gold-400" />
                      DAE · {p.duration}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-bold text-navy-900 group-hover:text-navy-700">
                      DAE — {p.name}
                    </h3>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-gold-600">
                      {p.tagline}
                    </p>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-navy-600">
                      {p.overview}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold text-navy-800">
                      View Program
                      <ArrowRight className="h-4 w-4 text-gold-500 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
            {programsLoading
              ? [0, 1, 2].map((i) => (
                  <div key={i} className="h-96 animate-pulse rounded-3xl bg-navy-100/60" />
                ))
              : null}
          </div>
        </div>
      </section>

      {/* ───────────────── PRACTICAL & DIGITAL LEARNING ───────────────── */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="grid-navy absolute inset-0" aria-hidden="true" />
        <div className="container-x relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-24">
          <Reveal>
            <SectionHeading
              dark
              align="left"
              kicker="Practical Lab Work & Digital Education"
              title="Technical Education You Can Touch"
              description="The college's learning model is built around its Practical Lab Work and Digital Education System. Students spend real time in laboratories and computer labs — wiring circuits, surveying sites, testing materials and producing engineering drawings."
            />
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {PRACTICAL_POINTS.map((pt, i) => (
                <Reveal key={pt.title} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors hover:border-gold-400/40">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500/15">
                      <pt.icon className="h-5 w-5 text-gold-400" />
                    </span>
                    <h3 className="mt-3 font-display text-sm font-bold text-white">{pt.title}</h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-navy-200">{pt.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="space-y-5">
              <div className="overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
                <img
                  src="/img/lab.png"
                  alt="Students performing hands-on laboratory practical work"
                  className="h-64 w-full object-cover sm:h-72"
                  loading="lazy"
                />
              </div>
              <div className="ml-auto w-4/5 overflow-hidden rounded-3xl border border-white/15 shadow-2xl sm:-mt-4">
                <img
                  src="/img/computer-lab.png"
                  alt="Digital education system — students working on AutoCAD in the computer lab"
                  className="h-52 w-full object-cover sm:h-60"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────── ADDITIONAL SKILLS TRAINING ───────────── */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              kicker="Beyond the Diploma"
              title="Additional Skills & Professional Training"
              description="Alongside DAE studies, the college's promotional material highlights additional professional training opportunities that help students compete in modern workplaces and freelancing markets."
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-9 lg:gap-3">
            {SKILLS_TRAINING.map((skill, i) => {
              const Icon = SKILL_ICONS[skill] ?? BookOpen;
              return (
                <Reveal key={skill} delay={i * 0.04}>
                  <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-navy-100 bg-navy-50/50 px-3 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-navy-300 hover:bg-white hover:shadow-lg">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-navy-700 shadow-sm ring-1 ring-navy-100">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-[13px] font-bold leading-tight text-navy-800">{skill}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-navy-400">
              Additional training is offered as shown in current college promotional material and is
              separate from the official DAE curriculum. Availability and schedules are confirmed by
              the college office.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ───────────────── ACHIEVEMENT BAND ───────────────── */}
      {achievements && achievements.length > 0 ? (
        <section className="relative overflow-hidden bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900">
          <div
            className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-gold-500/10 to-transparent"
            aria-hidden="true"
          />
          <div className="container-x relative flex flex-col items-center gap-6 py-14 text-center">
            {achievements.map((a) => (
              <Reveal key={a.id}>
                <div className="flex flex-col items-center gap-7 sm:flex-row sm:gap-10 sm:text-left">
                  <div className="flex shrink-0 flex-col items-center gap-3">
                    <span className="block w-40 overflow-hidden rounded-2xl border-2 border-gold-400/50 shadow-2xl shadow-navy-950/50 sm:w-48">
                      <img
                        src="/img/real/ali-nisar.jpeg"
                        alt="Ali Nisar — proud CBT topper, 1st Position in DAE Petroleum Technology, Session 2022"
                        className="h-auto w-full"
                        loading="lazy"
                      />
                    </span>
                    <p className="font-display text-lg font-extrabold text-white">Ali Nisar</p>
                  </div>
                  <div className="flex flex-col items-center gap-4 sm:flex-row sm:text-left">
                    <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gold-500/15 ring-1 ring-gold-400/40">
                      <Trophy className="h-8 w-8 text-gold-400" />
                    </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold-300">
                      College Achievement
                    </p>
                    <h2 className="mt-1 font-display text-2xl font-extrabold text-white sm:text-3xl">
                      {a.title}
                    </h2>
                    <p className="mt-1 text-sm text-navy-200">{a.detail}</p>
                  </div>
                </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      {/* ───────────── SCHOLARSHIP / HOSTEL NOTES ───────────── */}
      <section className="section-pad bg-navy-50/60">
        <div className="container-x max-w-3xl">
          <Reveal>
            <div className="flex h-full flex-col gap-4 rounded-3xl border border-gold-400/40 bg-gradient-to-br from-gold-500/10 to-white p-8">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-500/15">
                <HandCoins className="h-6 w-6 text-gold-600" />
              </span>
              <h3 className="font-display text-xl font-bold text-navy-900">
                Scholarship Opportunities
              </h3>
              <p className="text-sm leading-relaxed text-navy-600">
                The college's current promotional material mentions scholarship support of up to 50
                lakh for deserving students. Eligibility, terms and application details are decided
                and confirmed by the college — please contact the Admissions Office for the latest
                verified information.
              </p>
              <Link
                to="/admissions"
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-navy-800 hover:text-navy-900"
              >
                Ask About Scholarships
                <ArrowRight className="h-4 w-4 text-gold-500" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────── LEADERSHIP PREVIEW ───────────────── */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              kicker="Leadership"
              title="Guided by Experience"
              description="The college is led by a dedicated leadership team responsible for academic quality, discipline and student development."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {(leaders ?? []).map((l, i) => {
              const initials = l.full_name
                .split(' ')
                .map((w) => w[0])
                .slice(0, 2)
                .join('');
              return (
                <Reveal key={l.id} delay={i * 0.08}>
                  <div className="flex h-full flex-col items-center rounded-3xl border border-navy-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <span className="inline-flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-navy-50 font-display text-2xl font-extrabold text-gold-400 ring-4 ring-navy-50">
                      {LEADER_PHOTOS[l.role] ? (
                        <img
                          src={LEADER_PHOTOS[l.role]}
                          alt={`${l.full_name} — ${l.role}`}
                          className="h-full w-full object-cover object-top"
                          loading="lazy"
                        />
                      ) : (
                        initials
                      )}
                    </span>
                    <p className="mt-5 font-display text-lg font-bold text-navy-900">{l.full_name}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-gold-600">
                      {l.role}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-10 text-center">
              <Link
                to="/leadership"
                className="inline-flex items-center gap-2 rounded-full border border-navy-200 px-6 py-3 text-sm font-bold text-navy-800 transition-colors hover:border-navy-400 hover:bg-navy-50"
              >
                Meet the Leadership
                <ArrowRight className="h-4 w-4 text-gold-500" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
