import React from 'react';
import { Form, FormGroup, TextInput } from '@patternfly/react-core';

class SampleFormTwo extends React.Component {
  state = {
    value: this.props.formValue,
    isValid: this.props.isFormValid
  };

  handleTextInputChange = value => {
    const isValid = /^\d+$/.test(value);
    this.setState({ value, isValid });
    this.props.onChange(isValid, value);
  };

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

export default SampleFormTwo;
