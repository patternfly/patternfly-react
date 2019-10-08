---
title: 'Progress'
section: components
cssPrefix: 'pf-c-progress'
propComponents: ['Progress']
typescript: true
---

import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

```js title=Simple-progress
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={33} title="Title" />
```

```js title=Progress-(Small)
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={33} title="Title" size={ProgressSize.sm} />
```

```js title=Progress-(large)
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={33} title="Title" size={ProgressSize.lg} />
```

```js title=Progress-(outside)
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={33} title="Title" measureLocation={ProgressMeasureLocation.outside} />
```

```js title=Progress-(inside)
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={33} title="Title" measureLocation={ProgressMeasureLocation.inside} />
```

```js title=Progress-(success)
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={100} title="Title" variant={ProgressVariant.success} />
```

```js title=Progress-(failure)
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={33} title="Title" variant={ProgressVariant.danger} />
```

```js title=Progress-(inside-success)
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress
  value={100}
  title="Title"
  measureLocation={ProgressMeasureLocation.inside}
  variant={ProgressVariant.success}
/>
```

```js title=Progress-(outside-failure)
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress
  value={33}
  title="Title"
  measureLocation={ProgressMeasureLocation.outside}
  variant={ProgressVariant.danger}
/>
```

```js title=Progress-(single-line)
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={33} measureLocation={ProgressMeasureLocation.outside} />
```

```js title=Progress-(no-measure)
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={33} title="Title" measureLocation={ProgressMeasureLocation.none} />
```

```js title=Progress-(failure-+-no-measure)
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress
  value={33}
  title="Title"
  measureLocation={ProgressMeasureLocation.none}
  variant={ProgressVariant.danger}
/>
```


```js title=Progress-(finite-step)
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={2} min={0} max={5} title="Title" measureLocation={ProgressMeasureLocation.top} label="2 of 5" valueText="2 of 5"/>
```

```js title=Progress-(step-instruction)
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={2} title="Title" min={0} max={5} label="Step 2: Copying files" valueText="Step 2: Copying files" />
```
