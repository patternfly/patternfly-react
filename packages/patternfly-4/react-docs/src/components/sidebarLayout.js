/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { Page, PageHeader, PageSection } from '@patternfly/react-core';
import SiteNav from './nav/siteNav';

// Import global CSS files here. Have no remorse.
// https://www.gatsbyjs.org/docs/creating-global-styles
import '@patternfly/react-core/dist/styles/base.css'

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
        <PageSection>
          {children}
        </PageSection>
      </Page>
    </React.Fragment >
  );
}

export default SidebarLayout;
