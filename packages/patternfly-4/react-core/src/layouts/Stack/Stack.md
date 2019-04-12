---
title: 'Stack'
cssPrefix: 'pf-l-stack'
section: 'layouts'
---

## Simple Stack Layout

import { Stack, StackItem } from '@patternfly/react-core';

```js
<Stack>
  <StackItem>content</StackItem>
  <StackItem isFilled>pf-m-fill</StackItem>
  <StackItem>content</StackItem>
</Stack>
```

## Simple Stack Layout with Gutter

```js
<Stack gutter="md">
  <StackItem>content</StackItem>
  <StackItem isFilled>pf-m-fill</StackItem>
  <StackItem>content</StackItem>
</Stack>
```
