---
title: 'Pie'
section: 'charts'
typescript: true
propComponents: ['ChartLegend', 'ChartPie']
---

import { ChartPie, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';
import './chart-pie.scss';

Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

## Tutorial

PatternFly React charts are based on the [Victory chart](https://formidable.com/open-source/victory/docs/victory-chart/) library, 
along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React 
based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

In this tutorial, we will build a bar chart together - starting with a simple chart, adding tooltips, a legend,
and concluding by changing the theme color. You'll learn how to use React chart components together to build a 
consistent user experience.

[Start course](https://katacoda.com/patternfly/courses/charts/pie-chart)

## Simple pie chart with right aligned legend
```js
import React from 'react';
import { ChartPie } from '@patternfly/react-charts';

<div>
  <div className="pie-chart-legend-right">
    <ChartPie
      ariaDesc="Average number of pets"
      ariaTitle="Pie chart example"
      constrainToVisibleArea={true}
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      height={230}
      labels={({ datum }) => `${datum.x}: ${datum.y}`}
      legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
      legendOrientation="vertical"
      legendPosition="right"
      padding={{
        bottom: 20,
        left: 20,
        right: 140, // Adjusted to accommodate legend
        top: 20
      }}
      width={350}
    />
  </div>
</div>
```

## Orange pie chart with right aligned legend
```js
import React from 'react';
import { ChartPie, ChartThemeColor } from '@patternfly/react-charts';

<div>
  <div className="pie-chart-legend-right">
    <ChartPie
      ariaDesc="Average number of pets"
      ariaTitle="Pie chart example"
      constrainToVisibleArea={true}
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      height={230}
      labels={({ datum }) => `${datum.x}: ${datum.y}`}
      legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
      legendOrientation="vertical"
      legendPosition="right"
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
</div>
```

## Multi-color (ordered) pie chart with bottom aligned legend
```js
import React from 'react';
import { ChartPie, ChartThemeColor } from '@patternfly/react-charts';

<div>
  <div className="pie-chart-legend-bottom">
    <ChartPie
      ariaDesc="Average number of pets"
      ariaTitle="Pie chart example"
      constrainToVisibleArea={true}
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      height={275}
      labels={({ datum }) => `${datum.x}: ${datum.y}`}
      legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
      legendPosition="bottom"
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
</div>
```

## Tips

- For single data points or zero values, you may want to set the `domain` prop. See Victory's <a href="https://formidable.com/open-source/victory/docs/faq/#my-axis-labels-are-showing-very-small-numbers-how-do-i-fix-this" target="_blank">FAQ</a>
- `ChartLegend` may be used as a standalone component, instead of using `legendData` and `legendPosition`

## Docs
Currently, the generated documention below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

 - For `ChartLegend` props, see <a href="https://formidable.com/open-source/victory/docs/victory-legend" target="_blank">VictoryLegend</a>
 - For `ChartPie` props, see <a href="https://formidable.com/open-source/victory/docs/victory-pie" target="_blank">VictoryPie</a>
