import { describe, it, expect } from 'vitest';
import stylelint from 'stylelint';
import config from '../index.js';

const invalidCode = `
.shorthand {
  margin: 1px 1px 1px 1px;
}
`;

describe('Shorthand', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(1);
      expect(warnings[0].text).toBe('Expected "1px 1px 1px 1px" to be "1px" (shorthand-property-no-redundant-values)');
    }));
});
