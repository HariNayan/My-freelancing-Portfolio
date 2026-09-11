import { LucideIcon } from 'lucide-react';

export enum ProjectCategory {
  VIDEO = 'Video Editing',
  GRAPHIC = 'Graphic Design'
}

/* What kind of work a piece is. Replaces the previous convention of
   encoding this in the id string ("s1" meant startup), which the type
   system could not check and a rename would silently break. */
export type WorkKind = 'client-video' | 'short' | 'design';

export interface Project {
  id: string;
  kind: WorkKind;
  /** Links a piece of work to a Client by slug, replacing the free-text
   *  `client` string that used to be the only association. */
  clientSlug?: string;
  title?: string;
  category?: ProjectCategory;
  subcategory?: string; // e.g., "Short-form", "Brand Identity"
  thumbnail?: string; // Optional now, as video projects might rely solely on youtubeId
  description?: string; // Short description for card
  client?: string;

  // Video specific
  youtubeId?: string; // The ID from the YouTube URL
  format?: 'vertical' | 'horizontal'; // Aspect ratio control

  // Detailed View Data
  overview?: string;
  objective?: string;
  role?: string;
  tools?: string[];
  approach?: string;
  videoUrl?: string; // Optional, if it's a video project
  imageGallery?: string[]; // If it's graphic design
}

/* ─────────────────────────────────────────────────────────────
   Who the work was for. This replaces the previous split between
   a typed CLIENTS array and an untyped STARTUP_CLIENTS literal —
   one type, one collection, kind carried by `type` rather than by
   an id prefix.
   ───────────────────────────────────────────────────────────── */
export enum ClientType {
  STARTUP = 'startup',
  BRAND = 'brand',
  CREATOR = 'creator'
}

export interface Client {
  /** Stable identity. Will become the URL segment in /work/:slug. */
  slug: string;
  name: string;
  type: ClientType;
  /** Secondary line under the name: a domain, a handle, or a descriptor. */
  handle: string;
  link: string;
  /** Short credential shown as a pill, e.g. "YC S25". */
  badge?: string;
  logo?: string;
  avatar?: string;
  platform?: 'Instagram' | 'YouTube';
  /** Real, checkable reach. Used to argue retention craft, not vanity. */
  audience?: number;
}

/* A measured outcome. Optional everywhere it appears: the case study
   template renders craft-led when there are none and upgrades itself when
   real numbers arrive, so pages can ship before the data exists. */
export interface Result {
  metric: string;
  value: string;
  /** Where the number came from, so it can be checked later. */
  source?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface CaseStudy {
  /** Identity and URL segment: /work/{slug}. */
  slug: string;
  clientSlug: string;
  year: number;
  /** One line, used on the index card. */
  summary: string;
  /** Ids of the Projects shown on the page, in order. */
  projectIds: string[];
  /** Slugs of the ServiceOfferings this engagement drew on. */
  serviceSlugs: string[];
  problem?: string;
  approach?: string[];
  deliverables?: string[];
  results?: Result[];
  testimonial?: Testimonial;
}

/* A service named after the outcome a buyer is purchasing. */
export interface Service {
  slug: string;
  /** What it's called on an invoice. */
  title: string;
  /** The job it does, in the buyer's words. */
  description: string;
  /** Concrete artefacts handed over. */
  deliverables: string[];
  icon: LucideIcon;
}
