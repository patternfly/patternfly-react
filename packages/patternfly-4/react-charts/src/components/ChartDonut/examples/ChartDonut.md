---
title: 'Donut chart'
section: 'charts'
typescript: true
propComponents: [
  'ChartDonut'
]
---

import { ChartDonut, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

PatternFly React charts are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

Learn to build a donut chart using a Katacoda tutorial starting with a simple chart, adding thresholds, tooltips, a legend, and concluding by changing the theme color. You'll learn how to use React chart components together to build a consistent user experience.

[Start course](https://katacoda.com/patternfly/courses/charts/donut-chart)

## Examples
```js title=Basic
import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

Basic = (
  <div style={{ height: '230px', width: '230px' }}>
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
)
```

```js title=Right-aligned-legend
import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

RightAlignedLegend = (
  <div style={{ height: '230px', width: '350px' }}>
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
)
```

```js title=Multi--color-right-aligned-legend
import React from 'react';
import { ChartDonut, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';

MultiColorRightAlignedLegend = (
  <div style={{ height: '230px', width: '350px' }}>
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
)
```

```js title=Bottom-aligned-legend
import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

BottomAlignedLegend = (
  <div style={{ height: '275px', width: '300px' }}>
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
)
```

```js title=Small
import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

Small = (
  <div style={{ height: '150px', width: '150px' }}>
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
)
```

```js title=Small-with-right-aligned-legend
import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

SmallWithRightLegend = (
  <div style={{ height: '150px', width: '275px' }}>
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
)
```

```js title=Small-with-bottom-aligned-subtitle
import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

SmallBottomSubtitle = (
  <div style={{ height: '165px', width: '275px' }}>
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
)
```

```js title=Small-with-right-aligned-subtitle
import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

SmallRightSubtitle = (
  <div style={{ height: '200px', width: '300px' }}>
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
)
```

## Documentation

- See Victory's [FAQ](https://formidable.com/open-source/victory/docs/faq)
- For single data points or zero values, you may want to set the `domain` prop
- `ChartLegend` may be used as a standalone component, instead of using `legendData`

Currently, the generated documention below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

 - For `ChartDonut` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
