import React from "react"
import { graphql } from "gatsby"
import { getUsedComponents } from './helpers'
import SidebarLayout from "../components/sidebarLayout"
import { Tokens, Props, LiveEdit } from "../components/componentDocs"
import rehypeReact from "rehype-react"
import { getScope } from '../helpers/dynamicImports';


const getRehypeReact = scope => {
  return new rehypeReact({
    // Here we inject the scope property down to our liveEdit
    createElement: (type, props, ...children) => {
      if (typeof type === 'function') {
        props.scope = scope;
      }
      return React.createElement(type, props, ...children);
    },
    components: {
      code: LiveEdit
    },
  }).Compiler;
}

export default function Template({ data, pageContext }) {
  // Exported components in the folder (i.e. src/components/Alerts/*)
  const siblingComponents = data.metadata.edges.map(e => e.node.name)
  // Exported components with names used in the docs
  const propComponents = getUsedComponents(data.markdownRemark.htmlAst, siblingComponents, {})
  // Finally, the props for each relevant component!
  const props = data.metadata.edges
    .filter(edge => propComponents.indexOf(edge.node.name) !== -1)
    .map(edge => { return { name: edge.node.name, props: edge.node.props } });

  // These get set at compile time, so no hot-reloading (which is good, we don't want)
  // every single one of our packages' full dist in our bundle
  let scope = getScope(data.markdownRemark.rawMarkdownBody,
    data.exampleResources.edges.map(edge => edge.node.importName));

  // https://github.com/rhysd/rehype-react#programmatic
  // https://using-remark.gatsbyjs.org/custom-components
  const renderAst = getRehypeReact(scope);

  return <SidebarLayout>
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    {renderAst(data.markdownRemark.htmlAst)}
    <h2>tokens</h2>
    <Tokens cssPrefix={data.markdownRemark.frontmatter.cssPrefix}></Tokens>
    <h2>props</h2>
    {props.map(prop =>
      <React.Fragment key={prop.name}>
        <h3>{prop.name}</h3>
        <Props propList={prop.props}></Props>
      </React.Fragment>
    )}
    <h2>context</h2>
    <p>{JSON.stringify(pageContext)}</p>
    <h2>data</h2>
    <p>{JSON.stringify(data)}</p>
  </SidebarLayout>
};

// Test queries in http://localhost:8000/___graphql
// See how to filter from: https://www.gatsbyjs.org/docs/graphql-reference/
// We want the markdown from gatsby-transformer-remark
// We want ALL the component metadata from gatsby-transformer-react-docgen-typescript
// for components in that folder
export const pageQuery = graphql`
query GetComponent($fileAbsolutePath: String!, $pathRegex: String!, $examplesRegex: String!) {
  markdownRemark(fileAbsolutePath: { eq: $fileAbsolutePath }) {
    htmlAst
    rawMarkdownBody
    frontmatter {
      title
      cssPrefix
    }
  }
  metadata: allComponentMetadata(filter: {path: {regex: $pathRegex}}) {
    edges {
      node {
        path
        name
        description
        props {
          name
          required
          type {
            name
          }
          defaultValue {
            value
          }
        }
      }
    }
  }
  exampleResources: allComponentExamples(filter: {path: {regex: $examplesRegex}}) {
    edges {
      node {
        importName
      }
    }
  }
}
`;