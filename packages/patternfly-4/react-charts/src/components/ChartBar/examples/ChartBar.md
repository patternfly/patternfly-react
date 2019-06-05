---
title: 'Bar'
section: 'charts'
typescript: true
propComponents: ['Chart', 'ChartBar', 'ChartGroup']
---

## Simple Bar Chart

import { Chart, ChartBar, ChartGroup, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';
import './chart-bar.scss';

```js
import React from 'react';
import { Chart, ChartBar } from '@patternfly/react-charts';

<div>
  <div className="bar-chart-container">
    <Chart domainPadding={{ x: [30, 25] }}>
      <ChartBar data={[ { x: 'Cats', y: 1 }, { x: 'Dogs', y: 2 }, { x: 'Birds', y: 5 }, { x: 'Mice', y: 3 } ]} />
    </Chart>
  </div>
</div>
```

## Grouped Bar Chart with Light Blue Theme
```js
import React from 'react';
import { Chart, ChartBar, ChartGroup } from '@patternfly/react-charts';

<div>
  <div className="bar-chart-container">
    <Chart
      domainPadding={{ x: [30, 25] }}
      themeColor={ChartThemeColor.blue}
      themeVariant={ChartThemeVariant.light}
    >
      <ChartGroup offset={11}>
        <ChartBar data={[{ x: 'Cats', y: 1 }, { x: 'Dogs', y: 2 }, { x: 'Birds', y: 5 }, { x: 'Mice', y: 3 }]} />
        <ChartBar data={[{ x: 'Cats', y: 2 }, { x: 'Dogs', y: 1 }, { x: 'Birds', y: 7 }, { x: 'Mice', y: 4 }]} />
        <ChartBar data={[{ x: 'Cats', y: 4 }, { x: 'Dogs', y: 4 }, { x: 'Birds', y: 9 }, { x: 'Mice', y: 7 }]} />
        <ChartBar data={[{ x: 'Cats', y: 3 }, { x: 'Dogs', y: 3 }, { x: 'Birds', y: 8 }, { x: 'Mice', y: 5 }]} />
      </ChartGroup>
    </Chart>
  </div>
</div>
```

## Grouped Bar Chart with Light Multi-Color Theme
```js
import React from 'react';
import { Chart, ChartBar, ChartGroup, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';

<div>
  <div className="bar-chart-container">
    <Chart
      domainPadding={{ x: [30, 25] }}
      themeColor={ChartThemeColor.multi}
      themeVariant={ChartThemeVariant.light}
    >
      <ChartGroup offset={11}>
        <ChartBar data={[{ x: 'Cats', y: 1 }, { x: 'Dogs', y: 2 }, { x: 'Birds', y: 5 }, { x: 'Mice', y: 3 }]} />
        <ChartBar data={[{ x: 'Cats', y: 2 }, { x: 'Dogs', y: 1 }, { x: 'Birds', y: 7 }, { x: 'Mice', y: 4 }]} />
        <ChartBar data={[{ x: 'Cats', y: 4 }, { x: 'Dogs', y: 4 }, { x: 'Birds', y: 9 }, { x: 'Mice', y: 7 }]} />
        <ChartBar data={[{ x: 'Cats', y: 3 }, { x: 'Dogs', y: 3 }, { x: 'Birds', y: 8 }, { x: 'Mice', y: 5 }]} />
      </ChartGroup>
    </Chart>
  </div>
</div>
```
