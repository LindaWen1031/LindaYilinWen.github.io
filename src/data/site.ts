/**
 * Everything about *you* lives here.
 * Editing this file changes the site copy — you never need to touch a component.
 */
export const site = {
  name: 'Linda Yilin Wen',
  /** Shown under your name in the nav and on About. */
  role: 'AI Research Product Manager',
  /**
   * Current affiliation, shown after your role in the nav and on About.
   * Leave as '' when you have no current affiliation to name — both places
   * drop the separator and show the role alone.
   */
  org: '',

  /** The big statement on the landing page. Keep it to one or two lines. */
  heroStatement:
    'I transform frontier AI research into global-scale products that redefine how people create and interact.',

  /**
   * A short supporting line under the hero statement.
   * Rendered with `set:html`, so inline anchors are allowed.
   */
  heroSubline:
    'Hi there, welcome to my research and design portfolio. I am an AI research product manager, most recently with four years of experience at Microsoft Research. I\'ve led interdisciplinary efforts in driving frontier research in world models, multimodal generative AI, and computer vision. I\'ve shipped AI-powered features for enterprise and consumer-facing products in <a href="https://copilot.microsoft.com/labs/experiments/copilot-gaming-experiences" target="_blank" rel="noopener">Microsoft Copilot</a>, Word, <a href="https://www.microsoft.com/en-us/research/story/find-my-things/" target="_blank" rel="noopener">Seeing AI</a>, and <a href="https://www.microsoft.com/en-us/research/project/pidm-predictive-inverse-dynamic-models/" target="_blank" rel="noopener">Xbox</a>. My research insights have been published in leading academic venues such as <a href="https://doi.org/10.1038/s41586-025-08600-3" target="_blank" rel="noopener">Nature</a> and <a href="https://doi.org/10.1145/3613905.3648641" target="_blank" rel="noopener">CHI</a>.',

  /** Used for <meta description>, search results, and link previews. */
  description:
    'Research and design portfolio of Linda Yilin Wen, an AI research product manager. Projects spanning across world models, design research and human-centered AI.',

  /** Shown on the About page. Each string becomes a paragraph. */
  about: [
    'Navigating a career across international relations, design and now AI research, I\'ve always been motivated by an urge to serve the most underrepresented people — creating scalable, innovative tools for empowerment, and bringing about meaningful systemic change.',
    'I brought this ethos to the four years I spent at Microsoft Research. I created computer-vision technologies to increase accessibility for people who are blind or low vision — work selected for a <a href="https://www.fastcompany.com/91128700/accessible-design-innovation-by-design-2024" target="_blank" rel="noopener">Fast Company Innovation by Design Award</a>. I\'ve also worked on the representation of people with disabilities, architecting the data governance structure for AI image generation. You can read more about our work <a href="https://www.microsoft.com/en-us/research/story/find-my-things/" target="_blank" rel="noopener">here</a>.',
    'Now I\'m focused on creating tools for storytellers: bringing forth new stories, and letting more people read and experience interactive worlds they relate to — unlocking new forms of storytelling. I\'ve worked on an interdisciplinary AI research team advancing multimodal AI, powered by <a href="https://doi.org/10.1038/s41586-025-08600-3" target="_blank" rel="noopener">world models</a>.',
    'Outside work, you\'ll find me on the salsa and bachata dance floor, or cooking up a new recipe inspired by my favourite cuisines — Sichuanese and Italian. My footprints span 51 countries, and I\'ve lived and worked in China, the US, the UK, Mauritius and Spain. I speak Mandarin, English, Spanish and French fluently.',
  ],

  /** Short bullets shown on About. Keep them punchy. */
  focus: [
    'Productizing multimodal world models',
    'Leading multidisciplinary AI research teams',
    'Human-centered AI practice and responsible deployment',
  ],

  /**
   * Publications shown on the About page.
   * Each entry: title, authors, venue, year, and an optional url.
   * - Leave `url: ''` and the title renders as plain text (no dead link).
   * - Leave the whole array `[]` and the Publications section is hidden.
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
   */
  press: [
    {
      outlet: 'Bloomberg',
      title:
        'Microsoft Unveils Generative AI That Can Create Video Game Scenes',
      date: '2025',
      url: 'https://www.bloomberg.com/news/articles/2025-02-19/microsoft-unveils-generative-ai-that-can-create-video-game-scenes',
    },
    {
      outlet: 'Reuters',
      title: 'Microsoft develops AI model for videogames',
      date: '2025',
      url: 'https://www.reuters.com/technology/artificial-intelligence/microsoft-develops-ai-model-videogames-2025-02-19/',
    },
    {
      outlet: 'Microsoft Source',
      title: "15 milestones that shaped Microsoft's vision for AI",
      date: '2025',
      url: 'https://news.microsoft.com/source/features/ai/15-milestones-that-shaped-microsofts-vision-for-ai/',
    },
    {
      outlet: 'Fast Company',
      title: 'Innovation by Design 2024 — accessible design',
      date: '2024',
      url: 'https://www.fastcompany.com/91128700/accessible-design-innovation-by-design-2024',
    },
    {
      outlet: 'Fast Company',
      title: 'Innovation by Design 2024 — artificial intelligence',
      date: '2024',
      url: 'https://www.fastcompany.com/91129207/artificial-intelligence-innovation-by-design-2024',
    },
    {
      outlet: 'Microsoft Research',
      title: 'Find My Things: teachable AI for people who are blind or low vision',
      date: '2023',
      url: 'https://www.microsoft.com/en-us/research/story/find-my-things/',
    },
  ],

  /**
   * Invited talks and lectures shown on the About page.
   * Each entry: venue, title, date. `title` and `date` are optional — leave
   * them as '' and only the venue shows. Leave the array `[]` to hide the
   * section entirely.
   */
  talks: [
    { venue: 'Imperial College London', title: '', date: '' },
    { venue: 'London Design Festival', title: '', date: '' },
    { venue: 'University of Cambridge', title: '', date: '' },
    { venue: 'University of Birmingham', title: '', date: '' },
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
