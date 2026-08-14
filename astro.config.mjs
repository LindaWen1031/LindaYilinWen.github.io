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
// The site is served from the custom domain lindayilinwen.com, which Pages
// serves at the root — so BASE is '/', not the repo-name subpath it used
// while the site lived at LindaWen1031.github.io/LindaYilinWen.github.io.
//
// The domain is set on the Pages configuration itself, not by public/CNAME:
// this repo publishes from a GitHub Actions workflow, and GitHub ignores a
// CNAME file for Actions-based publishing. The file is kept as a record of
// intent (and would take over if the publishing source ever became a branch).
// Set/clear the real value with:
//   gh api -X PUT repos/:owner/:repo/pages -f cname=lindayilinwen.com
//
// If the domain is ever removed, SITE goes back to
// 'https://LindaWen1031.github.io' and BASE to '/LindaYilinWen.github.io'.
// ─────────────────────────────────────────────────────────────────────────────
const SITE = 'https://lindayilinwen.com';
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
