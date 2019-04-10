---
title: 'Split'
cssPrefix: 'pf-l-split'
---

## Simple Split

```js
import React from 'react';
import { Split, SplitItem } from '@patternfly/react-core';

<Split>
  <SplitItem>content</SplitItem>
  <SplitItem isFilled>pf-m-fill</SplitItem>
  <SplitItem>content</SplitItem>
</Split>;
```

## Split Layout with Gutter

```js
import React from 'react';
import { Split, SplitItem } from '@patternfly/react-core';

<Split gutter="md">
  <SplitItem>content</SplitItem>
  <SplitItem isFilled>pf-m-fill</SplitItem>
  <SplitItem>content</SplitItem>
</Split>;
```
