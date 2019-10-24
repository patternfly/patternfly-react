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
        hiddenPages: ['withOuia'], // By title
        sideNav: {
          react: [
            { section: 'overview' },
            { section: 'charts' },
            { section: 'components' },
            { section: 'demos' },
            { section: 'experimental' },
            { section: 'inline table' },
            { section: 'layouts' },
            { section: 'virtual scroll' },
            { section: 'catalog view' },
          ]
        },
        topNavItems: [
          { text: 'Icons', path: '/icons' },
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
    // Source static pages
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages-react', // This determines sideNav context
        path: path.resolve(__dirname, './pages')
      }
    },
    // Our custom plugin for *.js?x *.ts?x files to get prop types
    {
      resolve: path.resolve(__dirname, './plugins/gatsby-transformer-react-docgen-typescript')
    },
    // Pipe MDX files through this plugin that spits out React components
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md']
      }
    },
    // The plugin for package.json files (to get version numbers)
    'gatsby-transformer-json',
  ]
};
