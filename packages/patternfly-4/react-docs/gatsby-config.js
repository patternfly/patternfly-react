const { resolve } = require('path');

module.exports = {
  siteMetadata: {
    title: 'PatternFly React'
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `ts-docs`,
        path: resolve(__dirname, 'ts-docs/')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: resolve(__dirname, '../react-core/src')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: resolve(__dirname, '../react-charts/src')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: resolve(__dirname, '../react-table/src')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: resolve(__dirname, '../react-styled-system/src')
      }
    },
    'gatsby-transformer-react-docgen'
  ],
  pathPrefix: 'patternfly-4'
};
