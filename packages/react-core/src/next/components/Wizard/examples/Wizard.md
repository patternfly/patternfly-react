---
id: Wizard
section: components
cssPrefix: pf-c-wizard
propComponents: ['Wizard', 'WizardFooter', 'WizardToggle', 'WizardStep', 'WizardBody']
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
  Step,
  SubStep,
  useWizardFooter,
  WizardStepProps,
  useWizardContext
} from '@patternfly/react-core/next';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';

PatternFly has two implementations of a `Wizard`.

This newer `Wizard` takes a more explicit and declarative approach compared to the older implementation, which can be found under the [React](/components/wizard/react) tab.

## Composable structure

The standard sub-component relationships are arranged as follows:

```noLive
<Wizard>
  <WizardStep />
  <WizardStep
    steps={[
      <WizardStep />,
      <WizardStep />
    ]}
  />
</Wizard>
```

## Examples

### Basic

```ts file="./WizardBasic.tsx"
```

### Custom Nav

```ts file="./WizardCustomNav.tsx"
```

### Kitchen Sink

Includes a header, custom footer, sub-steps, step content with a drawer, custom nav item, and nav prevention until step visitation.

```ts file="./WizardKitchenSink.tsx"
```
