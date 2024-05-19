/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    'plugin:vue/vue3-strongly-recommended',
    'eslint:recommended',
    'prettier',
  ],
  rules: {
    'linebreak-style': 0,
    'vuejs-accessibility/form-control-has-label': 0,
    'prefer-destructuring': 0,
    'vuejs-accessibility/label-has-for': 0,
    'vuejs-accessibility/click-events-have-key-events': 0,
    'no-nested-ternary': 0,
    'no-bitwise': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
  },
};
