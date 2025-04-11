---
id: Bullet chart
section: charts
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

```ts file = "ChartBulletPrimaryRange.tsx"

```

### Negative primary measure

This bullet chart with negative primary measure is for measures considered to be bad when they are low.

```ts file = "ChartBulletNegativePrimary.tsx"

```

### Reversed with right aligned legend

This reversed bullet chart with right aligned legend is for measures considered to be good when they are low.

```ts file = "ChartBulletReversedLegend.tsx"

```

### Negative and positive primary measures

This bullet chart with negative and positive primary measures has 4 legend items per row.

```ts file = "ChartBulletNegativePositivePrimary.tsx"

```

### Vertical with segmented primary measure
```js
import { ChartBullet } from '@patternfly/react-charts/victory';

<div style={{ height: '500px', width: '500px' }}>
  <ChartBullet
    ariaDesc="Storage capacity"
    ariaTitle="Bullet chart example"
    comparativeWarningMeasureData={[{name: 'Warning', y: 88}]}
    comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
    constrainToVisibleArea
    height={500}
    horizontal={false}
    labels={({ datum }) => `${datum.name}: ${datum.y}`}
    maxDomain={{y: 100}}
    name="chart10"
    padding={{
      bottom: 125, // Adjusted to accommodate legend
      left: 400,
      right: 50,
      top: 50
    }}
    primarySegmentedMeasureData={[{ name: 'Measure', y: 25 }, { name: 'Measure', y: 60 }]}
    primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}
    qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}
    qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
    subTitle="Measure details"
    title="Text label"
    width={500}
  />
</div>
```

### Vertical primary measure outside max range
```js
import { ChartBullet, ChartThemeColor } from '@patternfly/react-charts/victory';

<div style={{ height: '500px', width: '500px' }}>
  <ChartBullet
    ariaDesc="Storage capacity"
    ariaTitle="Bullet chart example"
    comparativeWarningMeasureData={[{name: 'Warning', y: 100}]}
    comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
    constrainToVisibleArea
    height={500}
    horizontal={false}
    labels={({ datum }) => `${datum.name}: ${datum.y}`}
    maxDomain={{y: 125}}
    minDomain={{y: 50}}
    name="chart11"
    padding={{
      bottom: 125, // Adjusted to accommodate legend
      left: 400,
      right: 50,
      top: 50 // Adjusted to accommodate primary segmented measure tooltip
    }}
    primarySegmentedMeasureData={[{ name: 'Measure', y: 75 }, { name: 'Measure', y: 135 }]}
    primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}
    qualitativeRangeData={[{ name: 'Range', y: 85 }, { name: 'Range', y: 125 }]}
    qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
    subTitle="Measure details"
    title="Text label"
    themeColor={ChartThemeColor.yellow}
    width={500}
  />
</div>
```

### Custom labels
```js
import { ChartAxis, ChartBullet } from '@patternfly/react-charts/victory';

<div style={{ height: '150px', width: '600px' }}>
  <ChartBullet
    ariaDesc="Storage capacity"
    ariaTitle="Bullet chart example"
    axisComponent={
      <ChartAxis 
        tickValues={[0, 25, 50, 75, 100]}
        tickFormat={val => {
          switch (val) {
            case 0:
              return 'New';
            case 25:
              return 'Beginner';
            case 50:
              return 'Intermediate';
            case 75:
              return 'Advanced';
            case 100:
              return 'Expert';
          }
        }}
      />
    }
    comparativeWarningMeasureData={[{ name: 'Warning', y: 88 }]}
    constrainToVisibleArea
    height={150}
    labels={({ datum }) => `${datum.name}: ${datum.y}`}
    maxDomain={{y: 100}}
    name="chart12"
    primarySegmentedMeasureData={[{ name: 'Measure', y: 60 }]}
    qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}
    width={600}
  />
</div>
```

### Custom size
```js
import { ChartBullet } from '@patternfly/react-charts/victory';

<div style={{ height: '200px', width: '600px' }}>
  <ChartBullet
    ariaDesc="Storage capacity"
    ariaTitle="Bullet chart example"
    bulletSize={160}
    comparativeWarningMeasureData={[{ name: 'Warning', y: 88 }]}
    comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
    height={200}
    labels={({ datum }) => `${datum.name}: ${datum.y}`}
    maxDomain={{y: 100}}
    name="chart13"
    padding={{
      bottom: 50,
      left: 150, // Adjusted to accommodate labels
      right: 50,
      top: 50
    }}
    primarySegmentedMeasureData={[{ name: 'Measure', y: 60 }]}
    primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }]}
    qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}
    qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
    subTitle="Measure details"
    title="Text label"
    width={600}
  />
</div>
```

### Horizontal group
```js
import { ChartBullet, ChartContainer } from '@patternfly/react-charts/victory';

<div style={{ height: '500px', width: '600px' }}>
  <ChartContainer 
      title="Bullet chart example"
      height={500}
      width={600}
    >
    <ChartBullet
      comparativeWarningMeasureData={[{name: 'Warning', y: 78}]}
      constrainToVisibleArea
      height={500}
      labels={({ datum }) => `${datum.name}: ${datum.y}`}
      maxDomain={{y: 100}}
      name="chart14"
      padding={{
        bottom: 100, // Adjusted to accommodate legend
        left: 150, // Adjusted to accommodate labels
        right: 50,
        top: 75
      }}
      primarySegmentedMeasureData={[{ name: 'Measure', y: 15 }, { name: 'Measure', y: 50 }]}
      qualitativeRangeData={[{ name: 'Range', y: 40 }, { name: 'Range', y: 65 }]}
      standalone={false}
      subTitle="Measure details"
      title="Text label"
      width={600}
    />
    <ChartBullet
      comparativeWarningMeasureData={[{name: 'Warning', y: 88}]}
      constrainToVisibleArea
      height={500}
      labels={({ datum }) => `${datum.name}: ${datum.y}`}
      maxDomain={{y: 100}}
      name="chart15"
      padding={{
        bottom: 100, // Adjusted to accommodate legend
        left: 150, // Adjusted to accommodate labels
        right: 50,
        top: 300
      }}
      primarySegmentedMeasureData={[{ name: 'Measure', y: 25 }, { name: 'Measure', y: 60 }]}
      qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}
      standalone={false}
      subTitle="Measure details"
      title="Text label"
      width={600}
    />
    <ChartBullet
      comparativeWarningMeasureData={[{name: 'Warning', y: 98}]}
      constrainToVisibleArea
      height={500}
      labels={({ datum }) => `${datum.name}: ${datum.y}`}
      maxDomain={{y: 100}}
      name="chart16"
      padding={{
        bottom: 100, // Adjusted to accommodate legend
        left: 150, // Adjusted to accommodate labels
        right: 50,
        top: 525
      }}
      primarySegmentedMeasureData={[{ name: 'Measure', y: 35 }, { name: 'Measure', y: 70 }]}
      qualitativeRangeData={[{ name: 'Range', y: 60 }, { name: 'Range', y: 85 }]}
      standalone={false}
      subTitle="Measure details"
      title="Text label"
      width={600}
    />
    <ChartBullet
      comparativeWarningMeasureData={[{name: 'Warning', y: 78}]}
      comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
      constrainToVisibleArea
      height={500}
      labels={({ datum }) => `${datum.name}: ${datum.y}`}
      maxDomain={{y: 100}}
      name="chart17"
      padding={{
        bottom: 100, // Adjusted to accommodate legend
        left: 150, // Adjusted to accommodate labels
        right: 50,
        top: 750
      }}
      primarySegmentedMeasureData={[{ name: 'Measure', y: 15 }, { name: 'Measure', y: 50 }]}
      primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}
      qualitativeRangeData={[{ name: 'Range', y: 40 }, { name: 'Range', y: 65 }]}
      qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
      standalone={false}
      subTitle="Measure details"
      title="Text label"
      width={600}
    />
  </ChartContainer>
</div>
```

### Vertical group
```js
import { ChartBullet, ChartContainer } from '@patternfly/react-charts/victory';

<div style={{ height: '600px', width: '500px' }}>
  <ChartContainer 
      title="Bullet chart example"
      height={600}
      width={500}
    >
    <ChartBullet
      comparativeWarningMeasureData={[{name: 'Warning', y: 78}]}
      comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
      constrainToVisibleArea
      height={600}
      horizontal={false}
      labels={({ datum }) => `${datum.name}: ${datum.y}`}
      maxDomain={{y: 100}}
      name="chart18"
      padding={{
        bottom: 125, // Adjusted to accommodate legend
        left: 50,
        right: 50,
        top: 50
      }}
      primarySegmentedMeasureData={[{ name: 'Measure', y: 15 }, { name: 'Measure', y: 50 }]}
      primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}
      qualitativeRangeData={[{ name: 'Range', y: 40 }, { name: 'Range', y: 65 }]}
      qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
      standalone={false}
      subTitle="Measure details"
      title="Text label"
      width={500}
    />
    <ChartBullet
      comparativeWarningMeasureData={[{name: 'Warning', y: 88}]}
      constrainToVisibleArea
      height={600}
      horizontal={false}
      labels={({ datum }) => `${datum.name}: ${datum.y}`}
      maxDomain={{y: 100}}
      name="chart19"
      padding={{
        bottom: 125, // Adjusted to accommodate legend
        left: 300,
        right: 50,
        top: 50
      }}
      primarySegmentedMeasureData={[{ name: 'Measure', y: 25 }, { name: 'Measure', y: 60 }]}
      qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}
      standalone={false}
      subTitle="Measure details"
      title="Text label"
      width={500}
    />
    <ChartBullet
      comparativeWarningMeasureData={[{name: 'Warning', y: 98}]}
      constrainToVisibleArea
      height={600}
      horizontal={false}
      labels={({ datum }) => `${datum.name}: ${datum.y}`}
      maxDomain={{y: 100}}
      name="chart20"
      padding={{
        bottom: 125, // Adjusted to accommodate legend
        left: 550,
        right: 50,
        top: 50
      }}
      primarySegmentedMeasureData={[{ name: 'Measure', y: 35 }, { name: 'Measure', y: 70 }]}
      qualitativeRangeData={[{ name: 'Range', y: 60 }, { name: 'Range', y: 85 }]}
      standalone={false}
      subTitle="Measure details"
      title="Text label"
      width={500}
    />
    <ChartBullet
      comparativeWarningMeasureData={[{name: 'Warning', y: 78}]}
      constrainToVisibleArea
      height={600}
      horizontal={false}
      labels={({ datum }) => `${datum.name}: ${datum.y}`}
      maxDomain={{y: 100}}
      name="chart21"
      padding={{
        bottom: 125, // Adjusted to accommodate legend
        left: 800,
        right: 50,
        top: 50
      }}
      primarySegmentedMeasureData={[{ name: 'Measure', y: 15 }, { name: 'Measure', y: 50 }]}
      qualitativeRangeData={[{ name: 'Range', y: 40 }, { name: 'Range', y: 65 }]}
      standalone={false}
      subTitle="Measure details"
      title="Text label"
      width={500}
    />
  </ChartContainer>
</div>
```

### Horizontal group with title
```js
import { ChartBullet, ChartContainer } from '@patternfly/react-charts/victory';

<div style={{ height: '600px', width: '600px' }}>
  <ChartContainer 
      title="Bullet chart example"
      height={600}
      width={600}
    >
    <ChartBullet
      comparativeWarningMeasureData={[{name: 'Warning', y: 78}]}
      constrainToVisibleArea
      groupSubTitle="Measure details"
      groupTitle="Text label"
      height={575}
      labels={({ datum }) => `${datum.name}: ${datum.y}`}
      maxDomain={{y: 100}}
      name="chart22"
      padding={{
        bottom: 100, // Adjusted to accommodate legend
        left: 150, // Adjusted to accommodate labels
        right: 50,
        top: 275 // Adjusted to accommodate group labels
      }}
      primarySegmentedMeasureData={[{ name: 'Measure', y: 15 }, { name: 'Measure', y: 50 }]}
      qualitativeRangeData={[{ name: 'Range', y: 40 }, { name: 'Range', y: 65 }]}
      standalone={false}
      subTitle="Measure details"
      title="Text label"
      width={600}
    />
    <ChartBullet
      comparativeWarningMeasureData={[{name: 'Warning', y: 88}]}
      constrainToVisibleArea
      height={600}
      labels={({ datum }) => `${datum.name}: ${datum.y}`}
      maxDomain={{y: 100}}
      name="chart23"
      padding={{
        bottom: 100, // Adjusted to accommodate legend
        left: 150, // Adjusted to accommodate labels
        right: 50,
        top: 500 // Adjusted to accommodate group labels
      }}
      primarySegmentedMeasureData={[{ name: 'Measure', y: 25 }, { name: 'Measure', y: 60 }]}
      qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}
      standalone={false}
      subTitle="Measure details"
      title="Text label"
      width={600}
    />
    <ChartBullet
      comparativeWarningMeasureData={[{name: 'Warning', y: 98}]}
      constrainToVisibleArea
      height={600}
      labels={({ datum }) => `${datum.name}: ${datum.y}`}
      maxDomain={{y: 100}}
      name="chart24"
      padding={{
        bottom: 100, // Adjusted to accommodate legend
        left: 150, // Adjusted to accommodate labels
        right: 50,
        top: 725 // Adjusted to accommodate group labels
      }}
      primarySegmentedMeasureData={[{ name: 'Measure', y: 35 }, { name: 'Measure', y: 70 }]}
      qualitativeRangeData={[{ name: 'Range', y: 60 }, { name: 'Range', y: 85 }]}
      standalone={false}
      subTitle="Measure details"
      title="Text label"
      width={600}
    />
    <ChartBullet
      comparativeWarningMeasureData={[{name: 'Warning', y: 78}]}
      comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
      constrainToVisibleArea
      height={600}
      labels={({ datum }) => `${datum.name}: ${datum.y}`}
      maxDomain={{y: 100}}
      name="chart25"
      padding={{
        bottom: 100, // Adjusted to accommodate legend
        left: 150, // Adjusted to accommodate labels
        right: 50,
        top: 950 // Adjusted to accommodate group labels
      }}
      primarySegmentedMeasureData={[{ name: 'Measure', y: 15 }, { name: 'Measure', y: 50 }]}
      primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}
      qualitativeRangeData={[{ name: 'Range', y: 40 }, { name: 'Range', y: 65 }]}
      qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
      standalone={false}
      subTitle="Measure details"
      title="Text label"
      width={600}
    />
  </ChartContainer>
</div>
```

### Vertical group with title
```js
import { ChartBullet, ChartContainer } from '@patternfly/react-charts/victory';

<div style={{ height: '600px', width: '500px' }}>
  <ChartContainer 
      title="Bullet chart example"
      height={600}
      width={500}
    >
    <ChartBullet
      comparativeWarningMeasureData={[{name: 'Warning', y: 78}]}
      comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
      constrainToVisibleArea
      groupSubTitle="Measure details"
      groupTitle="Text label"
      height={600}
      horizontal={false}
      labels={({ datum }) => `${datum.name}: ${datum.y}`}
      maxDomain={{y: 100}}
      name="chart26"
      padding={{
        bottom: 125, // Adjusted to accommodate legend
        left: 50,
        right: 50,
        top: 150 // Adjusted to accommodate group labels
      }}
      primarySegmentedMeasureData={[{ name: 'Measure', y: 15 }, { name: 'Measure', y: 50 }]}
      primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}
      qualitativeRangeData={[{ name: 'Range', y: 40 }, { name: 'Range', y: 65 }]}
      qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
      standalone={false}
      subTitle="Measure details"
      title="Text label"
      width={500}
    />
    <ChartBullet
      comparativeWarningMeasureData={[{name: 'Warning', y: 88}]}
      constrainToVisibleArea
      height={600}
      horizontal={false}
      labels={({ datum }) => `${datum.name}: ${datum.y}`}
      maxDomain={{y: 100}}
      name="chart27"
      padding={{
        bottom: 125, // Adjusted to accommodate legend
        left: 300,
        right: 50,
        top: 150 // Adjusted to accommodate group labels
      }}
      primarySegmentedMeasureData={[{ name: 'Measure', y: 25 }, { name: 'Measure', y: 60 }]}
      qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}
      standalone={false}
      subTitle="Measure details"
      title="Text label"
      width={500}
    />
    <ChartBullet
      comparativeWarningMeasureData={[{name: 'Warning', y: 98}]}
      constrainToVisibleArea
      height={600}
      horizontal={false}
      labels={({ datum }) => `${datum.name}: ${datum.y}`}
      maxDomain={{y: 100}}
      name="chart28"
      padding={{
        bottom: 125, // Adjusted to accommodate legend
        left: 550,
        right: 50,
        top: 150 // Adjusted to accommodate group labels
      }}
      primarySegmentedMeasureData={[{ name: 'Measure', y: 35 }, { name: 'Measure', y: 70 }]}
      qualitativeRangeData={[{ name: 'Range', y: 60 }, { name: 'Range', y: 85 }]}
      standalone={false}
      subTitle="Measure details"
      title="Text label"
      width={500}
    />
    <ChartBullet
      comparativeWarningMeasureData={[{name: 'Warning', y: 78}]}
      constrainToVisibleArea
      height={600}
      horizontal={false}
      labels={({ datum }) => `${datum.name}: ${datum.y}`}
      maxDomain={{y: 100}}
      name="chart29"
      padding={{
        bottom: 125, // Adjusted to accommodate legend
        left: 800,
        right: 50,
        top: 150 // Adjusted to accommodate group labels
      }}
      primarySegmentedMeasureData={[{ name: 'Measure', y: 15 }, { name: 'Measure', y: 50 }]}
      qualitativeRangeData={[{ name: 'Range', y: 40 }, { name: 'Range', y: 65 }]}
      standalone={false}
      subTitle="Measure details"
      title="Text label"
      width={500}
    />
  </ChartContainer>
</div>
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
