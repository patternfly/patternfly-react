import React from 'react';
import Docs from '../docs';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired
};

const ComponentDocs = ({ data, children }) => (
  <Docs
    title={data.componentMetadata.displayName}
    props={data.componentMetadata.props}
  >
    {children}
  </Docs>
);

ComponentDocs.propTypes = propTypes;

export const componentDocsFragment = graphql`
  fragment ComponentDocs on ComponentMetadata {
    displayName
    props {
      name
      defaultValue {
        value
      }
      type {
        value
        name
        raw
      }
      required
    }
  }
`;

export default ComponentDocs;
