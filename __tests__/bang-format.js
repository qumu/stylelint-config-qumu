import { describe, it, expect } from 'vitest';
import stylelint from 'stylelint';
import config from '../index.js';

const invalidCode = `
.bangformat {
  background-color: #000! important;
  color: #000!important;
}
`;

describe('Bang format scss', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(3);
      expect(warnings[0].text).toBe('Unexpected whitespace after "!" (@stylistic/declaration-bang-space-after)');
      expect(warnings[1].text).toBe('Expected single space before "!" (@stylistic/declaration-bang-space-before)');
      expect(warnings[2].text).toBe('Expected single space before "!" (@stylistic/declaration-bang-space-before)');
    }));
});
