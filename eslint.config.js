import { defineConfig } from 'eslint/config';
import { javascript } from '@enghouse-qumu/eslint-config';

export default defineConfig([
  {
    extends: [javascript],
    files: ['**/*.{js,mjs,cjs}'],
  },
]);
