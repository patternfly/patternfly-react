---
title: 'Pie'
section: 'charts'
typescript: true
propComponents: ['ChartLegend', 'ChartPie']
---

## Blue pie chart

import { ChartLegend, ChartPie, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';
import './chart-pie.scss';

```js
import React from 'react';
import { ChartLegend, ChartPie } from '@patternfly/react-charts';

<div>
  <div className="pie-chart-inline">
    <div className="pie-chart-legend-right">
      <ChartPie
        data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
        labels={datum => `${datum.x}: ${datum.y}`}
      />
    </div>
    <ChartLegend
      data={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
      height={230}
      orientation={'vertical'}
      responsive={false}
      y={70}
    />
  </div>
</div>
```

## Multi-color pie chart
```js
import React from 'react';
import { ChartLegend, ChartPie, ChartThemeColor } from '@patternfly/react-charts';

<div>
  <div className="pie-chart-container">
    <div className="pie-chart-legend-bottom">
      <ChartPie
        data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
        labels={datum => `${datum.x}: ${datum.y}`}
        themeColor={ChartThemeColor.multi}
        themeVariant={ChartThemeVariant.light}
      />
    </div>
  </div>
  <ChartLegend
    data={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
    height={35}
    orientation={'horizontal'}
    responsive={false}
    themeColor={ChartThemeColor.multi}
    themeVariant={ChartThemeVariant.light}
    x={8}
  />
</div>
```
