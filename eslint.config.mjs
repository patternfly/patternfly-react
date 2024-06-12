import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import patternflyReact from 'eslint-plugin-patternfly-react';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  {
    ignores: [
      '**/node_modules',
      '**/dist',
      '**/thirdparty',
      '**/tsc_out',
      '**/.out',
      '**/.changelog',
      '**/.DS_Store',
      '**/coverage',
      '**/.cache',
      '**/.tmp',
      '**/Generated',
      '**/build',
      '**/css',
      'packages/react-docs/.cache',
      'packages/react-docs/static',
      'packages/react-docs/public',
      'packages/react-integration/results',
      'packages/react-integration/demo-app-ts/dist',
      '**/yarn-error.log',
      '**/lerna-debug.log',
      '**/.idea',
      '**/.project',
      '**/.classpath',
      '**/.c9',
      '**/*.launch',
      '**/.settings',
      '**/*.sublime-workspace',
      '**/.history',
      '**/.vscode',
      '**/.vscode',
      '**/*.swp',
      '**/docs',
      '**/DeprecatedPopperTypes.ts',
      '**/DeprecatedTippyTypes.ts',
      'packages/react-core/src/helpers/Popper/thirdparty/**/*',
      '**/README.md'
    ]
  },
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended'
    )
  ),
  {
    plugins: {
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      prettier,
      'patternfly-react': patternflyReact
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        describe: 'readonly',
        test: 'readonly',
        jest: 'readonly',
        expect: 'readonly',
        require: 'readonly',
        global: 'writable',
        it: 'readonly',
        afterEach: 'readonly',
        beforeEach: 'readonly'
      },

      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },

    settings: {
      react: {
        version: 'detect'
      }
    },

    rules: {
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/consistent-type-definitions': 'error',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/no-duplicate-enum-values': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-namespace': 'error',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_'
        }
      ],

      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      '@typescript-eslint/unified-signatures': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'arrow-body-style': 'error',

      camelcase: [
        'error',
        {
          ignoreDestructuring: true
        }
      ],

      'constructor-super': 'error',
      curly: 'error',
      'dot-notation': 'error',
      eqeqeq: ['error', 'smart'],
      'guard-for-in': 'error',
      'max-classes-per-file': ['error', 1],
      'max-len': 'off',
      'no-nested-ternary': 'error',
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-cond-assign': 'error',
      'no-console': 'error',
      'no-debugger': 'error',
      'no-empty': 'error',
      'no-eval': 'error',
      'no-new-wrappers': 'error',
      'no-prototype-builtins': 'off',
      'no-shadow': 'off',
      'no-throw-literal': 'error',
      'no-trailing-spaces': 'off',
      'no-undef-init': 'error',
      'no-unsafe-finally': 'error',

      'no-unused-expressions': [
        'error',
        {
          allowTernary: true,
          allowShortCircuit: true
        }
      ],

      'no-unused-labels': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'one-var': ['error', 'never'],
      'patternfly-react/import-tokens-icons': 'error',
      'patternfly-react/no-anonymous-functions': 'error',
      'prefer-const': 'error',
      'prettier/prettier': 'error',
      radix: ['error', 'as-needed'],
      'react/prop-types': 0,
      'react/display-name': 0,
      'react-hooks/exhaustive-deps': 'warn',

      'react/no-unescaped-entities': [
        'error',
        {
          forbid: ['>', '}']
        }
      ],

      'spaced-comment': 'error',
      'use-isnan': 'error',
      'patternfly-react/no-layout-effect': 'error',
      'valid-typeof': 'off'
    }
  },
  {
    files: ['**/examples/*', '**/demos/examples/**/*'],

    rules: {
      'patternfly-react/no-anonymous-functions': 'off'
    }
  },
  ...compat.extends('plugin:testing-library/react').map((config) => ({
    ...config,
    files: ['**/*.test.[jt]s?(x)'],
    rules: {
      'testing-library/no-node-access': 'off',
      'react/jsx-key': 'off',
      'no-console': 'off'
    }
  })),
  {
    files: ['packages/react-integration/demo-app-ts/**/*'],

    rules: {
      'patternfly-react/no-anonymous-functions': 'off',
      'react/react-in-jsx-scope': 'off',
      'spaced-comment': 'off'
    }
  }
];
