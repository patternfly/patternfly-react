import React from 'react';
import { Form, FormGroup, TextInput } from '@patternfly/react-core';

class InvalidForm extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup
          isRequired
          label="Email"
          helperText="This is should be your email"
          helperTextInvalid="Your email is not in a correct format"
          fieldId="email-label"
          isValid={false}
        >
          <TextInput isValid={false} value="email||email.com" id="email-label" aria-errormesssage="email-helper" />
        </FormGroup>
        <FormGroup
          label="Age"
          type="number"
          helperText="Please write your age"
          helperTextInvalid="Age has to be a number"
          fieldId="age"
          isValid={false}
        >
          <TextInput isValid={false} value="Five" aria-label="Object" id="age" aria-errormesssage="age-helper" />
        </FormGroup>
      </Form>
    );
  }
}

export default InvalidForm;
