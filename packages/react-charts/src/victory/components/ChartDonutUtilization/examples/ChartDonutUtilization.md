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

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

The examples below are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Donut utilization examples
### Basic
```ts file = "ChartUtilBasic.tsx"

```

### Right aligned legend
```ts file = "ChartUtilRightAlignedLegend.tsx"

```

### Inverted with right aligned legend
```ts file = "ChartUtilInvertedRightLegend.tsx"

```

### Right aligned vertical legend
```ts file = "ChartUtilRightVerticalLegend.tsx"

```

### Bottom aligned legend
```ts file = "ChartUtilBottomAlignedLegend.tsx"

```

### Small
```ts file = "ChartUtilSmall.tsx"

```

### Small with right aligned legend
```ts file = "ChartUtilSmallRightLegend.tsx"

```

### Small with bottom aligned subtitle

This is a small donut utilization chart with bottom aligned legend and right aligned subtitle.

```ts file = "ChartUtilSmallBottomSubtitle.tsx"

```

### Small with right aligned subtitle
```ts file = "ChartUtilSmallRightSubtitle.tsx"

```

## Donut utilization threshold examples
### Static thresholds
```js
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts/victory';

<div style={{ height: '230px', width: '230px' }}>
  <ChartDonutThreshold
    ariaDesc="Storage capacity"
    ariaTitle="Donut utilization chart with static threshold example"
    constrainToVisibleArea
    data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
    labels={({ datum }) => datum.x ? datum.x : null}
    name="chart10"
  >
    <ChartDonutUtilization
      data={{ x: 'Storage capacity', y: 45 }}
      labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
      subTitle="of 100 GBps"
      title="45%"
    />
  </ChartDonutThreshold>
</div>
```

### Static thresholds with right aligned legend
```js
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts/victory';

class ThresholdChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      used: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { used } = this.state;
      this.setState({ used: (used + 10) % 100 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { used } = this.state;
    return (
      <div style={{ height: '230px', width: '500px' }}>
        <ChartDonutThreshold
          ariaDesc="Storage capacity"
          ariaTitle="Donut utilization chart with static threshold example"
          constrainToVisibleArea
          data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
          labels={({ datum }) => datum.x ? datum.x : null}
          name="chart11"
          padding={{
            bottom: 20,
            left: 20,
            right: 290, // Adjusted to accommodate legend
            top: 20
          }}
          width={500}
        >
          <ChartDonutUtilization
            data={{ x: 'Storage capacity', y: used }}
            labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
            legendData={[{ name: `Storage capacity: ${used}%` }, { name: 'Warning threshold at 60%' }, { name: 'Danger threshold at 90%' }]}
            legendOrientation="vertical"
            subTitle="of 100 GBps"
            title={`${used}%`}
            thresholds={[{ value: 60 }, { value: 90 }]}
          />
        </ChartDonutThreshold>
      </div>
    );
  }
}
```

### Inverted static thresholds with right aligned legend
```js
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts/victory';

class InvertedThresholdChart extends React.Component {
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
    const { used } = this.state;
    return (
      <div style={{ height: '230px', width: '500px' }}>
        <ChartDonutThreshold
          ariaDesc="Storage capacity"
          ariaTitle="Donut utilization chart with static threshold example"
          constrainToVisibleArea
          data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 20%', y: 20 }]}
          invert
          labels={({ datum }) => datum.x ? datum.x : null}
          name="chart12"
          padding={{
            bottom: 20,
            left: 20,
            right: 290, // Adjusted to accommodate legend
            top: 20
          }}
          width={500}
        >
          <ChartDonutUtilization
            data={{ x: 'Storage capacity', y: used }}
            labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
            legendData={[{ name: `Storage capacity: ${used}%` }, { name: 'Warning threshold at 60%' }, { name: 'Danger threshold at 20%' }]}
            legendOrientation="vertical"
            subTitle="of 100 GBps"
            title={`${used}%`}
            thresholds={[{ value: 60 }, { value: 20 }]}
          />
        </ChartDonutThreshold>
      </div>
    );
  }
}
```

### Static thresholds with custom legend
```js
import { ChartDonutThreshold, ChartDonutUtilization, ChartThemeColor } from '@patternfly/react-charts/victory';

class CustomLegendThresholdChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      used: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { used } = this.state;
      this.setState({ used: (used + 10) % 100 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { used } = this.state;
    return (
      <div style={{ height: '350px', width: '230px' }}>
        <ChartDonutThreshold
          ariaDesc="Storage capacity"
          ariaTitle="Donut utilization chart with static threshold example"
          constrainToVisibleArea
          data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
          height={350}
          labels={({ datum }) => datum.x ? datum.x : null}
          name="chart13"
          padding={{
            bottom: 125, // Adjusted to accommodate legend
            left: 20,
            right: 20,
            top: 20
          }}
          width={230}
        >
          <ChartDonutUtilization
            data={{ x: 'Storage capacity', y: used }}
            labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
            legendData={[{ name: `Storage capacity: ${used}%` }, { name: 'Warning threshold at 60%' }, { name: 'Danger threshold at 90%' }]}
            legendOrientation="vertical"
            legendPosition="bottom"
            subTitle="of 100 GBps"
            title={`${used}%`}
            themeColor={ChartThemeColor.green}
            thresholds={[{ value: 60 }, { value: 90 }]}
          />
        </ChartDonutThreshold>
      </div>
    );
  }
}
```

### Static thresholds with bottom aligned legend
```js
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts/victory';

<div style={{ height: '275px', width: '675px' }}>
  <ChartDonutThreshold
    ariaDesc="Storage capacity"
    ariaTitle="Donut utilization chart with static threshold example"
    constrainToVisibleArea
    data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
    height={275}
    labels={({ datum }) => datum.x ? datum.x : null}
    name="chart14"
    padding={{
      bottom: 65, // Adjusted to accommodate legend
      left: 20,
      right: 20,
      top: 20
    }}
    width={675}
  >
    <ChartDonutUtilization
      data={{ x: 'Storage capacity', y: 45 }}
      labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
      legendData={[{ name: `Storage capacity: 45%` }, { name: 'Warning threshold at 60%' }, { name: 'Danger threshold at 90%' }]}
      legendPosition="bottom"
      subTitle="of 100 GBps"
      title="45%"
    />
  </ChartDonutThreshold>
</div>
```

### Small with static thresholds
```js
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts/victory';

<div style={{ height: '185px', width: '185px' }}>
  <ChartDonutThreshold
    ariaDesc="Storage capacity"
    ariaTitle="Donut utilization chart with static threshold example"
    constrainToVisibleArea
    data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
    height={185}
    labels={({ datum }) => datum.x ? datum.x : null}
    name="chart15"
    width={185}
  >
    <ChartDonutUtilization
      data={{ x: 'Storage capacity', y: 45 }}
      labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
      subTitle="of 100 GBps"
      title="45%"
    />
  </ChartDonutThreshold>
</div>
```

### Small with static thresholds and right aligned legend
```js
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts/victory';

class ThresholdChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      used: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { used } = this.state;
      this.setState({ used: (used + 10) % 100 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { used } = this.state;
    return (
      <div style={{ height: '185px', width: '425px' }}>
        <ChartDonutThreshold
          ariaDesc="Storage capacity"
          ariaTitle="Donut utilization chart with static threshold example"
          constrainToVisibleArea
          data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
          height={185}
          labels={({ datum }) => datum.x ? datum.x : null}
          name="chart16"
          padding={{
            bottom: 20,
            left: 20,
            right: 260, // Adjusted to accommodate legend
            top: 20
          }}
          width={425}
        >
          <ChartDonutUtilization
            data={{ x: 'Storage capacity', y: used }}
            labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
            legendData={[{ name: `Storage capacity: ${used}%` }, { name: 'Warning threshold at 60%' }, { name: 'Danger threshold at 90%' }]}
            legendOrientation="vertical"
            subTitle="of 100 GBps"
            title={`${used}%`}
            thresholds={[{ value: 60 }, { value: 90 }]}
          />
        </ChartDonutThreshold>
      </div>
    );
  }
}
```

### Small with subtitle

This is a small donut utilization chart with static thresholds with right aligned legend and bottom aligned subtitle.

```js
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts/victory';

<div style={{ height: '200px', width: '425px' }}>
  <ChartDonutThreshold
    ariaDesc="Storage capacity"
    ariaTitle="Donut utilization chart with static threshold example"
    constrainToVisibleArea
    data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
    height={200}
    labels={({ datum }) => datum.x ? datum.x : null}
    name="chart17"
    padding={{
      bottom: 30, // Adjusted to accommodate label
      left: 20,
      right: 260, // Adjusted to accommodate legend
      top: 20
    }}
    subTitlePosition="bottom"
    width={425}
  >
    <ChartDonutUtilization
      data={{ x: 'Storage capacity', y: 45 }}
      labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
      legendData={[{ name: `Storage capacity: 45%` }, { name: 'Warning threshold at 60%' }, { name: 'Danger threshold at  90%' }]}
      legendOrientation="vertical"
      subTitle="of 100 GBps"
      title="45%"
      thresholds={[{ value: 60 }, { value: 90 }]}
    />
  </ChartDonutThreshold>
</div>
```

### Small with thresholds and right aligned subtitle
```js
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts/victory';

<div style={{ height: '225px', width: '675px' }}>
  <ChartDonutThreshold
    ariaDesc="Storage capacity"
    ariaTitle="Donut utilization chart with static threshold example"
    constrainToVisibleArea
    data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
    height={225}
    labels={({ datum }) => datum.x ? datum.x : null}
    name="chart18"
    padding={{
      bottom: 60, // Adjusted to accommodate legend
      left: 20,
      right: 20,
      top: 20
    }}
    subTitlePosition="right"
    width={675}
  >
    <ChartDonutUtilization
      data={{ x: 'Storage capacity', y: 45 }}
      labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
      legendData={[{ name: `Storage capacity: 45%` }, { name: 'Warning threshold at 60%' }, { name: 'Danger threshold at 90%' }]}
      legendPosition="bottom"
      subTitle="of 100 GBps"
      title="45%"
      thresholds={[{ value: 60 }, { value: 90 }]}
    />
  </ChartDonutThreshold>
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

- For `ChartDonutThreshold` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
- For `ChartDonutUtilization` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
