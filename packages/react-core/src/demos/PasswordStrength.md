---
id: Password strength
section: components
---

import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import formStyles from '@patternfly/react-styles/css/components/Form/form';

## Demos

### Basic validation

Note, the validation and password strength rules are only examples, demonstrating the changes in the UI when certain conditions are met. We expect consumers will substitute their own, more robust, validation algorithm. In this demo the password strength is determined by how often validation rules are met. A good open-source password strength estimator, recommended by InfoSec, can be found here: https://github.com/dropbox/zxcvbn

```ts file="./examples/PasswordStrength/PasswordStrengthDemo.tsx"

```
