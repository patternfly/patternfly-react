// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('@cypress/webpack-preprocessor');

module.exports = on => {
  const options = {
    // send in the options from your webpack.config.js, so it works the same
    // as your app's code
    // eslint-disable-next-line global-require
    webpackOptions: require('../../webpack.config')
  };

  on('file:preprocessor', webpack(options));
};
