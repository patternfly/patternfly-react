---
title: "Bar Chart"
section: "charts"
---
## Blue Theme Bar Chart
```js
import React from 'react';
import { Chart, ChartBar, ChartGroup, ChartTheme } from '@patternfly/react-charts';
import { Grid, GridItem, Text, TextVariants } from '@patternfly/react-core';

<div className="chart-container chart-margin chart-overflow">
  <Chart domainPadding={{ x: [30, 25] }} theme={ChartTheme.light.blue} height={200} width={300}>
    <ChartGroup offset={11}>
      <ChartBar data={[{ x: 'Cats', y: 1 }, { x: 'Dogs', y: 2 }, { x: 'Birds', y: 5 }, { x: 'Mice', y: 3 }]} />
      <ChartBar data={[{ x: 'Cats', y: 2 }, { x: 'Dogs', y: 1 }, { x: 'Birds', y: 7 }, { x: 'Mice', y: 4 }]} />
      <ChartBar data={[{ x: 'Cats', y: 4 }, { x: 'Dogs', y: 4 }, { x: 'Birds', y: 9 }, { x: 'Mice', y: 7 }]} />
      <ChartBar data={[{ x: 'Cats', y: 3 }, { x: 'Dogs', y: 3 }, { x: 'Birds', y: 8 }, { x: 'Mice', y: 5 }]} />
    </ChartGroup>
  </Chart>
</div>
```

## Multi-Color Theme Bar Char
```js
import React from 'react';
import { Chart, ChartBar, ChartGroup, ChartTheme } from '@patternfly/react-charts';
import { Grid, GridItem, Text, TextVariants } from '@patternfly/react-core';

<div className="chart-container chart-margin chart-overflow">
  <Chart domainPadding={{ x: [30, 25] }} theme={ChartTheme.light.multi} height={200} width={300}>
    <ChartGroup offset={11}>
      <ChartBar data={[{ x: 'Cats', y: 1 }, { x: 'Dogs', y: 2 }, { x: 'Birds', y: 5 }, { x: 'Mice', y: 3 }]} />
      <ChartBar data={[{ x: 'Cats', y: 2 }, { x: 'Dogs', y: 1 }, { x: 'Birds', y: 7 }, { x: 'Mice', y: 4 }]} />
      <ChartBar data={[{ x: 'Cats', y: 4 }, { x: 'Dogs', y: 4 }, { x: 'Birds', y: 9 }, { x: 'Mice', y: 7 }]} />
      <ChartBar data={[{ x: 'Cats', y: 3 }, { x: 'Dogs', y: 3 }, { x: 'Birds', y: 8 }, { x: 'Mice', y: 5 }]} />
    </ChartGroup>
  </Chart>
</div>
```