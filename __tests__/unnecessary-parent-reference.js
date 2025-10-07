import { describe, it, expect } from 'vitest';
import stylelint from 'stylelint';
import config from '../index.js';

const invalidCode = `
.parentreference {
  & > .bar {
    color: #f00;
  }
}
`;

describe('Unnecessary parent reference scss', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
      syntax: 'scss',
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(1);
      expect(warnings[0].text).toBe('Unnecessary nesting selector (&) (scss/selector-no-redundant-nesting-selector)');
    }));
});
