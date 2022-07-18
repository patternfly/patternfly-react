---
id: Wizard
section: components
cssPrefix: pf-c-wizard
propComponents:
  [
    'WizardComposable',
    'WizardComposableFooter',
    'WizardComposableToggle',
    'WizardComposableStep',
    'WizardComposableBody',
  ]
---

import { Button, WizardComposable, WizardComposableFooter, WizardComposableStep, WizardComposableBody, useWizardFooter, ModalVariant, Alert, EmptyState, EmptyStateIcon, EmptyStateBody, EmptyStateSecondaryActions, Title, Progress } from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';
import SlackHashIcon from '@patternfly/react-icons/dist/esm/icons/slack-hash-icon';

PatternFly has two implementations of a `Wizard`, where the latest `WizardComposable`. Its temporary name speaks to the improvements made to the composition of the Wizard and its ansillary components.

The documentation for the older `Wizard` implementation can be found under the [React legacy](/components/wizard/react-legacy) tab.

## Examples

### Basic

```ts file="./WizardBasic.tsx"
```

### Custom Nav

```ts file="./WizardCustomNav.tsx"
```

### Kitchen Sink

```ts file="./WizardKitchenSink.tsx"
```
