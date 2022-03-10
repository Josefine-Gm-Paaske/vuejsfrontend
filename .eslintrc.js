module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },

  extends: [
    'plugin:vue/vue3-recommended',
  ],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@babel/eslint-parser'
  },

  plugins: [
    'vue'
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },

  root: true,

  'extends': [
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:prettier/recommended'
  ]
}
