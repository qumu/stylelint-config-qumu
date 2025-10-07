import { describe, it, expect } from 'vitest';
import stylelint from 'stylelint';
import config from '../index.js';

const invalidCode = `
@function calculationFunction($some-number, $another-number) {
  @return $some-number + $another-number;
}

@mixin myMixin() {
  color: #fff;
}

$myVar: 10px;

%placeHolder {
  color: #f00;
}
`;

describe('Name format scss', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
      syntax: 'scss',
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(4);
      expect(warnings[0].text).toBe('Expected @function name to match specified pattern (scss/at-function-pattern)');
      expect(warnings[1].text).toBe('Expected @mixin name to match specified pattern (scss/at-mixin-pattern)');
      expect(warnings[2].text).toBe('Expected $ variable name to match specified pattern (scss/dollar-variable-pattern)');
      expect(warnings[3].text).toBe('Expected %-placeholder "%placeHolder" to match specified pattern (scss/percent-placeholder-pattern)');
    }));
});
