---
title: 'Split'
cssPrefix: 'pf-l-split'
section: 'layouts'
propComponents: ['Split', 'SplitItem']
typescript: true
---

import { Split, SplitItem } from '@patternfly/react-core';
import './split.scss';

## Simple split
```js
import React from 'react';
import { Split, SplitItem } from '@patternfly/react-core';

<Split>
  <SplitItem>content</SplitItem>
  <SplitItem isFilled>pf-m-fill</SplitItem>
  <SplitItem>content</SplitItem>
</Split>
```

## Split layout with gutter
```js
import React from 'react';
import { Split, SplitItem } from '@patternfly/react-core';

<Split gutter="md">
  <SplitItem>content</SplitItem>
  <SplitItem isFilled>pf-m-fill</SplitItem>
  <SplitItem>content</SplitItem>
</Split>
```
