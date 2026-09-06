import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import { COLLEGE } from '../lib/site';
import Logo from './Logo';

const quickLinks = [
  { to: '/about', label: 'About the College' },
  { to: '/programs', label: 'DAE Programs' },
  { to: '/benefits', label: 'Student Benefits' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/affiliations', label: 'Affiliations & Recognition' },
];

const programLinks = [
  { to: '/programs/electrical-technology', label: 'Electrical Technology' },
  { to: '/programs/petroleum-technology', label: 'Petroleum Technology' },
  { to: '/programs/civil-technology', label: 'Civil Technology' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-100">
      {/* Main footer */}
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <Logo size={46} />
            <div>
              <p className="font-display text-sm font-extrabold leading-tight text-white">
                College of Business &amp; Technology
              </p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-navy-300">
                Abbottabad · Est. 2010
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-navy-200">
            {COLLEGE.tagline} A technical institute serving Khyber Pakhtunkhwa with three-year DAE
            programs in Electrical, Petroleum and Civil Technology.
          </p>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-gold-400">
            Explore
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-navy-200 transition-colors hover:text-white hover:underline hover:decoration-gold-400 hover:underline-offset-4"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-gold-400">
            DAE Programs
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            {programLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-navy-200 transition-colors hover:text-white hover:underline hover:decoration-gold-400 hover:underline-offset-4"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="text-navy-400">Three-year Diploma of Associate Engineering</li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-gold-400">
            Contact
          </p>
          <ul className="mt-5 space-y-4 text-sm">
            {COLLEGE.phones.map((p) => (
              <li key={p.tel}>
                <a
                  href={`tel:${p.tel}`}
                  className="flex items-center gap-3 text-navy-200 transition-colors hover:text-white"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                    <Phone className="h-3.5 w-3.5 text-gold-400" />
                  </span>
                  {p.label}
                </a>
              </li>
            ))}
            <li className="flex items-start gap-3 text-navy-200">
              <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                <MapPin className="h-3.5 w-3.5 text-gold-400" />
              </span>
              <span className="leading-relaxed">{COLLEGE.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-center text-xs text-navy-300 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} College of Business &amp; Technology, Abbottabad. All rights
            reserved.
          </p>
          <p className="text-navy-400">{COLLEGE.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
