---
id: Badge
section: components
cssPrefix: pf-c-badge
propComponents: ['Badge']
---

## Examples
### Read
```js
import React from 'react';
import { Badge } from '@patternfly/react-core';

<React.Fragment>
  <Badge key={1} isRead>7</Badge>
  {' '}
  <Badge key={2} isRead>24</Badge>
  {' '}
  <Badge key={3} isRead>240</Badge>
  {' '}
  <Badge key={4} isRead>999+</Badge>
</React.Fragment>
```

### Unread
```js
import React from 'react';
import { Badge } from '@patternfly/react-core';

<React.Fragment>
  <Badge key={1}>7</Badge>
  {' '}
  <Badge key={2}>24</Badge>
  {' '}
  <Badge key={3}>240</Badge>
  {' '}
  <Badge key={4}>999+</Badge>
</React.Fragment>
```
