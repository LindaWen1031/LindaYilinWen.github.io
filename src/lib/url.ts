/**
 * The site is served from a sub-path (e.g. /portfolio) on GitHub Pages, so every
 * internal link and asset path has to be prefixed with the base. Always build
 * internal URLs with `url()` and you will never hit a broken link locally or live.
 */
const BASE = import.meta.env.BASE_URL;

export function url(path = '/'): string {
  const base = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  const rest = path.startsWith('/') ? path : `/${path}`;
  const joined = `${base}${rest}`;
  return joined === '' ? '/' : joined;
}

/** True when `href` is the page currently being rendered. */
export function isCurrent(href: string, pathname: string): boolean {
  const strip = (s: string) => (s.length > 1 ? s.replace(/\/+$/, '') : s);
  const a = strip(href);
  const b = strip(pathname);
  if (a === url('/')) return b === a;
  return b === a || b.startsWith(`${a}/`);
}
