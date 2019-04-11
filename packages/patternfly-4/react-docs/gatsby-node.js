const navHelpers = require("./src/helpers/navHelpers");
const path = require("path");

// Add map PR-related environment variables to gatsby nodes
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const num = process.env.CIRCLE_PR_NUMBER;
  const url = process.env.CIRCLE_PULL_REQUEST;
  // Docs https://www.gatsbyjs.org/docs/actions/#createNode
  actions.createNode({
    name: 'PR_INFO',
    num: num ? num : '',
    url: url ? url : '',
    id: createNodeId(`PR_INFO`),
    parent: null,
    children: [],
    internal: {
      contentDigest: createContentDigest({ a: 'PR_INFO' }),
      type: `EnvVars`,
    },
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
        }
      }
    }
  }
  `);

  return mdx.then(({ data }) => {
    data.allMdx.nodes.forEach(node => {
      const componentName = navHelpers.getFileName(node.fileAbsolutePath).toLowerCase();
      const folderName = navHelpers.getParentFolder(node.fileAbsolutePath).toLowerCase();

      let link = '/bad-page/';
      // Create fullscreen example component pages for any links in the *.md
      if (node.frontmatter.fullscreen) {
        // Create the templated page to link to them differently
        const parentFolderName = navHelpers.getParentFolder(node.fileAbsolutePath, 3).toLowerCase();
        link = `/${node.frontmatter.section}/${parentFolderName}/${componentName}/`;
        console.log('adding fullscreen page', link);
        actions.createPage({
          path: link,
          component: path.resolve('./src/templates/mdxFullscreenTemplate.js'),
          context: {
            title: node.frontmatter.title,
            fileAbsolutePath: node.fileAbsolutePath, // Helps us get the markdown
          }
        });
      } else {
        // Normal templated component pages
        let section = node.frontmatter.section ? node.frontmatter.section.toLowerCase() : 'components';
        link = `/${section}/${componentName}/`;
        console.log('adding page', link);
        actions.createPage({
          path: link,
          component: path.resolve('./src/templates/mdxTemplate.js'),
          context: {
            title: node.frontmatter.title,
            fileAbsolutePath: node.fileAbsolutePath, // Helps us get the markdown
            pathRegex: `/${folderName}\/.*/` // Helps us get the docgenned props
          }
        });
      }
    });
  });
};
