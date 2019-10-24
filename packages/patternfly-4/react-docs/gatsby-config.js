const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Patternfly 4 - React'
  },
  pathPrefix: '/patternfly-4',
  plugins: [
    // Use our patternfly.org theme
    {
      resolve: `gatsby-theme-patternfly-org`,
      options: {
        hiddenPages: ['withOuia'], // By title
        sideNavItems: [
          { section: 'charts' },
          { section: 'components' },
          { section: 'demos' },
          { section: 'experimental' },
          { section: 'inline table' },
          { section: 'layouts' },
          { section: 'virtual scroll' },
          { section: 'catalog view' },
          { text: 'Release notes', link: '/documentation/react/release-notes' },
          { text: 'Global CSS Variables', link: '/documentation/global-css-variables' },
        ],
        topNavItems: [
          { text: 'Icons', link: '/icons' },
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
          '**/\\..*', // dotfiles
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
    // The plugin for package.json files (to get version numbers)
    'gatsby-transformer-json',
    // Duplicated from gatsby-theme-patternfly-org
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve('gatsby-theme-patternfly-org/templates/mdxDefault.js'),
        },
      }
    },
  ]
};
