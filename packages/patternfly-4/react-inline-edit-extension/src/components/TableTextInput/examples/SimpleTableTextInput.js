import React from 'react';
import { TableTextInput } from '@patternfly/react-inline-edit-extension';

class SimpleTableTextInput extends React.Component {
  state = {
    value: ''
  };

  handleTextInputChange = value => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <TableTextInput defaultValue={value} type="text" onBlur={this.handleTextInputChange} aria-label="text input example" />
    );
  }
}

export default SimpleTableTextInput;
