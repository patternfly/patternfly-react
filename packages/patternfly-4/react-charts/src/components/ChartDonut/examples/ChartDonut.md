---
title: 'Donut'
section: 'charts'
typescript: true
propComponents: ['ChartDonut', 'ChartLegend']
---

import { ChartDonut, ChartLegend, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';
import './chart-donut.scss';

## Blue donut chart

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
      height={230}
      orientation="vertical"
      responsive={false}
      y={70}
    />
  </div>
</div>
```

## Multi-color donut chart
```js
import React from 'react';
import { ChartDonut, ChartLegend, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';

<div>
  <div className="donut-chart-container">
    <ChartDonut
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      labels={datum => `${datum.x}: ${datum.y}`}
      subTitle="Pets"
      themeColor={ChartThemeColor.multi}
      themeVariant={ChartThemeVariant.light}
      title="100"
    />
  </div>
  <ChartLegend
    data={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }]}
    height={35}
    orientation={'horizontal'}
    responsive={false}
    themeColor={ChartThemeColor.multi}
    themeVariant={ChartThemeVariant.light}
    x={8}
  />
</div>
```
