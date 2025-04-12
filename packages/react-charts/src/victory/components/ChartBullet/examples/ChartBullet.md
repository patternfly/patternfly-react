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
```js
import { ChartBullet } from '@patternfly/react-charts/victory';

<div style={{ height: '150px', width: '600px' }}>
  <ChartBullet
    ariaDesc="Storage capacity"
    ariaTitle="Bullet chart example"
    comparativeWarningMeasureData={[{ name: 'Warning', y: 88 }]}
    constrainToVisibleArea
    height={150}
    labels={({ datum }) => `${datum.name}: ${datum.y}`}
    maxDomain={{y: 100}}
    name="chart1"
    primarySegmentedMeasureData={[{ name: 'Measure', y: 60 }]}
    qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}
    width={600}
  />
</div>
```

### Segmented primary measure
```js
import { ChartBullet } from '@patternfly/react-charts/victory';

<div style={{ height: '200px', width: '600px' }}>
  <ChartBullet
    ariaDesc="Storage capacity"
    ariaTitle="Bullet chart example"
    comparativeWarningMeasureData={[{name: 'Warning', y: 88}]}
    comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
    constrainToVisibleArea
    height={200}
    labels={({ datum }) => `${datum.name}: ${datum.y}`}
    maxDomain={{y: 100}}
    name="chart2"
    padding={{
      bottom: 50,
      left: 150, // Adjusted to accommodate labels
      right: 50,
      top: 50
    }}
    primarySegmentedMeasureData={[{ name: 'Measure', y: 25 }, { name: 'Measure', y: 60 }]}
    primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}
    qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}
    qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
    subTitle="Measure details"
    title="Text label"
    width={600}
  />
</div>
```

### Responsive container with bottom aligned legend

This demonstrates a responsive legend which wraps when items are wider than its container.

```js
import { ChartBullet } from '@patternfly/react-charts/victory';
import { getResizeObserver } from '@patternfly/react-core';

class BulletChart extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = createRef();
    this.observer = () => {};
    this.state = {
      extraHeight: 0,
      width: 0
    };
    this.handleResize = () => {
      if (this.containerRef.current && this.containerRef.current.clientWidth) {
        this.setState({ width: this.containerRef.current.clientWidth });
      }
    };
    this.handleLegendAllowWrap = (extraHeight) => {
      if (extraHeight !== this.state.extraHeight) {
        this.setState({ extraHeight });
      }
    }
    this.getHeight = (baseHeight) => {
      const { extraHeight } = this.state;
      return baseHeight + extraHeight;
    };
  }

  componentDidMount() {
    this.observer = getResizeObserver(this.containerRef.current, this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    this.observer();
  }

  render() {
    const { width } = this.state;
    const height = this.getHeight(200);
    return (
      <div ref={this.containerRef} style={{ height: height + "px" }}>
        <ChartBullet
          ariaDesc="Storage capacity"
          ariaTitle="Bullet chart example"
          comparativeWarningMeasureData={[{name: 'Warning', y: 88}]}
          comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
          constrainToVisibleArea
          height={height}
          labels={({ datum }) => `${datum.name}: ${datum.y}`}
          legendAllowWrap={this.handleLegendAllowWrap}
          legendPosition="bottom-left"
          maxDomain={{y: 100}}
          name="chart3"
          padding={{
            bottom: 50,
            left: 50,
            right: 50,
            top: 100 // Adjusted to accommodate labels
          }}
          primarySegmentedMeasureData={[{ name: 'Measure', y: 25 }, { name: 'Measure', y: 60 }]}
          primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}
          qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}
          qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
          subTitle="Measure details"
          title="Text label"
          titlePosition="top-left"
          width={width}
        />
      </div>
    );
  }
}
```

### Primary measure dot
```js
import { ChartBullet } from '@patternfly/react-charts/victory';

<div style={{ height: '200px', width: '600px' }}>
  <ChartBullet
    ariaDesc="Storage capacity"
    ariaTitle="Bullet chart example"
    comparativeWarningMeasureData={[{name: 'Warning', y: 88}]}
    comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
    constrainToVisibleArea
    height={200}
    labels={({ datum }) => `${datum.name}: ${datum.y}`}
    maxDomain={{y: 100}}
    name="chart4"
    padding={{
      bottom: 50,
      left: 150, // Adjusted to accommodate labels
      right: 50,
      top: 50
    }}
    primaryDotMeasureData={[{ name: 'Measure', y: 25 }, { name: 'Measure', y: 60 }]}
    primaryDotMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}
    qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}
    qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
    subTitle="Measure details"
    title="Text label"
    width={600}
  />
</div>
```

### Error measure and custom axis ticks

This is a green bullet chart with error measure and custom axis ticks with 3 legend items per row.

```js
import { ChartAxis, ChartBullet, ChartThemeColor } from '@patternfly/react-charts/victory';

<div style={{ height: '200px', width: '600px' }}>
  <ChartBullet
    ariaDesc="Storage capacity"
    ariaTitle="Bullet chart example"
    axisComponent={<ChartAxis tickValues={[0, 75, 150]} />}
    comparativeErrorMeasureData={[{name: 'Error', y: 120}]}
    comparativeErrorMeasureLegendData={[{ name: 'Error' }]}
    comparativeWarningMeasureData={[{name: 'Warning', y: 80}]}
    comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
    constrainToVisibleArea
    height={200}
    labels={({ datum }) => `${datum.name}: ${datum.y}`}
    legendItemsPerRow={3}
    name="chart5"
    padding={{
      bottom: 50,
      left: 150, // Adjusted to accommodate labels
      right: 50,
      top: 50
    }}
    primarySegmentedMeasureData={[{ name: 'Measure', y: 25 }, { name: 'Measure', y: 75 }]}
    primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}
    qualitativeRangeData={[{ name: 'Range', y: 65 }, { name: 'Range', y: 100 }, { name: 'Range', y: 150 }]}
    qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
    themeColor={ChartThemeColor.green}
    subTitle="Measure details"
    title="Text label"
    width={600}
  />
</div>
```

### Primary measure outside range

This is a yellow bullet chart with primary measure greater than max range.

```js
import { ChartBullet, ChartThemeColor } from '@patternfly/react-charts/victory';

<div style={{ height: '200px', width: '600px' }}>
  <ChartBullet
    ariaDesc="Storage capacity"
    ariaTitle="Bullet chart example"
    comparativeWarningMeasureData={[{name: 'Warning', y: 80}]}
    comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
    constrainToVisibleArea
    labels={({ datum }) => `${datum.name}: ${datum.y}`}
    height={200}
    maxDomain={{y: 125}}
    minDomain={{y: 50}}
    name="chart6"
    padding={{
      bottom: 50,
      left: 150, // Adjusted to accommodate labels
      right: 75,
      top: 50
    }}
    primarySegmentedMeasureData={[{ name: 'Measure', y: 75 }, { name: 'Measure', y: 135 }]}
    primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}
    qualitativeRangeData={[{ name: 'Range', y: 85 }, { name: 'Range', y: 125 }]}
    qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
    themeColor={ChartThemeColor.yellow}
    subTitle="Measure details"
    title="Text label"
    width={600}
  />
</div>
```

### Negative primary measure

This bullet chart with negative primary measure is for measures considered to be bad when they are low.

```js
import { ChartBullet } from '@patternfly/react-charts/victory';

<div style={{ height: '200px', width: '600px' }}>
  <ChartBullet
    ariaDesc="Storage capacity"
    ariaTitle="Bullet chart example"
    comparativeWarningMeasureData={[{name: 'Warning', y: 60}]}
    comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
    constrainToVisibleArea
    height={200}
    labels={({ datum }) => `${datum.name}: ${datum.y}`}
    maxDomain={{y: 75}}
    minDomain={{y: -25}}
    name="chart7"
    padding={{
      bottom: 50,
      left: 150, // Adjusted to accommodate labels
      right: 50,
      top: 65
    }}
    primarySegmentedMeasureData={[{ name: 'Measure', y: -15 }]}
    primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }]}
    qualitativeRangeData={[{ name: 'Range', y: 25, y0: -25 }, { name: 'Range', y: 50 }]}
    qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
    subTitle="Measure details"
    title="Text label"
    width={600}
  />
</div>
```

### Reversed with right aligned legend

This reversed bullet chart with right aligned legend is for measures considered to be good when they are low.

```js
import { ChartBullet } from '@patternfly/react-charts/victory';

<div style={{ height: '200px', width: '700px' }}>
  <ChartBullet
    ariaDesc="Storage capacity"
    ariaTitle="Bullet chart example"
    comparativeWarningMeasureData={[{name: 'Warning', y: -88}]}
    comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
    constrainToVisibleArea
    invert
    height={200}
    labels={({ datum }) => `${datum.name}: ${datum.y}`}
    legendPosition="right"
    legendOrientation="vertical"
    maxDomain={{y: 0}}
    minDomain={{y: -100}}
    name="chart8"
    padding={{
      bottom: 50,
      left: 150, // Adjusted to accommodate labels
      right: 150, // Adjusted to accommodate legend
      top: 80
    }}
    primarySegmentedMeasureData={[{ name: 'Measure', y: -60 }, { name: 'Measure', y: -25 }]}
    primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}
    qualitativeRangeData={[{ name: 'Range', y: -50 }, { name: 'Range', y: -75 }]}
    qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
    subTitle="Measure details"
    title="Text label"
    width={700}
  />
</div>
```

### Negative and positive primary measures

This bullet chart with negative and positive primary measures has 4 legend items per row.

```js
import { ChartBullet } from '@patternfly/react-charts/victory';

<div style={{ height: '200px', width: '600px' }}>
  <ChartBullet
    ariaDesc="Storage capacity"
    ariaTitle="Bullet chart example"
    comparativeWarningMeasureData={[{name: 'Warning', y: 60}]}
    comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
    constrainToVisibleArea
    height={200}
    labels={({ datum }) => `${datum.name}: ${datum.y}`}
    legendItemsPerRow={4}
    maxDomain={{y: 75}}
    minDomain={{y: -25}}
    name="chart9"
    padding={{
      bottom: 50,
      left: 150, // Adjusted to accommodate labels
      right: 50,
      top: 65
    }}
    primarySegmentedMeasureData={[{ name: 'Measure', y: -10 }, { name: 'Measure', y: -20 }, { name: 'Measure', y: 10 }, { name: 'Measure', y: 40 }]}
    primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }, { name: 'Measure 3' }, { name: 'Measure 4' }]}
    qualitativeRangeData={[{ name: 'Range', y: 25, y0: -25 }, { name: 'Range', y: 50 }]}
    qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
    subTitle="Measure details"
    title="Text label"
    width={600}
  />
</div>
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
