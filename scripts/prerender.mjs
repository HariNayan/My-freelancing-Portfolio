import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

/* Bakes each route to a static HTML file after `vite build`.

   Why this exists: link unfurlers (LinkedIn, Slack, X, iMessage) do not
   execute JavaScript. Without this, every route served the home page's
   HTML, so /work/slashy previewed with the home page's title, description
   and image — which defeats the point of having case study URLs at all.

   Google does render JS and was mostly fine either way; this is about
   everything that isn't Google. */

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');
const dist = join(root, 'dist');
const ssrDist = join(root, 'dist-ssr');

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Replace the content/href of a tag matched by a stable attribute. */
function setTag(html, matcher, attr, value) {
  const re = new RegExp(`(<[^>]*${matcher}[^>]*\\s${attr}=")([^"]*)("[^>]*>)`, 'i');
  if (!re.test(html)) {
    throw new Error(`prerender: no tag matching ${matcher} with ${attr}= in index.html`);
  }
  return html.replace(re, `$1${esc(value)}$3`);
}

async function main() {
  const templatePath = join(dist, 'index.html');
  if (!existsSync(templatePath)) {
    throw new Error('prerender: dist/index.html missing — run vite build first');
  }
  const template = readFileSync(templatePath, 'utf8');

  const { render, PRERENDER_PATHS } = await import(
    pathToFileURL(join(ssrDist, 'entry-server.js')).href
  );

  const site = 'https://harinayan.me';
  let count = 0;

  for (const path of PRERENDER_PATHS) {
    const { html, meta } = render(path);
    const url = `${site}${meta.path}`;

    let page = template;
    page = page.replace(/<title>[^<]*<\/title>/i, `<title>${esc(meta.title)}</title>`);
    page = setTag(page, 'name="description"', 'content', meta.description);
    page = setTag(page, 'rel="canonical"', 'href', url);
    page = setTag(page, 'property="og:title"', 'content', meta.title);
    page = setTag(page, 'property="og:description"', 'content', meta.description);
    page = setTag(page, 'property="og:url"', 'content', url);
    page = setTag(page, 'name="twitter:title"', 'content', meta.title);
    page = setTag(page, 'name="twitter:description"', 'content', meta.description);

    // Hydration takes over from here; the markup is for crawlers and for
    // anyone whose JS is slow or blocked.
    page = page.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    const outPath =
      path === '/404'
        ? join(dist, '404.html')
        : path === '/'
          ? join(dist, 'index.html')
          : join(dist, path, 'index.html');

    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, page, 'utf8');
    count += 1;
    console.log(`  prerendered ${path.padEnd(16)} -> ${outPath.replace(root, '.')}`);
  }

  rmSync(ssrDist, { recursive: true, force: true });
  console.log(`prerender: ${count} route${count === 1 ? '' : 's'} written`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
