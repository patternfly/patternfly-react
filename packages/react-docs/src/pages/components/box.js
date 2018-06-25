import React from 'react';
import ComponentDocs from '../../components/componentDocs';
import PropTypes from 'prop-types';
import { Box, BoxBody, BoxFooter, BoxHeader } from '@patternfly/react-core';
import Example from '../../components/example';

const propTypes = {
  data: PropTypes.any.isRequired
};

const BoxDocs = ({ data }) => (
  <ComponentDocs data={data}>
    <Example title="Basic Box">
      <Box>
        <BoxHeader>Box Header</BoxHeader>
        <BoxBody>Box Body</BoxBody>
        <BoxFooter>Box Footer</BoxFooter>
      </Box>
    </Example>
  </ComponentDocs>
);

BoxDocs.propTypes = propTypes;

export const query = graphql`
  query BoxDocsQuery {
    componentMetadata(displayName: { eq: "Box" }) {
      ...ComponentDocs
    }
  }
`;

export default BoxDocs;
