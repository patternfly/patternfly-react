import React from 'react';
import { Select } from '@patternfly/react-core';

class SelectInput extends React.Component {
  static title = 'Select Input';

  state = {
    value: 'mrs'
  };

  onChange = event => {
    this.setState({ value: event.currentTarget.value });
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
      <React.Fragment>
        <Select
          value={this.state.value}
          options={this.options}
          getOptionLabel={this.getOptionLbl}
          getOptionValue={this.getOptionVal}
          getOptionDisabled={this.getOptionDisabled}
          onChange={this.onChange}
          aria-label="Select Input"
        />
      </React.Fragment>
    );
  }
}

export default SelectInput;
