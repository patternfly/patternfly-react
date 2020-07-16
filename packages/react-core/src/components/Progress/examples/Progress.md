---
id: Progress
section: components
cssPrefix: pf-c-progress
propComponents: ['Progress']
---

import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

## Examples
### Simple
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

<Progress value={33} measureLocation={ProgressMeasureLocation.outside} />
```

### Without measure
```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={33} title="Title" measureLocation={ProgressMeasureLocation.none} />
```

### Failure without measure)
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
