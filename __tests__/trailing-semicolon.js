import { describe, it, expect } from 'vitest';
import stylelint from 'stylelint';
import config from '../index.js';

const invalidCode = `
.trailingsemicolon {
  background-color: #fff ;
  color: #fff
}
`;

describe('Trailing semicolon', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(2);
      expect(warnings[0].text).toBe('Unexpected whitespace before ";" (@stylistic/declaration-block-semicolon-space-before)');
      expect(warnings[1].text).toBe('Expected a trailing semicolon (@stylistic/declaration-block-trailing-semicolon)');
    }));
});
