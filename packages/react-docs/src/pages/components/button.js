import React from 'react';
import ComponentDocs from '../../components/componentDocs';
import PropTypes from 'prop-types';
import { Button, ButtonVariant } from '@patternfly/react-core';
import Example from '../../components/example';

const propTypes = {
  data: PropTypes.any.isRequired
};

const ButtonDocs = ({ data }) => (
  <ComponentDocs data={data}>
    <Example title="Variants">
      {Object.values(ButtonVariant).map(variant => (
        <Button
          key={variant}
          variant={variant}
          label={`${variant} button example`}
        >
          {variant}
        </Button>
      ))}
    </Example>
    <Example title="Block Button">
      <Button isBlock>Block Button</Button>
    </Example>
  </ComponentDocs>
);

ButtonDocs.propTypes = propTypes;

export const query = graphql`
  query ButtonDocsQuery {
    componentMetadata(displayName: { eq: "Button" }) {
      ...ComponentDocs
    }
  }
`;

export default ButtonDocs;
