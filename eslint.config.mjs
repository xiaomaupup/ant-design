import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

export default [
  {
    ignores: [
      'node_modules',
      'dist',
      '_site',
      'es/**/*',
      'lib/**/*',
      '.dumi/tmp',
      '.dumi/tmp-production',
    ],
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
];
