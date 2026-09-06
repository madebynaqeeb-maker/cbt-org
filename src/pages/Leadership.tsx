import { BadgeCheck, Info, ShieldCheck } from 'lucide-react';
import PageHero from '../components/PageHero';
import { LEADER_PHOTOS } from '../lib/site';
import CTABand from '../components/CTABand';
import Reveal from '../components/Reveal';
import { useFetch } from '../lib/useFetch';
import type { Leader } from '../lib/types';

function initialsOf(name: string): string {
  return name
    .split(' ')
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('');
}

export default function Leadership() {
  const { data: leaders, loading, error, refetch } = useFetch<Leader[]>('/api/leadership');

  return (
    <>
      <PageHero
        kicker="Leadership"
        title="College Leadership"
        description="A focused leadership team guides academic standards, student discipline and the professional culture of College of Business & Technology, Abbottabad."
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(leaders ?? []).map((l, i) => (
              <Reveal key={l.id} delay={i * 0.08}>
                <article className="flex h-full flex-col items-center rounded-3xl border border-navy-100 bg-white p-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy-900/10">
                  {/* Official portrait — provided by the college */}
                  <span className="relative inline-flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-navy-50 font-display text-3xl font-extrabold text-gold-400 ring-4 ring-navy-50">
                    {LEADER_PHOTOS[l.role] ? (
                      <img
                        src={LEADER_PHOTOS[l.role]}
                        alt={`${l.full_name} — ${l.role}, College of Business & Technology, Abbottabad`}
                        className="h-full w-full object-cover object-top"
                        loading="lazy"
                      />
                    ) : (
                      initialsOf(l.full_name)
                    )}
                    <span className="absolute inset-1.5 rounded-full border border-navy-100/60" aria-hidden="true" />
                  </span>
                  <h2 className="mt-6 font-display text-xl font-bold text-navy-900">{l.full_name}</h2>
                  <p className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-navy-700">
                    <ShieldCheck className="h-3.5 w-3.5 text-gold-500" />
                    {l.role}
                  </p>
                  <p className="mt-5 text-[13px] leading-relaxed text-navy-500">
                    College of Business &amp; Technology, Abbottabad — providing academic and
                    administrative leadership since the college's early years.
                  </p>
                  <p className="mt-auto pt-5 text-[11px] font-semibold text-navy-300">
                    Detailed profile will be updated soon.
                  </p>
                </article>
              </Reveal>
            ))}
            {loading
              ? [0, 1, 2].map((i) => (
                  <div key={i} className="h-96 animate-pulse rounded-3xl bg-navy-50" />
                ))
              : null}
          </div>

          <Reveal delay={0.2}>
            <div className="mx-auto mt-12 flex max-w-3xl items-start gap-3 rounded-2xl border border-navy-100 bg-navy-50/60 p-6">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-navy-400" />
              <p className="text-sm leading-relaxed text-navy-600">
                Official portraits are displayed for each office. Detailed biographies of the
                leadership team will be published once provided by the college.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mx-auto mt-8 flex max-w-3xl items-center justify-center gap-2 text-center text-xs text-navy-400">
              <BadgeCheck className="h-4 w-4 text-gold-500" />
              Under this leadership the college recorded a 1st Position in DAE Petroleum (Session
              2022) at Technical Board Peshawar.
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
