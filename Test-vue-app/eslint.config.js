import js from "@eslint/js"
import globals from "globals"
import vue from "eslint-plugin-vue"

export default [
  {
    ignores: ["dist/**", "node_modules/**"],
  },

  js.configs.recommended,

  {
    files: ["**/*.{js,vue}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      vue,
    },
    rules: {},
  },

  ...vue.configs["flat/recommended"],
]