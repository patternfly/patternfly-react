---
id: Progress
section: components
---
import { useState } from 'react';
import accessibilityStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';

## Demos

### Basic

```ts file="examples/Progress/ProgressBasic.tsx"

```

### With only increasing progress

Sometimes a progress bar should only show increases to progress state. In this case, before the next value is set it should be checked against the current progress. The `Decrease progress` button attempts to set a lower progress value, simulating an update to a progress state that isn't desired, but won't change the progress state due to this check.

```ts file="examples/Progress/ProgressWithOnlyIncreasing.tsx"

```
