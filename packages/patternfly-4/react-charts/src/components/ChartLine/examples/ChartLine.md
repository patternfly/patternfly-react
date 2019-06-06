---
title: 'Line'
section: 'charts'
typescript: true
propComponents: ['Chart', 'ChartAxis', 'ChartGroup', 'ChartLegend', 'ChartLine']
---

import { Chart, ChartAxis, ChartGroup, ChartLegend, ChartLine, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';
import { VictoryZoomContainer } from 'victory';
import './chart-line.scss';

## Green line chart with zoom along x axis
```js
import React from 'react';
import { Chart, ChartAxis, ChartGroup, ChartLegend, ChartLine, ChartThemeColor } from '@patternfly/react-charts';
import { VictoryZoomContainer } from 'victory';

<div>
  <div className="line-chart-inline">
    <div className="line-chart-container">
      <Chart themeColor={ChartThemeColor.green} containerComponent={<VictoryZoomContainer zoomDimension="x" />}>
        <ChartGroup>
          <ChartLine
            data={[
              { name: 'Cats', x: 1, y: 1 },
              { name: 'Cats', x: 2, y: 2 },
              { name: 'Cats', x: 3, y: 5 },
              { name: 'Cats', x: 4, y: 3 }
            ]}
          />
          <ChartLine
            data={[
              { name: 'Dogs', x: 1, y: 2 },
              { name: 'Dogs', x: 2, y: 1 },
              { name: 'Dogs', x: 3, y: 7 },
              { name: 'Dogs', x: 4, y: 4 }
            ]}
            style={{
              data: {
                strokeDasharray: '3,3'
              }
            }}
          />
          <ChartLine
            data={[
              { name: 'Birds', x: 1, y: 3 },
              { name: 'Birds', x: 2, y: 4 },
              { name: 'Birds', x: 3, y: 9 },
              { name: 'Birds', x: 4, y: 5 }
            ]}
          />
          <ChartLine
            data={[
              { name: 'Mice', x: 1, y: 3 },
              { name: 'Mice', x: 2, y: 3 },
              { name: 'Mice', x: 3, y: 8 },
              { name: 'Mice', x: 4, y: 7 }
            ]}
          />
        </ChartGroup>
        <ChartAxis tickValues={[2, 3, 4]} />
        <ChartAxis dependentAxis tickValues={[2, 5, 8]} />
      </Chart>
    </div>
    <ChartLegend
      data={[{ name: 'Cats' }, { name: 'Dogs', symbol: { type: 'dash' } }, { name: 'Birds' }, { name: 'Mice' }]}
      orientation="vertical"
      responsive={false}
      title="Average number of pets"
      themeColor={ChartThemeColor.green}
      y={80}
    />
  </div>
</div>
```

## Multi-color line chart
```js
import React from 'react';
import { Chart, ChartAxis, ChartGroup, ChartLegend, ChartLine, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';

<div>
  <div className="line-chart-container">
    <Chart
      themeColor={ChartThemeColor.multi}
      themeVariant={ChartThemeVariant.light}
    >
      <ChartGroup>
        <ChartLine
          data={[
            { name: 'Cats', x: 1, y: 1 },
            { name: 'Cats', x: 2, y: 2 },
            { name: 'Cats', x: 3, y: 5 },
            { name: 'Cats', x: 4, y: 3 }
          ]}
        />
        <ChartLine
          data={[
            { name: 'Dogs', x: 1, y: 2 },
            { name: 'Dogs', x: 2, y: 1 },
            { name: 'Dogs', x: 3, y: 7 },
            { name: 'Dogs', x: 4, y: 4 }
          ]}
          style={{
            data: {
              strokeDasharray: '3,3'
            }
          }}
        />
        <ChartLine
          data={[
            { name: 'Birds', x: 1, y: 3 },
            { name: 'Birds', x: 2, y: 4 },
            { name: 'Birds', x: 3, y: 9 },
            { name: 'Birds', x: 4, y: 5 }
          ]}
        />
        <ChartLine
          data={[
            { name: 'Mice', x: 1, y: 3 },
            { name: 'Mice', x: 2, y: 3 },
            { name: 'Mice', x: 3, y: 8 },
            { name: 'Mice', x: 4, y: 7 }
          ]}
        />
      </ChartGroup>
      <ChartAxis tickValues={[2, 3, 4]} />
      <ChartAxis dependentAxis tickValues={[2, 5, 8]} />
    </Chart>
  </div>
  <ChartLegend
    data={[{ name: 'Cats' }, { name: 'Dogs', symbol: { type: 'dash' } }, { name: 'Birds' }, { name: 'Mice' }]}
    height={50}
    responsive={false}
    themeColor={ChartThemeColor.multi}
    themeVariant={ChartThemeVariant.light}
    title="Average number of pets"
  />
</div>
```
