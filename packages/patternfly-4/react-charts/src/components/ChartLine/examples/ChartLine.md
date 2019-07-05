---
title: 'Line'
section: 'charts'
typescript: true
propComponents: ['Chart', 'ChartAxis', 'ChartGroup', 'ChartLegend', 'ChartLine']
---

import { Chart, ChartAxis, ChartGroup, ChartLegend, ChartLine, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';
import { VictoryZoomContainer } from 'victory';
import './chart-line.scss';

## Simple line chart with right-aligned legend
```js
import React from 'react';
import { Chart, ChartAxis, ChartGroup, ChartLine } from '@patternfly/react-charts';

<div>
  <div className="line-chart-legend-right">
    <Chart
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
      <ChartAxis tickValues={[2, 3, 4]} />
      <ChartAxis dependentAxis tickValues={[2, 5, 8]} />
      <ChartGroup>
        <ChartLine
          data={[
            { name: 'Cats', x: 1, y: 1 },
            { name: 'Cats', x: 2, y: 2 },
            { name: 'Cats', x: 3, y: 5 },
            { name: 'Cats', x: 4, y: 3 }
          ]}
        />
      </ChartGroup>
    </Chart>
  </div>
</div>
```

## Green line chart with tooltip and right-aligned legend
```js
import React from 'react';
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartThemeColor } from '@patternfly/react-charts';

<div>
  <div className="line-chart-legend-right">
    <Chart 
      containerComponent={<ChartVoronoiContainer labels={datum => `${datum.name}: ${datum.y}`} />}
      legendData={[{ name: 'Cats' }, { name: 'Dogs', symbol: { type: 'dash' } }, { name: 'Birds' }, { name: 'Mice' }]}
      legendOrientation="vertical"
      legendPosition="right"
      legendTitle="Average number of pets"
      height={250}
      padding={{
        bottom: 50,
        left: 50,
        right: 200, // Adjusted to accomodate legend
        top: 50
      }}
      themeColor={ChartThemeColor.green}
      width={600}
    >
      <ChartAxis tickValues={[2, 3, 4]} />
      <ChartAxis dependentAxis showGrid tickValues={[2, 5, 8]} />
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
    </Chart>
  </div>
</div>
```

## Multi-color line chart with x-axis zoom and bottom-aligned legend
```js
import React from 'react';
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartThemeColor } from '@patternfly/react-charts';
import { VictoryZoomContainer } from 'victory';

<div>
  <div className="line-chart-legend-bottom">
    <Chart
      containerComponent={<VictoryZoomContainer zoomDimension="x" />}
      legendData={[{ name: 'Cats' }, { name: 'Dogs', symbol: { type: 'dash' } }, { name: 'Birds' }, { name: 'Mice' }]}
      legendPosition="bottom"
      legendTitle="Average number of pets"
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
      <ChartAxis tickValues={[2, 3, 4]} />
      <ChartAxis dependentAxis showGrid tickValues={[2, 5, 8]} />
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
    </Chart>
  </div>
</div>
```
