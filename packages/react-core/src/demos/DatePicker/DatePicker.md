---
id: Date picker
section: components
subsection: date-and-time
---

import { Fragment, useRef, useState } from 'react';
import { Modal as ModalDeprecated, ModalVariant as ModalVariantDeprecated } from '@patternfly/react-core/deprecated';

## Demos

### Date range picker

This is intended to be used as a filter. After selecting a start date, the next date is automatically selected.

```ts file="./examples/DatePickerRange.tsx"
```

### Date and time pickers in modal

Modals trap focus and watch a few document level events. In order to place a date picker in a modal:

- To avoid the modal's escape press event handler from overruling the date picker's escape press handlers, use the `DatePickerRef` to close the calendar when it is open and the escape key is pressed.
- Append the calendar to the modal to keep it as close to the date picker in the DOM while maintaining correct layouts visually
  In order to place a time picker in the modal, its menu must be appended to the time picker's parent.

```ts file="./examples/DateTimePickerInModal.tsx"

```
