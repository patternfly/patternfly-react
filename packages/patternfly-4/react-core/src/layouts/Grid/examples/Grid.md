---
title: 'Grid'
cssPrefix: 'pf-l-grid'
section: 'layouts'
propComponents: ['Grid', 'GridItem']
---

## Simple grid

import { Grid, GridItem, Button } from '@patternfly/react-core';
import ItemControl from './ItemControl';
import './grid.scss';

```js
import React from 'react';
import { Grid, GridItem, Button } from '@patternfly/react-core';
import ItemControl from './ItemControl';

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
import ItemControl from './ItemControl';

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

## Grid with overrides
```js
import React from 'react';
import { Grid, GridItem, Button } from '@patternfly/react-core';
import ItemControl from './ItemControl';

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

## Grid playground

import GridPlayground from './GridPlayground';

<GridPlayground />
