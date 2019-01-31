import React from 'react';
import { FormSelect, FormSelectOption } from '@patternfly/react-core';

class FormSelectInputInvalid extends React.Component {
  state = {
    value: ''
  };

  isEmpty = () => this.state.value !== '';

  onChange = (value, event) => {
    this.setState({ value });
  };

  options = [
    { value: '', label: 'Choose a number', disabled: false },
    { value: '1', label: 'One', disabled: false },
    { value: '2', label: 'Two', disabled: false },
    { value: '3', label: 'Three', disabled: false }
  ];

  render() {
    return (
      <FormSelect
        isValid={this.isEmpty()}
        value={this.state.value}
        onChange={this.onChange}
        aria-label="FormSelect Input"
      >
        {this.options.map((option, index) => (
          <FormSelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} />
        ))}
      </FormSelect>
    );
  }
}

export default FormSelectInputInvalid;
