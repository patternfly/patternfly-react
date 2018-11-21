import React from 'react';
import { Select, SelectOption } from '@patternfly/react-core';

class SelectInput extends React.Component {
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
      <Select value={this.state.value} onChange={this.onChange} aria-label="Select Input">
        {this.options.map((option, index) => (
          <SelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} />
        ))}
      </Select>
    );
  }
}

export default SelectInput;
