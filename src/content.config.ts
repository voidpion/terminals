import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const baseFields = {
  title: z.string(),
  description: z.string(),
  website: z.string().url().optional(),
  github: z.string().url().optional(),
  logo: z.string().optional(),
  screenshot: z.string().optional(),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  recommended: z.boolean().default(false),
  order: z.number().default(99),
  pubDate: z.coerce.date().optional(),
  updatedDate: z.coerce.date().optional(),
};

const emulators = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/emulators' }),
  schema: z.object({
    ...baseFields,
    platforms: z.array(z.enum(['macOS', 'Windows', 'Linux'])).default([]),
    license: z.enum(['MIT', 'Apache-2.0', 'GPL', 'Proprietary', 'Other']).default('Other'),
    gpu_accelerated: z.boolean().default(false),
    multiplexer_builtin: z.boolean().default(false),
    pricing: z.enum(['free', 'freemium', 'paid']).default('free'),
  }),
});

const shells = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/shells' }),
  schema: z.object({
    ...baseFields,
    language: z.string().optional(),
    posix_compatible: z.boolean().default(true),
    default_on: z.array(z.string()).default([]),
    config_file: z.string().optional(),
  }),
});

const configs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/configs' }),
  schema: z.object({
    ...baseFields,
    config_type: z.enum(['shell', 'multiplexer', 'prompt', 'editor', 'other']).default('other'),
    target_tool: z.string(),
    filename: z.string(),
  }),
});

const themes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/themes' }),
  schema: z.object({
    ...baseFields,
    theme_type: z.enum(['prompt', 'color_scheme', 'framework']).default('prompt'),
    compatible_with: z.array(z.string()).default([]),
  }),
});

const tools = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/tools' }),
  schema: z.object({
    ...baseFields,
    category: z.enum([
      'search', 'file_manager', 'viewer', 'multiplexer',
      'git', 'system', 'network', 'productivity', 'other',
    ]).default('other'),
    replaces: z.string().optional(),
    install_cmd: z.string().optional(),
    written_in: z.string().optional(),
  }),
});

const fonts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/fonts' }),
  schema: z.object({
    ...baseFields,
    ligatures: z.boolean().default(false),
    nerd_font_variant: z.boolean().default(false),
    styles: z.array(z.string()).default([]),
    preview_text: z.string().default('Terminal > ls -la ~/.config'),
  }),
});

export const collections = {
  emulators,
  shells,
  configs,
  themes,
  tools,
  fonts,
};
