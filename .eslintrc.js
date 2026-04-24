module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier', 'react'],
  parser: '@typescript-eslint/parser',
  rules: {
    'max-len': ['error', 120],
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'no-nested-ternary': ['error'],
    'react/react-in-jsx-scope': 'off',
  },
};
