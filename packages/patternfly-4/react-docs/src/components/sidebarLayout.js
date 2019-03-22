/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import Nav from './nav/nav'
import Helmet from 'react-helmet';

// Import global CSS files here. Have no remorse.
// https://www.gatsbyjs.org/docs/creating-global-styles
import '@patternfly/react-core/dist/styles/base.css'

// TODO: make look good https://www.patternfly.org/pattern-library/navigation/vertical-navigation/#code
// or like gatsby's https://www.gatsbyjs.org/docs/linking-and-prefetching-with-gatsby
const SidebarLayout = ({ children }) => (
  <React.Fragment>
    <Helmet>
      <html lang="en-US" />
      <meta charSet="utf-8" />
      <meta name="description" content="PatternFly React Documentation" />
      <meta name="keywords" content="React, PatternFly, Red Hat" />
    </Helmet>
    <div style={{
      display: 'flex',
      minHeight: '100%',
      width: '100%'
    }}>
      <aside style={{
        position: 'relative',
        flexShrink: 0,
        borderRight: 'solid 1px #cecece'
      }}>
        <Nav />
      </aside>
      <main style={{
        position: 'relative',
        flex: '1 1 auto',
        overflowX: 'hidden'
      }}>{children}</main>
    </div>
  </React.Fragment >
)

export default SidebarLayout
