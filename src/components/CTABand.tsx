import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList, Phone } from 'lucide-react';
import { COLLEGE } from '../lib/site';
import Reveal from './Reveal';

export default function CTABand() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="grid-navy absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -right-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gold-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-x relative flex flex-col items-center gap-8 py-16 text-center sm:py-20">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            Start Your Technical Career with{' '}
            <span className="text-gold-400">College of Business &amp; Technology</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-xl text-navy-200">
            Three-year DAE programs with practical laboratory work, a digital education system and
            professional skill development — in the heart of Abbottabad.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-bold text-navy-950 shadow-xl shadow-gold-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400"
            >
              <ClipboardList className="h-4 w-4" />
              Admission Inquiry
            </Link>
            <a
              href={`tel:${COLLEGE.phones[0].tel}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              <Phone className="h-4 w-4 text-gold-400" />
              Call {COLLEGE.phones[0].label}
            </a>
            <Link
              to="/programs"
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-3.5 text-sm font-semibold text-navy-100 transition-colors hover:text-gold-300"
            >
              Explore DAE Programs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
