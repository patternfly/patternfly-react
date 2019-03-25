import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { getFileName } from '../../helpers/navHelpers'

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
    edge.node.pageName = getFileName(edge.node.fileAbsolutePath)
    return edge.node
  }).sort((n1, n2) => n1.pageName.localeCompare(n2.pageName));

  return (
    <React.Fragment>
      {data.site.siteMetadata.title}
      <ul>
        {orderedNodes.map(node =>
          <li key={node.pageName}>
            <Link to={node.pageName}>{node.frontmatter.title}</Link>
          </li>
        )}
      </ul>
    </React.Fragment >
  )
}

export default Nav
