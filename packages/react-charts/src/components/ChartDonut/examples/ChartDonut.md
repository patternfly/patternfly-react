---
id: Donut chart
section: charts
propComponents: [
  'ChartDonut'
]
hideDarkMode: true
---

import { ChartDonut, ChartThemeColor } from '@patternfly/react-charts';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

PatternFly React charts are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

Learn to build a donut chart using a Katacoda tutorial starting with a simple chart, adding thresholds, tooltips, a legend, and concluding by changing the theme color. You'll learn how to use React chart components together to build a consistent user experience.

[Start course](https://katacoda.com/patternfly/courses/react-charts/donut-chart)

## Examples
### Basic
```js
import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

<div style={{ height: '230px', width: '230px' }}>
  <ChartDonut
    ariaDesc="Average number of pets"
    ariaTitle="Donut chart example"
    constrainToVisibleArea
    data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
    labels={({ datum }) => `${datum.x}: ${datum.y}%`}
    name="chart1"
    subTitle="Pets"
    title="100"
  />
</div>
```

### Right aligned legend
```js
import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

<div style={{ height: '230px', width: '350px' }}>
  <ChartDonut
    ariaDesc="Average number of pets"
    ariaTitle="Donut chart example"
    constrainToVisibleArea
    data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
    labels={({ datum }) => `${datum.x}: ${datum.y}%`}
    legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
    legendOrientation="vertical"
    legendPosition="right"
    name="chart2"
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
```

### Multi-color (ordered) with right aligned legend
```js
import React from 'react';
import { ChartDonut, ChartThemeColor } from '@patternfly/react-charts';

<div style={{ height: '230px', width: '350px' }}>
  <ChartDonut
    ariaDesc="Average number of pets"
    ariaTitle="Donut chart example"
    constrainToVisibleArea
    data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
    labels={({ datum }) => `${datum.x}: ${datum.y}%`}
    legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
    legendOrientation="vertical"
    legendPosition="right"
    name="chart3"
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
```

### Bottom aligned legend
```js
import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

<div style={{ height: '275px', width: '300px' }}>
  <ChartDonut
    ariaDesc="Average number of pets"
    ariaTitle="Donut chart example"
    constrainToVisibleArea
    data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
    donutOrientation="top"
    height={275}
    labels={({ datum }) => `${datum.x}: ${datum.y}%`}
    legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
    legendPosition="bottom"
    legendWidth={225}
    name="chart4"
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
```

### Small
```js
import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

<div style={{ height: '150px', width: '150px' }}>
  <ChartDonut
    ariaDesc="Average number of pets"
    ariaTitle="Donut chart example"
    constrainToVisibleArea
    data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
    height={150}
    labels={({ datum }) => `${datum.x}: ${datum.y}%`}
    name="chart5"
    subTitle="Pets"
    title="100"
    width={150}
  />
</div>
```

### Small with right aligned legend
```js
import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

<div style={{ height: '150px', width: '275px' }}>
  <ChartDonut
    ariaDesc="Average number of pets"
    ariaTitle="Donut chart example"
    constrainToVisibleArea
    data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
    height={150}
    labels={({ datum }) => `${datum.x}: ${datum.y}%`}
    legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
    legendOrientation="vertical"
    legendPosition="right"
    name="chart6"
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
```

### Small with bottom aligned subtitle
```js
import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

<div style={{ height: '165px', width: '275px' }}>
  <ChartDonut
    ariaDesc="Average number of pets"
    ariaTitle="Donut chart example"
    constrainToVisibleArea
    data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
    height={165}
    labels={({ datum }) => `${datum.x}: ${datum.y}%`}
    legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
    legendOrientation="vertical"
    legendPosition="right"
    name="chart7"
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
```

### Small with right aligned subtitle
```js
import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

<div style={{ height: '200px', width: '300px' }}>
  <ChartDonut
    ariaDesc="Average number of pets"
    ariaTitle="Donut chart example"
    constrainToVisibleArea
    data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
    height={200}
    labels={({ datum }) => `${datum.x}: ${datum.y}%`}
    legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
    legendPosition="bottom"
    name="chart8"
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
```

## Documentation
### Tips
- See Victory's [FAQ](https://formidable.com/open-source/victory/docs/faq)
- For single data points or zero values, you may want to set the `domain` prop
- `ChartLegend` may be used as a standalone component, instead of using `legendData`

### Note
Currently, the generated documention below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

- For `ChartDonut` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
