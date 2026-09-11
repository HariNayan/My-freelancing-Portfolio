import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './src/style.css';
import App from './App';

/* Opt in to scroll-reveal animations only once we know JS is running.
   Set before the first render so there is no flash of visible-then-hidden
   content; if this line never executes, the CSS leaves everything visible. */
document.documentElement.classList.add('js-reveal');

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

const tree = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* Routes are prerendered to static HTML at build time, so in production the
   container already holds real markup and we hydrate it. createRoot would
   discard that markup and re-render from scratch, which works but throws
   away the prerender and flashes.

   In dev there's nothing to hydrate, so fall back to a fresh root. */
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, tree);
} else {
  createRoot(rootElement).render(tree);
}
