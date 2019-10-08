---
title: 'Donut'
section: 'charts'
typescript: true
propComponents: ['ChartDonut']
---

import { ChartDonut, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';
import './chart-donut.scss';

Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

PatternFly React charts are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

Learn to build a donut chart using a Katacoda tutorial starting with a simple chart, adding thresholds, tooltips, a legend, and concluding by changing the theme color. You'll learn how to use React chart components together to build a consistent user experience.

[Start course](https://katacoda.com/patternfly/courses/charts/donut-chart)

## Examples
```js title=Simple-donut-chart
import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

<div>
  <div className="donut-chart">
    <ChartDonut
      ariaDesc="Average number of pets"
      ariaTitle="Donut chart example"
      constrainToVisibleArea={true}
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      labels={({ datum }) => `${datum.x}: ${datum.y}%`}
      subTitle="Pets"
      title="100"
    />
  </div>
</div>
```

```js title=Donut-chart-with-right-aligned-legend
import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

<div>
  <div className="donut-chart-legend-right">
    <ChartDonut
      ariaDesc="Average number of pets"
      ariaTitle="Donut chart example"
      constrainToVisibleArea={true}
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      labels={({ datum }) => `${datum.x}: ${datum.y}%`}
      legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
      legendOrientation="vertical"
      legendPosition="right"
      padding={{
        bottom: 20,
        left: 20,
        right: 140, // Adjusted to accommodate legend
        top: 20
      }}
      subTitle="Pets"
      title="100"
      width={350}
    />
  </div>
</div>
```

```js title=Multi-color-(ordered)-donut-chart-with-right-aligned-legend
import React from 'react';
import { ChartDonut, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';

<div>
  <div className="donut-chart-legend-right">
    <ChartDonut
      ariaDesc="Average number of pets"
      ariaTitle="Donut chart example"
      constrainToVisibleArea={true}
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      labels={({ datum }) => `${datum.x}: ${datum.y}%`}
      legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
      legendOrientation="vertical"
      legendPosition="right"
      padding={{
        bottom: 20,
        left: 20,
        right: 140, // Adjusted to accommodate legend
        top: 20
      }}
      subTitle="Pets"
      title="100"
      themeColor={ChartThemeColor.multiOrdered}
      width={350}
    />
  </div>
</div>
```

```js title=Donut-chart-with-bottom-aligned-legend
import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

<div>
  <div className="donut-chart-legend-bottom">
    <ChartDonut
      ariaDesc="Average number of pets"
      ariaTitle="Donut chart example"
      constrainToVisibleArea={true}
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      donutOrientation="top"
      height={275}
      labels={({ datum }) => `${datum.x}: ${datum.y}%`}
      legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
      legendPosition="bottom"
      legendWidth={225}
      padding={{
        bottom: 65, // Adjusted to accommodate legend
        left: 20,
        right: 20,
        top: 20
      }}
      subTitle="Pets"
      title="100"
      width={300}
    />
  </div>
</div>
```

```js title=Small-donut-chart
import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

<div>
  <div className="donut-chart-sm">
    <ChartDonut
      ariaDesc="Average number of pets"
      ariaTitle="Donut chart example"
      constrainToVisibleArea={true}
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      height={150}
      labels={({ datum }) => `${datum.x}: ${datum.y}%`}
      subTitle="Pets"
      title="100"
      width={150}
    />
  </div>
</div>
```

```js title=Small-donut-chart-with-right-aligned-legend
import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

<div>
  <div className="donut-chart-legend-right-sm">
    <ChartDonut
      ariaDesc="Average number of pets"
      ariaTitle="Donut chart example"
      constrainToVisibleArea={true}
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      height={150}
      labels={({ datum }) => `${datum.x}: ${datum.y}%`}
      legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
      legendOrientation="vertical"
      legendPosition="right"
      padding={{
        bottom: 20,
        left: 20,
        right: 145, // Adjusted to accommodate legend
        top: 20
      }}
      subTitle="Pets"
      title="100"
      width={275}
    />
  </div>
</div>
```

```js title=Small-donut-chart-with-right-aligned-legend-and-bottom-aligned-subtitle
import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

<div>
  <div className="donut-chart-legend-right-subtitle-bottom-sm">
    <ChartDonut
      ariaDesc="Average number of pets"
      ariaTitle="Donut chart example"
      constrainToVisibleArea={true}
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      height={165}
      labels={({ datum }) => `${datum.x}: ${datum.y}%`}
      legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
      legendOrientation="vertical"
      legendPosition="right"
      padding={{
        bottom: 25, // Adjusted to accommodate subTitle
        left: 20,
        right: 145, // Adjusted to accommodate legend
        top: 20
      }}
      subTitle="Pets"
      subTitlePosition="bottom"
      title="100"
      width={275}
    />
  </div>
</div>
```

```js title=Small-donut-chart-with-bottom-aligned-legend-and-right-aligned-subtitle
import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

<div>
  <div className="donut-chart-legend-bottom-subtitle-right-sm">
    <ChartDonut
      ariaDesc="Average number of pets"
      ariaTitle="Donut chart example"
      constrainToVisibleArea={true}
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      height={200}
      labels={({ datum }) => `${datum.x}: ${datum.y}%`}
      legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
      legendPosition="bottom"
      padding={{
        bottom: 70, // Adjusted to accommodate legend
        left: 20,
        right: 50, // Adjusted to accommodate subTitle
        top: 20
      }}
      subTitle="Pets"
      subTitlePosition="right"
      title="100"
      width={300}
    />
  </div>
</div>
```

## Tips

- See Victory's [FAQ](https://formidable.com/open-source/victory/docs/faq)
- For single data points or zero values, you may want to set the `domain` prop
- `ChartLegend` may be used as a standalone component, instead of using `legendData`

## Docs
Currently, the generated documention below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

 - For `ChartDonut` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
