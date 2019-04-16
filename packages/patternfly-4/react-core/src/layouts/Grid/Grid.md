---
title: 'Grid'
cssPrefix: 'pf-l-grid'
section: 'layouts'
---

## Simple Grid

import { Grid, GridItem, Button } from '@patternfly/react-core';
import ItemControl from './examples/ItemControl';

```js
import React from 'react';
import { Grid, GridItem, Button } from '@patternfly/react-core';
import ItemControl from './examples/ItemControl';

<Grid>
  <GridItem span={8}>span = 8</GridItem>
  <GridItem span={4} rowSpan={2}>
    span = 4, rowSpan = 2
  </GridItem>
  <GridItem span={2} rowSpan={3}>
    span = 2, rowSpan = 3
  </GridItem>
  <GridItem span={2}>span = 2</GridItem>
  <GridItem span={4}>span = 4</GridItem>
  <GridItem span={2}>span = 2</GridItem>
  <GridItem span={2}>span = 2</GridItem>
  <GridItem span={2}>span = 2</GridItem>
  <GridItem span={4}>span = 4</GridItem>
  <GridItem span={2}>span = 2</GridItem>
  <GridItem span={4}>span = 4</GridItem>
  <GridItem span={4}>span = 4</GridItem>
</Grid>
```

## Grid with gutters
```js
import React from 'react';
import { Grid, GridItem, Button } from '@patternfly/react-core';
import ItemControl from './examples/ItemControl';

<Grid gutter="md">
  <GridItem span={8}>span = 8</GridItem>
  <GridItem span={4} rowSpan={2}>
    span = 4, rowSpan = 2
  </GridItem>
  <GridItem span={2} rowSpan={3}>
    span = 2, rowSpan = 3
  </GridItem>
  <GridItem span={2}>span = 2</GridItem>
  <GridItem span={4}>span = 4</GridItem>
  <GridItem span={2}>span = 2</GridItem>
  <GridItem span={2}>span = 2</GridItem>
  <GridItem span={2}>span = 2</GridItem>
  <GridItem span={4}>span = 4</GridItem>
  <GridItem span={2}>span = 2</GridItem>
  <GridItem span={4}>span = 4</GridItem>
  <GridItem span={4}>span = 4</GridItem>
</Grid>
```

## Grid With Overrides
```js
import React from 'react';
import { Grid, GridItem, Button } from '@patternfly/react-core';
import ItemControl from './examples/ItemControl';

<Grid sm={6} md={4} lg={3}>
  <GridItem pan={3} rowSpan={2}>
    span = 3 rowSpan= 2
  </GridItem>
  <GridItem>Grid Item</GridItem>
  <GridItem>Grid Item</GridItem>
  <GridItem>Grid Item</GridItem>
  <GridItem>Grid Item</GridItem>
  <GridItem>Grid Item</GridItem>
  <GridItem>Grid Item</GridItem>
  <GridItem>Grid Item</GridItem>
  <GridItem>Grid Item</GridItem>
  <GridItem>Grid Item</GridItem>
  <GridItem>Grid Item</GridItem>
  <GridItem>Grid Item</GridItem>
</Grid>
```

## Grid Playground

import GridPlayground from './examples/GridPlayground';

<GridPlayground />
