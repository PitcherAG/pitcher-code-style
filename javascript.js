/**
|--------------------------------------------------
| JavaScript rules, inherits eslint:recommended
|--------------------------------------------------
**/

const pitcherConfig = require('./pitcher.config')

module.exports = {
  extends: ['eslint:recommended'],
  plugins: ['sort-imports-es6-autofix', 'import', 'node'],
  rules: {
    'sort-imports-es6-autofix/sort-imports-es6': [
      'error',
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none'],
      },
    ],
    'import/newline-after-import': ['error', { count: 1 }],
    'node/file-extension-in-import': ['error', 'always', { '.js': 'never', '.vue': 'never', '.ts': 'never' }],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    indent: ['error', pitcherConfig.indent],
    'max-len': [
      'error',
      {
        code: pitcherConfig.printWidth,
        ignoreComments: true,
        ignoreUrls: true,
      },
    ],
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    'object-curly-spacing': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'prefer-arrow-callback': 'error',
    'arrow-parens': ['error', 'always'],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'prefer-template': 'error',
    'dot-notation': 'error',
    'no-new-wrappers': 'error',
    'no-new-object': 'error',
    'consistent-return': 'error',
    'no-confusing-arrow': 'error',
    'prefer-spread': 'error',
    'no-param-reassign': 'error',
    'default-case': 'error',
    'no-lonely-if': 'error',
    'one-var': ['error', 'never'],
    radix: ['error', 'as-needed'],
    eqeqeq: 'error',
    'object-shorthand': ['error', 'always'],
    'no-throw-literal': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'any', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-prototype-builtins': 'warn',
    'no-empty': 'warn',
    'no-var': 'warn',
  },
}
