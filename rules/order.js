export default {
  rules: {
    // Specify the order of content within declaration blocks.
    // https://github.com/hudochenkov/stylelint-order/blob/master/rules/order/README.md
    'order/order': [
      [
        'custom-properties',
        'dollar-variables',
        {
          name: 'extend',
          type: 'at-rule',
        },
        {
          hasBlock: false,
          name: 'include',
          type: 'at-rule',
        },
        'declarations',
        {
          hasBlock: true,
          name: 'include',
          type: 'at-rule',
        },
        'rules',
      ],
    ],

    // Specify the alphabetical order of properties within declaration blocks.
    // https://github.com/hudochenkov/stylelint-order/tree/master/rules/properties-alphabetical-order
    'order/properties-alphabetical-order': true,
  },
};
