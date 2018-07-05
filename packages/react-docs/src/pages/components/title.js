import React from 'react';
import ComponentDocs from '../../components/componentDocs';
import Example from '../../components/example';
import PropTypes from 'prop-types';
import { Title, TitleSize } from '@patternfly/react-core';

const propTypes = {
  data: PropTypes.any.isRequired
};

const TitleDocs = ({ data }) => (
  <ComponentDocs data={data}>
    <Example title="Sizes">
      {Object.values(TitleSize).map(size => (
        <Title key={size} size={size}>
          {size} Title
        </Title>
      ))}
    </Example>
  </ComponentDocs>
);

TitleDocs.propTypes = propTypes;

export const query = graphql`
  query TitleDocsQuery {
    componentMetadata(displayName: { eq: "Title" }) {
      ...ComponentDocs
    }
  }
`;

export default TitleDocs;
