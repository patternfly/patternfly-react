---
title: 'Donut utilization'
section: 'charts'
---

import { ChartDonutThreshold, ChartDonutUtilization, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';
import './chart-donut-utilization.scss';

## Simple donut utilization chart
```js
import React from 'react';
import { ChartDonutUtilization } from '@patternfly/react-charts';

<div>
  <div className="donut-utilization-chart">
    <ChartDonutUtilization
      data={{ x: 'GBps capacity', y: 75 }}
      labels={datum => datum.x ? `${datum.x} - ${datum.y}%` : null}
      subTitle="of 100 GBps"
      title="75%"
    />
  </div>
</div>
```

## Simple donut utilization chart with right-aligned legend
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
        <div className="donut-utilization-chart-horz">
          <ChartDonutUtilization
            data={{ x: 'GBps capacity', y: used }}
            labels={datum => datum.x ? `${datum.x} - ${datum.y}%` : null}
            legendData={[{ name: `GBps capacity - ${spacer}${used}%` }, { name: 'Unused' }]}
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

## Simple, green donut utilization chart with right-aligned legend
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
        <div className="donut-utilization-chart-horz">
          <ChartDonutUtilization
            data={{ x: 'GBps capacity', y: used }}
            labels={datum => datum.x ? `${datum.x} - ${datum.y}%` : null}
            legendData={[{ name: `GBps capacity - ${spacer}${used}%` }, { name: 'Unused' }]}
            subTitle="of 100 GBps"
            title={`${used}%`}
            themeColor={ChartThemeColor.green}
            themeVariant={ChartThemeVariant.light}
            thresholds={[{ value: 60 }, { value: 90 }]}
            width={435}
          />
        </div>
      </div>
    );
  }
}
```

## Simple donut utilization chart with bottom-aligned legend
```js
import React from 'react';
import { ChartDonutUtilization } from '@patternfly/react-charts';

<div>
  <div className="donut-utilization-chart-vert">
    <ChartDonutUtilization
      data={{ x: 'GBps capacity', y: 45 }}
      donutOrientation="top"
      height={275}
      labels={datum => datum.x ? `${datum.x} - ${datum.y}%` : null}
      legendData={[{ name: `GBps capacity - 45%` }, { name: 'Unused' }]}
      legendOrientation="horizontal"
      legendWidth={282}
      subTitle="of 100 GBps"
      title="45%"
      thresholds={[{ value: 60 }, { value: 90 }]}
      width={300}
    />
  </div>
</div>
```

## Simple donut utilization chart with left-aligned legend
```js
import React from 'react';
import { ChartDonutUtilization } from '@patternfly/react-charts';

<div>
  <div className="donut-utilization-chart-horz-sm">
    <ChartDonutUtilization
      data={{ x: 'GBps capacity', y: 45 }}
      donutOrientation="right"
      labels={datum => datum.x ? `${datum.x} - ${datum.y}%` : null}
      legendData={[{ name: `GBps capacity - 45%` }, { name: 'Unused' }]}
      subTitle="of 100 GBps"
      title="45%"
      thresholds={[{ value: 60 }, { value: 90 }]}
      width={425}
    />
  </div>
</div>
```

## Donut utilization chart with static thresholds
```js
import React from 'react';
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';

<div>
  <div className="donut-threshold-chart-horz">
    <ChartDonutThreshold
      data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
      labels={datum => datum.x ? datum.x : null}
      width={475}
    >
      <ChartDonutUtilization
        data={{ x: 'GBps capacity', y: 45 }}
        labels={datum => datum.x ? `${datum.x} - ${datum.y}%` : null}
        subTitle="of 100 GBps"
        title="45%"
      />
    </ChartDonutThreshold>
  </div>
</div>
```

## Donut utilization chart with static thresholds and right-aligned legend
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
        <div className="donut-threshold-chart-horz">
          <ChartDonutThreshold
            data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
            labels={datum => datum.x ? datum.x : null}
            width={492}
          >
            <ChartDonutUtilization
              data={{ x: 'GBps capacity', y: used }}
              labels={datum => datum.x ? `${datum.x} - ${datum.y}%` : null}
              legendData={[{ name: `GBps capacity - ${used}%` }, { name: 'Warning threshold at - 60%' }, { name: 'Danger threshold at - 90%' }]}
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

## Green donut utilization chart with static thresholds and right-aligned legend
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
        <div className="donut-threshold-chart-horz">
          <ChartDonutThreshold
            data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
            labels={datum => datum.x ? datum.x : null}
            width={492}
          >
            <ChartDonutUtilization
              data={{ x: 'GBps capacity', y: used }}
              labels={datum => datum.x ? `${datum.x} - ${datum.y}%` : null}
              legendData={[{ name: `GBps capacity - ${used}%` }, { name: 'Warning threshold at - 60%' }, { name: 'Danger threshold at - 90%' }]}
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

## Donut utilization chart with static thresholds and bottom-aligned legend
```js
import React from 'react';
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';

<div>
  <div className="donut-threshold-chart-vert">
    <ChartDonutThreshold
      data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
      donutOrientation="top"
      height={325}
      labels={datum => datum.x ? datum.x : null}
      width={275}
    >
      <ChartDonutUtilization
        data={{ x: 'GBps capacity', y: 45 }}
        labels={datum => datum.x ? `${datum.x} - ${datum.y}%` : null}
        legendData={[{ name: `GBps capacity - 45%` }, { name: 'Warning threshold at - 60%' }, { name: 'Danger threshold at - 90%' }]}
        subTitle="of 100 GBps"
        title="45%"
      />
    </ChartDonutThreshold>
  </div>
</div>
```

## Donut utilization chart with static thresholds and left-aligned legend
```js
import React from 'react';
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';

<div>
  <div className="donut-threshold-chart-horz-sm">
    <ChartDonutThreshold
      data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
      donutOrientation="right"
      labels={datum => datum.x ? datum.x : null}
      width={475}
    >
      <ChartDonutUtilization
        data={{ x: 'GBps capacity', y: 45 }}
        labels={datum => datum.x ? `${datum.x} - ${datum.y}%` : null}
        legendData={[{ name: `GBps capacity - 45%` }, { name: 'Warning threshold at - 60%' }, { name: 'Danger threshold at - 90%' }]}
        subTitle="of 100 GBps"
        title="45%"
      />
    </ChartDonutThreshold>
  </div>
</div>
```
