import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { getPagePath } from '../../helpers/navHelpers'

const Nav = () => {
  const data = useStaticQuery(graphql`
query SiteTitleQuery {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark {
    edges {
      node {
        fileAbsolutePath
        frontmatter {
          title
        }
      }
    }
  }
}`);

  const orderedNodes = data.allMarkdownRemark.edges.map(edge => {
    edge.node.page = getPagePath(edge.node.fileAbsolutePath)
    return edge.node
  }).sort((n1, n2) => n1.page.localeCompare(n2.page));

  return (
    <React.Fragment>
      {data.site.siteMetadata.title}
      <ul>
        {orderedNodes.map(node =>
          <li key={node.page}>
            <Link to={node.page}>{node.frontmatter.title}</Link>
          </li>
        )}
      </ul>
    </React.Fragment >
  )
}

export default Nav
