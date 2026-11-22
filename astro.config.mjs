// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// The repo must be named exactly "parisap06.github.io" so GitHub Pages
// serves the site at https://parisap06.github.io/ (no sub-path needed).
// https://astro.build/config
export default defineConfig({
  site: 'https://parisap06.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
});
