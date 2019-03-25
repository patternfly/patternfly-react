/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const helpers = require("./src/helpers/navHelpers");
const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const templatePath = path.resolve(`./src/templates/markdownTemplate.js`)

  const markdown = graphql(`
  {
    allMarkdownRemark {
      edges {
        node {
          fileAbsolutePath
          rawMarkdownBody
        }
      }
    }
  }`);

  return markdown.then(markdownRemark => {
    markdownRemark.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const componentName = helpers.getFileName(node.fileAbsolutePath);
      const folderName = helpers.getParentFolder(node.fileAbsolutePath);
      console.log('adding page', `/${componentName}`);
      actions.createPage({
        path: `/${componentName}`,
        component: templatePath,
        context: {
          fileAbsolutePath: node.fileAbsolutePath, // Helps us get the markdown
          pathRegex: `/${folderName}\/.*/`, // Helps us get the docgenned props
          examplesRegex: `/${folderName}\/examples\/.*/`, // Helps us inject the example files
        }
      });
    });
  })
};
