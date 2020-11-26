/** 
|--------------------------------------------------
| JavaScript rules, inherits eslint:recommended
|--------------------------------------------------
**/

module.exports = {
  extends: ['eslint:recommended'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'max-len': [
      'error',
      {
        code: 160,
        ignoreComments: true,
        ignoreUrls: true
      }
    ],
    'no-prototype-builtins': 1,
    'no-empty': 1,
    'no-var': 1,
    'no-unused-vars': 2,
    'prefer-arrow-callback': 1,
    'arrow-parens': ['error', 'as-needed'],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ],
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }]
  }
}