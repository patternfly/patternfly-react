---
title: 'Stack'
cssPrefix: 'pf-l-stack'
section: 'layouts'
propComponents: ['Stack', 'StackItem']
typescript: true 
---

import { Stack, StackItem } from '@patternfly/react-core';
import './stack.scss';

## Examples
```js title=Simple-stack-layout
import React from 'react';
import { Stack, StackItem } from '@patternfly/react-core';

<Stack>
  <StackItem>content</StackItem>
  <StackItem isFilled>pf-m-fill</StackItem>
  <StackItem>content</StackItem>
</Stack>
```

```js title=Simple-stack-layout-with-gutter
import React from 'react';
import { Stack, StackItem } from '@patternfly/react-core';

<Stack gutter="md">
  <StackItem>content</StackItem>
  <StackItem isFilled>pf-m-fill</StackItem>
  <StackItem>content</StackItem>
</Stack>
```
