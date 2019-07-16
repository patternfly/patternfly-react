---
title: 'Donut utilization'
section: 'charts'
typescript: true
propComponents: ['ChartDonutThreshold', 'ChartDonutUtilization']
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
      ariaDesc="Storage capacity"
      ariaTitle="Donut utilization chart example"
      data={{ x: 'GBps capacity', y: 75 }}
      labels={datum => datum.x ? `${datum.x}: ${datum.y}%` : null}
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
            data={{ x: 'GBps capacity', y: used }}
            labels={datum => datum.x ? `${datum.x}: ${datum.y}%` : null}
            legendData={[{ name: `Storage capacity: ${spacer}${used}%` }, { name: 'Unused' }]}
            legendOrientation="vertical"
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
            data={{ x: 'GBps capacity', y: used }}
            invert
            labels={datum => datum.x ? `${datum.x}: ${datum.y}%` : null}
            legendData={[{ name: `Storage capacity: ${spacer}${used}%` }, { name: 'Unused' }]}
            legendOrientation="vertical"
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
            data={{ x: 'Storage capacity', y: used }}
            donutHeight={230}
            height={300}
            labels={datum => datum.x ? `${datum.x}: ${datum.y}%` : null}
            legendData={[{ name: `Storage capacity: ${spacer}${used}%` }, { name: 'Unused' }]}
            legendOrientation="vertical"
            legendPosition="bottom"
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
      data={{ x: 'Storage capacity', y: 45 }}
      donutHeight={230}
      height={275}
      labels={datum => datum.x ? `${datum.x}: ${datum.y}%` : null}
      legendData={[{ name: `Storage capacity: 45%` }, { name: 'Unused' }]}
      legendPosition="bottom"
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
      data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
      labels={datum => datum.x ? datum.x : null}
    >
      <ChartDonutUtilization
        data={{ x: 'Storage capacity', y: 45 }}
        labels={datum => datum.x ? `${datum.x}: ${datum.y}%` : null}
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
            data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
            labels={datum => datum.x ? datum.x : null}
            width={500}
          >
            <ChartDonutUtilization
              data={{ x: 'Storage capacity', y: used }}
              labels={datum => datum.x ? `${datum.x}: ${datum.y}%` : null}
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
            data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 20%', y: 20 }]}
            invert
            labels={datum => datum.x ? datum.x : null}
            width={500}
          >
            <ChartDonutUtilization
              data={{ x: 'Storage capacity', y: used }}
              labels={datum => datum.x ? `${datum.x}: ${datum.y}%` : null}
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
            data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
            height={350}
            labels={datum => datum.x ? datum.x : null}
            legendPosition="bottom"
            width={230}
          >
            <ChartDonutUtilization
              data={{ x: 'Storage capacity', y: used }}
              labels={datum => datum.x ? `${datum.x}: ${datum.y}%` : null}
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
      data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
      donutHeight={230}
      height={275}
      labels={datum => datum.x ? datum.x : null}
      legendPosition="bottom"
      width={675}
    >
      <ChartDonutUtilization
        data={{ x: 'Storage capacity', y: 45 }}
        labels={datum => datum.x ? `${datum.x}: ${datum.y}%` : null}
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
      data={{ x: 'Storage capacity', y: 75 }}
      height={150}
      labels={datum => datum.x ? `${datum.x}: ${datum.y}%` : null}
      subTitle="of 100 GBps"
      title="75%"
      width={150}
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
            data={{ x: 'Storage capacity', y: used }}
            height={150}
            labels={datum => datum.x ? `${datum.x}: ${datum.y}%` : null}
            legendData={[{ name: `Storage capacity: ${spacer}${used}%` }, { name: 'Unused' }]}
            legendOrientation="vertical"
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
      data={{ x: 'Storage capacity', y: 45 }}
      donutHeight={150}
      height={175}
      labels={datum => datum.x ? `${datum.x}: ${datum.y}%` : null}
      legendData={[{ name: `Storage capacity: 45%` }, { name: 'Unused' }]}
      legendOrientation="vertical"
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
      data={{ x: 'Storage capacity', y: 45 }}
      donutHeight={150}
      height={200}
      labels={datum => datum.x ? `${datum.x}: ${datum.y}%` : null}
      legendData={[{ name: `Storage capacity: 45%` }, { name: 'Unused' }]}
      legendPosition="bottom"
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
      data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
      height={175}
      labels={datum => datum.x ? datum.x : null}
      width={175}
    >
      <ChartDonutUtilization
        data={{ x: 'Storage capacity', y: 45 }}
        labels={datum => datum.x ? `${datum.x}: ${datum.y}%` : null}
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
            data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
            height={175}
            labels={datum => datum.x ? datum.x : null}
            width={425}
          >
            <ChartDonutUtilization
              data={{ x: 'Storage capacity', y: used }}
              labels={datum => datum.x ? `${datum.x}: ${datum.y}%` : null}
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
      data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
      donutHeight={175}
      height={200}
      labels={datum => datum.x ? datum.x : null}
      subTitlePosition="bottom"
      width={425}
    >
      <ChartDonutUtilization
        data={{ x: 'Storage capacity', y: 45 }}
        labels={datum => datum.x ? `${datum.x}: ${datum.y}%` : null}
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
      data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
      donutHeight={175}
      height={225}
      labels={datum => datum.x ? datum.x : null}
      legendPosition="bottom"
      subTitlePosition="right"
      width={675}
    >
      <ChartDonutUtilization
        data={{ x: 'Storage capacity', y: 45 }}
        labels={datum => datum.x ? `${datum.x}: ${datum.y}%` : null}
        legendData={[{ name: `Storage capacity: 45%` }, { name: 'Warning threshold at 60%' }, { name: 'Danger threshold at 90%' }]}
        subTitle="of 100 GBps"
        title="45%"
        thresholds={[{ value: 60 }, { value: 90 }]}
      />
    </ChartDonutThreshold>
  </div>
</div>
```
