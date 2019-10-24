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
    }
    type Mdx implements Node @infer {
      frontmatter: MdxFrontmatter
    }
    type TypeType @infer {
      name: String!
    }
    type TsType @infer {
      name: String!
      raw: String
    }
    type defaultValue @infer {
      value: String!
    }
    type PropsType @infer {
      name: String
      description: String
      required: Boolean
      type: TypeType
      tsType: TsType
      defaultValue: defaultValue
    }
    type ComponentMetadata implements Node @infer {
      name: String!
      props: PropsType
    }
  `;
  actions.createTypes(typeDefs);
}
