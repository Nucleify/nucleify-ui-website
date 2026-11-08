import { componentDocsUrl, DOCS_ENTRY_URL } from './config/docs-routes';

/** Default entry into the docs SPA. */
export const DOCS_URL = DOCS_ENTRY_URL;

export const INSTALL_COMMAND = 'npm install nucleify-ui lit iconify-icon';

export const STATS = [
  { value: '50+', label: 'Web Components' },
  { value: '4', label: 'Dependencies' },
  { value: '100%', label: 'TypeScript' },
  { value: '<8kb', label: 'Per component' },
];

export const BROWSER_ITEMS = [
  { name: 'nui-button', icon: 'mdi:gesture-tap-button', cat: 'forms' },
  { name: 'nui-card', icon: 'mdi:card-outline', cat: 'layout' },
  { name: 'nui-data-table', icon: 'mdi:table-large', cat: 'data' },
  { name: 'nui-chart', icon: 'mdi:chart-bar', cat: 'data' },
  { name: 'nui-dialog', icon: 'mdi:message-outline', cat: 'feedback' },
  { name: 'nui-tabs', icon: 'mdi:tab', cat: 'layout' },
  { name: 'nui-select', icon: 'mdi:form-select', cat: 'forms' },
  { name: 'nui-meter-group', icon: 'mdi:gauge', cat: 'data' },
  { name: 'nui-accordion', icon: 'mdi:view-sequential', cat: 'layout' },
  { name: 'nui-color-picker', icon: 'mdi:palette-outline', cat: 'forms' },
  { name: 'nui-toast', icon: 'mdi:bell-ring-outline', cat: 'feedback' },
  { name: 'nui-date-picker', icon: 'mdi:calendar', cat: 'forms' },
  { name: 'nui-tree', icon: 'mdi:file-tree', cat: 'data' },
  { name: 'nui-file-upload', icon: 'mdi:cloud-upload-outline', cat: 'forms' },
  { name: 'nui-knob', icon: 'mdi:knob', cat: 'forms' },
  { name: 'nui-terminal', icon: 'mdi:console', cat: 'feedback' },
] as const;

export { componentDocsUrl, DOCS_ENTRY_URL };
