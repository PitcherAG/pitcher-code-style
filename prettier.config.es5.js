// File is used in vue.js to get the rules

const pitcherConfig = require('./pitcher.config')

module.exports = {
  printWidth: pitcherConfig.printWidth,
  tabWidth: pitcherConfig.indent,
  singleQuote: true,
  semi: true,
  trailingComma: 'es5',
  arrowParens: 'never',
  htmlWhitespaceSensitivity: 'ignore',
}
