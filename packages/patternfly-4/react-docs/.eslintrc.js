// We need this file to disable gatsby's default webpack eslintrc
// which will complain when we `import { css } from '@patternfly/react-styles';`
const path = require('path');

module.exports = {
  root: true,
  extends: ['plugin:patternfly-react/recommended'],
  plugins: ['react'],
  rules: {
    'import/first': 'off'
  },
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        'import/no-unresolved': [
          'error',
          {
            ignore: [
              '@patternfly/react-topology'
            ]
          }
        ],
        'import/no-extraneous-dependencies': 'off',
        'import/extensions': 'off'
      }
    }
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            modules: [
              path.resolve(__dirname, './'),
              path.resolve(__dirname, './node_modules'),
              path.resolve(__dirname, '../../'),
              path.resolve(__dirname, '../../node_modules')
            ]
          }
        }
      }
    }
  }
};
