// eslint.config.mjs
import antfu from '@antfu/eslint-config';

export default antfu({
  ignores: [
    '**/node_modules/**',
    '**/dist/**',
    '**/_site/**',
    '**/es/**',
    '**/lib/**',
    '**/.dumi/tmp/**',
    '**/.dumi/tmp-production/**',
    '**/*.snap',
  ],
  type: 'lib',
  stylistic: false,
  typescript: true,
  react: true,
  rules: {
    'node/prefer-global/process': 'off',
    'jsdoc/empty-tags': 'off',
    'jest/no-export': 'off',
    'ts/explicit-function-return-type': 'off',
  },
});
