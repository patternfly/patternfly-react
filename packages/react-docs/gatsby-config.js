const { resolve } = require('path');

module.exports = {
  siteMetadata: {
    title: 'Patternfly React'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: resolve(__dirname, '../react-core/src/components')
      }
    },
    'gatsby-transformer-react-docgen'
  ]
};
