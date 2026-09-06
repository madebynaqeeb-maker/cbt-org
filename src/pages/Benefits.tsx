import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  BadgePlus,
  BedDouble,
  BookOpen,
  Code2,
  Compass,
  FileSpreadsheet,
  FlaskConical,
  Globe,
  GraduationCap,
  HandCoins,
  HeartHandshake,
  Info,
  Languages,
  Laptop,
  Megaphone,
  MonitorSmartphone,
  Palette,
  PencilRuler,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTABand from '../components/CTABand';
import Reveal from '../components/Reveal';
import { SKILLS_TRAINING } from '../lib/site';

const BENEFITS = [
  {
    icon: GraduationCap,
    title: 'Three-Year DAE Programs',
    text: 'A complete Diploma of Associate Engineering qualification in Electrical, Petroleum or Civil Technology — a recognised path into technical careers.',
    note: null,
  },
  {
    icon: Award,
    title: 'Free DIT for Eligible DAE Students',
    text: 'As stated in the college\u2019s promotional material, eligible DAE students receive Diploma in Information Technology (DIT) training free of charge alongside their diploma.',
    note: 'Eligibility applies — confirm with the Admissions Office.',
  },
  {
    icon: FlaskConical,
    title: 'Practical Laboratory Work',
    text: 'Real lab sessions in every technology: wiring, surveying, materials testing, measurement and instrumentation — learning by doing.',
    note: null,
  },
  {
    icon: MonitorSmartphone,
    title: 'Digital Education System',
    text: 'A modern digital education system supports teaching across all programs and prepares students for technology-driven workplaces.',
    note: null,
  },
  {
    icon: PencilRuler,
    title: 'AutoCAD Training',
    text: 'Structured AutoCAD practice gives every student modern engineering drawing and drafting skills demanded by industry.',
    note: null,
  },
  {
    icon: Compass,
    title: 'Career Counseling',
    text: 'One-to-one guidance helps students choose technologies, plan skills development and prepare for their professional future.',
    note: null,
  },
  {
    icon: HeartHandshake,
    title: 'Character Building',
    text: 'Discipline, ethics and professional conduct are developed deliberately — employers value character as much as competence.',
    note: null,
  },
  {
    icon: BadgePlus,
    title: 'Additional Professional Skills',
    text: 'From English and IELTS preparation to web development and digital marketing, extra training widens every student\u2019s options.',
    note: null,
  },
  {
    icon: BedDouble,
    title: 'Hostel Facility',
    text: 'A hostel facility is available for students coming from outside Abbottabad, as stated in the college\u2019s promotional material.',
    note: 'Availability and details are confirmed by the college office.',
  },
  {
    icon: HandCoins,
    title: 'Scholarship Opportunities',
    text: 'The college\u2019s current promotional material mentions scholarship support of up to 50 lakh for deserving students.',
    note: 'An opportunity, not a guarantee — eligibility and terms are confirmed by the college.',
  },
];

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

export default function Benefits() {
  return (
    <>
      <PageHero
        kicker="Student Benefits"
        title="More Than a Diploma"
        description="Students at College of Business & Technology gain practical training, digital skills, career support and a disciplined environment — the benefits shown in the college's current promotional material."
      />

      <section className="section-pad bg-white">
        <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.04}>
              <div className="flex h-full flex-col gap-3 rounded-3xl border border-navy-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-xl">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900">
                  <b.icon className="h-6 w-6 text-gold-400" />
                </span>
                <h3 className="font-display text-[15px] font-bold leading-snug text-navy-900">
                  {b.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-navy-600">{b.text}</p>
                {b.note ? (
                  <p className="mt-auto rounded-xl bg-gold-500/10 px-3 py-2 text-[11px] font-semibold text-gold-600">
                    {b.note}
                  </p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="grid-navy absolute inset-0" aria-hidden="true" />
        <div className="container-x relative py-16 sm:py-20 lg:py-24">
          <Reveal>
            <SectionHeading
              dark
              kicker="Additional Skills & Professional Training"
              title="Training That Travels With You"
              description="As highlighted in the college's promotional material, students can grow beyond their technology with additional professional training in high-demand skills."
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-9 lg:gap-3">
            {SKILLS_TRAINING.map((skill, i) => {
              const Icon = SKILL_ICONS[skill] ?? BookOpen;
              return (
                <Reveal key={skill} delay={i * 0.04}>
                  <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-6 text-center backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/40">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gold-500/15">
                      <Icon className="h-5 w-5 text-gold-400" />
                    </span>
                    <span className="text-[13px] font-bold leading-tight text-white">{skill}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={0.2}>
            <div className="mx-auto mt-10 flex max-w-3xl items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-left">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
              <p className="text-xs leading-relaxed text-navy-200">
                These trainings are presented as additional opportunities shown in current college
                promotional material — they are not stated to be mandatory components of the DAE
                curriculum. Schedules and availability are confirmed by the college office.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-navy-50/50">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-navy-100">
              <img
                src="/img/computer-lab.png"
                alt="Students learning AutoCAD and computer skills in the digital lab"
                className="h-72 w-full object-cover sm:h-96"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              align="left"
              kicker="Why It Matters"
              title="Benefits That Add Up to a Career"
              description="Individually, each benefit helps. Together — a three-year DAE, free DIT for eligible students, labs, digital education, AutoCAD, counseling, character building and scholarship opportunities — they form a complete launchpad for a technical career."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-800"
              >
                Start Admission Inquiry
                <ArrowRight className="h-4 w-4 text-gold-400" />
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-6 py-3 text-sm font-bold text-navy-800 transition-colors hover:border-navy-400 hover:bg-navy-50"
              >
                Compare DAE Programs
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
