---
id: Password strength
section: patterns
---

import { useState } from 'react';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import RhUiErrorFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-error-fill-icon';
import RhUiWarningFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-warning-fill-icon';
import RhUiCheckCircleFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-check-circle-fill-icon';
import formStyles from '@patternfly/react-styles/css/components/Form/form';

## Demos

### Basic validation

Note, the validation and password strength rules are only examples, demonstrating the changes in the UI when certain conditions are met. We expect consumers will substitute their own, more robust, validation algorithm. In this demo the password strength is determined by how often validation rules are met. A good open-source password strength estimator, recommended by InfoSec, is [zxcvbn](https://github.com/dropbox/zxcvbn).

```ts file="./examples/PasswordStrength/PasswordStrengthDemo.tsx"

```
