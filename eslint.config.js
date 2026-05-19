import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { 
      globals: globals.node // informuje lintera, że kod działa w Node.js (zna zmienne globalne typu process, require itp.)
    } 
  },
  pluginJs.configs.recommended, // włącza rekomendowane reguły ESLinta
  {
    rules: {
      "no-unused-vars": "warn",   // nieużywane zmienne będą tylko ostrzeżeniem, nie błędem blokującym
      "no-undef": "error"         // użycie niezdefiniowanych zmiennych całkowicie zablokuje commit
    }
  }
];