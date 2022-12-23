module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  globals: {
    window: true,
    define: true,
    require: true,
    module: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:markdown/recommended",
    "plugin:import/recommended",
    // 'plugin:jsx-a11y/recommended',
    "prettier",
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
    requireConfigFile: false,
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["@babel", "react", "jsx-a11y", "markdown", "prettier", "import"],
  overrides: [
    {
      files: ["**/*.md"],
      processor: "markdown/markdown",
    },
    {
      files: ["**/*.md/*.js"],
      rules: {
        "no-console": "off",
        "import/no-unresolved": "off",
      },
    },
  ],
  rules: {
    "padding-line-between-statements": [
      "warn",
      { blankLine: "never", prev: "import", next: "import" },
      { blankLine: "always", prev: "import", next: "class" },
      { blankLine: "always", prev: "import", next: "function" },
    ],
    "lines-between-class-members": ["warn", "always"],
    "react/destructuring-assignment": ["warn", "always"],
    "react/prop-types": ["warn"],
    "no-console": ["warn"],
    "no-undef": ["warn"],
    "no-fallthrough": ["warn"],
    "no-unused-vars": ["warn"],
    "no-debugger": ["warn"],
    "prettier/prettier": ["warn"],
    "react/self-closing-comp": [
      "warn",
      {
        component: true,
        html: true,
      },
    ],
    "import/named": "off",
    "react-hooks/exhaustive-deps": "off",
    "import/no-unresolved": [
      "error",
      {
        ignore: [".svg"],
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
