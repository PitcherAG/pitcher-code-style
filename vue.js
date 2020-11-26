/** 
|--------------------------------------------------
| Vue.js specific rules
|--------------------------------------------------
**/

// inherit js rules
const js = require.resolve('./javascript');

module.exports = {
  // declare globals
  globals: {
    $: true,
    Ti: true,
    PLATFORM: true,
    $gettext: true,
    $ngettext: true,
    $t: true
  },
  extends: ['plugin:vue/vue3-strongly-recommended', js],
  rules: {
    'vue/custom-event-name-casing': ['error'],
    'vue/require-default-prop': 0,
    'vue/require-prop-types': ['error'],
    // Disabled error: this rule can't be used with Vue 2.x,
    // conflicts with no-v-for-template-key rule
    'vue/no-v-for-template-key-on-child': 0,
    // Enable when we migrate to Vue 3.x
    // 'vue/no-lone-template': ['error', {
    //   ignoreAccessible: false
    // }],
    'vue/order-in-components': ['error'],
    'vue/this-in-template': ['error', 'never'],
    'vue/block-tag-newline': ['error', {
      singleline: 'always'
    }],
    'vue/no-potential-component-option-typo': ['error'],
    'vue/html-comment-content-spacing': ['error', 'always'],
    'vue/html-comment-indent': ['error'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/no-duplicate-attr-inheritance': ['error'],
    'vue/no-static-inline-styles': ['error', {
      allowBinding: false
    }],
    'vue/no-unused-properties': ['error', {
      groups: ['props', 'setup']
    }],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/require-name-property': ['error'],
    'vue/match-component-file-name': ['error', {
      extensions: ['vue']
    }],
    'vue/no-reserved-component-names': ['error'],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 4,
        multiline: {
          max: 1,
          allowFirstLine: true
        }
      }
    ],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'always'
    }],
    'vue/max-len': [
      'warn',
      {
        code: 160,
        template: 160,
        tabWidth: 2,
        comments: 200,
        ignorePattern: '',
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: false,
        ignoreRegExpLiterals: false,
        ignoreHTMLAttributeValues: false,
        ignoreHTMLTextContents: false
      }
    ],
    'vue/html-indent': [
      'warn',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/no-template-shadow': 'error',
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'CONDITIONALS',
          'LIST_RENDERING',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'CONTENT',
          'EVENTS'
        ],
        alphabetical: false
      }
    ]
  }
}