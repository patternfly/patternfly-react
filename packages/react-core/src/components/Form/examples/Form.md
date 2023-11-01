---
id: Form
section: components
subsection: forms
cssPrefix: pf-v5-c-form
propComponents:
  [
    'ActionGroup',
    'Form',
    'FormGroup',
    'FormSection',
    'FormHelperText',
    'FormFieldGroup',
    'FormFieldGroupExpandable',
    'FormFieldGroupHeader',
    'FormFieldGroupHeaderTitleTextObject',
    'FormContextProps',
    'FormContextProviderProps',
    'Button',
    'Popover'
  ]
---

import {
Button,
Form,
FormGroup,
Popover,
TextInput,
TextArea,
FormSelect,
FormHelperText,
FormFieldGroup,
FormFieldGroupHeader,
FormFieldGroupExpandable,
Checkbox,
ActionGroup,
Radio
} from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import TrashIcon from '@patternfly/react-icons/dist/esm/icons/trash-icon';

## Examples

When using helper text inside a `FormGroup`, the `HelperText` component should be wrapped with the `FormHelperText` component to provide additional spacing.

### Basic

```ts file="./FormBasic.tsx"

```

### Horizontal

```ts file="./FormHorizontal.tsx"

```

### Limit width

```ts file="./FormLimitWidth.tsx"

```

### Invalid

```ts file="./FormInvalid.tsx"

```

### Invalid with form alert

```ts file="./FormInvalidWithFormAlert.tsx"

```

### Validated

```ts file="./FormValidated.tsx"

```

### Horizontal stacked no padding top

```ts file="./FormHorizontalStacked.tsx"

```

### Horizontal stacked helper text on top

```ts file="./FormHorizontalHelper.tsx"

```

### Form group with additional label info

```ts file="./FormGroupLabelInfo.tsx"

```

### Form Sections

```ts file="./FormSections.tsx"

```

### Grid form

```ts file="./FormGrid.tsx"

```

### Field Groups

```ts file="./FormFieldGroups.tsx"

```

### Form state

```ts file="./FormState.tsx" isBeta

```
