---
title: 'Stack'
section: 'charts'
typescript: true
propComponents: ['Chart', 'ChartBar', 'ChartStack']
---

import { Chart, ChartBar, ChartStack, ChartThemeColor, ChartTooltip } from '@patternfly/react-charts';
import './chart-stack.scss';

## Simple stack chart with right aligned legend
```js
import React from 'react';
import { Chart, ChartStack,ChartTooltip } from '@patternfly/react-charts';

<div>
  <div className="stack-chart-legend-right">
    <Chart
      ariaDesc="Average number of pets"
      ariaTitle="Stack chart example"
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
      <ChartAxis />
      <ChartAxis dependentAxis showGrid />
      <ChartStack domainPadding={{x: [10, 2]}}>
        <ChartBar 
          data={[
            { name: 'Cats', x: '2015', y: 1, label: 'Cats: 1' }, 
            { name: 'Cats', x: '2016', y: 2, label: 'Cats: 2' }, 
            { name: 'Cats', x: '2017', y: 5, label: 'Cats: 5' }, 
            { name: 'Cats', x: '2018', y: 3, label: 'Cats: 3' }
          ]} 
          labelComponent={<ChartTooltip />}
        />
        <ChartBar 
          data={[
            { name: 'Dogs', x: '2015', y: 2, label: 'Dogs: 2' }, 
            { name: 'Dogs', x: '2016', y: 1, label: 'Dogs: 1' }, 
            { name: 'Dogs', x: '2017', y: 7, label: 'Dogs: 7' }, 
            { name: 'Dogs', x: '2018', y: 4, label: 'Dogs: 4' }
          ]}
          labelComponent={<ChartTooltip />}
        />
        <ChartBar 
          data={[
            { name: 'Birds', x: '2015', y: 4, label: 'Birds: 4' }, 
            { name: 'Birds', x: '2016', y: 4, label: 'Birds: 4' }, 
            { name: 'Birds', x: '2017', y: 9, label: 'Birds: 9' }, 
            { name: 'Birds', x: '2018', y: 7, label: 'Birds: 7' }
          ]}
          labelComponent={<ChartTooltip />}
        />
        <ChartBar 
          data={[
            { name: 'Mice', x: '2015', y: 3, label: 'Mice: 3' }, 
            { name: 'Mice', x: '2016', y: 3, label: 'Mice: 3' }, 
            { name: 'Mice', x: '2017', y: 8, label: 'Mice: 8' }, 
            { name: 'Mice', x: '2018', y: 5, label: 'Mice: 5' }
          ]}
          labelComponent={<ChartTooltip />}
        />
      </ChartStack>
    </Chart>
  </div>
</div>
```

## Gold, horizontal stack chart with bottom aligned legend
```js
import React from 'react';
import { Chart, ChartStack, ChartThemeColor } from '@patternfly/react-charts';

<div>
  <div className="stack-chart-legend-bottom">
    <Chart
      ariaDesc="Average number of pets"
      ariaTitle="Stack chart example"
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
        <ChartBar 
          data={[
            { name: 'Cats', x: '2015', y: 1, label: 'Cats: 1' }, 
            { name: 'Cats', x: '2016', y: 2, label: 'Cats: 2' }, 
            { name: 'Cats', x: '2017', y: 5, label: 'Cats: 5' }, 
            { name: 'Cats', x: '2018', y: 3, label: 'Cats: 3' }
          ]} 
          labelComponent={<ChartTooltip />}
        />
        <ChartBar 
          data={[
            { name: 'Dogs', x: '2015', y: 2, label: 'Dogs: 2' }, 
            { name: 'Dogs', x: '2016', y: 1, label: 'Dogs: 1' }, 
            { name: 'Dogs', x: '2017', y: 7, label: 'Dogs: 7' }, 
            { name: 'Dogs', x: '2018', y: 4, label: 'Dogs: 4' }
          ]}
          labelComponent={<ChartTooltip />}
        />
        <ChartBar 
          data={[
            { name: 'Birds', x: '2015', y: 4, label: 'Birds: 4' }, 
            { name: 'Birds', x: '2016', y: 4, label: 'Birds: 4' }, 
            { name: 'Birds', x: '2017', y: 9, label: 'Birds: 9' }, 
            { name: 'Birds', x: '2018', y: 7, label: 'Birds: 7' }
          ]}
          labelComponent={<ChartTooltip />}
        />
        <ChartBar 
          data={[
            { name: 'Mice', x: '2015', y: 3, label: 'Mice: 3' }, 
            { name: 'Mice', x: '2016', y: 3, label: 'Mice: 3' }, 
            { name: 'Mice', x: '2017', y: 8, label: 'Mice: 8' }, 
            { name: 'Mice', x: '2018', y: 5, label: 'Mice: 5' }
          ]}
          labelComponent={<ChartTooltip />}
        />
      </ChartStack>
    </Chart>
  </div>
</div>
```

## Multi-color (ordered), horizontal stack chart with bottom-left aligned legend
```js
import React from 'react';
import { Chart, ChartStack, ChartThemeColor } from '@patternfly/react-charts';

<div>
  <div className="stack-chart-legend-bottom">
    <Chart
      ariaDesc="Average number of pets"
      ariaTitle="Stack chart example"
      domainPadding={{ x: [30, 25] }}
      legendData={[{ name: 'Cats' }, { name: 'Birds' }, { name: 'Dogs' }, { name: 'Mice' }]}
      legendPosition="bottom-left"
      height={275}
      padding={{
        bottom: 75, // Adjusted to accomodate legend
        left: 50,
        right: 50, 
        top: 50
      }}
      themeColor={ChartThemeColor.multiOrdered}
      width={450}
    >
      <ChartAxis />
      <ChartAxis dependentAxis showGrid />
      <ChartStack domainPadding={{x: [10, 2]}} horizontal>
        <ChartBar 
          data={[
            { name: 'Cats', x: '2015', y: 1, label: 'Cats: 1' }, 
            { name: 'Cats', x: '2016', y: 2, label: 'Cats: 2' }, 
            { name: 'Cats', x: '2017', y: 5, label: 'Cats: 5' }, 
            { name: 'Cats', x: '2018', y: 3, label: 'Cats: 3' }
          ]} 
          labelComponent={<ChartTooltip />}
        />
        <ChartBar 
          data={[
            { name: 'Dogs', x: '2015', y: 2, label: 'Dogs: 2' }, 
            { name: 'Dogs', x: '2016', y: 1, label: 'Dogs: 1' }, 
            { name: 'Dogs', x: '2017', y: 7, label: 'Dogs: 7' }, 
            { name: 'Dogs', x: '2018', y: 4, label: 'Dogs: 4' }
          ]}
          labelComponent={<ChartTooltip />}
        />
        <ChartBar 
          data={[
            { name: 'Birds', x: '2015', y: 4, label: 'Birds: 4' }, 
            { name: 'Birds', x: '2016', y: 4, label: 'Birds: 4' }, 
            { name: 'Birds', x: '2017', y: 9, label: 'Birds: 9' }, 
            { name: 'Birds', x: '2018', y: 7, label: 'Birds: 7' }
          ]}
          labelComponent={<ChartTooltip />}
        />
        <ChartBar 
          data={[
            { name: 'Mice', x: '2015', y: 3, label: 'Mice: 3' }, 
            { name: 'Mice', x: '2016', y: 3, label: 'Mice: 3' }, 
            { name: 'Mice', x: '2017', y: 8, label: 'Mice: 8' }, 
            { name: 'Mice', x: '2018', y: 5, label: 'Mice: 5' }
          ]}
          labelComponent={<ChartTooltip />}
        />
      </ChartStack>
    </Chart>
  </div>
</div>
```
