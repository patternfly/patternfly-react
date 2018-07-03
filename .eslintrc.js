const path = require('path');

module.exports = {
  root: true,
  extends: ['plugin:patternfly-react/recommended'],
  rules: {
    'import/first': 'off'
  },
  overrides: [
    {
      files: ['**/__mocks__/**', '**/Stories/**', '*.stories.js', '*.test.js'],
      rules: {
        'import/no-extraneous-dependencies': 'off'
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
              path.resolve(__dirname, './node_modules')
            ],
            alias: {
              '@patternfly/react-icons': path.resolve(
                __dirname,
                './packages/react-icons/src'
              )
            }
          }
        }
      }
    }
  }
};
