/**
 * Site copy — SEO + conversion source of truth.
 * Primary intents: Lit 3 Web Components, framework-agnostic UI,
 * design tokens, React/Vue/Astro/Next.js component library.
 */

export const SITE = {
  title: 'nucleify-ui — Lit 3 Web Components for any framework',
  description:
    '50+ tree-shakeable Lit 3 components with CSS design tokens. Use one library in React, Vue, Next.js, Astro, Svelte, Solid, or plain HTML — typed events, zero proprietary runtime.',
  imageAlt: 'nucleify-ui — framework-agnostic Lit 3 Web Components with CSS design tokens',
} as const;

export const HERO = {
  badge: 'v1.0 · 50+ Components · 8 Presets · Lit 3',
  titleLine1: 'One UI library.',
  titleLine2: 'Every framework.',
  lead: 'Tree-shakeable Lit 3 Web Components with typed CSS design tokens. Drop them into React, Vue, Next.js, Astro, Svelte — or plain HTML. No lock-in. Your tokens stay yours.',
  ctaPrimary: 'Get Started',
  ctaSecondary: 'Browse Docs',
} as const;

export const PREVIEW = {
  eyebrow: 'Live Demo',
  title: 'Real components. Live design tokens.',
  lead: 'Every widget is a native Web Component — not a mock. Switch theme presets or chart periods and watch styles cascade through Shadow DOM instantly.',
} as const;

export const FEATURES = {
  eyebrow: 'Why nucleify-ui',
  title: 'Ship less JavaScript. Keep full control.',
  lead: 'Import only what you use. Skip virtual DOM tax. Get typed events and CSS tokens that belong to your app — not a proprietary runtime.',
  zeroDeadTitle: 'Zero dead code',
  zeroDeadTag: 'Tree-shakeable',
  zeroDead:
    'Independent ES modules — your bundler ships only the components templates import. Smaller bundles by default.',
  preciseTitle: 'Precise inputs',
  preciseHint: 'Drag the circumference to tune',
  syncTitle: 'State synchronized',
  syncCaption: 'Full 5-star rating verified.',
  sliderTitle: 'Reactive controls',
  sliderHint: 'Slide to sync the progress indicator',
  typedTitle: 'Strict TypeScript contracts',
} as const;

export const QUICKSTART = {
  eyebrow: 'Get Started',
  title: 'Install once. Render anywhere.',
  lead: 'Three steps to production Web Components in React, Vue, Svelte, Astro, or plain HTML — no framework lock-in.',
  step1: 'Install the package',
  step1Cta: 'Copy Command',
  step2: 'Apply a design preset',
  step2Cta: 'Copy Code',
  step3: 'Render anywhere',
  step3Cta: 'Copy Snippet',
  terminalTitle: 'Interactive sandbox',
  terminalWelcome: "Welcome to nucleify-ui. Type 'help' to explore commands.",
} as const;

export const COMPONENTS = {
  eyebrow: 'Component Library',
  title: '50+ production-ready primitives',
  lead: 'Forms, data, layout, and feedback. Filter by domain, then open any component docs page to inspect attributes, slots, and events.',
  cta: 'Browse Component Docs',
} as const;

export const THEMING = {
  eyebrow: 'Design Tokens',
  titleLine1: '8 ready-made presets.',
  titleLine2: 'Pure CSS — yours to own.',
  lead: 'No CSS framework required. Presets compile to --nui-* custom properties that cascade through Shadow DOM. Override freely in your app.',
  previewEyebrow: 'Live token cascade',
  previewTitle: 'Styles update instantly',
} as const;

export const CTA = {
  eyebrow: 'Ready to ship',
  titleBefore: 'Build once.',
  titleAccent: 'Run everywhere.',
  lead: 'Native Web Components and CSS design tokens — no proprietary runtime and no framework lock-in. Drop the same Lit 3 primitives into React, Vue, Next.js, Astro, Svelte, or plain HTML. Import only what you use, restyle through --nui-* tokens, and keep your UI owned by your app.',
  ctaPrimary: 'Install nucleify-ui',
  ctaSecondary: 'View on GitHub',
} as const;

export const FOOTER = {
  tagline: 'Lit 3 Web Components for every framework.',
  legal: 'MIT License · Lit 3 · TypeScript · CSS design tokens',
  nucleifyLabel: 'Nucleify',
  nucleifyUrl: 'https://nucleify.io',
  docsTitle: 'Documentation',
  ecoTitle: 'Ecosystem',
} as const;
