import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { locales, defaultLocale } from "./src/i18n/config";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale,
    locales: [...locales],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
