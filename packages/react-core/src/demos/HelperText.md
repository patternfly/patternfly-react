---
id: Helper text
section: components
---

import MinusIcon from '@patternfly/react-icons/dist/esm/icons/minus-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';

## Demos

### Static variant with static text

In this demo, the static variant of the Helper Text component (the default) is used, and the text itself will always be visible to users and will never change.

The `aria-describedby` attribute is passed into the Text Input component and is linked to the `id` of the Helper Text component. This notifies assistive technologies of the helper text when the input receives focus, which can be helpful if a user navigates away from and then back to the input so that they are reminded of the helper text.

Note that this demo does not validate the Text Input component. When it would need to be validated, there are other steps that would need to be taken to make it accessible, such as passing in `aria-invalid` and `aria-live` attributes.

```ts
import React from 'react';
import { Form, FormGroup, TextInput, HelperText, HelperTextItem } from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';

const HelperTextStaticVariantDynamicText: React.FunctionComponent = () => {
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

In this demo, the static variant of the Helper Text component (the default) is used with the `hasIcon` prop passed in when there is an error, and the text itself dynamically updates based on the input value. When the input has a value of `johndoe` an error is rendered to simulate a username already being taken, while an empty input renders other helper text. When the input is valid, no helper text is rendered.

The `aria-describedby` attribute is passed into the Text Input component and is linked to the `id` of the Helper Text component. This notifies assistive technologies of the helper text when the input receives focus, which can be helpful if a user navigates away from and then back to the input so that they are reminded of the helper text.

An `aria-live` region is used to notify assistive technologies when there is an update to the helper text, notifying users immediately when an error or another issue occurs. Without this attribute, a user would have to navigate out of and back into the input field to have the new text announced via the `aria-describedby` attribute.

The `aria-invalid` attribute is also passed into the text input, which allows assistive technologies to notify users that an input is invalid. When this attribute is true, it's important that users are notified of what is causing the input to be invalid; in this case, `aria-describedby` and `aria-live` help accomplish this.

```ts
import React from 'react';
import { Form, FormGroup, TextInput, HelperText, HelperTextItem } from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';

const HelperTextStaticVariantDynamicText: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('');
  const [inputValidation, setinputValidation] = React.useState('default');

  const handleInputChange = inputValue => {
    setValue(inputValue);
  };

  React.useEffect(() => {
    if (value === '') {
      setinputValidation('default');
    } else if (value === 'johndoe') {
      setinputValidation('error');
    } else {
      setinputValidation('success');
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
