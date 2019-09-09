---
title: 'Sparkline'
section: 'charts'
typescript: true
propComponents: ['ChartArea']
---

import { ChartArea, ChartGroup, ChartLabel } from '@patternfly/react-charts';
import './chart-area.scss';

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
        containerComponent={<ChartVoronoiContainer labels={datum => `${datum.name}: ${datum.y}`} />}
        height={75}
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
