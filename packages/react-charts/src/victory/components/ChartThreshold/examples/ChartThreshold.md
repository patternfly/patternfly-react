---
id: Threshold chart
section: charts
propComponents: [
  'Chart',
  'ChartAxis',
  'ChartGroup',
  'ChartThreshold',
  'ChartVoronoiContainer'
]
hideDarkMode: true
---

import { createRef } from 'react';
import {
  Chart,
  ChartArea,
  ChartAxis,
  ChartGroup,
  ChartLegend,
  ChartThreshold,
  ChartThemeColor,
  ChartVoronoiContainer
} from '@patternfly/react-charts/victory';
import { getResizeObserver } from '@patternfly/react-core';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import chart_color_orange_300 from '@patternfly/react-tokens/dist/esm/chart_color_orange_300';
import { useEffect, useRef, useState } from 'react';


## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

The examples below are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library,
  along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Examples
### Multi-color (unordered) with responsive container
```ts file = "ChartThresholdMultiColorOrdered.tsx"

```

## Documentation
### Tips
- See Victory's [FAQ](https://formidable.com/open-source/victory/docs/faq)
- For single data points or zero values, you may want to set the `domain` prop
- `ChartLegend` may be used as a standalone component, instead of using `legendData`

### Note
Currently, the generated documentation below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

 - For `Chart` props, see [VictoryChart](https://formidable.com/open-source/victory/docs/victory-chart)
 - For `ChartArea` props, see [VictoryArea](https://formidable.com/open-source/victory/docs/victory-area)
 - For `ChartAxis` props, see [VictoryAxis](https://formidable.com/open-source/victory/docs/victory-axis)
 - For `ChartGroup` props, see [VictoryGroup](https://formidable.com/open-source/victory/docs/victory-group)
 - For `ChartLegend` props, see [VictoryLegend](https://formidable.com/open-source/victory/docs/victory-legend)
 - For `ChartThreshold` props, see [VictoryLine](https://formidable.com/open-source/victory/docs/victory-line)
 - For `ChartVoronoiContainer` props, see [VictoryVoronoiContainer](https://formidable.com/open-source/victory/docs/victory-voronoi-container)
