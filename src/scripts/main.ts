import type { Chart, ChartData, ChartOptions, ChartDataset } from 'chart.js';
import {
  applyPreset,
  nucleus,
  quantum,
  kinetic,
  cosmos,
  apex,
  eclipse,
  prism,
  abyss,
  registerRainbowLoader,
  type Preset,
  type PresetName,
  type ThemeMode,
} from 'nucleify-ui/themes';

import 'nucleify-ui/components/nui-select';
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

registerRainbowLoader(() => import('nui-rainbow'));

export const PRESET_MAP: Record<PresetName, Preset> = {
  nucleus,
  quantum,
  kinetic,
  cosmos,
  apex,
  eclipse,
  prism,
  abyss,
};

let currentPresetName: PresetName = 'nucleus';
let currentMode: ThemeMode = 'dark';

applyPreset(PRESET_MAP[currentPresetName], { mode: currentMode });

const cardNoShadow = new CSSStyleSheet();
cardNoShadow.replaceSync(`
  :host {
    height: 100%;
  }
  .nui-card {
    box-shadow: none;
    height: 100%;
  }
  .nui-card-body {
    flex: 1 1 auto;
    height: 100%;
  }
  .nui-card-content {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`);

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
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .nui-select-button-option:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
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
    padding: 0 0.75rem;
    height: 2rem;
    box-sizing: border-box;
    font-size: 0.75rem;
  }
`);

const navbarSelectStyles = new CSSStyleSheet();
navbarSelectStyles.replaceSync(`
  :host {
    display: inline-flex;
    vertical-align: middle;
  }

  .nui-select {
    min-height: 2rem !important;
    height: 2rem;
    padding: 0 0.75rem !important;
    border-radius: var(--border-radius-sm, 8px) !important;
    font-size: 0.75rem !important;
    font-weight: 500;
    box-sizing: border-box;
  }

  .nui-select-panel {
    border-radius: var(--border-radius-sm, 8px) !important;
  }
`);

const docsButtonStyles = new CSSStyleSheet();
docsButtonStyles.replaceSync(`
  :host(.navbar-docs) {
    --border-radius-sm: 1rem;
    display: inline-flex;
    vertical-align: middle;
  }

  :host(.navbar-docs) .nui-button {
    min-height: 2rem !important;
    height: 2rem;
    border-radius: 1rem !important;
    padding: 0 0.85rem !important;
    font-size: 0.75rem !important;
    font-weight: 600;
    letter-spacing: 0.01em;
    box-sizing: border-box;
    box-shadow: 0 4px 14px color-mix(in srgb, var(--nui-primary-color) 20%, transparent);
  }
`);

const copyButtonStyles = new CSSStyleSheet();
copyButtonStyles.replaceSync(`
  :host(.copy-btn) {
    display: inline-flex;
    width: 22px;
    height: 22px;
    vertical-align: middle;
  }

  :host(.copy-btn) .nui-button {
    box-sizing: border-box;
    width: 22px !important;
    height: 22px !important;
    min-height: 22px !important;
    min-width: 22px !important;
    padding: 0 !important;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`);

const bentoCardStyles = new CSSStyleSheet();
bentoCardStyles.replaceSync(`
  :host {
    display: block;
    width: 100%;
    min-width: 0;
    height: 100%;
    border-radius: var(--card-radius, 1rem);
    transition: transform 0.22s ease;
  }

  :host(:hover) {
    transform: translateY(-1px);
  }

  .nui-card {
    height: 100%;
    overflow: hidden;
    border-radius: var(--card-radius, 1rem);
    border-color: var(--card-border, var(--nui-card-border));
    background: var(--card-bg, var(--nui-card-background));
    box-shadow: var(--card-shadow, none);
    transition: box-shadow 0.22s ease, border-color 0.22s ease, background 0.22s ease;
  }

  :host(:hover) .nui-card {
    border-color: var(--card-border-hover, var(--nui-card-border));
    background: var(--card-bg-hover, var(--card-bg, var(--nui-card-background)));
    box-shadow: var(--card-shadow-hover, var(--card-shadow, none));
  }

  .nui-card-body {
    flex: 1;
    gap: 0.875rem;
    padding: 1rem;
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
    padding: 0 var(--card-pad, 1.25rem) 1.125rem;
    background: transparent;
    justify-content: center;
  }

  :host(.qs-cell-step) .nui-card-footer {
    justify-content: flex-start;
  }

  :host(.qs-cell-terminal) .nui-card-body {
    gap: 0;
  }

  :host(.qs-cell-terminal) .nui-card-caption {
    border-bottom: 1px solid var(--card-border, var(--nui-card-border));
    margin-bottom: 0;
  }

  :host(.theme-controls) .nui-card-content,
  :host(.theme-preview-card) .nui-card-content {
    display: flex;
    flex-direction: column;
    gap: 1.125rem;
  }

  :host(.theme-controls) .nui-card-title,
  :host(.theme-preview-card) .nui-card-title {
    width: 100%;
  }
`);

const knobTextPatch = new CSSStyleSheet();
knobTextPatch.replaceSync(`
  :host(#goal-knob) .nui-knob-text {
    font-size: 0.8125rem !important;
    font-weight: 600 !important;
    font-family: var(--mono) !important;
  }
`);

const demoTerminalStyles = new CSSStyleSheet();
demoTerminalStyles.replaceSync(`
  :host(#demo-terminal) {
    position: relative;
    z-index: 1;
    display: block;
    width: calc(100% + 2rem);
    min-height: 16rem;
    height: calc(100% + 1rem);
    overflow: hidden;
    margin: 0 -1rem -1rem -1rem;
    font-family: var(--mono);
    font-size: 0.8125rem;
  }

  :host(#demo-terminal) .nui-terminal {
    border: none;
    border-radius: 0;
    box-shadow: none;
  }

  :host(#demo-terminal) .nui-terminal-input {
    font-size: inherit;
  }
`);

function patchKnob(el: Element) {
  const root = el.shadowRoot;
  if (!root) return;
  const sheets = [...(root.adoptedStyleSheets ?? [])];
  if (!sheets.includes(knobTextPatch)) {
    sheets.push(knobTextPatch);
    root.adoptedStyleSheets = sheets;
  }
}

function patchDemoTerminal(el: Element) {
  const root = el.shadowRoot;
  if (!root) return;
  const sheets = [...(root.adoptedStyleSheets ?? [])];
  if (!sheets.includes(demoTerminalStyles)) {
    sheets.push(demoTerminalStyles);
    root.adoptedStyleSheets = sheets;
  }
}

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

function patchNavbarSelect(el: Element) {
  const root = el.shadowRoot;
  if (!root) return;
  const sheets = [...(root.adoptedStyleSheets ?? [])];
  if (!sheets.includes(navbarSelectStyles)) sheets.push(navbarSelectStyles);
  root.adoptedStyleSheets = sheets;
}

function patchDocsButton(el: Element) {
  const root = el.shadowRoot;
  if (!root) return;
  const sheets = [...(root.adoptedStyleSheets ?? [])];
  if (!sheets.includes(docsButtonStyles)) sheets.push(docsButtonStyles);
  root.adoptedStyleSheets = sheets;
}

function patchCopyButton(el: Element) {
  const root = el.shadowRoot;
  if (!root) return;
  const sheets = [...(root.adoptedStyleSheets ?? [])];
  if (!sheets.includes(copyButtonStyles)) sheets.push(copyButtonStyles);
  root.adoptedStyleSheets = sheets;
}

function patchAllCards() {
  document.querySelectorAll('nui-card').forEach(patchCardShadow);
  const goalKnob = document.getElementById('goal-knob');
  if (goalKnob) patchKnob(goalKnob);
  const demoTerminal = document.getElementById('demo-terminal');
  if (demoTerminal) patchDemoTerminal(demoTerminal);
}

function patchNavbarChrome() {
  document.querySelectorAll('nui-select.navbar-preset-select').forEach(patchNavbarSelect);
  document.querySelectorAll('nui-select-button.navbar-toggle').forEach(patchNavbarToggle);
  document.querySelectorAll('nui-button.navbar-docs').forEach(patchDocsButton);
  document.querySelectorAll('nui-button.copy-btn').forEach(patchCopyButton);
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

customElements.whenDefined('nui-knob').then(() => {
  scheduleCardPatches();
});

customElements.whenDefined('nui-terminal').then(() => {
  const demoTerminal = document.getElementById('demo-terminal');
  if (demoTerminal) patchDemoTerminal(demoTerminal);
});

Promise.all([
  customElements.whenDefined('nui-select'),
  customElements.whenDefined('nui-select-button'),
  customElements.whenDefined('nui-button'),
]).then(() => {
  patchNavbarChrome();
  scheduleCardPatches();
});

const TOAST_OUT_MS = 200; // matches nui-toast toast-fade-out
let toastShowToken = 0;

type ToastHost = HTMLElement & {
  messages: Array<{ id?: string; closing?: boolean }>;
  dismiss: (id: string) => void;
  add: (message: {
    summary: string;
    severity: 'success' | 'info' | 'warn' | 'error';
    life: number;
  }) => void;
};

function toast(summary: string, severity: 'success' | 'info' | 'warn' | 'error' = 'success') {
  const host = document.querySelector('nui-toast') as ToastHost | null;
  if (!host?.add || !host.dismiss) {
    window.dispatchEvent(new CustomEvent('nui-toast-add', { detail: { summary, severity, life: 2500 } }));
    return;
  }

  const token = ++toastShowToken;
  const existing = host.messages.filter((m) => m.id);
  for (const m of existing) {
    if (m.id && !m.closing) host.dismiss(m.id);
  }

  const show = () => {
    if (token !== toastShowToken) return;
    host.add({ summary, severity, life: 2500 });
  };

  if (existing.length > 0) {
    window.setTimeout(show, TOAST_OUT_MS);
  } else {
    show();
  }
}

function readToken(name: string) {
  return getComputedStyle(document.body).getPropertyValue(name).trim();
}

/**
 * Resolve a CSS color (token name or raw value) against document.body so
 * animated nui-rainbow custom properties are included in the cascade.
 */
function resolveCssColor(valueOrVar: string) {
  const raw = valueOrVar.trim();
  if (!raw) return raw;
  if (raw.startsWith('#') || /^rgba?\(/i.test(raw)) return raw;

  const probe = document.createElement('span');
  probe.style.cssText =
    'position:absolute;visibility:hidden;pointer-events:none;color:transparent';
  // Prefer var(--token) so @property-animated hues resolve on body.
  probe.style.color = raw.startsWith('--') ? `var(${raw})` : raw;
  document.body.appendChild(probe);
  const resolved = getComputedStyle(probe).color;
  probe.remove();
  return resolved && resolved !== 'rgba(0, 0, 0, 0)' && resolved !== 'transparent'
    ? resolved
    : raw;
}

function readLivePrimaryColor() {
  if (document.body.classList.contains('nui-rainbow')) {
    const live = resolveCssColor('--nui-rainbow-color');
    if (live.startsWith('rgb')) return live;
  }
  return resolveCssColor('--nui-primary-color');
}

function getColors() {
  return [
    readLivePrimaryColor(),
    resolveCssColor('--nui-info-color'),
    resolveCssColor('--nui-help-color'),
    resolveCssColor('--nui-success-color'),
  ];
}

function scrollToSection(selector: string) {
  const el = document.querySelector(selector);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 90;
  window.scrollTo({ top, behavior: 'smooth' });
}

export const PRESET_OPTIONS: Array<{ label: string; value: PresetName }> = [
  { label: 'Nucleus', value: 'nucleus' },
  { label: 'Quantum', value: 'quantum' },
  { label: 'Kinetic', value: 'kinetic' },
  { label: 'Cosmos', value: 'cosmos' },
  { label: 'Apex', value: 'apex' },
  { label: 'Eclipse', value: 'eclipse' },
  { label: 'Prism', value: 'prism' },
  { label: 'Abyss', value: 'abyss' },
];

const PRESET_SELECT_IDS = ['navbar-preset', 'palette-toggle', 'mobile-preset'];
const MODE_TOGGLE_IDS = ['navbar-mode', 'mode-toggle', 'mobile-mode'];

function setupSelect(
  id: string,
  options: Array<{ label: string; value: string }>,
  getValue: () => string,
  onChange: (v: string) => void,
) {
  const el = document.getElementById(id);
  if (!el) return;
  const sel = el as HTMLElement & {
    options: typeof options;
    value: string;
  };
  sel.options = options;
  sel.value = getValue();
  sel.addEventListener('nui-change', (e) => {
    onChange((e as CustomEvent<{ value: string }>).detail.value);
  });
}

function setupSelectButton(
  id: string,
  options: Array<{ label: string; value: string; icon?: string }>,
  getValue: () => string,
  onChange: (v: string) => void,
) {
  const el = document.getElementById(id);
  if (!el || !('options' in el)) return;
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
  for (const id of PRESET_SELECT_IDS) {
    const el = document.getElementById(id);
    if (el && 'value' in el) {
      (el as HTMLElement & { value: string }).value = currentPresetName;
    }
  }
  for (const id of MODE_TOGGLE_IDS) {
    const el = document.getElementById(id);
    if (el && 'value' in el) {
      (el as HTMLElement & { value: string }).value = currentMode;
    }
  }

  // Update preset grid cards
  document.querySelectorAll<HTMLElement>('.preset-card').forEach((card) => {
    const presetAttr = card.getAttribute('data-preset');
    if (presetAttr === currentPresetName) {
      card.classList.add('is-active');
    } else {
      card.classList.remove('is-active');
    }
  });

  const activePresetEl = document.getElementById('active-preset-name');
  if (activePresetEl) {
    const found = PRESET_OPTIONS.find((p) => p.value === currentPresetName);
    activePresetEl.textContent = found ? found.label : currentPresetName;
  }

  const activeModeEl = document.getElementById('active-mode-name');
  if (activeModeEl) {
    activeModeEl.textContent = currentMode === 'dark' ? 'Dark' : 'Light';
  }

  document.body.classList.toggle('nui-light', currentMode === 'light');
  document.body.classList.toggle('nui-dark', currentMode === 'dark');
}

function updateThemeCode() {
  const code = document.getElementById('theme-code');
  if (code) {
    code.innerHTML = `<span class="tok-kw">import</span> { <span class="tok-fn">applyPreset</span>, <span class="tok-fn">${currentPresetName}</span> } <span class="tok-kw">from</span> <span class="tok-str">'nucleify-ui/themes'</span>;\n\n<span class="tok-fn">applyPreset</span>(${currentPresetName}, { <span class="tok-type">mode</span>: <span class="tok-str">'${currentMode}'</span> });`;
  }
}

export function setTheme(presetName: PresetName, mode: ThemeMode) {
  document.body.classList.add('theme-instant');
  currentPresetName = presetName;
  currentMode = mode;

  const targetPreset = PRESET_MAP[currentPresetName] ?? nucleus;
  applyPreset(targetPreset, { mode: currentMode });

  syncAllToggles();
  updateThemeCode();
  window.dispatchEvent(new CustomEvent('nui-theme-changed'));

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.classList.remove('theme-instant');
    });
  });
}

const modeOpts = [
  { label: 'Dark', value: 'dark', icon: 'mdi:weather-night' },
  { label: 'Light', value: 'light', icon: 'mdi:white-balance-sunny' },
];

for (const id of PRESET_SELECT_IDS) {
  setupSelect(id, PRESET_OPTIONS, () => currentPresetName, (v) => setTheme(v as PresetName, currentMode));
}
for (const id of MODE_TOGGLE_IDS) {
  setupSelectButton(id, modeOpts, () => currentMode, (v) => setTheme(currentPresetName, v as ThemeMode));
}

// Click on preset cards in Theming section
document.querySelectorAll<HTMLElement>('.preset-card').forEach((card) => {
  card.addEventListener('click', () => {
    const presetAttr = card.getAttribute('data-preset') as PresetName | null;
    if (presetAttr && PRESET_MAP[presetAttr]) {
      setTheme(presetAttr, currentMode);
    }
  });
});

syncAllToggles();
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
  const value = resolveCssColor(color).trim();
  if (!value) return `rgba(239, 68, 68, ${alpha})`;

  if (value.startsWith('#')) {
    let hex = value.slice(1);
    if (hex.length === 3) hex = hex.split('').map((c) => c + c).join('');
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  const rgb = value.match(/^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/);
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
  el.height = '100%';
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

let rainbowChartRaf = 0;
let lastRainbowPrimary = '';
let lastRainbowSyncAt = 0;

function getActiveChartPeriod(): Period {
  const cp = document.getElementById('chart-period');
  if (cp instanceof HTMLElement && 'value' in cp) {
    return String((cp as HTMLElement & { value: string }).value) as Period;
  }
  return 'monthly';
}

function stopRainbowChartSync() {
  if (rainbowChartRaf) cancelAnimationFrame(rainbowChartRaf);
  rainbowChartRaf = 0;
  lastRainbowPrimary = '';
  lastRainbowSyncAt = 0;
}

function syncRainbowChartColors(ts = performance.now()) {
  // Keep polling while Prism is active — nui-rainbow class is applied async.
  if (currentPresetName !== 'prism') {
    stopRainbowChartSync();
    return;
  }

  if (document.body.classList.contains('nui-rainbow') && ts - lastRainbowSyncAt >= 80) {
    lastRainbowSyncAt = ts;
    const primary = readLivePrimaryColor();
    if (primary && primary !== lastRainbowPrimary) {
      lastRainbowPrimary = primary;
      // Patch Income series colors in-place (dataset order: Expenses, Income).
      patchShowcaseChartPrimary(primary);
      updateMeters();
    }
  }

  rainbowChartRaf = requestAnimationFrame(syncRainbowChartColors);
}

function patchShowcaseChartPrimary(primary: string) {
  const chartEl = document.getElementById('showcase-chart');
  if (!(chartEl instanceof HTMLElement) || !('getChart' in chartEl)) return;
  const chart = (chartEl as ShowcaseChartEl).getChart?.();
  if (!chart?.data?.datasets?.length) {
    updateChart(getActiveChartPeriod(), 'none');
    return;
  }

  // Income is the second series (see buildChart).
  const income = chart.data.datasets[1] ?? chart.data.datasets[0];
  if (!income) return;

  income.borderColor = primary;
  income.pointHoverBackgroundColor = primary;
  income.backgroundColor = areaGradient(primary, 0.28) as never;
  chart.update('none');
}

function startRainbowChartSync() {
  stopRainbowChartSync();
  if (currentPresetName === 'prism') {
    rainbowChartRaf = requestAnimationFrame(syncRainbowChartColors);
  }
}

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
  theme: "applyPreset(nucleus, { mode: 'dark' | 'light' }) - 8 presets: nucleus, quantum, kinetic, cosmos, apex, eclipse, prism, abyss.",
  version: 'nucleify-ui v1.0.0',
  about: 'Tree-shakeable Lit 3 web components. MIT licensed. Built for the modern web.',
};

const terminal = document.getElementById('demo-terminal');
terminal?.addEventListener('nui-command', (e) => {
  const command = (e as CustomEvent<{ command: string }>).detail.command.trim().toLowerCase();
  if (command === 'clear' || command === '') return;

  const el = terminal as HTMLElement & { writeResponse: (text: string) => void };
  const response = TERMINAL_RESPONSES[command] ?? `command not found: ${command} - type 'help'`;
  el.writeResponse?.(response);
});

const MOBILE_BROWSER_LIMIT = 8;
const mobileBrowserMq = window.matchMedia('(max-width: 499px)');
let currentBrowserFilter = 'all';

function applyBrowserFilter(filter = currentBrowserFilter) {
  currentBrowserFilter = filter;
  const limitMobile = mobileBrowserMq.matches;
  let shown = 0;

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
    const matches = filter === 'all' || item.getAttribute('data-cat') === filter;
    if (!matches || (limitMobile && shown >= MOBILE_BROWSER_LIMIT)) {
      item.hidden = true;
      return;
    }
    item.hidden = false;
    shown += 1;
  });
}

document.querySelectorAll<HTMLElement>('.browser-categories nui-button').forEach((btn) => {
  btn.addEventListener('click', () => {
    applyBrowserFilter(btn.getAttribute('data-filter') ?? 'all');
  });
});

applyBrowserFilter();
mobileBrowserMq.addEventListener('change', () => applyBrowserFilter());

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
    const text = code?.textContent ?? `import { applyPreset, ${currentPresetName} } from 'nucleify-ui/themes';\n\napplyPreset(${currentPresetName}, { mode: '${currentMode}' });`;
    try {
      await navigator.clipboard.writeText(text);
      toast('Theme command copied');
    } catch {
      toast('Copy failed', 'error');
    }
  }

  if (action === 'copy-preview-code') {
    const text = `<nui-card class="dashboard-card">
  <div slot="header">
    <nui-select-button .options=\${['7D', '30D', '90D']}></nui-select-button>
  </div>
  <nui-chart type="line" .data=\${chartData}></nui-chart>
  <div slot="footer">
    <nui-button label="Export Data" icon="mdi:download" size="small"></nui-button>
  </div>
</nui-card>`;
    try {
      await navigator.clipboard.writeText(text);
      toast('Demo code copied to clipboard');
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
  updateChart(getActiveChartPeriod(), 'none');
  updateMeters();
  scheduleCardPatches();
  startRainbowChartSync();
});

startRainbowChartSync();

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
