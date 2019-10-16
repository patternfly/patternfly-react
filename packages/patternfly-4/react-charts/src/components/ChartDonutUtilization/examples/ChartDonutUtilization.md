---
title: 'Donut utilization chart'
section: 'charts'
typescript: true
propComponents: [
  'ChartDonutThreshold',
  'ChartDonutUtilization'
]
---

import { ChartDonutThreshold, ChartDonutUtilization, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

PatternFly React charts are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

Learn to build a donut utilization chart using a Katacoda tutorial starting with a simple chart, adding thresholds, tooltips, a legend, and concluding by changing the theme color. You'll learn how to use React chart components together to build a consistent user experience.

[Start course](https://katacoda.com/patternfly/courses/charts/donut-utilization-chart)

## Examples
```js title=Basic
import React from 'react';
import { ChartDonutUtilization } from '@patternfly/react-charts';

Basic = (
  <div style={{ height: '230px', width: '230px' }}>
    <ChartDonutUtilization
      ariaDesc="Storage capacity"
      ariaTitle="Donut utilization chart example"
      constrainToVisibleArea={true}
      data={{ x: 'GBps capacity', y: 75 }}
      labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
      subTitle="of 100 GBps"
      title="75%"
    />
  </div>
)
```

```js title=Right-aligned-legend
import React from 'react';
import { ChartDonutUtilization } from '@patternfly/react-charts';

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
      <div style={{  height: '230px', width: '435px' }}>
        <ChartDonutUtilization
          ariaDesc="Storage capacity"
          ariaTitle="Donut utilization chart example"
          constrainToVisibleArea={true}
          data={{ x: 'GBps capacity', y: used }}
          labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
          legendData={[{ name: `Storage capacity: ${spacer}${used}%` }, { name: 'Unused' }]}
          legendOrientation="vertical"
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

```js title=Inverted-with-right-aligned-legend
import React from 'react';
import { ChartDonutUtilization } from '@patternfly/react-charts';

class UtilizationChart extends React.Component {
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
          constrainToVisibleArea={true}
          data={{ x: 'GBps capacity', y: used }}
          invert
          labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
          legendData={[{ name: `Storage capacity: ${spacer}${used}%` }, { name: 'Unused' }]}
          legendOrientation="vertical"
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

```js title=Right-aligned-vertical-legend
import React from 'react';
import { ChartDonutUtilization, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';

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
      <div style={{ height: '300px', width: '230px' }}>
        <ChartDonutUtilization
          ariaDesc="Storage capacity"
          ariaTitle="Donut utilization chart example"
          constrainToVisibleArea={true}
          data={{ x: 'Storage capacity', y: used }}
          height={300}
          labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
          legendData={[{ name: `Storage capacity: ${spacer}${used}%` }, { name: 'Unused' }]}
          legendOrientation="vertical"
          legendPosition="bottom"
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

```js title=Bottom-aligned-legend
import React from 'react';
import { ChartDonutUtilization } from '@patternfly/react-charts';

BottomLegend = (
  <div style={{ height: '275px', width: '300px' }}>
    <ChartDonutUtilization
      ariaDesc="Storage capacity"
      ariaTitle="Donut utilization chart example"
      constrainToVisibleArea={true}
      data={{ x: 'Storage capacity', y: 45 }}
      height={275}
      labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
      legendData={[{ name: `Storage capacity: 45%` }, { name: 'Unused' }]}
      legendPosition="bottom"
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
)
```

```js title=Static-thresholds
import React from 'react';
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';

StaticThresholds = (
  <div style={{ height: '230px', width: '230px' }}>
    <ChartDonutThreshold
      ariaDesc="Storage capacity"
      ariaTitle="Donut utilization chart with static threshold example"
      constrainToVisibleArea={true}
      data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
      labels={({ datum }) => datum.x ? datum.x : null}
    >
      <ChartDonutUtilization
        data={{ x: 'Storage capacity', y: 45 }}
        labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
        subTitle="of 100 GBps"
        title="45%"
      />
    </ChartDonutThreshold>
  </div>
)
```

```js title=Static-thresholds-with-right-aligned-legend
import React from 'react';
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';

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
          constrainToVisibleArea={true}
          data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
          labels={({ datum }) => datum.x ? datum.x : null}
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

```js title=Inverted-static-thresholds-with-right-aligned-legend
import React from 'react';
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';

class ThresholdChart extends React.Component {
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
          constrainToVisibleArea={true}
          data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 20%', y: 20 }]}
          invert
          labels={({ datum }) => datum.x ? datum.x : null}
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

```js title=Static-thresholds-with-custom-legend
import React from 'react';
import { ChartDonutThreshold, ChartDonutUtilization, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';

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
      <div style={{ height: '350px', width: '230px' }}>
        <ChartDonutThreshold
          ariaDesc="Storage capacity"
          ariaTitle="Donut utilization chart with static threshold example"
          constrainToVisibleArea={true}
          data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
          height={350}
          labels={({ datum }) => datum.x ? datum.x : null}
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

```js title=Static-thresholds-with-bottom-aligned-legend
import React from 'react';
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';

StaticThresholds = (
  <div style={{ height: '275px', width: '675px' }}>
    <ChartDonutThreshold
      ariaDesc="Storage capacity"
      ariaTitle="Donut utilization chart with static threshold example"
      constrainToVisibleArea={true}
      data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
      height={275}
      labels={({ datum }) => datum.x ? datum.x : null}
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
)
```



```js title=Small
import React from 'react';
import { ChartDonutUtilization } from '@patternfly/react-charts';

Small = (
  <div style={{ height: '175px', width: '175px' }}>
    <ChartDonutUtilization
      ariaDesc="Storage capacity"
      ariaTitle="Donut utilization chart example"
      constrainToVisibleArea={true}
      data={{ x: 'Storage capacity', y: 75 }}
      height={175}
      labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
      subTitle="of 100 GBps"
      title="75%"
      width={175}
    />
  </div>
)
```

```js title=Small-with-right-aligned-legend
import React from 'react';
import { ChartDonutUtilization } from '@patternfly/react-charts';

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
          constrainToVisibleArea={true}
          data={{ x: 'Storage capacity', y: used }}
          height={175}
          labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
          legendData={[{ name: `Storage capacity: ${spacer}${used}%` }, { name: 'Unused' }]}
          legendOrientation="vertical"
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

```js title=Small-with-bottom-aligned-subtitle
import React from 'react';
import { ChartDonutUtilization } from '@patternfly/react-charts';

SmallBottomSubtitle = (
  <div style={{ height: '185px', width: '350px' }}>
    <ChartDonutUtilization
      ariaDesc="Storage capacity"
      ariaTitle="Donut utilization chart example"
      constrainToVisibleArea={true}
      data={{ x: 'Storage capacity', y: 45 }}
      height={185}
      labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
      legendData={[{ name: `Storage capacity: 45%` }, { name: 'Unused' }]}
      legendOrientation="vertical"
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
)
```

```js title=Small-with-right-aligned-subtitle
import React from 'react';
import { ChartDonutUtilization } from '@patternfly/react-charts';

SmallBottomRightSubtitle = (
  <div style={{ height: '200px', width: '350px' }}>
    <ChartDonutUtilization
      ariaDesc="Storage capacity"
      ariaTitle="Donut utilization chart example"
      constrainToVisibleArea={true}
      data={{ x: 'Storage capacity', y: 45 }}
      height={200}
      labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
      legendData={[{ name: `Storage capacity: 45%` }, { name: 'Unused' }]}
      legendPosition="bottom"
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
)
```

```js title=Small-with-static-thresholds
import React from 'react';
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';

SmallStaticThresholds = (
  <div style={{ height: '185px', width: '185px' }}>
    <ChartDonutThreshold
      ariaDesc="Storage capacity"
      ariaTitle="Donut utilization chart with static threshold example"
      constrainToVisibleArea={true}
      data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
      height={185}
      labels={({ datum }) => datum.x ? datum.x : null}
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
)
```

```js title=Small-with-static-thresholds-and-right-aligned-legend
import React from 'react';
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';

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
          constrainToVisibleArea={true}
          data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
          height={185}
          labels={({ datum }) => datum.x ? datum.x : null}
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

```js title=Small-with-subtitle
import React from 'react';
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';

SmallStaticSubtitle = (
  <div style={{ height: '200px', width: '425px' }}>
    <ChartDonutThreshold
      ariaDesc="Storage capacity"
      ariaTitle="Donut utilization chart with static threshold example"
      constrainToVisibleArea={true}
      data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
      height={200}
      labels={({ datum }) => datum.x ? datum.x : null}
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
)
```

```js title=Small-with-right-aligned-subtitle
import React from 'react';
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';

SmallRightSubtitle = (
  <div style={{ height: '225px', width: '675px' }}>
    <ChartDonutThreshold
      ariaDesc="Storage capacity"
      ariaTitle="Donut utilization chart with static threshold example"
      constrainToVisibleArea={true}
      data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
      height={225}
      labels={({ datum }) => datum.x ? datum.x : null}
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
)
```

## Documentation
- See Victory's [FAQ](https://formidable.com/open-source/victory/docs/faq)
- For single data points or zero values, you may want to set the `domain` prop
- `ChartLegend` may be used as a standalone component, instead of using `legendData`

Currently, the generated documention below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

 - For `ChartDonutThreshold` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
 - For `ChartDonutUtilization` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
