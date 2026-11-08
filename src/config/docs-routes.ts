/**
 * Docs SPA routes used by the shell, sitemap, and marketing links.
 * Static assets live under /docs/*; public URLs are pretty paths.
 */

export const DOCS_ENTRY_URL = '/installation';

export const GUIDE_ROUTES = [
  '/installation',
  '/configuration',
  '/styled-mode',
  '/unstyled-mode',
  '/isolated-mode',
] as const;

export const RESOURCE_ROUTES = [
  '/resources',
  '/resources/discord',
  '/resources/contributing',
  '/resources/code-of-conduct',
  '/resources/license',
  '/resources/security',
] as const;

/** Component tags with the nui- prefix stripped for /components/:slug */
export const COMPONENT_SLUGS = [
  'accordion',
  'anchor',
  'auto-complete',
  'avatar',
  'badge',
  'button',
  'card',
  'chart',
  'checkbox',
  'color-picker',
  'data-table',
  'date-picker',
  'deferred-content',
  'dialog',
  'divider',
  'dock',
  'file-upload',
  'float-label',
  'heading',
  'icon',
  'image',
  'input-mask',
  'input-number',
  'input-otp',
  'input-text',
  'knob',
  'label',
  'listbox',
  'logo',
  'menu',
  'meter-group',
  'paragraph',
  'password',
  'popover',
  'progress-bar',
  'progress-spinner',
  'radio-button',
  'rating',
  'scroll-panel',
  'scroll-top',
  'select',
  'select-button',
  'skeleton',
  'slider',
  'speed-dial',
  'swiper',
  'tabs',
  'tag',
  'terminal',
  'textarea',
  'tile',
  'toast',
  'tooltip',
  'tree',
] as const;

export function componentDocsUrl(tagOrSlug: string): string {
  const slug = tagOrSlug.startsWith('nui-') ? tagOrSlug.slice(4) : tagOrSlug;
  return `/components/${slug}`;
}

export const COMPONENT_ROUTES = COMPONENT_SLUGS.map(
  (slug) => `/components/${slug}`,
);

/** All indexable docs URLs (excluding marketing homepage). */
export const DOCS_SITEMAP_PATHS = [
  ...GUIDE_ROUTES,
  ...RESOURCE_ROUTES,
  '/components',
  ...COMPONENT_ROUTES,
] as const;

const GUIDE_SET = new Set<string>(GUIDE_ROUTES);
const RESOURCE_PREFIX = '/resources';

/** True when a request should be served by the docs SPA shell. */
export function isDocsSpaPath(pathname: string): boolean {
  const path =
    pathname.length > 1 && pathname.endsWith('/')
      ? pathname.slice(0, -1)
      : pathname;

  if (GUIDE_SET.has(path)) return true;
  if (path === '/components' || path.startsWith('/components/')) return true;
  if (path === RESOURCE_PREFIX || path.startsWith(`${RESOURCE_PREFIX}/`)) {
    return true;
  }

  return false;
}
