---
title: 'Split'
cssPrefix: 'pf-l-split'
section: 'layouts'
---

## Simple Split

import { Split, SplitItem } from '@patternfly/react-core';

```js
<Split>
  <SplitItem>content</SplitItem>
  <SplitItem isFilled>pf-m-fill</SplitItem>
  <SplitItem>content</SplitItem>
</Split>
```

## Split Layout with Gutter

```js
<Split gutter="md">
  <SplitItem>content</SplitItem>
  <SplitItem isFilled>pf-m-fill</SplitItem>
  <SplitItem>content</SplitItem>
</Split>
```
