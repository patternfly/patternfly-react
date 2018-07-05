import React from 'react';
import ComponentDocs from '../../components/componentDocs';
import PropTypes from 'prop-types';
import { Badge } from '@patternfly/react-core';
import Example from '../../components/example';

const propTypes = {
  data: PropTypes.any.isRequired
};

const BadgeDocs = ({ data }) => (
  <ComponentDocs data={data}>
    <Example title="Unread Badge" style={{ background: 'white' }}>
      <Badge>7</Badge>
      <Badge>24</Badge>
      <Badge>240</Badge>
      <Badge>999+</Badge>
    </Example>
    <Example title="Read Badge" style={{ background: 'white' }}>
      <Badge isRead>7</Badge>
      <Badge isRead>24</Badge>
      <Badge isRead>240</Badge>
      <Badge isRead>999+</Badge>
    </Example>
  </ComponentDocs>
);

BadgeDocs.propTypes = propTypes;

export const query = graphql`
  query BadgeDocsQuery {
    componentMetadata(displayName: { eq: "Badge" }) {
      ...ComponentDocs
    }
  }
`;

export default BadgeDocs;
