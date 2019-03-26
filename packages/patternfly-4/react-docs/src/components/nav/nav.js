import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { getFileName } from '../../helpers/navHelpers'

const Nav = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
      allSitePage {
        edges {
          node {
            path
            context {
              title
            }
          }
        }
      }
    }`);

  // const grouped = data.allSitePage.edges
  //   .filter(edge => edge.node.path.split('/').length > 3)
  //   .reduce((acc, item) => {
  //     const group = item.node.path.split('/')[1];
  //     acc[group] = acc[group] || [];
  //     acc[group].push(item.node);
  //     return acc;
  //   });

  console.log('a lil help', data.allSitePage.edges);
  const orderedNodes = data.allSitePage.edges
    .map(edge => edge.node)
    .filter(node => node.context.title)
    .sort((e1, e2) => e1.context.title.localeCompare(e2.context.title));

  return (
    <React.Fragment>
      {data.site.siteMetadata.title}
      <ul>
        {orderedNodes.map(node =>
          <li key={node.path}>
            <Link to={node.path}>{node.context.title}</Link>
          </li>
        )}
      </ul>
    </React.Fragment >
  )
}

export default Nav
