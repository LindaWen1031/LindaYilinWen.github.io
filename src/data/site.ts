/**
 * Everything about *you* lives here.
 * Editing this file changes the site copy — you never need to touch a component.
 */
export const site = {
  name: 'Linda Yilin Wen',
  /** Shown under your name in the nav and on About. */
  role: 'AI Research Product Manager',
  org: 'Microsoft Research',

  /** The big statement on the landing page. Keep it to one or two lines. */
  heroStatement:
    'I transform frontier research on multimodal generative AI into global-scale products that redefine how people create and interact.',

  /** A short supporting line under the hero statement. */
  heroSubline:
  'Hi there, welcome to my research and design portfolio. I am an AI research product manager at Microsoft Research. I lead interdisciplinary efforts in driving frontier research in world models, multimodal generative AI, and computer vision. I\'ve shipped AI-powered features for enterprise and consumer-facing products in Microsoft Copilot, Word, Seeing AI, and Xbox. My research insights have been published in leading academic venues such as Nature and CHI.',

  /** Used for <meta description>, search results, and link previews. */
  description:
    'Research and design portfolio of Linda Yilin Wen, an AI research product manager. Projects spanning across world models, design research and human-centered AI.',

  /** Shown on the About page. Each string becomes a paragraph. */
  about: [
    'Navigating a career across international relations, design and now AI research, I\'ve always been motivated by an urge to serve the most underrepresented people — creating scalable, innovative tools for empowerment, and bringing about meaningful systemic change.',
    'I\'ve brought this ethos to my work at Microsoft. I created computer-vision technologies to increase accessibility for people who are blind or low vision — work selected for a Fast Company Innovation by Design Award. I\'ve also worked on the representation of people with disabilities, architecting the data governance structure for AI image generation. You can read more about our work <a href="https://www.microsoft.com/en-us/research/story/find-my-things/" target="_blank" rel="noopener">here</a>.',
    'Now I\'m focused on creating tools for storytellers: bringing forth new stories, and letting more people read and experience interactive worlds they relate to — unlocking new forms of storytelling. I work on an interdisciplinary AI research team advancing multimodal AI, powered by world models.',
    'Outside work, you\'ll find me on the salsa and bachata dance floor, or cooking up a new recipe inspired by my favourite cuisines — Sichuanese and Italian. My footprints span 51 countries, and I\'ve lived and worked in China, the US, the UK, Mauritius and Spain. I speak Mandarin, English, Spanish and French fluently.',
  ],

  /** Short bullets shown on About. Keep them punchy. */
  focus: [
    'Productizing cutting-edge AI models',
    'Leading multidisciplinary AI research teams',
    'Human-centered AI practice and responsible deployment',
  ],

  /**
   * Publications shown on the About page.
   * Each entry: title, authors, venue, year, and an optional url.
   * - Leave `url: ''` and the title renders as plain text (no dead link).
   * - Leave the whole array `[]` and the Publications section is hidden.
   * TODO (Linda): replace these placeholders with your real citations + links.
   */
  publications: [
    {
      title: 'World and human action models towards gameplay ideation',
      authors:
        'Anssi Kanervisto, Dave Bignell, Linda Yilin Wen, Martin Grayson, Raluca Georgescu, et al.',
      venue: 'Nature',
      year: '2025',
      url: 'https://doi.org/10.1038/s41586-025-08600-3',
    },
    {
      title:
        'Find My Things: Personalized Accessibility through Teachable AI for People who are Blind or Low Vision',
      authors: 'Linda Yilin Wen, et al.',
      venue: 'CHI Extended Abstracts',
      year: '2024',
      url: 'https://doi.org/10.1145/3613905.3648641',
    },
    {
      title:
        'Understanding Personalized Accessibility through Teachable AI: Designing and Evaluating Find My Things for People who are Blind or Low Vision',
      authors:
        'Cecily Morrison, Martin Grayson, Rita Faia Marques, Daniela Massiceti, Camilla Longden, Linda Yilin Wen, Ed Cutrell',
      venue: 'ACM SIGACCESS (ASSETS)',
      year: '2023',
      url: 'https://doi.org/10.1145/3597638.3608395',
    },
  ],

  /**
   * News / press shown on the About page.
   * Each entry: outlet, title, date, and an optional url.
   * - Leave `url: ''` and the title renders as plain text (no dead link).
   * - Leave the whole array `[]` and the News/Press section is hidden.
   * TODO (Linda): replace these placeholders with your real press items + links.
   */
  press: [
    {
      outlet: 'TODO — outlet (e.g. Fast Company)',
      title: 'TODO — headline (e.g. Innovation by Design Award)',
      date: '', // TODO: e.g. '2023'
      url: '', // TODO: paste the article URL
    },
    {
      outlet: 'TODO — outlet (e.g. Microsoft Research)',
      title: 'TODO — headline (e.g. the Find My Things story)',
      date: '',
      url: '',
    },
  ],

  /** Footer contact. Leave as '' to hide it; add a real address to show it. */
  email: '',
  links: [
    // TODO: your LinkedIn handle goes on the end of this URL.
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/yilin-linda-wen/' },
    { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=uY5tPFIAAAAJ&hl=en' },
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
  'ai-accessibility': 'AI for accessibility',
};
