import React from 'react';
import { Select, SelectOption } from '@patternfly/react-core';

class SelectInputDisabled extends React.Component {
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
      <Select value={this.state.value} onChange={this.onChange} isDisabled aria-label="Select Input">
        {this.options.map((option, index) => (
          <SelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} />
        ))}
      </Select>
    );
  }
}

export default SelectInputDisabled;
