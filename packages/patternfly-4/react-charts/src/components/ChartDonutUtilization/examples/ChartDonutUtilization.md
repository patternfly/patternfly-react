---
title: 'Donut utilization'
section: 'charts'
typescript: true
propComponents: ['ChartLegend', 'ChartDonutThreshold', 'ChartDonutUtilization']
---

import { ChartDonutThreshold, ChartDonutUtilization, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';
import './chart-donut-utilization.scss';

Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

PatternFly React charts are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

Learn to build a donut utilization chart using a Katacoda tutorial starting with a simple chart, adding thresholds, tooltips, a legend, and concluding by changing the theme color. You'll learn how to use React chart components together to build a consistent user experience.

[Start course](https://katacoda.com/patternfly/courses/charts/donut-utilization-chart)

## Simple donut utilization chart
```js
import React from 'react';
import { ChartDonutUtilization } from '@patternfly/react-charts';

<div>
  <div className="donut-utilization-chart">
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
</div>
```

## Simple donut utilization chart with right aligned legend
```js
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
      <div>
        <div className="donut-utilization-chart-legend-right">
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
      </div>
    );
  }
}
```

## Simple, inverted donut utilization chart with right aligned legend
```js
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
      <div>
        <div className="donut-utilization-chart-legend-right">
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
      </div>
    );
  }
}
```

## Simple, green donut utilization chart with right aligned, vertical legend
```js
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
      <div>
        <div className="donut-utilization-chart-legend-bottom-vert">
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
            themeVariant={ChartThemeVariant.light}
            thresholds={[{ value: 60 }, { value: 90 }]}
            width={230}
          />
        </div>
      </div>
    );
  }
}
```

## Simple donut utilization chart with bottom aligned legend
```js
import React from 'react';
import { ChartDonutUtilization } from '@patternfly/react-charts';

<div>
  <div className="donut-utilization-chart-legend-bottom-horz">
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
</div>
```

## Donut utilization chart with static thresholds
```js
import React from 'react';
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';

<div>
  <div className="donut-threshold-chart">
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
</div>
```

## Donut utilization chart with static thresholds and right aligned legend
```js
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
      <div>
        <div className="donut-threshold-chart-legend-right">
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
      </div>
    );
  }
}
```

## Donut utilization chart with inverted static thresholds and right aligned legend
```js
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
      <div>
        <div className="donut-threshold-chart-legend-right">
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
      </div>
    );
  }
}
```

## Green donut utilization chart with static thresholds and right aligned (custom) legend
```js
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
      <div>
        <div className="donut-threshold-chart-legend-bottom-vert">
          <ChartDonutThreshold
            ariaDesc="Storage capacity"
            ariaTitle="Donut utilization chart with static threshold example"
            constrainToVisibleArea={true}
            data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
            height={350}
            labels={({ datum }) => datum.x ? datum.x : null}
            legendPosition="bottom"
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
              subTitle="of 100 GBps"
              title={`${used}%`}
              themeColor={ChartThemeColor.green}
              themeVariant={ChartThemeVariant.light}
              thresholds={[{ value: 60 }, { value: 90 }]}
            />
          </ChartDonutThreshold>
        </div>
      </div>
    );
  }
}
```

## Donut utilization chart with static thresholds and bottom aligned legend
```js
import React from 'react';
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';

<div>
  <div className="donut-threshold-chart-legend-bottom-horz">
    <ChartDonutThreshold
      ariaDesc="Storage capacity"
      ariaTitle="Donut utilization chart with static threshold example"
      constrainToVisibleArea={true}
      data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
      height={275}
      labels={({ datum }) => datum.x ? datum.x : null}
      legendPosition="bottom"
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
        subTitle="of 100 GBps"
        title="45%"
      />
    </ChartDonutThreshold>
  </div>
</div>
```



## Small donut utilization chart
```js
import React from 'react';
import { ChartDonutUtilization } from '@patternfly/react-charts';

<div>
  <div className="donut-utilization-chart-sm">
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
</div>
```

## Small donut utilization chart with right aligned legend
```js
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
      <div>
        <div className="donut-utilization-chart-legend-right-sm">
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
      </div>
    );
  }
}
```

## Small donut utilization chart with right aligned legend and bottom aligned subtitle
```js
import React from 'react';
import { ChartDonutUtilization } from '@patternfly/react-charts';

<div>
  <div className="donut-utilization-chart-legend-right-subtitle-bottom-sm">
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
</div>
```

## Small donut utilization chart with bottom aligned legend and right aligned subtitle
```js
import React from 'react';
import { ChartDonutUtilization } from '@patternfly/react-charts';

<div>
  <div className="donut-utilization-chart-legend-bottom-subtitle-right-sm">
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
</div>
```

## Small donut utilization chart with static thresholds
```js
import React from 'react';
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';

<div>
  <div className="donut-threshold-chart-sm">
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
</div>
```

## Small donut utilization chart with static thresholds and right aligned legend
```js
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
      <div>
        <div className="donut-threshold-chart-legend-right-sm">
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
      </div>
    );
  }
}
```

## Small donut utilization chart with static thresholds with right aligned legend and bottom aligned subtitle
```js
import React from 'react';
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';

<div>
  <div className="donut-threshold-chart-legend-right-subtitle-bottom-sm">
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
</div>
```

## Small donut utilization chart with static thresholds with bottom aligned legend and right aligned subtitle
```js
import React from 'react';
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';

<div>
  <div className="donut-threshold-chart-legend-bottom-subtitle-right-sm">
    <ChartDonutThreshold
      ariaDesc="Storage capacity"
      ariaTitle="Donut utilization chart with static threshold example"
      constrainToVisibleArea={true}
      data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
      height={225}
      labels={({ datum }) => datum.x ? datum.x : null}
      legendPosition="bottom"
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
        subTitle="of 100 GBps"
        title="45%"
        thresholds={[{ value: 60 }, { value: 90 }]}
      />
    </ChartDonutThreshold>
  </div>
</div>
```

## Tips

- For single data points or zero values, you may want to set the `domain` prop. See Victory's <a href="https://formidable.com/open-source/victory/docs/faq/#my-axis-labels-are-showing-very-small-numbers-how-do-i-fix-this" target="_blank">FAQ</a>
- `ChartLegend` may be used as a standalone component, instead of using `legendData` and `legendPosition`

## Docs
Currently, the generated documention below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

 - For `ChartLegend` props, see <a href="https://formidable.com/open-source/victory/docs/victory-legend" target="_blank">VictoryLegend</a>
 - For `ChartDonutThreshold` & `ChartDonutUtilization` props, see <a href="https://formidable.com/open-source/victory/docs/victory-pie" target="_blank">VictoryPie</a>
