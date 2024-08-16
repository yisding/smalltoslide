import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: globals.browser },
  },
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "js": "never",
          "mjs": "never",
          "jsx": "never",
          "ts": "never",
          "tsx": "never"
        }
      ]
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"]
        }
      }
    },
    overrides: [
      {
        files: ["tests/*"],
        "env": {
          "jest": true
        }
      }
    ] 
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
];