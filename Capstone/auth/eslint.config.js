// eslint.config.js
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // Base config for JavaScript
  js.configs.recommended,

  // TypeScript support
  ...tseslint.configs.recommended,

  {
    languageOptions: {
      parserOptions: {
        sourceType: "module",
      },
    },
    rules: {
      // Example custom rules:
      "no-unused-vars": "off", // handled by TS
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  }
);
