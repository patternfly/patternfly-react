import React from 'react';
import { Form, FormGroup, FormHelperText, TextInput, HelperText, HelperTextItem } from '@patternfly/react-core';

export const HelperTextStaticTextDynamicVariant: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('');
  const [inputValidation, setInputValidation] = React.useState({
    ruleLength: 'indeterminate',
    ruleCharacterTypes: 'indeterminate'
  });
  const { ruleLength, ruleCharacterTypes } = inputValidation;

  React.useEffect(() => {
    let lengthVariant = ruleLength;
    let typeVariant = ruleCharacterTypes;

    if (value === '') {
      setInputValidation({
        ruleLength: 'indeterminate',
        ruleCharacterTypes: 'indeterminate'
      });
      return;
    }

    if (!/\d/g.test(value)) {
      typeVariant = 'error';
    } else {
      typeVariant = 'success';
    }

    if (value.length < 5) {
      lengthVariant = 'error';
    } else {
      lengthVariant = 'success';
    }

    setInputValidation({ ruleLength: lengthVariant, ruleCharacterTypes: typeVariant });
  }, [value, ruleLength, ruleCharacterTypes]);

  const handleInputChange = (_event, inputValue: string) => {
    setValue(inputValue);
  };

  const filterValidations = () => Object.keys(inputValidation).filter((item) => inputValidation[item] !== 'success');

  return (
    <Form>
      <FormGroup label="Username" isRequired fieldId="login-input-helper-text3">
        <TextInput
          isRequired
          type="text"
          id="login-input-helper-text3"
          name="login-input-helper-text3"
          onChange={handleInputChange}
          aria-describedby={filterValidations().join(' ')}
          aria-invalid={ruleCharacterTypes === 'error' || ruleLength === 'error'}
          value={value}
        />
        <FormHelperText>
          <HelperText component="ul">
            <HelperTextItem component="li" id="ruleLength" variant={ruleLength as any}>
              Must be at least 5 characters in length
            </HelperTextItem>
            <HelperTextItem component="li" id="ruleCharacterTypes" variant={ruleCharacterTypes as any}>
              Must include at least 1 number
            </HelperTextItem>
          </HelperText>
        </FormHelperText>
      </FormGroup>
    </Form>
  );
};
