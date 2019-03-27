---
title: "Stack"
cssPrefix: "pf-l-stack"
---
## Simple Stack Layout
```js
import React from 'react';
import { Stack, StackItem } from '@patternfly/react-core';

<Stack>
  <StackItem>Secondary content</StackItem>
  <StackItem isMain>Primary Content</StackItem>
  <StackItem>Secondary content</StackItem>
</Stack>
```

## Simple Stack Layout with Gutter
```js
import React from 'react';
import { Stack, StackItem } from '@patternfly/react-core';

<Stack gutter="md">
  <StackItem>Secondary content</StackItem>
  <StackItem isMain>Primary Content</StackItem>
  <StackItem>Secondary content</StackItem>
</Stack>
```