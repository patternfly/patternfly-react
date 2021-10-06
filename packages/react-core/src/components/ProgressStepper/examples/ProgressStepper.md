---
id: Progress stepper
section: components
cssPrefix: pf-c-progress-stepper
propComponents: ['ProgressStepper', 'ProgressStep']
beta: true
---

import InProgressIcon from '@patternfly/react-icons/dist/esm/icons/in-progress-icon';
import PendingIcon from '@patternfly/react-icons/dist/esm/icons/pending-icon';

## Examples

Progress steppers have default icons associated with the `variant` property, and may be overriden and customized using the `icon` property.

### Basic

```js
import React from 'react';
import { ProgressStepper, ProgressStep } from '@patternfly/react-core';

<ProgressStepper>
  <ProgressStep
    variant="success"
    id="basic-step1"
    titleId="basic-step1-title"
    aria-label="completed step, step with success"
  >
    First step
  </ProgressStep>
  <ProgressStep
    variant="info"
    isCurrent
    id="basic-step2"
    titleId="basic-step2-title"
    aria-label="current step, step with info"
  >
    Second step
  </ProgressStep>
  <ProgressStep variant="pending" id="basic-step3" titleId="basic-step3-title" aria-label="pending step">
    Third step
  </ProgressStep>
</ProgressStepper>;
```

### Basic with descriptions

```js
import React from 'react';
import { ProgressStepper, ProgressStep } from '@patternfly/react-core';

<ProgressStepper>
  <ProgressStep
    variant="success"
    description="This is the first thing to happen"
    id="basic-desc-step1"
    titleId="basic-desc-step1-title"
    aria-label="completed step, step with success"
  >
    First step
  </ProgressStep>
  <ProgressStep
    variant="info"
    isCurrent
    description="This is the second thing to happen"
    id="basic-desc-step2"
    titleId="basic-desc-step2-title"
    aria-label="current step, step with info"
  >
    Second step
  </ProgressStep>
  <ProgressStep
    variant="pending"
    description="This is the last thing to happen"
    id="basic-desc-step3"
    titleId="basic-desc-step3-title"
    aria-label="pending step"
  >
    Third step
  </ProgressStep>
</ProgressStepper>;
```

### Center aligned with descriptions

```js
import React from 'react';
import { ProgressStepper, ProgressStep } from '@patternfly/react-core';

<ProgressStepper isCenterAligned>
  <ProgressStep
    variant="success"
    description="This is the first thing to happen"
    id="center-desc-step1"
    titleId="center-desc-step1-title"
    aria-label="completed step, step with success"
  >
    First step
  </ProgressStep>
  <ProgressStep
    variant="info"
    isCurrent
    description="This is the second thing to happen"
    id="center-desc-step2"
    titleId="center-desc-step2-title"
    aria-label="current step, step with info"
  >
    Second step
  </ProgressStep>
  <ProgressStep
    variant="pending"
    description="This is the last thing to happen"
    id="center-desc-step3"
    titleId="center-desc-step3-title"
    aria-label="pending step"
  >
    Third step
  </ProgressStep>
</ProgressStepper>;
```

### Vertical with descriptions

```js
import React from 'react';
import { ProgressStepper, ProgressStep } from '@patternfly/react-core';

<ProgressStepper isVertical>
  <ProgressStep
    variant="success"
    description="This is the first thing to happen"
    id="vertical-desc-step1"
    titleId="vertical-desc-step1-title"
    aria-label="completed step, step with success"
  >
    First step
  </ProgressStep>
  <ProgressStep
    variant="info"
    isCurrent
    description="This is the second thing to happen"
    id="vertical-desc-step2"
    titleId="vertical-desc-step2-title"
    aria-label="current step, step with info"
  >
    Second step
  </ProgressStep>
  <ProgressStep
    variant="pending"
    description="This is the last thing to happen"
    id="vertical-desc-step3"
    titleId="vertical-desc-step3-title"
    aria-label="pending step"
  >
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
  <ProgressStep
    variant="success"
    id="compact-step1"
    titleId="compact-step1-title"
    aria-label="completed step, step with success"
  >
    First step
  </ProgressStep>
  <ProgressStep
    variant="info"
    isCurrent
    id="compact-step2"
    titleId="compact-step2-title"
    aria-label="current step, step with info"
  >
    Second step
  </ProgressStep>
  <ProgressStep variant="pending" id="compact-step3" titleId="compact-step3-title" aria-label="pending step">
    Third step
  </ProgressStep>
</ProgressStepper>;
```

### Basic with an issue

```js
import React from 'react';
import { ProgressStepper, ProgressStep } from '@patternfly/react-core';

<ProgressStepper>
  <ProgressStep
    variant="success"
    id="basic-with-issue-step1"
    titleId="basic-with-issue-step1-title"
    aria-label="completed step, step with success"
  >
    First step
  </ProgressStep>
  <ProgressStep
    variant="success"
    id="basic-with-issue-step2"
    titleId="basic-with-issue-step2-title"
    aria-label="completed step, step with success"
  >
    Second step
  </ProgressStep>
  <ProgressStep
    variant="warning"
    id="basic-with-issue-step3"
    titleId="basic-with-issue-step3-title"
    aria-label="completed step, step with warning"
  >
    Third step
  </ProgressStep>
  <ProgressStep
    variant="info"
    isCurrent
    id="basic-with-issue-step4"
    titleId="basic-with-issue-step4-title"
    aria-label="current step, step with info"
  >
    Fourth step
  </ProgressStep>
  <ProgressStep
    variant="pending"
    id="basic-with-issue-step5"
    titleId="basic-with-issue-step5-title"
    aria-label="pending step"
  >
    Fifth step
  </ProgressStep>
</ProgressStepper>;
```

### Basic with a failure

```js
import React from 'react';
import { ProgressStepper, ProgressStep } from '@patternfly/react-core';

<ProgressStepper>
  <ProgressStep
    variant="success"
    id="basic-with-failure-step1"
    titleId="basic-with-failure-step1-title"
    aria-label="completed step, step with success"
  >
    First step
  </ProgressStep>
  <ProgressStep
    variant="success"
    id="basic-with-failure-step2"
    titleId="basic-with-failure-step2-title"
    aria-label="completed step, step with success"
  >
    Second step
  </ProgressStep>
  <ProgressStep
    variant="success"
    id="basic-with-failure-step3"
    titleId="basic-with-failure-step3-title"
    aria-label="completed step, step with success"
  >
    Third step
  </ProgressStep>
  <ProgressStep
    variant="danger"
    isCurrent
    id="basic-with-failure-step4"
    titleId="basic-with-failure-step4-title"
    aria-label="current step, step with danger"
  >
    Fourth step
  </ProgressStep>
  <ProgressStep
    variant="pending"
    id="basic-with-failure-step5"
    titleId="basic-with-failure-step5-title"
    aria-label="pending step"
  >
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
  <ProgressStep
    variant="success"
    id="custom-step1"
    titleId="custom-step1-title"
    aria-label="completed step, step with success"
  >
    Successful completion
  </ProgressStep>
  <ProgressStep
    isCurrent
    icon={<InProgressIcon />}
    id="custom-step2"
    titleId="custom-step2-title"
    aria-label="current step"
  >
    In process
  </ProgressStep>
  <ProgressStep
    variant="pending"
    icon={<PendingIcon />}
    id="custom-step3"
    titleId="custom-step3-title"
    aria-label="pending step"
  >
    Pending
  </ProgressStep>
</ProgressStepper>;
```
