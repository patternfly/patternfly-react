---
title: 'Progress'
cssPrefix: 'pf-c-progress'
---

import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

## Simple progress
```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={33} title="Descriptive text here" />
```

## Progress (labeled)
```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={33} title="Descriptive text here" measureLocation={ProgressMeasureLocation.top} label="Some label" />
```

## Progress (small)
```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={33} title="Descriptive text here" size={ProgressSize.sm} />
```

## Progress (large)
```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={33} title="Descriptive text here" size={ProgressSize.lg} />
```

## Progress (outside)
```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={33} title="Descriptive text here" measureLocation={ProgressMeasureLocation.outside} />
```

## Progress (inside)
```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={33} title="Descriptive text here" measureLocation={ProgressMeasureLocation.inside} />
```

## Progress (success)
```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={33} title="Success" variant={ProgressVariant.success} />
```

## Progress (failure)
```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={33} title="Failure due to an error" variant={ProgressVariant.danger} />
```

## Progress (inside success)
```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress
  value={33}
  title="Success"
  measureLocation={ProgressMeasureLocation.inside}
  variant={ProgressVariant.success}
/>
```

## Progress (outside failure)
```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress
  value={33}
  title="Failure due to an error"
  measureLocation={ProgressMeasureLocation.outside}
  variant={ProgressVariant.danger}
/>
```

## Progress (single line)
```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={33} measureLocation={ProgressMeasureLocation.outside} />
```

## Progress (no measure)
```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={33} title="Descriptive text here" measureLocation={ProgressMeasureLocation.none} />
```

## Progress (failure + no measure)
```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress
  value={33}
  title="Descriptive text here"
  measureLocation={ProgressMeasureLocation.none}
  variant={ProgressVariant.danger}
/>
```

## Progress (dynamic description)
```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress value={33} title="Descriptive text here" valueText="Descriptive text here" />
```
