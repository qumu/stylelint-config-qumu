import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov', 'html'],
    },
    environment: 'node',
    include: ['**/__tests__/**/*.js'],
  },
});
