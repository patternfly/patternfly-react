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
