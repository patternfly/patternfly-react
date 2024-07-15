import tsParser from '@typescript-eslint/parser';
import markdown from 'eslint-plugin-markdown';
import patternflyReact from 'eslint-plugin-patternfly-react';
import react from 'eslint-plugin-react';

export default [
  ...markdown.configs.recommended,
  {
    plugins: {
      react,
      'patternfly-react': patternflyReact
    },
    languageOptions: {
      parser: tsParser
    },
    settings: {
      react: {
        version: 'detect'
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
      'react/jsx-no-undef': 'error'
    }
  }
];
