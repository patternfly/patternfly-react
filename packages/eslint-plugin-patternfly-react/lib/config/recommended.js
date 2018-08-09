module.exports = {
  rules: {
    'patternfly-react/import-default-name': [
      'error',
      {
        classnames: 'classNames',
        'prop-types': 'PropTypes'
      }
    ],
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
    'import/no-named-default': 'off',
    'import/prefer-default-export': 'off',
    'no-alert': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-prototype-builtins': 'off',
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',
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
    'react/sort-comp': 'off'
  },
  extends: [
    'standard',
    'standard-react',
    'standard-jsx',
    'airbnb',
    'plugin:jest/recommended',
    'prettier',
    'prettier/react'
  ],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  plugins: ['prettier', 'jest', 'react', 'patternfly-react'],
  parser: 'babel-eslint'
};
