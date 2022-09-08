## [1.4.1](https://github.com/PitcherAG/pitcher-code-style/compare/v1.4.0...v1.4.1) (2022-09-08)


### Bug Fixes

* add lacking peerDependencies [PLA-6929] ([7304aa2](https://github.com/PitcherAG/pitcher-code-style/commit/7304aa259d530b46b66648748ec8485a165ba516))

# [1.4.0](https://github.com/PitcherAG/pitcher-code-style/compare/v1.3.0...v1.4.0) (2022-08-08)


### Bug Fixes

* remove unused dependency and config [PLA-6929] ([97982e9](https://github.com/PitcherAG/pitcher-code-style/commit/97982e9f68b67c81cb92f2ad446edc294d171c49))


### Features

* apply rule updates based on CoP discussions [PLA-6929] ([70ae494](https://github.com/PitcherAG/pitcher-code-style/commit/70ae4942d2bc6f4c2ac514095c9a96602a7a223f))
* essential configuration added ([#7](https://github.com/PitcherAG/pitcher-code-style/issues/7)) ([f3ce235](https://github.com/PitcherAG/pitcher-code-style/commit/f3ce2352b71be2a8cd676f431ac85c2fd727442b))

# [1.3.0](https://github.com/PitcherAG/pitcher-code-style/compare/v1.2.1...v1.3.0) (2021-09-17)


### Features

* es5 configuration ([#5](https://github.com/PitcherAG/pitcher-code-style/issues/5)) ([09ba350](https://github.com/PitcherAG/pitcher-code-style/commit/09ba35070c5d9dc1992f22f931e7d4a7f88547a6))
* semantic release setup ([#6](https://github.com/PitcherAG/pitcher-code-style/issues/6)) ([0e1f600](https://github.com/PitcherAG/pitcher-code-style/commit/0e1f600dcbc1103854c7100fc8ae03c146c8bc62))

## 1.2.1
| lib | rule | change | reason | 
| ------ | ------ | ------ | ------ |
| prettier | [trailingCommas](https://prettier.io/docs/en/options.html#trailing-commas) | `es5` | extensible object properties via duplicating lines that IMHO it's worth the visual noise of a comma (current prettier default) |
| prettier | [arrowParens](https://prettier.io/docs/en/options.html#arrow-function-parentheses) | `always` | again with the means of extensibility it is much easier to add a comma and a new param (current prettier default) |
| eslint | [prefer-template](https://eslint.org/docs/rules/prefer-template) | `error` | let string concatenation RIP |
| eslint | [dot-notation](https://eslint.org/docs/rules/dot-notation) | `error` | much easier to parse cognitively, leaves `['']` notation for dynamic access  |
| eslint | [no-new-wrappers](https://eslint.org/docs/rules/no-new-wrappers) | `error` | read rule link  |
| eslint | [no-new-object](https://eslint.org/docs/rules/no-new-object) | `error` | read rule link  |
| eslint | [consistent-return](https://eslint.org/docs/rules/consistent-return) | `error` | improves predictability and consistency of code  |
| eslint | [no-confusing-arrow](https://eslint.org/docs/rules/no-confusing-arrow) | `error` | improves parsing ternary logic as function output |
| eslint | [prefer-spread](https://eslint.org/docs/rules/prefer-spread) | `error` | read rule link |
| eslint | [no-param-reassign](https://eslint.org/docs/rules/no-param-reassign) | `error` | one step closer to pure functions and FP best practices |
| eslint | [prefer-arrow-callback](https://eslint.org/docs/rules/prefer-arrow-callback) | `error` | read rule link |
| eslint | [default-case](https://eslint.org/docs/rules/default-case) | `error` | add a default case to those `switch`es |
| eslint | [eqeqeq](https://eslint.org/docs/rules/eqeqeq) | `error` | please no type coercion ```[] == false // true``` |
| eslint | [no-lonely-if](https://eslint.org/docs/rules/no-lonely-if) | `error` | read rule link |
| eslint | [radix](https://eslint.org/docs/rules/radix) | `error` | read rule link |
| eslint | [one-var](https://eslint.org/docs/rules/one-var) | `["error", "never"]` | cleaner and declarative |
| eslint | [object-shorthand](https://eslint.org/docs/rules/object-shorthand) | `["error", "always"]` | :heart_eyes:  |
| eslint | [no-throw-literal](https://eslint.org/docs/rules/no-throw-literal) | `error` | read rule link |

```js
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": "*", "next": "return" },
      { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*" },
      { "blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"] },
      { "blankLine": "always", "prev": "directive", "next": "*" },
      { "blankLine": "any", "prev": "directive", "next": "directive" }
    ],
```

Fixes:
- Validation of v-slot usage
```js
'vue/valid-v-slot': ['error', {
  allowModifiers: true,
}],
```

## 1.1.1
 - add component definition name casing, kebab-case

## 1.1.0
 - added prettier & prettier rules
 - disabled `vue/max-attributes-per-line` as it is colliding with prettier
 - created `pitcher.config.js` to inherit globals from
 - re-ordered vue rules
 - applied new eslint rules
  
## 1.0.1
 - update README.md
 - add comments to the files

## 1.0.0
 - added Javascript rules
 - added Vue rules
 - added .eslintrc.json for the project
 - published to npm version 1.0.0
