---
title: 'Split'
cssPrefix: 'pf-l-split'
section: 'layouts'
propComponents: ['Split', 'SplitItem']
typescript: true
---

import { Split, SplitItem } from '@patternfly/react-core';
import './split.scss';

## Examples
```js title=Basic
import React from 'react';
import { Split, SplitItem } from '@patternfly/react-core';

<Split>
  <SplitItem>content</SplitItem>
  <SplitItem isFilled>pf-m-fill</SplitItem>
  <SplitItem>content</SplitItem>
</Split>
```

```js title=With-gutter
import React from 'react';
import { Split, SplitItem } from '@patternfly/react-core';

<Split gutter="md">
  <SplitItem>content</SplitItem>
  <SplitItem isFilled>pf-m-fill</SplitItem>
  <SplitItem>content</SplitItem>
</Split>
```
