const path = require('path');

module.exports = {
  root: true,
  extends: ['plugin:patternfly-react/recommended'],
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
              './dist/js/build/babel',
              './dist/js/build/jest/transform',
              './dist/js/build/jest/snapshot-serializer'
            ]
          }
        ],
        'import/no-extraneous-dependencies': 'off',
        'import/extensions': 'off'
      }
    },
    {
      files: ['**/examples/*.js'],
      rules: {
        'react/prefer-stateless-function': 'off'
      }
    }
  ],
  settings: {
    'import/resolver': {
      node: {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      },
      webpack: {
        config: {
          resolve: {
            modules: [
              path.resolve(__dirname, './'),
              path.resolve(__dirname, './node_modules'),
              path.resolve(__dirname, '../../'),
              path.resolve(__dirname, '../../node_modules')
            ],
            alias: {
              '@patternfly/react-icons': path.resolve(__dirname, '../react-icons/src')
            }
          }
        }
      }
    }
  }
};
