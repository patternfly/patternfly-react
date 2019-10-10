// This is the entrypoint of gatsby (aside from boring default gatsby plugins)
const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Patternfly 4 - React',
    description: 'Documentation for https://github.com/patternfly/patternfly-react',
    keywords: 'Red Hat'
  },
  pathPrefix: '/patternfly-4',
  plugins: [
    // Use our patternfly.org theme
    {
      resolve: `gatsby-theme-patternfly-org`,
      options: {
        // By title:
        hiddenPages: ['withOuia'],
        sideNavItems: [
          { section: 'charts' },
          { section: 'components' },
          { section: 'demos' },
          { section: 'experimental' },
          { section: 'inline table' },
          { section: 'layouts' },
          { section: 'virtual scroll' },
          { text: 'Release notes', link: '/documentation/react/release-notes' },
          { text: 'Global CSS Variables', link: '/documentation/global-css-variables' },
        ],
        topNavItems: [
          {
            text: 'Contribute',
            link: '/contributing'
          },
          {
            text: 'Icons',
            link: '/icons'
          }
        ],
      }
    },
    // Source component documentation
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'react', // This goes in URLs
        path: path.resolve(__dirname, '..'),
        /* Files we never care to pull data from
         * Matched by https://github.com/paulmillr/chokidar */
        ignore: [
          '**/dist',
          '**/helpers',
          '**/scripts',
          '**/styles',
          '**/build',
          '**/utils',
          '**/test-helpers',
          /.*react-styles.*/,
          /.*react-docs.*/,
          /.*react-integration.*/,
          // eslint-disable-next-line no-useless-escape
          '**/\..*', // dotfiles
          '**/*.d.ts',
          '**/*.test.*',
          '**/index.*',
          '**/tsconfig.*',
          '**/tslint.*',
          '**/README.*',
          '**/CHANGELOG.*'
        ]
      }
    },
    // Source release notes
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'react', // This goes in URLs
        path: path.resolve(__dirname, '../../../RELEASE-NOTES.md')
      }
    },
    // Our custom plugin for *.js?x *.ts?x files to get prop types
    {
      resolve: path.resolve(__dirname, './plugins/gatsby-transformer-react-docgen-typescript')
    },
    // TODO: remove this
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [],
        precision: 5
      }
    },
    // The plugin for package.json files (to get version numbers)
    'gatsby-transformer-json'
  ]
};
