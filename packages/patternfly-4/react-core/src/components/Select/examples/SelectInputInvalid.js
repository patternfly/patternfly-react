import React from 'react';
import { Select, SelectOption } from '@patternfly/react-core';

class SelectInputInvalid extends React.Component {
  state = {
    value: '',
  };

  isEmpty = () => {
    return this.state.value !== '';
  }

  onChange = (value, event) => {
    this.setState({ value });
  };

  options = [
    { value: '', label: 'Choose a number', disabled: false },
    { value: '1', label: 'One', disabled: false },
    { value: '2', label: 'Two', disabled: false },
    { value: '3', label: 'Three', disabled: false },
  ];

  render() {
    return (
      <Select isValid={this.isEmpty()} value={this.state.value} onChange={this.onChange} aria-label="Select Input">
        {this.options.map((option, index) => (
          <SelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} />
        ))}
      </Select>
    );
  }
}

export default SelectInputInvalid;
