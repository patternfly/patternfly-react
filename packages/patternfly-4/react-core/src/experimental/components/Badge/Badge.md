---
title: 'Badge'
cssPrefix: 'pf-c-badge'
typescript: true 
propComponents: ['Badge']
section: 'experimental'
---
import { Badge as ExperimentalBadge } from '@patternfly/react-core/dist/esm/experimental';

## Badge
```js
import React from 'react';
import { Badge as ExperimentalBadge } from '@patternfly/react-core';

ReadBadge = () => (
  <React.Fragment>
    <ExperimentalBadge isRead>7</ExperimentalBadge>
    <ExperimentalBadge isRead>24</ExperimentalBadge>
    <ExperimentalBadge isRead>240</ExperimentalBadge>
    <ExperimentalBadge isRead>999+</ExperimentalBadge>
  </React.Fragment>
);
```

