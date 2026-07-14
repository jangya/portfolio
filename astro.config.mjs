import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jangya.github.io',
  output: 'static',
  build: {
    inlineStylesheets: 'always',
  },
});
