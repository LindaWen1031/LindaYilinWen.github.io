/**
 * Everything about *you* lives here.
 * Editing this file changes the site copy — you never need to touch a component.
 */
export const site = {
  name: 'Linda Wen',
  /** Shown under your name in the nav and on About. */
  role: 'Research Product Manager',
  org: 'Microsoft Research',

  /** The big statement on the landing page. Keep it to one or two lines. */
  heroStatement:
    'I turn frontier AI research into products people actually want to use.',

  /** A short supporting line under the hero statement. */
  heroSubline:
    'Research Product Manager at Microsoft Research, with a background in design research. I lead multidisciplinary teams that take cutting-edge models from paper to product — keeping people at the centre of every decision.',

  /** Used for <meta description>, search results, and link previews. */
  description:
    'Portfolio of a Research Product Manager at Microsoft Research — productizing frontier AI models, leading multidisciplinary research teams, and practising human-centered AI.',

  /** Shown on the About page. Each string becomes a paragraph. */
  about: [
    'I am a Research Product Manager at Microsoft Research, where I work at the seam between what is newly possible and what is genuinely useful.',
    'I started out as a design researcher, and that training still shapes how I work: I would rather sit with ten people using an early prototype than read a hundred rows of telemetry. Both matter, but only one tells you why.',
    'These days I lead multidisciplinary teams — researchers, engineers, designers — taking frontier models from a paper or a demo into something that holds up in front of real users, under real constraints, with real accountability.',
    'The through-line across everything below is the same question: what does this technology actually do for the person on the other side of it?',
  ],

  /** Short bullets shown on About. Keep them punchy. */
  focus: [
    'Productizing cutting-edge AI models',
    'Leading multidisciplinary AI research teams',
    'Human-centered AI practice and responsible deployment',
  ],

  /** Footer contact. Leave any entry out and it simply will not render.
   *  TODO: swap in the address you actually want strangers emailing. */
  email: 'you@example.com',
  links: [
    // TODO: your LinkedIn handle goes on the end of this URL.
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/YOUR-HANDLE' },
    { label: 'GitHub', url: 'https://github.com/LindaWen1031' },
    // { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=...' },
  ],

  /** Small print in the footer. */
  disclaimer: 'Views are my own and do not represent my employer.',
};

/** Human-readable names for the theme tags used in project frontmatter. */
export const themeLabels: Record<string, string> = {
  productization: 'Productizing AI',
  'team-leadership': 'Leading teams',
  'human-centered': 'Human-centered AI',
  'design-research': 'Design research',
  'responsible-ai': 'Responsible AI',
};
