---
id: Progress stepper
section: components
cssPrefix: pf-c-progress-stepper
propComponents: ['ProgressStepper', 'ProgressStep']
beta: true
---

import InProgressIcon from '@patternfly/react-icons/dist/esm/icons/in-progress-icon';
import PendingIcon from '@patternfly/react-icons/dist/esm/icons/pending-icon';

## Examples

Progress steppers have default icons associated with the `variant` property, and may be overriden and customized using the `icon` property.

### Basic

```ts file="ProgressStepperBasic.tsx"
```

### With step descriptions

```ts file="ProgressStepperBasicWithDescription.tsx"
```

### With alignment

```ts file="ProgressStepperBasicWithAlignment.tsx"
```

### Compact

Compact progress steppers will only display the current step's `title`, and will not display any steps' `description` texts.

```ts file="ProgressStepperCompact.tsx"
```

### With an issue

```ts file="ProgressStepperBasicIssue.tsx"
```

### With a failure

```ts file="ProgressStepperBasicFailure.tsx"
```

### With custom icons

```ts file="ProgressStepperCustomIcons.tsx"
```

### With help popover

To add a popover to a progress step, set the `popoverRender` properties on the `ProgressStep` component.

```ts file="ProgressStepperHelpPopover.tsx"
```
