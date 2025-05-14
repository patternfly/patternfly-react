---
id: Donut utilization chart
section: charts
propComponents: [
  'ChartDonutThreshold',
  'ChartDonutUtilization'
]
hideDarkMode: true
---

import { ChartDonutThreshold, ChartDonutUtilization, ChartThemeColor } from '@patternfly/react-charts/victory';
import {  useEffect, useState } from 'react';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

The examples below are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Donut utilization examples
### Basic
```js
import { ChartDonutUtilization } from '@patternfly/react-charts/victory';

<div style={{ height: '230px', width: '230px' }}>
  <ChartDonutUtilization
    ariaDesc="Storage capacity"
    ariaTitle="Donut utilization chart example"
    constrainToVisibleArea
    data={{ x: 'GBps capacity', y: 75 }}
    labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
    name="chart1"
    subTitle="of 100 GBps"
    title="75%"
  />
</div>
```

### Right aligned legend
```js
import { ChartDonutUtilization } from '@patternfly/react-charts/victory';

class DonutUtilizationChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spacer: '',
      used: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { used } = this.state;
      const val = (used + 10) % 100;
      this.setState({
        spacer: val < 10 ? ' ' : '',
        used: val
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { spacer, used } = this.state;
    return (
      <div style={{  height: '230px', width: '435px' }}>
        <ChartDonutUtilization
          ariaDesc="Storage capacity"
          ariaTitle="Donut utilization chart example"
          constrainToVisibleArea
          data={{ x: 'GBps capacity', y: used }}
          labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
          legendData={[{ name: `Storage capacity: ${spacer}${used}%` }, { name: 'Unused' }]}
          legendOrientation="vertical"
          name="chart2"
          padding={{
            bottom: 20,
            left: 20,
            right: 225, // Adjusted to accommodate legend
            top: 20
          }}
          subTitle="of 100 GBps"
          title={`${used}%`}
          thresholds={[{ value: 60 }, { value: 90 }]}
          width={435}
        />
      </div>
    );
  }
}
```

### Inverted with right aligned legend
```js
import { ChartDonutUtilization } from '@patternfly/react-charts/victory';

class InvertedDonutUtilizationChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spacer: '',
      used: 100
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { used } = this.state;
      const val = (((used - 10) % 100) + 100) % 100;
      this.setState({
        spacer: val < 10 ? ' ' : '',
        used: val
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { spacer, used } = this.state;
    return (
      <div style={{ height: '230px', width: '435px' }}>
        <ChartDonutUtilization
          ariaDesc="Storage capacity"
          ariaTitle="Donut utilization chart example"
          constrainToVisibleArea
          data={{ x: 'GBps capacity', y: used }}
          invert
          labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
          legendData={[{ name: `Storage capacity: ${spacer}${used}%` }, { name: 'Unused' }]}
          legendOrientation="vertical"
          name="chart3"
          padding={{
            bottom: 20,
            left: 20,
            right: 225, // Adjusted to accommodate legend
            top: 20
          }}
          subTitle="of 100 GBps"
          title={`${used}%`}
          thresholds={[{ value: 60 }, { value: 20 }]}
          width={435}
        />
      </div>
    );
  }
}
```

### Right aligned vertical legend
```js
import { ChartDonutUtilization, ChartThemeColor } from '@patternfly/react-charts/victory';

class VerticalLegendUtilizationChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spacer: '',
      used: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { used } = this.state;
      const val = (used + 10) % 100;
      this.setState({
        spacer: val < 10 ? ' ' : '',
        used: val
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { spacer, used } = this.state;
    return (
      <div style={{ height: '300px', width: '230px' }}>
        <ChartDonutUtilization
          ariaDesc="Storage capacity"
          ariaTitle="Donut utilization chart example"
          constrainToVisibleArea
          data={{ x: 'Storage capacity', y: used }}
          height={300}
          labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
          legendData={[{ name: `Storage capacity: ${spacer}${used}%` }, { name: 'Unused' }]}
          legendOrientation="vertical"
          legendPosition="bottom"
          name="chart4"
          padding={{
            bottom: 75, // Adjusted to accommodate legend
            left: 20,
            right: 20,
            top: 20
          }}
          subTitle="of 100 GBps"
          title={`${used}%`}
          themeColor={ChartThemeColor.green}
          thresholds={[{ value: 60 }, { value: 90 }]}
          width={230}
        />
      </div>
    );
  }
}
```

### Bottom aligned legend
```js
import { ChartDonutUtilization } from '@patternfly/react-charts/victory';

<div style={{ height: '275px', width: '300px' }}>
  <ChartDonutUtilization
    ariaDesc="Storage capacity"
    ariaTitle="Donut utilization chart example"
    constrainToVisibleArea
    data={{ x: 'Storage capacity', y: 45 }}
    height={275}
    labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
    legendData={[{ name: `Storage capacity: 45%` }, { name: 'Unused' }]}
    legendPosition="bottom"
    name="chart5"
    padding={{
      bottom: 65, // Adjusted to accommodate legend
      left: 20,
      right: 20,
      top: 20
    }}
    subTitle="of 100 GBps"
    title="45%"
    thresholds={[{ value: 60 }, { value: 90 }]}
    width={300}
  />
</div>
```

### Small
```js
import { ChartDonutUtilization } from '@patternfly/react-charts/victory';

<div style={{ height: '175px', width: '175px' }}>
  <ChartDonutUtilization
    ariaDesc="Storage capacity"
    ariaTitle="Donut utilization chart example"
    constrainToVisibleArea
    data={{ x: 'Storage capacity', y: 75 }}
    height={175}
    labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
    name="chart6"
    subTitle="of 100 GBps"
    title="75%"
    width={175}
  />
</div>
```

### Small with right aligned legend
```js
import { ChartDonutUtilization } from '@patternfly/react-charts/victory';

class UtilizationChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spacer: '',
      used: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { used } = this.state;
      const val = (used + 10) % 100;
      this.setState({
        spacer: val < 10 ? ' ' : '',
        used: val
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { spacer, used } = this.state;
    return (
      <div style={{ width: '350px', height: '175px' }}>
        <ChartDonutUtilization
          ariaDesc="Storage capacity"
          ariaTitle="Donut utilization chart example"
          constrainToVisibleArea
          data={{ x: 'Storage capacity', y: used }}
          height={175}
          labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
          legendData={[{ name: `Storage capacity: ${spacer}${used}%` }, { name: 'Unused' }]}
          legendOrientation="vertical"
          name="chart7"
          padding={{
            bottom: 20,
            left: 20,
            right: 195, // Adjusted to accommodate legend
            top: 20
          }}
          subTitle="of 100 GBps"
          title={`${used}%`}
          thresholds={[{ value: 60 }, { value: 90 }]}
          width={350}
        />
      </div>
    );
  }
}
```

### Small with bottom aligned subtitle

This is a small donut utilization chart with bottom aligned legend and right aligned subtitle.

```js
import { ChartDonutUtilization } from '@patternfly/react-charts/victory';

<div style={{ height: '185px', width: '350px' }}>
  <ChartDonutUtilization
    ariaDesc="Storage capacity"
    ariaTitle="Donut utilization chart example"
    constrainToVisibleArea
    data={{ x: 'Storage capacity', y: 45 }}
    height={185}
    labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
    legendData={[{ name: `Storage capacity: 45%` }, { name: 'Unused' }]}
    legendOrientation="vertical"
    name="chart8"
    padding={{
      bottom: 25, // Adjusted to accommodate subTitle
      left: 20,
      right: 195, // Adjusted to accommodate legend
      top: 20
    }}
    subTitle="of 100 GBps"
    subTitlePosition="bottom"
    title="45%"
    thresholds={[{ value: 60 }, { value: 90 }]}
    width={350}
  />
</div>
```

### Small with right aligned subtitle
```js
import { ChartDonutUtilization } from '@patternfly/react-charts/victory';

<div style={{ height: '200px', width: '350px' }}>
  <ChartDonutUtilization
    ariaDesc="Storage capacity"
    ariaTitle="Donut utilization chart example"
    constrainToVisibleArea
    data={{ x: 'Storage capacity', y: 45 }}
    height={200}
    labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
    legendData={[{ name: `Storage capacity: 45%` }, { name: 'Unused' }]}
    legendPosition="bottom"
    name="chart9"
    padding={{
      bottom: 45, // Adjusted to accommodate legend
      left: 20,
      right: 20,
      top: 20
    }}
    subTitle="of 100 GBps"
    subTitlePosition="right"
    title="45%"
    thresholds={[{ value: 60 }, { value: 90 }]}
    width={350}
  />
</div>
```

## Donut utilization threshold examples
### Static thresholds
```ts file = "ChartUtilStatic.tsx"

```

### Static thresholds with right aligned legend
```ts file = "ChartUtilStaticRightLegend.tsx"

```

### Inverted static thresholds with right aligned legend
```ts file = "ChartUtilInvertedStatic.tsx"

```

### Static thresholds with custom legend
```ts file = "ChartUtilStaticCustomLegend.tsx"

```

### Static thresholds with bottom aligned legend
```ts file = "ChartUtilStaticBottomLegend.tsx"

```

### Small with static thresholds
```ts file = "ChartUtilSmallStatic.tsx"

```

### Small with static thresholds and right aligned legend
```ts file = "ChartUtilSmallStaticRightLegend.tsx"

```

### Small with subtitle

This is a small donut utilization chart with static thresholds with right aligned legend and bottom aligned subtitle.

```ts file = "ChartUtilSmallSubtitle.tsx"

```

### Small with thresholds and right aligned subtitle
```ts file = "ChartUtilSmallRightAlignedSubtitle.tsx"

```

## Documentation
### Tips
- See Victory's [FAQ](https://formidable.com/open-source/victory/docs/faq)
- For single data points or zero values, you may want to set the `domain` prop
- `ChartLegend` may be used as a standalone component, instead of using `legendData`

### Note
Currently, the generated documentation below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

- For `ChartDonutThreshold` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
- For `ChartDonutUtilization` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
