/** 
|--------------------------------------------------
| Vue.js specific rules
|--------------------------------------------------
**/

// inherit js rules
const js = require.resolve('./javascript')
const pitcherConfig = require('./pitcher.config')
const prettierConfig = require('./prettier.config')

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
  extends: ['plugin:vue/vue3-strongly-recommended', js, '@vue/prettier'],
  rules: {
    // Show prettier rules as error instead of warning
    'prettier/prettier': ['error', prettierConfig],

    /* Naming rules*/
    'vue/custom-event-name-casing': ['error'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/component-definition-name-casing': ['error', 'kebab-case'],
    'vue/no-reserved-component-names': ['error'],

    /* Component rules */
    'vue/require-default-prop': 0,
    'vue/require-name-property': ['error'],
    'vue/require-prop-types': ['error'],
    'vue/no-unused-properties': [
      'error',
      {
        groups: ['props', 'setup']
      }
    ],
    'vue/no-potential-component-option-typo': ['warn'],
    // Disabled for now
    // 'vue/match-component-file-name': ['error', {
    //   extensions: ['vue']
    // }],

    /* Order rules */
    'vue/order-in-components': ['error'],
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
    ],

    /* Template rules */
    'vue/html-comment-content-spacing': ['error', 'always'],
    'vue/no-duplicate-attr-inheritance': ['error'],
    'vue/singleline-html-element-content-newline': 0,
    'vue/this-in-template': ['error', 'never'],
    // Disabled rule: can't be used with Vue 2.x, conflicts with no-v-for-template-key rule
    'vue/no-v-for-template-key-on-child': 0,
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/no-template-shadow': 'error',
    'vue/max-len': [
      'warn',
      {
        code: pitcherConfig.printWidth,
        template: pitcherConfig.printWidth,
        tabWidth: pitcherConfig.indent,
        comments: pitcherConfig.commentWidth,
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
    // Disabled completely, as this is colliding with Prettier
    // 'vue/max-attributes-per-line': [
    //   'error',
    //   {
    //     singleline: 4,
    //     multiline: {
    //       max: 1,
    //       allowFirstLine: true
    //     }
    //   }
    // ]
    'vue/html-indent': [
      'warn',
      pitcherConfig.indent,
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
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/block-tag-newline': [
      'error',
      {
        singleline: 'always'
      }
    ],
    'vue/no-static-inline-styles': [
      'error',
      {
        allowBinding: true
      }
    ]
    // Enable when we migrate to Vue 3.x
    // 'vue/no-lone-template': ['error', {
    //   ignoreAccessible: false
    // }]
  }
}
