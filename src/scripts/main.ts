import type { Chart, ChartData, ChartOptions, ChartDataset } from 'chart.js';
import { applyTheme, type Palette, type ThemeMode } from 'nucleify-ui/theme';

import 'nucleify-ui/components/nui-anchor';
import 'nucleify-ui/components/nui-avatar';
import 'nucleify-ui/components/nui-badge';
import 'nucleify-ui/components/nui-button';
import 'nucleify-ui/components/nui-card';
import 'nucleify-ui/components/nui-chart';
import 'nucleify-ui/components/nui-data-table';
import 'nucleify-ui/components/nui-divider';
import 'nucleify-ui/components/nui-heading';
import 'nucleify-ui/components/nui-icon';
import 'nucleify-ui/components/nui-knob';
import 'nucleify-ui/components/nui-label';
import 'nucleify-ui/components/nui-logo';
import 'nucleify-ui/components/nui-meter-group';
import 'nucleify-ui/components/nui-paragraph';
import 'nucleify-ui/components/nui-progress-bar';
import 'nucleify-ui/components/nui-rating';
import 'nucleify-ui/components/nui-scroll-top';
import 'nucleify-ui/components/nui-select-button';
import 'nucleify-ui/components/nui-slider';
import 'nucleify-ui/components/nui-tag';
import 'nucleify-ui/components/nui-terminal';
import 'nucleify-ui/components/nui-tile';
import 'nucleify-ui/components/nui-toast';

let palette: Palette = 'nuxt';
let mode: ThemeMode = 'dark';

applyTheme(palette, mode);

const cardNoShadow = new CSSStyleSheet();
cardNoShadow.replaceSync('.nui-card { box-shadow: none; }');

const navbarToggleStyles = new CSSStyleSheet();
navbarToggleStyles.replaceSync(`
  :host {
    display: inline-flex;
  }

  .nui-select-button {
    display: inline-flex;
  }

  .nui-select-button-option {
    gap: 0.35rem;
    margin: 0 0 0 calc(-1 * var(--border-width));
    padding: 0.38rem 0.7rem;
    border: 1px solid color-mix(in srgb, var(--nui-white-text-color) 10%, transparent);
    border-radius: 0;
    background: transparent;
    color: color-mix(in srgb, var(--nui-white-text-color) 68%, transparent);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.01em;
    box-shadow: none;
  }

  .nui-select-button-option:first-child {
    margin-left: 0;
    border-top-left-radius: 999px;
    border-bottom-left-radius: 999px;
  }

  .nui-select-button-option:last-child {
    border-top-right-radius: 999px;
    border-bottom-right-radius: 999px;
  }

  .nui-select-button-option:hover:not(:disabled):not([selected]) {
    background: color-mix(in srgb, var(--nui-white-text-color) 6%, transparent);
    border-color: color-mix(in srgb, var(--nui-white-text-color) 16%, transparent);
    color: var(--nui-white-text-color);
    z-index: 1;
  }

  .nui-select-button-option[selected] {
    background: color-mix(in srgb, var(--nui-primary-color) 18%, transparent);
    border-color: color-mix(in srgb, var(--nui-primary-color) 55%, transparent);
    color: var(--nui-white-text-color);
    box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--nui-primary-color) 18%, transparent);
  }

  .nui-select-button-option[selected]:hover:not(:disabled) {
    background: color-mix(in srgb, var(--nui-primary-color) 24%, transparent);
    border-color: color-mix(in srgb, var(--nui-primary-color) 70%, transparent);
  }

  .nui-select-button-icon {
    width: 0.9em;
    height: 0.9em;
  }

  :host([size="small"]) .nui-select-button-option {
    padding: 0.38rem 0.7rem;
    font-size: 0.75rem;
  }
`);

const playgroundButtonStyles = new CSSStyleSheet();
playgroundButtonStyles.replaceSync(`
  :host(.navbar-playground) {
    --border-radius-sm: 999px;
  }

  :host(.navbar-playground) .nui-button {
    min-height: 2.05rem;
    padding-inline: 0.9rem;
    font-weight: 650;
    letter-spacing: 0.01em;
    box-shadow: 0 6px 18px color-mix(in srgb, var(--nui-primary-color) 22%, transparent);
  }
`);

const bentoCardStyles = new CSSStyleSheet();
bentoCardStyles.replaceSync(`
  :host {
    display: block;
    width: 100%;
    min-width: 0;
    height: 100%;
    border-radius: 1.125rem;
    transition: transform 0.3s ease;
  }

  :host(:hover) {
    transform: translateY(-2px);
  }

  .nui-card {
    box-shadow: none;
    height: 100%;
    overflow: hidden;
    border-radius: 1.125rem;
    border-color: var(--surface-border, var(--nui-card-border));
    background: var(--surface-card, var(--nui-bg-dark-color));
  }

  :host(:hover) .nui-card {
    border-color: color-mix(in srgb, var(--nui-primary-color) 44%, var(--surface-border, var(--nui-card-border)));
    box-shadow:
      0 0 0 1px color-mix(in srgb, var(--nui-primary-color) 18%, transparent),
      0 0 28px color-mix(in srgb, var(--nui-primary-color) 16%, transparent),
      0 18px 42px color-mix(in srgb, #000 24%, transparent);
    transition: box-shadow 0.3s ease, border-color 0.3s ease;
  }

  :host(.bento-cell-featured) .nui-card {
    border: 1px solid transparent;
    background:
      linear-gradient(var(--surface-card, var(--nui-bg-dark-color)), var(--surface-card, var(--nui-bg-dark-color))) padding-box,
      linear-gradient(155deg,
        color-mix(in srgb, var(--nui-primary-color) 34%, var(--surface-border, var(--nui-card-border))) 0%,
        var(--surface-border, var(--nui-card-border)) 45%,
        var(--surface-border, var(--nui-card-border)) 72%,
        color-mix(in srgb, var(--nui-info-color) 24%, var(--surface-border, var(--nui-card-border))) 100%) border-box;
  }

  :host(.bento-cell-featured:hover) .nui-card {
    border-color: transparent;
    box-shadow:
      0 0 0 1px color-mix(in srgb, var(--nui-primary-color) 22%, transparent),
      0 0 32px color-mix(in srgb, var(--nui-primary-color) 20%, transparent),
      0 20px 46px color-mix(in srgb, #000 26%, transparent);
  }

  .nui-card-body {
    flex: 1;
    gap: 0.875rem;
    padding: 1.375rem;
  }

  .nui-card-caption {
    gap: 0.875rem;
  }

  .nui-card-subtitle {
    margin: 0;
  }

  .nui-card-title {
    display: block;
    width: 100%;
  }

  .nui-card-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
  }

  .nui-card-footer {
    border-top: none;
    padding: 0 1.375rem 1.125rem;
    background: transparent;
    justify-content: center;
  }

  :host(.qs-cell-step) .nui-card-footer,
  :host(.qs-cell-terminal) .nui-card-footer {
    justify-content: flex-start;
  }

  :host(.theme-controls) .nui-card-content {
    display: flex;
    flex-direction: column;
    gap: 1.125rem;
  }

  :host(.theme-controls) .nui-card-title {
    width: 100%;
  }
`);

function patchCardShadow(card: Element) {
  const root = card.shadowRoot;
  if (!root?.adoptedStyleSheets?.length) return;

  const sheets = [...root.adoptedStyleSheets];
  if (!sheets.includes(cardNoShadow)) sheets.push(cardNoShadow);
  if (card.classList.contains('bento-cell') && !sheets.includes(bentoCardStyles)) {
    sheets.push(bentoCardStyles);
  }
  root.adoptedStyleSheets = sheets;
}

function patchNavbarToggle(el: Element) {
  const root = el.shadowRoot;
  if (!root) return;
  const sheets = [...(root.adoptedStyleSheets ?? [])];
  if (!sheets.includes(navbarToggleStyles)) sheets.push(navbarToggleStyles);
  root.adoptedStyleSheets = sheets;
}

function patchPlaygroundButton(el: Element) {
  const root = el.shadowRoot;
  if (!root) return;
  const sheets = [...(root.adoptedStyleSheets ?? [])];
  if (!sheets.includes(playgroundButtonStyles)) sheets.push(playgroundButtonStyles);
  root.adoptedStyleSheets = sheets;
}

function patchAllCards() {
  document.querySelectorAll('nui-card').forEach(patchCardShadow);
}

function patchNavbarChrome() {
  document.querySelectorAll('nui-select-button.navbar-toggle').forEach(patchNavbarToggle);
  document.querySelectorAll('nui-button.navbar-playground').forEach(patchPlaygroundButton);
}

function scheduleCardPatches() {
  patchAllCards();
  patchNavbarChrome();
  requestAnimationFrame(() => {
    patchAllCards();
    patchNavbarChrome();
  });
  setTimeout(() => {
    patchAllCards();
    patchNavbarChrome();
  }, 50);
  setTimeout(() => {
    patchAllCards();
    patchNavbarChrome();
  }, 250);
}

customElements.whenDefined('nui-card').then(() => {
  scheduleCardPatches();
  new MutationObserver(scheduleCardPatches).observe(document.body, { childList: true, subtree: true });
});

Promise.all([
  customElements.whenDefined('nui-select-button'),
  customElements.whenDefined('nui-button'),
]).then(() => {
  patchNavbarChrome();
  scheduleCardPatches();
});

function toast(summary: string, severity: 'success' | 'info' | 'warn' | 'error' = 'success') {
  window.dispatchEvent(new CustomEvent('nui-toast-add', { detail: { summary, severity, life: 2500 } }));
}

function readToken(name: string) {
  return getComputedStyle(document.body).getPropertyValue(name).trim();
}

function getColors() {
  return [
    readToken('--nui-primary-color'),
    readToken('--nui-info-color'),
    readToken('--nui-help-color'),
    readToken('--nui-success-color'),
  ];
}

function scrollToSection(selector: string) {
  const el = document.querySelector(selector);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 90;
  window.scrollTo({ top, behavior: 'smooth' });
}

const PALETTE_TOGGLE_IDS = ['navbar-palette', 'palette-toggle', 'mobile-palette'];
const MODE_TOGGLE_IDS = ['navbar-mode', 'mode-toggle', 'mobile-mode'];

function setupSelectButton(
  id: string,
  options: Array<{ label: string; value: string; icon?: string }>,
  getValue: () => string,
  onChange: (v: string) => void,
) {
  const el = document.getElementById(id);
  if (!(el instanceof HTMLElement) || !('options' in el)) return;
  const sb = el as HTMLElement & {
    options: typeof options;
    value: string;
    allowEmpty: boolean;
    optionIcon: string;
  };
  sb.optionIcon = 'icon';
  sb.options = options;
  sb.value = getValue();
  sb.allowEmpty = false;
  sb.addEventListener('change', (e) => {
    onChange((e as CustomEvent<{ value: string }>).detail.value);
  });
}

function syncAllToggles() {
  for (const id of PALETTE_TOGGLE_IDS) {
    const el = document.getElementById(id);
    if (el instanceof HTMLElement && 'value' in el) {
      (el as HTMLElement & { value: string }).value = palette;
    }
  }
  for (const id of MODE_TOGGLE_IDS) {
    const el = document.getElementById(id);
    if (el instanceof HTMLElement && 'value' in el) {
      (el as HTMLElement & { value: string }).value = mode;
    }
  }
}

function updateThemeCode() {
  const code = document.getElementById('theme-code');
  if (code) {
    code.innerHTML = `<span class="tok-fn">applyTheme</span>(<span class="tok-str">'${palette}'</span>, <span class="tok-str">'${mode}'</span>);`;
  }
}

function setTheme(p: Palette, m: ThemeMode) {
  document.body.classList.add('theme-instant');
  palette = p;
  mode = m;
  applyTheme(palette, mode);
  syncAllToggles();
  updateThemeCode();
  window.dispatchEvent(new CustomEvent('nui-theme-changed'));
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.classList.remove('theme-instant');
    });
  });
}

const paletteOpts = [
  { label: 'Nuxt', value: 'nuxt', icon: 'mdi:vuejs' },
  { label: 'Next', value: 'next', icon: 'mdi:react' },
];
const modeOpts = [
  { label: 'Dark', value: 'dark', icon: 'mdi:weather-night' },
  { label: 'Light', value: 'light', icon: 'mdi:white-balance-sunny' },
];

for (const id of PALETTE_TOGGLE_IDS) {
  setupSelectButton(id, paletteOpts, () => palette, (v) => setTheme(v as Palette, mode));
}
for (const id of MODE_TOGGLE_IDS) {
  setupSelectButton(id, modeOpts, () => mode, (v) => setTheme(palette, v as ThemeMode));
}

updateThemeCode();

type Period = 'weekly' | 'monthly' | 'yearly';

const CHART_LABELS: Record<Period, string[]> = {
  weekly: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  monthly: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  yearly: ['2021', '2022', '2023', '2024', '2025', '2026'],
};

const CHART_DATA: Record<Period, number[][]> = {
  weekly: [
    [42, 58, 49, 71, 64, 52, 68],
    [28, 34, 30, 42, 38, 31, 36],
  ],
  monthly: [
    [38, 52, 44, 61, 55, 72, 63, 78, 69, 88, 81, 96],
    [24, 31, 27, 38, 33, 42, 37, 45, 40, 51, 46, 55],
  ],
  yearly: [
    [32, 48, 61, 75, 88, 102],
    [21, 29, 38, 46, 54, 61],
  ],
};

function colorWithAlpha(color: string, alpha: number) {
  const value = color.trim();
  if (!value) return `rgba(239, 68, 68, ${alpha})`;

  if (value.startsWith('#')) {
    let hex = value.slice(1);
    if (hex.length === 3) hex = hex.split('').map((c) => c + c).join('');
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  const rgb = value.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/);
  if (rgb) return `rgba(${rgb[1]}, ${rgb[2]}, ${rgb[3]}, ${alpha})`;

  return value;
}

function areaGradient(color: string, strength = 0.28) {
  return (context: { chart: { ctx: CanvasRenderingContext2D; chartArea?: { top: number; bottom: number } } }) => {
    const { ctx, chartArea } = context.chart;
    if (!chartArea) return 'transparent';
    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
    gradient.addColorStop(0, colorWithAlpha(color, strength));
    gradient.addColorStop(1, colorWithAlpha(color, 0));
    return gradient;
  };
}

function buildChart(period: Period): { data: ChartData; options: ChartOptions } {
  const colors = getColors();
  const secondaryText = readToken('--nui-secondary-text-color');
  const textRgb = readToken('--nui-white-text-rgb');
  const gridColor = textRgb ? `rgba(${textRgb}, 0.05)` : 'rgba(128,128,128,0.08)';
  const surface = readToken('--nui-card-background') || readToken('--nui-bg-dark-color');
  const text = readToken('--nui-white-text-color');
  const border = readToken('--nui-card-border');
  const expenseColor = readToken('--nui-danger-color');

  const series = [
    { label: 'Expenses', color: expenseColor, fillStrength: 0.28, dataIndex: 1, order: 0, fill: 'origin' as const },
    { label: 'Income', color: colors[0], fillStrength: 0.28, dataIndex: 0, order: 1, fill: '-1' as const },
  ];

  const data: ChartData = {
    labels: CHART_LABELS[period],
    datasets: series.map((s) => ({
      label: s.label,
      data: CHART_DATA[period][s.dataIndex],
      borderColor: s.color,
      borderWidth: 2,
      fill: s.fill,
      order: s.order,
      backgroundColor: areaGradient(s.color, s.fillStrength) as never,
      tension: 0.45,
      pointRadius: 0,
      pointHoverRadius: 4,
      pointHoverBackgroundColor: s.color,
      pointHoverBorderColor: surface,
      pointHoverBorderWidth: 2,
    })),
  };

  const options: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 750,
      easing: 'easeInOutQuart',
    },
    animations: {
      x: { duration: 0 },
      y: { duration: 750, easing: 'easeInOutQuart' },
      colors: { duration: 750, easing: 'easeInOutQuart' },
    },
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: surface,
        titleColor: text,
        bodyColor: text,
        borderColor: border,
        borderWidth: 1,
        cornerRadius: 10,
        padding: 12,
        displayColors: true,
        boxWidth: 8,
        boxHeight: 8,
        boxPadding: 4,
        usePointStyle: true,
      },
    },
    scales: {
      x: {
        offset: false,
        bounds: 'ticks',
        grid: { display: false },
        border: { display: false },
        ticks: { color: secondaryText, font: { size: 10 }, maxRotation: 0 },
      },
      y: {
        grid: { color: gridColor },
        border: { display: false },
        ticks: {
          color: secondaryText,
          font: { size: 10 },
          maxTicksLimit: 5,
          callback: (value) => `$${value}k`,
        },
      },
    },
  };

  return { data, options };
}

type ShowcaseChartEl = HTMLElement & {
  type: string;
  data: ChartData;
  options: ChartOptions;
  height: string;
  getChart: () => Chart | null;
};

function syncDataset(target: ChartDataset, source: ChartDataset) {
  target.label = source.label;
  target.data = [...(source.data as number[])];
  target.borderColor = source.borderColor;
  target.backgroundColor = source.backgroundColor;
  target.borderWidth = source.borderWidth;
  target.fill = source.fill;
  target.order = source.order;
  target.tension = source.tension;
  target.pointRadius = source.pointRadius;
  target.pointHoverRadius = source.pointHoverRadius;
  target.pointHoverBackgroundColor = source.pointHoverBackgroundColor;
  target.pointHoverBorderColor = source.pointHoverBorderColor;
  target.pointHoverBorderWidth = source.pointHoverBorderWidth;
}

function applyChartOptions(chart: Chart, options: ChartOptions) {
  chart.options.responsive = options.responsive;
  chart.options.maintainAspectRatio = options.maintainAspectRatio;
  chart.options.animation = options.animation;
  chart.options.animations = options.animations;
  chart.options.interaction = options.interaction;
  chart.options.plugins = options.plugins;
  chart.options.scales = options.scales;
}

function updateChart(period: Period, updateMode: 'default' | 'none' = 'default') {
  const chartEl = document.getElementById('showcase-chart');
  if (!(chartEl instanceof HTMLElement) || !('data' in chartEl)) return;

  const el = chartEl as ShowcaseChartEl;
  const { data, options } = buildChart(period);
  const chart = el.getChart?.();

  if (chart) {
    chart.data.labels = data.labels;
    data.datasets.forEach((nextDs, i) => {
      const existing = chart.data.datasets[i];
      if (existing) syncDataset(existing, nextDs);
      else chart.data.datasets[i] = structuredClone(nextDs);
    });
    chart.data.datasets.length = data.datasets.length;
    applyChartOptions(chart, options);
    chart.update(updateMode);
    return;
  }

  el.type = 'line';
  el.height = '168px';
  el.data = data;
  el.options = options;
}

const chartPeriod = document.getElementById('chart-period');
if (chartPeriod instanceof HTMLElement && 'options' in chartPeriod) {
  setupSelectButton(
    'chart-period',
    [
      { label: 'Week', value: 'weekly' },
      { label: 'Month', value: 'monthly' },
      { label: 'Year', value: 'yearly' },
    ],
    () => 'monthly',
    (v) => updateChart(v as Period),
  );
}

updateChart('monthly');

function updateMeters() {
  const colors = getColors();

  const meter = document.getElementById('showcase-meter');
  if (meter instanceof HTMLElement && 'value' in meter) {
    (meter as HTMLElement & { value: unknown[] }).value = [
      { label: 'Direct', value: 42, color: colors[0] },
      { label: 'Organic', value: 31, color: colors[1] },
      { label: 'Referral', value: 27, color: colors[2] },
    ];
  }

  const themeMeter = document.getElementById('theme-meter');
  if (themeMeter instanceof HTMLElement && 'value' in themeMeter) {
    (themeMeter as HTMLElement & { value: unknown[] }).value = [
      { label: 'Components', value: 52, color: colors[0] },
      { label: 'Utilities', value: 28, color: colors[1] },
      { label: 'Types', value: 20, color: colors[2] },
    ];
  }
}

updateMeters();

const themeProgress = document.getElementById('theme-progress');
if (themeProgress instanceof HTMLElement && 'value' in themeProgress) {
  (themeProgress as HTMLElement & { value: number; showValue: boolean }).value = 72;
  (themeProgress as HTMLElement & { value: number; showValue: boolean }).showValue = true;
}

const deployProgress = document.getElementById('deploy-progress');
if (deployProgress instanceof HTMLElement && 'value' in deployProgress) {
  (deployProgress as HTMLElement & { value: number; showValue: boolean }).value = 82;
  (deployProgress as HTMLElement & { value: number; showValue: boolean }).showValue = true;
}

const table = document.getElementById('showcase-table');
if (table instanceof HTMLElement && 'value' in table) {
  const dt = table as HTMLElement & {
    value: Array<Record<string, unknown>>;
    columns: Array<Record<string, unknown>>;
    paginator: boolean;
    rows: number;
    rowHover: boolean;
    stripedRows: boolean;
    size: string;
  };
  dt.columns = [
    { field: 'event', header: 'Event', sortable: true },
    { field: 'author', header: 'Author', sortable: true },
    { field: 'env', header: 'Environment', sortable: true },
    { field: 'time', header: 'Time', sortable: true },
  ];
  dt.value = [
    { event: 'Deploy succeeded', author: 'alice.dev', env: 'production', time: '2 min ago' },
    { event: 'Theme published', author: 'bob.design', env: 'staging', time: '18 min ago' },
    { event: 'Component released', author: 'carol.eng', env: 'production', time: '1 hr ago' },
  ];
  dt.paginator = false;
  dt.rows = 3;
  dt.rowHover = true;
  dt.stripedRows = false;
  dt.size = 'small';
}

const bentoSlider = document.getElementById('bento-slider');
const bentoProgress = document.getElementById('bento-progress');
if (bentoProgress instanceof HTMLElement && 'value' in bentoProgress) {
  (bentoProgress as HTMLElement & { value: number }).value = 40;
}
bentoSlider?.addEventListener('change', (e) => {
  const value = (e as CustomEvent<{ value: number }>).detail?.value;
  if (typeof value === 'number' && bentoProgress instanceof HTMLElement && 'value' in bentoProgress) {
    (bentoProgress as HTMLElement & { value: number }).value = value;
  }
});

const RATING_LABELS: Record<number, string> = {
  1: 'Ouch. We can fix this.',
  2: 'Room to grow.',
  3: 'Solid middle ground.',
  4: 'Almost there!',
  5: 'Perfect score. Obviously.',
};

document.getElementById('bento-rating')?.addEventListener('change', (e) => {
  const value = (e as CustomEvent<{ value: number }>).detail?.value ?? 5;
  const label = document.getElementById('bento-rating-label');
  if (label && 'text' in label) {
    (label as HTMLElement & { text: string }).text = RATING_LABELS[value] ?? '';
  }
});

const treeshakeObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const modules = entry.target.querySelectorAll<HTMLElement>('.ts-module');
      const activeIndexes = [2, 9, 17];
      activeIndexes.forEach((idx, order) => {
        setTimeout(() => modules[idx]?.classList.add('active'), 300 + order * 250);
      });
      treeshakeObserver.unobserve(entry.target);
    }
  },
  { threshold: 0.4 },
);

const treeshakeEl = document.getElementById('treeshake-modules');
if (treeshakeEl) treeshakeObserver.observe(treeshakeEl);

const TERMINAL_RESPONSES: Record<string, string> = {
  help: 'Available commands: install, components, theme, version, about, clear',
  install: '✓ npm install nucleify-ui lit iconify-icon\n✓ 3 packages added in 1.2s',
  components: '50+ components: nui-button, nui-chart, nui-data-table, nui-dialog, nui-terminal (this one!), and many more.',
  theme: "applyTheme('nuxt' | 'next', 'dark' | 'light') — try the toggles in the navbar.",
  version: 'nucleify-ui v0.3.1',
  about: 'Tree-shakeable Lit 3 web components. MIT licensed. Built for the modern web.',
};

const terminal = document.getElementById('demo-terminal');
terminal?.addEventListener('nui-command', (e) => {
  const command = (e as CustomEvent<{ command: string }>).detail.command.trim().toLowerCase();
  if (command === 'clear' || command === '') return;

  const el = terminal as HTMLElement & { writeResponse: (text: string) => void };
  const response = TERMINAL_RESPONSES[command] ?? `command not found: ${command} — type 'help'`;
  el.writeResponse?.(response);
});

document.querySelectorAll<HTMLElement>('.browser-categories nui-button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter') ?? 'all';

    document.querySelectorAll<HTMLElement>('.browser-categories nui-button').forEach((b) => {
      if (b.getAttribute('data-filter') === filter) {
        b.setAttribute('severity', 'primary');
        b.removeAttribute('outlined');
      } else {
        b.setAttribute('severity', 'secondary');
        b.setAttribute('outlined', '');
      }
    });

    document.querySelectorAll<HTMLElement>('.browser-item').forEach((item) => {
      item.hidden = filter !== 'all' && item.getAttribute('data-cat') !== filter;
    });
  });
});

document.addEventListener('click', async (event) => {
  const path = event.composedPath();
  const actionEl = path.find(
    (n) => n instanceof HTMLElement && n.hasAttribute?.('data-action'),
  ) as HTMLElement | undefined;
  if (!actionEl) return;

  const action = actionEl.getAttribute('data-action');

  if (action === 'scroll') {
    const target = actionEl.getAttribute('data-target');
    if (target) scrollToSection(target);
  }

  if (action === 'open-url') {
    const url = actionEl.getAttribute('data-url');
    if (url) window.open(url, '_blank', 'noopener');
  }

  if (action === 'navigate') {
    const url = actionEl.getAttribute('data-url');
    if (url) window.location.assign(url);
  }

  if (action === 'copy-install') {
    try {
      await navigator.clipboard.writeText('npm install nucleify-ui lit iconify-icon');
      toast('Copied to clipboard');
    } catch {
      toast('Copy failed', 'error');
    }
  }

  if (action === 'copy-text') {
    const text = actionEl.getAttribute('data-copy');
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      toast('Copied to clipboard');
    } catch {
      toast('Copy failed', 'error');
    }
  }

  if (action === 'copy-theme-code') {
    const code = document.getElementById('theme-code');
    const text = code?.textContent ?? `applyTheme('${palette}', '${mode}');`;
    try {
      await navigator.clipboard.writeText(text);
      toast('Theme command copied');
    } catch {
      toast('Copy failed', 'error');
    }
  }

  if (action === 'toggle-mobile') {
    const nav = document.getElementById('mobile-nav');
    if (nav) nav.hidden = !nav.hidden;
  }
});

document.addEventListener('click', (event) => {
  const path = event.composedPath();
  for (const node of path) {
    if (node instanceof HTMLElement && node.tagName === 'NUI-ANCHOR') {
      const href = node.getAttribute('href');
      if (href?.startsWith('#')) {
        event.preventDefault();
        scrollToSection(href);
        const nav = document.getElementById('mobile-nav');
        if (nav) nav.hidden = true;
      }
      break;
    }
  }
});

window.addEventListener('nui-theme-changed', () => {
  const cp = document.getElementById('chart-period');
  const period = cp instanceof HTMLElement && 'value' in cp
    ? (String((cp as HTMLElement & { value: string }).value) as Period)
    : 'monthly';
  updateChart(period, 'none');
  updateMeters();
  scheduleCardPatches();
});

document.querySelector('.preview-tiles')?.addEventListener('click', (e) => e.preventDefault(), true);

const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

document.querySelectorAll<HTMLElement>('.bento-cell, .theme-preview').forEach((cell) => {
  cell.addEventListener('pointermove', (e) => {
    const rect = cell.getBoundingClientRect();
    cell.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    cell.style.setProperty('--my', `${e.clientY - rect.top}px`);
  });
});
