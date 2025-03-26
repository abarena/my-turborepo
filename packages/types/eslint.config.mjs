import { defineConfig } from "eslint/config";
import tsParser from "@typescript-eslint/parser";
import { config } from "@repo/eslint-config/base";

export default defineConfig([
  {
    extends: [config],

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 5,
      sourceType: "script",

      parserOptions: {
        tsconfigRootDir:
          "/Users/angelbarena/Documents/my-turborepo/packages/types",
      },
    },
  },
]);
