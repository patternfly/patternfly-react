---
title: 'Label'
section: components
cssPrefix: 'pf-c-label'
typescript: true
propComponents: ['Label']
---

import { Label } from '@patternfly/react-core';

```js title=Simple-label
import React from 'react';
import { Label } from '@patternfly/react-core';

SimpleLabel = () => (
  <React.Fragment>
    <Label>Default Label</Label> <Label isCompact>Compact Label</Label>
  </React.Fragment>
);
```
