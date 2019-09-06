---
title: 'Pie'
section: 'charts'
typescript: true
propComponents: ['ChartLegend', 'ChartPie']
---

import { ChartLegend, ChartPie, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';
import './chart-pie.scss';

## Simple pie chart with right aligned legend
```js
import React from 'react';
import { ChartPie } from '@patternfly/react-charts';

<div>
  <div className="pie-chart-legend-right">
    <ChartPie
      ariaDesc="Average number of pets"
      ariaTitle="Pie chart example"
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      height={230}
      labels={datum => `${datum.x}: ${datum.y}`}
      legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
      legendOrientation="vertical"
      legendPosition="right"
      width={350}
    />
  </div>
</div>
```

## Orange pie chart with right aligned legend
```js
import React from 'react';
import { ChartPie, ChartThemeColor } from '@patternfly/react-charts';

<div>
  <div className="pie-chart-legend-right">
    <ChartPie
      ariaDesc="Average number of pets"
      ariaTitle="Pie chart example"
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      height={230}
      labels={datum => `${datum.x}: ${datum.y}`}
      legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
      legendOrientation="vertical"
      legendPosition="right"
      themeColor={ChartThemeColor.orange}
      width={350}
    />
  </div>
</div>
```

## Multi-color (ordered) pie chart with bottom aligned legend
```js
import React from 'react';
import { ChartPie, ChartThemeColor } from '@patternfly/react-charts';

<div>
  <div className="pie-chart-legend-bottom">
    <ChartPie
      ariaDesc="Average number of pets"
      ariaTitle="Pie chart example"
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      height={275}
      labels={datum => `${datum.x}: ${datum.y}`}
      legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
      legendPosition="bottom"
      pieHeight={230}
      themeColor={ChartThemeColor.multiOrdered}
      width={300}
    />
  </div>
</div>
```
