// This is a gatsby limitation will be fixed in newer version
// eslint-disable-next-line
import '@patternfly/react-core/../dist/styles/patternfly.css';
import './index.css';
import React from 'react';
import Helmet from 'react-helmet';
import Page from '../components/page';
import Navigation from '../components/navigation';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.any.isRequired
};

const Layout = ({ children, data }) => (
  <React.Fragment>
    <Helmet
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <Page
      title="Patternfly React"
      navigation={
        <Navigation
          components={data.allComponentMetadata.edges.map(e => e.node)}
        />
      }
    >
      {children()}
    </Page>
  </React.Fragment>
);

Layout.propTypes = propTypes;

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    allComponentMetadata(sort: { fields: [displayName], order: ASC }) {
      edges {
        node {
          displayName
        }
      }
    }
  }
`;
