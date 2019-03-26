// This is the entrypoint of gatsby (aside from boring default gatsby plugins)
module.exports = {
  siteMetadata: {
    title: `Patternfly React Docs`,
    description: `Documentation for https://github.com/patternfly/patternfly-react`,
    keywords: `Red Hat`,
  },
  pathPrefix: `/patternfly-4`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    { // react-core source files to pipe through transformer-react-docgen to get prop types
      // react-core *.md files to pipe through transformer-remark
      // react-core example/* files to dynamically require in various ways
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `react-core`,
        path: `${__dirname}/../react-core/src`,
        ignore: [`**/*.d.ts`, `**/*.test.*`, `**/index.*`, `**/helpers/**`, `**/styles/**`]
      },
    },
    `gatsby-transformer-react-docgen-typescript`,
    `gatsby-transformer-react-examples`,
    `gatsby-transformer-remark`
  ],
}
