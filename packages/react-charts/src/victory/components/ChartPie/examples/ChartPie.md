---
id: Pie chart
section: charts
propComponents: ['ChartPie']
hideDarkMode: true
---

import { ChartPie, ChartThemeColor } from '@patternfly/react-charts/victory';
import chart_theme_blue_ColorScale_100 from '@patternfly/react-tokens/dist/esm/chart_theme_blue_ColorScale_100';
import chart_theme_yellow_ColorScale_100 from '@patternfly/react-tokens/dist/esm/chart_theme_yellow_ColorScale_100';
import chart_theme_orange_ColorScale_300 from '@patternfly/react-tokens/dist/esm/chart_theme_orange_ColorScale_300';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

The examples below are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Examples
### Basic with right aligned legend
```ts file = "ChartPieBasicRightLegend.tsx"

```

### Multi-color (ordered) with bottom aligned legend
```ts file = "ChartPieMultiColorBottomLegend.tsx"

```

### Custom color scale

This demonstrates how to apply a custom color scale.

```ts file = "ChartPieCustomColorScale.tsx"

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
