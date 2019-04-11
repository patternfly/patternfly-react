---
title: "Badge"
cssPrefix: "pf-c-badge"
---
## Badge (Read)

import { Badge } from '@patternfly/react-core';

```js
ReadBadge = () => (
  <React.Fragment>
    <Badge isRead>7</Badge>
    <Badge isRead>24</Badge>
    <Badge isRead>240</Badge>
    <Badge isRead>999+</Badge>
  </React.Fragment>
);
```

## Badge (Unread)
```js
UnreadBadge = () => (
  <React.Fragment>
    <Badge>7</Badge>
    <Badge>24</Badge>
    <Badge>240</Badge>
    <Badge>999+</Badge>
  </React.Fragment>
);
```