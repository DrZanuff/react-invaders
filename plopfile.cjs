/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const componentGenerator = require('./plop/component-generator.cjs')
// import componentGenerator from '../plop/component-generator'

module.exports = function (plop) {
  componentGenerator(plop)
}
