// Add types that are present in Core, React, and Org
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
    type TypeType @noInfer {
      name: String
    }
    type TsType @noInfer {
      name: String
      raw: String
    }
    type defaultValue @noInfer {
      value: String
    }
    type PropsType @noInfer {
      name: String!
      description: String
      required: Boolean
      type: TypeType
      tsType: TsType
      defaultValue: defaultValue
    }
    type ComponentMetadata implements Node @noInfer {
      name: String!
      props: [PropsType]
    }
  `;
  actions.createTypes(typeDefs);
}
