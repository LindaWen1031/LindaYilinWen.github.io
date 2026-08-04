import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/**
 * The `projects` collection.
 *
 * One Markdown file in `src/content/projects/` = one case study page.
 * The schema below is validated at build time, so a typo in frontmatter fails
 * the build with a clear message rather than silently rendering a broken page.
 *
 * See CONTENT.md for the step-by-step "how do I add a project" guide.
 */
const projects = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.{md,mdx}',
    base: './src/content/projects',
  }),
  schema: z.object({
    /** Project title, shown as the page heading and on cards. */
    title: z.string(),

    /** Your role on this project, e.g. "Product Manager, model evaluation". */
    role: z.string(),

    /** Where the work happened. */
    org: z.string().default('Microsoft Research'),

    /** Free text, e.g. "2024 — present" or "2022 – 2023". */
    timeframe: z.string(),

    /** One-sentence hook. Shown on cards and used as the page meta description. */
    summary: z.string(),

    /** Tags. Must match a key in `themeLabels` in src/data/site.ts. */
    themes: z
      .array(
        z.enum([
          'productization',
          'team-leadership',
          'human-centered',
          'design-research',
          'responsible-ai',
        ]),
      )
      .min(1),

    /**
     * Optional free-text override for the "Focus" line in the page header.
     * When set, it is shown verbatim instead of the theme labels. Use this
     * when you want a longer, more specific phrasing than the theme tags.
     */
    focus: z.string().optional(),

    /**
     * Cover image. Put the file in `public/media/<slug>/` and reference it as
     * `/media/<slug>/cover.jpg` — the leading slash is handled for you.
     * Aim for ~1600px wide, JPG or WebP.
     */
    cover: z.string().optional(),

    /** Alt text is required whenever there is a cover — no exceptions. */
    coverAlt: z.string().optional(),

    /** Show this project on the home page? At most three should be featured. */
    featured: z.boolean().default(false),

    /** Lower numbers sort first, everywhere. */
    order: z.number().default(99),

    /** Optional public-safe outcome chips shown near the top of the page. */
    metrics: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
        }),
      )
      .optional(),

    /** Optional external links — papers, blog posts, product pages. */
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.url(),
        }),
      )
      .optional(),

    /** Set to true to keep a project out of the built site entirely. */
    draft: z.boolean().default(false),
  })
    .refine((d) => !d.cover || (d.coverAlt && d.coverAlt.length > 0), {
      message: 'coverAlt is required when a cover image is set.',
      path: ['coverAlt'],
    }),
});

export const collections = { projects };
