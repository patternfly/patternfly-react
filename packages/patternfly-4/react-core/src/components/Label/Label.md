---
title: 'Label'
cssPrefix: 'pf-c-label'
typescript: true
propComponents: ['Label']
---

import { Label } from '@patternfly/react-core';

## Simple label
```js
import React from 'react';
import { Label } from '@patternfly/react-core';

SimpleLabel = () => (
  <React.Fragment>
    <Label>Default Label</Label> <Label isCompact>Compact Label</Label>
  </React.Fragment>
);
```
