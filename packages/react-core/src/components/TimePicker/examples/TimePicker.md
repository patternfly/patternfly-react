---
id: Time picker
section: components
subsection: date-and-time
cssPrefix: pf-v6-c-time-picker
propComponents: ['TimePicker']
---

import { TimePicker } from '@patternfly/react-core';

## Examples

Appending the TimePicker to the `document.body` may cause accessibility issues, including being unable to navigate into the menu via keyboard or other assistive technologies. Instead, appending to the `"parent"` is recommended.

### Basic 12 hour

```ts file="./TimePickerBasic12Hour.tsx"
```

### Basic 24 hour

```ts file="./TimePickerBasic24Hour.tsx"
```

### Custom delimiter

```ts file="./TimePickerCustomDelimiter.tsx"
```

### Minimum/maximum times

The `minTime`/`maxTime` props restrict the options shown for the user to select from as well as trigger the `invalidMinMaxErrorMessage` if the user enters a time outside this range.

```ts file="./TimePickerMinMaxTimes.tsx"
```

### With seconds

```ts file="./TimePickerWithSeconds.tsx"
```

### Basic 24 hours with seconds

```ts file="./TimePickerBasic24HoursWithSeconds.tsx"
```
