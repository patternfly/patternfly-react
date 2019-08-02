/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { Page, PageHeader, PageSidebar } from '@patternfly-safe/react-core';
import SiteNav from '../components/siteNav';

const SidebarLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
      allEnvVars {
        edges {
          node {
            name
            num
            url
          }
        }
      }
    }
  `);

  const prInfo = data.allEnvVars.edges.filter(({ node }) => node.name === 'PR_INFO')[0].node;

  const Header = (
    <PageHeader
      style={{ backgroundColor: 'black' }}
      logo={prInfo.num ? `PR #${prInfo.num}` : data.site.siteMetadata.title}
      logoProps={{
        href: prInfo.url ? prInfo.url : '/'
      }}
      showNavToggle
    />
  );

  const SideBar = <PageSidebar nav={<SiteNav />} />;

  return (
    <React.Fragment>
      <Helmet>
        <html lang="en-US" />
        <meta charSet="utf-8" />
        <body className="pf-m-redhat-font" />
        <meta name="description" content="PatternFly React Documentation" />
        <meta name="keywords" content="React, PatternFly, Red Hat" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Helmet>
      {/* Nothing quite like dogfooding your own components */}
      <Page style={{ height: '100vh' }} header={Header} sidebar={SideBar} isManagedSidebar>
        {children}
      </Page>
    </React.Fragment>
  );
};

SidebarLayout.propTypes = {
  children: PropTypes.node
};

SidebarLayout.defaultProps = {
  children: null
};

export default SidebarLayout;
