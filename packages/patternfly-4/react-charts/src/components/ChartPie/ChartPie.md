---
title: "Pie Chart"
section: "charts"
---
## Blue-Themed Pie Chart
```js
import React from 'react';
import { ChartLegend, ChartTheme, ChartPie } from '@patternfly/react-charts';
import { Grid, GridItem, Text, TextVariants } from '@patternfly/react-core';

<div>
  <div style={{height: 450, width: 450}}>
    <ChartPie
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      labels={(datum) => `${datum.x}: ${datum.y}`}
      theme={ChartTheme.light.blue}
    />
  </div>
    <ChartLegend
      data={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }]}
      orientation={'vertical'}
      theme={ChartTheme.light.blue}
      y={150}
      />
</div>
```

## Multi-Color Themed Pie Chart
```js
import React from 'react';
import { ChartLegend, ChartTheme, ChartPie } from '@patternfly/react-charts';
import { Grid, GridItem, Text, TextVariants } from '@patternfly/react-core';

<div>
  <div style={{height: 450, width: 450}}>
    <ChartPie
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      labels={(datum) => `${datum.x}: ${datum.y}`}
      theme={ChartTheme.light.multi}
      />
  </div>
  <ChartLegend
      data={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }]}
      orientation={'horizontal'}
      theme={ChartTheme.light.multi}
      height={100}
      x={150}
    />
</div>
```