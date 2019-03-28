/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { Page, PageHeader } from '@patternfly/react-core';
import SiteNav from './siteNav';

// Import global CSS files here. Have no remorse.
// https://www.gatsbyjs.org/docs/creating-global-styles
import '../../static/base.css';

// For accessibility
if (process.env.NODE_ENV !== 'production') {
  const axe = require('react-axe'); // eslint-disable-line global-require
  axe(React, ReactDOM, 1000);
}

const SidebarLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }`);
  return (
    <React.Fragment>
      <Helmet>
        <html lang="en-US" />
        <meta charSet="utf-8" />
        <meta name="description" content="PatternFly React Documentation" />
        <meta name="keywords" content="React, PatternFly, Red Hat" />
      </Helmet>
      {/* Nothing quite like dogfooding your own components */}
      <Page header={<PageHeader logo={data.site.siteMetadata.title} showNavToggle />} sidebar={<SiteNav />} isManagedSidebar>
        {children}
      </Page>
    </React.Fragment >
  );
}

export default SidebarLayout;
