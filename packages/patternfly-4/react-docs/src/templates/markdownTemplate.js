import React from "react"
import { graphql } from "gatsby"

export default function Template({ data, pageContext }) {
  // const { markdownRemark } = data // data.markdownRemark holds our post data
  // const { frontmatter, html } = markdownRemark
  // return (
  //   <div className="blog-post-container">
  //     <div className="blog-post">
  //       <h1>{frontmatter.title}</h1>
  //       <div
  //         className="blog-post-content"
  //         dangerouslySetInnerHTML={{ __html: html }}
  //       />
  //     </div>
  //   </div>
  // )
  return <div>
    bad html
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
    props
    <div></div>
    context
    <p>{JSON.stringify(pageContext)}</p>
    data
    <p>{JSON.stringify(data)}</p>
  </div>
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
    }
  }
  allComponentMetadata(filter: {path: {regex: $pathRegex}}) {
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