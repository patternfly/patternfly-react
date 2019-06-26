---
title: 'Area'
section: 'charts'
typescript: true
propComponents: ['Chart', 'ChartArea', 'ChartGroup', 'ChartVoronoiContainer']
---

import { Chart, ChartArea, ChartAxis, ChartGroup, ChartLegend, ChartLegendWrapper, ChartVoronoiContainer } from '@patternfly/react-charts';
import './chart-area.scss';

## Simple area chart with right-aligned legend
```js
import React from 'react';
import { Chart, ChartArea, ChartGroup } from '@patternfly/react-charts';

<div>
  <div className="area-chart-legend-right">
    <Chart
      legendData={[{ name: 'Cats' }]}
      legendOrientation="vertical"
      legendPosition="right"
      height={200}
      padding={{
        right: 200
      }}
      width={800}
    >
      <ChartGroup>
        <ChartArea
          data={[
            { name: 'Cats', x: 1, y: 3 },
            { name: 'Cats', x: 2, y: 4 },
            { name: 'Cats', x: 3, y: 8 },
            { name: 'Cats', x: 4, y: 6 }
          ]}
        />
      </ChartGroup>
    </Chart>
  </div>
</div>
```

## Cyan area chart with tooltip and right-aligned legend
```js
import React from 'react';
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';

<div>
  <div className="area-chart-legend-right">
    <Chart
      containerComponent={<ChartVoronoiContainer labels={datum => `${datum.name}: ${datum.y}`} />}
      legendData={[{ name: 'Cats' }, { name: 'Birds' }, { name: 'Dogs' }]}
      legendOrientation="vertical"
      legendPosition="right"
      height={200}
      padding={{
        right: 200
      }}
      themeColor={ChartThemeColor.cyan}
      width={800}
    >
      <ChartAxis />
      <ChartAxis dependentAxis showGrid />
      <ChartGroup>
        <ChartArea
          data={[
            { name: 'Cats', x: 1, y: 3 },
            { name: 'Cats', x: 2, y: 4 },
            { name: 'Cats', x: 3, y: 8 },
            { name: 'Cats', x: 4, y: 6 }
          ]}
        />
        <ChartArea
          data={[
            { name: 'Birds', x: 1, y: 2 },
            { name: 'Birds', x: 2, y: 3 },
            { name: 'Birds', x: 3, y: 4 },
            { name: 'Birds', x: 4, y: 5 },
            { name: 'Birds', x: 5, y: 6 }
          ]}
        />
        <ChartArea
          data={[
            { name: 'Dogs', x: 1, y: 1 },
            { name: 'Dogs', x: 2, y: 2 },
            { name: 'Dogs', x: 3, y: 3 },
            { name: 'Dogs', x: 4, y: 2 },
            { name: 'Dogs', x: 5, y: 4 }
          ]}
        />
      </ChartGroup>
    </Chart>
  </div>
</div>
```

## Multi-color area chart with tooltip and bottom-aligned legend
```js
import React from 'react';
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartThemeColor } from '@patternfly/react-charts';

<div>
  <div className="area-chart-legend-bottom">
    <Chart
      containerComponent={<ChartVoronoiContainer labels={datum => `${datum.name}: ${datum.y}`} />}
      legendData={[{ name: 'Cats' }, { name: 'Birds' }, { name: 'Dogs' }]}
      legendPosition="bottom"
      height={225}
      padding={{
        bottom: 75
      }}
      themeColor={ChartThemeColor.multi}
      width={650}
    >
      <ChartAxis />
      <ChartAxis dependentAxis showGrid />
      <ChartGroup>
        <ChartArea
          data={[
            { name: 'Cats', x: 1, y: 3 },
            { name: 'Cats', x: 2, y: 4 },
            { name: 'Cats', x: 3, y: 8 },
            { name: 'Cats', x: 4, y: 6 }
          ]}
        />
        <ChartArea
          data={[
            { name: 'Birds', x: 1, y: 2 },
            { name: 'Birds', x: 2, y: 3 },
            { name: 'Birds', x: 3, y: 4 },
            { name: 'Birds', x: 4, y: 5 },
            { name: 'Birds', x: 5, y: 6 }
          ]}
        />
        <ChartArea
          data={[
            { name: 'Dogs', x: 1, y: 1 },
            { name: 'Dogs', x: 2, y: 2 },
            { name: 'Dogs', x: 3, y: 3 },
            { name: 'Dogs', x: 4, y: 2 },
            { name: 'Dogs', x: 5, y: 4 }
          ]}
        />
      </ChartGroup>
    </Chart>
  </div>
</div>
```
