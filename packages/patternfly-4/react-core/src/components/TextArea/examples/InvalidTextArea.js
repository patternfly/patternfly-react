import React from 'react';
import { TextArea } from '@patternfly/react-core';

class InvalidTextArea extends React.Component {
  state = {
    value: ''
  };

  handleInvalidTextAreaChange = value => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <TextArea
        value={value}
        onChange={this.handleInvalidTextAreaChange}
        isRequired
        isValid={false}
        aria-label="invalid text area example"
      />
    );
  }
}

export default InvalidTextArea;
