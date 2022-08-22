---
id: Button
section: components
---

import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';

## Demos 

### Progress button

The following demo shows the intended flow for a button that visually indicates progress. This example demonstrates a login process, which updates the button label based on the `loginState`. 

Please note that only the button can be interacted with in this example. The username and password input fields cannot be edited as the focus is on the button behavior. 

```ts
import React from 'react';
import { Form, FormGroup, ActionGroup, InputGroup, TextInput, Button } from '@patternfly/react-core';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';

const ProgressButton: React.FunctionComponent = () => {
  const [loginState, setLoginState] = React.useState<'notLoggedIn' | 'loading' | 'loggedIn'>('notLoggedIn');

  return (
    <Form>
      <FormGroup label="Username" isRequired fieldId="progress-button-initial-login">
        <TextInput
          isRequired
          type="text"
          id="progress-button-initial-login"
          name="progress-button-initial-login"
          value="johndoe"
          aria-label="username input"
        />
      </FormGroup>
      <FormGroup label="Password" isRequired fieldId="progress-button-initial-password">
        <TextInput
          isRequired
          type="password"
          value="p@ssw0rd"
          id="progress-button-initial-password"
          name="progress-button-initial-password"
          aria-label="password input"
        />
      </FormGroup>
      <ActionGroup>
        <Button
          variant="primary"
          onClick={
            loginState === 'notLoggedIn'
              ? () => {
                  setLoginState('loading');
                  setTimeout(() => {
                    setLoginState('loggedIn');
                  }, 3000);
                }
              : null
          }
          isLoading={loginState === 'loading'}
          icon={loginState === 'loggedIn' ? <CheckCircleIcon /> : null}
          spinnerAriaValueText="Loading..."
        >
          {loginState === 'notLoggedIn' && 'Link account and log in'}
          {loginState === 'loading' && 'Linking account'}
          {loginState === 'loggedIn' && 'Logged in'}
        </Button>
      </ActionGroup>
    </Form>
  );
};
```
