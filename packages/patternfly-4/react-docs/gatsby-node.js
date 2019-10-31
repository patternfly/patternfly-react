// Add types that are present in React
exports.createSchemaCustomization = ({ actions }) => {
  const typeDefs = `
    type MdxFrontmatter @infer {
      title: String!
      section: String
      cssPrefix: String
      hideTOC: Boolean
      optIn: String
      experimentalStage: String
      propComponents: [String]
      hideDarkMode: Boolean
      reactComponentName: String
      coreComponentName: String
      showTitle: Boolean
    }
    type Mdx implements Node @infer {
      frontmatter: MdxFrontmatter
    }
  `;
  actions.createTypes(typeDefs);
}
