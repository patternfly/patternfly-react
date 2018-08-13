import React from 'react';
import ComponentDocs from '../../components/componentDocs';
import PropTypes from 'prop-types';
import { Button } from '@patternfly/react-core';
import { TimesIcon } from '@patternfly/react-icons';
import Example from '../../components/example';

const propTypes = {
  data: PropTypes.any.isRequired
};

const ButtonDocs = ({ data }) => (
  <ComponentDocs data={data}>
    <Example title="Variants">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="link">Link</Button>
      <Button variant="action" ariaLabel="Action Button">
        <TimesIcon />
      </Button>
    </Example>
    <Example title="Block Button">
      <Button isBlock>Block Button</Button>
    </Example>
    <Example
      title="Links"
      description={`Links with button styling. Semantic buttons and links are important for usability as well as accessibility. Using an "a" instead of a "button" element to perform user initiated actions should be avoided, unless absolutely necessary.`}
    >
      <Button component="a" href="https://pf-next.com/" target="_blank">
        Link to Core Docs
      </Button>
      <Button component="a" isDisabled href="https://pf-next.com/" target="_blank">
        Disabled Link
      </Button>
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
