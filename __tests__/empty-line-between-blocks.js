import { describe, it, expect } from 'vitest';
import stylelint from 'stylelint';
import config from '../index.js';

const invalidCode = `
p {
  margin: 0;
  em {
    color: #f00;
  }
}
a {
  color: #f00;
}
`;

describe('Empty line between', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(2);
      expect(warnings[0].text).toBe('Expected empty line before rule (rule-empty-line-before)');
      expect(warnings[1].text).toBe('Expected empty line before rule (rule-empty-line-before)');
    }));
});
