const recommended = require('./config/recommended');

module.exports = {
  rules: {
    'import-default-name': require('./rules/import-default-name'),
    'import-tokens-icons': require('./rules/import-tokens-icons'),
    'no-anonymous-functions': require('./rules/no-anonymous-functions')
  },
  configs: {
    recommended
  }
};
