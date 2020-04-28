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
        context: 'react', // For global items that need sideNav
        showGdprBanner: false, // GDPR banner
        hiddenPages: ['Training'], // By title
        sideNav: {
          react: [
            { section: 'overview' },
            { section: 'charts' },
            { section: 'components' },
            { section: 'demos' },
            { section: 'extensions' },
            { section: 'layouts' }
          ]
        },
        topNavItems: [{ text: 'Icons', path: '/icons' }]
      }
    },
    // Source shared pages from the theme
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'shared', // This goes in URLs
        // TODO: prettier way to do this
        path: require.resolve('gatsby-theme-patternfly-org').replace('index.js', 'pages')
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
          '**/public',
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
        path: path.resolve(__dirname, './RELEASE-NOTES.md')
      }
    },
    // Source training
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'react', // This goes in URLs
        path: path.resolve(__dirname, './src/training.md')
      }
    },
    // Our custom plugin for *.js?x *.ts?x files to get prop types
    {
      resolve: 'gatsby-transformer-react-docgen-typescript'
    },
    // Pipe MDX files through this plugin that spits out React components
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md']
      }
    },
    // The plugin for package.json files (to get version numbers)
    'gatsby-transformer-json'
  ]
};
