import React from 'react';
import { TextInput } from '@patternfly/react-core';

class InvalidTextInput extends React.Component {
  state = {
    value: ''
  };

  handleInvalidTextInputChange = value => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <TextInput
        value={value}
        onChange={this.handleInvalidTextInputChange}
        isRequired
        isValid={false}
        type="text"
        aria-label="invalid text input example"
      />
    );
  }
}

export default InvalidTextInput;
