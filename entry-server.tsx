import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { metaForPath, PRERENDER_PATHS, type RouteMeta } from './lib/routeMeta';

/* Server entry used only at build time by scripts/prerender.mjs.

   The component tree is already SSR-safe: every browser API call sits
   inside a useEffect or an event handler, and the one module-scope
   window read (the router's initial path) is guarded. Effects don't run
   during renderToString, which is why the reveal elements come out
   without `is-visible` — that's correct, because `js-reveal` is only
   added to <html> by the client entry, so static HTML renders fully
   visible. */

export function render(path: string): { html: string; meta: RouteMeta } {
  return {
    html: renderToString(<App initialPath={path} />),
    meta: metaForPath(path),
  };
}

export { PRERENDER_PATHS };
