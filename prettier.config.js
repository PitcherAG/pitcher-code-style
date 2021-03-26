// File is used in vue.js to get the rules

const pitcherConfig = require('./pitcher.config')

module.exports = {
  printWidth: pitcherConfig.printWidth,
  tabWidth: pitcherConfig.indent,
  singleQuote: true,
  semi: false,
  trailingComma: 'es5',
  arrowParens: 'always',
  htmlWhitespaceSensitivity: 'ignore',
}
