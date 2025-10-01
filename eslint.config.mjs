import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser,
      require: true,
      module: true,
      process: true,
      describe: true,
      test: true,
      it: true,
      expect: true,
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
]);
