const { resolve } = require('path');

module.exports = {
  siteMetadata: {
    title: 'PatternFly React'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: resolve(__dirname, '../react-core/src')
      }
    },
    'gatsby-transformer-react-docgen',
    'gatsby-plugin-emotion'
  ],
  pathPrefix: 'patternfly-4'
};
