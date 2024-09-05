---
id: Pie chart
section: charts
propComponents: ['ChartPie']
hideDarkMode: true
---

import { ChartPie, ChartThemeColor } from '@patternfly/react-charts';
import chart_theme_blue_ColorScale_100 from '@patternfly/react-tokens/dist/esm/chart_theme_blue_ColorScale_100';
import chart_theme_gold_ColorScale_100 from '@patternfly/react-tokens/dist/esm/chart_theme_gold_ColorScale_100';
import chart_theme_orange_ColorScale_300 from '@patternfly/react-tokens/dist/esm/chart_theme_orange_ColorScale_300';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

PatternFly React charts are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

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

### Custom color scale

This demonstrates how to apply a custom color scale.

```js
import React from 'react';
import { ChartPie, ChartThemeColor } from '@patternfly/react-charts';
import chart_theme_blue_ColorScale_100 from '@patternfly/react-tokens/dist/esm/chart_theme_blue_ColorScale_100';
import chart_theme_gold_ColorScale_100 from '@patternfly/react-tokens/dist/esm/chart_theme_gold_ColorScale_100';
import chart_theme_orange_ColorScale_300 from '@patternfly/react-tokens/dist/esm/chart_theme_orange_ColorScale_300';

<div style={{ height: '230px', width: '450px' }}>
  <ChartPie
    ariaDesc="Average number of pets"
    ariaTitle="Pie chart example"
    colorScale={[ chart_theme_blue_ColorScale_100.var, chart_theme_orange_ColorScale_300.var, chart_theme_gold_ColorScale_100.var, chart_theme_blue_ColorScale_100.var, ]}
    constrainToVisibleArea
    data={[{ x: 'Sky', y: 38 }, { x: 'Shady side of pyramid', y: 7 }, { x: 'Sunny side of pyramid', y: 17 }, { x: 'Sky', y: 38 }]}
    height={230}
    labels={({ datum }) => `${datum.x}`}
    legendData={[{ name: 'Sky' }, { name: 'Shady side of pyramid' }, { name: 'Sunny side of pyramid' }]}
    legendOrientation="vertical"
    legendPosition="right"
    name="chart2"
    padding={{
      bottom: 20,
      left: 20,
      right: 240, // Adjusted to accommodate legend
      top: 20
    }}
    themeColor={ChartThemeColor.orange}
    width={450}
  />
</div>
```

## Documentation
### Tips
- See Victory's [FAQ](https://formidable.com/open-source/victory/docs/faq)
- For single data points or zero values, you may want to set the `domain` prop
- `ChartLegend` may be used as a standalone component, instead of using `legendData`

### Note
Currently, the generated documentation below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

- For `ChartPie` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
