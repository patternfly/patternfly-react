---
title: "Stack Chart"
section: "charts"
---
### Known Problem
All of the `<svg>` elements on this page need to have `overflow: 'visible'` set on them to display axes.


## Vertical Blue Themed Stack Chart
```js
import React from 'react';
import { Chart, ChartBar, ChartStack, ChartTheme } from '@patternfly/react-charts';
import { Grid, GridItem, Text, TextVariants } from '@patternfly/react-core';

<div style={{width: 450, height: 300, marginRight: 20, marginLeft: 20}}>
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

## Vertical Multi-Color Themed Stack Chart
```js
import React from 'react';
import { Chart, ChartBar, ChartStack, ChartTheme } from '@patternfly/react-charts';
import { Grid, GridItem, Text, TextVariants } from '@patternfly/react-core';

<div style={{width: 450, height: 300, marginRight: 20, marginLeft: 20}}>
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

## Horizontal Blue Themed Stack Chart
```js
import React from 'react';
import { Chart, ChartBar, ChartStack, ChartTheme } from '@patternfly/react-charts';
import { Grid, GridItem, Text, TextVariants } from '@patternfly/react-core';

<div style={{width: 450, height: 450, marginLeft: 20, marginRight: 20}}>
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

## Horizontal Multi-Color Stack Chart
```js
import React from 'react';
import { Chart, ChartBar, ChartStack, ChartTheme } from '@patternfly/react-charts';
import { Grid, GridItem, Text, TextVariants } from '@patternfly/react-core';

<div style={{width: 450, height: 450, marginLeft: 20, marginRight: 20}}>
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