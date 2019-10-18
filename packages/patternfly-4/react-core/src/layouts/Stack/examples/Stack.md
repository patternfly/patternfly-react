---
title: 'Stack'
cssPrefix: 'pf-l-stack'
section: 'layouts'
propComponents: ['Stack', 'StackItem']
typescript: true 
---

import { Stack, StackItem } from '@patternfly/react-core';
import './stack.css';

## Examples
```js title=Basic
import React from 'react';
import { Stack, StackItem } from '@patternfly/react-core';

<Stack>
  <StackItem>content</StackItem>
  <StackItem isFilled>pf-m-fill</StackItem>
  <StackItem>content</StackItem>
</Stack>
```

```js title=With-gutter
import React from 'react';
import { Stack, StackItem } from '@patternfly/react-core';

<Stack gutter="md">
  <StackItem>content</StackItem>
  <StackItem isFilled>pf-m-fill</StackItem>
  <StackItem>content</StackItem>
</Stack>
```
