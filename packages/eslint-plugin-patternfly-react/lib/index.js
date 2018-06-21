const recommended = require('./config/recommended');
const importDefaultName = require('./rules/import-default-name');

module.exports = {
  rules: {
    'import-default-name': importDefaultName
  },
  configs: {
    recommended
  }
};
