---
id: Slider
section: components
cssPrefix: pf-v6-c-slider
propComponents: ['Slider', 'SliderStepObject']
---

import { useState } from 'react';
import { Slider, Button, Content, ContentVariants } from '@patternfly/react-core';
import RhUiMinusIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-minus-icon';
import RhUiAddIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-add-icon';
import RhUiLockFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-lock-fill-icon';
import RhUiUnlockFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-unlock-fill-icon';

## Examples

### Discrete

```ts file="./SliderDiscrete.tsx"

```

### Continuous

```ts file="./SliderContinuous.tsx"

```

### Value input

```ts file="./SliderValueInput.tsx"

```

### Thumb value input

```ts file="./SliderThumbValueInput.tsx"

```

### Actions

```ts file="./SliderActions.tsx"

```

### Disabled

```ts file="./SliderDisabled.tsx"

```

### Custom step tooltip

You can customize the content of the tooltip by passing the tooltipContent property. By default this tooltip will act as a description to the slider thumb, and thus shouldn't include critical information about the current slider step unless that information is part of the step's aria-valuetext.

If instead you want the tooltip to act as the human-readable value of the slider step - such as when all slider step labels are hidden - you must also pass the thumbAriaValueText property with the same string value as the tooltipContent. Additionally, you should pass the tooltip props object {aria: 'none', 'aria-live': 'off'} to tooltipProps in order to help prevent duplicate announcement from assistive technologies.

```ts file="./SliderCustomTooltip.tsx"

```

## Types

### SliderOnChangeEvent

The slider's `onChange` prop accepts an `event` parameter of the following types:

- `React.MouseEvent`
- `React.KeyboardEvent`
- `React.FormEvent<HTMLInputElement>`
- `React.TouchEvent`
- `React.FocusEvent<HTMLInputElement>`

The `SliderOnChangeEvent` type is a union of the above event types, and can be imported and used in your code like in the following code snippet:

```noLive
import { Slider, SliderOnChangeEvent } from '@patternfly/react-core';

<Slider onChange={(event: SliderOnChangeEvent) => {}} />
```
