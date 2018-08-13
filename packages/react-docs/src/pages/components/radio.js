import React from 'react';
import ComponentDocs from '../../components/componentDocs';
import PropTypes from 'prop-types';
import { Radio } from '@patternfly/react-core';
import Example from '../../components/example';

const propTypes = {
  data: PropTypes.any.isRequired
};

class RadioDocs extends React.Component {
  state = {
    checked: true
  };

  handleRadioChange = checked => {
    this.setState({ checked });
  };

  render() {
    const { data } = this.props;
    const { checked } = this.state;

    return (
      <ComponentDocs data={data}>
        <Example title="Controlled radio example">
          <Radio checked={checked} onChange={this.handleRadioChange} aria-label="controlled radio example" />
        </Example>
        <Example title="Uncontrolled radio example">
          <Radio aria-label="uncontrolled radio example" />
        </Example>
        <Example title="Disabled radio example">
          <Radio aria-label="disabled radio example" defaultChecked isDisabled />
        </Example>
      </ComponentDocs>
    );
  }
}

RadioDocs.propTypes = propTypes;

export const query = graphql`
  query CheckDocsQuery {
    componentMetadata(displayName: { eq: "Radio" }) {
      ...ComponentDocs
    }
  }
`;

export default RadioDocs;
