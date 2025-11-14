---
id: Bullet chart
section: components
subsection: charts
propComponents: [
  'ChartAxis',
  'ChartBullet',
  'ChartContainer'
]
hideDarkMode: true
---

import { createRef } from 'react';
import { ChartAxis, ChartBullet, ChartContainer, ChartThemeColor } from '@patternfly/react-charts/victory';
import { getResizeObserver } from '@patternfly/react-core';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

The examples below are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Examples
### Basic
```ts file = "ChartBulletBasic.tsx"
```

### Segmented primary measure
```ts file = "ChartBulletSegmentedMeasure.tsx"

```

### Responsive container with bottom aligned legend

This demonstrates a responsive legend which wraps when items are wider than its container.

```ts file = "ChartBulletResponsiveLegend.tsx"

```

### Primary measure dot
```ts file = "ChartBulletPrimaryDot.tsx"

```

### Error measure and custom axis ticks

This is a green bullet chart with error measure and custom axis ticks with 3 legend items per row.

```ts file = "ChartBulletErrorCustomTicks.tsx"

```

### Primary measure outside range

This is a yellow bullet chart with primary measure greater than max range.

```ts file = "ChartBulletOutsideRange.tsx"

```

### Negative primary measure

This bullet chart with negative primary measure is for measures considered to be bad when they are low.

```ts file = "ChartBulletNegativeMeasure.tsx"

```

### Reversed with right aligned legend

This reversed bullet chart with right aligned legend is for measures considered to be good when they are low.

```ts file = "ChartBulletReversed.tsx"

```

### Negative and positive primary measures

This bullet chart with negative and positive primary measures has 4 legend items per row.

```ts file = "ChartBulletNegativePositiveMeasure.tsx"

```

### Vertical with segmented primary measure
```ts file = "ChartBulletVerticalSegmented.tsx"

```

### Vertical primary measure outside max range
```ts file = "ChartBulletVerticalMaxRange.tsx"

```

### Custom labels
```ts file = "ChartBulletCustomLabels.tsx"

```

### Custom size
```ts file = "ChartBulletCustomSize.tsx"

```

### Horizontal group
```ts file = "ChartBulletHorizontalGroup.tsx"

```

### Vertical group
```ts file = "ChartBulletVerticalGroup.tsx"

```

### Horizontal group with title
```ts file = "ChartBulletHorizontalGroupTitle.tsx"

```

### Vertical group with title
```ts file = "ChartBulletVerticalGroupTitle.tsx"

```

## Documentation
### Tips
- See Victory's [FAQ](https://formidable.com/open-source/victory/docs/faq)
- `ChartLegend` may be used as a standalone component, instead of using `legendData`

### Note
Currently, the generated documentation below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

- For `ChartAxis` props, see [VictoryAxis](https://formidable.com/open-source/victory/docs/victory-axis)
- For `ChartBullet` props, see [VictoryBar](https://formidable.com/open-source/victory/docs/victory-bar)
- For `ChartContainer` props, see [VictoryContainer](https://formidable.com/open-source/victory/docs/victory-container)
