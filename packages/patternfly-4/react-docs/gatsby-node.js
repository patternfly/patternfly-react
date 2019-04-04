const navHelpers = require("./src/helpers/navHelpers");
const astHelpers = require("./src/helpers/astHelpers");
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
}

exports.createPages = ({ actions, graphql }) => {
  const templatePath = path.resolve('./src/templates/markdownTemplate.js');

  const markdown = graphql(`
    {
      allMarkdownRemark {
        nodes {
          fileAbsolutePath
          htmlAst
          frontmatter {
            title
            section
            seperatePages
          }
        }
      }
    }
  `);
  return markdown.then(result => {
    result.data.allMarkdownRemark.nodes.forEach(node => {
      const componentName = navHelpers.getFileName(node.fileAbsolutePath);
      const folderName = navHelpers.getParentFolder(node.fileAbsolutePath);

      let link = '/bad-page/';
      let context = {};
      // Create fullscreen example component pages for any links in the *.md
      if (node.frontmatter.seperatePages) {
        // Create the templated page to link to them differently
        link = `/${node.frontmatter.section}/${componentName}/`;
        context = {
          title: node.frontmatter.title,
          fileAbsolutePath: node.fileAbsolutePath,
          pathRegex: '', // No props
          examplesRegex: '', // No examples to inject (they're on separate pages)
        };

        // Create the separate pages
        astHelpers.getLinks(node.htmlAst).forEach(mdLink => {
          const split = mdLink
            .replace('.', '')
            .split('/')
            .filter(s => s);
          const demoComponent = split[split.length - 1];
          const basePath = path.dirname(node.fileAbsolutePath);

          actions.createPage({
            path: `${link}${split.join('/')}/`,
            // Assume [Link](/PageLayoutSimpleNav/) in *.md means there is a ./examples/PageLayoutSimpleNav.js
            component: path.resolve(`${basePath}/examples/${demoComponent}.js`),
          });
        });
      } else {
        // Normal templated component pages
        let section = node.frontmatter.section ? node.frontmatter.section : 'components';
        link = `/${section}/${componentName}/`;
        context = {
          title: node.frontmatter.title,
          fileAbsolutePath: node.fileAbsolutePath, // Helps us get the markdown
          pathRegex: `/${folderName}\/.*/`, // Helps us get the docgenned props
          examplesRegex: `/${folderName}\/examples\/.*/`, // Helps us inject the example files
        }
      }
      // console.log('adding page', link);
      actions.createPage({
        path: link,
        component: templatePath,
        context: context
      });
    });
  })
};
