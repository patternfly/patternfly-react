import { fixupPluginRules } from '@eslint/compat';
import markdown from 'eslint-plugin-markdown';
import patternflyReact from 'eslint-plugin-patternfly-react';
import react from 'eslint-plugin-react';
import tsParser from '@typescript-eslint/parser';

export default [
  ...markdown.configs.recommended,
  {
    plugins: {
      react: fixupPluginRules(react),
      'patternfly-react': patternflyReact
    },

    languageOptions: {
      ecmaVersion: 9,
      sourceType: 'module',
      parser: tsParser,

      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },

    settings: {
      react: {
        version: '16.4.0'
      }
    },

    rules: {
      'eol-last': 'error',
      'spaced-comment': 'error',
      'no-unused-vars': 'off',
      'no-this-before-super': 'error',
      'patternfly-react/import-tokens-icons': 'error',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/no-unknown-property': 'error',
      'react/jsx-no-undef': 'off'
    }
  }
];
