import React from 'react';
import { Form, FormGroup, FormHelperText, HelperText, HelperTextItem, TextInput } from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';

export const PasswordStrengthDemo: React.FunctionComponent = () => {
  type HelperTextItemVariant = 'default' | 'indeterminate' | 'warning' | 'success' | 'error';
  interface PassStrength {
    variant: HelperTextItemVariant;
    icon: JSX.Element;
    text: string;
  }

  const [password, setPassword] = React.useState('');
  const [ruleLength, setRuleLength] = React.useState<HelperTextItemVariant>('indeterminate');
  const [ruleContent, setRuleContent] = React.useState<HelperTextItemVariant>('indeterminate');
  const [ruleCharacters, setRuleCharacters] = React.useState<HelperTextItemVariant>('indeterminate');
  const [passStrength, setPassStrength] = React.useState<PassStrength>({
    variant: 'error',
    icon: <ExclamationCircleIcon />,
    text: 'Weak'
  });

  const handlePasswordInput = (_event: any, password: string) => {
    setPassword(password);
    validate(password);
  };

  const validate = (password: string) => {
    if (password === '') {
      setRuleLength('indeterminate');
      setRuleContent('indeterminate');
      setRuleCharacters('indeterminate');
      return;
    }

    if (password.length < 14) {
      setRuleLength('error');
    } else {
      setRuleLength('success');
    }

    if (/redhat/gi.test(password)) {
      setRuleContent('error');
    } else {
      setRuleContent('success');
    }

    let rulesCount = 0;
    let strCount = 0;
    if (/[a-z]/g.test(password)) {
      rulesCount++;
    }
    if (/[A-Z]/g.test(password)) {
      strCount += password.match(/[A-Z]/g).length;
      rulesCount++;
    }
    if (/\d/g.test(password)) {
      strCount += password.match(/\d/g).length;
      rulesCount++;
    }
    if (/\W/g.test(password)) {
      strCount += password.match(/\W/g).length;
      rulesCount++;
    }

    if (rulesCount < 3) {
      setRuleCharacters('error');
    } else {
      setRuleCharacters('success');
    }

    if (strCount < 3) {
      setPassStrength({ variant: 'error', icon: <ExclamationCircleIcon />, text: 'Weak' });
    } else if (strCount < 5) {
      setPassStrength({ variant: 'warning', icon: <ExclamationTriangleIcon />, text: 'Medium' });
    } else {
      setPassStrength({ variant: 'success', icon: <CheckCircleIcon />, text: 'Strong' });
    }
  };

  const passStrLabel = (
    <HelperText>
      <HelperTextItem variant={passStrength.variant} icon={passStrength.icon}>
        {passStrength.text}
      </HelperTextItem>
    </HelperText>
  );

  return (
    <Form>
      <FormGroup
        label="Password"
        isRequired
        fieldId="password-field"
        {...(ruleLength === 'success' &&
          ruleContent === 'success' &&
          ruleCharacters === 'success' && {
            labelInfo: passStrLabel
          })}
      >
        <TextInput
          isRequired
          type="text"
          id="password-field"
          name="password-field"
          aria-describedby="password-field-helper"
          aria-invalid={ruleLength === 'error' || ruleContent === 'error' || ruleCharacters === 'error'}
          value={password}
          onChange={handlePasswordInput}
        />
        <FormHelperText>
          <HelperText component="ul" aria-live="polite" id="password-field-helper">
            <HelperTextItem variant={ruleLength} component="li">
              Must be at least 14 characters
            </HelperTextItem>
            <HelperTextItem variant={ruleContent} component="li">
              Cannot contain the word "redhat"
            </HelperTextItem>
            <HelperTextItem variant={ruleCharacters} component="li">
              Must include at least 3 of the following: lowercase letter, uppercase letters, numbers, symbols
            </HelperTextItem>
          </HelperText>
        </FormHelperText>
      </FormGroup>
    </Form>
  );
};
