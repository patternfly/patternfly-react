import React from 'react';
import { Form, FormGroup, FormHelperText, HelperText, HelperTextItem, TextArea } from '@patternfly/react-core';

export const TextAreaValidated: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('');
  const [validated, setValidated] = React.useState<'default' | 'error' | 'warning' | 'success' | undefined>('default');
  const [helperText, setHelperText] = React.useState('Share your thoughts.');
  const timerRef = React.useRef<number | null>(null);
  const simulateNetworkCall = (callback: Function) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(callback, 2000);
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
          setHelperText("You're being too brief, please enter at least 10 characters.");
        }
      } else {
        setValidated('warning');
        setHelperText('You must have something to say');
      }
    });
  };
  return (
    <Form>
      <FormGroup label="Comments:" type="string" fieldId="selection">
        <TextArea
          value={value}
          onChange={(_event, value) => handleTextAreaChange(value)}
          isRequired
          validated={validated}
          aria-label="invalid text area example"
        />
        <FormHelperText>
          <HelperText>
            <HelperTextItem variant={validated}>{helperText}</HelperTextItem>
          </HelperText>
        </FormHelperText>
      </FormGroup>
    </Form>
  );
};
