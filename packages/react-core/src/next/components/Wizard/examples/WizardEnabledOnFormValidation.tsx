import React from 'react';

import { Form, FormGroup, TextInput } from '@patternfly/react-core';
import { Wizard, WizardStep } from '@patternfly/react-core/next';

interface SampleFormProps {
  value: string;
  isValid: boolean;
  setValue: (value: string) => void;
  setIsValid: (isValid: boolean) => void;
}

const SampleForm: React.FunctionComponent<SampleFormProps> = ({ value, isValid, setValue, setIsValid }) => {
  const validated = isValid ? 'default' : 'error';

  const handleTextInputChange = (value: string) => {
    const isValid = /^\d+$/.test(value);

    setValue(value);
    setIsValid(isValid);
  };

  return (
    <Form>
      <FormGroup
        label="Age:"
        type="number"
        helperText="Write your age in numbers."
        helperTextInvalid="Age has to be a number"
        fieldId="age"
        validated={validated}
      >
        <TextInput
          validated={validated}
          value={value}
          id="age"
          aria-describedby="age-helper"
          onChange={handleTextInputChange}
        />
      </FormGroup>
    </Form>
  );
};

export const WizardEnabledOnFormValidation: React.FunctionComponent = () => {
  const [ageValue, setAgeValue] = React.useState('Thirty');
  const [isSubAFormValid, setIsSubAFormValid] = React.useState(false);

  const onSave = () => alert(`Wow, you look a lot younger than ${ageValue}.`);

  return (
    <Wizard isVisitRequired height={400} title="Enabled on form validation wizard" onSave={onSave}>
      <WizardStep name="Information" id="form-valid-info">
        Information content
      </WizardStep>
      <WizardStep
        name="Configuration"
        id="form-valid-config"
        steps={[
          <WizardStep
            name="Substep A with validation"
            id="form-valid-sub-a"
            key="form-valid-sub-a"
            footer={{ isNextDisabled: !isSubAFormValid }}
          >
            <SampleForm
              value={ageValue}
              setValue={setAgeValue}
              isValid={isSubAFormValid}
              setIsValid={setIsSubAFormValid}
            />
          </WizardStep>,
          <WizardStep name="Substep B" id="form-valid-sub-b" key="form-valid-sub-b">
            Substep B content
          </WizardStep>
        ]}
      />
      <WizardStep name="Additional" id="form-valid-additional">
        Additional step content
      </WizardStep>
      <WizardStep name="Review" id="form-valid-review" footer={{ nextButtonText: 'Submit form' }}></WizardStep>
    </Wizard>
  );
};
