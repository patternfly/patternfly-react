/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

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
            htmlAst
            frontmatter {
              title
              cssPrefix
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const extension = path.extname(node.fileAbsolutePath);
      const componentName = path.basename(node.fileAbsolutePath, extension).toLowerCase().trim();
      const split = node.fileAbsolutePath.split('/');
      const folderName = split[split.length - 2]; // i.e. 'Alert' in '/ff/ff/Alert/AlertSomething.js'

      const pagePath = '/components/' + componentName
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
}