import React from 'react';
import { TextInput } from '@patternfly/react-core';

class AltTextInput extends React.Component {
  state = {
    value: ''
  };

  handleAltTextInputChange = value => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <TextInput
        value={value}
        onChange={this.handleAltTextInputChange}
        isAlt
        type="text"
        aria-label="alternative style text input example"
      />
    );
  }
}

export default AltTextInput;
