import { Project, ProjectCategory, Service, Client, ClientType, WorkKind, CaseStudy } from './types';
import {
  Film,
  MonitorPlay,
  Rocket,
  Zap,
  Smartphone,
  Palette
} from 'lucide-react';

/* Where "Book a call" points. While it's empty the CTA falls back to the
   contact form, so nothing breaks. */
export const BOOKING_URL = 'https://cal.com/harinayan/15min';

/* Your real turnaround, in your words. Shown under the contact heading when
   set, hidden when empty. Left blank deliberately: this is a promise to a
   paying client, so it has to be your number, not a plausible-sounding one.
   e.g. 'Typical turnaround: 4 days for an ad set, 2 weeks for a launch film' */
export const TURNAROUND = '';

export const PROJECTS: Project[] = [
  // --- CLIENT PRODUCT WORK ---
  {
    id: 's1',
    kind: 'client-video',
    category: ProjectCategory.VIDEO,
    title: 'Ganola Demo Video',
    subcategory: 'Product Demo',
    youtubeId: 'Omp8y-GI4kY',
    format: 'horizontal',
    description: 'Product demo showing Ganola running inside Slashy, cut for a founder audience.',
    clientSlug: 'slashy',
    client: 'Slashy (YC S25)',
  },
  {
    id: 's2',
    kind: 'client-video',
    category: ProjectCategory.VIDEO,
    title: 'To-Dos Demo Video',
    subcategory: 'Product Demo',
    youtubeId: '00Znaw4x9EE',
    format: 'horizontal',
    description: 'Feature demo walking through the Slashy to-do flow end to end.',
    clientSlug: 'slashy',
    client: 'Slashy (YC S25)',
  },

  // --- SHORT-FORM ---
  {
    id: 'v1',
    kind: 'short',
    subcategory: 'AI & TECH',
    youtubeId: '8Z7fMbeDNgo',
    videoUrl: 'https://youtube.com/shorts/8Z7fMbeDNgo',
    format: 'vertical',
  },
  {
    id: 'v2',
    kind: 'short',
    subcategory: 'AVIATION',
    youtubeId: 'Om72QAs5ybA',
    videoUrl: 'https://youtube.com/shorts/Om72QAs5ybA',
    format: 'vertical',
  },
  {
    id: 'v3',
    kind: 'short',
    subcategory: 'FITNESS',
    youtubeId: '8_BwNlhxXDQ',
    videoUrl: 'https://youtube.com/shorts/8_BwNlhxXDQ',
    format: 'vertical',
  },
  {
    id: 'v4',
    kind: 'short',
    subcategory: 'STARTUP',
    youtubeId: 'YPWHUoTok3I',
    videoUrl: 'https://www.youtube.com/shorts/YPWHUoTok3I',
    format: 'vertical',
  },
  {
    id: 'v5',
    kind: 'short',
    subcategory: 'AI & TECH',
    youtubeId: '69x4OXNw3I8',
    videoUrl: 'https://youtube.com/shorts/69x4OXNw3I8',
    format: 'vertical',
  },
  {
    id: 'v6',
    kind: 'short',
    subcategory: 'COURSE',
    youtubeId: 'dZ1iRUK0Knk',
    videoUrl: 'https://youtube.com/shorts/dZ1iRUK0Knk',
    format: 'vertical',
  },

  // --- DESIGN ---
  {
    id: 'g5',
    kind: 'design',
    title: 'Back To Fitness',
    category: ProjectCategory.GRAPHIC,
    subcategory: 'Social Media',
    thumbnail: '/back-to-fitness.webp',
    format: 'vertical',
    description: 'Gym comeback creative with bold typography for a fitness coach.',
    tools: ['Photoshop']
  },
  {
    id: 'g6',
    kind: 'design',
    title: 'Fly By Wire Explained',
    category: ProjectCategory.GRAPHIC,
    subcategory: 'Thumbnail Design',
    thumbnail: '/fly-by-wire.webp',
    format: 'vertical',
    description: 'Cover design for an aviation explainer on fly-by-wire flight controls.',
    tools: ['Photoshop']
  },
  {
    id: 'g7',
    kind: 'design',
    title: 'Temporary Medically Unfit',
    category: ProjectCategory.GRAPHIC,
    subcategory: 'Thumbnail Design',
    thumbnail: '/tmu-thumbnail.webp',
    format: 'vertical',
    description: 'Story-driven cover for an aviation medical-recovery short.',
    tools: ['Photoshop']
  },
  {
    id: 'g8',
    kind: 'design',
    title: 'VDGS Explained',
    category: ProjectCategory.GRAPHIC,
    subcategory: 'Thumbnail Design',
    thumbnail: '/vdgs-thumbnail.webp',
    format: 'vertical',
    description: 'Cover design explaining the visual docking guidance system pilots use at the gate.',
    tools: ['Photoshop']
  }
];

/* SERVICES - named after what a founder is approving on an invoice,
   not after the software used to make it. */
export const SERVICES: Service[] = [
  {
    slug: 'product-demo',
    title: 'Product demo video',
    description:
      'Your product doing the thing it does, in 60 to 90 seconds, so a stranger understands it without a call.',
    deliverables: ['Screen capture direction', 'Script pass', 'Motion + captions', 'Cutdowns for socials'],
    icon: MonitorPlay
  },
  {
    slug: 'launch-film',
    title: 'Launch & announcement films',
    description:
      'The video that carries a launch day: Product Hunt, a funding note, a new release.',
    deliverables: ['Concept + storyboard', 'Edit + sound design', 'Colour grade', 'Platform variants'],
    icon: Rocket
  },
  {
    slug: 'ad-creative',
    title: 'Paid-social ad creative',
    description:
      'Testable ad units built to survive the first three seconds. Several hooks per concept, so you have something to A/B.',
    deliverables: ['3 to 5 hook variants', '9:16 / 1:1 / 16:9', 'Caption burn-in', 'Iteration on winners'],
    icon: Smartphone
  },
  {
    slug: 'explainers',
    title: 'Product explainers & motion',
    description:
      'Motion that does explanatory work: UI walkthroughs, animated diagrams, onboarding sequences.',
    deliverables: ['Animated UI', 'Lower thirds + titles', 'Diagram animation', 'Source project files'],
    icon: Zap
  },
  {
    slug: 'channel-content',
    title: 'Founder & brand channel content',
    description:
      'Ongoing content for a founder-led channel: long-form edits, the covers that earn the click, a repeatable format.',
    deliverables: ['Long-form edit', 'Cover design', 'Shorts cutdowns', 'Format guidelines'],
    icon: Film
  },
  {
    slug: 'brand-systems',
    title: 'Brand & visual systems',
    description:
      'The identity underneath all of it, so the tenth video still looks like it came from the same company as the first.',
    deliverables: ['Logo + wordmark', 'Type + colour system', 'Motion guidelines', 'Template kit'],
    icon: Palette
  }
];

/* CLIENTS - one collection. Kind comes from `type`, never from an id
   prefix. Audience figures are the real published counts. */
export const CLIENTS: Client[] = [
  {
    slug: 'slashy',
    name: 'Slashy',
    type: ClientType.STARTUP,
    handle: 'slashy.com',
    link: 'https://www.slashy.com/',
    badge: 'YC S25',
    logo: '/avatars/slashy.svg'
  },
  {
    slug: 'lazestore',
    name: 'Lazestore',
    type: ClientType.BRAND,
    handle: 'Ecommerce clothing brand',
    link: 'https://www.lazestore.in/',
    badge: 'Ecommerce',
    logo: '/logo%20BlWh.png'
  },
  {
    slug: 'aviator-vinay',
    name: 'Aviator Vinay',
    type: ClientType.CREATOR,
    handle: '@aviator_vinay',
    link: 'https://www.instagram.com/aviator_vinay/',
    avatar: '/avatars/aviator-vinay.webp',
    platform: 'Instagram',
    audience: 220000
  },
  {
    slug: 'manik-verma',
    name: 'Manik Verma',
    type: ClientType.CREATOR,
    handle: '@manikk.ai',
    link: 'https://www.instagram.com/manikk.ai/',
    avatar: '/avatars/manik-verma.webp',
    platform: 'Instagram',
    audience: 139000
  },
  {
    slug: 'sarath-penumuru',
    name: 'Sarath Penumuru',
    type: ClientType.CREATOR,
    handle: '@coachsarathpenumuru',
    link: 'https://www.instagram.com/coachsarathpenumuru',
    avatar: '/avatars/sarath-penumuru.webp',
    platform: 'Instagram',
    audience: 3317
  },
  {
    slug: 'techiemant',
    name: 'Techiemant',
    type: ClientType.CREATOR,
    handle: '@techiemant',
    link: 'https://www.instagram.com/techiemant/',
    avatar: '/avatars/techiemant.webp',
    platform: 'Instagram',
    audience: 2600
  },
  {
    slug: 'bhavya-soni',
    name: 'Bhavya Soni',
    type: ClientType.CREATOR,
    handle: '@bhavyasoni.in',
    link: 'https://www.instagram.com/bhavyasoni.in/',
    avatar: '/avatars/bhavya-soni.jpg',
    platform: 'Instagram',
    audience: 62300
  }
];

/* ─────────────────────────────────────────────────────────────
   CASE STUDIES

   Only Slashy has one, because only Slashy has work to show. Lazestore
   is a real client but there are no deliverables on file for them, so
   there's no page — an empty case study is worse than none.

   `problem` and `approach` are deliberately absent. I don't know what
   brief you were given or how you approached it, and inventing that
   narrative would put words in a real client's mouth. The template
   renders without them and picks them up the moment you fill them in.
   Same for `results` and `testimonial`.
   ───────────────────────────────────────────────────────────── */
export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'slashy',
    clientSlug: 'slashy',
    year: 2025,
    summary:
      'Two product demos for a YC-backed workspace tool, cut to make the product legible to founders in under two minutes.',
    projectIds: ['s1', 's2'],
    serviceSlugs: ['product-demo', 'explainers'],
    deliverables: ['Ganola product demo', 'To-Dos feature demo']
    // problem: 'what they came to you with'
    // approach: ['the calls you made, in order']
    // results:  [{ metric: 'Signups from the demo', value: '...', source: '...' }]
    // testimonial: { quote: '...', author: '...', role: '...' }
  }
];

/* Selectors. Filtering lives here, not in the render path. */

export const getCaseStudy = (slug: string): CaseStudy | undefined =>
  CASE_STUDIES.find((c) => c.slug === slug);

export const getClient = (slug: string): Client | undefined =>
  CLIENTS.find((c) => c.slug === slug);

export const getProject = (id: string): Project | undefined =>
  PROJECTS.find((p) => p.id === id);

export const getService = (slug: string): Service | undefined =>
  SERVICES.find((s) => s.slug === slug);

/** The case study for a client, if one exists. */
export const caseStudyForClient = (clientSlug: string): CaseStudy | undefined =>
  CASE_STUDIES.find((c) => c.clientSlug === clientSlug);

export const worksByKind = (kind: WorkKind): Project[] =>
  PROJECTS.filter((p) => p.kind === kind);

export const clientsByType = (type: ClientType): Client[] =>
  CLIENTS.filter((c) => c.type === type);

export const businessClients = (): Client[] =>
  CLIENTS.filter((c) => c.type === ClientType.STARTUP || c.type === ClientType.BRAND);

/* Ordered by reach, largest first. Sorted here rather than by hand in the
   array above, so updating a follower count reorders the section on its own
   and the list can never drift out of order. Anyone without a count sorts
   last rather than to the top. */
export const creatorClients = (): Client[] =>
  clientsByType(ClientType.CREATOR).sort((a, b) => (b.audience ?? 0) - (a.audience ?? 0));

/** Combined published reach across creator channels. Derived, never hand-typed. */
export const combinedCreatorReach = (): number =>
  creatorClients().reduce((total, c) => total + (c.audience ?? 0), 0);
