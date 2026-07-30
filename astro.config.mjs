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
// The '.github.io' in the repo name only buys you a root-level URL when
// the repo is named after the account exactly — here the account is
// LindaWen1031 and the repo is LindaYilinWen.github.io, so Pages serves
// this as an ordinary project site under a subpath.
//
// If you ever rename the repo to LindaWen1031.github.io, set BASE to '/'.
// Moving to a custom domain also means SITE changes and BASE becomes '/'.
// ─────────────────────────────────────────────────────────────────────────────
const SITE = 'https://LindaWen1031.github.io';
const BASE = '/LindaYilinWen.github.io';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
