---
id: Form
section: components
subsection: forms
cssPrefix: pf-v6-c-form
propComponents:
  [
    'ActionGroup',
    'ActionList',
    'ActionListGroup',
    'ActionListItem',
    'Form',
    'FormGroup',
    'FormGroupLabelHelp',
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

import { useRef, useEffect, useState } from 'react';
import RhUiErrorFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-error-fill-icon';
import RhUiQuestionMarkCircleIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-question-mark-circle-icon';
import RhUiTrashFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-trash-fill-icon';
import styles from '@patternfly/react-styles/css/components/Form/form';

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

Field groups require a title per the [design guidelines](https://www.patternfly.org/components/forms/form/design-guidelines/#field-groups). For key-value pairs, we recommend the [field builder](https://www.patternfly.org/extensions/component-groups/field-builder) component group.

```ts file="./FormFieldGroups.tsx"

```

### Form state

```ts file="./FormState.tsx"

```
