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
    'I transform frontier research on multimodal generative AI into global-scale products that redefine how people create and interact, bridging design, user research, and strategy to deliver human-centered, delightful AI experiences.',

  /** A short supporting line under the hero statement. */
  heroSubline:
  'I lead interdisciplinary teams in driving frontier research in world modeling, multimodal generative AI, and computer vision. I\'ve shipped AI-powered features for enterprise and consumer-facing products in Microsoft Copilot, Word, Seeing AI, and Xbox. My research insights have been published in leading academic venues such as Nature and CHI.',

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

  /** Footer contact. Leave any entry out and it simply will not render.
   *  TODO: swap in the address you actually want strangers emailing. */
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
};
