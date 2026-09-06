interface LogoProps {
  size?: number;
}

/**
 * Official college crest — provided by College of Business & Technology.
 * (Replaces the temporary monogram placeholder throughout the site.)
 */
export default function Logo({ size = 46 }: LogoProps) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-md shadow-navy-900/15 ring-1 ring-navy-100"
      style={{ width: size, height: size }}
      role="img"
      aria-label="College of Business & Technology — official crest"
    >
      <img
        src="/img/real/logo-crest.jpeg"
        alt=""
        className="h-full w-full object-cover"
        draggable={false}
      />
    </span>
  );
}
