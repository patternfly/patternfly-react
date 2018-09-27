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
  const componentRoutes = data.componentPages.edges.map(e => ({
    to: e.node.path,
    label: e.node.fields.label
  }));

  const layoutRoutes = data.layoutPages.edges.map(e => ({
    to: e.node.path,
    label: e.node.fields.label
  }));

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="PatternFly React Documentation" />
        <meta name="keywords" content="React, PatternFly, Red Hat" />
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/codemirror/5.0.0/codemirror.min.css" />
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/codemirror/5.0.0/theme/monokai.min.css" />
      </Helmet>
      <Page
        title="Patternfly React"
        navigation={<Navigation componentRoutes={componentRoutes} layoutRoutes={layoutRoutes} />}
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
  }
`;
