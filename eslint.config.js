import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import * as astroParser from "astro-eslint-parser";
import tsParser from "@typescript-eslint/parser";
import astro from "eslint-plugin-astro";

export default [
  {
    ignores: ["dist/**", "node_modules/**", ".astro/**"],
  },
  js.configs.recommended,
  ...astro.configs.recommended,
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".astro"],
      },
    },
  },
  prettier,
];
