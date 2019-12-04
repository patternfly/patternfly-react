const { mdxTypeDefs } = require('gatsby-theme-patternfly-org');

// https://www.gatsbyjs.org/docs/schema-customization/
exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(mdxTypeDefs);
}
