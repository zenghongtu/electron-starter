module.exports = {
  /* your base configuration of choice */
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],

  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  ignorePatterns: ["node_modules/**", "dist/**"],
  env: {
    browser: true,
    node: true,
  },
  globals: {
    __static: true,
  },
  rules: {
    /**
     * Having a semicolon helps the optimizer interpret your code correctly.
     * This avoids rare errors in optimized code.
     */
    semi: ["error", "always"],

    /**
     * This will make the history of changes in the hit a little cleaner
     */
    "comma-dangle": ["warn", "always-multiline"],

    /**
     * Just for beauty
     */
    quotes: ["warn", "single"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
