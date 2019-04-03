---
title: "Progress"
cssPrefix: "pf-c-progress"
---
## Simple Progress
```js
import React from 'react';
import { Progress } from '@patternfly/react-core';

<Progress value={33} title="Descriptive text here" />
```

## Progress (Labeled)
```js
import React from 'react';
import { Progress, ProgressMeasureLocation } from '@patternfly/react-core';

<Progress
  value={33}
  title="Descriptive text here"
  measureLocation={ProgressMeasureLocation.top}
  label="Some label"
/>
```

## Progress (Small)
```js
import React from 'react';
import { Progress, ProgressSize } from '@patternfly/react-core';


<Progress value={33} title="Descriptive text here" size={ProgressSize.sm} />
```

## Progress (Large)
```js
import React from 'react';
import { Progress, ProgressSize } from '@patternfly/react-core';

<Progress value={33} title="Descriptive text here" size={ProgressSize.lg} />
```

## Progress (Outside)
```js
import React from 'react';
import { Progress, ProgressMeasureLocation } from '@patternfly/react-core';

<Progress value={33} title="Descriptive text here" measureLocation={ProgressMeasureLocation.outside} />
```

## Progress (Inside)
```js
import React from 'react';
import { Progress, ProgressMeasureLocation } from '@patternfly/react-core';

<Progress value={33} title="Descriptive text here" measureLocation={ProgressMeasureLocation.inside} />
```

## Progress (Success)
```js
import React from 'react';
import { Progress, ProgressVariant } from '@patternfly/react-core';

<Progress value={33} title="Success" variant={ProgressVariant.success} />
```

## Progress (Failure)
```js
import React from 'react';
import { Progress, ProgressVariant } from '@patternfly/react-core';

<Progress value={33} title="Failure due to an error" variant={ProgressVariant.danger} />
```

## Progress (Inside Success)
```js
import React from 'react';
import { Progress, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress
  value={33}
  title="Success"
  measureLocation={ProgressMeasureLocation.inside}
  variant={ProgressVariant.success}
/>
```

## Progress (Outside Failure)
```js
import React from 'react';
import { Progress, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress
  value={33}
  title="Failure due to an error"
  measureLocation={ProgressMeasureLocation.outside}
  variant={ProgressVariant.danger}
/>
```

## Progress (Single Line)
```js
import React from 'react';
import { Progress, ProgressMeasureLocation } from '@patternfly/react-core';

<Progress value={33} measureLocation={ProgressMeasureLocation.outside} />
```

## Progress (No Measure)
```js
import React from 'react';
import { Progress, ProgressMeasureLocation } from '@patternfly/react-core';

<Progress value={33} title="Descriptive text here" measureLocation={ProgressMeasureLocation.none} />
```

## Progress (Failure + No Measure)
```js
import React from 'react';
import { Progress, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

<Progress
  value={33}
  title="Descriptive text here"
  measureLocation={ProgressMeasureLocation.none}
  variant={ProgressVariant.danger}
/>
```

## Progress (Dynamic Description)
```js
import React from 'react';
import { Progress } from '@patternfly/react-core';

<Progress value={33} title="Descriptive text here" valueText="Descriptive text here" />
```