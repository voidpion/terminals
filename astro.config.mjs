// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const isVercel = Boolean(process.env.VERCEL);

// https://astro.build/config
export default defineConfig({
  site: isVercel ? undefined : 'https://voidpion.github.io',
  base: isVercel ? '/' : '/terminals',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
