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
        path: resolve(__dirname, '../react-core/src'),
        ignore: [`**/*.d.ts`, `**/helpers`]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: resolve(__dirname, '../react-charts/src'),
        ignore: [`**/*.d.ts`]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: resolve(__dirname, '../react-table/src'),
        ignore: [`**/*.d.ts`]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: resolve(__dirname, '../react-styled-system/src'),
        ignore: [`**/*.d.ts`]
      }
    },
    'gatsby-plugin-typescript',
    'gatsby-transformer-react-docgen'
  ],
  pathPrefix: 'patternfly-4'
};
