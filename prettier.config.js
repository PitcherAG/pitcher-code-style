// File is used in vue.js to get the rules

const pConfig = require('./pitcher.config')

module.exports = {
  printWidth: pConfig.printWidth,
  tabWidth: pConfig.indent,
  singleQuote: true,
  semi: false,
  trailingComma: 'none',
  arrowParens: 'avoid',
  htmlWhitespaceSensitivity: 'ignore'
}
