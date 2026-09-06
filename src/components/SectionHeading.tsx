interface SectionHeadingProps {
  kicker: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export default function SectionHeading({
  kicker,
  title,
  description,
  align = 'center',
  dark = false,
}: SectionHeadingProps) {
  const alignCls = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';
  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignCls}`}>
      <span className="inline-flex items-center gap-2">
        <span className="h-px w-8 bg-gold-500" aria-hidden="true" />
        <span
          className={`text-xs font-bold uppercase tracking-[0.28em] ${dark ? 'text-gold-300' : 'text-navy-600'}`}
        >
          {kicker}
        </span>
        <span className="h-px w-8 bg-gold-500" aria-hidden="true" />
      </span>
      <h2
        className={`font-display text-3xl font-bold leading-tight sm:text-4xl ${
          dark ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`text-base leading-relaxed ${dark ? 'text-navy-200' : 'text-navy-600'}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
