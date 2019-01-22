import React from 'react';
import { FormSelect, FormSelectOption } from '@patternfly/react-core';

class FormSelectInput extends React.Component {
  state = {
    value: 'mrs'
  };

  onChange = (value, event) => {
    this.setState({ value });
  };

  options = [
    { value: 'please choose', label: 'Please Choose', disabled: true },
    { value: 'mr', label: 'Mr', disabled: false },
    { value: 'miss', label: 'Miss', disabled: false },
    { value: 'mrs', label: 'Mrs', disabled: false },
    { value: 'ms', label: 'Ms', disabled: false },
    { value: 'dr', label: 'Dr', disabled: false },
    { value: 'other', label: 'Other', disabled: false }
  ];

  render() {
    return (
      <FormSelect value={this.state.value} onChange={this.onChange} aria-label="FormSelect Input">
        {this.options.map((option, index) => (
          <FormSelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} />
        ))}
      </FormSelect>
    );
  }
}

export default FormSelectInput;
