---
title: 'Donut chart'
section: 'charts'
---

## Blue theme donut chart

import { ChartDonut, ChartLabel, ChartLegend, ChartTheme } from '@patternfly/react-charts';
import './chart-donut.scss';

```js
import React from 'react';
import { ChartDonut, ChartLegend } from '@patternfly/react-charts';

<div>
  <div className="donut-chart-inline">
    <div className="donut-chart-container">
      <ChartDonut
        data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
        labels={datum => `${datum.x}: ${datum.y}`}
        subTitle="Pets"
        title="100"
      />
    </div>
    <ChartLegend
      data={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }]}
      orientation="vertical"
      y={105}
    />
  </div>
</div>
```

## Multi-color theme donut chart
```js
import React from 'react';
import { ChartDonut, ChartLabel, ChartLegend, ChartTheme } from '@patternfly/react-charts';

<div>
  <div className="donut-chart-container">
    <svg className="donut-chart-label">
      <ChartLabel style={{ fontSize: 20 }} text="100" textAnchor="middle" verticalAnchor="middle" x={150} y={140} />
      <ChartLabel style={{ fill: '#bbb' }} text="Pets" textAnchor="middle" verticalAnchor="middle" x={150} y={160} />
    </svg>
    <ChartDonut
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
