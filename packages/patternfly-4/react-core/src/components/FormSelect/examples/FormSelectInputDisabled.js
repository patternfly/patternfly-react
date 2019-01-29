import React from 'react';
import { FormSelect, FormSelectOption } from '@patternfly/react-core';

class FormSelectInputDisabled extends React.Component {
  state = {
    value: '1'
  };

  onChange = (value, event) => {
    this.setState({ value });
  };

  options = [
    { value: 1, label: 'One', disabled: false },
    { value: 2, label: 'Two', disabled: false },
    { value: 3, label: 'Three', disabled: false },
    { value: 4, label: 'Four', disabled: false },
    { value: 5, label: 'Five', disabled: false }
  ];

  render() {
    return (
      <FormSelect value={this.state.value} onChange={this.onChange} isDisabled aria-label="FormSelect Input">
        {this.options.map((option, index) => (
          <FormSelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} />
        ))}
      </FormSelect>
    );
  }
}

export default FormSelectInputDisabled;
