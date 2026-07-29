# Portfolio

A personal portfolio site. Static, fast, and edited entirely through Markdown and
one settings file — no CMS, no database, no monthly bill.

Built with [Astro](https://astro.build), deployed to GitHub Pages by a GitHub
Actions workflow on every push to `main`.

---

## First-time setup

You only do this once.

1. **Create a repo on your personal GitHub account** named `portfolio`, public.
   Do *not* use a work/corporate account.
2. **Push this code to it:**
   ```bash
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
3. **Point the site at your URL.** Open `astro.config.mjs` and change:
   ```js
   const SITE = 'https://<your-username>.github.io';
   const BASE = '/portfolio';        // must match the repo name
   ```
4. **Turn on Pages.** Repo → Settings → Pages → *Build and deployment* →
   Source: **GitHub Actions**.
5. **Fill in your details** in `src/data/site.ts` — name, role, hero statement,
   About paragraphs, email, social links.
6. Push. A couple of minutes later the site is live at
   `https://<your-username>.github.io/portfolio`.

### Later: a custom domain

Buy a domain, add a `CNAME` file to `public/` containing just the domain, set
`SITE` to `https://yourdomain.com` and `BASE` to `'/'`, then add the domain in
repo Settings → Pages. Nothing else changes.

---

## Day-to-day

**Adding a project, editing copy, swapping images →
see [CONTENT.md](./CONTENT.md).** That is the guide you actually want.

Short version:

| I want to… | Edit this |
| --- | --- |
| Add a project | Copy `src/content/projects/_template.md` |
| Change my name, bio, hero text, links | `src/data/site.ts` |
| Swap an image | Drop a file in `public/media/<project>/` |
| Change colours, fonts, spacing | `src/styles/tokens.css` |
| Tune or remove the landing animation | `src/components/ParticleField.astro` |

You can do all of this from the GitHub website — open the file, click the
pencil, commit. The site rebuilds itself.

---

## Running it locally

Requires Node 22 or newer.

```bash
npm install     # once
npm run dev     # http://localhost:4321/portfolio
npm run build   # production build into dist/
npm run preview # serve the production build
npm run check   # type-check everything
```

---

## How it is put together

```
src/
├── content/projects/     one Markdown file per case study  ← your content
├── content.config.ts     the frontmatter schema (validated at build time)
├── data/site.ts          your name, bio, links             ← your content
├── styles/tokens.css     every colour, size, and timing    ← the whole look
├── components/           Nav, Footer, ProjectCard, Figure, ParticleField
├── layouts/BaseLayout    the page shell, meta tags, scroll reveal
└── pages/                home, /work, /work/[slug], /about, 404
public/media/             project images                    ← your content
```

Three things worth knowing:

- **The schema is strict on purpose.** A typo in frontmatter fails the build with
  a message naming the file and field, so a broken page never reaches the live
  site. Alt text is mandatory whenever there is a cover image.
- **The site lives at a sub-path** (`/portfolio`), so every internal link goes
  through the `url()` helper in `src/lib/url.ts`. The components already do
  this — you never have to think about it.
- **The landing animation is decorative and self-contained.** It is
  `aria-hidden`, pauses when off-screen or when the tab is hidden, caps
  device-pixel-ratio, and is switched off entirely for anyone who has asked
  their system to reduce motion.

---

## A note on content

The case studies are written at a level that is safe to publish: outcomes,
decisions, and craft — no unreleased internals, no confidential metrics, no
unpublished user research. Keep it that way when you add new work.
