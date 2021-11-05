const recommended = require('./config/recommended');

module.exports = {
  rules: {
    'import-default-name': require('./rules/import-default-name'),
    'import-tokens-icons': require('./rules/import-tokens-icons'),
    'no-anonymous-functions': require('./rules/no-anonymous-functions'),
    'no-layout-effect': require('./rules/no-layout-effect'),
    'sort-class-members': require('./rules/sort-class-members')
  },
  configs: {
    recommended
  }
};
