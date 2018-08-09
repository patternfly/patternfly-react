import React from 'react';
import ComponentDocs from '../../components/componentDocs';
import PropTypes from 'prop-types';
import { Checkbox } from '@patternfly/react-core';
import Example from '../../components/example';

const propTypes = {
  data: PropTypes.any.isRequired
};

class CheckboxDocs extends React.Component {
  state = {
    checked: true
  };

  handleCheckboxChange = checked => {
    this.setState({ checked });
  };

  render() {
    const { data } = this.props;
    const { checked } = this.state;

    return (
      <ComponentDocs data={data}>
        <Example title="Controlled checkbox example">
          <Checkbox checked={checked} onChange={this.handleCheckboxChange} aria-label="controlled checkbox example" />
        </Example>
        <Example title="Uncontrolled checkbox example">
          <Checkbox aria-label="uncontrolled checkbox example" />
        </Example>
        <Example title="Disabled checkbox example">
          <Checkbox aria-label="disabled checkbox example" defaultChecked isDisabled />
        </Example>
      </ComponentDocs>
    );
  }
}

CheckboxDocs.propTypes = propTypes;

export const query = graphql`
  query CheckboxDocsQuery {
    componentMetadata(displayName: { eq: "Checkbox" }) {
      ...ComponentDocs
    }
  }
`;

export default CheckboxDocs;
