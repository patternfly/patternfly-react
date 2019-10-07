---
title: 'Split'
cssPrefix: 'pf-l-split'
section: 'layouts'
propComponents: ['Split', 'SplitItem']
typescript: true
---

import { Split, SplitItem } from '@patternfly/react-core';
import './split.scss';

```js title=Simple-split
import React from 'react';
import { Split, SplitItem } from '@patternfly/react-core';

<Split>
  <SplitItem>content</SplitItem>
  <SplitItem isFilled>pf-m-fill</SplitItem>
  <SplitItem>content</SplitItem>
</Split>
```

```js title=Split-layout-with-gutter
import React from 'react';
import { Split, SplitItem } from '@patternfly/react-core';

<Split gutter="md">
  <SplitItem>content</SplitItem>
  <SplitItem isFilled>pf-m-fill</SplitItem>
  <SplitItem>content</SplitItem>
</Split>
```
