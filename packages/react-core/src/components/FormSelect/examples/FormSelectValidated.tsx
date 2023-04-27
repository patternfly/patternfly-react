import React from 'react';
import {
  Form,
  FormGroup,
  FormHelperText,
  FormSelect,
  FormSelectOption,
  HelperText,
  HelperTextItem,
  ValidatedOptions
} from '@patternfly/react-core';

export const FormSelectValidated: React.FunctionComponent = () => {
  const [formValue, setFormValue] = React.useState('');
  const [helperText, setHelperText] = React.useState('');
  const [validated, setValidated] = React.useState<ValidatedOptions>(ValidatedOptions.default);

  const simulateNetworkCall = (callback: () => void) => {
    setTimeout(callback, 2000);
  };

  const onChange = (_event: React.FormEvent<HTMLSelectElement>, value: string) => {
    setFormValue(value);
    setValidated(ValidatedOptions.default);
    setHelperText('Validating...');
    simulateNetworkCall(() => {
      if (value === '3') {
        setValidated(ValidatedOptions.success);
        setHelperText('You chose wisely');
      } else if (value === '') {
        setValidated(ValidatedOptions.warning);
        setHelperText('You must select a value');
      } else {
        setValidated(ValidatedOptions.error);
        setHelperText('You must chose Three (thought that was obvious)');
      }
    });
  };

  const options = [
    { value: '', label: 'Select a number', disabled: false, isPlaceholder: true },
    { value: '1', label: 'One', disabled: false, isPlaceholder: false },
    { value: '2', label: 'Two', disabled: false, isPlaceholder: false },
    { value: '3', label: 'Three - the only valid option', disabled: false, isPlaceholder: false }
  ];

  return (
    <Form>
      <FormGroup label="Selection:" type="string" fieldId="selection">
        <FormSelect
          id="selection"
          validated={validated}
          value={formValue}
          onChange={onChange}
          aria-label="FormSelect Input"
        >
          {options.map((option, index) => (
            <FormSelectOption
              isDisabled={option.disabled}
              key={index}
              value={option.value}
              label={option.label}
              isPlaceholder={option.isPlaceholder}
            />
          ))}
        </FormSelect>
        <FormHelperText>
          <HelperText>
            <HelperTextItem variant={validated}>{helperText}</HelperTextItem>
          </HelperText>
        </FormHelperText>
      </FormGroup>
    </Form>
  );
};
