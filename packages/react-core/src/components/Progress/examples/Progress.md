---
id: Progress
section: components
cssPrefix: pf-c-progress
propComponents: ['Progress']
---

## Examples
### Basic
```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={33} title="Title" />
```

### Small
```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={33} title="Title" size={ProgressSize.sm} />
```

### Large
```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={33} title="Title" size={ProgressSize.lg} />
```

### Outside
```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={33} title="Title" measureLocation={ProgressMeasureLocation.outside} />
```

### Inside
```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={33} title="Title" measureLocation={ProgressMeasureLocation.inside} />
```

### Success
```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={100} title="Title" variant={ProgressVariant.success} />
```

### Failure
```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={33} title="Title" variant={ProgressVariant.danger} />
```

### Warning
```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={90} title="Title" variant={ProgressVariant.warning} />
```

### Inside success
```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress
  value={100}
  title="Title"
  measureLocation={ProgressMeasureLocation.inside}
  variant={ProgressVariant.success}
/>
```

### Outside failure
```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress
  value={33}
  title="Title"
  measureLocation={ProgressMeasureLocation.outside}
  variant={ProgressVariant.danger}
/>
```

### Single line
```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={33} measureLocation={ProgressMeasureLocation.outside} aria-label="Title"/>
```

### Without measure
```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={33} title="Title" measureLocation={ProgressMeasureLocation.none} />
```

### Failure without measure
```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress
  value={33}
  title="Title"
  measureLocation={ProgressMeasureLocation.none}
  variant={ProgressVariant.danger}
/>
```


### Finite step
```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={2} min={0} max={5} title="Title" measureLocation={ProgressMeasureLocation.top} label="2 of 5" valueText="2 of 5"/>
```

### Progress (step instruction)
```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={2} title="Title" min={0} max={5} label="Step 2: Copying files" valueText="Step 2: Copying files" />
```

### Truncate title
```js
import React from 'react';
import { Progress } from '@patternfly/react-core';

<Progress value={33} title="Very very very very very very very very very very very long title which should be truncated if it does not fit onto one line above the progress bar" isTitleTruncated />
```

### Title outside of progress bar
```js
import React from 'react';
import {
    DescriptionList, DescriptionListGroup, DescriptionListTerm, DescriptionListDescription,
    Progress, ProgressMeasureLocation, ProgressVariant,
} from '@patternfly/react-core';

<DescriptionList>
  <DescriptionListGroup>
    <DescriptionListTerm id="progress-label">
        Title outside of progress bar
    </DescriptionListTerm>
    <DescriptionListDescription>
      <Progress value={33} measureLocation={ProgressMeasureLocation.outside} aria-labelledby="progress-label"/>
    </DescriptionListDescription>
  </DescriptionListGroup>
</DescriptionList>
```
