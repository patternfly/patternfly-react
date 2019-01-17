import React from 'react';
import { Form, FormGroup, TextInput } from '@patternfly/react-core';

class InvalidForm extends React.Component {
  state = {
    value: 'Five',
    isValid: false
  };

  handleTextInputChange = value => {
    this.setState({ value, isValid: /^\d+$/.test(value) });
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

export default InvalidForm;
