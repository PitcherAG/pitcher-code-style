/**
|--------------------------------------------------
| JavaScript rules, inherits eslint:recommended
|--------------------------------------------------
**/

const pitcherConfig = require('./pitcher.config')

module.exports = {
  extends: ['eslint:recommended'],
  globals: {
    $: true,
    Ti: true,
    kendo: true,
    $t: true,
  },
  rules: {
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    indent: ['error', pitcherConfig.indent],
    semi: ['error', 'always'],
    // 'max-len': [
    //   'error',
    //   {
    //     code: pitcherConfig.printWidth,
    //     ignoreComments: true,
    //     ignoreUrls: true,
    //   },
    // ],
    'no-unused-vars': 'warn',
    'object-curly-spacing': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'no-param-reassign': 'warn',
    'default-case': 'error',
    'one-var': ['error', 'never'],
    // eqeqeq: 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
    ],
    'no-prototype-builtins': 'warn',
    'no-empty': 'warn',
  },
}
