---
title: 'Pie chart'
section: 'charts'
---

## Blue-themed pie chart

import { ChartLegend, ChartTheme, ChartPie } from '@patternfly/react-charts';
import './chart-pie.scss';

```js
import React from 'react';
import { ChartLegend, ChartPie } from '@patternfly/react-charts';

<div>
  <div className="donut-chart-inline">
    <div className="donut-chart-container">
      <ChartPie
        data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
        labels={datum => `${datum.x}: ${datum.y}`}
      />
    </div>
    <ChartLegend
      data={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }]}
      orientation={'vertical'}
      y={105}
    />
  </div>
</div>
```

## Multi-color themed pie chart
```js
import React from 'react';
import { ChartLegend, ChartTheme, ChartPie } from '@patternfly/react-charts';

<div>
  <div className="donut-chart-container">
    <ChartPie
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      labels={datum => `${datum.x}: ${datum.y}`}
      theme={ChartTheme.light.multi}
    />
  </div>
  <ChartLegend
    data={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }]}
    height={35}
    orientation={'horizontal'}
    theme={ChartTheme.light.multi}
    x={45}
  />
</div>
```
