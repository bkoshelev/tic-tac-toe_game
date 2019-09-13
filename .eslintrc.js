module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "airbnb-base",
    "plugin:jest/recommended",
    "plugin:lodash-fp/recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/react",
    "prettier",
    "prettier/react",
    "plugin:compat/recommended",
    "plugin:unicorn/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 6,
    sourceType: "module"
  },
  plugins: ["react", "babel", "react-hooks", 'prettier', 'import', "unicorn", "jsx-a11y"],
  rules: {
    "unicorn/filename-case": 0,
   // 'no-console': 0,
   // "no-use-before-define": 0,
    "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*.test.js", "**/*.spec.js", "**/*.stories.js"] }],
    "react/display-name": 0,
    "unicorn/prevent-abbreviations": 0,
    "no-magic-numbers": ["error", { "enforceConst": true, detectObjects: true }],
    "no-warning-comments": ["error"],
    "max-len": ["error", { "code": 80 }],
    "react/prop-types": ["error", { ignore: ['children'], }]
  },
  "settings": {
    "react": {
      "version": "16.8.4",
      "ignoreTranspilerName": true
    },
    "import/extensions": [
      ".js",
      ".jsx"
    ],
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx"]
      }
    }
  }
};