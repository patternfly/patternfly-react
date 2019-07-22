---
title: 'Bar'
section: 'charts'
typescript: true
propComponents: ['Chart', 'ChartBar', 'ChartGroup']
---

import { Chart, ChartBar, ChartGroup, ChartThemeColor } from '@patternfly/react-charts';
import './chart-bar.scss';

## Simple bar chart with right aligned legend
```js
import React from 'react';
import { Chart, ChartBar } from '@patternfly/react-charts';

<div>
  <div className="bar-chart-legend-right">
    <Chart
      ariaDesc="Average number of pets"
      ariaTitle="Bar chart example"
      containerComponent={<ChartVoronoiContainer labels={datum => `${datum.name}: ${datum.y}`} voronoiDimension="x" />}
      domain={{y: [0,9]}}
      domainPadding={{ x: [30, 25] }}
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
      <ChartGroup offset={11}>
        <ChartBar data={[{ name: 'Cats', x: '2015', y: 1 }, { name: 'Cats', x: '2016', y: 2 }, { name: 'Cats', x: '2017', y: 5 }, { name: 'Cats', x: '2018', y: 3 }]} />
        <ChartBar data={[{ name: 'Dogs', x: '2015', y: 2 }, { name: 'Dogs', x: '2016', y: 1 }, { name: 'Dogs', x: '2017', y: 7 }, { name: 'Dogs', x: '2018', y: 4 }]} />
        <ChartBar data={[{ name: 'Birds', x: '2015', y: 4 }, { name: 'Birds', x: '2016', y: 4 }, { name: 'Birds', x: '2017', y: 9 }, { name: 'Birds', x: '2018', y: 7 }]} />
        <ChartBar data={[{ name: 'Mice', x: '2015', y: 3 }, { name: 'Mice', x: '2016', y: 3 }, { name: 'Mice', x: '2017', y: 8 }, { name: 'Mice', x: '2018', y: 5 }]} />
      </ChartGroup>
    </Chart>
  </div>
</div>
```

## Purple bar chart with right aligned legend
```js
import React from 'react';
import { Chart, ChartBar, ChartGroup, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';

<div>
  <div className="bar-chart-legend-bottom">
    <Chart
      ariaDesc="Average number of pets"
      ariaTitle="Bar chart example"
      containerComponent={<ChartVoronoiContainer labels={datum => `${datum.name}: ${datum.y}`} voronoiDimension="x" />}
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
      themeColor={ChartThemeColor.purple}
      width={450}
    >
      <ChartAxis />
      <ChartAxis dependentAxis showGrid />
      <ChartGroup offset={11}>
        <ChartBar data={[{ name: 'Cats', x: '2015', y: 1 }, { name: 'Cats', x: '2016', y: 2 }, { name: 'Cats', x: '2017', y: 5 }, { name: 'Cats', x: '2018', y: 3 }]} />
        <ChartBar data={[{ name: 'Dogs', x: '2015', y: 2 }, { name: 'Dogs', x: '2016', y: 1 }, { name: 'Dogs', x: '2017', y: 7 }, { name: 'Dogs', x: '2018', y: 4 }]} />
        <ChartBar data={[{ name: 'Birds', x: '2015', y: 4 }, { name: 'Birds', x: '2016', y: 4 }, { name: 'Birds', x: '2017', y: 9 }, { name: 'Birds', x: '2018', y: 7 }]} />
        <ChartBar data={[{ name: 'Mice', x: '2015', y: 3 }, { name: 'Mice', x: '2016', y: 3 }, { name: 'Mice', x: '2017', y: 8 }, { name: 'Mice', x: '2018', y: 5 }]} />
      </ChartGroup>
    </Chart>
  </div>
</div>
```

## Multi-color (ordered), horizontal bar chart with zoom and bottom-left aligned legend
```js
import React from 'react';
import { Chart, ChartBar, ChartGroup, ChartThemeColor } from '@patternfly/react-charts';

<div>
  <div className="bar-chart-legend-bottom-left">
    <Chart
      allowZoom
      ariaDesc="Average number of pets"
      ariaTitle="Bar chart example"
      domainPadding={{ x: [30, 25] }}
      legendData={[{ name: 'Cats' }, { name: 'Birds' }, { name: 'Dogs' }, { name: 'Mice' }]}
      legendPosition="bottom-left"
      height={400}
      padding={{
        bottom: 75, // Adjusted to accomodate legend
        left: 50,
        right: 100, // Adjusted to accomodate tooltip
        top: 50
      }}
      themeColor={ChartThemeColor.multiOrdered}
      width={450}
    >
      <ChartAxis />
      <ChartAxis dependentAxis showGrid />
      <ChartGroup allowZoom={true} offset={11} horizontal>
        <ChartBar data={[{ name: 'Cats', x: '2015', y: 1 }, { name: 'Cats', x: '2016', y: 2 }, { name: 'Cats', x: '2017', y: 5 }, { name: 'Cats', x: '2018', y: 3 }]} />
        <ChartBar data={[{ name: 'Dogs', x: '2015', y: 2 }, { name: 'Dogs', x: '2016', y: 1 }, { name: 'Dogs', x: '2017', y: 7 }, { name: 'Dogs', x: '2018', y: 4 }]} />
        <ChartBar data={[{ name: 'Birds', x: '2015', y: 4 }, { name: 'Birds', x: '2016', y: 4 }, { name: 'Birds', x: '2017', y: 9 }, { name: 'Birds', x: '2018', y: 7 }]} />
        <ChartBar data={[{ name: 'Mice', x: '2015', y: 3 }, { name: 'Mice', x: '2016', y: 3 }, { name: 'Mice', x: '2017', y: 8 }, { name: 'Mice', x: '2018', y: 5 }]} />
      </ChartGroup>
    </Chart>
  </div>
</div>
```

## Single bar chart with right aligned legend
```js
import React from 'react';
import { Chart, ChartBar } from '@patternfly/react-charts';

<div>
  <div className="bar-chart-legend-right">
    <Chart
      ariaDesc="Average number of pets"
      ariaTitle="Bar chart example"
      containerComponent={<ChartVoronoiContainer labels={datum => `${datum.name}: ${datum.y}`} voronoiDimension="x" />}
      domain={{y: [0,9]}}
      domainPadding={{ x: [30, 25] }}
      legendData={[{ name: 'Cats' }]}
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
      <ChartBar data={[{ name: 'Cats', x: '2015', y: 1 }, { name: 'Cats', x: '2016', y: 2 }, { name: 'Cats', x: '2017', y: 5 }, { name: 'Cats', x: '2018', y: 3 }]} />
    </Chart>
  </div>
</div>
```
