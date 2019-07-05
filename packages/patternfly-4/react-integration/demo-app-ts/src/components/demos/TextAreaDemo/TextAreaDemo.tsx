import React from 'react';
import { TextArea, Text } from '@patternfly/react-core';

interface TextAreaState {
  textAreaValue: string,
  requiredTextAreaValue: string,
  isValid: boolean, 
  requiredIsValid: boolean
}

export class TextAreaDemo extends React.Component<{}, TextAreaState> {
  state = {
    textAreaValue: '',
    requiredTextAreaValue: '',
    isValid: true, 
    requiredIsValid: true
  };

  handleChange = (value:string) => {
    // If the text area contains less than 1 character, set isValid to false
    const valid = !(value.length < 1);
    this.setState({ textAreaValue: value, isValid: valid });
  
  };
  
  handleChangeRequired = (value:string) => {
    // If the text area contains less than 1 character, set isValid to false
    const isValid = !(value.length < 1);
    this.setState({ requiredTextAreaValue: value, requiredIsValid: isValid });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

 render() {
  const { textAreaValue, requiredTextAreaValue, isValid, requiredIsValid  } = this.state
    return (
      <React.Fragment>
        <Text>Text area</Text> 
        <TextArea id="textarea1" value={textAreaValue} onChange={this.handleChange} isValid={isValid} aria-label="text area example 1" />
        <Text>Required text area</Text> 
        <TextArea id="textarea2" value={requiredTextAreaValue} onChange={this.handleChangeRequired} isRequired isValid={requiredIsValid} aria-label="text area example 2" />
      </React.Fragment>
    )}
}
