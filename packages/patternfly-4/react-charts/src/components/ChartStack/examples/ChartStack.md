---
title: 'Stack'
section: 'charts'
typescript: true
propComponents: ['Chart', 'ChartBar', 'ChartStack']
---

import { Chart, ChartBar, ChartStack, ChartThemeColor } from '@patternfly/react-charts';
import './chart-stack.scss';

## Simple stack chart with right-aligned legend
```js
import React from 'react';
import { Chart, ChartStack } from '@patternfly/react-charts';

<div>
  <div className="stack-chart-legend-right">
    <Chart
      legendData={[{ name: 'Cats' }, { name: 'Birds' }, { name: 'Dogs' }, { name: 'Mice' }]}
      legendOrientation="vertical"
      legendPosition="right"
      height={250}
      padding={{
        bottom: 50,
        left: 50,
        right: 200, // Adjusted to accomodate legend
        top: 50
      }}
      width={600}
    >
      <ChartStack domainPadding={{x: [10, 2]}}>
        <ChartBar data={[{ name: 'Cats', x: '2015', y: 1 }, { name: 'Cats', x: '2016', y: 2 }, { name: 'Cats', x: '2017', y: 5 }, { name: 'Cats', x: '2018', y: 3 }]} />
        <ChartBar data={[{ name: 'Dogs', x: '2015', y: 2 }, { name: 'Dogs', x: '2016', y: 1 }, { name: 'Dogs', x: '2017', y: 7 }, { name: 'Dogs', x: '2018', y: 4 }]} />
        <ChartBar data={[{ name: 'Birds', x: '2015', y: 4 }, { name: 'Birds', x: '2016', y: 4 }, { name: 'Birds', x: '2017', y: 9 }, { name: 'Birds', x: '2018', y: 7 }]} />
        <ChartBar data={[{ name: 'Mice', x: '2015', y: 3 }, { name: 'Mice', x: '2016', y: 3 }, { name: 'Mice', x: '2017', y: 8 }, { name: 'Mice', x: '2018', y: 5 }]} />
      </ChartStack>
    </Chart>
  </div>
</div>
```

## Gold, horizontal stack chart with bottom-aligned legend
```js
import React from 'react';
import { Chart, ChartStack, ChartThemeColor } from '@patternfly/react-charts';

<div>
  <div className="stack-chart-legend-bottom">
    <Chart
      domainPadding={{ x: [30, 25] }}
      legendData={[{ name: 'Cats' }, { name: 'Birds' }, { name: 'Dogs' }, { name: 'Mice' }]}
      legendPosition="bottom"
      height={275}
      padding={{
        bottom: 75, // Adjusted to accomodate legend
        left: 50,
        right: 50, 
        top: 50
      }}
      themeColor={ChartThemeColor.gold}
      width={450}
    >
      <ChartAxis />
      <ChartAxis dependentAxis showGrid />
      <ChartStack domainPadding={{x: [10, 2]}}>
        <ChartBar data={[{ name: 'Cats', x: '2015', y: 1 }, { name: 'Cats', x: '2016', y: 2 }, { name: 'Cats', x: '2017', y: 5 }, { name: 'Cats', x: '2018', y: 3 }]} />
        <ChartBar data={[{ name: 'Dogs', x: '2015', y: 2 }, { name: 'Dogs', x: '2016', y: 1 }, { name: 'Dogs', x: '2017', y: 7 }, { name: 'Dogs', x: '2018', y: 4 }]} />
        <ChartBar data={[{ name: 'Birds', x: '2015', y: 4 }, { name: 'Birds', x: '2016', y: 4 }, { name: 'Birds', x: '2017', y: 9 }, { name: 'Birds', x: '2018', y: 7 }]} />
        <ChartBar data={[{ name: 'Mice', x: '2015', y: 3 }, { name: 'Mice', x: '2016', y: 3 }, { name: 'Mice', x: '2017', y: 8 }, { name: 'Mice', x: '2018', y: 5 }]} />
      </ChartStack>
      
    </Chart>
  </div>
</div>
```

## Multi-color, horizontal stack chart with bottom-aligned legend
```js
import React from 'react';
import { Chart, ChartStack, ChartThemeColor } from '@patternfly/react-charts';

<div>
  <div className="stack-chart-legend-bottom">
    <Chart
      domainPadding={{ x: [30, 25] }}
      legendData={[{ name: 'Cats' }, { name: 'Birds' }, { name: 'Dogs' }, { name: 'Mice' }]}
      legendPosition="bottom"
      height={275}
      padding={{
        bottom: 75, // Adjusted to accomodate legend
        left: 50,
        right: 50, 
        top: 50
      }}
      themeColor={ChartThemeColor.multi}
      width={450}
    >
      <ChartAxis />
      <ChartAxis dependentAxis showGrid />
      <ChartStack domainPadding={{x: [10, 2]}} horizontal>
        <ChartBar data={[{ name: 'Cats', x: '2015', y: 1 }, { name: 'Cats', x: '2016', y: 2 }, { name: 'Cats', x: '2017', y: 5 }, { name: 'Cats', x: '2018', y: 3 }]} />
        <ChartBar data={[{ name: 'Dogs', x: '2015', y: 2 }, { name: 'Dogs', x: '2016', y: 1 }, { name: 'Dogs', x: '2017', y: 7 }, { name: 'Dogs', x: '2018', y: 4 }]} />
        <ChartBar data={[{ name: 'Birds', x: '2015', y: 4 }, { name: 'Birds', x: '2016', y: 4 }, { name: 'Birds', x: '2017', y: 9 }, { name: 'Birds', x: '2018', y: 7 }]} />
        <ChartBar data={[{ name: 'Mice', x: '2015', y: 3 }, { name: 'Mice', x: '2016', y: 3 }, { name: 'Mice', x: '2017', y: 8 }, { name: 'Mice', x: '2018', y: 5 }]} />
      </ChartStack>
    </Chart>
  </div>
</div>
```
