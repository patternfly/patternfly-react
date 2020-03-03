import { Text, TextInput, TextInputProps, ValidatedOptions } from '@patternfly/react-core';
import React, { Component } from 'react';

export class TextInputDemo extends Component {
  state = {
    value: '',
    validatedTexInputValue: '',
    validated: ValidatedOptions.default
  };

  handleTextInputChange = value => {
    this.setState({ value });
  };

  handleValidatedTextInputChange = value => {
    // If the text input contains less than 5 characters, set validated to error
    const validated = !(value.length < 5) ? ValidatedOptions.success : ValidatedOptions.error;
    this.setState({ validatedTexInputValue: value, validated });
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
        <Text>Validated text input </Text>
        <TextInput
          id="text-validated"
          onChange={this.handleValidatedTextInputChange}
          value={this.state.validatedTexInputValue}
          validated={this.state.validated}
        />
      </React.Fragment>
    );
  }
}
