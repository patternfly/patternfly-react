---
title: 'Pie'
section: 'charts'
---

## Blue pie chart

import { ChartLegend, ChartPie, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';
import './chart-pie.scss';

```js
import React from 'react';
import { ChartLegend, ChartPie } from '@patternfly/react-charts';

<div>
  <div className="pie-chart-inline">
    <div className="pie-chart-container">
      <ChartPie
        data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
        labels={datum => `${datum.x}: ${datum.y}`}
      />
    </div>
    <ChartLegend
      data={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }]}
      height={230}
      orientation={'vertical'}
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
    <ChartPie
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      labels={datum => `${datum.x}: ${datum.y}`}
      themeColor={ChartThemeColor.multi}
      themeVariant={ChartThemeVariant.light}
    />
  </div>
  <ChartLegend
    data={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }]}
    height={35}
    orientation={'horizontal'}
    themeColor={ChartThemeColor.multi}
    themeVariant={ChartThemeVariant.light}
    x={8}
  />
</div>
```
