// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

import { locales, defaultLocale } from './src/i18n/utils.js';

// https://astro.build/config
export default defineConfig({
  site: "https://dzfsoft.es",
  base: "/",

  vite: {
    plugins: [tailwindcss()],
  },

	i18n: {
    locales: locales,
    defaultLocale: defaultLocale,
    routing: {
      prefixDefaultLocale: false,
    },
  },
});