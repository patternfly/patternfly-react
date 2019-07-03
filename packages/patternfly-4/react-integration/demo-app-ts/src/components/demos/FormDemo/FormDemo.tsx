import React, {Component} from 'react';
import {
  Form,
  FormProps,
  FormGroup,
  TextInput
} from '@patternfly/react-core';

export interface FormState {
  value: string; 
  isValid: boolean; 
}

export class FormDemo extends Component<FormProps, FormState>{
  handleTextInputChange: (value: string) => void;
  constructor(props) {
    super(props);
    this.state = {
      value: 'Five',
      isValid: false
    };
    this.handleTextInputChange = (value: string) => {
      this.setState({ value, isValid: /^\d+$/.test(value) });
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const { value, isValid } = this.state;

    return (
      <Form>
        <FormGroup
          label="Age:"
          type="number"
          helperText="Please write your age"
          helperTextInvalid="Age has to be a number"
          fieldId="age"
          isValid={isValid}
        >
          <TextInput
            isValid={isValid}
            value={value}
            id="age"
            aria-describedby="age-helper"
            onChange={this.handleTextInputChange}
          />
        </FormGroup>
      </Form>
    );
  }
}
