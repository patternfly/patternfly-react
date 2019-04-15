---
title: 'Stack'
cssPrefix: 'pf-l-stack'
section: 'layouts'
---

import { Stack, StackItem } from '@patternfly/react-core';

## Simple Stack Layout
```js
import React from 'react';
import { Stack, StackItem } from '@patternfly/react-core';

<Stack>
  <StackItem>content</StackItem>
  <StackItem isFilled>pf-m-fill</StackItem>
  <StackItem>content</StackItem>
</Stack>
```

## Simple Stack Layout with Gutter
```js
import React from 'react';
import { Stack, StackItem } from '@patternfly/react-core';

<Stack gutter="md">
  <StackItem>content</StackItem>
  <StackItem isFilled>pf-m-fill</StackItem>
  <StackItem>content</StackItem>
</Stack>
```
