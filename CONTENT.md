# Adding and editing content

Everything on this site is edited from a handful of plain-text files. You never
need to touch a component.

---

## Add a new project

1. Copy `src/content/projects/_template.md` and rename it, e.g.
   `04-my-new-project.md`.
   **The filename becomes the URL**: `/work/04-my-new-project`.
2. Fill in the frontmatter (the block between the `---` lines).
3. Create `public/media/04-my-new-project/` and drop your images in.
   Reference them as `/media/04-my-new-project/cover.jpg`.
4. Set `draft: false`.
5. Commit and push. The site rebuilds and deploys itself.

That's it. The home page, the work index, the theme filters, and the
previous/next links all update automatically.

---

## Frontmatter reference

| Field | Required | What it does |
| --- | --- | --- |
| `title` | yes | Page heading and card title |
| `role` | yes | Your role, shown in the facts strip |
| `org` | no | Defaults to `Microsoft Research` |
| `timeframe` | yes | Free text, e.g. `2024 — present` |
| `summary` | yes | One-line hook; also the page meta description |
| `themes` | yes | One or more of `productization`, `team-leadership`, `human-centered`, `design-research`, `responsible-ai` |
| `cover` | no | `/media/<slug>/cover.jpg`, ~1600px wide |
| `coverAlt` | if `cover` is set | Alt text — the build fails without it |
| `featured` | no | `true` puts it on the home page. Keep this to three. |
| `order` | no | Lower sorts first. Defaults to `99`. |
| `metrics` | no | List of `{ label, value }` outcome chips |
| `links` | no | List of `{ label, url }` external links |
| `draft` | no | `true` removes it from the published site entirely |

A typo in any of these fails the build with a message telling you exactly which
file and field is wrong — so you can't quietly ship a broken page.

---

## Case study structure

The three placeholder projects all follow the same spine. Sticking to it makes
the site read as one coherent body of work:

1. **Context** — what was the situation, why did it matter
2. **My role** — what *you* owned, specifically
3. **What we did** — the work, the trade-offs
4. **Human-centered decisions** — where evidence about people changed the product
5. **Outcome** — what shipped, public-safe
6. **What I would do differently** — honest and specific

Use `##` for these headings and `###` for anything nested.

---

## Images

- Put them in `public/media/<project-slug>/`.
- ~1600px wide, JPG or WebP. Covers look best around 16:9 or 4:3.
- In a `.md` file, use standard Markdown and the image sits inside the text
  column: `![Alt text](/media/my-project/photo.jpg)`
- For a **wide, captioned** image that breaks out past the text column, rename
  the file from `.md` to `.mdx` (nothing else changes) and use:

  ```mdx
  import Figure from '../../components/Figure.astro';

  <Figure
    src="/media/my-project/workshop.jpg"
    alt="Participants clustering sticky notes on a wall"
    caption="Synthesis session, day two."
    wide
  />
  ```

---

## Edit the site copy

Your name, role, hero statement, About paragraphs, email, and social links all
live in **`src/data/site.ts`**. Edit that one file.

---

## Change the look

All colours, fonts, spacing, and motion timings are CSS custom properties in
**`src/styles/tokens.css`**. Change a value there and it applies everywhere.

To tune the landing-page backdrop, edit the `CONFIG` block at the top of the
script in **`src/components/GradientField.astro`** — how many smears, how thin
and elongated they are, the diagonal they travel along, and drift speed are all
there. The pointer feel is governed by four values: `pointerEase` (how far the
field lags behind the mouse — lower is calmer), `cursorRadius` (how local the
ripple is), `cursorPush` (how hard it shoves), and `springBack` / `damping`
(how slowly it settles). The colours it paints with are the `--hero-*`
properties in `tokens.css`. To remove the effect entirely, delete that
component and its single usage in `src/pages/index.astro`.

---

## Editing from the GitHub website

You don't need a local checkout for text edits. Open the file on github.com,
click the pencil icon, edit, and commit to `main`. The deploy runs
automatically and the site updates in a couple of minutes.
