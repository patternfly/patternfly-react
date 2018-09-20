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
