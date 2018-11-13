import React from 'react';
import { TextInput, Button } from '@patternfly/react-core';

class FocusTextInput extends React.Component {
  state = {
    value: ''
  };

  inputRef = React.createRef();

  componentDidUpdate() {
    this.inputRef && this.inputRef.current.focus();
  }

  handleTextInputChange = value => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <React.Fragment>
        <TextInput
          aria-label={'focus text input example'}
          ref={this.inputRef}
          value={value}
          onChange={this.handleTextInputChange}
        />
        <Button
          onClick={() => {
            this.inputRef && this.inputRef.current.focus();
          }}
        >
          Focus
        </Button>
      </React.Fragment>
    );
  }
}

export default FocusTextInput;
