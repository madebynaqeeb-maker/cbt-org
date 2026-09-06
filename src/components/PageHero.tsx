interface PageHeroProps {
  kicker: string;
  title: string;
  description?: string;
}

export default function PageHero({ kicker, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="grid-navy absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-navy-600/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-28 left-0 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-x relative py-16 sm:py-20 lg:py-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-gold-300">
          {kicker}
        </span>
        <h1 className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-200 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500" />
    </section>
  );
}
