/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const helpers = require("./src/helpers/navHelpers")
const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`./src/templates/markdownTemplate.js`)

  return graphql(`
{
  allMarkdownRemark {
    edges {
      node {
        fileAbsolutePath
      }
    }
  }
}
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const pagePath = helpers.getPagePath(node.fileAbsolutePath); // node.fileAbsolutePath // 
      const folderName = helpers.getParentFolder(node.fileAbsolutePath); // 'asdf' //

      console.log('adding page', pagePath);
      createPage({
        path: pagePath,
        component: blogPostTemplate,
        context: {
          fileAbsolutePath: node.fileAbsolutePath, // Helps us get the markdown
          pathRegex: `/${folderName}\/.*/` // Helps us get the docgenned props
        }
      })
    })
  })
};
