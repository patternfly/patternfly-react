import { TextInput, TextInputProps } from '@patternfly/react-core';
import React, { Component } from 'react';

export class TextInputDemo extends Component {
  state = {
    value: ''
  };

  handleTextInputChange = value => {
    this.setState({ value });
  };

  myTextInputProps: TextInputProps = {
    onChange: this.handleTextInputChange
  };

  myDisabledTextInputProps: TextInputProps = {
    isDisabled: true,
    value: 'disabled text input example'
  };

  myReadOnlyTextInputProps: TextInputProps = {
    isReadOnly: true,
    value: 'read only text input example'
  };

  myValidTextInputProps: TextInputProps = {
    isValid: false
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <TextInput id="text" onChange={this.myTextInputProps.onChange} />
        <TextInput
          id="text-disabled"
          isDisabled={this.myDisabledTextInputProps.isDisabled}
          value={this.myDisabledTextInputProps.value}
        />
        <TextInput
          id="text-read-only"
          isReadOnly={this.myReadOnlyTextInputProps.isReadOnly}
          value={this.myReadOnlyTextInputProps.value}
        />
        <TextInput id="text-invalid" isValid={this.myValidTextInputProps.isValid} />
      </React.Fragment>
    );
  }
}
