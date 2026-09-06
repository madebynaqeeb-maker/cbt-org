import {
  BadgeCheck,
  Hourglass,
  Info,
  Landmark,
  ShieldCheck,
  Trophy,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTABand from '../components/CTABand';
import Reveal from '../components/Reveal';
import { useFetch } from '../lib/useFetch';
import type { Achievement } from '../lib/types';

export default function Affiliations() {
  const { data: achievements } = useFetch<Achievement[]>('/api/achievements');

  return (
    <>
      <PageHero
        kicker="Affiliations & Recognition"
        title="Affiliations & Recognition"
        description="The college is committed to transparent recognition. Exact affiliation titles, registration numbers and official certificates are published only after verification."
      />

      <section className="section-pad bg-white">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              kicker="Status"
              title="Current Recognition Status"
              description="A careful, verified summary of the bodies referenced in the college's own material."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col gap-4 rounded-3xl border border-navy-100 bg-white p-8 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900">
                    <Landmark className="h-6 w-6 text-gold-400" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-700">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    Referenced in College Material
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-navy-900">
                  Technical Board Peshawar
                </h3>
                <p className="text-sm leading-relaxed text-navy-600">
                  Technical Board Peshawar is referenced in the college's promotional material, and
                  the college's verified achievement record — a 1st Position in DAE Petroleum
                  (Session 2022) — was awarded from Technical Board Peshawar. Exact registration and
                  affiliation reference numbers will be published after official verification.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="flex h-full flex-col gap-4 rounded-3xl border-2 border-dashed border-navy-200 bg-navy-50/40 p-8">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white ring-1 ring-navy-100">
                    <ShieldCheck className="h-6 w-6 text-navy-500" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-[11px] font-bold text-amber-700">
                    <Hourglass className="h-3.5 w-3.5" />
                    Verification in Progress
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-navy-900">
                  Additional Bodies (incl. HEC References)
                </h3>
                <p className="text-sm leading-relaxed text-navy-600">
                  Earlier college information has also referenced Peshawar boards and HEC. Until the
                  college confirms exact titles, scope and reference numbers, no further
                  accreditation or affiliation claims are made on this website. Official logos and
                  certificates will appear here once verified.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-navy-100 bg-white p-6">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-navy-400" />
              <p className="text-sm leading-relaxed text-navy-600">
                Students and parents are encouraged to request original affiliation and recognition
                documents directly from the college administration — the college welcomes
                verification.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {(achievements ?? []).length > 0 ? (
        <section className="relative overflow-hidden bg-navy-950 text-white">
          <div className="grid-navy absolute inset-0" aria-hidden="true" />
          <div className="container-x relative py-16 sm:py-20">
            <Reveal>
              <SectionHeading
                dark
                kicker="Verified Achievement"
                title="Recognition Through Results"
                description="The strongest proof of a college is the performance of its students."
              />
            </Reveal>
            <div className="mx-auto mt-12 max-w-2xl">
              {(achievements ?? []).map((a) => (
                <Reveal key={a.id}>
                  <div className="flex flex-col items-center gap-5 rounded-3xl border border-gold-400/30 bg-white/5 p-10 text-center backdrop-blur">
                    <div className="relative mb-2">
                      <span className="block w-36 overflow-hidden rounded-2xl border-2 border-gold-400/50 shadow-2xl sm:w-40">
                        <img
                          src="/img/real/ali-nisar.jpeg"
                          alt="Ali Nisar — proud CBT topper, 1st Position in DAE Petroleum Technology, Session 2022"
                          className="h-auto w-full"
                          loading="lazy"
                        />
                      </span>
                      <span className="absolute -bottom-3 -right-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500 shadow-lg shadow-gold-500/30">
                        <Trophy className="h-5 w-5 text-navy-950" />
                      </span>
                    </div>
                    <p className="font-display text-xl font-extrabold text-gold-300">Ali Nisar</p>
                    <h3 className="font-display text-2xl font-extrabold text-white">{a.title}</h3>
                    <p className="text-sm text-navy-200">{a.detail}</p>
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-navy-400">
                      As stated in the college's official promotional material
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CTABand />
    </>
  );
}
