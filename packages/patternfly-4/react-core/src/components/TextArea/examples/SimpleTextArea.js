import React from 'react';
import { TextArea } from '@patternfly/react-core';

class SimpleTextArea extends React.Component {
  state = {
    value: ''
  };

  handleTextAreaChange = value => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return <TextArea value={value} onChange={this.handleTextAreaChange} aria-label="text area example" />;
  }
}

export default SimpleTextArea;
