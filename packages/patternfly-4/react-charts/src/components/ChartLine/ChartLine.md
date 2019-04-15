---
title: 'Line Chart'
section: 'charts'
---

import { Chart, ChartGroup, ChartLegend, ChartLine, ChartTheme, ChartAxis } from '@patternfly/react-charts';
import { Grid, GridItem, Text, TextVariants } from '@patternfly/react-core';

## Green Themed Line Chart
```js
import React from 'react';
import { Chart, ChartGroup, ChartLegend, ChartLine, ChartTheme, ChartAxis } from '@patternfly/react-charts';
import { Grid, GridItem, Text, TextVariants } from '@patternfly/react-core';

<div style={{ display: 'flex-inline' }}>
  <div style={{ width: 450, height: 360 }}>
    <div>
      <Chart theme={ChartTheme.light.green}>
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
    <div className="chart-legend">
      <ChartLegend
        data={[{ name: 'Cats' }, { name: 'Dogs', symbol: { type: 'dash' } }, { name: 'Birds' }, { name: 'Mice' }]}
        title="Average number of pets"
        height={50}
        theme={ChartTheme.light.green}
      />
    </div>
  </div>
</div>
```

## Multi-color Themed Line Chart
```js
import React from 'react';
import { Chart, ChartGroup, ChartLegend, ChartLine, ChartTheme, ChartAxis } from '@patternfly/react-charts';
import { Grid, GridItem, Text, TextVariants } from '@patternfly/react-core';

<div style={{ display: 'flex-inline' }}>
  <div style={{ width: 450, height: 360 }}>
    <div>
      <Chart theme={ChartTheme.light.multi}>
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
    <div className="chart-legend">
      <ChartLegend
        data={[{ name: 'Cats' }, { name: 'Dogs', symbol: { type: 'dash' } }, { name: 'Birds' }, { name: 'Mice' }]}
        title="Average number of pets"
        height={50}
        theme={ChartTheme.light.multi}
      />
    </div>
  </div>
</div>
```
