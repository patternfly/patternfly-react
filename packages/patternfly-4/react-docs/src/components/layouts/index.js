import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import * as DocsFiles from '../../../.tmp';
import Page from '../page';
import Navigation from '../navigation';
import { injectGlobal } from 'emotion';

injectGlobal(`
  html,
  body {
    width: 100%;
    height: 100%;
  }

  #___gatsby {
    position: relative;
    width: 100%;
    height: 100%;
  }
`);

const propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.any.isRequired
};

const DocsLayout = ({ children, data }) => {
  const componentMapper = (path, label) => {
    const { components } = DocsFiles[`${label.toLowerCase()}_docs`];
    return Object.keys(components).map(k => ({
      label: k,
      to: `${path}#${k}`
    }));
  };
  const getPackage = label => DocsFiles[`${label.toLowerCase()}_package`].substr(6);
  const componentRoutes = data.componentPages
    ? data.componentPages.edges.map(e => ({
      to: e.node.path,
      label: e.node.fields.label,
      pkg: getPackage(e.node.fields.label),
      components: componentMapper(e.node.path, e.node.fields.label)
    }))
    : [];

  const layoutRoutes = data.layoutPages
    ? data.layoutPages.edges.map(e => ({
      to: e.node.path,
      label: e.node.fields.label,
      pkg: getPackage(e.node.fields.label),
      components: componentMapper(e.node.path, e.node.fields.label)
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
        {children}
      </Page>
    </React.Fragment>
  );
};

DocsLayout.propTypes = propTypes;

export default props => (
  <StaticQuery
    query={graphql`
      query {
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
        demoPages: allSitePage(
          filter: { path: { glob: "**/demos/*" } }
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
    `}
    render={data => <DocsLayout data={data} {...props} />}
  />
);
