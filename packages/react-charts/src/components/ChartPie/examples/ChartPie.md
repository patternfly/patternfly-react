---
id: Pie chart
section: charts
propComponents: ['ChartPie']
hideDarkMode: true
---

import { ChartPie, ChartThemeColor } from '@patternfly/react-charts';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

PatternFly React charts are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

Learn to build a pie chart using a Katacoda tutorial starting with a simple chart, adding tooltips, a legend, and concluding by changing the theme color. You'll learn how to use React chart components together to build a consistent user experience.

[Start course](https://katacoda.com/patternfly/courses/react-charts/pie-chart)

## Examples
### Basic with right aligned legend
```js
import React from 'react';
import { ChartPie } from '@patternfly/react-charts';

<div style={{ height: '230px', width: '350px' }}>
  <ChartPie
    ariaDesc="Average number of pets"
    ariaTitle="Pie chart example"
    constrainToVisibleArea
    data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
    height={230}
    labels={({ datum }) => `${datum.x}: ${datum.y}`}
    legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
    legendOrientation="vertical"
    legendPosition="right"
    name="chart1"
    padding={{
      bottom: 20,
      left: 20,
      right: 140, // Adjusted to accommodate legend
      top: 20
    }}
    width={350}
  />
</div>
```

### Orange with right aligned legend
```js
import React from 'react';
import { ChartPie, ChartThemeColor } from '@patternfly/react-charts';

<div style={{ height: '230px', width: '350px' }}>
  <ChartPie
    ariaDesc="Average number of pets"
    ariaTitle="Pie chart example"
    constrainToVisibleArea
    data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
    height={230}
    labels={({ datum }) => `${datum.x}: ${datum.y}`}
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
    themeColor={ChartThemeColor.orange}
    width={350}
  />
</div>
```

### Multi-color (ordered) with bottom aligned legend
```js
import React from 'react';
import { ChartPie, ChartThemeColor } from '@patternfly/react-charts';

<div style={{ height: '275px', width: '300px' }}>
  <ChartPie
    ariaDesc="Average number of pets"
    ariaTitle="Pie chart example"
    constrainToVisibleArea
    data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
    height={275}
    labels={({ datum }) => `${datum.x}: ${datum.y}`}
    legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
    legendPosition="bottom"
    name="chart3"
    padding={{
      bottom: 65,
      left: 20,
      right: 20,
      top: 20
    }}
    themeColor={ChartThemeColor.multiOrdered}
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

- For `ChartPie` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
