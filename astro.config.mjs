// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// ─────────────────────────────────────────────────────────────────────────────
// EDIT ME when you publish.
//
//   SITE  = the origin GitHub Pages serves you from: https://<username>.github.io
//   BASE  = the repo name, with a leading slash: '/portfolio'
//
// If you later move to a custom domain (e.g. https://yourname.com), set
// SITE to that domain and change BASE to '/'.
// ─────────────────────────────────────────────────────────────────────────────
const SITE = 'https://YOUR-GITHUB-USERNAME.github.io';
const BASE = '/portfolio';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
