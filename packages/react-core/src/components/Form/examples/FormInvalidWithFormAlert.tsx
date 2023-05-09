import React from 'react';
import {
  Alert,
  Form,
  FormAlert,
  FormGroup,
  TextInput,
  HelperText,
  HelperTextItem,
  FormHelperText
} from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';

export const FormInvalidWithAlert: React.FunctionComponent = () => {
  type validate = 'success' | 'warning' | 'error' | 'default';

  const [age, setAge] = React.useState('Five');
  const [validated, setValidated] = React.useState<validate>('error');

  const handleAgeChange = (_event, age: string) => {
    setAge(age);
    if (age === '') {
      setValidated('default');
    } else if (/^\d+$/.test(age)) {
      setValidated('success');
    } else {
      setValidated('error');
    }
  };

  return (
    <Form>
      {validated === 'error' && (
        <FormAlert>
          <Alert variant="danger" title="Fill out all required fields before continuing." aria-live="polite" isInline />
        </FormAlert>
      )}
      <FormGroup label="Age" type="number" fieldId="age-2">
        <TextInput
          validated={validated}
          value={age}
          id="age-2"
          aria-describedby="age-2-helper"
          onChange={handleAgeChange}
        />
        {validated !== 'success' && (
          <FormHelperText>
            <HelperText>
              <HelperTextItem icon={<ExclamationCircleIcon />} variant={validated}>
                {validated === 'error' ? 'Must be a number' : 'Please enter your age'}
              </HelperTextItem>
            </HelperText>
          </FormHelperText>
        )}
      </FormGroup>
    </Form>
  );
};
