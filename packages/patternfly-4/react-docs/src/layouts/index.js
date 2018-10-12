import React from 'react';
import Helmet from 'react-helmet';
import Page from '../components/page';
import Navigation from '../components/navigation';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby-link';

// This is a gatsby limitation will be fixed in newer version
let globalStyles = require(`!raw-loader!@patternfly/react-core/../dist/styles/base.css`);
globalStyles = globalStyles.replace(/\.\/assets\//g, withPrefix('/assets/'));
const localStyles = require(`!raw-loader!./index.css`);
import { injectGlobal } from 'emotion';

injectGlobal(globalStyles);
injectGlobal(localStyles);

const propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.any.isRequired
};

const Layout = ({ children, data }) => {
  const componentRoutes = data.componentPages
    ? data.componentPages.edges.map(e => ({
        to: e.node.path,
        label: e.node.fields.label
      }))
    : [];

  const layoutRoutes = data.layoutPages
    ? data.layoutPages.edges.map(e => ({
        to: e.node.path,
        label: e.node.fields.label
      }))
    : [];

  const demoRoutes = data.demoPages
    ? data.demoPages.edges.map(e => ({
        to: e.node.path,
        label: e.node.fields.label
      }))
    : [];

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="PatternFly React Documentation" />
        <meta name="keywords" content="React, PatternFly, Red Hat" />
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/codemirror/5.0.0/codemirror.min.css" />
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/codemirror/5.0.0/theme/monokai.min.css" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.4.1/css/brands.css"
          integrity="sha384-Px1uYmw7+bCkOsNAiAV5nxGKJ0Ixn5nChyW8lCK1Li1ic9nbO5pC/iXaq27X5ENt"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.4.1/css/fontawesome.css"
          integrity="sha384-BzCy2fixOYd0HObpx3GMefNqdbA7Qjcc91RgYeDjrHTIEXqiF00jKvgQG0+zY/7I"
          crossOrigin="anonymous"
        />
      </Helmet>
      <Page
        title="Patternfly React"
        navigation={
          <Navigation componentRoutes={componentRoutes} layoutRoutes={layoutRoutes} demoRoutes={demoRoutes} />
        }
      >
        {children()}
      </Page>
    </React.Fragment>
  );
};

Layout.propTypes = propTypes;

export default Layout;

export const query = graphql`
  query SiteLayoutQuery {
    componentPages: allSitePage(
      filter: { path: { glob: "**/components/*" } }
      sort: { fields: [fields___label], order: ASC }
    ) {
      edges {
        node {
          path
          fields {
            label
          }
        }
      }
    }
    layoutPages: allSitePage(
      filter: { path: { glob: "**/layouts/*" } }
      sort: { fields: [fields___label], order: ASC }
    ) {
      edges {
        node {
          path
          fields {
            label
          }
        }
      }
    }
    demoPages: allSitePage(filter: { path: { glob: "**/demos/*" } }, sort: { fields: [fields___label], order: ASC }) {
      edges {
        node {
          path
          fields {
            label
          }
        }
      }
    }
  }
`;
