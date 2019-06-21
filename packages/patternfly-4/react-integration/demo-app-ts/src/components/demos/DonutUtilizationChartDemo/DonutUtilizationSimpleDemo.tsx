import React from 'react';
import { ChartDonutUtilization } from '@patternfly/react-charts';

export class DonutUtilizationSimpleDemo extends React.Component {
  render() {
    return (
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
    )
  }
}
