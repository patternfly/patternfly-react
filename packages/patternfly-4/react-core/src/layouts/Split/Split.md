---
title: "Split"
cssPrefix: "pf-l-split"
---
## Simple Split
```js
import React from 'react';
import { Split, SplitItem } from '@patternfly/react-core';

<Split>
  <SplitItem>Secondary content</SplitItem>
  <SplitItem isMain>Primary Content</SplitItem>
  <SplitItem>Secondary content</SplitItem>
</Split>
```

## Split Layout with Gutter
```js
import React from 'react';
import { Split, SplitItem } from '@patternfly/react-core';

<Split gutter="md">
  <SplitItem>Secondary content</SplitItem>
  <SplitItem isMain>Primary Content</SplitItem>
  <SplitItem>Secondary content</SplitItem>
</Split>
```