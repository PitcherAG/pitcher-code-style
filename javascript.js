/**
|--------------------------------------------------
| JavaScript rules, inherits eslint:recommended
|--------------------------------------------------
**/

const pitcherConfig = require('./pitcher.config')

module.exports = {
  extends: ['eslint:recommended'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    indent: ['error', pitcherConfig.indent],
    'max-len': [
      'error',
      {
        code: pitcherConfig.printWidth,
        ignoreComments: true,
        ignoreUrls: true
      }
    ],
    'no-prototype-builtins': 1,
    'no-empty': 1,
    'no-var': 1,
    'no-unused-vars': 2,
    'object-curly-spacing': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'prefer-arrow-callback': 1,
    'arrow-parens': ['error', 'as-needed'],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ]
  }
}
