module.exports = {
  siteMetadata: {
    title: `Patternfly React Docs`,
    description: `Documentation for https://github.com/patternfly/patternfly-react`,
    keywords: `Red Hat`,
  },
  pathPrefix: `/patternfly-4`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    { // react-core source files to pipe through react-docgen
      // react-core .md files to pipe through remark
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `react-core`,
        path: `${__dirname}/../react-core/src/components`,
        ignore: [`**/*.d.ts`, `**/*.test.*`, `**/index.*`]
      },
    },
    `gatsby-transformer-react-docgen-typescript`,
    `gatsby-transformer-remark`
  ],
}
