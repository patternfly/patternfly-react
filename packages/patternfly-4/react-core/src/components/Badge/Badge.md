---
title: 'Badge'
cssPrefix: 'pf-c-badge'
typescript: true 
propComponents: ['Badge']
---
import { Badge } from '@patternfly/react-core';

## Badge (read)
```js
import React from 'react';
import { Badge } from '@patternfly/react-core';

ReadBadge = () => (
  <React.Fragment>
    <Badge isRead>7</Badge>
    {' '}
    <Badge isRead>24</Badge>
    {' '}
    <Badge isRead>240</Badge>
    {' '}
    <Badge isRead>999+</Badge>
  </React.Fragment>
);
```

## Badge (unread)
```js
import React from 'react';
import { Badge } from '@patternfly/react-core';

UnreadBadge = () => (
  <React.Fragment>
    <Badge>7</Badge>
    {' '}
    <Badge>24</Badge>
    {' '}
    <Badge>240</Badge>
    {' '}
    <Badge>999+</Badge>
  </React.Fragment>
);
```
