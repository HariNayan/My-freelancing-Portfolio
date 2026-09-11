import path from 'path';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

import { cloudflare } from "@cloudflare/vite-plugin";


export default defineConfig(({ command, isSsrBuild }) => ({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  /* The Cloudflare plugin runs on the client build only.

     Not during the SSR pass: it emits a wrangler.json and .assetsignore into
     dist-ssr, a throwaway directory the prerender script deletes.

     And not during dev: there is no Worker script here — wrangler.jsonc only
     configures static assets — so the plugin's only job is shaping the built
     output. Left on in dev it also enforced not_found_handling, and since the
     dev server has no prerendered files, every deep link (/work,
     /work/slashy) returned an empty 404 and the app never booted. Off, Vite's
     own SPA fallback serves index.html and client routing takes over. */
  plugins: [
    tailwindcss(),
    react(),
    ...(command === 'build' && !isSsrBuild ? [cloudflare()] : []),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  build: isSsrBuild
    ? {
        // Predictable filename: scripts/prerender.mjs imports this directly,
        // and a content hash would make the path unguessable.
        rollupOptions: {
          output: {
            entryFileNames: 'entry-server.js',
          },
        },
      }
    : {},
}));
