import { useEffect } from 'react';

const SITE = 'https://harinayan.me';
const DEFAULT_OG = `${SITE}/og-image.png`;

interface Head {
  title: string;
  description: string;
  /** Path only, e.g. "/work/slashy". */
  path: string;
  image?: string;
}

function setMeta(selector: string, attr: 'content' | 'href', value: string) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

/* Rewrites the head for the current route.

   index.html ships the home page's tags, which is what a crawler sees
   before JavaScript runs. On a client-side route change nothing updates
   those by itself, so every page would otherwise claim to be the home
   page — same title in the tab, same canonical, same share card.

   Link unfurlers don't execute JavaScript, so these updates do not fix
   sharing previews for sub-routes. That needs prerendering at build
   time (Phase 4); this covers the browser and JS-executing crawlers. */
export function useHead({ title, description, path, image = DEFAULT_OG }: Head) {
  useEffect(() => {
    const url = `${SITE}${path}`;

    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('link[rel="canonical"]', 'href', url);

    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:image"]', 'content', image);

    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', image);
  }, [title, description, path, image]);
}
