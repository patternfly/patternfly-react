import { Text, TextInput, TextInputProps, ValidatedOptions } from '@patternfly/react-core';
import React, { Component } from 'react';

export class TextInputDemo extends Component {
  state = {
    value: '',
    validatedTextInputValue: '',
    selectTextUsingRefValue: 'select all on click',
    leftTruncatedTextInputValue:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    validated: ValidatedOptions.default
  };

  ref = React.createRef<HTMLInputElement>();

  handleTextInputChange = (_event: React.FormEvent<HTMLInputElement>, value: string) => {
    this.setState({ value });
  };

  handleValidatedTextInputChange = (_event: React.FormEvent<HTMLInputElement>, value: string) => {
    // If the text input contains less than 5 characters, set validated to error. If empty set to warning.
    let validated = ValidatedOptions.default;
    if (value.length === 0) {
      validated = ValidatedOptions.warning;
    } else {
      validated = !(value.length < 5) ? ValidatedOptions.success : ValidatedOptions.error;
    }
    this.setState({ validatedTextInputValue: value, validated });
  };

  handleLeftTruncatedTextInputChange = (_event: React.FormEvent<HTMLInputElement>, leftTruncatedTextInputValue: string) => {
    this.setState({ leftTruncatedTextInputValue });
  };

  handleTextUsingRefInputChange = (_event: React.FormEvent<HTMLInputElement>, selectTextUsingRefValue: string) => {
    this.setState({ selectTextUsingRefValue });
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

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Text>Simple Text Input Example</Text>
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
        <Text>Text Input Truncated on Left Example</Text>
        <TextInput
          id="text-truncated-on-left"
          isLeftTruncated
          onChange={this.handleLeftTruncatedTextInputChange}
          value={this.state.leftTruncatedTextInputValue}
        />
        <Text>Validated Text Input </Text>
        <TextInput
          id="text-validated"
          onChange={this.handleValidatedTextInputChange}
          value={this.state.validatedTextInputValue}
          validated={this.state.validated}
        />
        <Text>Select Text Using Ref Example </Text>
        <TextInput
          id="text-using-ref"
          ref={this.ref}
          value={this.state.selectTextUsingRefValue}
          onFocus={() => this.ref && this.ref.current && this.ref.current.select()}
          // eslint-disable-next-line no-console
          onBlur={() => console.log('blurred')}
          onChange={this.handleTextUsingRefInputChange}
          aria-label="select-all"
        />
      </React.Fragment>
    );
  }
}
