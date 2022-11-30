---
id: Wizard
section: components
cssPrefix: pf-c-wizard
propComponents:
  ['Wizard', 'WizardNav', 'WizardNavItem', 'WizardHeader', 'WizardBody', 'WizardFooter', 'WizardToggle', 'WizardStep']
ouia: true
---

import { Button, Drawer, DrawerActions, DrawerCloseButton, DrawerColorVariant,
DrawerContent, DrawerContentBody, DrawerHead, DrawerPanelContent, DrawerSection, Wizard, WizardFooter, WizardContextConsumer, ModalVariant, Alert, EmptyState, EmptyStateIcon, EmptyStateBody, EmptyStateSecondaryActions, Title, Progress, Form, FormGroup, TextInput } from '@patternfly/react-core';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';
import SlackHashIcon from '@patternfly/react-icons/dist/esm/icons/slack-hash-icon';


If you seek a wizard solution that allows for more composition, see the [React next](/components/wizard/react-next) tab.

## Examples

### Basic

```ts file="./WizardBasic.tsx"
```

### Basic with disabled steps

```ts file="./WizardBasicWithDisabledSteps.tsx"
```

### Anchors for nav items

```ts file="./WizardAnchorsForNavItems.tsx"
```

### Incrementally enabled steps

```ts file="./WizardIncrementallyEnabledSteps.tsx"
```

### Expandable steps

```ts file="./WizardExpandableSteps.tsx"
```

### Finished

```ts file="./WizardFinished.tsx"
```

### Enabled on form validation

```ts file="./WizardEnabledOnFormValidation.tsx"
```

### Validate on button press

This example demonstrates how to use the `WizardContextConsumer` to consume the `WizardContext`. `WizardContext` can be used to imperatively move to a specific wizard step.

The definition of the `WizardContext` is as follows:

```
interface WizardContext {
  goToStepById: (stepId: number | string) => void;
  goToStepByName: (stepName: string) => void;
  onNext: () => void;
  onBack: () => void;
  onClose: () => void;
  activeStep: WizardStep;
}
```

```ts file="./WizardValidateOnButtonPress.tsx"
```

### Progressive steps

```ts file="./WizardProgressiveSteps.tsx"
```

### Get current step

```ts file="./WizardGetCurrentStep.tsx"
```

### Wizard in modal

```ts file="./WizardInModal.tsx"
```

### Wizard with drawer

```ts file="./WizardWithDrawer.tsx"
```
