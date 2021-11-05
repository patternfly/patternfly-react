module.exports = {
  rules: {
    'patternfly-react/import-default-name': [
      'error',
      {
        classnames: 'classNames',
        'prop-types': 'PropTypes'
      }
    ],
    'jsx-a11y/heading-has-content': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true
      }
    ],
    'promise/catch-or-return': 'error',
    'promise/no-return-wrap': 'off',
    'promise/param-names': 'off',
    'promise/always-return': 'off',
    'promise/no-native': 'off',
    'promise/no-nesting': 'error',
    'promise/no-promise-in-callback': 'off',
    'promise/no-callback-in-promise': 'off',
    'promise/avoid-new': 'off',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'error',
    'promise/valid-params': 'error',
    'promise/prefer-await-to-then': 'off',
    'promise/prefer-await-to-callbacks': 'off',
    'import/no-named-default': 'off',
    'import/prefer-default-export': 'off',
    'no-alert': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-prototype-builtins': 'off',
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',
    'no-return-assign': ['error', 'except-parens'],
    'no-console': 'error',
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: true
      }
    ],
    'no-use-before-define': 'off',
    'prettier/prettier': [
      'error',
      { semi: true, singleQuote: true, tabWidth: 2, trailingComma: 'none', useTabs: false, printWidth: 120 }
    ],
    'react/no-array-index-key': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-uses-vars': 'error',
    'react/no-danger': 'off',
    'react/sort-comp': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/no-for-in-array': 'off',
    '@typescript-eslint/no-unnecessary-qualifier': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/prefer-includes': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/prefer-string-starts-ends-with': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/require-array-sort-compare': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/unbound-method': 'off',
    'react/default-props-match-prop-types': 'off',
    'react/prop-types': 'off'
  },
  extends: [
    'standard',
    'standard-react',
    'standard-jsx',
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:react-hooks/recommended'
  ],
  env: {
    es6: true,
    browser: true,
    node: true
  },
  plugins: ['prettier', 'jest', 'react', 'react-hooks', 'patternfly-react', '@typescript-eslint'],
  parser: '@typescript-eslint/parser'
};
