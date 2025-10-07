import errors from './rules/errors.js';
import language from './rules/language.js';
import style from './rules/style.js';
import order from './rules/order.js';
import scss from './rules/scss.js';

export default {
  customSyntax: 'postcss-scss',
  plugins: [
    'stylelint-scss',
    'stylelint-order',
    '@stylistic/stylelint-plugin',
  ],
  rules: {
    ...errors.rules,
    ...language.rules,
    ...style.rules,
    ...order.rules,
    ...scss.rules,
  },
};
