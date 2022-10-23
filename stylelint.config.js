module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'length-zero-no-unit': null,
    'no-descending-specificity': null,
    'declaration-empty-line-before': null,
    'font-family-no-missing-generic-family-keyword': null
  }
}
