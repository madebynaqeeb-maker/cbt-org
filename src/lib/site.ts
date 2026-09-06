export const COLLEGE = {
  name: 'College of Business & Technology',
  shortName: 'CBT',
  city: 'Abbottabad',
  tagline: 'Building Skills. Creating Professionals. Shaping the Future.',
  established: '2010',
  address:
    'Near Hassan Pharmacy, College Road, Mandian, Abbottabad, Khyber Pakhtunkhwa, Pakistan',
  addressShort: 'College Road, Mandian, Abbottabad',
  phones: [
    { label: '0313-0055051', tel: '+923130055051' },
    { label: '0336-8834633', tel: '+923368834633' },
    { label: '0314-0841737', tel: '+923140841737' },
  ],
};

export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'DAE Programs' },
  { to: '/benefits', label: 'Student Benefits' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/leadership', label: 'Leadership' },
  { to: '/affiliations', label: 'Affiliations' },
  { to: '/contact', label: 'Contact' },
];

export const PROGRAM_IMAGES: Record<string, string> = {
  'electrical-technology': '/img/program-electrical.png',
  'petroleum-technology': '/img/program-petroleum.png',
  'civil-technology': '/img/program-civil.png',
};

/** Official leadership portraits provided by the college, keyed by role. */
export const LEADER_PHOTOS: Record<string, string> = {
  Director: '/img/real/director-umair-ali-khan.jpg',
  Principal: '/img/real/principal-sarmad-ali-khan.jpg',
  'Vice Principal': '/img/real/vice-principal-ahmad-farzeen.jpg',
};

/** Additional professional training shown in the college's promotional material.
 *  Presented as additional training opportunities — not stated as mandatory parts of the DAE. */
export const SKILLS_TRAINING = [
  'IELTS',
  'English Grammar',
  'English Language',
  'MS Office',
  'Web Development',
  'AutoCAD',
  'Graphic Designing',
  'Digital Marketing',
  'Freelancing',
];

export const MAPS_EMBED =
  'https://www.google.com/maps?q=College+Road,+Mandian,+Abbottabad,+Khyber+Pakhtunkhwa,+Pakistan&z=15&output=embed';

export function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}
