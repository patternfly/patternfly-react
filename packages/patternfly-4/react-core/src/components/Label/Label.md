---
title: "Label"
cssPrefix: "pf-c-label"
---
## Simple Label
```js
import React from 'react';
import { Label } from '@patternfly/react-core';

SimpleLabel = () =>  (
  <React.Fragment>
    <Label>Default Label</Label> <Label isCompact>Compact Label</Label>
  </React.Fragment>
);
```