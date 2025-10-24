---
id: Progress
section: components
cssPrefix: pf-v6-c-progress
propComponents: ['Progress']
---

import { useState } from 'react';

## Examples

### Basic

```ts file="./ProgressBasic.tsx"

```

### Small

```ts file="./ProgressSmall.tsx"

```

### Large

```ts file="./ProgressLarge.tsx"

```

### Outside

```ts file="./ProgressOutside.tsx"

```

### Inside

```ts file="./ProgressInside.tsx"

```

### Single line

```ts file="./ProgressSingleLine.tsx"

```

### Without measure

```ts file="./ProgressWithoutMeasure.tsx"

```

### Finite step

```ts file="./ProgressFiniteStep.tsx"

```

### Progress with step instructions

```ts file="./ProgressStepInstruction.tsx"

```

### Truncate title

```ts file="./ProgressTruncateTitle.tsx"

```

### Title outside of progress bar

```ts file="./ProgressTitleOutsideOfProgressBar.tsx"

```

### Helper text

```ts file="./ProgressHelperText.tsx"

```

## Status examples

When conveying status, you should ensure:

- There is visible helper text that explains the status.
- The helper text includes the status icon, as seen in our [basic helper text example](/components/helper-text#basic).
- The helper text is linked to the `<Progress>` component via the `aria-describedby` property, as seen in the [progress helper text example](#helper-text).

### Success

```ts file="./ProgressSuccess.tsx"

```

### Failure

```ts file="./ProgressFailure.tsx"

```

### Warning

```ts file="./ProgressWarning.tsx"

```

### Interactive status icon and measure location

```ts file="./ProgressInteractiveFailure.tsx"

```
