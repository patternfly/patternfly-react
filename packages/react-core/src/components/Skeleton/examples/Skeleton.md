---
id: Skeleton
section: components
cssPrefix: pf-c-skeleton
propComponents: ['Skeleton']
beta: true
---

## Examples

### Default

```js
import React from 'react';
import { Skeleton } from '@patternfly/react-core';

<Skeleton />;
```

### Percentage widths

```js
import React from 'react';
import { Skeleton } from '@patternfly/react-core';

<React.Fragment>
  <Skeleton width="25" />
  <br />
  <Skeleton width="33" />
  <br />
  <Skeleton width="50" />
  <br />
  <Skeleton width="66" />
  <br />
  <Skeleton width="75" />
  <br />
  <Skeleton />
</React.Fragment>;
```

### Percentage heights

```js
import React from 'react';
import { Skeleton } from '@patternfly/react-core';

<div style={{ height: '400px' }}>
  <Skeleton height="25" style={{ width: '15%', display: 'inline-block', marginRight: '4px' }} />
  <Skeleton height="33" style={{ width: '15%', display: 'inline-block', marginRight: '4px' }} />
  <Skeleton height="50" style={{ width: '15%', display: 'inline-block', marginRight: '4px' }} />
  <Skeleton height="66" style={{ width: '15%', display: 'inline-block', marginRight: '4px' }} />
  <Skeleton height="75" style={{ width: '15%', display: 'inline-block', marginRight: '4px' }} />
  <Skeleton height="100" style={{ width: '15%', display: 'inline-block', marginRight: '4px' }} />
</div>;
```

### Text modifiers

```js
import React from 'react';
import { Skeleton } from '@patternfly/react-core';

<React.Fragment>
  --pf-global--FontSize--4xl
  <Skeleton fontSize="4xl" />
  <br />
  --pf-global--FontSize--3xl
  <Skeleton fontSize="3xl" />
  <br />
  --pf-global--FontSize--2xl
  <Skeleton fontSize="2xl" />
  <br />
  --pf-global--FontSize--xl
  <Skeleton fontSize="xl" />
  <br />
  --pf-global--FontSize--lg
  <Skeleton fontSize="lg" />
  <br />
  --pf-global--FontSize--md
  <Skeleton fontSize="md" />
  <br />
  --pf-global--FontSize--sm
  <Skeleton fontSize="sm" />
</React.Fragment>;
```

### Shapes

```js
import React from 'react';
import { Skeleton } from '@patternfly/react-core';

<React.Fragment>
  Small circle
  <Skeleton shape="circle" shapeWidth="sm" />
  <br />
  Medium circle
  <Skeleton shape="circle" shapeWidth="md" />
  <br />
  Large circle
  <Skeleton shape="circle" shapeWidth="lg" />
  <br />
  Small square
  <Skeleton shape="square" shapeWidth="sm" />
  <br />
  Medium square
  <Skeleton shape="square" shapeWidth="md" />
  <br />
  Large square
  <Skeleton shape="square" shapeWidth="lg" />
  <br />
  Small rectangle
  <Skeleton shapeHeight="sm" shapeWidth="md" />
  <br />
  Medium rectangle
  <Skeleton shapeHeight="md" shapeWidth="lg" />
  <br />
  Large rectangle
  <Skeleton shapeHeight="lg" />
</React.Fragment>;
```
