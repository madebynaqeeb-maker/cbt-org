import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MapPin, Menu, Phone, X } from 'lucide-react';
import { COLLEGE, NAV_LINKS } from '../lib/site';
import Logo from './Logo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50">
      {/* Info top bar */}
      <div
        className={`overflow-hidden bg-navy-950 text-navy-100 transition-all duration-300 ${
          scrolled ? 'max-h-0' : 'max-h-12'
        }`}
      >
        <div className="container-x flex h-10 items-center justify-between text-[11px] sm:text-xs">
          <div className="flex items-center gap-4">
            <span className="hidden items-center gap-1.5 text-navy-200 sm:inline-flex">
              <MapPin className="h-3 w-3 text-gold-400" />
              {COLLEGE.addressShort}
            </span>
            <span className="inline-flex items-center rounded-full border border-gold-400/30 bg-white/5 px-2.5 py-0.5 font-bold tracking-[0.18em] text-gold-300">
              EST. 2010
            </span>
          </div>
          <div className="flex items-center gap-4">
            {COLLEGE.phones.map((p) => (
              <a
                key={p.tel}
                href={`tel:${p.tel}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-gold-300"
              >
                <Phone className="h-3 w-3 text-gold-400" />
                <span className="hidden md:inline">{p.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div
        className={`border-b border-navy-100/80 bg-white/92 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_10px_36px_-14px_rgba(4,16,42,0.28)]' : ''
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between gap-3 lg:h-[74px]">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <Logo size={46} />
            <span className="min-w-0">
              <span className="block truncate font-display text-[13px] font-extrabold leading-tight text-navy-900 sm:text-sm lg:text-[15px]">
                College of Business &amp; Technology
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-navy-500 sm:text-[11px]">
                Abbottabad · Since 2010
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary navigation">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }: { isActive: boolean }) =>
                  `rounded-lg px-3 py-2 text-[13px] font-semibold transition-colors ${
                    isActive
                      ? 'bg-navy-50 text-navy-900'
                      : 'text-navy-600 hover:bg-navy-50/70 hover:text-navy-900'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-navy-100 bg-white text-navy-800 shadow-sm xl:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-b border-navy-100 bg-white shadow-2xl xl:hidden"
          >
            <nav className="container-x flex flex-col gap-1 py-4" aria-label="Mobile navigation">
              {NAV_LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }: { isActive: boolean }) =>
                    `rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                      isActive ? 'bg-navy-900 text-white' : 'text-navy-700 hover:bg-navy-50'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
