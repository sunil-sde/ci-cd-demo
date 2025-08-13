import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // General JS files → Node environment
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.node, // Allow require, module, etc.
      },
    },
  },
  // Test files → Jest environment
  {
    files: ["**/__tests__/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.jest, // Allow test, expect, etc.
        ...globals.node, // Allow require in tests too
      },
    },
  },
]);
