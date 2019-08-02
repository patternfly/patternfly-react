const navHelpers = require('./src/helpers/navHelpers');
const path = require('path');

// Add map PR-related environment variables to gatsby nodes
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const num = process.env.CIRCLE_PR_NUMBER;
  const url = process.env.CIRCLE_PULL_REQUEST;
  // Docs https://www.gatsbyjs.org/docs/actions/#createNode
  actions.createNode({
    name: 'PR_INFO',
    num: num || '',
    url: url || '',
    id: createNodeId(`PR_INFO`),
    parent: null,
    children: [],
    internal: {
      contentDigest: createContentDigest({ a: 'PR_INFO' }),
      type: `EnvVars`
    }
  });
};

// Create pages for markdown files
exports.createPages = ({ graphql, actions }) => {
  const mdx = graphql(`
    {
      allMdx {
        nodes {
          fileAbsolutePath
          frontmatter {
            title
            section
            fullscreen
            typescript
            propComponents
          }
        }
      }
    }
  `);

  return mdx.then(({ data }) => {
    data.allMdx.nodes.forEach(node => {
      const componentName = navHelpers.getFileName(node.fileAbsolutePath);
      const parentFolderName = navHelpers.getParentFolder(node.fileAbsolutePath, 3);
      const section = node.frontmatter.section ? node.frontmatter.section : 'components';

      let link = '/bad-page/';
      // Create fullscreen example component pages
      if (node.frontmatter.fullscreen) {
        link = `/${section}/${parentFolderName}/${componentName}/`.toLowerCase();
        // console.log('adding fullscreen page', link);
        actions.createPage({
          path: link,
          component: path.resolve('./src/templates/mdxFullscreenTemplate.js'),
          context: {
            title: node.frontmatter.title,
            fileAbsolutePath: node.fileAbsolutePath // Helps us get the markdown
          }
        });
      } else {
        // Normal templated component pages
        link = `/${section}/${componentName}/`.toLowerCase();
        // console.log('adding page', link, node.frontmatter.propComponents);
        actions.createPage({
          path: link,
          component: path.resolve('./src/templates/mdxTemplate.js'),
          context: {
            title: node.frontmatter.title,
            typescript: node.frontmatter.typescript, // For a badge
            fileAbsolutePath: node.fileAbsolutePath, // Helps us get the markdown
            propComponents: node.frontmatter.propComponents || [], // Helps us get the docgenned props
            pathRegex: node.frontmatter.section === 'experimental' ? '/.*/experimental/.*/' : '/^((?!experimental).)*$/' // Since experimental components have same class names
          }
        });
      }
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        // Resolve imports in our app to node_modules so they don't break
        '@patternfly-safe/patternfly': '@patternfly/patternfly',
        '@patternfly-safe/react-core': '@patternfly/react-core',
        '@patternfly-safe/react-icons': '@patternfly/react-icons',
        '@patternfly-safe/react-tokens': '@patternfly/react-tokens',
        // Resolve imports in .mdx files to local dist folders
        '@patternfly/react-charts': path.resolve(__dirname, '../react-charts'),
        '@patternfly/react-core': path.resolve(__dirname, '../react-core'),
        '@patternfly/react-icons': path.resolve(__dirname, '../../react-icons'),
        '@patternfly/react-inline-edit-extension': path.resolve(__dirname, '../react-inline-edit-extension'),
        '@patternfly/react-virtualized-extension': path.resolve(__dirname, '../react-virtualized-extension'),
        '@patternfly/react-styled-system': path.resolve(__dirname, '../react-styled-system'),
        '@patternfly/react-styles': path.resolve(__dirname, '../react-styles'),
        '@patternfly/react-table': path.resolve(__dirname, '../react-table'),
        '@patternfly/react-tokens': path.resolve(__dirname, '../react-tokens'),
        '@patternfly/react-topology': path.resolve(__dirname, '../react-topology'),
        // Hack to work downstream in https://github.com/patternfly/patternfly-org
        '@content': path.resolve(__dirname, 'src/components/componentDocs')
      }
    }
  });
};
