---
id: Wizard
section: components
cssPrefix: pf-c-wizard
propComponents: ['Wizard', 'WizardStep', 'WizardFooter', 'WizardToggle', 'WizardStep', 'WizardBody', 'WizardContextProps', 'Step', 'SubStep']
beta: true
---

import {
  FormGroup,
  TextInput,
  Drawer,
  DrawerContent,
  Button,
  Flex,
  DrawerPanelContent,
  DrawerColorVariant,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  WizardNavItem,
  WizardNav,
  WizardHeader
} from '@patternfly/react-core';
import {
  Wizard,
  WizardFooter,
  WizardToggle,
  WizardStep,
  WizardBody,
  useWizardFooter,
  useWizardContext
} from '@patternfly/react-core/next';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';

PatternFly has two implementations of a `Wizard`. This newer `Wizard` takes a more explicit and declarative approach compared to the older implementation, which can be found under the [React](/components/wizard/react) tab.

## Examples

### Basic

```ts file="./WizardBasic.tsx"
```

### Custom navigation

```ts file="./WizardCustomNav.tsx"
```

### Kitchen sink

Includes a header, custom footer, sub-steps, step content with a drawer, custom nav item, and nav prevention until step visitation.

```ts file="./WizardKitchenSink.tsx"
```

## Hooks

### useWizardFooter

Used to set a unique footer for the wizard on any given step. See step 3 of [Kitchen sink](#kitchen-sink) for a live example.

```noLive
import { useWizardFooter } from '@patternfly/react-core/next';

const StepContent = () => {
  useWizardFooter(<>Some footer</>);
  return <>Step content</>;
}
```

### useWizardContext

Used to access any property of [WizardContext](#wizardcontextprops):

```noLive
import { useWizardContext } from '@patternfly/react-core/next';

const StepContent = () => {
  const { activeStep } = useWizardContext();
  return <>This is the active step: {activeStep}</>;
}
```
