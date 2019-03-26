/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const navHelpers = require("./src/helpers/navHelpers");
const astHelpers = require("./src/helpers/astHelpers");
const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const templatePath = path.resolve(`./src/templates/markdownTemplate.js`);

  const markdown = graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
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
    }
  `);

  return markdown.then(markdownRemark => {
    markdownRemark.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const componentName = navHelpers.getFileName(node.fileAbsolutePath);
      const folderName = navHelpers.getParentFolder(node.fileAbsolutePath);

      // Create fullscreen example component pages
      if (node.frontmatter.seperatePages) {
        astHelpers.getLinks(node.htmlAst).forEach(link => {
          if (link.endsWith('/'))
            link = link.substr(0, link.length - 1);
          const split = link.split('/');
          const demoComponent = split[split.length - 1];
          const basePath = path.dirname(node.fileAbsolutePath);

          console.log('adding page', link);
          actions.createPage({
            path: link,
            // Assume components are under "examples" folder and hence in example_index.js
            component: path.resolve(`${basePath}/examples/${demoComponent}.js`),
          });
        })
      }
      // Normal, templated component pages
      console.log('adding page', `/components/${componentName}/`);
      actions.createPage({
        path: `/components/${componentName}/`,
        component: templatePath,
        context: {
          title: node.frontmatter.title,
          fileAbsolutePath: node.fileAbsolutePath, // Helps us get the markdown
          pathRegex: `/${folderName}\/.*/`, // Helps us get the docgenned props
          examplesRegex: `/${folderName}\/examples\/.*/`, // Helps us inject the example files
        }
      });
    });
  })
};
