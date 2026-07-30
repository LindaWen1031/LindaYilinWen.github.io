// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// ─────────────────────────────────────────────────────────────────────────────
// EDIT ME when you publish.
//
//   SITE  = the origin GitHub Pages serves you from.
//   BASE  = the subpath the site is served under.
//
// This repo is named LindaWen1031.github.io, so Pages serves it from the
// root of that domain and BASE is just '/'. If the repo were named
// something else, BASE would need to be '/<repo-name>'.
//
// Moving to a custom domain later (e.g. https://lindawen.com) means
// changing SITE only — BASE stays '/'.
// ─────────────────────────────────────────────────────────────────────────────
const SITE = 'https://LindaWen1031.github.io';
const BASE = '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
