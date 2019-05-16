---
title: 'Donut threshold'
section: 'charts'
---

import { ChartDonutThreshold, ChartDonutUtilization, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';
import './chart-donut-threshold.scss';

## Donut threshold chart
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

## Donut threshold chart with right-aligned legend
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
            width={475}
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

## Green donut threshold chart with right-aligned legend
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
            width={475}
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

## Donut threshold chart with bottom-aligned legend
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

## Donut threshold chart with left-aligned legend
```js
import React from 'react';
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';

<div>
  <div className="donut-threshold-chart-horz">
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
