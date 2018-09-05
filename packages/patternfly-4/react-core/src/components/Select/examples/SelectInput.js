import React from 'react';
import { Select } from '@patternfly/react-core';

class SelectInput extends React.Component {
  static title = 'Select Input';

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
  getOptionLbl = option => option.label;
  getOptionVal = option => option.value;
  getOptionDisabled = option => option.disabled;

  render() {
    return (
      <Select
        value={this.state.value}
        options={this.options}
        getLabel={this.getOptionLbl}
        getValue={this.getOptionVal}
        getOptionDisabled={this.getOptionDisabled}
        onChange={this.onChange}
        aria-label="Select Input"
      />
    );
  }
}

export default SelectInput;
