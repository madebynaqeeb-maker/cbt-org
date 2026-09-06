import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[65vh] items-center justify-center overflow-hidden bg-navy-950 px-4 text-center text-white">
      <div className="grid-navy absolute inset-0" aria-hidden="true" />
      <div className="relative">
        <Compass className="mx-auto h-10 w-10 text-gold-400" />
        <p className="mt-6 font-display text-6xl font-extrabold sm:text-7xl">404</p>
        <p className="mt-3 text-sm text-navy-200">
          The page you are looking for does not exist or has moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-bold text-navy-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
