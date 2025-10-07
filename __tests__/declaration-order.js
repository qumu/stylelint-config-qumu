import { describe, it, expect } from 'vitest';
import stylelint from 'stylelint';
import config from '../index.js';

const invalidCode = `
.declarationorder {
  p {
    color: #f00;
    background-color: #0f0;
  }

  color: #f00;
  @include message-box();
  @extend %error;
}
`;

describe('Declaration order scss', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
      syntax: 'scss',
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(4);
      expect(warnings[0].text).toBe('Expected declaration to come before rule (order/order)');
      expect(warnings[1].text).toBe('Expected blockless @include to come before declaration (order/order)');
      expect(warnings[2].text).toBe('Expected @extend to come before blockless @include (order/order)');
      expect(warnings[3].text).toBe('Expected background-color to come before color (order/properties-alphabetical-order)');
    }));
});
