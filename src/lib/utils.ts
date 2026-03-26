const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prepend the site base path to a URL */
export function url(path: string): string {
  return `${base}${path}`;
}
