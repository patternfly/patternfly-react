---
id: Box plot chart
section: components
subsection: charts
propComponents: [
  'Chart',
  'ChartAxis',
  'ChartBoxPlot',
  'ChartCursorFlyout',
  'ChartCursorTooltip',
  'ChartVoronoiContainer'
]
hideDarkMode: true
---

import { Chart, ChartAxis, ChartBoxPlot, ChartCursorFlyout, ChartCursorTooltip, ChartLegendTooltip, ChartThemeColor, ChartThreshold, ChartVoronoiContainer, createContainer } from '@patternfly/react-charts/victory';
import { VictoryZoomContainer } from 'victory-zoom-container';
import chart_color_orange_300 from '@patternfly/react-tokens/dist/esm/chart_color_orange_300';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

The examples below are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.


## Examples
### Basic with right aligned legend
```ts file = "ChartBoxPlotRightAlignedLegend.tsx"

```

### Labels with bottom aligned legend

This demonstrates how to display labels.

```ts file= "ChartBoxPlotLabelsLegend.tsx"

```

### Embedded legend

This demonstrates how to embed a legend within a tooltip. Combining cursor and voronoi containers is required to display tooltips with a vertical cursor.

```ts file = "ChartBoxPlotEmbeddedLegend.tsx"

```

### Embedded HTML

This demonstrates how to embed HTML within a tooltip. Combining cursor and voronoi containers is required to display tooltips with a vertical cursor.

```ts file = "ChartBoxPlotEmbeddedHtml.tsx"

```

## Documentation
### Tips
- See Victory's [FAQ](https://formidable.com/open-source/victory/docs/faq)
- For single data points or zero values, you may want to set the `domain` prop
- The `theme` and `themeColor` props should be applied at the most top level component

### Note
Currently, the generated documentation below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

- For `Chart` props, see [VictoryChart](https://formidable.com/open-source/victory/docs/victory-chart)
- For `ChartAxis` props, see [VictoryAxis](https://formidable.com/open-source/victory/docs/victory-axis)
- For `ChartBoxPlot` props, see [VictoryBoxPlot](https://formidable.com/open-source/victory/docs/victory-box-plot)
- For `ChartVoronoiContainer` props, see [VictoryVoronoiContainer](https://formidable.com/open-source/victory/docs/victory-voronoi-container)
