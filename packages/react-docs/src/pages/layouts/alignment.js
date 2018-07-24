import React from 'react';
import ComponentDocs from '../../components/componentDocs';
import PropTypes from 'prop-types';
import { Alignment } from '@patternfly/react-core';
import Example from '../../components/example';

const propTypes = {
  data: PropTypes.any.isRequired
};

const AlignmentDocs = ({ data }) => (
  <ComponentDocs data={data}>
    <Example title="Left">
      <Alignment align="left">
        <div>content</div>
      </Alignment>
    </Example>
    <Example title="Center">
      <Alignment align="center">
        <div>content</div>
      </Alignment>
    </Example>
    <Example title="Right">
      <Alignment align="right">
        <div>content</div>
      </Alignment>
    </Example>
  </ComponentDocs>
);

AlignmentDocs.propTypes = propTypes;

export const query = graphql`
  query AlignmentDocsQuery {
    componentMetadata(displayName: { eq: "Alignment" }) {
      ...ComponentDocs
    }
  }
`;

export default AlignmentDocs;
