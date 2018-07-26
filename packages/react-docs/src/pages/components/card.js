import React from 'react';
import ComponentDocs from '../../components/componentDocs';
import PropTypes from 'prop-types';
import { Card, CardBody, CardFooter, CardHeader } from '@patternfly/react-core';
import Example from '../../components/example';

const propTypes = {
  data: PropTypes.any.isRequired
};

const CardDocs = ({ data }) => (
  <ComponentDocs data={data}>
    <Example title="Basic Card">
      <Card>
        <CardHeader>Card Header</CardHeader>
        <CardBody>Card Body</CardBody>
        <CardFooter>Card Footer</CardFooter>
      </Card>
    </Example>
  </ComponentDocs>
);

CardDocs.propTypes = propTypes;

export const query = graphql`
  query CardDocsQuery {
    componentMetadata(displayName: { eq: "Card" }) {
      ...ComponentDocs
    }
  }
`;

export default CardDocs;
