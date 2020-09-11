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
  <Skeleton width="25%" />
  <br />
  <Skeleton width="33%" />
  <br />
  <Skeleton width="50%" />
  <br />
  <Skeleton width="66%" />
  <br />
  <Skeleton width="75%" />
  <br />
  <Skeleton />
</React.Fragment>;
```

### Percentage heights

```js
import React from 'react';
import { Skeleton } from '@patternfly/react-core';

<div style={{ height: '400px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
  <Skeleton height="25%" width="15%" />
  <Skeleton height="33%" width="15%" />
  <Skeleton height="50%" width="15%" />
  <Skeleton height="66%" width="15%" />
  <Skeleton height="75%" width="15%" />
  <Skeleton height="100%" width="15%" />
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
  <Skeleton shape="circle" width="15%" />
  <br />
  Medium circle
  <Skeleton shape="circle" width="30%" />
  <br />
  Large circle
  <Skeleton shape="circle" width="50%" />
  <br />
  Small square
  <Skeleton shape="square" width="15%" />
  <br />
  Medium square
  <Skeleton shape="square" width="30%" />
  <br />
  Large square
  <Skeleton shape="square" width="50%" />
  <br />
  Small rectangle
  <div style={{ height: '200px' }}>
    <Skeleton height="50%" width="50%" />
  </div>
  <br />
  Medium rectangle
  <div style={{ height: '200px' }}>
    <Skeleton height="75%" width="75%" />
  </div>
  <br />
  Large rectangle
  <div style={{ height: '200px' }}>
    <Skeleton height="100%" />
  </div>
</React.Fragment>;
```
