import React from 'react';
import { Form, FormGroup, TextArea } from '@patternfly/react-core';

export const TextAreaValidated: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('');
  const [invalidText, setInvalidText] = React.useState('You must have something to say');
  const [validated, setValidated] = React.useState<'default' | 'error' | 'warning' | 'success' | undefined>('default');
  const [helperText, setHelperText] = React.useState('Share your thoughts.');
  const simulateNetworkCall = (callback: Function) => {
    setTimeout(callback, 2000);
  };

  const handleTextAreaChange = (value: string) => {
    setValue(value);
    setValidated('default');
    setHelperText('Validating...');
    simulateNetworkCall(() => {
      if (value.length > 0) {
        if (value.length >= 10) {
          setValidated('success');
          setHelperText('Thanks for your comments!');
        } else {
          setValidated('error');
          setInvalidText("You're being too brief, please enter at least 10 characters.");
        }
      } else {
        setValidated('warning');
        setHelperText('You must have something to say');
      }
    });
  };
  return (
    <Form>
      <FormGroup
        label="Comments:"
        type="string"
        helperText={helperText}
        helperTextInvalid={invalidText}
        fieldId="selection"
        validated={validated}
      >
        <TextArea
          value={value}
          onChange={value => handleTextAreaChange(value)}
          isRequired
          validated={validated}
          aria-label="invalid text area example"
        />
      </FormGroup>
    </Form>
  );
};
