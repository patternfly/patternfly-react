import React from 'react';
import { TextArea, Text } from '@patternfly/react-core';

interface TextAreaState {
  textAreaValue: string;
  requiredTextAreaValue: string;
  resizeHorizontalTextArea: string;
  resizeVerticalTextArea: string;
  isValid: boolean;
  requiredIsValid: boolean;
  horizontalIsValid: boolean;
  verticalIsValid: boolean;
}

export class TextAreaDemo extends React.Component<{}, TextAreaState> {
  state = {
    textAreaValue: '',
    requiredTextAreaValue: '',
    resizeHorizontalTextArea: '',
    resizeVerticalTextArea: '',
    isValid: true,
    requiredIsValid: true,
    horizontalIsValid: true,
    verticalIsValid: true
  };

  handleChange = (value: string) => {
    // If the text area contains less than 1 character, set isValid to false
    const valid = !(value.length < 1);
    this.setState({ textAreaValue: value, isValid: valid });
  };

  handleChangeRequired = (value: string) => {
    // If the text area contains less than 1 character, set requiredIsValid to false
    const isValid = !(value.length < 1);
    this.setState({ requiredTextAreaValue: value, requiredIsValid: isValid });
  };

  handleChangeHorizontal = (value: string) => {
    // If the text area contains less than 1 character, set isValid to false
    const horizontalIsValid = !(value.length < 1);
    this.setState({ resizeHorizontalTextArea: value, horizontalIsValid });
  };
  handleChangeVertical = (value: string) => {
    // If the text area contains less than 1 character, set isValid to false
    const verticalIsValid = !(value.length < 1);
    this.setState({ resizeVerticalTextArea: value, verticalIsValid });
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
      isValid,
      requiredIsValid,
      horizontalIsValid,
      verticalIsValid
    } = this.state;
    return (
      <React.Fragment>
        <Text>Text area</Text>
        <TextArea
          id="textarea1"
          value={textAreaValue}
          onChange={this.handleChange}
          isValid={isValid}
          aria-label="text area example 1"
        />
        <Text>Required text area</Text>
        <TextArea
          id="textarea2"
          value={requiredTextAreaValue}
          onChange={this.handleChangeRequired}
          isRequired
          isValid={requiredIsValid}
          aria-label="text area example 2"
        />
        <Text>Resize text area horizontally </Text>
        <TextArea
          id="textarea3"
          resizeOrientation="horizontal"
          value={resizeHorizontalTextArea}
          onChange={this.handleChangeHorizontal}
          isValid={horizontalIsValid}
          aria-label="text area example 3"
        />
        <Text>Resize text area vertically </Text>
        <TextArea
          id="textarea4"
          resizeOrientation="vertical"
          value={resizeVerticalTextArea}
          onChange={this.handleChangeVertical}
          isValid={verticalIsValid}
          aria-label="text area example 4"
        />
      </React.Fragment>
    );
  }
}
