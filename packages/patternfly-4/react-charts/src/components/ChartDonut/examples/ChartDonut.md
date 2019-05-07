---
title: 'Donut chart'
section: 'charts'
---

## Blue theme donut chart

import { ChartDonut, ChartLabel, ChartLegend, ChartTheme } from '@patternfly/react-charts';
import { Grid, GridItem, Text, TextVariants } from '@patternfly/react-core';
import './chart-donut.scss';

```js
import React from 'react';

<div style={{ display: 'inline-flex' }}>
  <div style={{ height: 450, width: 450 }}>
    <svg style={{ position: 'absolute' }} height={this.size} width={this.size}>
      <ChartLabel style={{ fontSize: 20 }} text="100" textAnchor="middle" verticalAnchor="middle" x={225} y={200} />
      <ChartLabel style={{ fill: '#bbb' }} text="Pets" textAnchor="middle" verticalAnchor="middle" x={255} y={250} />
    </svg>
    <ChartDonut
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      labels={datum => `${datum.x}: ${datum.y}`}
      theme={ChartTheme.light.blue}
    />
  </div>
  <ChartLegend
    data={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }]}
    orientation={'vertical'}
    theme={ChartTheme.light.blue}
    y={160}
  />
</div>
```

## Multi-color theme donut chart
```js
import React from 'react';

<div>
  <div style={{ height: 450, width: 450 }}>
    <svg style={{ position: 'absolute' }} height={this.size} width={this.size}>
      <ChartLabel style={{ fontSize: 20 }} text="100" textAnchor="middle" verticalAnchor="middle" x={225} y={200} />
      <ChartLabel style={{ fill: '#bbb' }} text="Pets" textAnchor="middle" verticalAnchor="middle" x={255} y={250} />
    </svg>
    <ChartDonut
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      labels={datum => `${datum.x}: ${datum.y}`}
      theme={ChartTheme.light.multi}
    />
  </div>
  <ChartLegend
    data={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }]}
    orientation={'horizontal'}
    theme={ChartTheme.light.multi}
    height={35}
    x={140}
  />
</div>
```
