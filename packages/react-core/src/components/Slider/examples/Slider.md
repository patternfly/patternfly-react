---
id: Slider
section: components
cssPrefix: pf-v6-c-slider
propComponents: ['Slider', 'SliderStepObject']
---

import { Slider, Button, Content, ContentVariants } from '@patternfly/react-core';
import MinusIcon from '@patternfly/react-icons/dist/esm/icons/minus-icon';
import PlusIcon from '@patternfly/react-icons/dist/esm/icons/plus-icon';
import LockIcon from '@patternfly/react-icons/dist/esm/icons/lock-icon';
import LockOpenIcon from '@patternfly/react-icons/dist/esm/icons/lock-open-icon';

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
