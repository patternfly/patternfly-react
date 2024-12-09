---
id: Wizard
section: components
cssPrefix: pf-v6-c-wizard
propComponents:
  [
    'Wizard',
    'WizardFooter',
    'WizardFooterWrapper',
    'WizardToggle',
    'WizardStep',
    'WizardBody',
    'WizardHeader',
    'WizardNav',
    'WizardNavItem',
    'WizardContextProps',
    'WizardBasicStep',
    'WizardParentStep',
    'WizardSubStep'
  ]
---

import {
FormGroup,
TextInput,
Drawer,
DrawerContent,
Button,
Title,
Flex,
Checkbox,
DrawerPanelContent,
DrawerColorVariant,
DrawerHead,
DrawerActions,
DrawerCloseButton,
Modal,
ModalVariant,
Wizard,
WizardFooter,
WizardFooterWrapper,
WizardToggle,
WizardStep,
WizardBody,
useWizardFooter,
useWizardContext,
WizardNavItem,
WizardNav,
WizardHeader
} from '@patternfly/react-core';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';
import SlackHashIcon from '@patternfly/react-icons/dist/esm/icons/slack-hash-icon';
import CogsIcon from '@patternfly/react-icons/dist/esm/icons/cogs-icon';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import layout from '@patternfly/react-styles/css/layouts/Bullseye/bullseye';

## Examples

### Basic

```ts file="./WizardBasic.tsx"

```

### Focus content on next/back

To focus the main content element of the `Wizard`, pass in the `shouldFocusContent` property. It is recommended that this is passed in so that users can navigate through a `WizardStep` content in order.

```ts file="./WizardFocusOnNextBack.tsx"

```

### Basic with disabled steps

```ts file="./WizardBasicDisabledSteps.tsx"

```

### Anchors for nav items

```ts file="./WizardWithNavAnchors.tsx"

```

### Incrementally enabled steps

```ts file="./WizardStepVisitRequired.tsx"

```

### Expandable steps

```ts file="./WizardExpandableSteps.tsx"

```

### Progress after submission

```ts file="./WizardWithSubmitProgress.tsx"

```

### Enabled on form validation

```ts file="./WizardEnabledOnFormValidation.tsx"

```

### Validate on button press

```ts file="./WizardValidateOnButtonPress.tsx"

```

### Progressive steps

```ts file="./WizardProgressiveSteps.tsx"

```

### Get current step

```ts file="./WizardGetCurrentStep.tsx"

```

### Within modal

```ts file="./WizardWithinModal.tsx"

```

### Step drawer content

```ts file="./WizardStepDrawerContent.tsx"

```

### Custom navigation

```ts file="./WizardWithCustomNav.tsx"

```

### Header

```ts file="./WizardWithHeader.tsx"

```

### Custom footer

```ts file="./WizardWithCustomFooter.tsx"

```

### Custom navigation item

```ts file="./WizardWithCustomNavItem.tsx"

```

### Toggle step visibility

```ts file="./WizardToggleStepVisibility.tsx"

```

### Step status

```ts file="./WizardStepStatus.tsx"

```

## Hooks

### useWizardContext

Used to access any property of [WizardContext](#wizardcontextprops):

```noLive
import { useWizardContext } from '@patternfly/react-core';

const StepContent = () => {
  const { activeStep } = useWizardContext();
  return <>This is the current step: {activeStep}</>;
}
```

### useWizardFooter

Used to set a unique footer for the wizard on any given step.

```noLive
import { useWizardFooter } from '@patternfly/react-core';

const StepContent = () => {
  useWizardFooter(<>Some footer</>);
  return <>Step content</>;
}
```
