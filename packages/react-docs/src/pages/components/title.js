import React from 'react';
import ComponentDocs from '../../components/componentDocs';
import Example from '../../components/example';
import PropTypes from 'prop-types';
import { Title } from '@patternfly/react-core';

const propTypes = {
  data: PropTypes.any.isRequired
};

const TitleDocs = ({ data }) => (
  <ComponentDocs data={data}>
    <Example title="Sizes">
      <Title size="md">MD Title</Title>
      <Title size="lg">LG Title</Title>
      <Title size="xl">XL Title</Title>
      <Title size="2xl">2XL Title</Title>
      <Title size="3xl">3XL Title</Title>
      <Title size="4xl">4XL Title</Title>
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
