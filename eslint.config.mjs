import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import react from 'eslint-plugin-react';
import babel from '@babel/eslint-plugin';
import jest from 'eslint-plugin-jest';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';
import unicorn from 'eslint-plugin-unicorn';
import markdown from 'eslint-plugin-markdown';
import lodash from 'eslint-plugin-lodash';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      'components/**/*.js',
      'components/**/*.jsx',
      'components/version/token.tsx',
      '!components/*/__tests__/**/*.js',
      '!components/*/demo/*.md',
      '!**/.*.js',
      '**/~*',
      '**/typings',
      'es/**/*',
      'lib/**/*',
      '**/locale',
      '**/server',
      '.dumi/tmp',
      '.dumi/tmp-production',
      '!**/.dumi/',
      '**/node_modules',
      '**/.eslintcache',
      '**/_site',
      '**/dist',
      '**/coverage',
      '**/*.d.ts',
      'scripts/previewEditor/**/*',
      '**/jest-stare',
    ],
  },
  ...fixupConfigRules(
    compat.extends(
      'airbnb',
      'prettier',
      'plugin:compat/recommended',
      'plugin:jest/recommended',
      'plugin:react/recommended',
      'plugin:import/typescript',
      'plugin:markdown/recommended-legacy',
    ),
  ).map((config) => ({
    ...config,
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.md', '**/*.json'],
  })),
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.md', '**/*.json'],

    plugins: {
      react: fixupPluginRules(react),
      '@babel': babel,
      jest: fixupPluginRules(jest),
      '@typescript-eslint': typescriptEslint,
      'react-hooks': fixupPluginRules(reactHooks),
      unicorn,
      markdown: fixupPluginRules(markdown),
      lodash,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jasmine,
        ...globals.jest,
        gtag: true,
      },

      parser: tsParser,
    },

    settings: {
      react: {
        version: 'detect',
      },

      polyfills: ['Promise', 'URL'],

      'import/resolver': {
        typescript: {},
      },
    },

    rules: {
      'react/jsx-one-expression-per-line': 0,
      'react/prop-types': 0,
      'react/forbid-prop-types': 0,
      'react/jsx-indent': 0,

      'react/jsx-wrap-multilines': [
        'error',
        {
          declaration: false,
          assignment: false,
        },
      ],

      'react/jsx-filename-extension': 0,
      'react/state-in-constructor': 0,
      'react/jsx-props-no-spreading': 0,
      'react/destructuring-assignment': 0,
      'react/require-default-props': 0,
      'react/sort-comp': 0,
      'react/display-name': 0,
      'react/static-property-placement': 0,
      'react/jsx-no-bind': 0,
      'react/no-find-dom-node': 0,
      'react/no-unused-prop-types': 0,
      'react/default-props-match-prop-types': 0,
      'react-hooks/rules-of-hooks': 2,
      'react/function-component-definition': 0,
      'react/no-unused-class-component-methods': 0,
      'import/extensions': 0,
      'import/no-cycle': 2,
      'lodash/import-scope': 2,

      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            'site/**',
            'tests/**',
            'scripts/**',
            'scripts/*.ts',
            '**/*.test.js',
            '**/__tests__/*',
            '*.config.js',
            '**/*.md',
          ],
        },
      ],

      'jsx-a11y/no-static-element-interactions': 0,
      'jsx-a11y/anchor-has-content': 0,
      'jsx-a11y/click-events-have-key-events': 0,
      'jsx-a11y/anchor-is-valid': 0,
      'jsx-a11y/no-noninteractive-element-interactions': 0,
      'jsx-a11y/label-has-for': 0,
      'comma-dangle': ['error', 'always-multiline'],
      'consistent-return': 0,
      'no-param-reassign': 0,
      'no-underscore-dangle': 0,
      'no-plusplus': 0,
      'no-continue': 0,
      'no-restricted-globals': 0,
      'max-classes-per-file': 0,
      'jest/no-test-callback': 0,
      'jest/expect-expect': 0,
      'jest/no-done-callback': 0,
      'jest/valid-title': 0,
      'jest/no-conditional-expect': 0,
      'jest/no-standalone-expect': 0,
      'unicorn/better-regex': 2,
      'unicorn/prefer-string-trim-start-end': 2,
      'unicorn/expiring-todo-comments': 2,
      'unicorn/no-abusive-eslint-disable': 0,
      'no-use-before-define': 0,
      '@typescript-eslint/no-use-before-define': 2,
      'no-shadow': 0,

      '@typescript-eslint/no-shadow': [
        2,
        {
          ignoreTypeValueShadow: true,
        },
      ],

      'no-undef': 0,
      'import/order': 0,
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],

    rules: {
      '@typescript-eslint/no-unused-vars': [
        2,
        {
          args: 'none',
        },
      ],

      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': 2,

      '@typescript-eslint/consistent-type-imports': [
        2,
        {
          disallowTypeAnnotations: false,
        },
      ],

      'import/consistent-type-specifier-style': 2,
    },
  },
  {
    files: ['components/*/demo/*.md'],
    processor: 'markdown/markdown',
  },
  {
    files: ['components/**/demo/*.tsx'],

    rules: {
      'import/no-extraneous-dependencies': 0,
      'no-console': 0,
      'compat/compat': 0,
      'react/no-unstable-nested-components': 0,
      'jsx-a11y/control-has-associated-label': 0,
      'class-methods-use-this': 0,
      'react/no-access-state-in-setstate': 0,
    },
  },
  {
    files: ['.dumi/**/*.ts', '.dumi/**/*.tsx', '.dumi/**/*.js', '.dumi/**/*.jsx'],

    rules: {
      'import/no-extraneous-dependencies': 0,
      'no-console': 0,
      'compat/compat': 0,
      'react/no-unstable-nested-components': 0,
      'jsx-a11y/control-has-associated-label': 0,
      'class-methods-use-this': 0,
      'react/no-access-state-in-setstate': 0,

      'react/no-unknown-property': [
        'error',
        {
          ignore: ['css'],
        },
      ],

      'react/no-array-index-key': 0,
      'react/button-has-type': 0,
      'react/no-danger': 0,
    },
  },
  {
    files: ['**/*.json'],

    rules: {
      'no-unused-expressions': 0,
      'comma-dangle': 0,
    },
  },
  {
    files: ['**/*.test.ts', '**/*.test.tsx', '**/*.spec.ts', '**/*.spec.tsx'],

    rules: {
      'compat/compat': 0,
    },
  },
];
