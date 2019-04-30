---
title: 'Stack chart'
section: 'charts'
---

### Known Problem

All of the `<svg>` elements on this page need to have `overflow: 'visible'` set on them to display axes.

## Vertical blue themed stack chart

import { Chart, ChartBar, ChartStack, ChartTheme } from '@patternfly/react-charts';
import { Grid, GridItem, Text, TextVariants } from '@patternfly/react-core';
import './chart-stack.scss';

```js
import React from 'react';
import { Chart, ChartBar, ChartStack, ChartTheme } from '@patternfly/react-charts';
import { Grid, GridItem, Text, TextVariants } from '@patternfly/react-core';

<div style={{ width: 450, height: 300, marginRight: 20, marginLeft: 20 }}>
  <Chart theme={ChartTheme.light.blue}>
    <ChartStack>
      <ChartBar data={[{ x: 'Cats', y: 1 }, { x: 'Dogs', y: 2 }, { x: 'Birds', y: 5 }, { x: 'Mice', y: 3 }]} />
      <ChartBar data={[{ x: 'Cats', y: 2 }, { x: 'Dogs', y: 1 }, { x: 'Birds', y: 7 }, { x: 'Mice', y: 4 }]} />
      <ChartBar data={[{ x: 'Cats', y: 4 }, { x: 'Dogs', y: 4 }, { x: 'Birds', y: 9 }, { x: 'Mice', y: 7 }]} />
      <ChartBar data={[{ x: 'Cats', y: 3 }, { x: 'Dogs', y: 3 }, { x: 'Birds', y: 8 }, { x: 'Mice', y: 5 }]} />
    </ChartStack>
  </Chart>
</div>
```

## Vertical multi-color themed stack chart
```js
import React from 'react';
import { Chart, ChartBar, ChartStack, ChartTheme } from '@patternfly/react-charts';
import { Grid, GridItem, Text, TextVariants } from '@patternfly/react-core';

<div style={{ width: 450, height: 300, marginRight: 20, marginLeft: 20 }}>
  <Chart theme={ChartTheme.light.multi}>
    <ChartStack>
      <ChartBar data={[{ x: 'Cats', y: 1 }, { x: 'Dogs', y: 2 }, { x: 'Birds', y: 5 }, { x: 'Mice', y: 3 }]} />
      <ChartBar data={[{ x: 'Cats', y: 2 }, { x: 'Dogs', y: 1 }, { x: 'Birds', y: 7 }, { x: 'Mice', y: 4 }]} />
      <ChartBar data={[{ x: 'Cats', y: 4 }, { x: 'Dogs', y: 4 }, { x: 'Birds', y: 9 }, { x: 'Mice', y: 7 }]} />
      <ChartBar data={[{ x: 'Cats', y: 3 }, { x: 'Dogs', y: 3 }, { x: 'Birds', y: 8 }, { x: 'Mice', y: 5 }]} />
    </ChartStack>
  </Chart>
</div>
```

## Horizontal blue themed stack chart
```js
import React from 'react';
import { Chart, ChartBar, ChartStack, ChartTheme } from '@patternfly/react-charts';
import { Grid, GridItem, Text, TextVariants } from '@patternfly/react-core';

<div style={{ width: 450, height: 450, marginLeft: 20, marginRight: 20 }}>
  <Chart theme={ChartTheme.light.blue}>
    <ChartStack horizontal>
      <ChartBar data={[{ x: 'Cats', y: 1 }, { x: 'Dogs', y: 2 }, { x: 'Birds', y: 5 }, { x: 'Mice', y: 3 }]} />
      <ChartBar data={[{ x: 'Cats', y: 2 }, { x: 'Dogs', y: 1 }, { x: 'Birds', y: 7 }, { x: 'Mice', y: 4 }]} />
      <ChartBar data={[{ x: 'Cats', y: 4 }, { x: 'Dogs', y: 4 }, { x: 'Birds', y: 9 }, { x: 'Mice', y: 7 }]} />
      <ChartBar data={[{ x: 'Cats', y: 3 }, { x: 'Dogs', y: 3 }, { x: 'Birds', y: 8 }, { x: 'Mice', y: 5 }]} />
    </ChartStack>
  </Chart>
</div>
```

## Horizontal multi-color stack chart
```js
import React from 'react';
import { Chart, ChartBar, ChartStack, ChartTheme } from '@patternfly/react-charts';
import { Grid, GridItem, Text, TextVariants } from '@patternfly/react-core';

<div style={{ width: 450, height: 450, marginLeft: 20, marginRight: 20 }}>
  <Chart theme={ChartTheme.light.multi}>
    <ChartStack horizontal>
      <ChartBar data={[{ x: 'Cats', y: 1 }, { x: 'Dogs', y: 2 }, { x: 'Birds', y: 5 }, { x: 'Mice', y: 3 }]} />
      <ChartBar data={[{ x: 'Cats', y: 2 }, { x: 'Dogs', y: 1 }, { x: 'Birds', y: 7 }, { x: 'Mice', y: 4 }]} />
      <ChartBar data={[{ x: 'Cats', y: 4 }, { x: 'Dogs', y: 4 }, { x: 'Birds', y: 9 }, { x: 'Mice', y: 7 }]} />
      <ChartBar data={[{ x: 'Cats', y: 3 }, { x: 'Dogs', y: 3 }, { x: 'Birds', y: 8 }, { x: 'Mice', y: 5 }]} />
    </ChartStack>
  </Chart>
</div>
```
