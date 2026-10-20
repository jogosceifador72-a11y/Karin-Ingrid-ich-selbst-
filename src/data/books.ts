export interface Book {
  id: number;
  title: string;
  category: 'Magen & Darm' | 'Ernährung' | 'Herz & Prävention' | 'Stoffwechsel';
  desc: string;
  url: string;
  tone: 'sage' | 'cream' | 'terra' | 'sage2';
  cover: string;
  short: string;
  pending?: boolean;
}

export const booksData: Book[] = [
  {
    id: 1,
    title: 'Was essen bei Sodbrennen?',
    category: 'Magen & Darm',
    desc: 'Orientierung rund um Ernährung und typische Auslöser von Sodbrennen.',
    url: 'https://wasessenbeisodbrennen.vercel.app/',
    tone: 'sage',
    cover: 'Sodbrennen',
    short: 'Was essen bei'
  },
  {
    id: 2,
    title: 'Sodbrennen verstehen',
    category: 'Magen & Darm',
    desc: 'Häufige Ursachen und wichtige Zusammenhänge verständlich erklärt.',
    url: 'https://sodbrennenverstehen.vercel.app/',
    tone: 'cream',
    cover: 'Sodbrennen',
    short: 'verstehen'
  },
  {
    id: 3,
    title: 'Refluxkrankheit verstehen',
    category: 'Magen & Darm',
    desc: 'Informationen zu Symptomen, Alltag und medizinischer Einordnung.',
    url: 'https://refluxkrankheitverstehen.vercel.app/',
    tone: 'terra',
    cover: 'Reflux',
    short: 'verstehen'
  },
  {
    id: 4,
    title: 'Ernährung bei Reflux',
    category: 'Ernährung',
    desc: 'Ernährung als Thema bei Reflux – individuell und alltagsnah betrachtet.',
    url: 'https://ernhrungbeireflux.vercel.app/',
    tone: 'sage2',
    cover: 'Ernährung',
    short: 'bei Reflux'
  },
  {
    id: 5,
    title: 'Gastritis verstehen',
    category: 'Magen & Darm',
    desc: 'Grundlagen zu Gastritis, möglichen Ursachen und medizinischer Betreuung.',
    url: 'https://gastritsverstehenvorbeugenbehandeln.vercel.app/',
    tone: 'cream',
    cover: 'Gastritis',
    short: 'verstehen'
  },
  {
    id: 6,
    title: 'Magenfreundliche Ernährung',
    category: 'Ernährung',
    desc: 'Anregungen rund um Mahlzeiten und individuelle Verträglichkeit.',
    url: 'https://magenernhrung.vercel.app/',
    tone: 'terra',
    cover: 'Magen &',
    short: 'Ernährung'
  },
  {
    id: 7,
    title: 'Magengeschwüre: Warnzeichen',
    category: 'Magen & Darm',
    desc: 'Wichtige Informationen zu Warnzeichen und medizinischer Abklärung.',
    url: 'https://magengeschwurwarnzeichen.vercel.app/',
    tone: 'sage',
    cover: 'Magen',
    short: 'Warnzeichen'
  },
  {
    id: 8,
    title: 'Reizdarmsyndrom verstehen',
    category: 'Magen & Darm',
    desc: 'Informationen zu häufigen Beschwerden und dem Umgang im Alltag.',
    url: 'https://reizdarmsyndromverst.vercel.app/',
    tone: 'cream',
    cover: 'Reizdarm',
    short: 'verstehen'
  },
  {
    id: 9,
    title: 'Bluthochdruck verstehen',
    category: 'Herz & Prävention',
    desc: 'Grundlagen zum Blutdruck, zu Risikofaktoren und Prävention.',
    url: 'https://bluthochdruck.vercel.app/',
    tone: 'sage2',
    cover: 'Blutdruck',
    short: 'verstehen'
  },
  {
    id: 10,
    title: 'Metabolisches Syndrom',
    category: 'Stoffwechsel',
    desc: 'Ein Überblick über Merkmale, Risikofaktoren und Diagnose.',
    url: 'https://metabolischessyndrom.vercel.app/',
    tone: 'terra',
    cover: 'Stoffwechsel',
    short: 'verstehen'
  },
  {
    id: 11,
    title: 'Fettleber: Risikofaktoren',
    category: 'Stoffwechsel',
    desc: 'Faktoren und Zusammenhänge, die bei einer Fettleber wichtig sein können.',
    url: 'https://fettleberrisikofaktoren.vercel.app/',
    tone: 'sage',
    cover: 'Fettleber',
    short: 'Risikofaktoren'
  },
  {
    id: 12,
    title: 'Herzgesundheit im reiferen Alter',
    category: 'Herz & Prävention',
    desc: 'Orientierung zu Herzgesundheit und Prävention in der zweiten Lebenshälfte.',
    url: 'https://herzgesundheitimreifealter.vercel.app/',
    tone: 'cream',
    cover: 'Herzgesundheit',
    short: 'im Alltag'
  },
  {
    id: 14,
    title: 'Anämie: Symptome verstehen',
    category: 'Herz & Prävention',
    desc: 'Ein verständlicher Einstieg in mögliche Symptome und Ursachen von Anämie.',
    url: 'https://anmiesymptome.vercel.app/',
    tone: 'sage2',
    cover: 'Anämie',
    short: 'Symptome'
  },
  {
    id: 15,
    title: 'Proteinreich genießen',
    category: 'Ernährung',
    desc: 'Anregungen für eine proteinbewusste Ernährung im Alltag.',
    url: 'https://proteinreichgeniessen.vercel.app/',
    tone: 'cream',
    cover: 'Proteinreich',
    short: 'genießen'
  },
  {
    id: 16,
    title: 'Ballaststoffe: der natürliche Weg',
    category: 'Ernährung',
    desc: 'Informationen zu Ballaststoffen und ihrer Rolle für die Verdauung.',
    url: 'https://ballaststoffedernatrlichewegzueiner-six.vercel.app/',
    tone: 'terra',
    cover: 'Ballaststoffe',
    short: 'im Alltag'
  },
  {
    id: 17,
    title: 'Ernährung bei erhöhtem Cholesterin',
    category: 'Ernährung',
    desc: 'Orientierung zu Ernährung und erhöhten Cholesterinwerten.',
    url: 'https://cholesterinneudenken.vercel.app/',
    tone: 'sage',
    cover: 'Cholesterin',
    short: 'neu denken'
  },
  {
    id: 18,
    title: 'Herzgesundheit ab 50',
    category: 'Herz & Prävention',
    desc: 'Impulse, um sich mit Herzgesundheit in der zweiten Lebenshälfte zu beschäftigen.',
    url: 'https://herzesungdhitab50.vercel.app/',
    tone: 'cream',
    cover: 'Herzgesundheit',
    short: 'ab 50'
  },
  {
    id: 19,
    title: 'Ratgeber: Was essen?',
    category: 'Ernährung',
    desc: 'Dieser Link ist hinterlegt; Thema und endgültiger Produkttitel müssen noch bestätigt werden.',
    url: 'https://wasessenbei.vercel.app/',
    tone: 'sage2',
    cover: 'Ernährung',
    short: 'Thema bestätigen',
    pending: true
  },
  {
    id: 20,
    title: 'Ratgeber: Wie man …',
    category: 'Ernährung',
    desc: 'Dieser Link ist hinterlegt; Thema und endgültiger Produkttitel müssen noch bestätigt werden.',
    url: 'https://wieman.vercel.app/',
    tone: 'terra',
    cover: 'Ratgeber',
    short: 'Thema bestätigen',
    pending: true
  }
];

export const categories = [
  'Alle Themen',
  'Magen & Darm',
  'Ernährung',
  'Herz & Prävention',
  'Stoffwechsel'
] as const;

export type Category = (typeof categories)[number];
