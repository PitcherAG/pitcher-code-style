// File is used in project root to get the prettier rules

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
