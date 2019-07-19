---
title: 'Badge'
cssPrefix: 'pf-c-badge'
typescript: true 
propComponents: ['Badge']
section: 'experimental'
---
import { Badge as ExperimentalBadge } from '@patternfly/react-core/dist/esm/experimental';
import { Alert } from '@patternfly/react-core';

<Alert variant="danger" title="Warning">
  Please don't use this component, it's only an example of what an experimental component could be
  and likely going away in our next release.
  Use our <a href="../../components/badge">actual Badge instead.</a>
</Alert>
<br />

## Badge
```js
import React from 'react';
import { Badge as ExperimentalBadge } from '@patternfly/react-core/dist/esm/experimental';

ReadBadge = () => (
  <React.Fragment>
    <ExperimentalBadge isRead>7</ExperimentalBadge>
    <ExperimentalBadge isRead>24</ExperimentalBadge>
    <ExperimentalBadge isRead>240</ExperimentalBadge>
    <ExperimentalBadge isRead>999+</ExperimentalBadge>
  </React.Fragment>
);
```

