import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://jangya.github.io",
  output: "static",
  integrations: [mdx()],
  build: {
    inlineStylesheets: "always",
  },
});
