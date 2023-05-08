import React from 'react';
import { TextArea, Text, ValidatedOptions } from '@patternfly/react-core';

interface TextAreaState {
  textAreaValue: string;
  requiredTextAreaValue: string;
  resizeHorizontalTextArea: string;
  resizeVerticalTextArea: string;
  validatedTextArea: string;
  isValid: boolean;
  requiredIsValid: boolean;
  horizontalIsValid: boolean;
  verticalIsValid: boolean;
  validated: ValidatedOptions.default | ValidatedOptions.error | ValidatedOptions.success | ValidatedOptions.warning;
}

export class TextAreaDemo extends React.Component<{}, TextAreaState> {
  static displayName = 'TextAreaDemo';
  state = {
    textAreaValue: '',
    requiredTextAreaValue: '',
    resizeHorizontalTextArea: '',
    resizeVerticalTextArea: '',
    validatedTextArea: '',
    isValid: true,
    requiredIsValid: true,
    horizontalIsValid: true,
    verticalIsValid: true,
    validated: ValidatedOptions.default
  };

  handleChange = (_event: React.ChangeEvent<HTMLTextAreaElement>, value: string) => {
    // If the text area contains less than 1 character, set isValid to false
    const valid = !(value.length < 1);
    this.setState({ textAreaValue: value, isValid: valid });
  };

  handleChangeRequired = (_event: React.ChangeEvent<HTMLTextAreaElement>, value: string) => {
    // If the text area contains less than 1 character, set requiredIsValid to false
    const isValid = !(value.length < 1);
    this.setState({ requiredTextAreaValue: value, requiredIsValid: isValid });
  };

  handleChangeHorizontal = (_event: React.ChangeEvent<HTMLTextAreaElement>, value: string) => {
    // If the text area contains less than 1 character, set isValid to false
    const horizontalIsValid = !(value.length < 1);
    this.setState({ resizeHorizontalTextArea: value, horizontalIsValid });
  };
  handleChangeVertical = (_event: React.ChangeEvent<HTMLTextAreaElement>, value: string) => {
    // If the text area contains less than 1 character, set isValid to false
    const verticalIsValid = !(value.length < 1);
    this.setState({ resizeVerticalTextArea: value, verticalIsValid });
  };
  handleChangeValidated = (_event: React.ChangeEvent<HTMLTextAreaElement>, value: string) => {
    // If the text area contains less than 5 characters, set validated to error. If empty set to warning.
    let validated = ValidatedOptions.default;
    if (value.length === 0) {
      validated = ValidatedOptions.warning;
    } else {
      validated = !(value.length < 5) ? ValidatedOptions.success : ValidatedOptions.error;
    }
    this.setState({ validatedTextArea: value, validated });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const {
      textAreaValue,
      requiredTextAreaValue,
      resizeHorizontalTextArea,
      resizeVerticalTextArea,
      validatedTextArea,
      isValid,
      requiredIsValid,
      horizontalIsValid,
      verticalIsValid,
      validated
    } = this.state;
    return (
      <React.Fragment>
        <Text>Text area</Text>
        <TextArea
          id="textarea1"
          value={textAreaValue}
          onChange={this.handleChange}
          validated={isValid ? ValidatedOptions.default : ValidatedOptions.error}
          aria-label="text area example 1"
        />
        <Text>Required text area</Text>
        <TextArea
          id="textarea2"
          value={requiredTextAreaValue}
          onChange={this.handleChangeRequired}
          isRequired
          validated={requiredIsValid ? ValidatedOptions.default : ValidatedOptions.error}
          aria-label="text area example 2"
        />
        <Text>Resize text area horizontally </Text>
        <TextArea
          id="textarea3"
          resizeOrientation="horizontal"
          value={resizeHorizontalTextArea}
          onChange={this.handleChangeHorizontal}
          validated={horizontalIsValid ? ValidatedOptions.default : ValidatedOptions.error}
          aria-label="text area example 3"
        />
        <Text>Resize text area vertically </Text>
        <TextArea
          id="textarea4"
          resizeOrientation="vertical"
          value={resizeVerticalTextArea}
          onChange={this.handleChangeVertical}
          validated={verticalIsValid ? ValidatedOptions.default : ValidatedOptions.error}
          aria-label="text area example 4"
        />
        <Text>Validated text area </Text>
        <TextArea
          id="textarea5"
          value={validatedTextArea}
          onChange={this.handleChangeValidated}
          validated={validated}
          aria-label="text area example 5"
        />
        <Text>Disabled text area </Text>
        <TextArea id="textarea6-a" value={'disabled text area'} aria-label="text area example 6 a" disabled />
        <TextArea id="textarea6-b" value={'isDisabled text area'} aria-label="text area example 6 b" isDisabled />
        <Text>Read only text area </Text>
        <TextArea id="textarea7-a" value={'readOnly text area'} aria-label="text area example 7 a" readOnly />
        <TextArea id="textarea7-b" value={'isReadOnly text area'} aria-label="text area example 7 b" isReadOnly />
        <TextArea id="autoResize" aria-label="resizable text area example" autoResize />
      </React.Fragment>
    );
  }
}
