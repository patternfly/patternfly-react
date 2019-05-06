// This is the entrypoint of gatsby (aside from boring default gatsby plugins)
const path = require("path");

// Files we never care to pull data from
// matched by https://github.com/paulmillr/chokidar
const ignore = [
  `**/dist`,
  `**/helpers`,
  `**/scripts`,
  `**/styles`,
  `**/build`,
  `**/utils`,
  `**/test-helpers`,
  /.*react-styles.*/,
  /.*react-docs.*/,
  /.*react-integration.*/,
  `**/\..*`, // dotfiles
  `**/*.d.ts`,
  `**/*.test.*`,
  `**/index.*`,
  `**/tsconfig.*`,
  `**/tslint.*`,
  `**/README.*`,
  `**/CHANGELOG.*`,
  /\.tsx?$/ // Typescript files get sourced for docgen differently
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
        path: path.resolve(`${__dirname}/..`),
        ignore: ignore
      },
    },
    // Our custom plugin to run react-docgen or typedoc for JS/TS prop types
    {
      resolve: path.resolve(`${__dirname}/plugins/gatsby-transformer-react-docgen-typescript`),
      options: {
        typedoc: {
          src: [path.resolve(`${__dirname}/../react-core/src`)],
          tsconfig: path.resolve(`${__dirname}/../react-core/tsconfig.base.json`),
        }
      }
    },
    // The markdown plugin for *.md files
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: [`.mdx`, `.md`]
      }
    },
    // The plugin for package.json files (to get version numbers)
    `gatsby-transformer-json`,
  ],
}
