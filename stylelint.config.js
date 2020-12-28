module.exports = {
  extends: [
    'stylelint-config-standard'
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep', 'webkit-scrollbar']
      }
    ],
    'max-empty-lines': 1,
    'block-no-empty': true,
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'function-calc-no-invalid': true,
    'function-calc-no-unspaced-operator': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'selector-type-no-unknown': true,
    'comment-no-empty': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-extra-semicolons': true,
    'alpha-value-notation': 'number',
    'color-function-notation': 'legacy',
    'length-zero-no-unit': true,
    'shorthand-property-no-redundant-values': true,
    'selector-max-empty-lines': 0,
    'selector-pseudo-element-colon-notation': 'double',
    'color-hex-case': 'lower',
    'max-nesting-depth': 4,
    'no-unknown-animations': true,
    'number-leading-zero': 'never',
    'number-no-trailing-zeros': true,
    'string-quotes': 'double',
    'unit-case': 'lower',
    'value-keyword-case': 'lower',
    'value-list-max-empty-lines': 0,
    'declaration-bang-space-after': 'never',
    'declaration-block-semicolon-space-before': 'never',
    'block-closing-brace-empty-line-before': 'never',
    'rule-empty-line-before': 'always',
    indentation: 2
  }
}
