import { fixupPluginRules } from '@eslint/compat';
import js from '@eslint/js';
import patternflyReact from 'eslint-plugin-patternfly-react';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import reactCompiler from 'eslint-plugin-react-compiler';
import reactHooks from 'eslint-plugin-react-hooks';
import react from 'eslint-plugin-react';
import testingLibrary from 'eslint-plugin-testing-library';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: [
      '**/dist',
      '**/css',
      'packages/react-core/src/helpers/Popper/thirdparty',
      'packages/react-docs/patternfly-docs/generated',
      'packages/react-docs/coverage',
      '.history/*',
      'packages/react-docs/static',
      'packages/react-docs/public',
      '**/.cache'
    ]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  eslintPluginPrettierRecommended,
  {
    plugins: {
      'patternfly-react': fixupPluginRules(patternflyReact),
      'react-hooks': fixupPluginRules(reactHooks),
      'react-compiler': reactCompiler
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-wrapper-object-types': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
      '@typescript-eslint/ban-ts-comment': 'off',
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
          argsIgnorePattern: '^_',
          caughtErrors: 'none'
        }
      ],
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      '@typescript-eslint/unified-signatures': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'arrow-body-style': 'error',
      camelcase: [
        'error',
        {
          ignoreDestructuring: true,
          allow: ['^t_[global|chart]', '^chart_']
          // TODO: Remove 'chart_' from the allowed patterns after updating all chart examples to use the 't_chart_' format
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
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'react',
              importNames: ['default'],
              message: 'Please use named imports when importing from React.'
            }
          ]
        }
      ],
      'no-shadow': 'off',
      'no-throw-literal': 'error',
      'no-trailing-spaces': 'off',
      'no-undef-init': 'error',
      'no-constant-binary-expression': 'off',
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
      radix: ['error', 'as-needed'],
      'react/prop-types': 0,
      'react/display-name': 0,
      'react-compiler/react-compiler': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
      'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
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
  {
    files: ['**/*.test.[jt]s?(x)'],
    plugins: {
      'testing-library': fixupPluginRules(testingLibrary)
    },
    rules: {
      ...testingLibrary.configs.react.rules,
      '@typescript-eslint/no-unused-vars': 'off',
      'testing-library/no-node-access': 'off',
      'react/jsx-key': 'off',
      'react/no-children-prop': 'off',
      'no-console': 'off'
    }
  },
  {
    files: ['packages/react-integration/demo-app-ts/**/*'],
    rules: {
      'patternfly-react/no-anonymous-functions': 'off',
      'react/react-in-jsx-scope': 'off',
      'spaced-comment': 'off'
    }
  }
];
