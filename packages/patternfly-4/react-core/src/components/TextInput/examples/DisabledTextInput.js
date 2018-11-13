import React from 'react';
import { TextInput } from '@patternfly/react-core';

class DisabledTextInput extends React.Component {
  state = {
    value: ''
  };

  handleDisabledTextInputChange = value => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <TextInput
        type="text"
        value={value}
        onChange={this.handleDisabledTextInputChange}
        aria-label="disabled text input example"
        isDisabled
      />
    );
  }
}

export default DisabledTextInput;
