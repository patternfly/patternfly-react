// This is the entrypoint of gatsby (aside from boring default gatsby plugins)

// Files we never care to pull data from
const ignore = [
  `**/dist/**`,
  `**/*.d.ts`,
  `**/*.test.*`,
  `**/index.*`,
  `**/helpers/**`,
  `**/scripts/**`,
  `**/styles/**`,
  `**/build/**`,
  `**/utils/**`,
  `**/test-helpers/**`,
  `**/\.*`,
  `**/\..*/**`,
  `**/tsconfig.*`,
  `**/tslint.*`,
  `**/README.*`,
  `**/CHANGELOG.*`,
  `**/react\-docs/**`,
  `**/react\-styles/**`,
  `**/react\-integration/**`,
];

module.exports = {
  siteMetadata: {
    title: `Patternfly 4 React Docs`,
    description: `Documentation for https://github.com/patternfly/patternfly-react`,
    keywords: `Red Hat`,
  },
  pathPrefix: `/patternfly-4`,
  plugins: [
    // Plugin to inject stuff into <head></head>
    `gatsby-plugin-react-helmet`,
    // Plugin to load pf4 files to do fun documentation things with
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `patternfly-4`,
        path: `${__dirname}/../../patternfly-4`,
        ignore: ignore
      },
    },
    // Our custom plugin for *.js?x *.ts?x files to get prop types
    `gatsby-transformer-react-docgen-typescript`,
    // Our custom plugin for examples/*.(js|svg) files to add to .cache/example_index.js
    // ...then webpack deals with those files statically instead of us dynamically :)
    `gatsby-transformer-react-examples`,
    // The markdown plugin for *.md files
    `gatsby-transformer-remark`,
    // The plugin for package.json files (to get version numbers)
    `gatsby-transformer-json`,
  ],
}
