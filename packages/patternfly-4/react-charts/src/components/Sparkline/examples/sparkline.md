---
title: 'Sparkline'
section: 'charts'
typescript: true
propComponents: ['ChartArea']
---

import { ChartArea, ChartGroup, ChartLabel, ChartThemeColor } from '@patternfly/react-charts';
import './sparkline.scss';

## Sparkline chart
```js
import React from 'react';
import { ChartArea, ChartGroup, ChartLabel } from '@patternfly/react-charts';

<div>
  <div className="sparkline-container">
    <div className="sparkline-chart">
      <ChartGroup
        ariaDesc="Average number of pets"
        ariaTitle="Sparkline chart example"
        containerComponent={<ChartVoronoiContainer labels={datum => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
        height={100}
        maxDomain={{y: 9}}
        padding={0}
        width={400}
      >
        <ChartArea
          data={[
            { name: 'Cats', x: 1, y: 3 },
            { name: 'Cats', x: 2, y: 4 },
            { name: 'Cats', x: 3, y: 8 },
            { name: 'Cats', x: 4, y: 6 }
          ]}
        />
      </ChartGroup>
    </div>
    <ChartLabel text="CPU utilization"/>
  </div>
</div>
```

## Green, sparkline chart
This demonstrates an alternate way of applying tooltips using CSS overflow
```js
import React from 'react';
import { ChartArea, ChartGroup, ChartLabel, ChartThemeColor } from '@patternfly/react-charts';

<div>
  <div className="sparkline-container sparkline-overflow">
    <div className="sparkline-chart">
      <ChartGroup
        ariaDesc="Average number of pets"
        ariaTitle="Sparkline chart example"
        containerComponent={<ChartVoronoiContainer labels={datum => `${datum.name}: ${datum.y}`} />}
        height={100}
        maxDomain={{y: 9}}
        padding={0}
        themeColor={ChartThemeColor.green}
        width={400}
      >
        <ChartArea
          data={[
            { name: 'Cats', x: 1, y: 3 },
            { name: 'Cats', x: 2, y: 4 },
            { name: 'Cats', x: 3, y: 8 },
            { name: 'Cats', x: 4, y: 6 }
          ]}
        />
      </ChartGroup>
    </div>
    <ChartLabel text="CPU utilization"/>
  </div>
</div>
```
