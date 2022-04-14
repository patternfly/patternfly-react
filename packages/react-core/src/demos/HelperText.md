---
id: Helper text
section: components
---

import MinusIcon from '@patternfly/react-icons/dist/esm/icons/minus-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import CheckIcon from '@patternfly/react-icons/dist/esm/icons/check-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

## Demos

### Static variant with static text

In this demo, the static variant of the helper text item component (the default) is used, and the text itself will always be visible to users and will never change.

The `aria-describedby` attribute is passed into the text input component and is linked to the `id` of the helper text component. This allows assistive technologies to notify users of the helper text content when the input receives focus, which can be helpful if a user navigates away from and then back to the input.

Note that this demo does not validate the text input component. When it would need to be validated, there are other steps that would need to be taken to make it accessible, such as passing in `aria-invalid` and `aria-live` attributes to the appropriate components.

```ts
import React from 'react';
import { Form, FormGroup, TextInput, HelperText, HelperTextItem } from '@patternfly/react-core';
import MinusIcon from '@patternfly/react-icons/dist/esm/icons/minus-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';

const HelperTextStaticVariantStaticText: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('');

  const handleInputChange = inputValue => {
    setValue(inputValue);
  };

  return (
    <Form>
      <FormGroup label="Middle Name" fieldId="login-input-helper-text1">
        <TextInput
          type="text"
          id="login-input-helper-text1"
          name="login-input-helper-text1"
          onChange={handleInputChange}
          aria-describedby="helper-text1"
        />
      </FormGroup>
      <HelperText id="helper-text1">
        <HelperTextItem variant={'default'}>Enter your middle name or your middle initial</HelperTextItem>
      </HelperText>
    </Form>
  );
};
```

### Static variant with dynamic text

In this demo, the static variant of the helper text item component (the default) is used with the `hasIcon` prop passed in when there is an error, and the text itself dynamically updates based on the input value. When the input has a value of `johndoe` an error is rendered to simulate a username already being taken, while an empty input renders other helper text. When the input is valid, no helper text is rendered.

The `aria-describedby` attribute is passed into the text input component and is linked to the `id` of the helper text component. Similar to the static variant with static text demo, this allows assistive technologies to notify users of the helper text content when the navigating to the input.

An `aria-live` region is passed into the helper text component, which allows assistive technologies to announce to users when any dynamic content within it updates, such as when the text content changes or gets rendered. Without this attribute, a user would have to navigate out of and back into the input field multiple times to check the status of their input.

The `aria-invalid` attribute is also passed into the text input, which allows assistive technologies to notify users that an input is invalid. When this attribute is true, it's important that users are notified of what is causing the input to be invalid; in this case, `aria-describedby` and `aria-live` help accomplish this.

```ts
import React from 'react';
import { Form, FormGroup, TextInput, HelperText, HelperTextItem } from '@patternfly/react-core';
import MinusIcon from '@patternfly/react-icons/dist/esm/icons/minus-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';

const HelperTextStaticVariantDynamicText: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('');
  const [inputValidation, setInputValidation] = React.useState('default');

  const handleInputChange = inputValue => {
    setValue(inputValue);
  };

  React.useEffect(() => {
    if (value === '') {
      setInputValidation('default');
    } else if (value === 'johndoe') {
      setInputValidation('error');
    } else {
      setInputValidation('success');
    }
  }, [value]);

  return (
    <Form>
      <FormGroup label="Username" isRequired fieldId="login-input-helper-text2">
        <TextInput
          isRequired
          type="text"
          id="login-input-helper-text2"
          name="login-input-helper-text2"
          onChange={handleInputChange}
          aria-describedby="helper-text2"
          aria-invalid={inputValidation === 'error'}
        />
      </FormGroup>
      <HelperText id="helper-text2" aria-live="polite">
        {inputValidation !== 'success' && (
          <HelperTextItem variant={inputValidation as any} hasIcon={inputValidation === 'error'}>
            {inputValidation === 'default' ? 'Please enter a username' : 'Username already exists'}
          </HelperTextItem>
        )}
      </HelperText>
    </Form>
  );
};
```

### Dynamic variant with static text

In this demo, the helper text item components have the `isDynamic` prop passed in. While the text content of the components is static, the icons and styling will change as the validation of the input changes.

The `aria-describedby` attribute is passed into the text input component, and it is linked to the `id` attribute of a helper text item that results in an invalid input. This will allow assistive technologies to only be notified of any outstanding criteria that has not been met when the input receives focus.

Similar to the static variant with dynamic text example, the `aria-invalid` attribute is passed in, allowing assistive technologies to announce to users when at least one item is causing the input to be invalid.

```ts
import React from 'react';
import { Form, FormGroup, TextInput, HelperText, HelperTextItem } from '@patternfly/react-core';
import MinusIcon from '@patternfly/react-icons/dist/esm/icons/minus-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';

const HelperTextDynamicVariantDynamicText: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('');
  const [inputValidation, setInputValidation] = React.useState({
    ruleLength: 'indeterminate',
    ruleCharacterTypes: 'indeterminate'
  });
  const { ruleLength, ruleCharacterTypes } = inputValidation;

  React.useEffect(() => {
    let lengthStatus = ruleLength;
    let typeStatus = ruleCharacterTypes;

    if (value === '') {
      setInputValidation({
        ruleLength: 'indeterminate',
        ruleCharacterTypes: 'indeterminate'
      });
      return;
    }

    if (!/\d/g.test(value)) {
      typeStatus = 'error';
    } else {
      typeStatus = 'success';
    }

    if (value.length < 5) {
      lengthStatus = 'error';
    } else {
      lengthStatus = 'success';
    }

    setInputValidation({ ruleLength: lengthStatus, ruleCharacterTypes: typeStatus });
  }, [value]);

  const handleInputChange = inputValue => {
    setValue(inputValue);
  };

  const filterValidations = () => {
    return Object.keys(inputValidation).filter(item => {
      return inputValidation[item] !== 'success';
    });
  };

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
        />
      </FormGroup>
      <HelperText component="ul">
        <HelperTextItem component="li" id="ruleLength" isDynamic variant={ruleLength as any}>
          Must be at least 5 characters in length
        </HelperTextItem>
        <HelperTextItem component="li" id="ruleCharacterTypes" isDynamic variant={ruleCharacterTypes as any}>
          Must include at least 1 number
        </HelperTextItem>
      </HelperText>
    </Form>
  );
};
```
