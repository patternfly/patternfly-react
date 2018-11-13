import React from 'react';
import { TextInput } from '@patternfly/react-core';

class SimpleTextInput extends React.Component {
  state = {
    value: ''
  };

  handleTextInputChange = value => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <TextInput value={value} type="text" onChange={this.handleTextInputChange} aria-label="text input example" />
    );
  }
}

export default SimpleTextInput;
