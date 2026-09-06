import { Building2, Cog, Fuel, Zap } from 'lucide-react';

const ICONS: Record<string, typeof Zap> = {
  'electrical-technology': Zap,
  'petroleum-technology': Fuel,
  'civil-technology': Building2,
};

export default function ProgramIcon({ slug, className }: { slug: string; className?: string }) {
  const Icon = ICONS[slug] ?? Cog;
  return <Icon className={className} aria-hidden="true" />;
}
