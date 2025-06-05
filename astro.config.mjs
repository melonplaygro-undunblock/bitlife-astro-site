import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [
    tailwind(),
    sitemap(),
  ],
  site: 'https://example.com', // ← replace with your real domain before deploying
});
