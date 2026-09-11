import { matchRoute } from './router';
import { CASE_STUDIES, getCaseStudy, getClient } from '../constants';

export interface RouteMeta {
  title: string;
  description: string;
  /** Path only, e.g. "/work/slashy". */
  path: string;
}

const HOME: RouteMeta = {
  title: 'Hari Nayan | Product demo & launch video for startups',
  description:
    'Product demos, launch films and ad creative for startups and brands. Retention craft proven on channels with audiences over 200,000.',
  path: '/',
};

/* One source of truth for per-route head tags.

   The browser reads this through useHead on navigation; the prerender
   script reads the same function at build time to bake the tags into each
   route's HTML file. Keeping both on one function is the point — a second
   copy would drift, and the drift would only ever show up in a link
   preview, which is the last place anyone looks. */
export function metaForPath(pathname: string): RouteMeta {
  const route = matchRoute(pathname);

  switch (route.name) {
    case 'home':
      return HOME;

    case 'work':
      return {
        title: 'Work | Hari Nayan',
        description:
          'Product demos, launch films, short-form and design for startups, brands and creators.',
        path: '/work',
      };

    case 'case': {
      const study = getCaseStudy(route.slug);
      const client = study ? getClient(study.clientSlug) : undefined;
      if (!study || !client) break;
      return {
        title: `${client.name} — case study | Hari Nayan`,
        description: study.summary,
        path: `/work/${study.slug}`,
      };
    }

    default:
      break;
  }

  return {
    title: 'Page not found | Hari Nayan',
    description: 'That page does not exist.',
    path: pathname,
  };
}

/** Paths baked to static HTML at build time. Derived, so adding a case
 *  study to CASE_STUDIES gets it prerendered without touching this list. */
export const PRERENDER_PATHS: string[] = [
  '/',
  '/work',
  ...CASE_STUDIES.map((study) => `/work/${study.slug}`),
  // Written to dist/404.html and served by Cloudflare with a real 404
  // status, so an unknown URL gets the styled page *and* the right code.
  '/404',
];
