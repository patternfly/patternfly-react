---
id: Progress stepper
section: components
cssPrefix: pf-c-progress-stepper
propComponents: ['ProgressStepper', 'ProgressStep']
---

import InProgressIcon from '@patternfly/react-icons/dist/esm/icons/in-progress-icon';
import PendingIcon from '@patternfly/react-icons/dist/esm/icons/pending-icon';

## Examples

Progress steppers have defeault icons associated with the `variant` property, and may be overriden and customized using the `icon` property.

### Basic

```js
import React from 'react';
import { ProgressStepper, ProgressStep } from '@patternfly/react-core';

<ProgressStepper>
  <ProgressStep variant="success" aria-label="completed step">
    First step
  </ProgressStep>
  <ProgressStep variant="info" isCurrent aria-label="current step">
    Second step
  </ProgressStep>
  <ProgressStep variant="pending" aria-label="pending step">
    Third step
  </ProgressStep>
</ProgressStepper>;
```

### Basic with descriptions

```js
import React from 'react';
import { ProgressStepper, ProgressStep } from '@patternfly/react-core';

<ProgressStepper>
  <ProgressStep variant="success" description="This is the first thing to happen" aria-label="completed step">
    First step
  </ProgressStep>
  <ProgressStep variant="info" isCurrent description="This is the second thing to happen" aria-label="current step">
    Second step
  </ProgressStep>
  <ProgressStep variant="pending" description="This is the last thing to happen" aria-label="pending step">
    Third step
  </ProgressStep>
</ProgressStepper>;
```

### Center aligned with descriptions

```js
import React from 'react';
import { ProgressStepper, ProgressStep } from '@patternfly/react-core';

<ProgressStepper isCenterAligned>
  <ProgressStep variant="success" description="This is the first thing to happen" aria-label="completed step">
    First step
  </ProgressStep>
  <ProgressStep variant="info" isCurrent description="This is the second thing to happen" aria-label="current step">
    Second step
  </ProgressStep>
  <ProgressStep variant="pending" description="This is the last thing to happen" aria-label="pending step">
    Third step
  </ProgressStep>
</ProgressStepper>;
```

### Vertical with descriptions

```js
import React from 'react';
import { ProgressStepper, ProgressStep } from '@patternfly/react-core';

<ProgressStepper isVertical>
  <ProgressStep variant="success" description="This is the first thing to happen" aria-label="completed step">
    First step
  </ProgressStep>
  <ProgressStep variant="info" isCurrent description="This is the second thing to happen" aria-label="current step">
    Second step
  </ProgressStep>
  <ProgressStep variant="pending" description="This is the last thing to happen" aria-label="pending step">
    Third step
  </ProgressStep>
</ProgressStepper>;
```

### Compact

Compact progress steppers will only display the current step's `title`, and will not display any steps' `description` texts.

```js
import React from 'react';
import { ProgressStepper, ProgressStep } from '@patternfly/react-core';

<ProgressStepper isCompact>
  <ProgressStep variant="success" aria-label="completed step">
    First step
  </ProgressStep>
  <ProgressStep variant="info" isCurrent aria-label="current step">
    Second step
  </ProgressStep>
  <ProgressStep variant="pending" aria-label="pending step">
    Third step
  </ProgressStep>
</ProgressStepper>;
```

### Basic with an issue

```js
import React from 'react';
import { ProgressStepper, ProgressStep } from '@patternfly/react-core';

<ProgressStepper>
  <ProgressStep variant="success" aria-label="completed step">
    First step
  </ProgressStep>
  <ProgressStep variant="success" aria-label="completed step">
    Second step
  </ProgressStep>
  <ProgressStep variant="warning" aria-label="warning step">
    Third step
  </ProgressStep>
  <ProgressStep variant="info" isCurrent aria-label="current step">
    Fourth step
  </ProgressStep>
  <ProgressStep variant="pending" aria-label="pending step">
    Fifth step
  </ProgressStep>
</ProgressStepper>;
```

### Basic with a failure

```js
import React from 'react';
import { ProgressStepper, ProgressStep } from '@patternfly/react-core';

<ProgressStepper>
  <ProgressStep variant="success" aria-label="completed step">
    First step
  </ProgressStep>
  <ProgressStep variant="success" aria-label="completed step">
    Second step
  </ProgressStep>
  <ProgressStep variant="success" aria-label="completed step">
    Third step
  </ProgressStep>
  <ProgressStep variant="danger" isCurrent aria-label="danger step">
    Fourth step
  </ProgressStep>
  <ProgressStep variant="pending" aria-label="pending step">
    Fifth step
  </ProgressStep>
</ProgressStepper>;
```

### Basic with Patternfly icons

```js
import React from 'react';
import { ProgressStepper, ProgressStep } from '@patternfly/react-core';
import InProgressIcon from '@patternfly/react-icons/dist/esm/icons/in-progress-icon';
import PendingIcon from '@patternfly/react-icons/dist/esm/icons/pending-icon';

<ProgressStepper>
  <ProgressStep variant="success" aria-label="completed step">
    Successful completion
  </ProgressStep>
  <ProgressStep isCurrent icon={<InProgressIcon />} aria-label="current step">
    In process
  </ProgressStep>
  <ProgressStep variant="pending" icon={<PendingIcon />} aria-label="pending step">
    Pending
  </ProgressStep>
</ProgressStepper>;
```
