---
title: 'Progress'
cssPrefix: 'pf-c-progress'
---

import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

## Simple progress

```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

class SimpleProgress extends React.Component {
  render() {
    return <Progress value={33} title="Title" />;
  }
}
```

## Progress (Small)

```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

class SmallProgress extends React.Component {
  render() {
    return <Progress value={33} title="Title" size={ProgressSize.sm} />;
  }
}
```

## Progress (large)

```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

class LargeProgress extends React.Component {
  render() {
    return <Progress value={33} title="Title" size={ProgressSize.lg} />;
  }
}
```

## Progress (outside)

```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

class OutsideProgress extends React.Component {
  render() {
    return <Progress value={33} title="Title" measureLocation={ProgressMeasureLocation.outside} />;
  }
}
```

## Progress (inside)

```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

class InsideProgress extends React.Component {
  render() {
    return <Progress value={33} title="Title" measureLocation={ProgressMeasureLocation.inside} />;
  }
}
```

## Progress (success)

```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

class SuccessProgress extends React.Component {
  render() {
    return <Progress value={100} title="Title" variant={ProgressVariant.success} />;
  }
}
```

## Progress (failure)

```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

class FailureProgress extends React.Component {
  render() {
    return <Progress value={33} title="Title" variant={ProgressVariant.danger} />;
  }
}
```

## Progress (inside success)

```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

class InsideSuccessProgress extends React.Component {
  render() {
    return (
      <Progress
        value={100}
        title="Title"
        measureLocation={ProgressMeasureLocation.inside}
        variant={ProgressVariant.success}
      />
    );
  }
}
```

## Progress (outside failure)

```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

class OutsideFailureProgress extends React.Component {
  render() {
    return (
      <Progress
        value={33}
        title="Title"
        measureLocation={ProgressMeasureLocation.outside}
        variant={ProgressVariant.danger}
      />
    );
  }
}
```

## Progress (single line)

```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

class SingleLineProgress extends React.Component {
  render() {
    return <Progress value={33} measureLocation={ProgressMeasureLocation.outside} />;
  }
}
```

## Progress (no measure)

```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

class NoMeasureProgress extends React.Component {
  render() {
    return <Progress value={33} title="Title" measureLocation={ProgressMeasureLocation.none} />;
  }
}
```

## Progress (failure + no measure)

```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

class FailureNoMeasureProgress extends React.Component {
  render() {
    return (
      <Progress
        value={33}
        title="Title"
        measureLocation={ProgressMeasureLocation.none}
        variant={ProgressVariant.danger}
      />
    );
  }
}
```

## Progress (finite step)

```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

class FiniteStepProgress extends React.Component {
  render() {
    return (
      <Progress
        value={2}
        min={0}
        max={5}
        title="Title"
        measureLocation={ProgressMeasureLocation.top}
        label="2 of 5"
        valueText="2 of 5"
      />
    );
  }
}
```

## Progress (step instruction)

```js
import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

class StepInstructionProgress extends React.Component {
  render() {
    return (
      <Progress
        value={2}
        title="Title"
        value={2}
        min={0}
        max={5}
        label="Step 2: Copying files"
        valueText="Step 2: Copying files"
      />
    );
  }
}
```
