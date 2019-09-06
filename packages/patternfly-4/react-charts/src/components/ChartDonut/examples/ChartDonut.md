---
title: 'Donut'
section: 'charts'
typescript: true
propComponents: ['ChartDonut']
---

import { ChartDonut, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';
import './chart-donut.scss';

## Simple donut chart
```js
import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

<div>
  <div className="donut-chart">
    <ChartDonut
      ariaDesc="Average number of pets"
      ariaTitle="Donut chart example"
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      labels={datum => `${datum.x}: ${datum.y}%`}
      subTitle="Pets"
      title="100"
    />
  </div>
</div>
```

## Donut chart with right aligned legend
```js
import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

<div>
  <div className="donut-chart-legend-right">
    <ChartDonut
      ariaDesc="Average number of pets"
      ariaTitle="Donut chart example"
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      labels={datum => `${datum.x}: ${datum.y}%`}
      legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
      legendOrientation="vertical"
      legendPosition="right"
      subTitle="Pets"
      title="100"
      width={350}
    />
  </div>
</div>
```

## Multi-color (ordered) donut chart with right aligned legend
```js
import React from 'react';
import { ChartDonut, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';

<div>
  <div className="donut-chart-legend-right">
    <ChartDonut
      ariaDesc="Average number of pets"
      ariaTitle="Donut chart example"
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      labels={datum => `${datum.x}: ${datum.y}%`}
      legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
      legendOrientation="vertical"
      legendPosition="right"
      subTitle="Pets"
      title="100"
      themeColor={ChartThemeColor.multiOrdered}
      themeVariant={ChartThemeVariant.light}
      width={350}
    />
  </div>
</div>
```

## Donut chart with bottom aligned legend
```js
import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

<div>
  <div className="donut-chart-legend-bottom">
    <ChartDonut
      ariaDesc="Average number of pets"
      ariaTitle="Donut chart example"
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      donutHeight={230}
      donutOrientation="top"
      height={275}
      labels={datum => `${datum.x}: ${datum.y}%`}
      legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
      legendPosition="bottom"
      legendWidth={225}
      subTitle="Pets"
      title="100"
      width={300}
    />
  </div>
</div>
```

## Small donut chart
```js
import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

<div>
  <div className="donut-chart-sm">
    <ChartDonut
      ariaDesc="Average number of pets"
      ariaTitle="Donut chart example"
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      height={150}
      labels={datum => `${datum.x}: ${datum.y}%`}
      subTitle="Pets"
      title="100"
      width={150}
    />
  </div>
</div>
```

## Small donut chart with right aligned legend
```js
import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

<div>
  <div className="donut-chart-legend-right-sm">
    <ChartDonut
      ariaDesc="Average number of pets"
      ariaTitle="Donut chart example"
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      height={150}
      labels={datum => `${datum.x}: ${datum.y}%`}
      legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
      legendOrientation="vertical"
      legendPosition="right"
      subTitle="Pets"
      title="100"
      width={275}
    />
  </div>
</div>
```

## Small donut chart with right aligned legend and bottom aligned subtitle
```js
import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

<div>
  <div className="donut-chart-legend-right-subtitle-bottom-sm">
    <ChartDonut
      ariaDesc="Average number of pets"
      ariaTitle="Donut chart example"
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      donutHeight={150}
      height={175}
      labels={datum => `${datum.x}: ${datum.y}%`}
      legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
      legendOrientation="vertical"
      legendPosition="right"
      subTitle="Pets"
      subTitlePosition="bottom"
      title="100"
      width={275}
    />
  </div>
</div>
```

## Small donut chart with bottom aligned legend and right aligned subtitle
```js
import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

<div>
  <div className="donut-chart-legend-bottom-subtitle-right-sm">
    <ChartDonut
      ariaDesc="Average number of pets"
      ariaTitle="Donut chart example"
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      donutHeight={150}
      height={200}
      labels={datum => `${datum.x}: ${datum.y}%`}
      legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
      legendPosition="bottom"
      subTitle="Pets"
      subTitlePosition="right"
      title="100"
      width={300}
    />
  </div>
</div>
```
