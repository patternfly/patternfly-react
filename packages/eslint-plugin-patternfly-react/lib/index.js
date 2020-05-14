const recommended = require('./config/recommended');

module.exports = {
  rules: {
    'import-default-name': require('./rules/import-default-name'),
    'import-tokens-icons': require('./rules/import-tokens-icons')
  },
  configs: {
    recommended
  }
};
