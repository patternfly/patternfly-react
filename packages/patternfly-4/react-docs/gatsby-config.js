// This is the entrypoint of gatsby (aside from boring default gatsby plugins)
module.exports = {
  siteMetadata: {
    title: `Patternfly React Docs`,
    description: `Documentation for https://github.com/patternfly/patternfly-react`,
    keywords: `Red Hat`,
  },
  pathPrefix: `/patternfly-4`,
  plugins: [
    // Plugin to inject stuff into <head></head>
    `gatsby-plugin-react-helmet`,
    // Plugin to load source files to do fun things with
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `react-core`,
        path: `${__dirname}/../react-core/src`,
        ignore: [`**/*.d.ts`, `**/*.test.*`, `**/index.*`, `**/helpers/**`, `**/styles/**`]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `react-charts`,
        path: `${__dirname}/../react-charts/src`,
        ignore: [`**/*.d.ts`, `**/*.test.*`, `**/index.*`, `**/scripts/**`]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `react-table`,
        path: `${__dirname}/../react-table/src`,
        ignore: [`**/*.d.ts`, `**/*.test.*`, `**/index.*`, `**/scripts/**`, `**/build/**`, `**/utils/**`, `**/test-helpers/**`]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `react-inline-edit-extension`,
        path: `${__dirname}/../react-inline-edit-extension/src`,
        ignore: [`**/*.d.ts`, `**/*.test.*`, `**/index.*`, `**/scripts/**`, `**/build/**`, `**/utils/**`, `**/test-helpers/**`]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `react-styled-system`,
        path: `${__dirname}/../react-styled-system/src`,
        ignore: [`**/*.d.ts`, `**/*.test.*`, `**/index.*`, `**/scripts/**`]
      },
    },
    // Our custom plugin for *.js?x *.ts?x files to get prop types
    `gatsby-transformer-react-docgen-typescript`,
    // Our custom plugin for examples/**/*.(js|svg) files to add to .cache/example_index.js
    // ...then webpack deals with those files statically instead of us dynamically :)
    `gatsby-transformer-react-examples`,
    // The markdown plugin for *.md files
    `gatsby-transformer-remark`
  ],
}
