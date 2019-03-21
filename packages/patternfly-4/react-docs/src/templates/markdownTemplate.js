import React from "react"
import { graphql } from "gatsby"
import { getUsedComponents } from './helpers'
import SidebarLayout from "../components/sidebarLayout"
import { Tokens, Props } from "../components"
// import Tokens from '../components/tokens'
/* <Tokens variables="pf-global"></Tokens> */

export default function Template({ data, pageContext }) {
  // Exported components in the folder (i.e. src/components/Alerts/*)
  const siblingComponents = data.metadata.edges.map(e => e.node.name)
  // Exported components with names used in the docs
  const propComponents = getUsedComponents(data.markdownRemark.htmlAst, siblingComponents, {})
  // Finally, the props for each relevant component!
  const props = data.metadata.edges
    .filter(edge => propComponents.indexOf(edge.node.name) !== -1)
    .map(edge => { return { name: edge.node.name, props: edge.node.props } });

  return <SidebarLayout>
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
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
}

// Test queries in http://localhost:8000/___graphql
// See how to filter from: https://www.gatsbyjs.org/docs/graphql-reference/
// We want the markdown from gatsby-transformer-remark
// We want ALL the component metadata from gatsby-transformer-react-docgen-typescript
// for components in that folder
export const pageQuery = graphql`
query GetComponent($fileAbsolutePath: String!, $pathRegex: String!) {
  markdownRemark(fileAbsolutePath: { eq: $fileAbsolutePath }) {
    html
    htmlAst
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
}
`